import { FunctionComponent } from "react";
import SignIn from "../components/SignIn";

const SignInUserAdmin: FunctionComponent = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#9eafdd,_#2f424e)] overflow-hidden flex flex-col items-center justify-start pt-[136px] pb-[68px] pr-5 pl-[21px] box-border gap-[43px] leading-[normal] tracking-[normal] text-center text-mini text-gray font-catamaran mq725:gap-[21px]">
      <main className="w-[1217px] flex flex-row items-start justify-start [row-gap:20px] max-w-full text-center text-mini text-black font-comfortaa mq1025:flex-wrap">
        <div className="w-[412px] bg-main-color-blue flex flex-col items-start justify-start pt-[74px] pb-[213px] pr-[22px] pl-[23px] box-border gap-[22px] min-w-[412px] max-w-full mq725:min-w-full mq975:pt-12 mq975:pb-[138px] mq975:box-border mq1025:flex-1">
          <div className="w-[412px] h-[752px] relative bg-main-color-blue hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[22px] box-border max-w-full">
            <img
              className="h-[322px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/classmeyts-no-bg-1@2x.png"
            />
          </div>
          <div className="self-stretch h-[121px] relative flex items-center justify-center shrink-0 z-[1]">{`At Classmeyt's, we're committed on enhancing your academic journey by providing a vibrant online community where students can share resources, engage in discussions, and receive valuable peer feedback. `}</div>
        </div>
        <SignIn />
      </main>
      <div className="w-[1217px] flex flex-row items-start justify-center max-w-full">
        <b className="w-[477px] relative tracking-[0.05em] flex items-center justify-center shrink-0 max-w-full">{`Help | Privacy and Terms of Use `}</b>
      </div>
    </div>
  );
};

export default SignInUserAdmin;
