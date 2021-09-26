import Index from "views/Index.js";
import Profile from "views/Profile.js";
import Maps from "views/examples/Maps.js";
import ContactUs from "views/ContactUs.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/contact-us",
    name: "Contact us",
    icon: "ni ni-circle-08 text-pink",
    component: ContactUs,
    layout: "/auth",
  }
];
export default routes;
