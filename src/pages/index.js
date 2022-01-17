import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { RiGithubLine } from "@react-icons/all-files/ri/RiGithubLine";
import { RiPencilLine } from "@react-icons/all-files/ri/RiPencilLine";
import { RiAtLine } from "@react-icons/all-files/ri/RiAtLine";

import {Link} from "gatsby";

export default function IndexPage() {
    const intro = <div className="text-lg py-5 ">
        {new Date().getUTCFullYear() - 2017 + 1}th year <span className="font-black text-xl">Back-end Engineer</span>,
        <br/>
        <div className="indent-5">work in Republic of Korea<span className="text-xl">🇰🇷</span>.</div>
    </div>

    const ability = <div className="space-y-1.5">
        <h3 className="font-bold text-xl">
            Ability
        </h3>
        <ul className="list-disc text-sm space-y-1 m-0">
            <li>Can build back-office using <span className="font-semibold text-base">React JS &amp; Spring Boot</span></li>
            <li>Can architect &amp; build event driven data pipeline using <span className="font-semibold text-base">Kafka</span></li>
            <li>Can do big data processing by <span className="font-semibold text-base">Spark</span></li>
        </ul>
    </div>

    const experiences = <div className="space-y-1.5">
        <h3 className="font-bold text-xl">
            Experiences
        </h3>
        <ul className="list-disc text-sm space-y-1 m-0">
            <li><span className="font-semibold text-base">Keyword Search Ads. Automation</span>: Bidding, Reporting</li>
            <li><span className="font-semibold text-base">Display Ads. Management</span>: Feed Generation, Reporting, Audience Sync</li>
            <li><span className="font-semibold text-base">Price Comparison Site Ads. Management</span>: Reporting,
                Near-real time API &amp; Data pipeline</li>
        </ul>
    </div>
    return (
        <div className="min-h-screen max-h-screen py-20 px-4 flex flex-col justify-center relative overflow-hidden sm:py-40 bg-1E212D">
            {/*<img src="/img/beams.jpg" alt=""*/}
            {/*     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none" width="1308"/>*/}
            {/*<div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>*/}
            <div
                className="min-h-md max-h-md overflow-y-auto relative px-6 pb-8 bg-FAF3E0 shadow-xl ring-1 ring-gray-900/5 rounded-lg sm:max-w-md sm:mx-auto sm:px-10">
                <div className="max-w-md mx-auto">
                    <div className="p-10 sm:p-5">
                        <StaticImage src="../images/profile.png" alt="Profile" />
                    </div>
                    <div className="divide-y divide-reos-300/50">
                        <div className="py-6 space-y-4 text-1E212D font-serif">
                            {intro}
                            {ability}
                            {experiences}
                        </div>
                        <div className="pt-1 px-1 space-x-1.5 text-sm flex justify-end">
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