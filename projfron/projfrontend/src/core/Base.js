import React from 'react'
import Menu from './nav';


const Base = ({
    title = "My Title",
    description = "Welcom to Home",
    className = "bg-dark text-white p-4",
    children
})=> {
    return (
        <div>
            <Menu />
            <div>
                <div className="container-fluid">
                    <div className="jubotron bg-dark text-white text-center">
                        <h2 className="diaplay-4">{title}</h2>
                        <p className="lead">{description}</p>
                    </div>
                </div>
                    <div className={className}>{children}</div>
            </div>
            <footer className="footer bg-dark mt-auto py-3">
                <div className="contaier-fluid bg-success text-white text-center">
                    <h4>if you got any questions, feel free to reach out</h4>
                    <button className="btn btn-warning btn-lg">
                        contact us
                    </button>
                </div>
                <div className="container">
                    <span className="text-muted">An amazing <span className="text-white">mern</span> bootcamp</span>
                </div>
            </footer>
        </div>
    )   
}

export default Base;
