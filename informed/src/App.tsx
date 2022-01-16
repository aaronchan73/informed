import React, {useState} from 'react';
import Deep from './components/Deep';
import './App.css';

// user input must be greater than 500 characters including spaces (around 70 words)

function App() {

  const testString = "Atrial fibrillation (A-fib) is an irregular and often very rapid heart rhythm (arrhythmia) that can lead to blood clots in the heart. A-fib increases the risk of stroke, heart failure and other heart-related complications. During atrial fibrillation, the heart's upper chambers (the atria) beat chaotically and irregularly out of sync with the lower chambers (the ventricles) of the heart. For many people, A-fib may have no symptoms. However, A-fib may cause a fast, pounding heartbeat (palpitations), shortness of breath or weakness. Episodes of atrial fibrillation may come and go, or they may be persistent. Although A-fib itself usually isn't life-threatening, it's a serious medical condition that requires proper treatment to prevent stroke. Treatment for atrial fibrillation may include medications, therapy to reset the heart rhythm and catheter procedures to block faulty heart signals. A person with atrial fibrillation may also have a related heart rhythm problem called atrial flutter. Although atrial flutter is a different arrhythmia, the treatment is quite similar to atrial fibrillation."

  const [summ, setSumm] = useState("");

  return (<div>
      <h1>simplify</h1>
      <form>
        <input type="text" placeholder="type your text here..." value={summ} onChange={(e) => setSumm(e.target.value)} />
        <input type="submit" value="simplify now"/>
      </form>
      <Deep inputText={summ}/>
    </div>)
}

export default App;