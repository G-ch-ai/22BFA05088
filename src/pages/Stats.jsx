import { useEffect, useState } from "react";

const Stats = () => {
  const [urls, setUrls] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("shortUrls") || "{}");
    setUrls(data);
  }, []);

  const keys = Object.keys(urls);

  if (!keys.length) return <p>No statistics available.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>URL Statistics</h1>
      <ul>
        {keys.map((key) => (
          <li key={key}>
            <strong>{urls[key].shortUrl}</strong> → {urls[key].originalUrl}
            <br />
            Clicks: {urls[key].clicks?.length || 0}
            <br />
            Created: {new Date(urls[key].createdAt || Date.now()).toLocaleString()}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stats;
