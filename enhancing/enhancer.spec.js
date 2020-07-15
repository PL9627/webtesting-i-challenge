const enhancer = require("./enhancer.js");
// test away!
describe("Testing Jest", () => {
  it("renders", () => {
    expect(true).toBeTruthy();
  });
});

describe("Enhancer Unit Tests", () => {
    it("Succeeds to enhance", () => {
        const {succeed} = enhancer

        const newItem = succeed(item)

        if (newItem.enhancement < 20) {
            expect(newItem.enhancement).toBe(newItem.enhancement + 1)
        } else {
            expect(newItem.enhancement).toBe(newItem.enhancement)
        }
    })

    it("Fails to enhance", () => {
        
    })

    it("Repairs item", () => {
        
    })

    it("Changes item name", () => {
        
    })
})