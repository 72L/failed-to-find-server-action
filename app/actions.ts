'use server';

export async function clickMe() {
    const random = Math.random();
    return "You clicked me! " + random;
}