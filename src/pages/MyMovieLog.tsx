import { useNavigate } from "react-router-dom";
import expo1 from "../img/expo1.png";
import expo2 from "../img/expo2.png";
import expo3 from "../img/expo3.png";
import expo4 from "../img/expo4.png";
import expo5 from "../img/expo5.png";
import expo6 from "../img/expo6.png";
import expo7 from "../img/expo7.png";
import expo8 from "../img/expo8.png";
import showman from "../img/위대한쇼맨.webp";
import hero from "../img/영웅.webp";
import transformer from "../img/트랜스포머.webp";
import ironman from "../img/아이언맨.jpg";
import avengers from "../img/어벤져스.webp";
import twilight from "../img/트와일라잇.jpg";
import bumblebee from "../img/범블비.webp";
import smApp1 from "../img/cotlin1.png";
import smApp2 from "../img/cotlin2.png";
import smApp3 from "../img/cotlin3.png";
import smApp4 from "../img/cotlin4.png";
import smApp5 from "../img/cotlin5.png";
import smApp6 from "../img/cotlin6.png";
import smApp7 from "../img/cotlin7.png";
import smApp8 from "../img/cotlin8.png";
import smApp9 from "../img/cotlin9.png";

import toyprj from "../img/toyprj.png"
import { useState } from "react";

export const projectList = [
    {
        id: 1,
        title: "2025엑스포(장려상)",
        locate: "동양미래대학교 EXPO",
        finalDate: "2025.11",
        period: "2025.03~2025.11",
        language: "React Native",
        people: "22 명",
        poster: expo2,
        posters: [
            expo1,
            expo2,
            expo3,
            expo4,
            expo5,
            expo6,
            expo7,
            expo8
        ],
        introduce: "완벽한 면접을 준비하기에는 어려운 기존에 존재하는 면접 어플리케이션의 한계를 해결하기 위해\n사용자의 표정,자세,음성 등을 분석하여 피드백을 제공하는 AI 면접 애플리케이션 AINTERVIEW 입니다.\n취업 준비생들은 해당 애플리케이션을 통해 보다 더 체계적이고 객관적인 피드백을 기반으로 \n실전 면접을 효과적으로 준비할 수 있도록 지원합니다",
        detail: "기존에는 웹 프로젝트만 경험해 보았기 때문에 전공 탐색의 일환으로\n 모바일 앱 개발에 도전한 프로젝트입니다.\n프로젝트를 수행하며 페이지 제작 및 API 연동을 통한 피드백 데이터 조회, 생성, 수정, 삭제 기능 등을 구현하였습니다.\n 해당 페이지를 진행하며 가장 크게 어려움을 겪었던 부분은 북마크 기능입니다.\napi를 사용하여 json 형식으로 데이터를 가져와 값을 변경함으로서 북마크 기능을 구현해야 하는 작업이었는데\n 이틀을 꼬박 붙들어봐도 해결이 되지 않아 백앤드 담당자와 소통을 하며 해결해나가는 과정에서 \n 소통의 중요성을 느꼈던 겪었던 경험이 있습니다."
    },
    {
        id: 2,
        title: "스마트앱프로젝트 경진대회(우수상)",
        locate: "동양미래대학교",
        finalDate: "2025.12",
        period: "2025.08~2025.11",
        language: "Kotlin",
        people: "4 명",
        poster: smApp5,
        posters: [
            smApp1,
            smApp2,
            smApp3,
            smApp4,
            smApp5,
            smApp6,
            smApp7,
            smApp8,
            smApp9
        ],
        introduce: "SNS를 통해 안락사에 처한 동물들을 보며 도움을 주고 싶어 제작하게 되었고,\n 유기동물 입양은 분양이나 구매보다 접근성이 낮다는 문제가 있기 때문에 \n단순 입양 뿐 아니라 임보 및 사용자 맞춤형 매칭을 통해 입양 성공률을 높이고\n mbti와 같은 성향 분석 테스트인 'pet-mate' 검사를 통해  단순히 강아지의 외모와 품종이 아닌, \n입양자의 라이프 스타일과 활동성, 훈련 의지 등을 분석하여 보호소로부터 구조된 유기견 중 \n가장 높은 궁합 점수를 받은 강아지를 추천해주는 서비스를 통해 파양률을 줄여, \n결과적으로 유기동물의 안락사를 최소화하는데 기여합니다",
        detail: "코틀린을 사용하여 교내 경진대회에서 우수상을 수상하였던 경험입니다. \n 프로젝트를 수행하며 관리자/사용자 페이지 구분 제작 및 \n API 연동을 통한 유기견 및 회원정보 데이터 조회, 생성, 수정, 삭제 기능 등을 구현하였습니다\n리액트를 사용하지는 않았지만 ui 제작과, 기본적인 기능 위주로 프론트 경험과 실력을 늘리는데 도움이 된 프로젝트입니다."
    },
    {
        id: 3,
        title: "토이 프로젝트",
        locate: "마스외전(교내동아리)",
        finalDate: "2024.8",
        period: "2024.07~2024.08",
        language: "HTML,CSS,JS",
        people: "4 명",
        poster: "",
        poster1: toyprj,
        posters: [
            expo1,
            expo2,
            bumblebee,
            ironman,
            avengers
        ],
        detail: "해당 프로젝트는 팀 프로젝트 경험과 HTML, CSS를 활용하여 화면 구현을 연습하는 차원에서 진행한 첫 팀 프로젝트였고\n 팀원과의 소통에 있어서 가장 큰 배움을 준 프로젝트입니다.\n 제 의도가 다른 팀원에게 다르게 전달되는 경험을 하면서 제 소통 방법을 되돌아보게 되었고\n 상대방을 배려하는 소통의 중요성을 깨닫게 된 경험이었습니다. \n이후 프로젝트에서는 해당 경험을 바탕으로 더 효과적으로 의사소통할 수 있었습니다.\n\n\n\n\n 처음 입학하였을 때 제작하였는데 현재 관련 파일을 찾지 못하여 사진 첨부를 못하였습니다ㅜ"
    }
]

const MyMovieLog = () => {
    const navigate = useNavigate();
    const [wanted, setWanted] = useState(true);
    const [watched, setWatched] = useState(false);

    const movieList = [
        {
            id: 15,
            title: "위대한 쇼맨",
            locate: "home",
            finalDate: "2025.11",
            period: "2025.03~2025.11",
            people: "2 명",
            poster: showman
        },
        {
            id: 12,
            title: "영웅",
            locate: "김포공항 7관 LASER",
            finalDate: "2023.01.04",
            period: "09:50 ~ 12:00",
            people: "2 명",
            poster: hero
        },
        {
            id: 12,
            title: "범블비",
            locate: "home",
            finalDate: "2024.8",
            period: "2024.07~2024.08",
            people: "1 명",
            poster: bumblebee
        },
        {
            id: 12,
            title: "트랜스포머",
            locate: "home",
            finalDate: "2024.8",
            period: "2024.07~2024.08",
            people: "1 명",
            poster: transformer
        },
        {
            id: 12,
            title: "아이언맨",
            locate: "home",
            finalDate: "2024.8",
            period: "2024.07~2024.08",
            people: "1 명",
            poster: ironman
        },
        {
            id: 12,
            title: "어벤져스",
            locate: "home",
            finalDate: "2024.8",
            period: "2024.07~2024.08",
            people: "1 명",
            poster: avengers
        },
        {
            id: 12,
            title: "트와일라잇",
            locate: "home",
            finalDate: "2024.8",
            period: "2024.07~2024.08",
            people: "1 명",
            poster: twilight
        }
    ]


    const prjList = [
        {
            id: 1,
            title: "Learning LM",
            type: "웹",
            part: "SpringBoot, Web",
            finalDate: "2024.8",
            period: "2024.07~2024.08",
            detail: "초급 사용자가 AI 활용 흐름을 이해하고 직접 조합해 보는 학습 플랫폼",
            poster: ""
        },
        {
            id: 2,
            title: "대동여기도",
            type: "웹",
            part: "SpringBoot, Web",
            finalDate: "2025.12",
            period: "2025.08~2025.11",
            detail: "전국 로컬 경험을 발견, 기록하는 지도 기반 문화 아카이빙 플랫폼",
            poster: smApp5
        },
        {
            id: 3,
            title: "일일",
            type: "웹",
            part: "Node.js, Web",
            finalDate: "2024.8",
            period: "2024.07~2024.08",
            detail: "일정 관리와 일기 작성을 하나로!",
            poster: ""
        },
        {
            id: 4,
            title: "패스로",
            type: "웹",
            part: "SpringBoot, Web, 디자이너",
            finalDate: "2024.8",
            period: "2024.07~2024.08",
            detail: "통학 경로를 활용해 소형 물품을 대신 배송해주는 P2P 배송 플랫폼",
            poster: ""
        },
        {
            id: 5,
            title: "리루티",
            type: "앱",
            part: "SpringBoot, Android, 디자이너",
            finalDate: "2024.8",
            period: "2024.07~2024.08",
            detail: "생활 속에서 필요한 순간에 필요한 일을 먼저 확인할 수 있도록 돕는 서비스",
            poster: ""
        },
        {
            id: 6,
            title: "폰쉼",
            type: "앱",
            part: "Node.js, Android",
            finalDate: "2025.11",
            period: "2025.03~2025.11",
            detail: "“폰을 쉬다”의 의미를 가진 스마트폰 사용 습관 개선 어플",
            poster: expo2
        },
        {
            id: 7,
            title: "같이 살림",
            type: "웹",
            part: "Node.js, Web",
            finalDate: "2024.8",
            period: "2024.07~2024.08",
            detail: "집안일, 생활 규칙 등을 쉽게 관리할 수 있는 공동생활 관리 서비스",
            poster: ""
        },
        {
            id: 8,
            title: "Pebble",
            type: "웹",
            part: "Node.js, Web",
            finalDate: "2024.8",
            period: "2024.07~2024.08",
            detail: "맥락을 설계하는 계층형 여정 관리 투두리스트",
            poster: ""
        },
        {
            id: 9,
            title: "PLIMAP",
            type: "웹",
            part: "SpringBoot, Web",
            finalDate: "2024.8",
            period: "2024.07~2024.08",
            detail: "위치 기반 뮤직 큐레이션 서비스",
            poster: ""
        },
        {
            id: 10,
            title: "오늘의 터",
            type: "웹",
            part: "SpringBoot, Web",
            finalDate: "2024.8",
            period: "2024.07~2024.08",
            detail: "운세를 해석하는 것을 넘어, 오늘의 운에 맞는 장소를 추천하는 서비스",
            poster: ""
        }
    ]

    return (
        <>
            <div className="mt-[40px]">
                <span className="font-bold">MY 무비로그</span >

                {/**영화 */}
                {watched && (
                    <>
                        <div className="flex gap-[20px] items-center mt-[40px] ml-[18px] text-[16px]">
                            <span
                                onClick={() => {
                                    setWatched(false);
                                    setWanted(true);
                                }}
                                className="cursor-pointer text-[#828282]">보고싶어요(10)</span>
                            <span
                                onClick={() => {
                                    setWatched(true);
                                    setWanted(true);
                                }}
                                className="font-bold">내가 본 영화(3)</span>
                        </div>
                        {
                            projectList.map((prj) => (
                                <div className="flex justify-between h-[256px] w-[1276px] mt-[30px] pl-[56px] pr-[56px] pt-[24px]
                                 backdrop-blur-md border-1 border-gray-200/20 shadow-sm">
                                    <div className="flex flex-col gap-[16px]">
                                        <span><span className="font-bold text-orange-500">{prj.id}</span> {prj.title}</span>
                                        <div className="flex flex-col gap-[4px] ">
                                            <span>장소</span>
                                            <span>준비물</span>
                                            <span>관람시간</span>
                                            <span>관람인원</span>
                                        </div>
                                        <button
                                            onClick={() => {
                                                navigate("/my/detail/" + prj.id)
                                            }}
                                            className="h-[32px] w-[130px] rounded-full bg-[#FF271D] text-white border-1 cursor-pointer">상세보기</button>
                                    </div>
                                    {/**영화 상세내용 */}
                                    <div>
                                        <div className="flex flex-col gap-[4px] mt-[36px] ml-[-420px] ">
                                            <span>{prj.locate}</span>
                                            <span>{prj.language}</span>
                                            <span>{prj.period}</span>
                                            <span>{prj.people}</span>
                                        </div>
                                    </div>
                                    <img
                                        className="mt-[-20px] border-1"
                                        src={prj.poster} alt="프로젝트 이미지" />
                                </div>
                            ))
                        }
                        < div className="h-[60px]"></div>
                    </>)}
                {/**영화 */}
                {wanted && (
                    <>
                        <div className="flex gap-[20px] items-center mt-[40px] ml-[18px] text-[16px]">
                            <span
                                onClick={() => {
                                    setWatched(false);
                                    setWanted(true);
                                }}
                                className="cursor-pointer font-bold">보고싶어요(10)</span>
                            <span
                                onClick={() => {
                                    setWatched(true);
                                    setWanted(false);
                                }}
                                className="cursor-pointer text-[#828282]">내가 본 영화(3)</span>
                        </div>
                        {
                            prjList.map((prj) => (
                                <div className="flex  h-[256px] w-[1276px] mt-[30px] pl-[56px] pr-[56px] pt-[24px]
                                 backdrop-blur-md border-1 border-gray-200/20 shadow-sm">
                                    <div className="flex flex-col gap-[16px]">
                                        <div className="font-bold"><span className="font-bold text-orange-500">⭐</span> {prj.title}</div>
                                        <div className="flex flex-col gap-[4px] ">
                                            <span>종류</span>
                                            <span>모집 파트</span>
                                            <span>신청 기간</span>
                                            <span>간단설명</span>
                                        </div>
                                        <button
                                            onClick={() => {
                                                alert("신청 완료되었습니다!");
                                            }}
                                            className="h-[32px] w-[130px] rounded-full bg-[#FF271D] text-white border-1 cursor-pointer">신청하기</button>
                                    </div>
                                    {/**영화 상세내용 */}
                                    <div>
                                        <div className="flex flex-col gap-[4px] mt-[40px] ml-[60px] ">
                                            <span>{prj.type}</span>
                                            <span>{prj.part}</span>
                                            <span>26.06.18~</span>
                                            <span>{prj.detail}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        < div className="h-[60px]"></div>
                    </>)}
                {wanted && (
                    <>
                        {
                            movieList.map((movie) => (
                                <div className="flex justify-between h-[256px] w-[1276px] mt-[30px] pl-[56px] pr-[56px] pt-[24px]
                                 backdrop-blur-md border-1 border-gray-200/20 shadow-sm">
                                    <div className="flex flex-col gap-[16px]">
                                        <span><span className="font-bold text-orange-500">{movie.id}</span> {movie.title}</span>
                                        <div className="flex flex-col gap-[4px] ">
                                            <span>장소</span>
                                            <span>관람일</span>
                                            <span>관람시간</span>
                                            <span>관람인원</span>
                                        </div>
                                        <button
                                            className="h-[32px] w-[130px] rounded-full bg-[#FF271D] text-white border-1">상세보기</button>
                                    </div>
                                    {/**영화 상세내용 */}
                                    <div>
                                        <div className="flex flex-col gap-[4px] mt-[36px] ml-[-420px] ">
                                            <span>{movie.locate}</span>
                                            <span>{movie.finalDate}</span>
                                            <span>{movie.period}</span>
                                            <span>{movie.people}</span>
                                        </div>
                                    </div>
                                    <img
                                        className="mt-[-20px] border-1"
                                        src={movie.poster} alt="영화 포스터" />
                                </div>
                            ))
                        }
                        < div className="h-[60px]"></div>
                    </>)}
            </div >

        </>
    )
}

export default MyMovieLog;