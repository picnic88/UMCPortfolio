import { useState } from "react";
import c from "../img/C.png";
import js from "../img/JavaScript_logo.png";
import ts from "../img/Typescript_logo.png";
import figma from "../img/figma.webp";
import git from "../img/git.jpg";
import github from "../img/github.png";
import intelij from "../img/inteliJ.webp";
import nextJs from "../img/nextJs.jpg";
import nodeJs from "../img/nodeJs.png";
import reactLogo from "../img/reactLogo.webp";
import springBoot from "../img/springbootlogo.jpg";
import sqld from "../img/sqld.jpg";
import vscode from "../img/vscode.png";
import notion from "../img/notion.png";
import expo1 from "../img/expo1.png";
import expo2 from "../img/expo2.png";
import expo3 from "../img/expo3.png";
import expo4 from "../img/expo4.png";
import expo5 from "../img/expo5.png";
import expo6 from "../img/expo6.png";
import expo7 from "../img/expo7.png";
import expo8 from "../img/expo8.png";
import smApp1 from "../img/cotlin1.png";
import smApp2 from "../img/cotlin2.png";
import smApp3 from "../img/cotlin3.png";
import smApp4 from "../img/cotlin4.png";
import smApp5 from "../img/cotlin5.png";
import smApp6 from "../img/cotlin6.png";
import smApp7 from "../img/cotlin7.png";
import smApp8 from "../img/cotlin8.png";
import smApp9 from "../img/cotlin9.png";
import showman from "../img/위대한쇼맨.webp";
import hero from "../img/영웅.webp";
import transformer from "../img/트랜스포머.webp";
import ironman from "../img/아이언맨.jpg";
import avengers from "../img/어벤져스.webp";
import twilight from "../img/트와일라잇.jpg";
import bumblebee from "../img/범블비.webp";
import mongle1 from "../img/mongle1.png"
import mongle2 from "../img/mongle2.png"
import mongle3 from "../img/mongle3.png"



const HomePage = () => {

    const logo = { c, js, ts };
    const [movieType, setMovieType] = useState("chart");
    const [type, setType] = useState("language");
    const movieChart = [
        hero, ironman, showman, avengers, twilight, bumblebee, transformer
    ]
    const now = [
        mongle1, mongle2, mongle3
    ];
    const last = [
        expo1, expo2, expo3, expo4, expo5, expo6, expo7, expo8, smApp1, smApp2, smApp3, smApp4, smApp5, smApp6, smApp7, smApp8, smApp9
    ];

    return (
        <>
            {movieType === "chart" && (
                <>
                    {/* 무비차트-현재상영작-지난 상영작 영화 선택 */}
                    <div className="flex gap-[20px] items-center mt-[60px] text-[16px]">
                        <span
                            className="cursor-pointer font-bold mt-[-10px]">
                            무비 차트
                            <div className="mt-[4px] w-[70px] h-[4px] bg-[#FF271D]"></div></span>
                        <span
                            onClick={() => {
                                setMovieType("now");
                            }}
                            className="cursor-pointer text-[#828282]">
                            현재 상영작</span>
                        <span
                            onClick={() => {
                                setMovieType("last");
                            }}
                            className="cursor-pointer text-[#828282]">
                            지난 상영작</span>
                    </div>
                    {/**영화 슬라이드 */}
                    <div className="mt-[20px] w-full overflow-hidden bg-white py-8 relative">
                        <div className="flex w-max animate-scroll-right gap-6">
                            {movieChart.map((url, index) => (
                                <div key={`left-${index}`} className="w-[200px] h-[300px] flex-shrink-0 rounded-xl overflow-hidden shadow-md">
                                    <img src={url} alt="슬라이드 이미지" className="w-full h-full object-cover" />
                                </div>
                            ))}
                            {movieChart.map((url, index) => (
                                <div key={`right-${index}`} className="w-[200px] h-[300px] flex-shrink-0 rounded-xl overflow-hidden shadow-md">
                                    <img src={url} alt="슬라이드 이미지" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>

                    </div>


                </>
            )}
            {movieType === "now" && (
                <>
                    {/* 무비차트-현재상영작-지난 상영작 영화 선택 */}
                    <div className="flex gap-[20px] items-center mt-[60px] text-[16px]">
                        <span
                            onClick={() => {
                                setMovieType("chart");
                            }}
                            className="cursor-pointer text-[#828282]">
                            무비 차트</span>
                        <span
                            onClick={() => {
                                setMovieType("now");
                            }}
                            className="cursor-pointer font-bold mt-[-10px]">
                            현재 상영작
                            <div className="mt-[4px] w-[88px] h-[4px] bg-[#FF271D]"></div>
                        </span>
                        <span
                            onClick={() => {
                                setMovieType("last");
                            }}
                            className="cursor-pointer text-[#828282]">
                            지난 상영작</span>
                    </div>
                    {/**영화 슬라이드 */}
                    <div className="mt-[20px] w-full overflow-hidden bg-white py-8 relative">
                        <div className="flex w-max animate-scroll-right gap-6">
                            {now.map((url, index) => (
                                <div key={`left-${index}`} className="w-[200px] h-[300px] flex-shrink-0 rounded-xl overflow-hidden shadow-md">
                                    <img src={url} alt="슬라이드 이미지" className="w-full h-full object-cover" />
                                </div>
                            ))}
                            {now.map((url, index) => (
                                <div key={`right-${index}`} className="w-40 h-60 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
                                    <img src={url} alt="슬라이드 이미지" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>

                    </div>


                </>
            )
            }
            {
                movieType === "last" && (
                    <>
                        {/* 무비차트-현재상영작-지난 상영작 영화 선택 */}
                        <div className="flex gap-[20px] items-center mt-[60px] text-[16px]">
                            <span
                                onClick={() => {
                                    setMovieType("chart");
                                }}
                                className="cursor-pointer  text-[#828282]">
                                무비 차트</span>
                            <span
                                onClick={() => {
                                    setMovieType("now");
                                }}
                                className="cursor-pointer text-[#828282]">
                                현재 상영작</span>
                            <span
                                onClick={() => {
                                    setMovieType("last");
                                }}
                                className="cursor-pointer font-bold mt-[-10px]">
                                지난 상영작
                                <div className="mt-[4px] w-[90px] h-[4px] bg-[#FF271D]"></div>
                            </span>
                        </div>

                        {/**영화 슬라이드 */}
                        <div className="mt-[20px] w-full overflow-hidden bg-white py-8 relative">
                            <div className="flex w-max animate-scroll-right gap-6">
                                {last.map((url, index) => (
                                    <div key={`left-${index}`} className="w-[200px] h-[300px] flex-shrink-0 rounded-xl overflow-hidden shadow-md">
                                        <img src={url} alt="슬라이드 이미지" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                {last.map((url, index) => (
                                    <div key={`right-${index}`} className="w-40 h-60 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
                                        <img src={url} alt="슬라이드 이미지" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="mt-[10px] text-[12px]">파일 손실로 인해 디자인 완성본 및 실행 캡쳐사진으로 대처하는 점 양해부탁드리겠습니다!!ㅠㅠ</div>
                    </>
                )
            }

            {/**능력(?) */}
            <div className="mt-[80px]">
                <span>매점</span>

                {type == "language" && (
                    <>
                        <div className="text-[16px] flex gap-[28px] mt-[26px]">
                            <span
                                onClick={() => {
                                    setType("language");
                                }}
                                className="cursor-pointer font-bold">
                                {/**typescript, javascript, c */}
                                Programing Language
                            </span>
                            <span
                                onClick={() => {
                                    setType("F/L");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**React, Next.js, Spring Boot */}
                                Framework / Library
                            </span>
                            <span
                                onClick={() => {
                                    setType("Server");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**Node.js */}
                                Server
                            </span>
                            <span
                                onClick={() => {
                                    setType("T/D");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**Git, GitHub*/}
                                Tooling / DevOps
                            </span>
                            <span
                                onClick={() => {
                                    setType("Env");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**VS Code, InteliJ*/}
                                Environment
                            </span>
                            <span
                                onClick={() => {
                                    setType("ETC");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**SQLD, Figma, Notion*/}
                                ETC
                            </span>
                        </div>
                        {/**능력 아이콘 슬라이드 */}
                        <div className="flex gap-[50px] mt-[60px]">
                            <img src={ts} alt="c" className="w-[100px] h-[110px]" />
                            <img src={js} alt="c" className="w-[100px] h-[110px] rounded-lg" />
                            <img src={c} alt="c" className="w-[100px] h-[110px]" />
                        </div>
                    </>
                )}
                {type == "F/L" && (
                    <>
                        <div className="text-[16px] flex gap-[28px] mt-[26px]">
                            <span
                                onClick={() => {
                                    setType("language");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**typescript, javascript, c */}
                                Programing Language
                            </span>
                            <span
                                onClick={() => {
                                    setType("F/L");
                                }}
                                className="cursor-pointer font-bold">
                                {/**React, Next.js, Spring Boot */}
                                Framework / Library
                            </span>
                            <span
                                onClick={() => {
                                    setType("Server");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**Node.js */}
                                Server
                            </span>
                            <span
                                onClick={() => {
                                    setType("T/D");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**Git, GitHub*/}
                                Tooling / DevOps
                            </span>
                            <span
                                onClick={() => {
                                    setType("Env");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**VS Code, InteliJ*/}
                                Environment
                            </span>
                            <span
                                onClick={() => {
                                    setType("ETC");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**SQLD, Figma, Notion*/}
                                ETC
                            </span>
                        </div>
                        {/**능력 아이콘 슬라이드 */}
                        <div className="flex gap-[50px] mt-[60px]">
                            <img src={reactLogo} alt="c" className="w-[100px] h-[110px]" />
                            <img src={nextJs} alt="c" className="w-[100px] h-[110px] rounded-lg" />
                            <img src={springBoot} alt="c" className="w-[100px] h-[110px]" />
                        </div>
                    </>
                )}

                {type == "Server" && (
                    <>
                        <div className="text-[16px] flex gap-[28px] mt-[26px]">
                            <span
                                onClick={() => {
                                    setType("language");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**typescript, javascript, c */}
                                Programing Language
                            </span>
                            <span
                                onClick={() => {
                                    setType("F/L");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**React, Next.js, Spring Boot */}
                                Framework / Library
                            </span>
                            <span
                                onClick={() => {
                                    setType("Server");
                                }}
                                className="cursor-pointer font-bold">
                                {/**Node.js */}
                                Server
                            </span>
                            <span
                                onClick={() => {
                                    setType("T/D");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**Git, GitHub*/}
                                Tooling / DevOps
                            </span>
                            <span
                                onClick={() => {
                                    setType("Env");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**VS Code, InteliJ*/}
                                Environment
                            </span>
                            <span
                                onClick={() => {
                                    setType("ETC");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**SQLD, Figma, Notion*/}
                                ETC
                            </span>
                        </div>
                        {/**능력 아이콘 슬라이드 */}
                        <div className="flex gap-[50px] mt-[60px]">
                            <img src={nodeJs} alt="c" className="w-[100px] h-[110px]" />
                        </div>
                    </>
                )}

                {type == "T/D" && (
                    <>
                        <div className="text-[16px] flex gap-[28px] mt-[26px]">
                            <span
                                onClick={() => {
                                    setType("language");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**typescript, javascript, c */}
                                Programing Language
                            </span>
                            <span
                                onClick={() => {
                                    setType("F/L");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**React, Next.js, Spring Boot */}
                                Framework / Library
                            </span>
                            <span
                                onClick={() => {
                                    setType("Server");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**Node.js */}
                                Server
                            </span>
                            <span
                                onClick={() => {
                                    setType("T/D");
                                }}
                                className="cursor-pointer font-bold">
                                {/**Git, GitHub*/}
                                Tooling / DevOps
                            </span>
                            <span
                                onClick={() => {
                                    setType("Env");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**VS Code, InteliJ*/}
                                Environment
                            </span>
                            <span
                                onClick={() => {
                                    setType("ETC");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**SQLD, Figma, Notion*/}
                                ETC
                            </span>
                        </div>
                        {/**능력 아이콘 슬라이드 */}
                        <div className="flex gap-[50px] mt-[60px]">
                            <img src={git} alt="c" className="w-[100px] h-[110px]" />
                            <img src={github} alt="c" className="w-[100px] h-[110px] rounded-lg" />
                        </div>
                    </>
                )}

                {type == "Env" && (
                    <>
                        <div className="text-[16px] flex gap-[28px] mt-[26px]">
                            <span
                                onClick={() => {
                                    setType("language");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**typescript, javascript, c */}
                                Programing Language
                            </span>
                            <span
                                onClick={() => {
                                    setType("F/L");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**React, Next.js, Spring Boot */}
                                Framework / Library
                            </span>
                            <span
                                onClick={() => {
                                    setType("Server");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**Node.js */}
                                Server
                            </span>
                            <span
                                onClick={() => {
                                    setType("T/D");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**Git, GitHub*/}
                                Tooling / DevOps
                            </span>
                            <span
                                onClick={() => {
                                    setType("Env");
                                }}
                                className="cursor-pointer font-bold">
                                {/**VS Code, InteliJ*/}
                                Environment
                            </span>
                            <span
                                onClick={() => {
                                    setType("ETC");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**SQLD, Figma, Notion*/}
                                ETC
                            </span>
                        </div>
                        {/**능력 아이콘 슬라이드 */}
                        <div className="flex gap-[50px] mt-[60px]">
                            <img src={vscode} alt="c" className="w-[100px] h-[110px]" />
                            <img src={intelij} alt="c" className="w-[100px] h-[110px] rounded-lg" />
                        </div>
                    </>
                )}

                {type == "ETC" && (
                    <>
                        <div className="text-[16px] flex gap-[28px] mt-[26px]">
                            <span
                                onClick={() => {
                                    setType("language");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**typescript, javascript, c */}
                                Programing Language
                            </span>
                            <span
                                onClick={() => {
                                    setType("F/L");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**React, Next.js, Spring Boot */}
                                Framework / Library
                            </span>
                            <span
                                onClick={() => {
                                    setType("Server");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**Node.js */}
                                Server
                            </span>
                            <span
                                onClick={() => {
                                    setType("T/D");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**Git, GitHub*/}
                                Tooling / DevOps
                            </span>
                            <span
                                onClick={() => {
                                    setType("Env");
                                }}
                                className="cursor-pointer text-[#828282]">
                                {/**VS Code, InteliJ*/}
                                Environment
                            </span>
                            <span
                                onClick={() => {
                                    setType("ETC");
                                }}
                                className="cursor-pointer font-bold">
                                {/**SQLD, Figma, Notion*/}
                                ETC
                            </span>
                        </div>
                        {/**능력 아이콘 슬라이드 */}
                        <div className="flex gap-[50px] mt-[60px]">
                            <img src={sqld} alt="c" className="w-[100px] h-[110px]" />
                            <img src={figma} alt="c" className="w-[100px] h-[110px] rounded-lg" />
                            <img src={notion} alt="c" className="w-[100px] h-[110px]" />
                        </div>
                    </>
                )}


                < div className="h-[60px]"></div>
            </div>
        </>
    )
}

export default HomePage;