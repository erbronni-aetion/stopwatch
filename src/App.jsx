import './App.css'

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <p>Stopwatch Demo</p>
        </header>
        <div className="App-content">
          {/*  Implement <Stopwatch />  */}
          <p>00:00:00</p>
        </div>
        <div className='App-instructions'>
          <p>Build a stopwatch with the following features:</p>
          <ul>
            <li>Display time in the following format: `00:00:00` (min:sec:ms)  </li>
            <li>3 actions: Start/Stop, Split and Reset
              <ul>
                <li>Start: starts the stopwatch. Button changes to Stop when stopwatch is running.</li>
                <li>Stop: stops the stopwatch. Button changes to Start when stopwatch is stopped.</li>
                <li>Split: takes a snapshot of the stopwatch and displays under the buttons.</li>
                <li>Reset: resets to initial state (00:00:00 and clears the split times).</li>
              </ul>
            </li>
            <li>Bonus: Write a test to validate the time display logic</li>  
          </ul>
        </div>
    </div>
  );
}

export default App
