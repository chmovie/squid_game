import React from 'react'
import { Link } from "react-router-dom";
import './Main.css';
import './Loading.css';
import { useHistory } from "react-router-dom";

function Main() {
    // 입력한 정보에 기반한 이름 보여주기
    function printName() {
        const name = document.getElementById('name').value;
        document.getElementById("result").innerText = "참가자 " + name;
    };

    // play 버튼 클릭시 나오는 참가 동의 팝업창
    function openPopup(){
        let blind = document.querySelector('.blind');
        const consentForm = document.querySelector('.consent_form');
        let name = document.getElementById('name').value;
        let birth = document.getElementById('birth').value;
        const alertForm = document.querySelector('.alert_form'); 

        try {
            if(name === ''){
                alertForm.style.display = 'block';
                document.querySelector(".alert_txt").innerText = alertList[0];
            }else if(birth === ''){
                alertForm.style.display = 'block';
                document.querySelector(".alert_txt").innerText = alertList[1];
            }else{
                blind.style.display = 'block';
                consentForm.style.display = 'block';
            }
        }catch(ex){
            return false;
        }
    };

    let alertList = [
        '성함을 입력해주세요.',
        '생년월일을 입력해주세요.'
    ]

    // 경고창 닫기 버튼 클릭시 팝업창 닫기 
    function closeAlert(){
        document.querySelector('.alert_form').style = 'none';
    }

    // 참가안내 닫기 버튼 클릭시 팝업창 닫기 
    function closeBtn(){
        let blind = document.querySelector('.blind');
        let consentForm = document.querySelector('.consent_form');
        blind.style.display = 'none';
        consentForm.style.display = 'none';
    }

    // 동의시 콘텐츠 페이지로 이동
    let history = useHistory();
    function nextPage(){
        history.push("/contents");
    }

    return (
        <div id="wrap">
        {/* 메인 페이지 */}
        <section className="main_page" style={{ backgroundImage: 'url(images/bg/sq_main_bg.png)'}}>
            <div className="w1600">
                {/* 메인 페이지 로고 */}
                <div className="main_logo">
                    <Link to='/'><img src='images/logo/sq_logo.png' alt="오징어게임 로고" /></Link>
                </div>
                {/* /메인 페이지 로고 */}
                {/* 사용자 등록 및 로그인 영역 */}
                <div className="register">
                    {/* 타이틀 메시지 */}
                    <h1>* WELCOME TO THE SQUID GAME *</h1>
                    {/* /타이틀 메시지 */}
                    {/* 정보 입력 폼 */}
                    <form>
                        {/* <label for="name">FULL NAME</label> */}
                        <input type="text" id="name" placeholder="FULL NAME" onChange={printName} autoComplete="off" required />
                        {/* <label for="birth">DATE OF BIRTH</label> */}
                        <input type="text" id="birth" placeholder="DATE OF BIRTH" maxLength="10" autoComplete="off" required/>
                        <input type="button" id="play_btn" value="REGISTER TO PLAY" onClick={openPopup}/>
                    </form>
                    {/* /정보 입력 폼 */}
                    {/* 블라인드 */}
                    <div className="blind"></div>
                    {/* /블라인드 */}
                    {/* 참가 동의 팝업 */}
                    <div className="consent_form">
                        <h2>* 참가 동의서 *</h2>
                        <ul className="consent_list">
                            <li>제 1항, 참가자는 임의로 게임을 중단할 수 없다.</li>
                            <li>제 2항, 게임을 거부하는 참가자는 탈락으로 처리한다.</li>
                            <li>제 3항, 참가자의 과반수가 동의할 경우 게임을 중단할 수 있다.</li>
                        </ul>
                        <p id="result" className="player"></p>
                        <button className="close_btn" onClick={closeBtn}>
                            <p>닫기</p>
                        </button>
                        <button className="consent_btn" onClick={nextPage}>
                            <p>동의</p>
                        </button>
                    </div>
                    {/* /참가 동의 팝업 */}
                    {/* 경고창 */}
                    <div className="alert_form">
                        <p className="alert">
                            * 경고 *
                        </p>
                        <p className="alert_txt">
                            
                        </p>
                        <button className="alert_btn" onClick={closeAlert}>
                            <p>확인</p>
                        </button>
                    </div>
                    {/* /경고창 */}
                    {/* 도움말 안내 */}
                    <div className="help">
                        <p>NEED HELP WITH REGISTER?</p>
                        {/* 호버시 보이는 도움말 안내 팝업 */}
                        <table className="help_popup">
                            <tbody>
                            <tr>
                                <th>FULL NAME</th>
                                <th>DATE OF BIRTH</th>
                            </tr>
                            <tr>
                                <td>성기훈</td>
                                <td>1974.10.31</td>
                            </tr>
                            <tr>
                                <td>조상우</td>
                                <td>1975.11.21</td>
                            </tr>
                            <tr>
                                <td>강새벽</td>
                                <td>1994.06.23</td>
                            </tr>
                            </tbody>
                        </table>
                        {/* /호버시 보이는 도움말 안내 팝업 */}
                    </div>
                    {/* /도움말 안내 */}
                </div>
                {/* /사용자 등록 및 로그인 영역 */}
            </div>
        </section>
        {/* /메인 페이지 */}
    </div>
    )
}

export default Main;
