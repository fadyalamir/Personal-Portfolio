import React from 'react';
import "./Skills.css";

export default function Show () {
  return (<>
    <p style={{fontSize: "2.3rem", textAlign: "center"}}>
      My <span style={{color: 'var(--blue)',}}>Skills</span>
    </p>
    <div className="app hidden">
      <div className="tag-list">
        {[15951, 19260, 10449, 16638, 15936].map((duration, index) => {
        const tags = [
          ["JavaScript", "Webdev", "Typescript", "Next.js", "Material Design", "Redux", "Animation", "Tailwind", "JavaScript", "Github"],
          ["Webdev", "Html", "Css", "Bootstrap", "Typescript", "JavaScript", "Github", "Figma", "Webdev", "Typescript", "Figma", "React"],
          ["Animation", "Tailwind", "React", "Git", "Animation", "HTML", "Github", "Postman", "Scss", "Bootstrap", "Material Design", "Next.js"],
          ["Scss", "HTML", "CSS", "React", "Next.js", "Figma", "React", "Webdev", "Redux", "Typescript", "Next.js", "JavaScript", "Github"],
          ["Next.js", "React", "Webdev", "Typescript", "Git", "Animation", "HTML", "Github", "Material Design", "Redux", "Animation"]
        ];
        return (
          <div
            key={index}
            className="loop-slider"
            // @ts-ignore
            style={{ "--duration": `${duration}ms`, "--direction": index % 2 === 0 ? "normal" : "reverse" }}
          >
            <div className="inner">
              {tags[index].map((tag, i) => (
                <div className="tag" key={i}>
                  <span>#</span> {tag}
                </div>
              ))}
              {tags[index].map((tag, i) => (
                <div className="tag" key={`dup-${i}`}>
                  <span>#</span> {tag}
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <div className="fade"></div>
      </div>
    </div>
    </>)
}