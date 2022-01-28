import { Routes, Route } from 'react-router';

import { Dashboard } from '../pages/Dashboard';
import { Create } from '../pages/Create';

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Dashboard />}
      />
      <Route
        path="/create"
        element={<Create />}
      />
    </Routes>
  );
}

export { Router };
