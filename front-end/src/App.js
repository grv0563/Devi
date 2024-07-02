import './App.css';
import DeviStatus from './components/DeviStatus';
import Logs from './components/Logs';
import MainArea from './components/MainArea';
import PromptBar from './components/PromptBar';
import Setting from './components/Setting';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <div className='main_area_and_side_bar'>
        <div className='mainarea'>
          <div className='devi_status'>
            <DeviStatus />
          </div>
          <MainArea />
          <div className='Devi_logs'>
            <Logs/>
          </div>
        </div>

        <div className='sidebar'>
          <SideBar />
          <Setting/>
        </div>

      </div>

      <div className='promptbar'>

        <PromptBar />
      </div>

    </div>
  );
}

export default App;
