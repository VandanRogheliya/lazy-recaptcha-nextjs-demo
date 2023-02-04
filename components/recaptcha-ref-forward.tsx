import { LegacyRef } from "react";
import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha";

type Props = ReCAPTCHAProps & {
  forwardedRef: LegacyRef<ReCAPTCHA> | undefined;
};

const RecaptchaRefForward = ({ forwardedRef, ...props }: Props) => (
  <ReCAPTCHA {...props} ref={forwardedRef} />
);

export default RecaptchaRefForward;
