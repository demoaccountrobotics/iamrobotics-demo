import './StageView.scss';

interface ToggleDetails {
  name: string,
  status: {
    online: boolean,
    operation: boolean
  }
}

const Toggle = (props:ToggleDetails) => {
  return (
    <div className="ui divided list">
      <div className="item menu">
        <div className="right floated content">
          <button className={`ui button ${!props.status.online ? 'green' : 'red'}`}>
            {props.status.online ? 'stop' : 'start'}
          </button>
        </div>
        <div className="content">
          <p>
            <strong>{props.name.toUpperCase()}</strong>
            <br/>
            <strong>status:</strong>{props.status.operation? 'available' : 'low battery'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
