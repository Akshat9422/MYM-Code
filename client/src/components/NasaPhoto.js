import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Header1 from "./Header1";
import styles from "./NasaPhoto.module.css";
export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchPhoto() {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=zBqpPWFQ6K2Lo6YKrJ4oXLN069BK2c2WQZpI88Hv`
    );
    const data = await res.json();
    setPhotoData(data);
    setLoading(true);
  }

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <>
      <Header1 />
      {loading ? (
        <div className={styles.navPhoto}>
          <img
            src={photoData.url}
            alt={photoData.title}
            className={styles.navImg}
          />
          <div>
            <h1 className={styles.imgTitle}>{photoData.title}</h1>
            <p className={styles.imgDate}>{photoData.date}</p>
            <p className={styles.imgExplanation}>{photoData.explanation}</p>
          </div>
        </div>
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}
