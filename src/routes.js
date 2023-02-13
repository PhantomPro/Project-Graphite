import Backgroundcolor from "./pages/BackgroundColor/Backgroundcolor";
import Backgroundgradient from "./pages/Backgroundgradient/Backgroundgradient";
import Border from "./pages/Border/Border";
import BorderRadius from "./pages/BorderRadius/BorderRadius";
import Home from "./pages/Home/Home";
import BoxShadow from "./pages/Box/BoxShadow";
import { Navigate } from "react-router-dom";
import Opasity from "./pages/Box/Opasity";
import FontSize from "./pages/Text/FontSize";
import Textcolor from "./pages/Text/Textcolor";
import TextDecoration from "./pages/Text/TextDecoration";
import Texttransform from "./pages/Text/Texttransform";
import LandingPage from "./pages/LandingPage/LandingPage";
import LetterSpacing from "./pages/Text/LetterSpacing";
import Lineheight from "./pages/Text/Lineheight";
import Textalign from "./pages/Text/Textalign";
import FontWeight from "./pages/Text/FontWeight";
import FlexBox from "./pages/FlexBox/FlexBox";
import UserLoginSignup from "./pages/UserLoginSignup/UserLoginSignup";

let router = [
  { path: "/", element: <LandingPage /> },
  { path: "/verification", element: <UserLoginSignup /> },
  { path: "/home", element: <Home /> },
  { path: "/backgroundcolor", element: <Backgroundcolor /> },
  { path: "/backgroundgradient", element: <Backgroundgradient /> },
  { path: "/border", element: <Border /> },
  { path: "/BorderRadius", element: <BorderRadius /> },
  { path: "/box/boxshadow", element: <BoxShadow /> },
  { path: "/box/opasity", element: <Opasity /> },
  { path: "/text/fontsize", element: <FontSize /> },
  { path: "/text/color", element: <Textcolor /> },
  { path: "/text/decoration", element: <TextDecoration /> },
  { path: "/text/transform", element: <Texttransform /> },
  { path: "/text/letterSpacing", element: <LetterSpacing /> },
  { path: "/text/lineheight", element: <Lineheight /> },
  { path: "/text/textalign", element: <Textalign /> },
  { path: "/text/fontweight", element: <FontWeight /> },
  { path: "/flexbox", element: <FlexBox /> },
  { path: "*", element: <Navigate to={"/"} /> },
];

export default router;
