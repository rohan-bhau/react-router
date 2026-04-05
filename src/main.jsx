import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './Root.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Github, { githubInfo } from './components/Github/Github.jsx';
import Posts from './components/Posts/Posts.jsx';
import Post from './components/Posts/Post.jsx';
import PostDetail from './components/Posts/PostDetail.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: Root,
//     children: [
//       {
//         path: "",
//         Component: Home,
//       },
//       {
//         path: "about",
//         Component: About,
//       },
//       {
//         path: "Contact",
//         Component: Contact,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={Root}>
      <Route path="" Component={Home} />
      <Route path="about" Component={About} />
      <Route path="contact" Component={Contact} />
      <Route path="user/:userId" Component={User} />
      <Route loader={githubInfo} path="github" Component={Github} />
      <Route
        path="posts"
        Component={Posts}
        loader={() => fetch("https://jsonplaceholder.typicode.com/posts")}
      />
      <Route
        path="posts/:postId"
        loader={({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)}
        Component={PostDetail}
      />
    </Route>,
  ),
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
