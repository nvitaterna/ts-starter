import { describe, it, expect } from 'vitest';
import { faker } from '@faker-js/faker';
import { greet } from '@/greet.js';

describe('greet function', () => {
  it('should return a greeting message', () => {
    const name = faker.person.firstName();
    const expectedGreeting = `Hello, ${name}!`;

    // Import the greet function from the index.ts file

    const result = greet(name);
    expect(result).toBe(expectedGreeting);
  });
});
