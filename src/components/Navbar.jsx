import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div class="navbar bg-base-100 px-10">
            <div class="navbar-start">
                <a class="btn btn-ghost text-xl">Amazon</a>
            </div>
            
            <div class="navbar-end">
                <Link to="/login" class="btn btn-neutral">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
