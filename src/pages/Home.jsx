import UrlShortenerForm from "../components/UrlShortenerForm";
import UrlList from "../components/UrlList";
import { useState } from "react";

const Home = () => {
  const [urls, setUrls] = useState(
    JSON.parse(localStorage.getItem("shortUrls") || "{}")
  );

  const handleShorten = (entry) => {
    const updated = { ...urls, [entry.code]: entry };
    setUrls(updated);
    localStorage.setItem("shortUrls", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>URL Shortener</h1>
      <UrlShortenerForm onShorten={handleShorten} />
      <UrlList urls={urls} />
    </div>
  );
};

export default Home;
