import { useState } from "react";
import { useGesture } from "@use-gesture/react";
import { usePreloadImages } from "../../hooks/usePreLoadImages";
import {
  StyledImageOverlay,
  StyledViewer,
  StyledProgressBar,
  StyledNavigationHelp,
  StyledMiddleSpace,
} from "./viewer.styled";
import { IMAGE_URL, IMAGE_COUNT } from "./constants";
import { ImageList } from "./ImageList";

export const Viewer = () => {
  const { imagesLoaded } = usePreloadImages(
    [...Array(IMAGE_COUNT)].map((_, i) => IMAGE_URL + (i + 1))
  );
  const [activeImage, setActiveImage] = useState(0);
  const bind = useGesture({
    onDrag: ({ offset: [x], initial: [ix] }) => {
      setActiveImage(Math.abs(Math.round((ix + x / 10) % 31)));
    },
  });
  return (
    <StyledViewer activeImage={activeImage}>
      <StyledProgressBar imagesLoaded={imagesLoaded} />
      <ImageList />
      <StyledImageOverlay {...bind()}>
        <h1>ARCHIBALD CHAIR</h1>
        <StyledMiddleSpace />
        <StyledNavigationHelp>Drag to rotate</StyledNavigationHelp>
      </StyledImageOverlay>
    </StyledViewer>
  );
};
