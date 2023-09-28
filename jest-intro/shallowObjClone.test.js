const shallowObjClone = require("./shallowObjClone");

test("create a onj clone of the obj parameter", () => {
  const myObj = { name: "Kusal", age: 25 };

  expect(shallowObjClone(myObj)).toStrictEqual(myObj);
});
