import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Dashboard from 'src/pages/Dashboard';
import NotFound from 'src/pages/NotFound';
import ProductList from 'src/pages/ProductList';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';
import EventSupplier from './pages/eventSupplier';
import EventAttendies from './pages/eventAttendies';
import EventOrganizers from './pages/eventOrganizers';
import List from './pages/List';
import Notification from './pages/notifications';
const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'event-supplier', element: <EventSupplier /> },
      { path: 'event-attendies', element: <EventAttendies /> },
      { path: 'event-organizers', element: <EventOrganizers /> },
      { path: 'lists', element: <List /> },
      { path: 'notification', element: <Notification /> },
      // { path: 'customers', element: <CustomerList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      // { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
