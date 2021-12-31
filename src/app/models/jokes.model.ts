export interface JokeFlags {
    nsfw: boolean,
    religious: boolean,
    political: boolean,
    racist: boolean,
    sexist: boolean,
    explicit: boolean
}

export interface Joke {
    error: boolean,
    category: string,
    type: JokeType,
    joke?: string;
    setup?: string,
    delivery?: string,
    flags: JokeFlags,
    id: number,
    safe: boolean,
    lang: string
}

export enum JokeType {
    SIMPLE = 'single',
    QUESTION_AND_ANSWER = 'twopart'
}