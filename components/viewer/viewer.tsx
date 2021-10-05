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
import { IMAGE_URL, IMAGE_COUNT, SENSETIVITY } from "./constants";
import { ImageList } from "./ImageList";

export const Viewer = () => {
  const { imagesLoaded } = usePreloadImages(
    [...Array(IMAGE_COUNT)].map((_, i) => IMAGE_URL + (i + 1))
  );
  const [activeImage, setActiveImage] = useState(0);
  const bind = useGesture(
    {
      onDrag: ({ distance: [x], direction: [dx] }) => {
        setActiveImage((ativeImage) => {
          let newActiveImage = activeImage + dx;
          if (newActiveImage > (IMAGE_COUNT - 1) * SENSETIVITY)
            newActiveImage = 0;
          if (newActiveImage < 0)
            newActiveImage = (IMAGE_COUNT - 1) * SENSETIVITY;
          return newActiveImage;
        });
      },
    },
    {
      drag: {
        axis: "x",
      },
    }
  );
  return (
    <StyledViewer activeImage={Math.round(activeImage / SENSETIVITY)}>
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
