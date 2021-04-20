import React from "react";
import ImageDetail from "./ImageDetail";

const IMAGES = [
  { title: "Pen", link: "https://dummyimage.com/600x400" },
  { title: "Pine Tree", link: "https://dummyimage.com/600x400" },
  { title: "Cone", link: "https://dummyimage.com/600x400" },
];

const ImageList = () => {
  const RenderedImages = IMAGES.map(function (image) {
    return <ImageDetail image={image} />;
  });

  return (
    <div>
      <ul className="media-list list-group">{RenderedImages}</ul>
    </div>
  );
};

export default ImageList;
