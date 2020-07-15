const enhancer = require("./enhancer.js");
// test away!
describe("Testing Jest", () => {
  it("renders", () => {
    expect(true).toBeTruthy();
  });
});

item = {
  name: "trainee's keyblade",
  enhancement: 8,
  durability: 65,
};

describe("Enhancer Unit Tests", () => {
  it("Succeeds to enhance", () => {
    const { succeed } = enhancer;

    const newItem = succeed(item);

    expect(newItem.enhancement).toBe(item.enhancement + 1);
  });

  it("Fails to enhance", () => {
    const { fail } = enhancer;

    const newItem = fail(item);

    if (newItem.enhancement < 15) {
      expect(newItem.durability).toBe(item.durability - 5);
    } else if (newItem.enhancement >= 15) {
      expect(newItem.durability).toBe(item.durability - 10);
    } else if (newItem.enhancement > 16) {
      expect(newItem.durability).toBe(item.durability - 1);
    }
  });

  it("Repairs item", () => {
    const { repair } = enhancer;

    const newItem = repair(item);

    expect(newItem.durability).toBe(item.durability === 100);
  });

  /* it("Changes item name", () => {
    const { get } = enhancer;

    const newItem = get(item);

    if (newItem.enhancement > 0) {
      expect(newItem.name).toBe(
         `[+${item.enhancement}] ${item.name}` "[+8] trainee's keyblade"
      );
    } else if (newItem.enhancement === 0) {
      expect(newItem.name).toBe(item.name);
    }
  }); */
});
