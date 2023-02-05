import React, { Dispatch, SetStateAction } from "react";
import dynamic from "next/dynamic";
import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha";

const RecaptchaWithRefForward = dynamic(
  import("@/components/recaptcha-ref-forward")
);

const ReCAPTCHAComp = React.forwardRef(
  (props: ReCAPTCHAProps, ref: React.LegacyRef<ReCAPTCHA> | undefined) => (
    <RecaptchaWithRefForward {...props} forwardedRef={ref} />
  )
);

ReCAPTCHAComp.displayName = "ReCAPTCHA";

type Props = {
  shouldRecaptchaLoad: boolean;
  onChange: ((token: string | null) => void) | undefined;
  setRecaptchaAPI: Dispatch<SetStateAction<ReCAPTCHA | null>>;
};

const TEST_RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const LazyRecaptcha = ({
  shouldRecaptchaLoad,
  onChange,
  setRecaptchaAPI,
}: Props) => {
  if (!shouldRecaptchaLoad) return null;
  return (
    <ReCAPTCHAComp
      size="invisible"
      sitekey={
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || TEST_RECAPTCHA_SITE_KEY
      }
      onChange={onChange}
      ref={(ref) => setRecaptchaAPI(ref)}
    />
  );
};

export default React.memo(LazyRecaptcha);
