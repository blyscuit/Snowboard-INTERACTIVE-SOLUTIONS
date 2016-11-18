import React from 'react'
import { Component } from 'react'
import NextImage from '../assets/next.png'
import PrevImage from '../assets/prev.png'
import BoardImage from '../assets/board.png'
import './HomeView.scss'
import Slider from 'react-slick';
// export const HomeView = () => (
//   <div>
//     <h4>Welcome!</h4>
//     <SimpleSlider></SimpleSlider>
//   </div>
// )

export default class HomeView extends Component{
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.refs.slider.slickNext()
  }
  previous() {
    this.refs.slider.slickPrev()
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      className: 'center',
      centerPadding: '60px',
      centerMode: true,
      slidesToShow:3,
      focusOnSelect:true,
      nextArrow:<img
      alt='Logo'
      className='Logo'
      src={NextImage} />,
      prevArrow:<img
      alt='Logo'
      className='Logo'
      src={PrevImage}/>,
    };
    return (
      <div className='container text-center'>
      <h1 className="title">SNOWBOARDS</h1>
      <p className="subtitle">EOWIF AWEILFHL WEFILHE EAWFHLI EST</p>
      <Slider ref='slider' {...settings}>
      <div><img className="snowboard" src={BoardImage} /><p className="boardName">SNOWBOARD EXTREME SERIES</p></div>
      <div><img className="snowboard" src={BoardImage} /><p className="boardName">SNOWBOARD EXTREME 2</p></div>
      <div><img className="snowboard" src={BoardImage} /><p className="boardName">SNOWBOARD PRO SERIES</p></div>
      <div><img className="snowboard" src={BoardImage} /><p className="boardName">SNOWBOARD EXTREME SERIES 3</p></div>
      <div><img className="snowboard" src={BoardImage} /><p className="boardName">SNOWBOARD AIR SERIES</p></div>
      <div><img className="snowboard" src={BoardImage} /><p className="boardName">SNOWBOARD NORMAL SERIES</p></div>
      </Slider>

      <div style={{textAlign: 'center'}}>
      </div>
      </div>
    );
  }
}
