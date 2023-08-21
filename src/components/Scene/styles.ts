import styled from "styled-components";
import Image from "next/image";
import theme from "@/theme/theme";

export const StyledWrapper = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  align-items: center;
  justify-content: center;
`;

export const StyledSceneWrapper = styled.div`
  height: 60vh; /* 50% of the viewport height */
  width: 70vw; /* 80% of the viewport width */
  border: 2px solid ${theme.colors.gray900};
`;

export const StyledSceneImg = styled(Image)`
  height: 60vh; /* 50% of the viewport height */
  width: 70vw; /* 80% of the viewport width */
`;
