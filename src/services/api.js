// src/services/api.js
import axios from 'axios';

const API_URL = 'your_api_base_url';

const api = axios.create({
  baseURL: API_URL,
});

export const login = (email, password) => api.post('/api/users/login', { email, password });
export const registerUser = (userData) => api.post('/api/users/register', userData);
export const getPatients = () => api.get('/api/patients');
export const getPatientById = (id) => api.get(`/api/patients/${id}`);
export const addPatient = (patientData) => api.post('/api/patients', patientData);
export const getPatientTests = (patientId) => api.get(`/api/tests/${patientId}/tests`);
export const addPatientTest = (patientId, testData) => api.post(`/api/tests/${patientId}/tests`, testData);
export const getCriticalPatients = () => api.get('/api/tests/critical');