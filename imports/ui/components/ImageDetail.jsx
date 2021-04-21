import React from "react";

const ImageDetail = (props) => {
  // props.image => this is the image object
  // props.image.title
  // props.image.link

  return (
    <li className="media border">
      <div>
        <img className="mr-3" src={props.image.link} />
      </div>
      <div className="media-body">
        <h3 className="media-heading">{props.image.title}</h3>
      </div>
    </li>
  );
};

export default ImageDetail;
