import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const ImageCropper = () => {
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [croppedImageUrl, setCroppedImageUrl] = useState(null);
  const [croppedImageLoaded, setCroppedImageLoaded] = useState(false);
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setSrc(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const onCropComplete = (crop) => {
    makeClientCrop(crop);
  };
  const makeClientCrop = async (crop) => {
    if (src && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(src, crop);
      setCroppedImageUrl(croppedImageUrl);
    }
  };

  const getCroppedImg = (src, crop) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );
        canvas.toBlob((blob) => {
          resolve(URL.createObjectURL(blob));
        }, "image/jpg");
      };
    });
  };
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.download = "cropped-image.jpg";
    link.href = croppedImageUrl;
    link.click();
  };

  const handleImageLoaded = () => {
    setCroppedImageLoaded(true);
  };
  return (
    <div>
      <input type="file" accept="image/*" onChange={onSelectFile} />
      {src && (
        <div>
          <ReactCrop
            src={src}
            crop={crop}
            onChange={onCropChange}
            onComplete={onCropComplete}
          >
            <img src={src} />
          </ReactCrop>
          {croppedImageUrl && (
            <div>
              <h2>Cropped Image</h2>
              <img
                src={croppedImageUrl}
                alt="Cropped"
                onLoad={handleImageLoaded}
              />
            </div>
          )}

          <button className="btn btn-success" onClick={handleDownloadClick}>
            Download
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCropper;
