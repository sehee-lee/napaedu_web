import Index from "views/Index.js";
import Napaedu from "views/Napaedu.js";
import ContactUs from "views/ContactUs.js";

var routes = [
  {
    path: "/index",
    name: "intro",
    icon: "ni ni-tv-2 text-success",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/info",
    name: "napaEdu",
    icon: "ni ni-books text-green",
    component: Napaedu,
    layout: "/napaedu",
  },
  {
    path: "/contact-us",
    name: "Contact us",
    icon: "ni ni-circle-08 text-pink",
    component: ContactUs,
    layout: "/auth",
  }
  // {
  //   path: "/index",
  //   name: "공사중",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Index,
  //   layout: "/admin",
  // }
];
export default routes;
