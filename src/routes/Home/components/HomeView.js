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
      focusOnSelect:true,
      responsive:[ { breakpoint: 400, settings: { arrows:false,slidesToShow: 1 } },{ breakpoint: 768, settings: { arrows:false,slidesToShow: 3 } }, { breakpoint: 1024, settings: { arrows:true,slidesToShow: 3 } }, { breakpoint: 100000, settings: {slidesToShow: 5 }} ],
      nextArrow:<div>
      <button  style={{height: 10+'rem',
      width: 5+'rem',
      marginTop: -9+'rem',
      marginLeft: -2+'rem',
      opacity:0.0}} onClick={this.next}></button>
      <img
      alt='next'
      className='scrollButton'
      src={NextImage}
      style={{height: 10+'rem',
      zIndex:999,
      width: 5+'rem',
      marginTop: -9+'rem',
      marginLeft: -2+'rem',}}/></div>,
      prevArrow:<div>
      <button  style={{height: 10+'rem',
      width: 5+'rem',
      marginTop: -9+'rem',
      marginLeft: -1+'rem',
      opacity:0.0}} onClick={this.previous}></button>
      <img
      alt='next'
      className='scrollButton'
      src={PrevImage}
      style={{height: 10+'rem',
      zIndex:999,
      width: 5+'rem',
      marginLeft: -1+'rem',
      marginTop: -9+'rem'}}/></div>,
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
