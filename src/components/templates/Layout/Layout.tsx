import { Header } from '../../organisms/Header';
import { Router } from '../../../routes';

import './styles.scss';

function Layout() {
  return (
    <div className="body">
      <Header />
      <Router />
    </div>
  );
}

export { Layout };
