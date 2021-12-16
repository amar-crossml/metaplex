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
      mainBg.style.backgroundImage = `url(${props.src})`;
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
          A virtual twin earth has been created that holds the keys to unlocking powers in the real world. A world of potential awaits. The Blockcities platform will be available in Q1 of 2022, in areas where tiles have been unlocked.<br /><br />
          Round up your community and pass out the “Keys to the City” to individuals that you want participating in the journey with you. Soon you’ll need to learn how to harness your new powers, where once unlocked grant the ability to propose, vote, pre-reserve and invest in assets to bring things into physical form.<br /><br />
          Your next assignment will be to imagine the brightest image of the future. and together, we can bring it into form. Together we can design the future as we choose to experience.<br />
          What you need to ask yourself, is- <br /> If you had to paint the brightest image of what the future could look like, what would it look like?
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
            A virtual twin earth has been created that holds the keys to unlocking powers in the real world. A world of potential awaits. The Blockcities platform will be available in Q1 of 2022, in areas where tiles have been unlocked.<br /><br />
          Round up your community and pass out the “Keys to the City” to individuals that you want participating in the journey with you. Soon you’ll need to learn how to harness your new powers, where once unlocked grant the ability to propose, vote, pre-reserve and invest in assets to bring things into physical form.<br /><br />
          Your next assignment will be to imagine the brightest image of the future. and together, we can bring it into form. Together we can design the future as we choose to experience.<br />
          What you need to ask yourself, is- <br /> If you had to paint the brightest image of what the future could look like, what would it look like?
            </div>
              {props.actionComponent}
          </div>
          {props.children}
          <div className="powered-by">
            <span>
              POWERED BY <b>METAPLEX</b>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
