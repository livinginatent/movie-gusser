'use client'
import { StyledSceneImg, StyledSceneWrapper, StyledWrapper } from "./styles";
import myImage from "../../utils/s-l1600.jpg";

type Props = {};

const Scene = (props: Props) => {
  return (
    <>
      <StyledWrapper>
        <StyledSceneWrapper>
          <StyledSceneImg src={myImage} alt="Your Image"></StyledSceneImg>
        </StyledSceneWrapper>
      </StyledWrapper>
    </>
  );
};

export default Scene;
