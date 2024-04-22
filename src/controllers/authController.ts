import { Request, Response } from 'express';
import AuthService from '../services/authService';

export async function register(req: Request, res: Response) {
    try {
        const { username, email, password } = req.body;
        const user = await AuthService.register(username, email, password);
        res.status(201).json({ message: "User registered successfully", user });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}

export async function authenticate(req: Request, res: Response) {
    try {
        const { username, password } = req.body;
        const token = await AuthService.authenticate(username, password);
        res.status(200).json({ message: "Authentication successful", token });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(401).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}
