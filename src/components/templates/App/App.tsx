import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from '../Layout';

import '../../../assets/styles/globalStyles.scss';

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </StrictMode>
  );
}

export { App };
