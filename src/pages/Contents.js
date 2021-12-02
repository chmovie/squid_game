import React from 'react';
import { Link } from "react-router-dom";
import './Contents.css';
import './Common.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper';


function Contents() {
    
    SwiperCore.use([Navigation]);

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }

    // 비디오 볼륨 제어 스크립트
    function sound(){
        let video = document.getElementById('vid');
        if(video.muted === true){
            video.muted = false;
            video.volume = 1;
            document.getElementById('volume_icon').className = "fa fa-volume-up";
        }else{
            video.muted = true;
            document.getElementById('volume_icon').className = "fa fa-volume-off";
        }
    }
    // Intro 제어
    setTimeout(function(){
        document.querySelector('.intro').style.display = 'none';
    },50000);

    // 콘텐츠 페이지 로딩시 hide Intro 종료시 보여줌
    setTimeout(function(){
        document.querySelector('.contents').style.opacity = '1';
    },3000);

    // 스킵 로딩시 hide 5초뒤 보여줌
    setTimeout(function(){
        document.querySelector('#skip_btn').style.display = 'block';
    },5000);

    function skipClick(){
        let video = document.getElementById('vid');
        video.muted = true;
        document.querySelector('.intro').style.display = 'none';
    } 
    
    

    return (
        <div id="wrap">
        {/* Intro 동영상 */}
        <figure className="intro">
            <video muted autoPlay id="vid">
                <source src="./media/squid_game_intro.mp4" type="video/mp4" />
                해당 브라우저는 video 태그를 지원하지 않습니다.
            </video>
            <button id="sq_volume" onClick={sound}>
                <i id="volume_icon" className="fa fa-volume-off" aria-hidden="true"></i>
            </button>
            <button id="skip_btn" onClick={skipClick}>
                <p>SKIP</p>
            </button>
        </figure>
        {/* /Intro 동영상 */}
       {/* 콘텐츠 페이지 */}
        <section className="contents" style={{ backgroundImage: 'url(images/bg/sq_contents.jpg)'}}>
            {/* Header */}
            <header className="w1600">
                <div className="contents_logo">
                <Link to='/'><img src="images/logo/squid_game_logo.png" alt="오징어게임 로고" /></Link>
                </div>
                {/* GNB 메뉴 */}
                <nav className="gnb">
                    <ul>
                        <li><a href="#" onClick={handleClick}>HOME</a></li>
                        <li><a href="#" onClick={handleClick}>TOP&nbsp;PLAYERS</a></li>
                        <li><a href="#" onClick={handleClick}>GAMES</a></li>
                        <li><a href="#" onClick={handleClick}>NOTICE</a></li>
                    </ul>
                </nav>
                {/* /GNB 메뉴 */}
                <ul className="profile_sec">
                    <li><img src="images/icon/notification.png" alt="알림" /></li>
                    <li><img src="images/icon/profile01.png" alt="프로필" /></li>
                </ul>
            </header>
            {/* /Header */}
            {/* Contents Container */}
            <section className="contents_container">
                {/* Banner */}
                <article className="contents_banner">
                    <img src='images/bg/sq_contents_banner.jpg' alt="콘텐츠페이지 배너" />
                </article>
                {/* /Banner */}
                {/* Top players */}
                <article className="top_players">
                    <div className="w1440">
                        <h1>* TOP PLAYERS *</h1>
                        {/* Top Player 스와이퍼 */}
                        <div id="top_swiper">
                            <Swiper className="swiper-container" slidesPerView={4} spaceBetween={40} loop={true} navigation={true}>
                                <SwiperSlide className="swiper-slide slide1">
                                    <a href="#" onClick={handleClick}>
                                        <img src="images/player01.png" alt="오일남" />
                                        <h2>NO.001</h2>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide slide2">
                                    <a href="#" onClick={handleClick}>
                                        <img src="images/player02.png" alt="강새벽" />
                                        <h2>NO.067</h2>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide slide3">
                                    <a href="#" onClick={handleClick}>
                                        <img src="images/player03.png" alt="조상우" />
                                        <h2>NO.218</h2>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide slide4">
                                    <a href="#" onClick={handleClick}>
                                        <img src="images/player04.png" alt="성기훈" />
                                        <h2>NO.456</h2>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide slide5">
                                    <a href="#" onClick={handleClick}>
                                        <img src="images/player05.png" alt="장덕수" />
                                        <h2>NO.101</h2>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide slide6">
                                    <a href="#" onClick={handleClick}>
                                        <img src="images/player06.png" alt="알리" />
                                        <h2>NO.199</h2>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide slide7">
                                    <a href="#" onClick={handleClick}>
                                        <img src="images/player07.png" alt="한미녀" />
                                        <h2>NO.212</h2>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide slide8">
                                    <a href="#" onClick={handleClick}>
                                        <img src="images/player08.png" alt="지영" />
                                        <h2>NO.240</h2>
                                    </a>
                                </SwiperSlide>
                            </Swiper>
                            {/* /Top Player 스와이퍼 */}
                        </div>
                    </div>
                </article>
                {/* /Top players */}
                {/* Games */}
                <article className="games w1440 cf">
                    <h2>* GAMES *</h2>
                    {/* 무궁화 꽃이 피었습니다 */}
                    <div className="game1" id="open_game">
                        <h3>첫번째 게임</h3>
                        <p>무궁화 꽃이 피었습니다</p>
                        <p>RED LIGHT GREEN LIGHT</p>
                        {/* 참 잘했어요 도장 */}
                        <div className="good_stamp">
                            <img src="images/icon/good_stamp.png" alt="참 잘했어요" />
                        </div>
                        {/* /참 잘했어요 도장 */}
                        <div className="game_img">
                            <img src="images/icon/game01.png" alt="첫번째 게임 이미지" />
                        </div>
                    </div>
                    {/* /무궁화 꽃이 피었습니다 */}
                    {/* 달고나 뽑기 */}
                    <div className="game2" id="open_game">
                        <h3>두번째 게임</h3>
                        <p>달고나 뽑기</p>
                        <p>SUGAR HONEYCOMB</p>
                        {/* 플레이 버튼 */}
                        <button className="games_btn">
                            <p><a href="#" onClick={handleClick}>PLAY</a></p>
                        </button>
                        {/* /플레이 버튼 */}
                        <div className="game_img">
                            <img src="images/icon/game02.png" alt="두번째 게임 이미지" />
                        </div>
                    </div>
                    {/* /달고나 뽑기 */}
                    {/* 잠겨있는 게임 */}
                    <div className="game3" id="lock_game" style={{ backgroundImage: 'url(images/noise.gif)'}}>
                        <div className="lock">
                            <h4>LOCKED</h4>
                        </div>
                    </div>
                    {/* /잠겨있는 게임 */}
                    {/* 잠겨있는 게임 */}
                    <div className="game4" id="lock_game" style={{ backgroundImage: 'url(images/noise.gif)'}}>
                        <div className="lock">
                            <h4>LOCKED</h4>
                        </div>
                    </div>
                    {/* /잠겨있는 게임 */}
                    {/* 잠겨있는 게임 */}
                    <div className="game5" id="lock_game" style={{ backgroundImage: 'url(images/noise.gif)'}}>
                        <div className="lock">
                            <h4>LOCKED</h4>
                        </div>
                    </div>
                    {/* /잠겨있는 게임 */}
                    {/* 잠겨있는 게임 */}
                    <div className="game6" id="lock_game" style={{ backgroundImage: 'url(images/noise.gif)'}}>
                        <div className="lock">
                            <h4>LOCKED</h4>
                        </div>
                    </div>
                    {/* /잠겨있는 게임  */}
                </article>
                {/* /Games */}
            </section>
            {/* /Contents Container */}
            {/* Footer */}
            <footer>
                <p>© 2021 Netflix Squid Game. All Rights Reserved.</p>
            </footer>
            {/* /Footer */}
        </section>
        {/* /콘텐츠 페이지 */}
    </div>
    )
}

export default Contents
