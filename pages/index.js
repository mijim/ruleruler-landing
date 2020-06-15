import Head from 'next/head'
import { useState, useEffect } from 'react';
import MainContainer from './index-style';
import { images } from '../assets/icons';
import { executeScript } from '../assets/scripts/script';
import { useWindowSize } from '../src/hooks/window-size';
import anime from 'animejs';

export default function Home() {
  const [showFixedNav, setShowFixedNav] = useState(false);
  const [showGlitchEffect, setShowGlitchEffect] = useState(false);
  const [windowLoaded, setWindowLoaded] = useState(false);
  const size = useWindowSize();

  let pluginNav = null;
  let glitchRef = React.createRef();

  useEffect(() => {
    if (size.width > 1024) {
      window.scrollTo(0, 0);
      window.addEventListener('load', (ev) => {
        setWindowLoaded(true)
        executeScript();
        window.showBoxSizes(false);
        pluginNav = document.getElementById('top-banner');
        anime({
          targets: 'body',
          opacity: [0, 1],
          easing: 'easeInOutExpo',
          duration: 1500,
        });
      }, false);
    }
  }, []);

  useEffect(() => {
    let pluginSetted = true;
    window.addEventListener('scroll', (ev) => {
      if (pluginNav && window.scrollY < 200) {
        window.resetDragValues();
        document.getElementById('top-banner').style.transform = ''
        if (!pluginSetted) {
          anime({
            targets: '#top-banner',
            top: 507.5 - window.scrollY / 1.2,
            easing: 'easeInOutExpo',
            duration: 500,
            update: (anim) => {
              if (anim.progress === 100) {
                pluginSetted = true;
              }
            }
          });
        } else {
          anime({
            targets: '#top-banner',
            top: 507.5 - window.scrollY / 1.2,
            duration: 0,
            easing: 'linear'
          });
        }
      } else if (pluginNav && window.scrollY >= 200 && pluginSetted) {
        pluginSetted = false;
        anime({
          targets: '#top-banner',
          top: [window.innerHeight - 150],
          easing: 'easeInOutExpo',
          duration: 500,
        });
      }

      if (window.scrollY >= 600 && !showFixedNav && document.body.scrollHeight - (window.scrollY + window.innerHeight) > 500) {
        setShowFixedNav(true);
        window.showLines && window.showLines(true);
      }

      if (window.scrollY < 600 && showFixedNav) {
        setShowFixedNav(false);
        window.showLines && window.showLines(false);
      }

      if (glitchRef && glitchRef.current) {
        if (!showGlitchEffect && elementInViewport(glitchRef.current)) {
          setShowGlitchEffect(true);
          window.showLines && window.showLines(false);
          anime({
            targets: '#top-banner',
            opacity: 0,
            duration: 0.4,
            easing: 'easeInOutExpo'
          });
          setTimeout(() => {
            setShowGlitchEffect(false);
          }, 2000);
          setTimeout(() => {
            setShowGlitchEffect(true);
          }, 3000);
        }
        if (showGlitchEffect && !elementInViewport(glitchRef.current)) {
          window.showLines && window.showLines(true);
          anime({
            targets: '#top-banner',
            opacity: 1,
            duration: 0.4,
            easing: 'easeInOutExpo'
          });
          setShowGlitchEffect(false)
        }
      }

    });
  }, [showFixedNav, showGlitchEffect]);

  const elementInViewport = (el) => {
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
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  }

  return (
    <body style={{ margin: 0, opacity: size.width > 1024 ? 0 : 1, overflowX: 'hidden' }}>
      <MainContainer>
        {size.width > 1024 && (
          <>
            <div className="head-container">
              <div className="title-container">
                <div className="title-left-item">
                  {/* <img src={images.logo} /> */}
                  <div className="title-left-item__title">
                    {images.logo()}
                    <div className="title-left-item__title__info">
                      {'BETA'}
                    </div>
                  </div>

                  <div className="title-left-item__subtitle">
                    {'For measures lovers.'}
                  </div>
                </div>
                <div className="title-right-item">
                  <div className="title-right-item__download">
                    {images.download()}
                  </div>
                  <div className="title-right-item__contact">
                    {'CONTACT US'}
                  </div>
                </div>
              </div>
              <div className="head-container__divider-1" />
              <div className="head-container__divider-2" />

              <div className="main-title-container">
                {'For those who love measures, developers and designers.'}
              </div>

              <div className="subtitle-container">
                {'View properties and measurements of web elements'}
              </div>

              <div className="bottom-container" >
                <div className="bottom-container__right">
                  <a className="bottom-container__live" onClick={(ev) => {
                    window.scroll({ left: 0, top: 650, behavior: 'smooth' })
                  }}>
                    {images.live()}
                    {'LIVE TEST'}
                  </a>
                  <div className="bottom-container__download">
                    {'DOWNLOAD'}
                  </div>
                </div>
                <div className="bottom_container__logo">
                  <img src={'/static/light-logo.svg'} />
                  {/* {images.lightLogo()} */}
                </div>
              </div>
            </div>
            <div className="negative-header">
              {images.negativeHeader()}
            </div>
            <div className="demo-container">
              <div className="title-container" style={{ opacity: showFixedNav ? 1 : 0, position: showFixedNav ? 'fixed' : 'absolute', top: showFixedNav ? 0 : '100vh' }}>
                <div className="title-container-top">
                  <div className="title-left-item">
                    {/* <img src={images.logo} /> */}
                    <div className="title-left-item__title">
                      {images.logoBlack()}
                      <div className="title-left-item__title__info">
                        {'BETA'}
                      </div>
                    </div>

                    <div className="title-left-item__subtitle">
                      {'For measures lovers.'}
                    </div>
                  </div>
                  <div className="title-right-item">
                    <div className="title-right-item__download">
                      {images.download()}
                    </div>
                    <div className="title-right-item__contact">
                      {"LET'S TALK"}
                    </div>
                  </div>
                </div>


                <div className="title-container__divider-1" />
                <div className="title-container__divider-2" />
              </div>


              <div className="demo-content">
                <div className="demo-subtitle">
                  {'From Wikipedia, the free encyclopedia'}
                </div>
                <div className="demo-top-text">
                  <div className="demo-top-text__title">
                    <div>
                      {'Imperial units'}
                    </div>
                    <div className="demo-content__top">
                      {'RULERULER'}
                    </div>
                  </div>
                  <div className="demo-top-text__text">
                    {'The Imperial units or the Imperial system is a collection of measurement units. An Act of Parliament in 1824 created it from traditional English units. Commonwealth countries used this system from 1824 until they changed to the metric system. The imperial system is very similar to the American system but there are some differences.'}
                  </div>
                </div>

                <div className="demo-main-text">
                  {`The International System of Units is the standard modern form of the metric system.The name of this system can be shortened or abbreviated to SI, from the French name Système International d'unités.
        The International System of Units is a system of measurement based on 7 base units: the metre(length), kilogram(mass), second(time), ampere(electric current), Kelvin(temperature), mole(quantity), and candela(brightness).These base units can be used in combination with each other.This creates SI derived units, which can be used to describe other quantities, such as volume, energy, pressure, and velocity.
        The system is used almost globally.Only Myanmar, Liberia, and the United States do not use SI as their official system of measurement.[1] In these countries, though, SI is commonly used in science and medicine.`}
                </div>
                <div className="demo-images-container">
                  <div className="demo-images-container__img width-100">
                    <div className="flex-100-right">
                      <img src={'/static/sample1.png'} />
                    </div>
                    <div className="demo-images-container__img__title flex-100-right">
                      {'Alexander Andrews'}
                    </div>
                    <div className="demo-images-container__img__back1">
                      {'RULERULER'}
                    </div>
                    <div className="demo-images-container__img__back2">
                      {'RULERULER'}
                    </div>
                  </div>
                  <div className="demo-images-container__img">
                    <img src={'/static/sample2.png'} />
                    <div className="demo-images-container__img__title">
                      {'Alexander Andrews'}
                    </div>
                  </div>
                </div>
                <div className="demo-title2">
                  <div className="demo-title2__left">
                    {'The International System of Units is the standard modern form of the metric system. '}
                  </div>
                  <div className="demo-title2__right">
                    {'The metric system was created in France after the French Revolution in 1789.'}
                  </div>
                </div>
                <div className="demo-main2">
                  <div className="demo-main2__left">
                    <div className="demo-main2__left__text">
                      {'The original system only had two standard units, the kilogram and the metre. The metric system became popular amongst scientists.'}

                    </div>
                    <div className="demo-main2__left__img">
                      <img src={'/static/sample3.png'} />
                    </div>
                    <div className="demo-main2__left__imp-pie">
                      {'Alexander Andrews'}
                    </div>

                  </div>
                  <div className="demo-main2__right">
                    <div className="demo-main2__right__text1">
                      {'The metric system was created in France after the French Revolution in 1789. The original system only had two standard units, the kilogram and the metre. The metric system became popular amongst scientists.'}
                    </div>
                    <div className="demo-main2__right__text2">
                      {'The metric system was created in France after the French Revolution in 1789. The original system only had two standard units, the kilogram and the metre. The metric system became popular amongst scientists.'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-fotter">
              <div className="top-fotter__title">
                <div className={`top-fotter__title__main ${showGlitchEffect ? 'glitch-effect' : ''} `} data-text={'RULERULER'} ref={glitchRef}>
                  {'RULERULER'}
                </div>
                <div className="top-fotter__title__sub1">
                  {'RULERULER'}
                </div>
                <div className="top-fotter__title__sub2">
                  {'RULERULER'}
                </div>
              </div>
              <div className="top-fotter__middle">
                <div className="top-fotter__middle__left">
                  {'For measures lovers.'}
                </div>
                <div className="top-fotter__middle__right">
                  {'For measures lovers.'}
                </div>
              </div>
              <div className="top-fotter__buttons">
                <div className="top-fotter__buttons__button">
                  {'DOWNLOAD NOW'}
                </div>
              </div>

            </div>
            <div className="divider-2" />
            <div className="divider-1" />
          </>
        )}

        {size.width > 764 && size.width <= 1024 && (
          <>
            <div className="tablet-advice-container">
              <img src={'/static/tablet-advice.svg'} />
            </div>
            <div className="tablet-advice-container">
              <img src={'/static/tablet-advice.svg'} />
            </div>
            <div className="tablet-advice-container">
              <img src={'/static/tablet-advice.svg'} />
            </div>
          </>
        )}

        {size.width <= 764 && (
          <div>
            <img src={'/static/mobile-advice.svg'} />
            <img src={'/static/mobile-advice.svg'} />
          </div>
        )}

        <div className="bottom-fotter">
          <div className="bottom-fotter__top">
            <div className="bottom-fotter__top__left-item">
              <div className="bottom-fotter__top__left-item__title">
                {images.logoBlack()}
                <div className="bottom-fotter__top__left-item__title__info">
                  {'BETA'}
                </div>
              </div>

              <div className="bottom-fotter__top__left-item__subtitle">
                {'For measures lovers.'}
              </div>
            </div>

            <div className="bottom-fotter__top__right-item">
              <div className="bottom-fotter__top__right-item__icon">
                {images.chromeLogo()}
              </div>
              <div className="bottom-fotter__top__right-item__text">
                {'Available for Google Chrome'}
              </div>
            </div>
          </div>
          <div className="bottom-fotter__bottom">
            <div className="bottom-fotter__bottom__text">
              {'Thanks to the Aluxion Labs team, if you are interested in chatting about technology, design or business, you can write to us.'}
            </div>
            🧑🏼‍💻👨🏿‍💻
          </div>
        </div>
      </MainContainer>
    </body>
  )
} 