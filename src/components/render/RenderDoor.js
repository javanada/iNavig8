import React from 'react';
import { Star } from 'react-konva';


function RenderDoor(props) {
             
    return (
        props.objects.map((key) => (

          key.object_type && key.object_type.short_name === "door" &&
            <Star
              key={key.object_id}
              x={key.image_x}
              y={key.image_y}
              object_id={key.object_id}
              numPoints={5}
              innerRadius={5}
              outerRadius={10}
              fill="#cccccc"
              opacity={0.8}
              draggable
              rotation={Math.random() * 180}
              shadowColor="black"
              shadowBlur={10}
              shadowOpacity={0.6}
              onMouseMove={props.onMouseMove}
              onMouseOut={props.onMouseOut}
              handleClick={props.handleClick}
            //   onDragStart={this.handleDragStart}
            //   onDragEnd={this.handleDragEnd}
            />

        )))
}

export default RenderDoor;
