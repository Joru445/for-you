const imageCount = 50

export const galleryItems = Array.from({ length: imageCount }, (_, i) => {

  const number = i + 1;

  return {
    id: number,
    title: `image-${number}`,
    image: `src/images/${number}.jpg`
  };
});