import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { logEvent } from "../middleware/loggerMiddleware";

const RedirectHandler = () => {
  const { shortCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("shortUrls") || "{}");
    const urlData = data[shortCode];

    if (urlData) {
      logEvent("REDIRECT", {
        shortCode,
        referrer: document.referrer,
        location: "Unknown",
      });
      window.location.href = urlData.originalUrl;
    } else {
      alert("Invalid or expired URL");
      navigate("/");
    }
  }, [shortCode, navigate]);

  return null;
};

export default RedirectHandler;
