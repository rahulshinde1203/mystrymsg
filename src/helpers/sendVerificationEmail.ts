import { resend } from "@/lib/resend";
import VericationEmail from "../../emails/verificationEmail";
import { ApiRespone } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verificationCode: string
): Promise<ApiRespone>{
    try{
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Mystry Message | Verification Code',
            react: VericationEmail({username, otp:verificationCode}),

        });
        return {success: true, message: 'verification email send successfully'}
    }catch (emailError){
        console.error("Error sending verification Email",emailError)
        return {success: false, message: 'Failed to send verification email'}

    }
}