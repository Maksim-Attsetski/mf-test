import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/router/Router';

import { store } from '@packages/shared/src/store';
import { Provider } from 'react-redux';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

container.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
