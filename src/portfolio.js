import React, { Component } from "react";
import {Card,CardTitle} from 'react-materialize'

class Portfolio extends Component {
    render() {
        return (
            <div>
                <h2>Portfolio</h2>
                <p>My personal projects are listed bellow:</p>
                <Card className='small'
                      header={<CardTitle image='images/pong_header.png'>Pixel Ping Pong</CardTitle>}
                      actions={[<a href='https://play.google.com/store/apps/details?id=com.jbarros.pixelpong'>Download Game</a>]}>
                </Card>
            </div>
        );
    }
}

export default Portfolio;