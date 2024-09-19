import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string().trim().email("Please enter a valid email"),
  passowrd: z.string().trim().min(6, "Pasword Need to be at lest 6 character"),
});
