const mockObject = {
  bool: true,
  value: 100,
  deepObject: {
    arrayKey: [1, 10, 8, 12, 3],
    deeper: {
      deepBool: false,
      option3: {
        data3: [1],
        more: {
          more2: [
            {
              data1: "HEY YOU",
              evenDeeper: {
                deepArray: [87, 54, 10, 554, 4877],
              },
            },
          ],
        },
      },
    },
  },
};

module.exports = {
  mockObject,
};
