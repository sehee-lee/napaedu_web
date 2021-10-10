import Index from "views/Index.js";
import AdminQ from "views/AdminQ.js";
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
    path: "/adminq",
    name: "adminQ",
    icon: "ni ni-briefcase-24 text-primary",
    component: AdminQ,
    layout: "/admin",
  },
  {
    path: "/napaedu",
    name: "napaEdu",
    icon: "ni ni-books text-green",
    component: Napaedu,
    layout: "/admin",
  },
  {
    path: "/contact-us",
    name: "Contact us",
    icon: "ni ni-circle-08 text-pink",
    component: ContactUs,
    layout: "/auth",
  },
  {
    path: "/index",
    name: "공사중",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  }
];
export default routes;
