import axios from "axios";

const api = axios.create({
  baseURL: "https://resume-builder-app-2d7l.onrender.com",
});

export default api;
