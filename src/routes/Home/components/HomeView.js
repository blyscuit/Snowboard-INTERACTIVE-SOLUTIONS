import React from 'react'
import { Component } from 'react'
import NextImage from '../assets/next.png'
import PrevImage from '../assets/prev.png'
import BoardImage from '../assets/board.png'
import BoardImage2 from '../assets/board2.jpg'
import BoardImage3 from '../assets/board3.jpg'
import BoardImage4 from '../assets/board4.jpg'
import BoardImage5 from '../assets/board5.jpg'
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
      nextArrow:<div onClick={this.next} style={{height: 10+'rem',
      width: 3+'rem',
      marginTop: -7+'rem'}}><img
      alt='next'
      className='scrollButton'
      src={NextImage}
      style={{height: 10+'rem',
      width: 5+'rem',
      marginTop: -7+'rem'}}/></div>,
      prevArrow:<div onClick={this.previous} style={{height: 10+'rem',
      width: 3+'rem',
      marginTop: -7+'rem'}}><img
      alt='next'
      className='scrollButton'
      src={PrevImage}
      style={{height: 10+'rem',
      width: 5+'rem',
      marginTop: -7+'rem'}}/></div>,
    };
    return (
      <div className='container text-center'>
      <h1 className="title">SNOWBOARDS</h1>
      <p className="subtitle">EOWIF AWEILFHL WEFILHE EAWFHLI EST</p>
      <Slider ref='slider' {...settings}>
      <div><img className="snowboard" src={BoardImage} /><p className="boardName">SNOWBOARD EXTREME SERIES</p></div>
      <div><img className="snowboard" src={BoardImage2} /><p className="boardName">SNOWBOARD EXTREME 2</p></div>
      <div><img className="snowboard" src={BoardImage3} /><p className="boardName">SNOWBOARD PRO SERIES</p></div>
      <div><img className="snowboard" src={BoardImage4} /><p className="boardName">SNOWBOARD EXTREME SERIES 3</p></div>
      <div><img className="snowboard" src={BoardImage5} /><p className="boardName">SNOWBOARD AIR SERIES</p></div>
      <div><img className="snowboard" src={BoardImage3} /><p className="boardName">SNOWBOARD NORMAL SERIES</p></div>
      </Slider>

      <div style={{textAlign: 'center'}}>
      </div>
      </div>
    );
  }
}
