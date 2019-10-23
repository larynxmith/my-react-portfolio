
import React, { Component } from 'react'

class Projects extends Component {

     

    render() {
        let projects = this.props.projects.map((p, i) => {
            return (
                <container key={i}>
                    <div>
                    <hr />
                    <h2>{p.title}</h2>
                    <img src={p.image} />
                    <h3>{p.blurb}</h3>
                    </div>
                </container>
            )
        })
        return (
            <div>
                <div>
                    <h1>Recent Projects: </h1><br />
                    <div>
                        { projects }
                    </div>
                </div>
            </div>
        )
    }

}

export default Projects