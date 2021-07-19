import { useEffect, useState } from "react";
import axios from "axios";
import Settings from "./Settings";
import StageView from "./StageView";
import '../theme.css';
import './App.scss';

const Url = 'https://iamrobotics.vercel.app/api/data'

export interface RobotDetail {
  id: number;
  name: string;
  status: {
    online: boolean;
    operation: boolean;
  }
  coord: {
    x: number
    y: number
  }
}

const App = () => {
  const [robotStatusList, setRobotStatusList] = useState<RobotDetail[]>([])

  useEffect(() => {
    async function fetchData() {
      const {data} = await axios.get(Url);
      setRobotStatusList(data)
    }
    fetchData()
  },[])
  
  return (
    <div className="app">
      <Settings robotStatusList={robotStatusList}/>
      <StageView robotStatusList={robotStatusList}/>
    </div>
  );
};

export default App;
