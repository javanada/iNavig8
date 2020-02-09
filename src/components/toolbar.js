import React, { Component } from 'react';
import Konva from 'konva';
import { Rect, Text, Image, Circle } from 'react-konva';
import 'bootstrap/dist/css/bootstrap.css';
import useImage from 'use-image';


const LionImageD = () => {
  const [image] = useImage('https://konvajs.org/assets/lion.png');
  return <Image x={10} y={90} scaleX={0.4} scaleY={0.4} draggable image={image} />;
};

const LionImage = () => {
  const [image] = useImage('https://konvajs.org/assets/lion.png');
  return <Image x={10} y={90} scaleX={0.4} scaleY={0.4} image={image} />;
};


const newRectangle = (target) => ({
  // x: stage.getPointerPosition().x,
  // y: stage.getPointerPosition().y,
  x: 250,
  y: 250,
  height: target.height,
  width: target.width,
  key: target.ref + 1
});


class ToolBar extends Component {

  constructor() {
    super()
    this.state = {
      canvas: [
        {
          x: 250,
          y: 25,
          height: 100,
          width: 50
        }
      ]
    }
  }

  handleDragStart = e => {

    e.target.setAttrs({
      shadowOffset: {
        x: 5,
        y: 5
      },
      scaleX: 1.1,
      scaleY: 1.1
    });
  };

  handleDragEnd = e => {
    console.log("new");
    console.log(this.refs.bigStage);
    console.log(this.state.canvas.length);
    console.log(e.target);

    this.setState(prevState => ({
      canvas: [...prevState.canvas, { ...newRectangle(e.target) }]
    }));

    // put draggable back to original location
    var rect = this.refs.draggableRect;
    rect.position({ x: 80, y: 100 });
    rect.getStage().draw();

    e.target.to({
      duration: 0.6,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 0,
      shadowOffsetY: 0
    });
  };

  render() {
    return (
    <>
    <Rect
      x={10}
      y={30}
      width={120}
      height={650}
      fill="white"
      stroke="lightgrey"
    />

    <LionImage />
    <LionImageD />  
    <Text
      x={15}
      y={170}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      fill="black"
    />
    <Text
      x={15}
      y={170}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      draggable
      onDragStart={this.handleDragStart}
      onDragEnd={this.handleDragEnd}
      fill="black"
    />
    <Text
      x={15}
      y={210}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      fill="black"
    />
    <Text
      x={15}
      y={210}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      draggable
      onDragStart={this.handleDragStart}
      onDragEnd={this.handleDragEnd}
      fill="black"
    />
    <Text
      x={15}
      y={250}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      fill="black"
    />
    <Text
      x={15}
      y={250}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      draggable
      onDragStart={this.handleDragStart}
      onDragEnd={this.handleDragEnd}
      fill="black"
    />
    <Text
      x={15}
      y={290}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      fill="black"
    />
    <Text
      x={15}
      y={290}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      draggable
      onDragStart={this.handleDragStart}
      onDragEnd={this.handleDragEnd}
      fill="black"
    />
    <Text
      x={15}
      y={330}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      fill="black"
    />
    <Text
      x={15}
      y={330}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      draggable
      onDragStart={this.handleDragStart}
      onDragEnd={this.handleDragEnd}
      fill="black"
    />
    <Text
      x={15}
      y={370}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      fill="black"
    />
    <Text
      x={15}
      y={370}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      draggable
      onDragStart={this.handleDragStart}
      onDragEnd={this.handleDragEnd}
      fill="black"
    />
    <Text
      x={15}
      y={410}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      fill="black"
    />
    <Text
      x={15}
      y={410}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      draggable
      onDragStart={this.handleDragStart}
      onDragEnd={this.handleDragEnd}
      fill="black"
    />
    <Text
      x={15}
      y={450}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      fill="black"
    />
    <Text
      x={15}
      y={450}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      draggable
      onDragStart={this.handleDragStart}
      onDragEnd={this.handleDragEnd}
      fill="black"
    />
    <Text
      x={15}
      y={490}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      fill="black"
    />
    <Text
      x={15}
      y={490}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      draggable
      onDragStart={this.handleDragStart}
      onDragEnd={this.handleDragEnd}
      fill="black"
    />
    <Text
      x={15}
      y={530}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      fill="black"
    />
    <Text
      x={15}
      y={530}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      draggable
      onDragStart={this.handleDragStart}
      onDragEnd={this.handleDragEnd}
      fill="black"
    />
    <Text
      x={15}
      y={570}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      fill="black"
    />
    <Text
      x={15}
      y={570}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      draggable
      onDragStart={this.handleDragStart}
      onDragEnd={this.handleDragEnd}
      fill="black"
    />
    <Text
      x={15}
      y={610}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      fill="black"
    />
    <Text
      x={15}
      y={610}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      draggable
      onDragStart={this.handleDragStart}
      onDragEnd={this.handleDragEnd}
      fill="black"
    />
    <Text
      x={15}
      y={650}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      fill="black"
    />
    <Text
      x={15}
      y={650}
      fontFamily="FontAwesome"
      text={'\uf0f4'}
      fontSize={20}
      draggable
      onDragStart={this.handleDragStart}
      onDragEnd={this.handleDragEnd}
      fill="black"
    />

    <Rect
      x={20}
      y={50}
      width={20}
      height={20}
      fill="lightgrey"
      shadowBlur={1}
    />

    <Rect
      x={20}
      y={50}
      width={20}
      height={20}
      fill="lightgrey"
      draggable
      onDragStart={this.handleDragStart}
      onDragEnd={this.handleDragEnd}
      shadowBlur={1}
    />
    <Rect
      x={80}
      y={100}
      width={20}
      height={20}
      fill="red"
      shadowBlur={2}
    />

    <Rect
      x={80}
      y={100}
      width={20}
      height={20}
      fill="red"
      name="draggableRect"
      ref="draggableRect"
      draggable
      onDragStart={this.handleDragStart}
      onDragEnd={this.handleDragEnd}
      shadowBlur={2}
    />

    <Circle x={100} y={70} radius={10} fill="lightgrey" shadowBlur={1} />
    <Circle 
      x={100} 
      y={70} 
      radius={10} 
      fill="lightgrey" 
      draggable 
      onDragStart={this.handleDragStart}
      onDragEnd={this.handleDragEnd}
      shadowBlur={1} 
    />

    {this.state.canvas.map(  ({ x, y, height, width }, key) => ( // maps over this.state.canvas objects

          <Rect
            key={key}
            x={x}
            y={y}
            width={width}
            height={height}
            stroke="grey"
            draggable
            fill="black"
            shadowOffset={{ x: 1, y: 1 }}
            onDragStart={this.handleDragStart}
            onDragEnd={this.handleDragEnd}
            onClick={this.handleClick}
          />
    ))}
          
    </>
    )
  }
}


export default ToolBar