import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyOne = lazy(() => import('../lazyload/pages/LazyPageOne'));
const LazyTwo = lazy(() => import('../lazyload/pages/LazyPageTwo'));
const LazyThree = lazy(() => import('../lazyload/pages/LazyPageThree'));

export const routes: Route[] = [
  {
    to: '/lazy-page-one',
    path: 'lazy-page-one',
    Component: LazyOne,
    name: 'Lazy-One',
  },
  {
    to: '/lazy-page-two',
    path: 'lazy-page-two',
    Component: LazyTwo,
    name: 'Lazy-Two',
  },
  {
    to: '/lazy-page-three',
    path: 'lazy-page-three',
    Component: LazyThree,
    name: 'Lazy-Three',
  },
];
