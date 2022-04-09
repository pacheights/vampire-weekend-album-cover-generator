import styled from 'styled-components';

export function Logo() {
  return (
    <LogoContainer>
      <Title>Vampire Weekend Album Cover Generator</Title>
      <Icon />
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  margin: 25px 0;
`;

const Title = styled.h1`
  font-family: Helvetica, Arial, 'Noto Sans', sans-serif !important;
  font-weight: bold;
  letter-spacing: 0.8px;
  font-size: 32px;
  margin-right: 12px;
  color: rgb(255, 56, 93);
  width: fit-content;
`;

const PhotoContainer = styled.div<{ scale: number }>`
  height: ${(props) => props.scale * 0.39}in;
  width: ${(props) => props.scale * 0.34}in;
  padding-top: ${(props) => props.scale * 0.04}in;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid lightgray;
`;

const Picture = styled.div<{ scale: number }>`
  height: ${(props) => props.scale * 0.24}in;
  width: ${(props) => props.scale * 0.24}in;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #271a2c;
`;

interface IconProps {
  scale?: number;
}
export const Icon = ({ scale = 1 }: IconProps) => (
  <PhotoContainer className='photo-icon' scale={scale}>
    <Picture scale={scale} />
  </PhotoContainer>
);
