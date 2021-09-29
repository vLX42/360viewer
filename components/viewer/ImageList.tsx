import { StyledImageList } from "./viewer.styled";
import { IMAGE_URL, IMAGE_COUNT } from "./constants";

export const ImageList = () => (
  <StyledImageList>
    {[...Array(IMAGE_COUNT)].map((_, i) => (
      <img
        key={i}
        width={560}
        height={560}
        alt={"Image " + i}
        src={IMAGE_URL + (i + 1)}
        data-image-id={i}
      />
    ))}
  </StyledImageList>
);
