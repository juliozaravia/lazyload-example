import { LazyPageOne, LazyPageThree, LazyPageTwo } from '../lazyload/pages';

interface Route {
  to: string;
  path: string;
  Component: () => JSX.Element;
  name: string;
}

export const routes: Route[] = [
  {
    to: '/lazy-page-one',
    path: 'lazy-page-one',
    Component: LazyPageOne,
    name: 'Lazy-One',
  },
  {
    to: '/lazy-page-two',
    path: 'lazy-page-two',
    Component: LazyPageTwo,
    name: 'Lazy-Two',
  },
  {
    to: '/lazy-page-three',
    path: 'lazy-page-three',
    Component: LazyPageThree,
    name: 'Lazy-Three',
  },
];
