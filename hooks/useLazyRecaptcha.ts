import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const useLazyRecaptcha = () => {
  const [shouldShowRecaptcha, setShouldShowRecaptcha] = useState(false);
  const [recaptchaApi, setRecaptchaApi] = useState<ReCAPTCHA | null>(null);

  return {
    shouldShowRecaptcha,
    setShouldShowRecaptcha,
    recaptchaApi,
    setRecaptchaApi,
  };
};

export default useLazyRecaptcha;
