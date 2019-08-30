import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Find from "./pages/find/Find";
import User from "./pages/user/User";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Find} />
      <Route path="/:id" component={User} />
    </BrowserRouter>
  );
}
