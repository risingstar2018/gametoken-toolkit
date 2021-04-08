import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1333.333 1333.333" {...props}>
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="prefix__a">
          <path d="M0 1000h1000V0H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)" transform="matrix(1.33333 0 0 -1.33333 0 1333.333)">
        <path
          d="M964.795 500.394c0-256.536-207.964-464.5-464.5-464.5s-464.5 207.964-464.5 464.5 207.964 464.5 464.5 464.5 464.5-207.964 464.5-464.5"
          fill="#9787c9"
        />
        <path d="M598.818 314.22H372.34v384.69h254.535V342.276c0-15.494-12.562-28.056-28.056-28.056" fill="#483674" />
        <path
          d="M465.59 454.033h-18.524v18.524h-19.51v-18.524h-18.524v-19.51h18.524V416h19.51v18.524h18.525z"
          fill="#fac24b"
        />
        <path
          d="M548.466 415.506h-11.46a6.038 6.038 0 00-6.037 6.038v11.459a6.038 6.038 0 006.038 6.038h11.459a6.038 6.038 0 006.038-6.038v-11.46a6.038 6.038 0 00-6.038-6.037"
          fill="#fc5454"
        />
        <path
          d="M409.156 526.402V654.86a6.482 6.482 0 006.482 6.482H587.81a6.481 6.481 0 006.48-6.482V526.403a6.482 6.482 0 00-6.481-6.483H415.638a6.482 6.482 0 00-6.482 6.482"
          fill="#362751"
        />
        <path
          d="M574.258 536.077H429.19a3.877 3.877 0 00-3.877 3.877V641.31a3.877 3.877 0 003.877 3.877h145.068a3.877 3.877 0 003.878-3.877V539.954a3.877 3.877 0 00-3.878-3.877"
          fill="#362751"
        />
        <path
          d="M432.045 536.081h50.573l95.517 95.517v6.904a6.726 6.726 0 01-6.652 6.684h-52.142l-94.029-94.029v-8.343a6.734 6.734 0 016.733-6.733M578.04 589.006l-52.93-52.93h35.092l17.837 17.838z"
          fill="#bbd4ff"
        />
        <path
          d="M615.078 355.977c0-23.062-18.695-41.757-41.757-41.757H396.12c-5.858 0-10.607 4.749-10.607 10.608V675.96c0 5.858 4.75 10.607 10.607 10.607h208.352c5.858 0 10.607-4.75 10.607-10.607zm4.621 346.747H380.891c-6.37 0-11.536-5.165-11.536-11.536V309.6c0-6.371 5.165-11.536 11.536-11.536h195.533c30.271 0 54.81 24.54 54.81 54.81v338.314c0 6.37-5.164 11.536-11.535 11.536"
          fill="#362751"
        />
        <path
          d="M578.04 450.809c0-6.5-5.27-11.768-11.769-11.768-6.499 0-11.767 5.269-11.767 11.768 0 6.499 5.268 11.768 11.767 11.768 6.5 0 11.768-5.27 11.768-11.768"
          fill="#fc5454"
        />
      </g>
    </Svg>
  );
};

export default Icon;
