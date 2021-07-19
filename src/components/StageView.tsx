import { useEffect, useState } from 'react';
import { Stage, Layer, Circle } from 'react-konva';
import { RobotDetail } from './App';
import './StageView.scss';

const StageView = ({ robotStatusList }:any) => {
  const [robots, setRobots] = useState(robotStatusList);

  useEffect(() => {
    setRobots(robotStatusList)
  }, [robotStatusList])

  return (
    <div className="stage-view">
      <Stage width={600} height={500}>
        <Layer>
          {
            robots.map((robot:RobotDetail) => (
              <Circle
                key={robot.id}
                id={robot.id.toString()}
                x={robot.coord.x}
                y={robot.coord.y}
                numPoints={5}
                radius={18}
                fill={robot.status.online ? '#bee450' :'#eeeeee'}
                stroke={robot.status.operation ? '#21ba45' : 'red'}
                shadowColor="#444444"
                shadowBlur={4}
              />
            ))
        }
        </Layer>
      </Stage>
    </div>
  );
};

export default StageView;

