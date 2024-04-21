import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCreateAccountBttnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-[572px] flex flex-col items-start justify-start gap-[13.3px] max-w-full text-center text-xs text-secondary-color-blue font-comfortaa">
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
        <div className="w-[369.2px] flex flex-row flex-wrap items-start justify-start gap-[11px] max-w-full">
          <input className="m-0 h-5 w-5 relative z-[1]" type="checkbox" />
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[220px] max-w-full">
            <b className="self-stretch relative z-[1]">
              <span>{`I understand and accept `}</span>
              <span className="[text-decoration:underline] text-link-color">
                Privacy and Terms of Use
              </span>
            </b>
          </div>
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] pt-[14.3px] px-5 pb-[11.7px] bg-secondary-color-blue self-stretch flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-slategray"
        onClick={onCreateAccountBttnClick}
      >
        <div className="h-[43px] w-[572px] relative bg-secondary-color-blue hidden max-w-full" />
        <b className="relative text-mini font-comfortaa text-whitesmoke text-center z-[1]">
          Create an account
        </b>
      </button>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div
          className="w-[338.2px] relative flex items-center shrink-0 max-w-full cursor-pointer z-[1]"
          onClick={onAlreadyHaveAnClick}
        >
          <span className="w-full">
            <span>
              <span>Already have an account?</span>
              <b className="text-link-color">{` `}</b>
            </span>
            <b className="text-link-color">
              <span className="[text-decoration:underline]">Sign In</span>
            </b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
