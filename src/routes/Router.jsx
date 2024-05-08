import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import TodoListPage from '../pages/TodoListPage'
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
   { path: '/', element: <LoginPage /> },
   {path: '/main', element: <TodoListPage />  },
   { path: '*', element: <NotFoundPage /> },
 ]);
 
 function Router() {
   return <RouterProvider router={router} />;
 }
 
 export default Router;