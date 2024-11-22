import { useEffect, useState } from "react";

function ImageSlider({ url }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}`);
      const data = await response.json();
      console.log(data);

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages();
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Data is Loading Please Wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Occured {errorMsg}</div>;
  }

  return <div className="image-slider"></div>;
}

export default ImageSlider;