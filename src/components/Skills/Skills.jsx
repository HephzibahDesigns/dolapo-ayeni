import React from "react";
import {
  icon1,
  icon2,
  icon3,
  email,
  story,
  Instagram,
  blog,
  facebook,
  writing,
} from "../../Assets/export";
import { SkillCard } from "../export";
import "./skills.css";

const Skills = () => {
  return (
    <div className="app__skills">
      <h1 className="h1__text">What I Do</h1>

      <div className="app__skills-card">
        <SkillCard
          img={icon2}
          title="Social Media Management"
          subTitle="Experienced Social Media Manager skilled in curating and executing effective social media strategies to enhance brand presence and engagement."
        />

        <SkillCard
          img={icon1}
          title="Social Media Marketing"
          subTitle="Result-driven Social Media Marketer adept at crafting and executing dynamic campaigns to elevate brand visibility and engagement."
        />

        <SkillCard
          img={icon3}
          title="Copy Writing"
          subTitle="Creative Copywriter with a knack for crafting compelling and persuasive content that resonates with audiences.Proficient in delivering impactful messages."
        />

        <SkillCard
          img={writing}
          title="Content Writing"
          subTitle="Versatile content writer skilled in creating engaging and informative articles, blog posts, and web content. Adept at tailoring content to diverse audiences."
        />

        <SkillCard
          img={blog}
          title="Blog post Writing"
          subTitle="Experienced blog post writer passionate about sharing valuable insights through well-crafted, reader-focused articles.Committed to delivering blog posts that leave a lasting impact."
        />

        <SkillCard
          img={story}
          title="Story telling"
          subTitle="Storyteller extraordinaire with a knack for weaving captivating narratives across mediums. Skilled in crafting compelling characters, plotlines, and emotions that resonate deeply with audiences."
        />

        <SkillCard
          img={facebook}
          title="Facebook Ads"
          subTitle="Strategic Facebook Ads specialist driving targeted brand exposure and conversions. Proficient in audience segmentation, ad design, and campaign optimization to maximize ROI."
        />

        <SkillCard
          img={Instagram}
          title="Instagram Ads"
          subTitle="Creative Instagram Ads expert skilled in curating visually appealing content that captures attention and drives engagement. Proficient in leveraging Instagram's features to create compelling ad campaigns."
        />

        <SkillCard
          img={email}
          title="Email Marketing"
          subTitle="Results-oriented email marketer adept at designing impactful email campaigns that nurture leads and drive conversions. Proficient in crafting personalized, engaging content that resonates with subscribers"
        />
      </div>
    </div>
  );
};

export default Skills;
