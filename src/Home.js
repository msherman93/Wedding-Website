import React, {Component} from 'react';
import image from './assets/image.jpg';
import './Home.css';
import StickyHeader from "./components/StickyHeader";
import {Scroll} from 'react-scroll';

export default class Home extends Component {
    render() {
        return (
            <div className={"Home"}>
                <StickyHeader/>
                <div className={'image'}>
                    <img src={image} alt=''/>
                </div>
                <div className={'body'}>
                    <h1><u>
                        {'Information'}
                    </u></h1>
                    <h3>
                        {'Ceremony'}
                    </h3>
                    <p>
                        {'May 28th, 2019 at 2PM'}
                    </p>
                    <p>
                        {'Holy Rosary Church'}
                    </p>
                    <p>
                        {'Reception: McMenamins'}
                    </p>
                </div>
            </div>
        );
    }
}