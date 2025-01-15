import api from "./api";

export const getAllNotes = async () => {
  const res = await api.get('/notes');
  return res.data;
}
