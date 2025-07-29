const UrlList = ({ urls }) => {
  const keys = Object.keys(urls);

  if (!keys.length) return <p>No URLs yet.</p>;

  return (
    <ul>
      {keys.map((key) => (
        <li key={key}>
          <a href={urls[key].shortUrl} target="_blank" rel="noreferrer">
            {urls[key].shortUrl}
          </a>{" "}
          → {urls[key].originalUrl}
        </li>
      ))}
    </ul>
  );
};

export default UrlList;
