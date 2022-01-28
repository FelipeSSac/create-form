import { ReactComponentElement } from 'react';
import { NavLinkProps } from 'react-router-dom';

export interface INavBarLinkProps extends NavLinkProps {
  children: ReactComponentElement<any> | string;
}
