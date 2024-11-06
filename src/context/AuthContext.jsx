import { createContext, useState, useEffect } from 'react';
import axiosInstance from '../services/axiosInstance';
import { getCsrfCookie } from '../services/csrf';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        try {
            const response = await axiosInstance.get('/api/v1/user');
            setUser(response.data);
        } catch (error) {
            setUser(null);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const login = async (credentials) => {
        await getCsrfCookie();
        const response = await axiosInstance.post('/api/v1/login', credentials);
        setUser(response.data);
    };

    const logout = async () => {
        await axiosInstance.post('/api/v1/logout');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
};