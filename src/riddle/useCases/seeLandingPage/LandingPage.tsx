import { getFormattedDate, getInterval, getRandomRiddleId } from './LandingPageService';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Riddle } from '../../domain/riddleService/types';

export const LandingPage = () => {
    const [ riddleId, setRiddleId ] = React.useState<string>('');
    const date = new Date();

    useEffect(() => {
        fetch('http://localhost:3000/riddles').then((res) => res.json()).then((data: Riddle[]) => {
            setRiddleId(getRandomRiddleId(data))
        })
    }, [])

    return <div>
        <p data-test="work-interval-text">{getInterval(date)}</p>
        <p data-test="timestamp-text">{getFormattedDate(date)}</p>
        <p data-test="welcome-message">Welcome here</p>

        {riddleId && <Link to={`/riddle/${riddleId}`} data-test="random-riddle-control">See a random riddle</Link>}
    </div>;
};
