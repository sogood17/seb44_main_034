import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Main from './pages/Main';
import SignupSelect from './pages/SignupSelect';
import SignupAgreement from './pages/SignupAgreement';
import UserSignup from './pages/UserSignup';
import OwnerSignup from './pages/OwnerSignup';
import OwnerMyPage from './pages/OwnerMyPage';
import UserMyPage from './pages/UserMyPage';
import OtherUserMyPage from './pages/OtherUserMyPage';
import EditInformationCafePage from './pages/EditInformationCafePage';
import EditMenuCafePage from './pages/EditMenuCafePage';
import EditOwnerMyPage from './pages/EditOwnerMyPage';
import EditPostPage from './pages/EditPostPage';
import EditUserMyPage from './pages/EditUserMyPage';
import PostPage from './pages/PostPage';
import CafePage from './pages/CafePage';
import CreatePostPage from './pages/CreatePostPage';
import AllPostsPage from './pages/AllPostsPage';
import Login from './pages/Login';
import AddCafeInfoPage from './pages/AddCafeInfoPage';
import AddCafeMenuPage from './pages/AddCafeMenuPage';
import EditMenuCafe from './pages/EditMenuCafePage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement:<NotFound/>,
    children: [
      { index: true, element: <Main />},
      { path: '/login', element: <Login /> },
      { path: '/signupselect', element: <SignupSelect /> },
      { path: '/signupagreement', element: <SignupAgreement /> },
      { path: '/usersignup', element: <UserSignup /> },
      { path: '/ownersignup', element: <OwnerSignup /> },
      { path: '/usermy', element: <UserMyPage /> },
      { path: '/ownermy', element: <OwnerMyPage /> },
      { path: '/otherusermy/:id', element: <OtherUserMyPage /> },
      { path: '/usermy/edit/:id', element: <EditUserMyPage /> },
      { path: '/ownermy/edit/:id', element: <EditOwnerMyPage /> },
      { path: '/cafes/:id', element: <CafePage /> },
      { path: '/addcafes/', element: <AddCafeInfoPage /> },
      { path: '/addmenus/:id', element: <AddCafeMenuPage /> },
      { path: '/cafe/edit/information/:id', element: <EditInformationCafePage /> },
      { path: '/cafe/edit/menu/:id', element: <EditMenuCafe /> },
      { path: '/postpage/:postId', element: <PostPage /> },
      { path: '/cafepage/edit/menu/:id', element: <EditMenuCafePage /> },
      { path: '/postpage/:id', element: <PostPage /> },
      { path: '/postpage/create', element: <CreatePostPage /> },
      { path: '/postpage/edit/:postId', element: <EditPostPage /> },
      { path: '/allposts', element: <AllPostsPage /> }


    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
