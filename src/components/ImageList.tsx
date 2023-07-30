import React from 'react';

interface ImageListProps {
  imageUrls: string[];
}

const ImageList: React.FC<ImageListProps> = ({ imageUrls }) => {
  return (
    {imageUrls.map((url, index) => (
        <div className='cardWrapper'>
            <img className='card'
                key={index}
                src={url}
                alt={`Image ${index}`}
                style={{
                width: '200px',
                height: 'auto',
                margin: '5px',
                order: imageUrls.length - index, // To maintain the overlapping order
                }}
            />
        </div>
    ))}
  );
};

export default ImageList;
