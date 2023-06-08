import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
class HeaderComponenet extends Component {
    constructor(props) {
        super(props)
        this.state - {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav class="navbar navbar-dark bg-primary">
                        <div>
                            <a href="/users"></a>
                            User management app
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponenet