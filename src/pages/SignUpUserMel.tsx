import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const SignUpUserMel: FunctionComponent = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#9eafdd,_#2f424e)] overflow-hidden flex flex-col items-center justify-start pt-[136px] pb-[68px] pr-5 pl-[21px] box-border gap-[43px] leading-[normal] tracking-[normal] text-center text-mini text-gray font-catamaran mq450:gap-[21px]">
      <form className="m-0 w-[805px] bg-white flex flex-col items-center justify-start pt-[60px] pb-[33.2px] pr-[21px] pl-5 box-border gap-[47px] max-w-full mq675:gap-[23px] mq750:pt-[39px] mq750:pb-[22px] mq750:box-border">
        <div className="w-[805px] h-[752px] relative bg-white hidden max-w-full" />
        <FrameComponent1 />
        <FrameComponent />
      </form>
      <div className="w-[805px] flex flex-row items-start justify-center max-w-full">
        <b className="w-[477px] relative tracking-[0.05em] flex items-center justify-center shrink-0 max-w-full">
          Help | Privacy and Terms of Use
        </b>
      </div>
    </div>
  );
};

export default SignUpUserMel;
