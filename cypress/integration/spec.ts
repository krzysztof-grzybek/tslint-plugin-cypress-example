
// brings type definition from @types/chai
// declare const expect: Chai.ExpectStatic
describe("TypeScript", () => {
  it("works", () => {
    // note TypeScript definition
    const x: number = 42;
  });

  it("checks shape of an object", () => {
    const object = {
      age: 21,
      name: "Joe",
    };
    expect(object).to.have.all.keys("name", "age");
  });

});
