import React from 'react'
import photos from '../data/photos.json'

export default function HotelImage({ photo, alt, ...placement }) {
  return <img decoding="async" {...photos[photo]} alt={alt} {...placement} />
}
