import React from 'react'
import Gallery from 'react-grid-gallery';
import './gridimages.css'

const GridImages = () => {

  const IMAGES =
  [{
      src: "./assets/images/grid/1.jpg",
      thumbnail: "./assets/images/grid/1.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "habitacion tipo"
  },
  {
      src: "./assets/images/grid/2.jpg",
      thumbnail: "./assets/images/grid/2.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "habitacion tipo"
  },

  {
      src: "./assets/images/grid/3.jpg",
      thumbnail: "./assets/images/grid/3.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "habitacion tipo"
  }, 
  {
      src: "./assets/images/grid/4.jpg",
      thumbnail: "./assets/images/grid/4.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "habitacion tipo"
  },
  {
      src: "./assets/images/grid/5.jpg",
      thumbnail: "./assets/images/grid/5.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "habitacion tipo"
  },

  {
      src: "./assets/images/grid/6.jpg",
      thumbnail: "./assets/images/grid/6.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "habitacion tipo"
  }, 

  {
    src: "./assets/images/grid/7.jpg",
    thumbnail: "./assets/images/grid/7.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "habitacion tipo"
  }, 

  {
    src: "./assets/images/grid/8.jpg",
    thumbnail: "./assets/images/grid/8.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "habitacion tipo"
  }, 
]

  return (
    <div className='gridImages'>
        <h2 className='gridImagesTitle'>Nuestros servicios</h2>
        <Gallery images={IMAGES} />
    </div>
  )
}

export default GridImages