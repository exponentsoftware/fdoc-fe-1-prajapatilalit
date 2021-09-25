import React from "react";

const Album = (props) => {
  return (
    <>
      <div className="album">
        <div className="inside-box">
          <img src={props.albumCover} alt="Album-cover" className="album_img" />
          <div className="album_info">
            <p>{props.album}</p>
            <span className="album_category">{props.artist}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Album;
