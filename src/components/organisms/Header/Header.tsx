import { NavBarLink } from '../../atoms/NavBarLink';

import './styles.scss';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <NavBarLink to="/">
          Dashboard
        </NavBarLink>
        <NavBarLink to="/create">
          Criar um novo
        </NavBarLink>
      </nav>
    </header>
  );
}

export { Header };
