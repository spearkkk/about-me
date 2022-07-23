import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";
import {RiFilePdfLine} from "@react-icons/all-files/ri/RiFilePdfLine";
import {RiGithubLine} from "@react-icons/all-files/ri/RiGithubLine";
import {RiPencilLine} from "@react-icons/all-files/ri/RiPencilLine";
import {RiAtLine} from "@react-icons/all-files/ri/RiAtLine";

import resume from "../../../static/resume.pdf";
import {Link} from "gatsby";

export default function About({introContent}) {
    const intro = <div>
        <h1 className="font-black text-custom-bg"># Introduce</h1>
        <div className="text-xs leading-relaxed text-5E8B7E whitespace-pre-line pt-2">
            {introContent()}
        </div>
    </div>

    const workExperiences = <div className="pt-8">
        <h1 className="font-bold text-custom-bg">
            # Work Experiences
        </h1>
        <ul className="list-disc text-sm text-5E8B7E pt-2">
            <li>Display Advertising Platform - <span className="font-semibold">Coupang</span>
                <div className="text-xs">(2020.01.~ )</div></li>
            <li>Advertising Channel - <span className="font-semibold">Coupang</span>
                <div className="text-xs">(2017.03. ~ 2019.12.)</div></li>
        </ul>
    </div>

    const Skills = <div className="pt-8">
        <h1 className="font-bold text-custom-bg">
            # Skills
        </h1>
        <ul className="list-disc text-xs text-5E8B7E pt-2">
            <li>Spring Framework(boot), Apache Kafka, Apache Spark</li>
            <li>Redis, MySQL, Elasticsearch</li>
            <li>ReactJS</li>
            <li>Java</li>
        </ul>
    </div>

    const history = <div className="pt-8">
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
                        <div className="py-6 space-y-4 font-serif divide-y divide-dashed">
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
