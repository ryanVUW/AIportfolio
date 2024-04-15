import Image from "next/image";
import { Baseline } from "@/components/component/baseline";
import { Iteration1 } from "@/components/component/iteration1";
import { Iteration2 } from "@/components/component/iteration2";
import { Iteration2Modified } from "@/components/component/iteration2Modified";

import { Iteration6Hero } from "@/components/component/iteration6-hero";
import { Iteration6Projects } from "@/components/component/iteration6-projects";
import { Iteration6AboutMe } from "@/components/component/iteration6-about-me";
import { Iteration6Contact } from "@/components/component/iteration6-contact";

import { Iteration7RealHero } from "@/components/component/iteration7-real-hero";
import { Iteration7NewGenProjects } from "@/components/component/iteration7-new-gen-projects";
import { Iteration7AboutMe } from "@/components/component/iteration7-about-me";

export default function Home() {
  return (
    <><Iteration7RealHero /><Iteration7NewGenProjects /><Iteration7AboutMe /></>
        

  );
}
