import { Message } from "@/model/User";
export interface ApiRespone{
    success:boolean;
    message: string;
    isAcceptingMessages?: boolean
    messages?: Array<Message>
}