import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on their year of birth", () => {
    
    const currentYear = new Date().getFullYear();
    const birthYear = 1984;
    const expectedAge = currentYear - birthYear; 
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toEqual(expectedAge);
  });
});

