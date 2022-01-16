import React, { useState, useEffect } from 'react'


const Deep = ({inputText}) => {
    
    const [ans, setAns] = useState("");

    const deepai = require('deepai'); 

    deepai.setApiKey('84d1bd13-7e87-44bb-b096-fad82e53ceeb');

    useEffect(() => {
        (async function() {
            var resp = await deepai.callStandardApi("summarization", {
                    text: inputText,
            });
            console.log(resp);
            setAns(resp.output);
        })()
    }, [])

    return <h1>{ans}</h1>
}

export default Deep
