import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import Profile from './components/Profile.jsx';
import Dashboard from './components/Dashboard.jsx';
import PublicPolls from './components/PublicPolls.jsx';
import PollCreate from './components/poll/PollCreate.jsx';
import PollEdit from './components/poll/PollEdit.jsx';
import PollDetail from './components/poll/PollDetail.jsx';
import SharedPoll from './components/SharedPoll.jsx'; // Import the new component
import PrivateRoute from './components/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/polls",
    element: <PublicPolls />,
  },
  {
    path: "/polls/create",
    element: (
      <PrivateRoute>
        <PollCreate />
      </PrivateRoute>
    ),
  },
  {
    path: "/polls/:pollId/update",
    element: (
      <PrivateRoute>
        <PollEdit />
      </PrivateRoute>
    ),
  },
  {
    path: "/polls/:pollId",
    element: <PollDetail />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/share/:pollId", // New route for shared polls
    element: <SharedPoll />,
  },
]);

export default router;
