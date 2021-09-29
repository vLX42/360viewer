import { useState, useEffect } from "react";

export const usePreloadImages = (images: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState<number>(0);

  useEffect(() => {
    setImagesLoaded(0);
    //preloading image
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        setImagesLoaded(imagesLoaded => imagesLoaded+1);
      };
    });
  }, []);

  return { imagesLoaded };
};
