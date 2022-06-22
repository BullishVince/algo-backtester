import {faker} from '@faker-js/faker';


export async function getHackerPhrase(): Promise<string> {
    return faker.hacker.phrase();
}