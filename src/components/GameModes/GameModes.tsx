"use client";
import {
  StyledImage,
  StyledGameModeWrapper,
  StyledModeTitle,
  StyledWrapper,
} from "./styles";
import myImage from "../../utils/s-l1600.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@chakra-ui/react";

type Props = {
  gameModes: string[];
  movieTitle: string;
};

function GameModes({ gameModes }: Props) {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/random-image");
  };
  return (
    <>
      <StyledWrapper>
        {gameModes.map((mode) => {
          return (
            <StyledGameModeWrapper onClick={clickHandler} key={mode}>
              <StyledModeTitle>{mode}</StyledModeTitle>
              <StyledImage
                src={myImage}
                alt="Your Image"
                width={350}
                height={450}
              ></StyledImage>
            </StyledGameModeWrapper>
          );
        })}
      </StyledWrapper>
    </>
  );
}

export default GameModes;
