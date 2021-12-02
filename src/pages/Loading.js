import React from 'react';
import './Common.css';
import './Loading.css';
import { useHistory } from "react-router-dom";
// import lodingLogo from '../assets/logo/loding_logo.png';

function Loading() {
    // 로딩페이지 키 입력받아 메인 페이지로 이동
    let history = useHistory();
    function keyUp(e){
        if(e.keyCode === 89){
            history.push("/main");
        }
    }

    return (
        <div id="wrap">
        {/* 첫 시작 로딩 페이지 */}
        <section className="loading_page w1600">
            {/* 로딩 페이지 로고 */}
            <div className="loading_logo">
                <img src='images/logo/loding_logo.png' alt="오징어게임 로고"/>
            </div>
            {/* /로딩 페이지 로고 */}
            {/* 로딩 페이지 타이틀 메시지 영역 */}
            <div className="title_message" style={{ backgroundImage: 'url(images/bg/loding_title_bg.png)'}} >
                <h1>
                    &lt;오징어 게임 참가자 모집&gt;
                </h1>
                <p>총 상금 456억!</p>
                <p>당신의 인생을 바꿔드립니다.</p>
                <p>게임의 참가를 원하십니까?</p>
            </div>
            {/* /로딩 페이지 타이틀 메시지 영역 */}
            {/* 참가 의사 입력 영역 */}
            <div className="message_input">
                <h2>게임의 참가를 원하신다면 'y'를 입력하세요.</h2>
                <form>
                    <input type="text" id="game_want" maxLength="1" autoFocus={true} autoComplete="off" required onKeyUp={keyUp}/>
                </form>
            </div>
            {/* 참가 의사 입력 영역 */}
        </section>
        {/* /첫 시작 로딩 페이지 */}
    </div>
    )
}

export default Loading;
