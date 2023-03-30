import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";

import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setOk(true);
    } else {
      setOk(false);
    }
  });

  return ok ? <Outlet /> : <Spinner />;
}
