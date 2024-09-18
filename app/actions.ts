'use server';

export async function clickMe(query:string) {
    const random = Math.random();
    return "You clicked me! " + query + " / " + random;
}