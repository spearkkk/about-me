import * as React from "react"
import About from "../component/About";

export default function IndexPage() {
    const introContent = () => "문제 해결을 좋아하는 개발자입니다. \n " +
        "단편적인 문제 풀이도 좋아하지만, 비즈니스 또는 시스템 상황을 이해하고 이를 바탕으로 문제를 해결하는 것도 좋아합니다."

    return <About introContent={introContent}></About>
}
