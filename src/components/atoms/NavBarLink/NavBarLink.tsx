import { NavLink } from 'react-router-dom';

import { INavBarLinkProps } from './interfaces';
import './styles.scss';

function NavBarLink({
  to, children, className, ...rest
}: INavBarLinkProps) {
  const classes = [
    'navbar__link',
    className,
  ].join(' ');

  return (
    <NavLink
      to={to}
      className={classes}
      {...rest}
    >
      {children}
    </NavLink>
  );
}

export { NavBarLink };
