'use client'
import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";
import { movies } from "@/utils/movies";
import { StyledImg, StyledWrapper } from "./styles";

const s3 = new AWS.S3({
  accessKeyId: "AKIA5S6Y5NPOMYYL4TNO",
  secretAccessKey: "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",
  region: "eu-north-1",
});

const ImageGallery: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[] | undefined>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  

  useEffect(() => {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    const folderPath = randomMovie + "/"; // Update with your folder path

    s3.listObjectsV2(
      { Bucket: "movie-guessr", Prefix: folderPath },
      (err, data) => {
        if (err) {
          console.error("Error fetching images:", err);
          return;
        }

        const imageKeys = data?.Contents?.map((obj) => obj.Key);
        if (imageKeys) {
          const randomImageKeys = imageKeys
            .sort(() => 0.5 - Math.random()) // Shuffle the keys
            .slice(0, 5); // Select the first 5 keys

          const urls = randomImageKeys.map((key) => {
            return s3.getSignedUrl("getObject", {
              Bucket: "movie-guessr",
              Key: key,
              Expires: 3600, // URL expiration time in seconds
            });
          });

          setImageUrls(urls);
        }
      }
    );
  }, []);

  useEffect(() => {
 if (currentImageIndex === 5) {
   return; // Stop interval if all images have been displayed
 }
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % (imageUrls?.length || 1)
        
      );
    }, 200);

    return () => clearInterval(interval);
  }, [imageUrls]);
  

  return (
    <>
      <StyledWrapper>
        {imageUrls?.length && (
          <StyledImg
            width={800}
            height={800}
            src={imageUrls[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
          />
        )}
      </StyledWrapper>
    </>
  );
};

export default ImageGallery;
