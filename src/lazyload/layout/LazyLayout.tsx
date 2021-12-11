import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import LazyPageOne from '../pages/LazyPageOne';
import LazyPageTwo from '../pages/LazyPageTwo';
import LazyPageThree from '../pages/LazyPageThree';

const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page!</h1>
      <ul>
        <li>
          <NavLink to="lazy-one">Lazy One</NavLink>
        </li>
        <li>
          <NavLink to="lazy-two">Lazy Two</NavLink>
        </li>
        <li>
          <NavLink to="lazy-three">Lazy Three</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy-one" element={<LazyPageOne />} />
        <Route path="lazy-two" element={<LazyPageTwo />} />
        <Route path="lazy-three" element={<LazyPageThree />} />
        <Route path="*" element={<Navigate replace to="lazy-one" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
