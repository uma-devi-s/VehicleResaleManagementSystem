
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import Index from "views/Index.js";


import SignUp from "views/pages/SignUp";
import UserReg from "views/pages/UserReg";
import VehicleReg from "views/pages/VehicleReg";
import UserLogin from "views/pages/UserLogin";
import AdminLogin from "views/pages/AdminLogin";
import AboutUs from "views/pages/AboutUs";
import OwnerShip from "views/pages/OwnerShip";
import FeedBack from "views/pages/FeedBack";
import PopularBike from "views/pages/PopularBike";
import PopularCar from "views/pages/PopularCar";
import Search from "views/pages/Search";
import ThankYou from "views/pages/ThankYou";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route path="/SignUp" render={(props) => <SignUp {...props} />} />
        <Route path="/UserReg" render={(props) => <UserReg {...props} />} />
        <Route path="/VehicleReg" render={(props) => <VehicleReg {...props} />} />
        <Route path="/UserLogin" render={(props) => <UserLogin {...props} />} />
        <Route path="/AdminLogin" render={(props) => <AdminLogin {...props} />} />
        <Route path="/AboutUs" render={(props) => <AboutUs {...props} />} />
        <Route path="/OwnerShip" render={(props) => <OwnerShip {...props} />} />
        <Route path="/FeedBack" render={(props) => <FeedBack {...props} />} />
        <Route path="/PopularBike" render={(props) => <PopularBike {...props} />} />
        <Route path="/PopularCar" render={(props) => <PopularCar {...props} />} />
        <Route path="/Search" render={(props) => <Search {...props} />} />
        <Route path="/ThankYou" render={(props) => <ThankYou {...props} />} />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>
);
