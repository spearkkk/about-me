import * as React from "react"
import About from "../component/About";

export default function EnPage() {
    const introContent = () => "I am a software engineer who like to solve problem. \n " +
        "I like to solve simple problems, " +
        "but I also like to understand business or system situations and solve problems based on them."

    return <About introContent={introContent}></About>
}
