import React, {Component} from 'react';

import '../css/Person.css';

export default class Person extends Component {
    render() {
        const {info} = this.props;

        return (
            <div className={'Person-wrapper'}>
                <img
                    alt={''}
                    className={'Person-image'}
                    src={info.image}
                />
                <div className={'Person-text'}>
                    <p><b>{`${info.name} - ${info.role}`}</b></p>
                    <p>{`${info.relation}`}</p>
                    <p>{`${info.bio}`}</p>
                </div>
            </div>
        );
    }
}