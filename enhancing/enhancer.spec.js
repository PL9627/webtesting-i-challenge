const enhancer = require("./enhancer.js");
const { repair } = require("./enhancer.js");
// test away!
describe("Testing Jest", () => {
  it("renders", () => {
    expect(true).toBeTruthy();
  });
});

describe("Enhancer Unit Tests", () => {
  it("Succeeds to enhance", () => {
    const { succeed } = enhancer;

    const newItem = succeed(item);

    if (newItem.enhancement < 20) {
      expect(newItem.enhancement).toBe(newItem.enhancement + 1);
    } else {
      expect(newItem.enhancement).toBe(newItem.enhancement);
    }
  });

  it("Fails to enhance", () => {
    const { fail } = enhancer;

    const newItem = fail(item);

    if (newItem.enhancement < 15) {
      expect(newItem.durability).toBe(newItem.durability - 5);
    } else if (newItem.enhancement >= 15) {
      expect(newItem.durability).toBe(newItem.durability - 10);
    } else if (newItem.enhancement > 16) {
      expect(newItem.durability).toBe(newItem.durability - 1);
    }
  });

  it("Repairs item", () => {
    const { repair } = enhancer;

    const newItem = repair(item);

    expect(newItem.durability).toBe(100);
  });

  it("Changes item name", () => {
    const { get } = enhancer;

    const newItem = get(item);

    if (newItem.enhancement === 0) {
      expect(newItem.name).toBe(item.name);
    } else if (newItem.enhancement > 0) {
      expect(newItem.name).toBe(`[+${newItem.enhancement}] ${item.name}`);
    }
  });
});
