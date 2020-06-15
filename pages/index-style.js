import styled from 'styled-components';

const MainContainer = styled.div`
    font-family: Inter;
    .negative-header {
        position: absolute;
        top: 506px;
    }

    .tablet-advice-container {
        display: flex;
        justify-content: center;
        margin-bottom: 8px;
    }

    .head-container {
        z-index: 10;
        height: 562px;
        background: radial-gradient(100% 233.59% at 0% 0%, #24272C 0%, #0C0D0F 100%);
        padding-left: 10%;
        padding-right: 10%;
        padding-top: 80px;

        &__divider-1 {
            opacity: 0.2;
            border: 1px solid #000000;
            width: 100%;
            height: 0;
        }

        &__divider-2 {
            opacity: 0.04;
            border: 1px solid #FFFFFF;
            width: 100%;
            height: 0;
            margin-bottom: 40px;
        }

        .title-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;

            .title-left-item {
                &__title {
                    display: flex;
                    margin-bottom: 4px;
                    &__info {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #FEAA54;
                        background: rgba(254,170,84, 0.2);
                        border-radius: 2px; 
                        height: 16px;
                        width: 36px;
                        font-weight: bold;
                        font-size: 8px;
                        line-height: 14px;
                        margin-left: 8px;
                    }
                }

                &__subtitle {
                    font-weight: normal;
                    font-size: 10px;
                    line-height: 16px;
                    letter-spacing: 0.04em;
                    color: rgba(255,255,255, 0.4);
                    opacity: 0.4;
                }
            }

            .title-right-item {
                display: flex;
                align-items: center;
                &__download {
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid rgba(61,82,232, 0.1);
                    box-sizing: border-box;
                    border-radius: 2px;
                    width: 40px;
                    height: 40px;
                }
                &__contact {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid rgba(255,255,255,0.1);
                    box-sizing: border-box;
                    border-radius: 2px;
                    height: 40px;
                    width: 112px;
                    margin-left: 16px;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 10px;
                    line-height: 14px;
                    color: #FFFFFF;
                }
            }

            
        }

        .main-title-container {
            width: 810px;
            font-weight: bold;
            font-size: 48px;
            line-height: 56px;
            color: #FFFFFF;
            margin-bottom: 16px;
        }

        .subtitle-container {
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            color: #BAC0BD;
            opacity: 0.4;
            margin-bottom: 56px;
        }

        .bottom-container {
            display: flex;
            justify-content: space-between;
            &__right {
                display: flex;
                align-items: center;
            }
            &__live {
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 156px;
                height: 48px;
                color: #EC312F;
                border: 1px solid rgb(236,49,47, 0.1);
                font-size: 12px;
                line-height: 14px;
                margin-right: 16px;
                svg {
                    margin-right: 3px;
                } 
            }
            &__download {
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #3D52E8;
                border-radius: 2px;
                height: 48px;
                width: 136px;
                color: #FFFFFF;
                font-weight: bold;
                font-size: 12px;
                line-height: 14px;
            }
            .bottom_container__logo {
                position: absolute;
                right: 0;
                top: 292px;
                z-index: 30;
                svg {
                    width: 30%;

                }
            }
        }
    }

    .demo-container {
        height: 1500px;
        background: white;
        .title-container {
            padding-left: 10%;
            padding-right: 10%;
            padding-top: 15px;
            transition: opacity .2s ease-in-out;
            top: 0;
            left: 0;
            z-index: 10;
            margin-bottom: 15px;
            width: 70%;
            background: white;
            /* transition: all .2s ease-in-out; */
            .title-container-top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .title-left-item {
                &__title {
                    display: flex;
                    margin-bottom: 4px;
                    &__info {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #FEAA54;
                        background: rgba(254,170,84, 0.2);
                        border-radius: 2px; 
                        height: 16px;
                        width: 36px;
                        font-weight: bold;
                        font-size: 8px;
                        line-height: 14px;
                        margin-left: 8px;
                    }
                }

                &__subtitle {
                    font-weight: normal;
                    font-size: 10px;
                    line-height: 16px;
                    letter-spacing: 0.04em;
                    opacity: 0.4;
                    color: #17191C;
                }
            }

            .title-right-item {
                display: flex;
                align-items: center;
                &__download {
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid rgba(61,82,232, 0.1);
                    box-sizing: border-box;
                    border-radius: 2px;
                    width: 40px;
                    height: 40px;
                }
                &__contact {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #EDEDED;
                    box-sizing: border-box;
                    border-radius: 2px;
                    height: 40px;
                    width: 112px;
                    margin-left: 16px;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 10px;
                    line-height: 14px;
                    color: #17191C;
                }
            }
            }
            

            &__divider-1 {
                margin-top: 16px;
                opacity: 0.04;
                border: 1px solid #F8F8F8;

                width: 100%;
                height: 0;
            }

            &__divider-2 {
                opacity: 0.2;
                border: 1px solid #EDEDED;

                width: 100%;
                height: 0;
            }

        }

        .demo-content {
            padding-left: 10%;
            padding-right: 10%;
            margin-top: -50px;
            padding-top: 60px;
            &__top {
                justify-content: flex-end;
                -webkit-text-stroke: 1px #17191C;
                opacity: 0.1;
                font-size: 80px;
                font-weight: 900;
                color: transparent;

            }
            .demo-subtitle {
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
                text-decoration-line: underline;
                color: #3D52E8;
                margin-top: 80px;
            }

            .demo-top-text {
                display: flex;
                justify-content: space-between;
                height: 200px;
                &__title {
                    font-weight: bold;
                    font-size: 48px;
                    line-height: 56px;
                    color: #25272D;
                    width: 400px;
                    div:first-child {
                        margin-bottom: 48px;
                    }
                }
                &__text {
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    color: #17191C;
                }
            }

            .demo-main-text {
                margin-top: 30px;
                font-size: 16px;
                line-height: 24px;
                color: #17191C;
                opacity: 0.6;
                margin-bottom: 64px;
            }

            .demo-images-container {
                display: flex;
                justify-content: space-between;
                &__img {
                    &__title {
                        margin-top: 16px;
                        font-size: 14px;
                        line-height: 16px;
                        text-decoration-line: underline;
                        color: #25272D;
                        opacity: 0.5;
                    }
                    &__back1 {
                        -webkit-text-stroke: 1px #17191C;
                        margin-top: 95px;
                        opacity: 0.1;
                        font-weight: 900;
                        color: transparent;
                        font-size: 46px;
                        
                    }
                    &__back2 {
                        -webkit-text-stroke: 1px #17191C;
                        margin-top: 24px;
                        opacity: 0.1;
                        font-size: 120px;
                        font-weight: 900;
                        color: transparent;
                        position: absolute
                    }
                }
            }

            .demo-title2 {
                display: flex;
                margin-top: 60px;
                &__left {
                    font-size: 48px;
                    line-height: 56px;
                    color: #25272D;
                    font-weight: bold;
                }
                &__right {
                    font-size: 16px;
                    line-height: 24px;
                    width: 300px;
                    height: 120px;
                    padding-left: 22px;
                    border-left: 2px solid #3D52E8;
                    color: #3D52E8;
                }
            }

            .demo-main2 {
                display: flex;
                margin-top: 16px;
                &__left {
                    margin-right: 26px;
                    &__text {
                        font-size: 16px;
                        line-height: 24px;
                        color: #17191C;
                        opacity: 0.6;
                        margin-bottom: 16px;
                    }
                    &__imp-pie {
                        margin-top: 16px;
                        font-size: 14px;
                        line-height: 16px;
                        text-decoration-line: underline;
                        color: #25272D;
                        opacity: 0.5;
                    }
                }
                &__right {
                    &__text1 {
                        font-size: 16px;
                        line-height: 24px;
                        color: #17191C;
                        opacity: 0.6;
                        margin-bottom: 24px;
                    }   
                    &__text2 {
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 24px;
                        color: #17191C;
                    }
                }
            }
        }
    }

    .top-fotter {
        margin-top: 900px;
        background: #F8F8F8;
        padding: 48px 24px 40px 24px;
        width: 100%;
        &__title { 
            font-weight: 900;
            font-size: 88px;
            line-height: 112px;
            text-align: center;
            text-transform: uppercase;
            color: transparent;
            height: 112px;
            display: flex;
            justify-content: center;
            width: 100%;
            margin-bottom: 16px;
            &__main {
                position: absolute;
                -webkit-text-stroke: 1px #3D52E8;
            }
            &__sub1 {
                position: absolute;
                margin-left: 18px;
                opacity: 0.2;
                -webkit-text-stroke: 1px #EC312F;
            }
            &__sub2 {
                position: absolute;
                margin-left: -18px;
                opacity: 0.2;
                -webkit-text-stroke: 1px #FEAA54;
            }
        }

        &__middle {
            display: flex;
            width:100%;
            justify-content: center;
            margin-bottom: 32px;
            &__left {
                max-width: 500px;
                font-weight: 900;
                font-size: 48px;
                line-height: 56px;
                text-align: right;
                color: transparent;
                text-transform: uppercase;
                opacity: 0.2;
                -webkit-text-stroke: 1px #17191C;
                margin-right: 24px;
            }
            &__right {
                max-width: 500px;
                font-weight: 900;
                font-size: 48px;
                line-height: 56px;
                text-transform: uppercase;
                color: #17191C;
            }
        }

        &__buttons {
            display: flex;
            align-items: center;
            justify-content: center;    
            &__button {
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                text-transform: uppercase;
                background: #3D52E8;
                border-radius: 2px;
                height: 48px;
                width: 174px;
                font-weight: bold;
                font-size: 10px;
                line-height: 14px;
                color: #FFFFFF;
            }
        }
    }

    .divider-1 {
        opacity: 0.2;
        border: 1px solid #000000;
        width: 100%;
        height: 0;
    }
    .divider-2 {
        opacity: 0.04;
        border: 1px solid #FFFFFF;
        width: 100%;
        height: 0;
    }

    .bottom-fotter {
        padding: 24px 16px 24px 16px;
        background: #F8F8F8;
        &__top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &__left-item {
                &__title {
                    display: flex;
                    margin-bottom: 4px;
                    &__info {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #FEAA54;
                        background: rgba(254,170,84, 0.2);
                        border-radius: 2px; 
                        height: 16px;
                        width: 36px;
                        font-weight: bold;
                        font-size: 8px;
                        line-height: 14px;
                        margin-left: 8px;
                    }
                }
                &__subtitle {
                    font-weight: normal;
                    font-size: 10px;
                    line-height: 16px;
                    letter-spacing: 0.04em;
                    opacity: 0.4;
                    color: #17191C;
                }
            }
            &__right-item {
                display: flex;
                align-items: center;
                &__icon {
                    margin-right: 20px;
                }
                &__text {
                    font-size: 12px;
                    line-height: 18px;
                    color: #17191C;
                    opacity: 0.4;
                }
            }
        }
        &__bottom {
            display: flex;
            border-top: 1px solid #EDEDED;
            padding-top: 12px;
            margin-top: 12px;
            font-size: 12px;
            line-height: 18px;

            &__text {
                margin-right: 6px;
                color: #17191C;
                opacity: 0.4;
            }
        }
    }

    .width-100 {
        margin-right: 23px;
        width: 100%;
    }

    .flex-100-right {
        display: flex;
        justify-content: flex-end;
    }


    .glitch-effect {
            animation: glitch-skew 1s linear alternate-reverse;
        }

        .glitch-effect::before {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            left: 2px;
            -webkit-text-stroke: 1px #ff00c1;
            /* Creates an initial clip for our glitch. This works in
  a typical top,right,bottom,left fashion and creates a mask
  to only show a certain part of the glitch at a time. */
            clip: rect(44px, 450px, 56px, 0);
            /* Runs our glitch-anim defined below to run in a 5s loop, infinitely,
  with an alternating animation to keep things fresh. */
            animation: glitch-anim 0.5s linear alternate-reverse;
            opacity: 0;

        }

        .glitch-effect::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            left: -2px;
            -webkit-text-stroke: 1px #00fff9;
            animation: glitch-anim2 0.5s linear alternate-reverse;
            opacity: 0;

        }

        /* Creates an animation with 20 steaps. For each step, it calculates 
a percentage for the specific step. It then generates a random clip
box to be used for the random glitch effect. Also adds a very subtle
skew to change the 'thickness' of the glitch.*/
        @keyframes glitch-anim {
            0% {
                clip: rect(71px, 9999px, 98px, 0);
                transform: skew(0.3deg);
                opacity: 1;
            }

            5% {
                clip: rect(37px, 9999px, 68px, 0);
                transform: skew(0.59deg);
                opacity: 1;
            }

            10% {
                clip: rect(13px, 9999px, 90px, 0);
                transform: skew(0.82deg);
                opacity: 1;
            }

            15% {
                clip: rect(14px, 9999px, 85px, 0);
                transform: skew(0.85deg);
                opacity: 1;
            }

            20% {
                clip: rect(37px, 9999px, 20px, 0);
                transform: skew(0.29deg);
                opacity: 1;
            }

            25% {
                clip: rect(97px, 9999px, 69px, 0);
                transform: skew(0.7deg);
                opacity: 1;
            }

            30% {
                clip: rect(13px, 9999px, 18px, 0);
                transform: skew(0.86deg);
                opacity: 1;
            }

            35% {
                clip: rect(41px, 9999px, 61px, 0);
                transform: skew(0.51deg);
                opacity: 1;
            }

            40% {
                clip: rect(13px, 9999px, 52px, 0);
                transform: skew(0.09deg);
                opacity: 1;
            }

            45% {
                clip: rect(1px, 9999px, 67px, 0);
                transform: skew(0.19deg);
                opacity: 1;
            }

            50% {
                clip: rect(20px, 9999px, 1px, 0);
                transform: skew(5.17deg);
                opacity: 1;
            }

            55% {
                clip: rect(53px, 9999px, 39px, 0);
                transform: skew(0.79deg);
                opacity: 1;
            }

            60% {
                clip: rect(39px, 9999px, 87px, 0);
                transform: skew(20.31deg);
                opacity: 1;
            }

            65% {
                clip: rect(34px, 9999px, 20px, 0);
                transform: skew(0.98deg);
                opacity: 1;
            }

            70% {
                clip: rect(47px, 9999px, 49px, 0);
                transform: skew(0.76deg);
                opacity: 1;
            }

            75% {
                clip: rect(69px, 9999px, 16px, 0);
                transform: skew(10.99deg);
                opacity: 1;
            }

            80% {
                clip: rect(28px, 9999px, 34px, 0);
                transform: skew(0.44deg);
                opacity: 1;
            }

            85% {
                clip: rect(73px, 9999px, 7px, 0);
                transform: skew(30.06deg);
                opacity: 1;
            }

            90% {
                clip: rect(46px, 9999px, 93px, 0);
                transform: skew(0.34deg);
                opacity: 1;

            }

            95% {
                clip: rect(36px, 9999px, 84px, 0);
                transform: skew(0.69deg);
                opacity: 1;
            }

            100% {
                clip: rect(13px, 9999px, 72px, 0);
                transform: skew(20.03deg);
                opacity: 0;
            }
        }

        @keyframes glitch-anim2 {
            0% {
                clip: rect(16px, 9999px, 90px, 0);
                transform: skew(10.89deg);
                opacity: 1;
            }

            5% {
                clip: rect(17px, 9999px, 14px, 0);
                transform: skew(0.26deg);
                opacity: 1;
            }

            10% {
                clip: rect(26px, 9999px, 99px, 0);
                transform: skew(0.35deg);
                opacity: 1;
            }

            15% {
                clip: rect(55px, 9999px, 34px, 0);
                transform: skew(20.03deg);
                opacity: 1;
            }

            20% {
                clip: rect(26px, 9999px, 95px, 0);
                transform: skew(0.36deg);
                opacity: 1;
            }

            25% {
                clip: rect(23px, 9999px, 34px, 0);
                transform: skew(30.73deg);
                opacity: 1;
            }

            30% {
                clip: rect(29px, 9999px, 80px, 0);
                transform: skew(0.82deg);
                opacity: 1;
            }

            35% {
                clip: rect(30px, 9999px, 93px, 0);
                transform: skew(10.17deg);
                opacity: 1;
            }

            40% {
                clip: rect(23px, 9999px, 73px, 0);
                transform: skew(0.37deg);
                opacity: 1;
            }

            45% {
                clip: rect(84px, 9999px, 51px, 0);
                transform: skew(180.69deg);
                opacity: 1;
            }

            50% {
                clip: rect(27px, 9999px, 5px, 0);
                transform: skew(10.91deg);
                opacity: 1;
            }

            55% {
                clip: rect(52px, 9999px, 34px, 0);
                transform: skew(30.69deg);
                opacity: 1;
            }

            60% {
                clip: rect(66px, 9999px, 23px, 0);
                transform: skew(0.84deg);
                opacity: 1;
            }

            65% {
                clip: rect(24px, 9999px, 75px, 0);
                transform: skew(0.36deg);
                opacity: 1;
            }

            70% {
                clip: rect(50px, 9999px, 33px, 0);
                transform: skew(0.88deg);
                opacity: 1;
            }

            75% {
                clip: rect(76px, 9999px, 85px, 0);
                transform: skew(0.75deg);
                opacity: 1;
            }

            80% {
                clip: rect(25px, 9999px, 96px, 0);
                transform: skew(0.84deg);
                opacity: 1;
            }

            85% {
                clip: rect(47px, 9999px, 50px, 0);
                transform: skew(0.09deg);
                opacity: 1;
            }

            90% {
                clip: rect(32px, 9999px, 19px, 0);
                transform: skew(0.44deg);
                opacity: 1;
            }

            95% {
                clip: rect(58px, 9999px, 65px, 0);
                transform: skew(0.91deg);
                opacity: 1;
            }

            100% {
                clip: rect(6px, 9999px, 21px, 0);
                transform: skew(0.17deg);
                opacity: 0;
            }
        }

        @keyframes glitch-skew {
            0% {
                transform: skew(4deg);
            }

            10% {
                transform: skew(-2deg);
            }

            20% {
                transform: skew(-3deg);
            }

            30% {
                transform: skew(0deg);
            }

            40% {
                transform: skew(1deg);
            }

            50% {
                transform: skew(0deg);
            }

            60% {
                transform: skew(4deg);
            }

            70% {
                transform: skew(-3deg);
            }

            80% {
                transform: skew(1deg);
            }

            90% {
                transform: skew(4deg);
            }

            100% {
                transform: skew(4deg);
            }
        }

    @media (max-width: 1024px) {
        .bottom-fotter {
            position: fixed;
            bottom: -10px;
        }
    }

    @media (max-width: 764px) {
        .bottom-fotter__top__right-item__text {
            display: none;
        }
    }

`;

export default MainContainer;
