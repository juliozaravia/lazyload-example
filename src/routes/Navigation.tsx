import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { routes } from './routes';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map((route) => (
              <li key={route.path}>
                <NavLink
                  to={route.to}
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="/*" element={<Navigate to="/lazy-page-one" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
