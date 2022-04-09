import { useState } from 'react';
import styled from 'styled-components';
import { Album } from '../components';

export type Image = string | null;

export const Generator = () => {
  const [albumTitle, setAlbumTitle] = useState('');
  const handleAlbumTitleChange = (e: any) => setAlbumTitle(e.target.value);
  const [img, setImg] = useState(null as Image);

  const onPhotoUpload = (e: any) => {
    try {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = e.target.result;
        setImg(img);
      };
      reader.readAsDataURL(e.target.files[0]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id='generator-container'>
      <div className='photo-container'>
        <Album
          img={img}
          onPhotoUpload={onPhotoUpload}
          albumTitle={albumTitle}
        />
        <TitleBox>
          <label htmlFor='album-title' className='subtitle'>
            Album title
          </label>
          <input
            className='input'
            id='album-title'
            onChange={handleAlbumTitleChange}
          />
        </TitleBox>
      </div>
    </div>
  );
};

const TitleBox = styled.div`
  margin-top: 10px;
`;
