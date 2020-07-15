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
        const {fail} = enhancer

        const newItem = fail(item)

        if (newItem.enhancement < 15) {
            expect(newItem.durability).toBe(newItem.durability - 5)
        } else if (newItem.enhancement >= 15) {
            expect(newItem.durability).toBe(newItem.durability - 10)
        } else if (newItem.enhancement > 16) {
            expect(newItem.durability).toBe(newItem.durability - 1)
        }
    })

    it("Repairs item", () => {
        
    })

    it("Changes item name", () => {
        
    })
})