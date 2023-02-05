import useLazyRecaptcha from "@/hooks/useLazyRecaptcha";
import LazyRecaptcha from "@/components/recaptcha";

export default function Home() {
  const {
    shouldShowRecaptcha,
    recaptchaApi,
    setRecaptchaApi,
    setShouldShowRecaptcha,
  } = useLazyRecaptcha();

  const doPostRecaptchaTasks = () => {
    console.log("Verified!");
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* Can be any user interaction */}
      <button onClick={() => setShouldShowRecaptcha(true)}>
        Load ReCAPTCHA
      </button>
      {shouldShowRecaptcha && (
        <button onClick={() => recaptchaApi?.execute()}>
          Run ReCAPTCHA verification
        </button>
      )}
      <LazyRecaptcha
        shouldRecaptchaLoad={shouldShowRecaptcha}
        onChange={doPostRecaptchaTasks}
        setRecaptchaAPI={setRecaptchaApi}
      />
    </div>
  );
}
