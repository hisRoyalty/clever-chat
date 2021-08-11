declare module 'clever-chat'{
    export class Chatbot{
    constructor(ops: object);
    public chat(message: string) : Promise<String>;
    }
}
