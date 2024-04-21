import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignIn: FunctionComponent = () => {
  const navigate = useNavigate();

  const onForgotPasswordTextClick = useCallback(() => {
    // Please sync "Forgot Password" to the project
  }, []);

  const onSignInBttnClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up-user-mel");
  }, [navigate]);

  return (
    <section className="flex-1 bg-white flex flex-col items-start justify-start pt-[79.5px] pb-[147.8px] pr-[102.5px] pl-[114.5px] box-border gap-[80.6px] min-w-[523px] max-w-full text-center text-xs text-text-main-color font-comfortaa mq725:min-w-full mq450:gap-[20px] mq450:pl-5 mq450:pr-5 mq450:box-border mq975:gap-[40px] mq975:pt-[52px] mq975:pb-24 mq975:pr-[51px] mq975:pl-[57px] mq975:box-border">
      <div className="w-[805px] h-[752px] relative bg-white hidden max-w-full" />
      <div className="w-[573.1px] flex flex-row items-start justify-center max-w-full text-21xl font-baloo">
        <div className="w-[282.9px] flex flex-col items-end justify-start gap-[20.2px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[0.15em] font-normal font-inherit z-[1] mq450:text-5xl mq975:text-13xl">
            Welcome!
          </h1>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[47.5px] pl-[50px] text-mini text-secondary-color-blue font-comfortaa mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 relative tracking-[0.05em] z-[1]">
              Sign in to continue
            </div>
          </div>
        </div>
      </div>
      <div className="w-[572.5px] box-border flex flex-row items-start justify-start pt-[10.8px] pb-2.5 pr-0 pl-[0.5px] max-w-full z-[1] border-b-[1px] border-solid border-secondary-color-blue">
        <input
          className="w-full [border:none] [outline:none] flex font-comfortaa text-sm bg-[transparent] h-[21px] flex-1 relative tracking-[0.05em] font-bold text-secondary-color-blue text-left items-center min-w-[250px] max-w-full p-0"
          placeholder="Username"
          type="text"
        />
        <div className="h-[43px] w-[572px] relative box-border hidden max-w-full border-b-[1px] border-solid border-secondary-color-blue" />
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[9.1px] max-w-full text-link-color">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-4 pl-0 box-border max-w-full">
          <div className="flex-1 box-border flex flex-row items-end justify-start pt-[6.4px] pb-2 pr-[3.1px] pl-[0.5px] gap-[11.4px] max-w-full z-[1] border-b-[1px] border-solid border-secondary-color-blue mq725:flex-wrap mq725:pl-[3px] mq725:box-border">
            <input
              className="w-[calc(100%_-_33.6px)] [border:none] [outline:none] bg-[transparent] h-[21.9px] flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[1.9px] box-border font-comfortaa font-bold text-sm text-secondary-color-blue min-w-[300px] max-w-full"
              placeholder="Password"
              type="password"
            />
            <div className="h-[43px] w-[572px] relative box-border hidden max-w-full border-b-[1px] border-solid border-secondary-color-blue" />
            

            
          </div>
        </div>
        <b
          className="w-[158.6px] relative flex items-center justify-center cursor-pointer z-[1]"
          onClick={onForgotPasswordTextClick}
        >
          Forgot Password?
        </b>
      </div>
      <div className="w-[572px] flex flex-col items-end justify-start gap-[15.8px] max-w-full text-secondary-color-blue">
        <button
          className="cursor-pointer [border:none] pt-[11.3px] px-5 pb-[13.6px] bg-secondary-color-blue self-stretch flex flex-row items-start justify-center box-border shrink-0 [debug_commit:1de1738] max-w-full z-[1] hover:bg-slategray"
          onClick={onSignInBttnClick}
        >
          <div className="h-[43px] w-[572px] relative bg-secondary-color-blue hidden max-w-full" />
          <b className="w-[93.2px] relative text-mini flex font-comfortaa text-whitesmoke text-center items-center justify-center shrink-0 z-[1]">
            Sign In
          </b>
        </button>
        <div className="w-[556.8px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div
            className="w-[338.2px] relative flex items-center shrink-0 [debug_commit:1de1738] max-w-full cursor-pointer z-[1]"
            onClick={onDontHaveAnClick}
          >
            <span className="w-full">
              <span>
                <span>Don t have an account?</span>
                <b className="text-link-color">{` `}</b>
              </span>
              <b className="text-link-color">
                <span className="[text-decoration:underline]">Sign Up</span>
              </b>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
