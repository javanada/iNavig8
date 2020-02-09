import React from 'react';
import CircleRedLg from '../toolbar/CircleRedLg';


function RenderCircleRedLg(props) {
             
  return (

    props.objects.map((key) => (
        
      key.object_type && key.object_type.short_name === "red circle lg" &&
        <CircleRedLg
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
          object_id={key.object_id}
          name={key.name}
          onDragStart={props.handleDragCircStart}
          onDragEnd={props.handleDragCircEnd}
          onMouseMove={props.onMouseMove}
          onMouseOut={props.onMouseOut}
          shadowBlur={1}
          handleClick={props.handleClick}
        />

    )))
}

export default RenderCircleRedLg;
