import React, { useState } from 'react'
import Click from '../sound/click.mp3'
function Count() {
    const [count, setCount1] = useState(0)
    const [audio, setAudio] = useState(new Audio(Click));
    const AudioPlay = () => {
        audio.play();
    }
    const setCount = () => {
        setCount1(count + 1, (AudioPlay()));
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount()}>Count</button>
        </div>
    )
}

export default Count