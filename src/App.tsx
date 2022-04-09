import styled from 'styled-components';
import { Logo } from './components';
import { Generator } from './containers/Generator';

const App = () => {
  return (
    <Container>
      <Logo />
      <Generator />
    </Container>
  );
};

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

export default App;
