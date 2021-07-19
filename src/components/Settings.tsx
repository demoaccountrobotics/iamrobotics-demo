import Toggle from './Toggle';
import { RobotDetail } from './App';
import './Settings.scss';

const Settings = ({ robotStatusList }:any) => {
  const renderedList = () => {
    return robotStatusList.map((robotStatus:RobotDetail, idx:number) => 
      <Toggle key={idx} name={robotStatus.name} status={robotStatus.status} />
    )
  }
  
  return ( 
    <div className="settings">{renderedList()}</div>
  );
};

export default Settings;
