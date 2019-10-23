import React, { Component} from 'react'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'


class Content extends Component {

    projects = [
        {
            title: 'Forget-Fills',
            image: './forgetfills.png',
            blurb: 'Image and Description'
        }, {
            title: 'Peer-2-Here',
            image: './p2hprofile.png',
            blurb: 'Image and Description'
        }, {
            title: 'Whose Wine Is It?',
            image: './wwiisearch.png',
            blurb: 'Image and Description'
        },
    ]

    render () {

        return (
            <main>
                <Route exact path="/" component={ Home } />
                <Route path="/about" render={
                    () => <About about={this.about} />
                } />
                
                <Route path="/projects" render={
                    () => <Projects projects={this.projects} />
                } />
            </main>
        )
    }
}
export default Content