import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "about",
    path: "/profile",
    element: <Profile />,
  },
  // {
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  {
    name: "Contact",
    path: "/sign-up",
    element: <SignUp />,
  },
  // {
  //   name: "Contact",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
