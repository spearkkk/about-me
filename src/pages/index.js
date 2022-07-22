import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {RiGithubLine} from "@react-icons/all-files/ri/RiGithubLine";
import {RiPencilLine} from "@react-icons/all-files/ri/RiPencilLine";
import {RiAtLine} from "@react-icons/all-files/ri/RiAtLine";

import {Link} from "gatsby";
import {RiFilePdfLine} from "@react-icons/all-files/ri/RiFilePdfLine";

import resume from '../../static/resume.pdf';

export default function IndexPage() {
    const introContent = () => "문제 해결을 좋아하는 개발자입니다. \n " +
        "단편적인 문제 풀이도 좋아하지만, 비즈니스 또는 시스템 상황을 이해하고 이를 바탕으로 문제를 해결하는 것도 좋아합니다. \n" +
        "개인적으로는 간단한 알고리즘 문제를 풀며 문제 해결을 습관화하고, \n" +
        "업무에서는 문제 상황과 배경에 대해서 정리하고 이를 바탕으로 해결 방법을 제시해왔습니다. " +
        "이 정리한 내용을 바탕으로 팀 구성원들과 소통하며 협업을 해왔습니다."

    const intro = <div>
        <h1 className="font-black text-custom-bg"># Introduce</h1>
        <div className="text-xs leading-relaxed text-5E8B7E whitespace-pre-line">
            {introContent()}
        </div>
    </div>

    const workExperiences = <div className="pt-5">
        <h1 className="font-bold text-custom-bg">
            # Work Experiences
        </h1>
        <ul className="list-disc text-sm text-5E8B7E pt-2">
            <li>Display Advertising Platform - <span className="font-semibold">Coupang</span>
                <div className="text-xs">(2019.12.~ )</div></li>
            <li>Advertising Channel - <span className="font-semibold">Coupang</span>
                <div className="text-xs">(2017.03. ~ 2019.12.)</div></li>
        </ul>
    </div>

    const Skills = <div className="pt-5">
        <h1 className="font-bold text-custom-bg">
            # Skills
        </h1>
        <ul className="list-disc text-xs text-5E8B7E pt-2">
            <li>Spring Framework(boot), Apache Kafka, Apache Spark</li>
            <li>ARedis, MySQL, Eleasticsearch</li>
            <li>ReactJS</li>
            <li>Java</li>
        </ul>
    </div>

    const history = <div className="pt-5">
        <h1 className="font-bold text-custom-bg">
            # History
        </h1>
        <ul className="list-disc text-xs text-5E8B7E pt-2">
            <li>2017.01 ~ <br/>
                Working for E-commerce Company(Growth Marketing Dept. in Coupang)
            </li>
            <li>2011.03 ~ 2017.01 <br/>
                Studying Computer Engineering(Bachelor`s Degree in Kyung-Hee Univ.)
            </li>
        </ul>
    </div>
    return (
        <div
            className="min-h-screen py-20 px-4 flex flex-col justify-center relative overflow-hidden bg-custom-bg sm:py-[5vh] sm:max-h-screen">
            <div
                className="mx-auto overflow-hidden overflow-y-auto relative px-6 pb-8 bg-custom-fg shadow-xl ring-1 ring-gray-900/5 rounded-lg sm:max-w-md sm:min-h-md sm:max-h-md sm:mx-auto sm:px-10">
                <div className="max-w-md mx-auto">
                    <div className="pt-10 pb-0 px-10 sm:px-20">
                        <StaticImage src="../images/profile.png" alt="Profile"/>
                    </div>
                    <div className="divide-y divide-reos-300/50">
                        <div className="py-6 space-y-4 font-serif divide-y">
                            {intro}
                            {workExperiences}
                            {Skills}
                            {history}
                        </div>
                        <div className="pt-1 px-1 space-x-1.5 text-sm flex justify-end text-custom-bg">
                            <a href={resume}><RiFilePdfLine/></a>
                            <Link to="https://github.com/spearkkk">
                                <RiGithubLine/>
                            </Link>
                            <Link to="https://spearkkk.dev">
                                <RiPencilLine/>
                            </Link>
                            <a href="mailto://spearkkp@gmail.com">
                                <RiAtLine/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
