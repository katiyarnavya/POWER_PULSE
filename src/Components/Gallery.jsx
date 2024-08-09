import React from 'react'

const Gallery = () => {
    const gallery = ["/img1.jpg","/img2.jpg","/img3.jpg","/img5.jpeg","/img6.jpg","/img8.jpeg","/bmi.jpg", "/img4.png","/img10.webp"]
  return (
    <section className='gallery'>
        <h1>BETTER BEATS BEST</h1>
        <div className="images">
            <div>
                {gallery.slice(0, 3).map((element, index) => (
                    <img key = {index} src= {element} alt='galleryImage'/>
                ))}
            </div>
            <div>
                {gallery.slice(3, 6).map((element, index) => (
                    <img key = {index} src= {element} alt='galleryImage'/>
                ))}
            </div>
            <div>
                {gallery.slice(6, 9).map((element, index) => (
                    <img key = {index} src= {element} alt='galleryImage'/>
                ))}
            </div>
        </div>

      
    </section>
  )
}

export default Gallery
