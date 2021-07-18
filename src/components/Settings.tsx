import './Settings.scss';
import { RobotDetail } from './App';

const Settings = ({ robotStatusList }:any) => {
  const renderedList = () => {
    //TODO : Break out into a seperate component.
    return robotStatusList.map((robotStatus:RobotDetail) =>{
      return <div>{robotStatus.id}</div>
    })
  }

  return ( 
    <div className="settings">{renderedList()}</div>
  );
};

export default Settings;
