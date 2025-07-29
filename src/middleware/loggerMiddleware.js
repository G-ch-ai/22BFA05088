// Correct way: Named export
export const logEvent = (eventType, data) => {
  const logs = JSON.parse(localStorage.getItem('logs') || '[]');
  logs.push({ timestamp: new Date().toISOString(), eventType, data });
  localStorage.setItem('logs', JSON.stringify(logs));
};
