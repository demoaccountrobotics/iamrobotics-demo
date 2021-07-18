import Settings from "./Settings";
import StageView from "./StageView";

import '../theme.css'
import './App.scss'

const App = () => {
  // TODO: Create state and pass props to each component
  return (
    <div className="app">
      <Settings />
      <StageView />
    </div>
  );
};

export default App;
