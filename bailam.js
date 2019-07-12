import riot from 'riot';

import "./tags/homepage.tag";
import "./tags/chả viên rau củ .tag;
import route from "riot-route";
route.base("/");
route("/home", () => {
   const homepage = riot.mount("div#root", "homepage")
})

route("/chavienraucu", ( => {
    const homePage = riot.mount("div#root", "homepage");
})

route.start(true);