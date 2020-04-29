
export const executeScript = () => {
  const mainContainer = document.createElement("div");
  let mouseMove = null;
  let opened = false;
  document.body.appendChild(mainContainer);
  mainContainer.id = "main-container";

  var style = document.createElement("style");
  const stylePointer = document.createElement("style");

  const linkFont = document.createElement("link");
  linkFont.href = "https://rsms.me/inter/inter.css";
  linkFont.rel = "stylesheet";
  document.head.appendChild(linkFont);
  document.head.appendChild(linkFont);

  const verticalLine = document.createElement("div");
  const verticalLineDots = document.createElement("div");
  const horizontalLine = document.createElement("div");
  const horizontalLineDots = document.createElement("div");
  const heightDistanceText = document.createElement("div");
  const widthDistanceText = document.createElement("div");

  const insideTopLine = document.createElement("div");
  const insideTopText = document.createElement("div");

  const insideBottomLine = document.createElement("div");
  const insideBottomText = document.createElement("div");

  const insideLeftLine = document.createElement("div");
  const insideLeftText = document.createElement("div");

  const insideRightLine = document.createElement("div");
  const insideRightText = document.createElement("div");

  const topBanner = document.createElement("div");

  const leftText = document.createElement("div");
  const topText = document.createElement("div");

  const boxHoverTopLine = document.createElement("div");
  const boxHoverBottomLine = document.createElement("div");
  const boxHoverLeftLine = document.createElement("div");
  const boxHoverRightLine = document.createElement("div");

  const boxSelectTopLine = document.createElement("div");
  const boxSelectBottomLine = document.createElement("div");
  const boxSelectLeftLine = document.createElement("div");
  const boxSelectRightLine = document.createElement("div");

  window.addEventListener(
    "scroll",
    ev => {
      verticalLine.style.opacity = 0;
      verticalLineDots.style.opacity = 0;
      horizontalLine.style.opacity = 0;
      horizontalLineDots.style.opacity = 0;
      heightDistanceText.style.opacity = 0;
      widthDistanceText.style.opacity = 0;
      insideTopLine.style.opacity = 0;
      insideTopText.style.opacity = 0;
      insideBottomLine.style.opacity = 0;
      insideBottomText.style.opacity = 0;
      insideLeftLine.style.opacity = 0;
      insideLeftText.style.opacity = 0;
      insideRightLine.style.opacity = 0;
      insideRightText.style.opacity = 0;
      leftText.style.opacity = 0;
      topText.style.opacity = 0;
      boxHoverTopLine.style.opacity = 0;
      boxHoverBottomLine.style.opacity = 0;
      boxHoverLeftLine.style.opacity = 0;
      boxHoverRightLine.style.opacity = 0;
      boxSelectTopLine.style.opacity = 0;
      boxSelectBottomLine.style.opacity = 0;
      boxSelectLeftLine.style.opacity = 0;
      boxSelectRightLine.style.opacity = 0;
      elementsDetected = null;
    },
    true
  );

  window.addEventListener("keydown", ev => {
    if (!opened) return;
    if (ev.key.toLowerCase() === "c") {
      copyTextToClipboard(`
    font-family: ${cFamily};
    font-size: ${cSize};
    font-weight: ${cWeight};
    color: ${cColor};
    `);
    }
    // if (ev.key.toLowerCase() === "escape") {
    //   hideBoxSizes();
    // }
  });

  let cSize = "-";
  let cWeight = "-";
  let cFamily = "-";
  let cColor = "-";

  topBanner.id = "top-banner";

  leftText.className = "size-text-container";
  topText.className = "size-text-container";

  boxHoverTopLine.className = "h-line-hover";
  boxHoverBottomLine.className = "h-line-hover";
  boxHoverLeftLine.className = "v-line-hover";
  boxHoverRightLine.className = "v-line-hover";

  boxSelectTopLine.className = "h-line-select";
  boxSelectBottomLine.className = "h-line-select";
  boxSelectLeftLine.className = "v-line-select";
  boxSelectRightLine.className = "v-line-select";

  stylePointer.innerText = `
    * {
      cursor: pointer;
    }
  `;

  style.innerText = `
    

    .main-container {
      font-weitght: 800 !important;
      display: flex;
    }

    .container-font {
      font-family:  'Heebo', sans-serif !important;
      display: flex;
      align-items: center;
    }

    .color-container {
      height: 8px;
      width: 8px;
      margin-right: 2px;
    }

    .title-font {
      font-size: 12px;
      color: #f5f5f7;
      margin-right: 10px;
      cursor: move;
    }

    .text-font {
      max-width: 300px;
      text-overflow: ellipsis;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: white;
      min-width: 120px;
      cursor: move;
    }

    #top-banner {
      cursor: move;
      bottom:0;
      justify-content: space-around;
      touch-action: none;
      user-select: none;
      position: fixed;
      background: transparent;
      padding-right: 0;
      opacity: 1;
      text-align: center;
      z-index: 999999999999999999;
      left: 35px;
      top: 507.5px;
      height: 140px;
      border-radius: 3px;
      width: 550px;
      /* backdrop-filter: saturate(180%) blur(20px); */
      animation: fade-in 0.8s;
      transition: transform 0.1s ease-in-out;
    }

    @keyframes fade-in {
      0% {
        bottom: -20px;
      }
      100% {
        bottom: 0px;
      }
    }
    
    .h-line-hover {
      position: fixed;
      height: 2px;
      background: #ED003F; 
      z-index: 9999;
    }

    .v-line-hover {
      position: fixed;
      width: 2px;
      background: #ED003F;
      z-index: 9999;
    }

    .h-line-select {
      position: fixed;
      height: 2px;
      background: #00B0B0; 
      z-index: 99999;
    }

    .v-line-select {
      position: fixed;
      width: 2px;
      background: #00B0B0; 
      z-index: 99999;
    }

    #loading-container {
      z-index: 99999;
      background-color: #ffffff47;
      height: 100vh;
      width: 100%;
      display: flex;
      position: fixed;
      top:0;
      left:0;
      align-items: center;
      justify-content: center;
    }
    @keyframes spin {
      to { -webkit-transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
      to { -webkit-transform: rotate(360deg); }
    }
    .size-text-container {
      z-index:1000000;
      display: flex;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      align-items: center;
      transition: all 0.1s ease-in-out;

    }
    .size-text {
      position: fixed;
      font-family:  'Heebo', sans-serif;
      width: fit-content;
      font-size: 14px;
      padding: 4px;
      border-radius: 4px;
      border: 2px solid #00B0B0;
      color: white;
      font-weight: 100;
      line-height: 14px;
      transition: all 0.3s ease-in-out;
      z-index: 999999999999;
      background: rgba(0,0,0,1);
    }

    .size-text-tiny {
      font-family:  'Heebo', sans-serif;
      width: fit-content;
      font-size: 13px;
      padding: 4px;
      border-radius: 4px;
      line-height: 13px;
      color: white;
      transition: all 0.3s ease-in-out;
      z-index: 999999999999;
      border: 2px solid #ED003F;
      background: rgba(0,0,0,1);
    }

    .nav-container {
      font-family: 'Inter';
      background: linear-gradient(0.01deg, #2E3138 0.35%, #3D4148 192.77%);
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 24px 32px rgba(0, 0, 0, 0.04);
      border-radius: 10px;
      padding: 8px 16px 8px 16px;
      width: fit-content;
      position: fixed;
    }

  .nav-flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 488px;
      margin-top: 8px;
  }

  .nav-flex-item {
      display: flex;
  }

  .nav-title-main {
      color: #FFFFFF;
      font-weight: 900;
      font-size: 8px;
      line-height: 16px;
      margin-right: 4px;
      margin-left: 3px;
  }

  .nav-title-sub {
      font-size: 8px;
      line-height: 16px;
      color: #FFFFFF;
      opacity: 0.4;
  }

  .nav-inside-container {
      background: linear-gradient(0.01deg, #2E3138 0.35%, #3D4148 192.77%);
      box-shadow: 3.88889px 3.88889px 16.6667px #1F2427;
      border-radius: 10px;
      width: 500px;
      height: 70px;
  }

  .nav-inside-container-sub {
      position: absolute;
      background: #2d3137;
      border-radius: 7px;
      width: 482px;
      top: 19px;
      left: 19px;
      height: 64px;
      margin-right: 18px;
  }

  .nav-close-1 {
      box-shadow: -4px -4px 10px rgba(72, 78, 83, 0.6), 4px 4px 10px rgba(31, 36, 39, 0.8);
      position: absolute;
      height: 70px;
      width: 70px;
      display: flex;
      border-radius: 10px;
      right: 16px;
      align-items: center;
      justify-content: center;
  }

  .nav-close-2 {
      background: linear-gradient(318.21deg, #2C3036 14.05%, #31343C 85.29%);
      border-radius: 10px;
      transform: rotate(180deg);
      height: 70px;
      width: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .nav-close-inside-1 {
      position: absolute;
      right: 18.5px;
      background: linear-gradient(320.66deg, #2F353A 14.75%, #1C1F22 84.81%);
      filter: blur(2px);
      border-radius: 8px;
      transform: rotate(180deg);
      height: 65px;
      width: 65px;
      display: flex;
      align-items: center;
      justify-content: center;
  }


  .nav-close-inside-1:hover~.nav-close-svg {
      filter: brightness(2);
  }

  .nav-close-inside-2 {
      position: absolute;
      right: 18.5px;
      background: linear-gradient(320.66deg, #2F353A 14.75%, #1C1F22 84.81%);
      border-radius: 8px;
      transform: rotate(180deg);
      height: 65px;
      width: 65px;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .nav-close-svg {
      transition: all 0.2s;
      position: absolute;
      right: 40px;
  }

  .nav-table {
      width: 100%;
      margin-top: 16px;
      margin-left: 10px;
  }

  .nav-table th {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 14px;
      letter-spacing: 0.02em;
      color: #FFFFFF;
      opacity: 0.4;
      text-align: left;
  }

  .nav-table td {
      font-family: Inter;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.02em;
      color: #FFFFFF;
      text-align: left;
  }

  .nav-table-title {
      display: flex;
      font-weight: 600;
      opacity: 0.4;
      margin-right: 3px;
  }

  .nav-table-flex {
      display: flex;
  }

  .nav-table-circle-container {
    margin-left: 0px;
    margin-top: -18px;
    height: 10px;
    width: 0px;
  }

  .nav-table-circle-0 {
      position: absolute;
      background: linear-gradient(318.21deg, #2C3036 14.05%, #31343C 85.29%);
      box-shadow: -3.88889px -3.88889px 10px #484E53, 3.88889px 3.88889px 10px #1F2427;
      border-radius: 20px;
      transform: rotate(180deg);
      width: 16px;
      height: 16px;
      margin-top: 2.5px;
      margin-left: 2.5px;
  }

  .nav-table-circle-1 {
      position: absolute;
      background: linear-gradient(318.21deg, #2C3036 14.05%, #31343C 85.29%);
      filter: blur(1px);
      border-radius: 20px;
      transform: rotate(180deg);
      width: 21px;
      height: 21px;
  }

  .nav-table-circle-2 {
      position: absolute;
      background: linear-gradient(320.66deg, #2F353A 14.75%, #1C1F22 84.81%);
      border-radius: 20px;
      transform: rotate(180deg);
      width: 14px;
      height: 14px;
      margin-top: 3.5px;
      margin-left: 3.5px;
  }

  .nav-table-circle-3 {
      position: absolute;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      border-radius: 20px;
      transform: rotate(180deg);
      width: 8px;
      height: 8px;
      margin-top: 7px;
      margin-left: 7px;
  }

`;

  let elementsDetected = null;


  function getRulerNav(values) {
    return `
  <div class="nav-container">
        <div class="nav-flex">
            <div class="nav-inside-container"></div>
            <div class="nav-inside-container-sub">
                <table class="nav-table">
                    <tr>
                        <th>
                            FONT COLOR
                        </th>
                        <th>
                            FONT SIZE
                        </th>
                        <th>
                            FONT WEIGHT
                        </th>
                        <th>
                            FONT FAMILY
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <div class="nav-table-flex">
                                <div class="nav-table-title">
                                    RGBA
                                </div>
                                <div style="width:130px">
                                    ${values.color.replace('rgb(', '').replace('rgba(', '').replace(')', '')}
                                </div>
                                <div class="nav-table-circle-container">
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_dd)">
                                <rect x="37.3334" y="37.3334" width="22.6667" height="22.6667" rx="11.3333" transform="rotate(180 37.3334 37.3334)" fill="url(#paint0_linear)"/>
                                </g>
                                <g filter="url(#filter1_f)">
                                <rect x="38" y="38" width="24" height="24" rx="12" transform="rotate(180 38 38)" fill="url(#paint1_linear)"/>
                                </g>
                                <rect x="36.6667" y="36.6667" width="21.3333" height="21.3333" rx="10.6667" transform="rotate(180 36.6667 36.6667)" fill="url(#paint2_linear)"/>
                                <g filter="url(#filter2_dd)">
                                <rect x="33.5556" y="33.5555" width="15.1111" height="15.1111" rx="7.55556" transform="rotate(180 33.5556 33.5555)" fill="url(#paint3_linear)"/>
                                </g>
                                <g filter="url(#filter3_f)">
                                <rect x="34" y="34" width="16" height="16" rx="8" transform="rotate(180 34 34)" fill="url(#paint4_linear)"/>
                                </g>
                                <rect x="33.1111" y="33.1112" width="14.2222" height="14.2222" rx="7.11111" transform="rotate(180 33.1111 33.1112)" fill="url(#paint5_linear)"/>
                                <rect x="31" y="31" width="10" height="10" rx="5" transform="rotate(180 31 31)" fill="${values.color}"/>
                                <rect x="30.5" y="30.5" width="9" height="9" rx="4.5" transform="rotate(180 30.5 30.5)" stroke="black" stroke-opacity="0.1"/>
                                <defs>
                                <filter id="filter0_dd" x="0.777858" y="0.777858" width="50.4444" height="50.4444" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dx="-3.88889" dy="-3.88889"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.281667 0 0 0 0 0.305 0 0 0 0 0.325 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dx="3.88889" dy="3.88889"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.120764 0 0 0 0 0.139321 0 0 0 0 0.154167 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                                </filter>
                                <filter id="filter1_f" x="13" y="13" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
                                </filter>
                                <filter id="filter2_dd" x="4.55563" y="4.55557" width="42.8889" height="42.8889" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dx="-3.88889" dy="-3.88889"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.281667 0 0 0 0 0.305 0 0 0 0 0.325 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dx="3.88889" dy="3.88889"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.120764 0 0 0 0 0.139321 0 0 0 0 0.154167 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                                </filter>
                                <filter id="filter3_f" x="17" y="17" width="18" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
                                </filter>
                                <linearGradient id="paint0_linear" x1="56.1365" y1="57.4243" x2="40.9395" y2="40.4243" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#2C3036"/>
                                <stop offset="1" stop-color="#31343C"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear" x1="57.9091" y1="59.2727" x2="41.8182" y2="41.2727" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#2C3036"/>
                                <stop offset="1" stop-color="#31343C"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear" x1="54.2667" y1="55.3334" x2="40.9334" y2="39.0667" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#2F353A"/>
                                <stop offset="1" stop-color="#1C1F22"/>
                                </linearGradient>
                                <linearGradient id="paint3_linear" x1="46.091" y1="46.9495" x2="35.9596" y2="35.6161" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#2C3036"/>
                                <stop offset="1" stop-color="#31343C"/>
                                </linearGradient>
                                <linearGradient id="paint4_linear" x1="47.2727" y1="48.1818" x2="36.5455" y2="36.1818" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#2C3036"/>
                                <stop offset="1" stop-color="#31343C"/>
                                </linearGradient>
                                <linearGradient id="paint5_linear" x1="44.8445" y1="45.5557" x2="35.9556" y2="34.7112" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#2F353A"/>
                                <stop offset="1" stop-color="#1C1F22"/>
                                </linearGradient>
                                </defs>
                                </svg>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="nav-table-flex">
                                <div class="nav-table-title">
                                    PX
                                </div>
                                <div>
                                    ${values.fontSize}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div>
                              ${values.fontWeight}
                            </div>
                        </td>
                        <td>
                            <div>
                              ${(values.fontFamily.length >= '18' ? values.fontFamily.substr(0, 16) + '...' : values.fontFamily).replace('"', '').replace('"', '')}
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
           
        </div>
        <div class="nav-flex">
            <div class="nav-flex-item">
                <div class="nav-title-main">
                    RULERULER
                </div>
                <div class="nav-title-sub">
                    for measures lovers.
                </div>
            </div>
            <div class="nav-flex-item">
                <div class="nav-title-sub">
                    By
                </div>
                <div class="nav-title-main">
                    ALUXION
                </div>
            </div>
        </div>
    </div>`
  }

  let showLines = false;
  window.showLines = (show) => {
    showLines = show;
    if (show) {
      document.head.appendChild(stylePointer)
      mainContainer.appendChild(leftText);
      mainContainer.appendChild(topText);

      mainContainer.appendChild(boxHoverTopLine);
      mainContainer.appendChild(boxHoverBottomLine);
      mainContainer.appendChild(boxHoverLeftLine);
      mainContainer.appendChild(boxHoverRightLine);

      mainContainer.appendChild(boxSelectTopLine);
      mainContainer.appendChild(boxSelectBottomLine);
      mainContainer.appendChild(boxSelectLeftLine);
      mainContainer.appendChild(boxSelectRightLine);

      mainContainer.appendChild(verticalLine);
      mainContainer.appendChild(verticalLineDots);
      mainContainer.appendChild(heightDistanceText);
      mainContainer.appendChild(horizontalLine);
      mainContainer.appendChild(horizontalLineDots);
      mainContainer.appendChild(widthDistanceText);

      mainContainer.appendChild(insideTopLine);
      mainContainer.appendChild(insideTopText);
      mainContainer.appendChild(insideBottomLine);
      mainContainer.appendChild(insideBottomText);
      mainContainer.appendChild(insideLeftLine);
      mainContainer.appendChild(insideLeftText);
      mainContainer.appendChild(insideRightLine);
      mainContainer.appendChild(insideRightText);
    } else if (leftText.parentElement === mainContainer) {
      document.head.removeChild(stylePointer)

      mainContainer.removeChild(leftText);
      mainContainer.removeChild(topText);

      mainContainer.removeChild(boxHoverTopLine);
      mainContainer.removeChild(boxHoverBottomLine);
      mainContainer.removeChild(boxHoverLeftLine);
      mainContainer.removeChild(boxHoverRightLine);

      mainContainer.removeChild(boxSelectTopLine);
      mainContainer.removeChild(boxSelectBottomLine);
      mainContainer.removeChild(boxSelectLeftLine);
      mainContainer.removeChild(boxSelectRightLine);

      mainContainer.removeChild(verticalLine);
      mainContainer.removeChild(verticalLineDots);
      mainContainer.removeChild(heightDistanceText);
      mainContainer.removeChild(horizontalLine);
      mainContainer.removeChild(horizontalLineDots);
      mainContainer.removeChild(widthDistanceText);

      mainContainer.removeChild(insideTopLine);
      mainContainer.removeChild(insideTopText);
      mainContainer.removeChild(insideBottomLine);
      mainContainer.removeChild(insideBottomText);
      mainContainer.removeChild(insideLeftLine);
      mainContainer.removeChild(insideLeftText);
      mainContainer.removeChild(insideRightLine);
      mainContainer.removeChild(insideRightText);
    }
  }

  window.showBoxSizes = (show) => {
    opened = true;

    document.head.appendChild(style);

    mainContainer.appendChild(topBanner);

    //window.showLines(false);




    window.checked = !window.checked;

    let timeout = null;

    insideBottomLine.style.position = "fixed";
    insideTopLine.style.position = "fixed";
    verticalLine.style.position = "fixed";
    insideBottomLine.style.width = "2px";
    insideTopLine.style.width = "2px";
    verticalLine.style.width = "2px";
    insideBottomLine.style.background = "#00B0B0";
    insideTopLine.style.background = "#00B0B0";
    verticalLine.style.background = "#00B0B0";
    insideBottomLine.style.zIndex = "99999";
    insideTopLine.style.zIndex = "99999";
    verticalLine.style.zIndex = "99999";

    verticalLineDots.style.position = "fixed";
    verticalLineDots.style.width = "0px";
    verticalLineDots.style.border = "1px dashed #00B0B0";
    verticalLineDots.style.zIndex = "99999";

    heightDistanceText.className = "size-text";
    insideBottomText.className = "size-text";
    insideTopText.className = "size-text";

    insideRightLine.style.position = "fixed";
    insideLeftLine.style.position = "fixed";
    horizontalLine.style.position = "fixed";
    insideRightLine.style.height = "2px";
    insideLeftLine.style.height = "2px";
    horizontalLine.style.height = "2px";
    insideRightLine.style.background = "#00B0B0";
    insideLeftLine.style.background = "#00B0B0";
    horizontalLine.style.background = "#00B0B0";
    insideRightLine.style.zIndex = "99999";
    insideLeftLine.style.zIndex = "99999";
    horizontalLine.style.zIndex = "99999";

    horizontalLineDots.style.position = "fixed";
    horizontalLineDots.style.width = "0px";
    horizontalLineDots.style.border = "1px dashed #00B0B0";
    horizontalLineDots.style.zIndex = "99999";

    insideRightText.className = "size-text";
    insideLeftText.className = "size-text";
    widthDistanceText.className = "size-text";

    mouseMove = e => {
      e.stopPropagation();
      e.preventDefault();
      e.stopImmediatePropagation();

      clearTimeout(timeout);
      const elem = document.elementFromPoint(e.clientX, e.clientY);
      let validElement = isValidElement(elem);

      if (elementsDetected && validElement && elem) {
        timeout = setTimeout(() => {
          const topElement =
            elementsDetected.getBoundingClientRect().top >
              elem.getBoundingClientRect().top
              ? elem
              : elementsDetected;

          const bottomElement =
            topElement === elementsDetected ? elem : elementsDetected;

          const leftElement =
            elementsDetected.getBoundingClientRect().left >
              elem.getBoundingClientRect().left
              ? elem
              : elementsDetected;

          const rightElement =
            leftElement === elementsDetected ? elem : elementsDetected;

          const topV =
            topElement.getBoundingClientRect().top + topElement.offsetHeight;
          const leftV = elementsDetected.getBoundingClientRect().left;

          const topH = elementsDetected.getBoundingClientRect().top;
          const leftH =
            leftElement.getBoundingClientRect().left + leftElement.offsetWidth;

          const isIntersected =
            (leftElement.getBoundingClientRect().left - 1 <
              rightElement.getBoundingClientRect().left &&
              leftElement.getBoundingClientRect().right + 1 >
              rightElement.getBoundingClientRect().left) ||
            (topElement.getBoundingClientRect().top - 1 <
              bottomElement.getBoundingClientRect().top &&
              topElement.getBoundingClientRect().bottom + 1 >
              bottomElement.getBoundingClientRect().top);

          if (!isIntersected && topElement) {
            verticalLine.style.top = `${topV + 2}px`;
            verticalLine.style.left = `${leftV +
              elementsDetected.offsetWidth / 2}px`;

            verticalLineDots.style.top = `${
              topElement === elem
                ? topElement.getBoundingClientRect().top + topElement.offsetHeight
                : topElement.getBoundingClientRect().top +
                topElement.offsetHeight / 2
              }px`;
            verticalLineDots.style.left = `${
              leftElement === elem
                ? elem.getBoundingClientRect().right
                : elem.getBoundingClientRect().left
              }px`;

            horizontalLineDots.style.top = `${
              topElement === elem
                ? elem.getBoundingClientRect().bottom
                : elem.getBoundingClientRect().top
              }px`;
            horizontalLineDots.style.left = `${
              leftElement === elem
                ? leftElement.getBoundingClientRect().left +
                leftElement.offsetWidth
                : leftElement.getBoundingClientRect().left +
                leftElement.offsetWidth / 2
              }px`;

            horizontalLine.style.top = `${topH +
              elementsDetected.offsetHeight / 2}px`;
            horizontalLine.style.left = `${leftH}px`;

            const distanceHeight =
              bottomElement.getBoundingClientRect().top -
              (topElement.getBoundingClientRect().top + topElement.offsetHeight);

            const distanceWidth = Math.abs(
              rightElement.getBoundingClientRect().left -
              (leftElement.getBoundingClientRect().left +
                leftElement.offsetWidth)
            );

            const lineDistanceHeight =
              bottomElement.getBoundingClientRect().top -
              4 -
              (topElement.getBoundingClientRect().top + topElement.offsetHeight);

            const lineDistanceWidth =
              rightElement.getBoundingClientRect().left -
              4 -
              (leftElement.getBoundingClientRect().left +
                leftElement.offsetWidth);

            verticalLine.style.height = `${lineDistanceHeight + 2}px`;
            verticalLineDots.style.height = `${lineDistanceHeight +
              elementsDetected.offsetHeight / 2 +
              2}px`;

            horizontalLine.style.width = `${lineDistanceWidth + 5}px`;
            horizontalLineDots.style.width = `${lineDistanceWidth +
              elementsDetected.offsetWidth / 2 +
              2}px`;

            heightDistanceText.style.top = `${topV +
              lineDistanceHeight / 2 -
              14}px`;
            heightDistanceText.style.left = `${leftV +
              5 +
              elementsDetected.offsetWidth / 2}px`;

            widthDistanceText.style.top = `${topH +
              elementsDetected.offsetHeight / 2 +
              5}px`;
            widthDistanceText.style.left = `${leftH + lineDistanceWidth / 2}px`;

            heightDistanceText.innerHTML = `${Math.round(distanceHeight)}px`;
            widthDistanceText.innerHTML = `${Math.round(distanceWidth)}px`;

            insideTopLine.style.opacity = 0;
            insideTopText.style.opacity = 0;
            insideBottomLine.style.opacity = 0;
            insideBottomText.style.opacity = 0;
            insideLeftLine.style.opacity = 0;
            insideLeftText.style.opacity = 0;
            insideRightLine.style.opacity = 0;
            insideRightText.style.opacity = 0;

            verticalLine.style.opacity = 1;
            verticalLineDots.style.opacity = 1;
            horizontalLine.style.opacity = 1;
            horizontalLineDots.style.opacity = 1;
            heightDistanceText.style.opacity = 1;
            widthDistanceText.style.opacity = 1;
          } else {
            const lineDistanceWidth =
              rightElement.getBoundingClientRect().left -
              leftElement.getBoundingClientRect().right;

            const lineDistanceHeight =
              bottomElement.getBoundingClientRect().top -
              topElement.getBoundingClientRect().bottom;

            horizontalLine.style.left = `${
              leftElement.getBoundingClientRect().right
              }px`;
            horizontalLine.style.top = `${Math.min(
              topElement.getBoundingClientRect().bottom,
              bottomElement.getBoundingClientRect().bottom
            )}px`;

            verticalLine.style.left = `${Math.min(
              leftElement.getBoundingClientRect().right,
              rightElement.getBoundingClientRect().right
            )}px`;

            verticalLine.style.top = `${
              topElement.getBoundingClientRect().bottom
              }px`;

            verticalLine.style.height = `${lineDistanceHeight}px`;
            horizontalLine.style.width = `${lineDistanceWidth}px`;

            widthDistanceText.style.top = `${Math.min(
              topElement.getBoundingClientRect().bottom,
              bottomElement.getBoundingClientRect().bottom
            ) + 5}px`;
            widthDistanceText.style.left = `${leftElement.getBoundingClientRect()
              .right +
              lineDistanceWidth / 2 -
              5}px`;

            heightDistanceText.style.top = `${topElement.getBoundingClientRect()
              .bottom +
              lineDistanceHeight / 2 -
              5}px`;
            heightDistanceText.style.left = `${Math.min(
              leftElement.getBoundingClientRect().right,
              rightElement.getBoundingClientRect().right
            ) + 5}px`;

            widthDistanceText.innerHTML = `${Math.floor(lineDistanceWidth)}px`;
            heightDistanceText.innerHTML = `${Math.floor(lineDistanceHeight)}px`;

            let isInside = true;

            if (lineDistanceHeight <= 0) {
              verticalLine.style.opacity = 0;
              heightDistanceText.style.opacity = 0;
            } else {
              verticalLine.style.opacity = 1;
              heightDistanceText.style.opacity = 1;
              isInside = false;
            }

            if (lineDistanceWidth <= 0) {
              horizontalLine.style.opacity = 0;
              widthDistanceText.style.opacity = 0;
            } else {
              horizontalLine.style.opacity = 1;
              widthDistanceText.style.opacity = 1;
              isInside = false;
            }

            verticalLineDots.style.opacity = 0;
            horizontalLineDots.style.opacity = 0;

            if (isInside) {
              const insideTopDistance =
                bottomElement.getBoundingClientRect().top -
                topElement.getBoundingClientRect().top;
              insideTopLine.style.top = `${
                topElement.getBoundingClientRect().top
                }px`;
              insideTopLine.style.left = `${rightElement.getBoundingClientRect()
                .left +
                bottomElement.offsetWidth / 2}px`;
              insideTopLine.style.height = `${insideTopDistance}px`;
              insideTopText.innerHTML = `${Math.floor(insideTopDistance)}px`;
              const insideTopTextTop =
                topElement.getBoundingClientRect().top + insideTopDistance / 2;
              insideTopText.style.top = `${Math.max(insideTopTextTop, 5)}px`;
              insideTopText.style.left = `${rightElement.getBoundingClientRect()
                .left +
                bottomElement.offsetWidth / 2 +
                5}px`;

              const insideBottomDistance =
                topElement.getBoundingClientRect().bottom -
                bottomElement.getBoundingClientRect().bottom;
              insideBottomLine.style.top = `${
                bottomElement.getBoundingClientRect().bottom
                }px`;
              insideBottomLine.style.left = `${rightElement.getBoundingClientRect()
                .left +
                bottomElement.offsetWidth / 2}px`;
              insideBottomLine.style.height = `${insideBottomDistance}px`;
              insideBottomText.innerHTML = `${Math.floor(
                insideBottomDistance
              )}px`;
              const insideBottomTextTop =
                bottomElement.getBoundingClientRect().bottom +
                insideBottomDistance / 2;
              insideBottomText.style.top = `${Math.min(
                insideBottomTextTop,
                window.innerHeight - 30
              )}px`;
              insideBottomText.style.left = `${rightElement.getBoundingClientRect()
                .left +
                bottomElement.offsetWidth / 2 +
                5}px`;

              const insideLeftDistance =
                rightElement.getBoundingClientRect().left -
                leftElement.getBoundingClientRect().left;
              insideLeftLine.style.top = `${bottomElement.getBoundingClientRect()
                .top +
                bottomElement.offsetHeight / 2}px`;
              insideLeftLine.style.left = `${
                leftElement.getBoundingClientRect().left
                }px`;
              insideLeftLine.style.width = `${insideLeftDistance}px`;
              insideLeftText.innerHTML = `${Math.floor(insideLeftDistance)}px`;
              insideLeftText.style.top = `${bottomElement.getBoundingClientRect()
                .top +
                bottomElement.offsetHeight / 2 +
                5}px`;
              const insideLeftTextLeft =
                leftElement.getBoundingClientRect().left +
                insideLeftDistance / 2 -
                5;
              insideLeftText.style.left = `${Math.max(5, insideLeftTextLeft)}px`;

              const insideRightDistance =
                leftElement.getBoundingClientRect().right -
                rightElement.getBoundingClientRect().right;
              insideRightLine.style.top = `${bottomElement.getBoundingClientRect()
                .top +
                bottomElement.offsetHeight / 2}px`;
              insideRightLine.style.left = `${
                rightElement.getBoundingClientRect().right
                }px`;
              insideRightLine.style.width = `${insideRightDistance}px`;
              insideRightText.innerHTML = `${Math.floor(insideRightDistance)}px`;
              insideRightText.style.top = `${bottomElement.getBoundingClientRect()
                .top +
                bottomElement.offsetHeight / 2 +
                5}px`;
              const insideRightTextLeft =
                rightElement.getBoundingClientRect().right +
                insideRightDistance / 2 -
                5;
              insideRightText.style.left = `${Math.min(
                window.innerWidth - 60,
                insideRightTextLeft
              )}px`;

              insideTopLine.style.opacity = insideTopDistance > 0 ? 1 : 0;
              insideTopText.style.opacity = insideTopDistance > 0 ? 1 : 0;
              insideBottomLine.style.opacity = insideBottomDistance > 0 ? 1 : 0;
              insideBottomText.style.opacity = insideBottomDistance > 0 ? 1 : 0;
              insideLeftLine.style.opacity = insideLeftDistance > 0 ? 1 : 0;
              insideLeftText.style.opacity = insideLeftDistance > 0 ? 1 : 0;
              insideRightLine.style.opacity = insideRightDistance > 0 ? 1 : 0;
              insideRightText.style.opacity = insideRightDistance > 0 ? 1 : 0;
            } else {
              insideTopLine.style.opacity = 0;
              insideTopText.style.opacity = 0;
              insideBottomLine.style.opacity = 0;
              insideBottomText.style.opacity = 0;
              insideLeftLine.style.opacity = 0;
              insideLeftText.style.opacity = 0;
              insideRightLine.style.opacity = 0;
              insideRightText.style.opacity = 0;
            }
          }
          // setTimeout(() => {
          //   if (!elementInViewport(insideBottomText)) {
          //     insideBottomText.style.top = `${window.innerHeight - 30}px`;
          //   }
          //   if (!elementInViewport(insideTopText)) {
          //     insideTopText.style.top = "30px";
          //   }
          //   if (!elementInViewport(insideLeftText)) {
          //     insideLeftText.style.left = "30px";
          //   }
          //   if (!elementInViewport(insideRightText)) {
          //     insideRightText.style.left = `${window.innerWidth - 30}px`;
          //   }
          // }, 15);
        }, 10);
      }

      const clickHandler = ev => {
        if (!opened) return;
        insideTopLine.style.opacity = 0;
        insideTopText.style.opacity = 0;
        insideBottomLine.style.opacity = 0;
        insideBottomText.style.opacity = 0;
        insideLeftLine.style.opacity = 0;
        insideLeftText.style.opacity = 0;
        insideRightLine.style.opacity = 0;
        insideRightText.style.opacity = 0;
        verticalLineDots.style.opacity = 0;
        horizontalLineDots.style.opacity = 0;
        verticalLine.style.opacity = 0;
        horizontalLine.style.opacity = 0;
        heightDistanceText.style.opacity = 0;
        widthDistanceText.style.opacity = 0;

        if (showLines) {
          ev.stopPropagation();
          ev.stopImmediatePropagation();
          ev.preventDefault();
        }
        if (elementsDetected) elementsDetected.style.boxShadow = "";
        validElement
        if (!isValidElement(elem)) return;
        elementsDetected = elem;

        boxSelectTopLine.style.opacity = 1;
        boxSelectBottomLine.style.opacity = 1;
        boxSelectLeftLine.style.opacity = 1;
        boxSelectRightLine.style.opacity = 1;

        boxSelectTopLine.style.top = `${
          elementsDetected.getBoundingClientRect().top
          }px`;
        boxSelectTopLine.style.left = `${
          elementsDetected.getBoundingClientRect().left
          }px`;
        boxSelectTopLine.style.width = `${elementsDetected.offsetWidth}px`;

        boxSelectBottomLine.style.top = `${
          elementsDetected.getBoundingClientRect().bottom
          }px`;
        boxSelectBottomLine.style.left = `${
          elementsDetected.getBoundingClientRect().left
          }px`;
        boxSelectBottomLine.style.width = `${elementsDetected.offsetWidth + 2}px`;

        boxSelectLeftLine.style.top = `${
          elementsDetected.getBoundingClientRect().top
          }px`;
        boxSelectLeftLine.style.left = `${
          elementsDetected.getBoundingClientRect().left
          }px`;
        boxSelectLeftLine.style.height = `${elementsDetected.offsetHeight}px`;

        boxSelectRightLine.style.top = `${
          elementsDetected.getBoundingClientRect().top
          }px`;
        boxSelectRightLine.style.left = `${
          elementsDetected.getBoundingClientRect().right
          }px`;
        boxSelectRightLine.style.height = `${elementsDetected.offsetHeight +
          2}px`;
      };

      elem.addEventListener("click", clickHandler);
      elementsDetected &&
        elementsDetected.removeEventListener("click", clickHandler);

      validElement = isValidElement(elem)
      validElement &&
        showMeasures(elem);
    };
    document.body.addEventListener("mousemove", mouseMove);
  }

  let previousElem = null;

  function isValidElement(checkElement) {
    return checkElement !== verticalLine &&
      checkElement !== verticalLineDots &&
      checkElement !== horizontalLine &&
      checkElement !== horizontalLineDots &&
      checkElement !== boxHoverTopLine &&
      checkElement !== boxHoverBottomLine &&
      checkElement !== boxHoverLeftLine &&
      checkElement !== boxHoverRightLine &&
      checkElement.id !== "top-banner" &&
      checkElement.className !== "size-text-tiny" &&
      checkElement.className !== "size-text" &&
      checkElement.className !== "size-text-container" &&
      checkElement;
  }

  function showMeasures(elem) {
    const elemHeight = elem.offsetHeight;
    const elemWidth = elem.offsetWidth;
    if (!elemWidth === 0 || !elemHeight || elemHeight === 0 || elemWidth === 0) {
      return;
    }
    previousElem = elem;

    cSize = css(elem, "font-size");
    cWeight = css(elem, "font-weight");
    cFamily = css(elem, "font-family");
    cColor = css(elem, "color");

    const styleValues = {
      fontSize: cSize,
      fontWeight: cWeight,
      fontFamily: cFamily,
      color: cColor
    }

    topBanner.innerHTML = getRulerNav(styleValues);

    leftText.style.opacity = 1;
    topText.style.opacity = 1;
    boxHoverTopLine.style.opacity = 1;
    boxHoverBottomLine.style.opacity = 1;
    boxHoverLeftLine.style.opacity = 1;
    boxHoverRightLine.style.opacity = 1;

    boxHoverTopLine.style.top = `${elem.getBoundingClientRect().top}px`;
    boxHoverTopLine.style.left = `${elem.getBoundingClientRect().left}px`;
    boxHoverTopLine.style.width = `${elem.offsetWidth}px`;

    boxHoverBottomLine.style.top = `${elem.getBoundingClientRect().bottom}px`;
    boxHoverBottomLine.style.left = `${elem.getBoundingClientRect().left}px`;
    boxHoverBottomLine.style.width = `${elem.offsetWidth + 2}px`;

    boxHoverLeftLine.style.top = `${elem.getBoundingClientRect().top}px`;
    boxHoverLeftLine.style.left = `${elem.getBoundingClientRect().left}px`;
    boxHoverLeftLine.style.height = `${elem.offsetHeight}px`;

    boxHoverRightLine.style.top = `${elem.getBoundingClientRect().top}px`;
    boxHoverRightLine.style.left = `${elem.getBoundingClientRect().right}px`;
    boxHoverRightLine.style.height = `${elem.offsetHeight + 2}px`;

    leftText.style.position = "fixed";
    leftText.style.height = `${elemHeight}px`;
    leftText.style.top = `${elem.getBoundingClientRect().top}px`;
    leftText.innerHTML = `<div class="size-text-tiny">${elemHeight}px</div>`;
    const leftTextLeft =
      elem.getBoundingClientRect().left - leftText.offsetWidth - 8;
    leftText.style.left = `${leftTextLeft < 10 ? 10 : leftTextLeft}px`;

    topText.style.position = "fixed";
    topText.style.width = `${elemWidth}px`;
    const topTextTop = elem.getBoundingClientRect().top - 30;
    topText.style.top = `${topTextTop < 10 ? 10 : topTextTop}px`;
    topText.style.left = `${elem.getBoundingClientRect().left}px`;
    topText.style.textAlign = "center";
    topText.innerHTML = `<div class="size-text-tiny">${elemWidth}px</div>`;
  }

  window.hideBoxSizes = () => {
    opened = false;
    document.body.removeEventListener("mousemove", mouseMove, true);
    //document.head.removeChild(style);
    mainContainer.innerHTML = "";
  }

  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  function disableScroll() {
    if (window.addEventListener)
      // older FF
      window.addEventListener("DOMMouseScroll", preventDefault, false);
    document.addEventListener("wheel", preventDefault, { passive: false }); // Disable scrolling in Chrome
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
  }

  function enableScroll() {
    if (window.removeEventListener)
      window.removeEventListener("DOMMouseScroll", preventDefault, false);
    document.removeEventListener("wheel", preventDefault, { passive: false }); // Enable scrolling in Chrome
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  }

  function css(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
  }

  function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand("copy");
      alert("Font styles copied!");
    } catch (err) { }

    document.body.removeChild(textArea);
  }

  function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      top + height <= window.pageYOffset + window.innerHeight &&
      left + width <= window.pageXOffset + window.innerWidth
    );
  }

  var dragItem = topBanner

  var active = false;
  var currentX;
  var currentY;
  var initialX;
  var initialY;
  var xOffset = 0;
  var yOffset = 0;


  document.body.addEventListener("mousedown", dragStart, true);
  document.body.addEventListener("mouseup", dragEnd, true);
  document.body.addEventListener("mousemove", drag, true);

  function dragStart(e) {
    disableScroll();
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }
    if (e.target === dragItem ||
      e.target.className === 'title-font' ||
      e.target.className === 'text-font' ||
      e.target.className === 'container-font') {
      active = true;
    }
  }

  function dragEnd(e) {
    enableScroll();
    initialX = currentX;
    initialY = currentY;
    dragItem.style.transform = "translate3d(" + currentX + "px, " + currentY + "px, 0)"
    active = false;
  }

  window.resetDragValues = () => {
    currentX = 0;
    currentY = 0;
    initialX = 0;
    initialY = 0;
    xOffset = 0;
    yOffset = 0;
  }

  function drag(e) {
    if (active) {

      e.preventDefault();

      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, topBanner);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transformOrigin = xPos + " " + yPos;
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
}


