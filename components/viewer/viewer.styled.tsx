import styled from "@emotion/styled";
import { IMAGE_COUNT } from "./constants";

export const StyledImageOverlay = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  h1 {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const StyledImageList = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  img {
    display: none;
    transition: opacity 0.05s ease-in-out;
  }
`;

type StyledViewerProps = {
  activeImage: number;
};

export const StyledViewer = styled.div<StyledViewerProps>`
  padding: 10px;
  width: 560px;
  height: 560px;
  position: relative;
  box-shadow: 0 50px 100px rgb(48 72 87 / 5%), 0 5px 15px rgb(0 0 0 / 5%);
  border-radius: 20px;
  [data-image-id="${({ activeImage }) => activeImage}"] {
    display: inherit !important;
  }
`;

type StyledProgressBarProps = {
  imagesLoaded: number;
};

export const StyledProgressBar = styled.div<StyledProgressBarProps>`
  position: absolute;
  background-color: green;
  width: ${({ imagesLoaded }) => (100 / IMAGE_COUNT) * imagesLoaded}%;
  display: ${({ imagesLoaded }) =>
    imagesLoaded === IMAGE_COUNT ? "none" : "inherit"};
  height: 10px;
  z-index: 1;
  top: 10;
`;

export const StyledNavigationHelp = styled.div`
  display: flex;
  align-items: center; /*vertical*/
  justify-content: space-around; /*or space-between*/
  font-size: 30px;
  font-weight: bold;
  color: gray;
  margin-bottom: 20px;
  text-transform: uppercase;
  &::before {
    content: "<";
  }
  &::after {
    content: ">";
  }
`;

export const StyledMiddleSpace = styled.div`
  flex: 1;
`;
