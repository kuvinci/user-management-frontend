import axiosInstance from './axiosInstance';

export const getCsrfCookie = () => axiosInstance.get('/sanctum/csrf-cookie');