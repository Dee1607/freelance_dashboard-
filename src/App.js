import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Timelogs from "./pages/Timelogs";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <AppLayout>
                        <Home />
                    </AppLayout>
                </Route>
                <Route path="/login">
                    <AppLayout>
                        <Login />
                    </AppLayout>
                </Route>
                <Route path="/register">
                    <AppLayout>
                        <Register />
                    </AppLayout>
                </Route>
                <Route path="/dashboard">
                    <DashboardLayout>
                        <Dashboard />
                    </DashboardLayout>
                </Route>
                <Route path="/timelogs">
                    <DashboardLayout>
                        <Timelogs />
                    </DashboardLayout>
                </Route>

                <Route path="/">
                    <div>404 Page not found.</div>
                </Route>
            </Switch>
        </Router>
    );
}