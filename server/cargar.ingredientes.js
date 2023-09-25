var request = require('request');

let ingredients = [{
    "_id": {
      "$oid": "64fb76e22b8b6eff1e219c3d"
    },
    "name": "Tomato",
    "createdAt": {
      "$date": "2023-09-08T19:32:50.954Z"
    },
    "updatedAt": {
      "$date": "2023-09-08T19:34:12.233Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64ff6a43240831a59588a11e"
    },
    "name": "yellow tomato",
    "createdAt": {
      "$date": "2023-09-11T19:28:03.948Z"
    },
    "updatedAt": {
      "$date": "2023-09-11T19:28:03.948Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64ff6a65240831a59588a121"
    },
    "name": "red onion",
    "createdAt": {
      "$date": "2023-09-11T19:28:37.298Z"
    },
    "updatedAt": {
      "$date": "2023-09-11T19:28:37.298Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64ff6a7d240831a59588a124"
    },
    "name": "cilantro",
    "createdAt": {
      "$date": "2023-09-11T19:29:01.293Z"
    },
    "updatedAt": {
      "$date": "2023-09-11T19:29:01.293Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64ff6a8b240831a59588a127"
    },
    "name": "serrano pepper",
    "createdAt": {
      "$date": "2023-09-11T19:29:15.547Z"
    },
    "updatedAt": {
      "$date": "2023-09-11T19:29:15.547Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64ff6aa0240831a59588a12a"
    },
    "name": "garlic",
    "createdAt": {
      "$date": "2023-09-11T19:29:36.108Z"
    },
    "updatedAt": {
      "$date": "2023-09-11T19:29:36.108Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64ff6ab3240831a59588a12d"
    },
    "name": "lime juice",
    "createdAt": {
      "$date": "2023-09-11T19:29:55.688Z"
    },
    "updatedAt": {
      "$date": "2023-09-11T19:29:55.688Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64ff6acd240831a59588a130"
    },
    "name": "sea salt",
    "createdAt": {
      "$date": "2023-09-11T19:30:21.327Z"
    },
    "updatedAt": {
      "$date": "2023-09-11T19:30:21.327Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64ff6dbf240831a59588a133"
    },
    "name": "green pepper",
    "createdAt": {
      "$date": "2023-09-11T19:42:55.358Z"
    },
    "updatedAt": {
      "$date": "2023-09-11T19:42:55.358Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64ff6dcc240831a59588a136"
    },
    "name": "scallions",
    "createdAt": {
      "$date": "2023-09-11T19:43:08.528Z"
    },
    "updatedAt": {
      "$date": "2023-09-11T19:43:08.528Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64ff6dd3240831a59588a139"
    },
    "name": "eggs",
    "createdAt": {
      "$date": "2023-09-11T19:43:15.441Z"
    },
    "updatedAt": {
      "$date": "2023-09-11T19:43:15.441Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64ff6de1240831a59588a13c"
    },
    "name": "spinach",
    "createdAt": {
      "$date": "2023-09-11T19:43:29.457Z"
    },
    "updatedAt": {
      "$date": "2023-09-11T19:43:29.457Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64ff6e06240831a59588a142"
    },
    "name": "extra-virgin olive oil",
    "createdAt": {
      "$date": "2023-09-11T19:44:06.147Z"
    },
    "updatedAt": {
      "$date": "2023-09-11T19:44:06.147Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64ff6e27240831a59588a145"
    },
    "name": "tortillas",
    "createdAt": {
      "$date": "2023-09-11T19:44:39.217Z"
    },
    "updatedAt": {
      "$date": "2023-09-11T19:44:39.217Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64ff6e32240831a59588a148"
    },
    "name": "avocado",
    "createdAt": {
      "$date": "2023-09-11T19:44:50.629Z"
    },
    "updatedAt": {
      "$date": "2023-09-11T19:44:50.629Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64ff6e3d240831a59588a14b"
    },
    "name": "pepper",
    "createdAt": {
      "$date": "2023-09-11T19:45:01.591Z"
    },
    "updatedAt": {
      "$date": "2023-09-11T19:45:01.591Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6507bcdf4b784635cff17ca6"
    },
    "name": " salmon fillets",
    "createdAt": {
      "$date": "2023-09-18T02:58:39.481Z"
    },
    "updatedAt": {
      "$date": "2023-09-18T02:58:39.481Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6507bcfe4b784635cff17ca9"
    },
    "name": "vegetable broth",
    "createdAt": {
      "$date": "2023-09-18T02:59:10.873Z"
    },
    "updatedAt": {
      "$date": "2023-09-18T02:59:10.873Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6507bd0f4b784635cff17cac"
    },
    "name": "lemon juice",
    "createdAt": {
      "$date": "2023-09-18T02:59:27.551Z"
    },
    "updatedAt": {
      "$date": "2023-09-18T02:59:27.551Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6507bd264b784635cff17caf"
    },
    "name": "Sriracha",
    "createdAt": {
      "$date": "2023-09-18T02:59:50.029Z"
    },
    "updatedAt": {
      "$date": "2023-09-18T02:59:50.029Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6507bd3c4b784635cff17cb2"
    },
    "name": "butter",
    "createdAt": {
      "$date": "2023-09-18T03:00:12.749Z"
    },
    "updatedAt": {
      "$date": "2023-09-18T03:00:12.749Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6507bd544b784635cff17cb5"
    },
    "name": "asparagus",
    "createdAt": {
      "$date": "2023-09-18T03:00:36.857Z"
    },
    "updatedAt": {
      "$date": "2023-09-18T03:00:36.857Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6507be2c4b784635cff17cb8"
    },
    "name": "oat flour",
    "createdAt": {
      "$date": "2023-09-18T03:04:12.180Z"
    },
    "updatedAt": {
      "$date": "2023-09-18T03:04:12.180Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6507be374b784635cff17cbb"
    },
    "name": "walnuts",
    "createdAt": {
      "$date": "2023-09-18T03:04:23.606Z"
    },
    "updatedAt": {
      "$date": "2023-09-18T03:04:23.606Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6507be4d4b784635cff17cbe"
    },
    "name": "almond butter",
    "createdAt": {
      "$date": "2023-09-18T03:04:45.507Z"
    },
    "updatedAt": {
      "$date": "2023-09-18T03:04:45.507Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6507be5e4b784635cff17cc1"
    },
    "name": "Medjool date",
    "createdAt": {
      "$date": "2023-09-18T03:05:02.952Z"
    },
    "updatedAt": {
      "$date": "2023-09-18T03:05:02.952Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6507be744b784635cff17cc4"
    },
    "name": "vanilla extract",
    "createdAt": {
      "$date": "2023-09-18T03:05:24.135Z"
    },
    "updatedAt": {
      "$date": "2023-09-18T03:05:24.135Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6507bea24b784635cff17ccd"
    },
    "name": "chocolate chips",
    "createdAt": {
      "$date": "2023-09-18T03:06:10.789Z"
    },
    "updatedAt": {
      "$date": "2023-09-18T03:06:10.789Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6507c07a4b784635cff17eda"
    },
    "name": "salt",
    "createdAt": {
      "$date": "2023-09-18T03:14:02.014Z"
    },
    "updatedAt": {
      "$date": "2023-09-18T03:14:02.014Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2b95f11ebb4420c89c5a"
    },
    "name": "oats",
    "createdAt": {
      "$date": "2023-09-19T23:15:33.385Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:15:33.385Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2badf11ebb4420c89c5d"
    },
    "name": "cinnamon",
    "createdAt": {
      "$date": "2023-09-19T23:15:57.114Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:15:57.114Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2bc8f11ebb4420c89c60"
    },
    "name": "apples",
    "createdAt": {
      "$date": "2023-09-19T23:16:24.092Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:16:24.092Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2be4f11ebb4420c89c63"
    },
    "name": "blueberries",
    "createdAt": {
      "$date": "2023-09-19T23:16:52.507Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:16:52.507Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2bfff11ebb4420c89c66"
    },
    "name": "greek yogurt",
    "createdAt": {
      "$date": "2023-09-19T23:17:19.839Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:17:19.839Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2c0af11ebb4420c89c69"
    },
    "name": "chia seeds",
    "createdAt": {
      "$date": "2023-09-19T23:17:30.234Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:17:30.234Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2c6ff11ebb4420c89c6c"
    },
    "name": "almond milk",
    "createdAt": {
      "$date": "2023-09-19T23:19:11.791Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:19:11.791Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2c9af11ebb4420c89c6f"
    },
    "name": "coconut milk",
    "createdAt": {
      "$date": "2023-09-19T23:19:54.182Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:19:54.182Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2cc0f11ebb4420c89c72"
    },
    "name": "maple syrup",
    "createdAt": {
      "$date": "2023-09-19T23:20:32.044Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:20:32.044Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2d7ff11ebb4420c89c75"
    },
    "name": "pastry flour",
    "createdAt": {
      "$date": "2023-09-19T23:23:43.997Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:23:43.997Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2d97f11ebb4420c89c78"
    },
    "name": "ground flaxseed",
    "createdAt": {
      "$date": "2023-09-19T23:24:07.541Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:24:07.541Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2da6f11ebb4420c89c7e"
    },
    "name": "nutmeg",
    "createdAt": {
      "$date": "2023-09-19T23:24:22.786Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:24:22.786Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2db1f11ebb4420c89c81"
    },
    "name": "baking powder",
    "createdAt": {
      "$date": "2023-09-19T23:24:33.706Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:24:33.706Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2db6f11ebb4420c89c84"
    },
    "name": "baking soda",
    "createdAt": {
      "$date": "2023-09-19T23:24:38.859Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:24:38.859Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2dc0f11ebb4420c89c87"
    },
    "name": "cider vinegar",
    "createdAt": {
      "$date": "2023-09-19T23:24:48.290Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:24:48.290Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2dd5f11ebb4420c89c8d"
    },
    "name": "olive oil",
    "createdAt": {
      "$date": "2023-09-19T23:25:09.671Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:25:09.671Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2ddff11ebb4420c89c90"
    },
    "name": "vanilla",
    "createdAt": {
      "$date": "2023-09-19T23:25:19.011Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:25:19.011Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2e53f11ebb4420c89c93"
    },
    "name": "bananas",
    "createdAt": {
      "$date": "2023-09-19T23:27:15.485Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:27:15.485Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2e6df11ebb4420c89c96"
    },
    "name": "chocolate chips",
    "createdAt": {
      "$date": "2023-09-19T23:27:41.301Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:27:41.301Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2f26f11ebb4420c89c99"
    },
    "name": "corn tortillas",
    "createdAt": {
      "$date": "2023-09-19T23:30:46.935Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:30:46.935Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2f49f11ebb4420c89c9c"
    },
    "name": "romaine lettuce",
    "createdAt": {
      "$date": "2023-09-19T23:31:21.948Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:31:21.948Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2f57f11ebb4420c89c9f"
    },
    "name": "red cabbage",
    "createdAt": {
      "$date": "2023-09-19T23:31:35.072Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:31:35.072Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2f6df11ebb4420c89ca2"
    },
    "name": "black beans",
    "createdAt": {
      "$date": "2023-09-19T23:31:57.154Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:31:57.154Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2f7df11ebb4420c89ca5"
    },
    "name": "red radishes",
    "createdAt": {
      "$date": "2023-09-19T23:32:13.125Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:32:13.125Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a2f88f11ebb4420c89ca8"
    },
    "name": "cherry tomatoes",
    "createdAt": {
      "$date": "2023-09-19T23:32:24.252Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:32:24.252Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a304af11ebb4420c89cae"
    },
    "name": "fusilli pasta",
    "createdAt": {
      "$date": "2023-09-19T23:35:38.318Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:35:38.318Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a307ff11ebb4420c89cb1"
    },
    "name": "cooked chickpeas",
    "createdAt": {
      "$date": "2023-09-19T23:36:31.019Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:36:31.019Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a3089f11ebb4420c89cb4"
    },
    "name": "arugula",
    "createdAt": {
      "$date": "2023-09-19T23:36:41.597Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:36:41.597Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a3097f11ebb4420c89cb7"
    },
    "name": "cucumbers",
    "createdAt": {
      "$date": "2023-09-19T23:36:55.792Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:36:55.792Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a30a4f11ebb4420c89cba"
    },
    "name": "feta cheese",
    "createdAt": {
      "$date": "2023-09-19T23:37:08.245Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:37:08.245Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a30b7f11ebb4420c89cbd"
    },
    "name": "basil leaves",
    "createdAt": {
      "$date": "2023-09-19T23:37:27.414Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:37:27.414Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a30c3f11ebb4420c89cc0"
    },
    "name": "parsley",
    "createdAt": {
      "$date": "2023-09-19T23:37:39.300Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:37:39.300Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a30cff11ebb4420c89cc3"
    },
    "name": "pine nuts",
    "createdAt": {
      "$date": "2023-09-19T23:37:51.968Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:37:51.968Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a30e1f11ebb4420c89cc6"
    },
    "name": "Dijon mustard",
    "createdAt": {
      "$date": "2023-09-19T23:38:09.587Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:38:09.587Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a30faf11ebb4420c89cc9"
    },
    "name": "dried Italian seasoning",
    "createdAt": {
      "$date": "2023-09-19T23:38:34.566Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:38:34.566Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a3105f11ebb4420c89ccc"
    },
    "name": "red pepper flakes",
    "createdAt": {
      "$date": "2023-09-19T23:38:45.443Z"
    },
    "updatedAt": {
      "$date": "2023-09-19T23:38:45.443Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a3d34f11ebb4420c89ccf"
    },
    "name": "yellow onion",
    "createdAt": {
      "$date": "2023-09-20T00:30:44.788Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T00:30:44.788Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a3d5cf11ebb4420c89cd2"
    },
    "name": "butternut squash",
    "createdAt": {
      "$date": "2023-09-20T00:31:24.046Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T00:31:24.046Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a3e3bf11ebb4420c89cd5"
    },
    "name": "rosemary",
    "createdAt": {
      "$date": "2023-09-20T00:35:07.969Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T00:35:07.969Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a3e46f11ebb4420c89cd8"
    },
    "name": "ginger",
    "createdAt": {
      "$date": "2023-09-20T00:35:18.194Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T00:35:18.194Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a61c946af295bc456d9ae"
    },
    "name": "red bell pepper",
    "createdAt": {
      "$date": "2023-09-20T03:06:49.076Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T03:06:49.076Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a61d946af295bc456d9b1"
    },
    "name": "scallions",
    "createdAt": {
      "$date": "2023-09-20T03:07:05.522Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T03:07:05.522Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a61e046af295bc456d9b4"
    },
    "name": "eggs",
    "createdAt": {
      "$date": "2023-09-20T03:07:12.695Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T03:07:12.695Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a61f446af295bc456d9b7"
    },
    "name": "all purpose flour",
    "createdAt": {
      "$date": "2023-09-20T03:07:32.496Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T03:07:32.496Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a629e46af295bc456d9ba"
    },
    "name": "red bell pepper",
    "createdAt": {
      "$date": "2023-09-20T03:10:22.125Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T03:10:22.125Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a67e746af295bc456e879"
    },
    "name": "raw pecans",
    "createdAt": {
      "$date": "2023-09-20T03:32:55.863Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T03:32:55.863Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a67ff46af295bc456e87c"
    },
    "name": "raw cashews",
    "createdAt": {
      "$date": "2023-09-20T03:33:19.363Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T03:33:19.363Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a680746af295bc456e87f"
    },
    "name": "coconut milk",
    "createdAt": {
      "$date": "2023-09-20T03:33:27.696Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T03:33:27.696Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a681646af295bc456e882"
    },
    "name": "butter",
    "createdAt": {
      "$date": "2023-09-20T03:33:42.596Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T03:33:42.596Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a6d0f46af295bc456f2db"
    },
    "name": "cane sugar",
    "createdAt": {
      "$date": "2023-09-20T03:54:55.783Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T03:54:55.783Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a6ec446af295bc456f2e6"
    },
    "name": "lemon zest",
    "createdAt": {
      "$date": "2023-09-20T04:02:12.844Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T04:02:12.844Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a716046af295bc456f8e6"
    },
    "name": "goat cheese",
    "createdAt": {
      "$date": "2023-09-20T04:13:20.188Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T04:13:20.188Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a717e46af295bc456f8e9"
    },
    "name": "chives",
    "createdAt": {
      "$date": "2023-09-20T04:13:50.712Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T04:13:50.712Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a718a46af295bc456f8ec"
    },
    "name": "onion powder",
    "createdAt": {
      "$date": "2023-09-20T04:14:02.174Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T04:14:02.174Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a71c646af295bc456f8f1"
    },
    "name": "English muffins",
    "createdAt": {
      "$date": "2023-09-20T04:15:02.668Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T04:15:02.668Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a71cc46af295bc456f8f4"
    },
    "name": "bread",
    "createdAt": {
      "$date": "2023-09-20T04:15:08.820Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T04:15:08.820Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a71da46af295bc456f8f7"
    },
    "name": "red onion",
    "createdAt": {
      "$date": "2023-09-20T04:15:22.180Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T04:15:22.180Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a74f246af295bc4570692"
    },
    "name": "almond flour",
    "createdAt": {
      "$date": "2023-09-20T04:28:34.696Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T04:28:34.696Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a7b6846af295bc4574d74"
    },
    "name": "apple",
    "createdAt": {
      "$date": "2023-09-20T04:56:08.781Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T04:56:08.781Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a7b7f46af295bc4574d77"
    },
    "name": "granola",
    "createdAt": {
      "$date": "2023-09-20T04:56:31.266Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T04:56:31.266Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a7b8646af295bc4574d7a"
    },
    "name": "honey",
    "createdAt": {
      "$date": "2023-09-20T04:56:38.225Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T04:56:38.225Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a830c69ed620b025da2d9"
    },
    "name": "nutritional yest",
    "createdAt": {
      "$date": "2023-09-20T05:28:44.191Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T05:28:44.191Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a831869ed620b025da2dc"
    },
    "name": "turmeric",
    "createdAt": {
      "$date": "2023-09-20T05:28:56.822Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T05:28:56.822Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a831e69ed620b025da2df"
    },
    "name": "cumin",
    "createdAt": {
      "$date": "2023-09-20T05:29:02.948Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T05:29:02.948Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a832f69ed620b025da2e2"
    },
    "name": "extra-firm tofu",
    "createdAt": {
      "$date": "2023-09-20T05:29:19.158Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T05:29:19.158Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a86a169ed620b025dba24"
    },
    "name": "hummus",
    "createdAt": {
      "$date": "2023-09-20T05:44:01.589Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T05:44:01.589Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a86b269ed620b025dba27"
    },
    "name": "lemon",
    "createdAt": {
      "$date": "2023-09-20T05:44:18.674Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T05:44:18.674Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a86cd69ed620b025dba2a"
    },
    "name": "chicken",
    "createdAt": {
      "$date": "2023-09-20T05:44:45.208Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T05:44:45.208Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a86dc69ed620b025dba2d"
    },
    "name": "pomegranade seeds",
    "createdAt": {
      "$date": "2023-09-20T05:45:00.260Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T05:45:00.260Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a870a69ed620b025dba30"
    },
    "name": "mixed grains",
    "createdAt": {
      "$date": "2023-09-20T05:45:46.953Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T05:45:46.953Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a872469ed620b025dba33"
    },
    "name": "toasted almonds",
    "createdAt": {
      "$date": "2023-09-20T05:46:12.055Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T05:46:12.055Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a88f669ed620b025dc36b"
    },
    "name": "penne",
    "createdAt": {
      "$date": "2023-09-20T05:53:58.087Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T05:53:58.087Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a8a7769ed620b025dc36e"
    },
    "name": "carrots",
    "createdAt": {
      "$date": "2023-09-20T06:00:23.933Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T06:00:23.933Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a8a8069ed620b025dc371"
    },
    "name": "celery",
    "createdAt": {
      "$date": "2023-09-20T06:00:32.139Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T06:00:32.139Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a8a8c69ed620b025dc374"
    },
    "name": "tomatoes",
    "createdAt": {
      "$date": "2023-09-20T06:00:44.082Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T06:00:44.082Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a8a9a69ed620b025dc377"
    },
    "name": "white beans",
    "createdAt": {
      "$date": "2023-09-20T06:00:58.193Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T06:00:58.193Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a8aa669ed620b025dc37a"
    },
    "name": "bay leaves",
    "createdAt": {
      "$date": "2023-09-20T06:01:10.078Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T06:01:10.078Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a8aac69ed620b025dc37d"
    },
    "name": "dried oregano",
    "createdAt": {
      "$date": "2023-09-20T06:01:16.893Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T06:01:16.893Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a8ab369ed620b025dc380"
    },
    "name": "dried thyme",
    "createdAt": {
      "$date": "2023-09-20T06:01:23.896Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T06:01:23.896Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650a8ac669ed620b025dc383"
    },
    "name": "parmesan cheese",
    "createdAt": {
      "$date": "2023-09-20T06:01:42.786Z"
    },
    "updatedAt": {
      "$date": "2023-09-20T06:01:42.786Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650cc4475efcdf888beb5820"
    },
    "name": "frozen mixed berry",
    "createdAt": {
      "$date": "2023-09-21T22:31:35.820Z"
    },
    "updatedAt": {
      "$date": "2023-09-21T22:31:35.820Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650cc5335efcdf888beb6b3e"
    },
    "name": "melon",
    "createdAt": {
      "$date": "2023-09-21T22:35:31.697Z"
    },
    "updatedAt": {
      "$date": "2023-09-21T22:35:31.697Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650cc5515efcdf888beb6b41"
    },
    "name": "fruit cereal",
    "createdAt": {
      "$date": "2023-09-21T22:36:01.581Z"
    },
    "updatedAt": {
      "$date": "2023-09-21T22:36:01.581Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650cc5645efcdf888beb6b44"
    },
    "name": "mixed seed",
    "createdAt": {
      "$date": "2023-09-21T22:36:20.047Z"
    },
    "updatedAt": {
      "$date": "2023-09-21T22:36:20.047Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650cc7095efcdf888beb7d8f"
    },
    "name": "ricotta cheese",
    "createdAt": {
      "$date": "2023-09-21T22:43:21.787Z"
    },
    "updatedAt": {
      "$date": "2023-09-21T22:43:21.787Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650cc7265efcdf888beb7d92"
    },
    "name": "whole-wheat bread",
    "createdAt": {
      "$date": "2023-09-21T22:43:50.306Z"
    },
    "updatedAt": {
      "$date": "2023-09-21T22:43:50.306Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650cc72d5efcdf888beb7d95"
    },
    "name": "peach",
    "createdAt": {
      "$date": "2023-09-21T22:43:57.286Z"
    },
    "updatedAt": {
      "$date": "2023-09-21T22:43:57.286Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650cc7375efcdf888beb7d98"
    },
    "name": "pistachios",
    "createdAt": {
      "$date": "2023-09-21T22:44:07.712Z"
    },
    "updatedAt": {
      "$date": "2023-09-21T22:44:07.712Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650cccf65efcdf888beb9bc2"
    },
    "name": "espresso powder",
    "createdAt": {
      "$date": "2023-09-21T23:08:38.171Z"
    },
    "updatedAt": {
      "$date": "2023-09-21T23:08:38.171Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650ccd0a5efcdf888beb9bc5"
    },
    "name": "cocoa powder",
    "createdAt": {
      "$date": "2023-09-21T23:08:58.319Z"
    },
    "updatedAt": {
      "$date": "2023-09-21T23:08:58.319Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650ccf9b5efcdf888bebb16f"
    },
    "name": "silken tofu",
    "createdAt": {
      "$date": "2023-09-21T23:19:55.084Z"
    },
    "updatedAt": {
      "$date": "2023-09-21T23:19:55.084Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650cd3b65efcdf888bebc692"
    },
    "name": "burrata",
    "createdAt": {
      "$date": "2023-09-21T23:37:26.026Z"
    },
    "updatedAt": {
      "$date": "2023-09-21T23:37:26.026Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650cd9025efcdf888bebf316"
    },
    "name": "fish fillet",
    "createdAt": {
      "$date": "2023-09-22T00:00:02.793Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T00:00:02.793Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650cd90e5efcdf888bebf319"
    },
    "name": "canola oil",
    "createdAt": {
      "$date": "2023-09-22T00:00:14.543Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T00:00:14.543Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650cd9485efcdf888bebf31c"
    },
    "name": "mayonnaise",
    "createdAt": {
      "$date": "2023-09-22T00:01:12.690Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T00:01:12.690Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650cd9595efcdf888bebf31f"
    },
    "name": "coleslaw mix",
    "createdAt": {
      "$date": "2023-09-22T00:01:29.048Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T00:01:29.048Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650cd9715efcdf888bebf322"
    },
    "name": "queso fresco",
    "createdAt": {
      "$date": "2023-09-22T00:01:53.804Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T00:01:53.804Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650d021c5efcdf888bec2410"
    },
    "name": "peanut butter",
    "createdAt": {
      "$date": "2023-09-22T02:55:24.894Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T02:55:24.894Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650d031f5efcdf888bec31c8"
    },
    "name": "heavy cream",
    "createdAt": {
      "$date": "2023-09-22T02:59:43.227Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T02:59:43.227Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650d03295efcdf888bec31cb"
    },
    "name": "penne pasta",
    "createdAt": {
      "$date": "2023-09-22T02:59:53.903Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T02:59:53.903Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650d03575efcdf888bec31d0"
    },
    "name": "mozzarella cheese",
    "createdAt": {
      "$date": "2023-09-22T03:00:39.928Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T03:00:39.928Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650d10635efcdf888bec772a"
    },
    "name": "broccoli",
    "createdAt": {
      "$date": "2023-09-22T03:56:19.762Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T03:56:19.762Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650d10715efcdf888bec772d"
    },
    "name": "mushroom",
    "createdAt": {
      "$date": "2023-09-22T03:56:33.499Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T03:56:33.499Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650d10815efcdf888bec7730"
    },
    "name": "ginger",
    "createdAt": {
      "$date": "2023-09-22T03:56:49.289Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T03:56:49.289Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650d108a5efcdf888bec7733"
    },
    "name": "sesame oil",
    "createdAt": {
      "$date": "2023-09-22T03:56:58.477Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T03:56:58.477Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650d10955efcdf888bec7736"
    },
    "name": "soy sauce",
    "createdAt": {
      "$date": "2023-09-22T03:57:09.443Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T03:57:09.443Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650d109d5efcdf888bec7739"
    },
    "name": "brown sugar",
    "createdAt": {
      "$date": "2023-09-22T03:57:17.840Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T03:57:17.840Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650d10a95efcdf888bec773c"
    },
    "name": "chicken broth",
    "createdAt": {
      "$date": "2023-09-22T03:57:29.375Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T03:57:29.375Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650d13f55efcdf888bec9450"
    },
    "name": "chilli powder",
    "createdAt": {
      "$date": "2023-09-22T04:11:33.299Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T04:11:33.299Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650d14085efcdf888bec9453"
    },
    "name": "cheddar",
    "createdAt": {
      "$date": "2023-09-22T04:11:52.854Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T04:11:52.854Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650d2c8a1da0a1a472f25524"
    },
    "name": "elbows",
    "createdAt": {
      "$date": "2023-09-22T05:56:26.143Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T05:56:26.143Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650dd6ef3342882eda05cc86"
    },
    "name": "elbows",
    "createdAt": {
      "$date": "2023-09-22T18:03:27.548Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T18:03:27.548Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650ded1b3342882eda06025a"
    },
    "name": "spaguetti",
    "createdAt": {
      "$date": "2023-09-22T19:38:03.712Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T19:38:03.712Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650dee1c3342882eda06025d"
    },
    "name": "ketchup",
    "createdAt": {
      "$date": "2023-09-22T19:42:20.141Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T19:42:20.141Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "650df8e83342882eda060260"
    },
    "name": "spaguetti2",
    "createdAt": {
      "$date": "2023-09-22T20:28:24.058Z"
    },
    "updatedAt": {
      "$date": "2023-09-22T20:28:24.058Z"
    },
    "__v": 0
  }]

ingredients.map(ingredient => {
    request.post(
        //First parameter API to make post request
        'http://3.86.66.135/api/ingredients',
    
        //Second parameter DATA which has to be sent to API
        {json: { name: ingredient.name
        }},
        
        //Thrid parameter Ballack function  
        function (error, response, body) {
                console.log(body);
            
        }
    );
})