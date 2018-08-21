
// brings type definition from @types/chai
// declare const expect: Chai.ExpectStatic
describe("TypeScript", () => {
  it("works", () => {
    // note TypeScript definition
    const x: number = 42;

    // these lines throws erros on `npm run lint`
    const a = cy.get("cy-example");
    const b: { [keyof: string]: any } = {
        a: 'test',
        b: cy.get('cy-example'),
    };
    b.x = cy.get('cy-example');
    const c = [123, cy.get('cy-example')];
    clickOnElement(cy.get('cy-example'));
  });

});

function clickOnElement(el: any) {
    el.click();
}
