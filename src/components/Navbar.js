import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// https://reactrouter.com/web/example/basic
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

function Navbar() {
    return (
        <Router>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Teams-Tennis Club</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav d-flex">
                        <li class="nav-item ml-auto p-2">
                            <a class="nav-link text-white" href="#">Accueil</a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="nav-link text-white" href="#">Club</a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="nav-link text-white" href="#">Planning</a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="nav-link text-white" href="#">Abonnements</a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="nav-link text-white" href="#">Covid-19</a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="nav-link text-white" href="#">Contact</a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="nav-link text-white" href="#">S'inscrire</a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="nav-link text-white" href="#">Se connecter</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" />
            </Switch>
        </Router>
    )
}

export default Navbar
