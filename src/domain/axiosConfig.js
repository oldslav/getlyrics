import axios from "axios";
import { baseUrl } from "../globals";

export const HTTP = axios.create({
  baseURL: baseUrl
});
