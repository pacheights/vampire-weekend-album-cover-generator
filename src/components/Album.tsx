import { ReactElement } from 'react';
import styled from 'styled-components';
import { Image } from '../containers/Generator';

interface Props {
  onPhotoUpload?: (e: any) => void;
  img: Image;
  albumTitle?: string;
}

export function Album({ img, onPhotoUpload, albumTitle }: Props): ReactElement {
  return (
    <div className='photo'>
      <AlbumContainer>
        <Picture className='picture' img={img}>
          {img ? (
            <TextContainer albumTitle={albumTitle}>
              <Futura>VAMPIRE WEEKEND</Futura>
              {albumTitle && <Futura>{albumTitle.toUpperCase()}</Futura>}
            </TextContainer>
          ) : (
            <div className='file'>
              <label className='file-label'>
                <Input
                  className='file-input'
                  type='file'
                  name='photo'
                  accept='image/png, image/jpeg'
                  onInput={onPhotoUpload}
                />
                <span className='file-cta'>
                  <span className='file-icon'>
                    <i className='fas fa-upload'></i>
                  </span>
                  <span className='file-label'>Upload photo</span>
                </span>
              </label>
            </div>
          )}
        </Picture>
      </AlbumContainer>
    </div>
  );
}

type PictureStyleProps = {
  img: Image;
};

const AlbumContainer = styled.div`
  height: 4.5in;
  width: 4.5in;
  max-width: 95vw;
  max-height: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid lightgray;
`;

const Picture = styled.div<PictureStyleProps>`
  height: 90%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('${(props) => props.img || ''}');
  background-color: ${(props) => (props.img ? '#271A2C' : '#c5c5c5')};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-blend-mode: ${(props) => (props.img ? 'exclusion' : 'none')};
  filter: ${(props) =>
    props.img
      ? 'saturate(80%) contrast(100%) sepia(5%) brightness(110%)'
      : 'none'};
`;

const Input = styled.input`
  &:hover {
    cursor: pointer;
  }
`;

const Futura = styled.p`
  font-family: 'Futura' !important;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 12px;
  color: white;
  width: fit-content;
  margin-left: 12px;
`;

const TextContainer = styled.div<{ albumTitle?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.albumTitle ? 'space-between' : 'center'};
  text-align: center;
  align-items: center;
  height: 100%;
  padding: 0.22in 0;
`;
