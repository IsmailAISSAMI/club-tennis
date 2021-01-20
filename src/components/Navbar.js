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
            <div class="container">
                <header class="blog-header py-3">
                    <div class="row flex-nowrap justify-content-between align-items-center">
                    <div class="col-4 pt-1">
                        <a class="link-secondary d-none" href="#">Subscribe</a>
                    </div>
                    <div class="col-4 text-center">
                        <Link to="/" className="blog-header-logo"><img src="./images/logo-nav-nobg.png" alt="Tennis club logo" width="100" height="100" /></Link>
                    </div>
                    <div class="col-4 d-flex justify-content-end align-items-center">
                        <a class="link-secondary" href="#" aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                        </a>
                        <a class="btn btn-sm btn-outline-secondary" href="#">S'inscrire</a>
                        <a class="btn btn-sm btn-outline-secondary ml-2" href="#">Se connecter</a>
                    </div>
                    </div>
                </header>

                <div class="nav-scroller py-1 mb-2">
                    <nav class="nav d-flex justify-content-between">
                    
                    
                    <a class="p-2 link-secondary" href="#">Le club</a>
                    <a class="p-2 link-secondary" href="#">Compétition</a>
                    <a class="p-2 link-secondary" href="#">Programmes</a>
                    <a class="p-2 link-secondary" href="#">Actualités</a>
                    <a class="p-2 link-secondary" href="#">Réservations</a>
                    <a class="p-2 link-secondary" href="#">Contact</a>

                    </nav>
                </div>
            </div>
            <Switch>
                <Route exact path="/" />
            </Switch>
        </Router>
    )
}

export default Navbar
