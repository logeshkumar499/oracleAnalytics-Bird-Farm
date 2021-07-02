import React from 'react';
import './sideNav.css';

function SideNav() {
    return (
        <div className="sidenav">
            <div className="bg-01"></div>
            <div className="bg-02"></div>
            <div className="bg-content">
                <div className="mb-3">
                    <img className="app-logo" src="http://test-hooks-tp.herokuapp.com/static/media/logo.f843544f.svg" alt="Logo" />
                    <p className="app-title">Bird.Money</p>
                </div>
                <a href="/dashboard">Dashboard</a>
                <a href="/farm">Farm</a>
                <a href="/oracleAnalytics">Oracle Analytics</a>
                <a href="/governance">Governance</a>
            </div>
        </div>
    );
}

export default SideNav;
