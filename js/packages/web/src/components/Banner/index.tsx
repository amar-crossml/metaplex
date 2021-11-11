import React from 'react';
import { useEffect } from 'react';

export const Banner = (props: {
  src: string;
  useBannerBg: boolean;
  headingText: string;
  subHeadingText: string;
  actionComponent?: JSX.Element;
  children?: React.ReactNode;
}) => {
  useEffect(() => {
    const mainBg = document.getElementById('main-bg');
    const gradient = document.getElementById('bg-gradient');
    if (mainBg && props.useBannerBg) {
      // mainBg.style.backgroundImage = `url(${props.src})`;
      mainBg.style.display = 'inline-block';
      if (gradient) {
        gradient.style.display = 'inline-block';
      }
    }

    return () => {
      const mainBg = document.getElementById('main-bg');
      const gradient = document.getElementById('bg-gradient');
      if (mainBg && props.useBannerBg) {
        mainBg.style.backgroundImage = '';
        mainBg.style.display = 'none';
      }
      if (gradient) gradient.style.display = 'none';
    };
  }, [props.src, props.useBannerBg]);

  return (
    <>
      <div id="mobile-banner">
        <img className="banner-img" src={props.src} />
        <div className="banner-content">
          <div id={'main-heading'}>{props.headingText}</div>
          {/* <div id={'sub-heading'}>{props.subHeadingText}</div> */}
          <div id={'sub-heading'}>
            A virtual twin earth has been created that holds the keys to unlocking powers in the real world. Soon you’ll need to learn how to harness your new powers, which will be unlocked in Q1 2022 in cities where tiles have been purchased.<br />
            Once available, your city will be granted the ability to Propose, Vote, Pre-Reserve, and Invest in real world assets. Be the hero of your city, while locking in your ability to share in transaction fees (.5%) that occur in the cities you own.<br />
            Round up your community and pass out the “Keys to the City” to individuals that you want participating in the journey with you.<br />
            Get ready, your next assignment will be to design the future. The brightest image of what can be experienced… good luck.
          </div>
          {props.actionComponent}
        </div>
      </div>
      <div
        id={'current-banner'}
        style={{ backgroundImage: `url(${props.src})` }}
      >
        <span id={'gradient-banner'}></span>
        <div id="banner-inner">
          <div id={'message-container'}>
            <div id={'main-heading'}>{props.headingText}</div>
            {/* <div id={'sub-heading'}>{props.subHeadingText}</div> */}
            <div id={'sub-heading'}>
            A virtual twin earth has been created that holds the keys to unlocking powers in the real world. Soon you’ll need to learn how to harness your new powers, which will be unlocked in Q1 2022 in cities where tiles have been purchased.<br />
            Once available, your city will be granted the ability to Propose, Vote, Pre-Reserve, and Invest in real world assets. Be the hero of your city, while locking in your ability to share in transaction fees (.5%) that occur in the cities you own.<br />
            Round up your community and pass out the “Keys to the City” to individuals that you want participating in the journey with you.<br />
            Get ready, your next assignment will be to design the future. The brightest image of what can be experienced… good luck.
            </div>
              {props.actionComponent}
          </div>
          {props.children}
          <div className="powered-by">
            {/* <span>
              POWERED BY <b>METAPLEX</b>
            </span> */}
          </div>
        </div>
      </div>
    </>
  );
};
