import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { generateShortCode } from "../utils/shortCodeGenerator";
import { logEvent } from "../middleware/loggerMiddleware";

const UrlShortenerForm = ({ onShorten }) => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [expiry, setExpiry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = customCode || generateShortCode();
    const shortUrl = `${window.location.origin}/${code}`;

    const newEntry = {
      code,
      originalUrl,
      shortUrl,
      expiry: expiry ? Date.now() + expiry * 60000 : null,
      clicks: [],
      createdAt: Date.now(),

    };

    onShorten(newEntry);
    logEvent("CREATE_SHORT_URL", newEntry);
    setOriginalUrl("");
    setCustomCode("");
    setExpiry("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Original URL"
        fullWidth
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Custom Code (optional)"
        fullWidth
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Expiry (mins)"
        fullWidth
        type="number"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" type="submit" style={{ marginTop: "10px" }}>
        Shorten URL
      </Button>
    </form>
  );
};

export default UrlShortenerForm;
