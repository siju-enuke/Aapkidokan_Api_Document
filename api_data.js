define({ "api": [
  {
    "type": "Post",
    "url": "/api/admin/category",
    "title": "Add Category",
    "name": "Add_Category",
    "group": "Admin-Category",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Category.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "store_id",
            "description": "<p>ID of the Store.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the Category</p>"
          },
          {
            "group": "Parameter",
            "type": "[File]",
            "optional": false,
            "field": "Pictures",
            "description": "<p>Array of pictures of products.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"status\": 1,\n       \"parent\": null,\n       \"_id\": \"5e71cc28b63595371e4f622c\",\n       \"name\": \"Test Category\",\n       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n       \"picture\":\"Screenshot_2020-02-04 Shuffle \u0013 A Number For Every Occasion\\\".png\",\n       \"created_at\": \"2020-03-18T07:22:16.950Z\",\n       \"updated_at\": \"2020-03-18T07:22:16.950Z\",\n       \"__v\": 0\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Validation",
            "description": "<p>Error Image is required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Image is Required",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Category Picture is a required field\",\n   \"error\": {\n       \"validation\": {\n           \"picture\": [\n               \"Category Picture is a required field\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/category.js",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "delete",
    "url": "/api/admin/category/:id",
    "title": "Delete Category",
    "name": "Delete_Category",
    "group": "Admin-Category",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of the Category.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"data\": {\n           \"n\": 1,\n           \"opTime\": {\n               \"ts\": \"6805491365456117761\",\n               \"t\": 64\n           },\n           \"electionId\": \"7fffffff0000000000000040\",\n           \"ok\": 1,\n           \"$clusterTime\": {\n               \"clusterTime\": \"6805491365456117761\",\n               \"signature\": {\n                   \"hash\": \"FSnfUeSrSjhDrrvHgyrh/xrleCI=\",\n                   \"keyId\": \"6753601258507993089\"\n               }\n           },\n           \"operationTime\": \"6805491365456117761\",\n           \"deletedCount\": 1\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNPROCESSABLE_ENTITY",
            "description": "<p>Id is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Id is invalid\",\n   \"error\": {\n       \"validation\": {\n           \"category_id\": [\n               \"Id is invalid\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/category.js",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "get",
    "url": "/api/admin/category/:id",
    "title": "Get Category Details",
    "name": "Get_Category_Details",
    "group": "Admin-Category",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of the Category.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"category\": {\n           \"_id\": \"5da81a395a367e70790dfa00\",\n           \"name\": \"Snacks\",\n           \"status\": 1,\n           \"subcategories\": [\n               {\n                   \"_id\": \"5da81a785a367e70790dfa03\",\n                   \"status\": 1,\n                   \"parent\": \"5da81a395a367e70790dfa00\",\n                   \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"name\": \"Biscuits\",\n                   \"created_at\": \"2019-10-17T07:38:32.699Z\",\n                   \"updated_at\": \"2019-10-17T07:38:32.699Z\",\n                   \"__v\": 0\n               },\n               {\n                   \"_id\": \"5da81aaf5a367e70790dfa08\",\n                   \"status\": 1,\n                   \"parent\": \"5da81a395a367e70790dfa00\",\n                   \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"name\": \"Cakes\",\n                   \"created_at\": \"2019-10-17T07:39:27.035Z\",\n                   \"updated_at\": \"2019-10-17T07:39:27.035Z\",\n                   \"__v\": 0\n               },\n               {\n                   \"_id\": \"5da81a8e5a367e70790dfa05\",\n                   \"status\": 1,\n                   \"parent\": \"5da81a395a367e70790dfa00\",\n                   \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"name\": \"Chips & Crisps\",\n                   \"created_at\": \"2019-10-17T07:38:54.801Z\",\n                   \"updated_at\": \"2019-10-17T07:38:54.801Z\",\n                   \"__v\": 0\n               },\n               {\n                   \"_id\": \"5da81aa25a367e70790dfa07\",\n                   \"status\": 1,\n                   \"parent\": \"5da81a395a367e70790dfa00\",\n                   \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"name\": \"Deserts Mixes\",\n                   \"created_at\": \"2019-10-17T07:39:14.233Z\",\n                   \"updated_at\": \"2019-10-17T07:39:14.233Z\",\n                   \"__v\": 0\n               },\n               {\n                   \"_id\": \"5da81a835a367e70790dfa04\",\n                   \"status\": 1,\n                   \"parent\": \"5da81a395a367e70790dfa00\",\n                   \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"name\": \"Gum & Candy\",\n                   \"created_at\": \"2019-10-17T07:38:43.216Z\",\n                   \"updated_at\": \"2019-10-17T07:38:43.216Z\",\n                   \"__v\": 0\n               },\n               {\n                   \"_id\": \"5da81a685a367e70790dfa02\",\n                   \"status\": 1,\n                   \"parent\": \"5da81a395a367e70790dfa00\",\n                   \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"name\": \"Ice Cream\",\n                   \"created_at\": \"2019-10-17T07:38:16.909Z\",\n                   \"updated_at\": \"2019-10-17T07:38:16.909Z\",\n                   \"__v\": 0\n               },\n               {\n                   \"_id\": \"5da81ab75a367e70790dfa09\",\n                   \"status\": 1,\n                   \"parent\": \"5da81a395a367e70790dfa00\",\n                   \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"name\": \"Namkeen\",\n                   \"created_at\": \"2019-10-17T07:39:35.665Z\",\n                   \"updated_at\": \"2019-10-17T07:39:35.665Z\",\n                   \"__v\": 0\n               },\n               {\n                   \"_id\": \"5da81ac15a367e70790dfa0a\",\n                   \"status\": 1,\n                   \"parent\": \"5da81a395a367e70790dfa00\",\n                   \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"name\": \"Noodle & Soup\",\n                   \"created_at\": \"2019-10-17T07:39:45.561Z\",\n                   \"updated_at\": \"2019-10-17T07:39:45.561Z\",\n                   \"__v\": 0\n               },\n               {\n                   \"_id\": \"5da81a995a367e70790dfa06\",\n                   \"status\": 1,\n                   \"parent\": \"5da81a395a367e70790dfa00\",\n                   \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"name\": \"Nuts & Dried Fruits\",\n                   \"created_at\": \"2019-10-17T07:39:05.220Z\",\n                   \"updated_at\": \"2019-10-17T07:39:05.220Z\",\n                   \"__v\": 0\n               },\n               {\n                   \"_id\": \"5da81a5d5a367e70790dfa01\",\n                   \"status\": 1,\n                   \"parent\": \"5da81a395a367e70790dfa00\",\n                   \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"name\": \"Party & Festive Needs\\t\",\n                   \"created_at\": \"2019-10-17T07:38:05.175Z\",\n                   \"updated_at\": \"2019-10-17T07:38:05.175Z\",\n                   \"__v\": 0\n               },\n               {\n                   \"_id\": \"5da81ace5a367e70790dfa0b\",\n                   \"status\": 1,\n                   \"parent\": \"5da81a395a367e70790dfa00\",\n                   \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"name\": \"Pasta & Vermicelli\",\n                   \"created_at\": \"2019-10-17T07:39:58.635Z\",\n                   \"updated_at\": \"2019-10-17T07:39:58.635Z\",\n                   \"__v\": 0\n               }\n           ]\n       },\n       \"paginationVariables\": {\n           \"pageNo\": 1,\n           \"perPage\": 10,\n           \"totalItems\": 1\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNPROCESSABLE_ENTITY",
            "description": "<p>Id is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Id is invalid",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Id is invalid\",\n   \"error\": {\n       \"validation\": {\n           \"category_id\": [\n               \"Id is invalid\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/category.js",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "Get",
    "url": "/api/admin/category",
    "title": "Get Store Categories",
    "name": "Get_Store_Categories",
    "group": "Admin-Category",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "store_id",
            "description": "<p>store_id ID of the store to get categories of.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"code\": 200,\n  \"data\": {\n      \"categories\": [\n          {\n              \"_id\": \"5da81a395a367e70790dfa00\",\n              \"status\": 1,\n             \"parent\": null,\n              \"store_id\": \"5d778327d22f1e78b7671bd2\",\n              \"name\": \"Snacks\",\n              \"picture\": \"breakfast and dairy.jpeg\",\n              \"created_at\": \"2019-10-17T07:37:29.373Z\",\n              \"updated_at\": \"2019-10-17T07:37:29.373Z\",\n              \"__v\": 0,\n              \"subcategories\": [\n                  {\n                      \"_id\": \"5da81a5d5a367e70790dfa01\",\n                      \"status\": 1,\n                      \"parent\": \"5da81a395a367e70790dfa00\",\n                      \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                      \"name\": \"Party & Festive Needs\\t\",\n                      \"created_at\": \"2019-10-17T07:38:05.175Z\",\n                      \"updated_at\": \"2019-10-17T07:38:05.175Z\",\n                      \"__v\": 0\n                  },\n                  {\n                      \"_id\": \"5da81a685a367e70790dfa02\",\n                      \"status\": 1,\n                      \"parent\": \"5da81a395a367e70790dfa00\",\n                      \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                      \"name\": \"Ice Cream\",\n                      \"created_at\": \"2019-10-17T07:38:16.909Z\",\n                      \"updated_at\": \"2019-10-17T07:38:16.909Z\",\n                      \"__v\": 0\n                  },\n                  {\n                      \"_id\": \"5da81a785a367e70790dfa03\",\n                      \"status\": 1,\n                      \"parent\": \"5da81a395a367e70790dfa00\",\n                      \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                      \"name\": \"Biscuits\",\n                      \"created_at\": \"2019-10-17T07:38:32.699Z\",\n                      \"updated_at\": \"2019-10-17T07:38:32.699Z\",\n                      \"__v\": 0\n                  },\n                  {\n                      \"_id\": \"5da81a835a367e70790dfa04\",\n                      \"status\": 1,\n                      \"parent\": \"5da81a395a367e70790dfa00\",\n                      \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                      \"name\": \"Gum & Candy\",\n                      \"created_at\": \"2019-10-17T07:38:43.216Z\",\n                      \"updated_at\": \"2019-10-17T07:38:43.216Z\",\n                      \"__v\": 0\n                  },\n                  {\n                      \"_id\": \"5da81a8e5a367e70790dfa05\",\n                      \"status\": 1,\n                      \"parent\": \"5da81a395a367e70790dfa00\",\n                      \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                      \"name\": \"Chips & Crisps\",\n                      \"created_at\": \"2019-10-17T07:38:54.801Z\",\n                      \"updated_at\": \"2019-10-17T07:38:54.801Z\",\n                      \"__v\": 0\n                  },\n                  {\n                      \"_id\": \"5da81a995a367e70790dfa06\",\n                      \"status\": 1,\n                      \"parent\": \"5da81a395a367e70790dfa00\",\n                      \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                      \"name\": \"Nuts & Dried Fruits\",\n                      \"created_at\": \"2019-10-17T07:39:05.220Z\",\n                      \"updated_at\": \"2019-10-17T07:39:05.220Z\",\n                      \"__v\": 0\n                  },\n                  {\n                      \"_id\": \"5da81aa25a367e70790dfa07\",\n                      \"status\": 1,\n                      \"parent\": \"5da81a395a367e70790dfa00\",\n                      \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                      \"name\": \"Deserts Mixes\",\n                      \"created_at\": \"2019-10-17T07:39:14.233Z\",\n                      \"updated_at\": \"2019-10-17T07:39:14.233Z\",\n                      \"__v\": 0\n                  },\n                  {\n                      \"_id\": \"5da81aaf5a367e70790dfa08\",\n                      \"status\": 1,\n                      \"parent\": \"5da81a395a367e70790dfa00\",\n                      \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                      \"name\": \"Cakes\",\n                      \"created_at\": \"2019-10-17T07:39:27.035Z\",\n                      \"updated_at\": \"2019-10-17T07:39:27.035Z\",\n                      \"__v\": 0\n                  },\n                  {\n                      \"_id\": \"5da81ab75a367e70790dfa09\",\n                      \"status\": 1,\n                      \"parent\": \"5da81a395a367e70790dfa00\",\n                      \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                      \"name\": \"Namkeen\",\n                      \"created_at\": \"2019-10-17T07:39:35.665Z\",\n                      \"updated_at\": \"2019-10-17T07:39:35.665Z\",\n                      \"__v\": 0\n                  },\n                  {\n                      \"_id\": \"5da81ac15a367e70790dfa0a\",\n                      \"status\": 1,\n                      \"parent\": \"5da81a395a367e70790dfa00\",\n                      \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                      \"name\": \"Noodle & Soup\",\n                      \"created_at\": \"2019-10-17T07:39:45.561Z\",\n                      \"updated_at\": \"2019-10-17T07:39:45.561Z\",\n                      \"__v\": 0\n                  },\n                  {\n                      \"_id\": \"5da81ace5a367e70790dfa0b\",\n                      \"status\": 1,\n                      \"parent\": \"5da81a395a367e70790dfa00\",\n                      \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                      \"name\": \"Pasta & Vermicelli\",\n                      \"created_at\": \"2019-10-17T07:39:58.635Z\",\n                      \"updated_at\": \"2019-10-17T07:39:58.635Z\",\n                      \"__v\": 0\n                  }\n              ]\n          },\n          {\n              \"_id\": \"5d77839bd22f1e78b7671bf7\",\n              \"status\": 1,\n              \"parent\": null,\n              \"store_id\": \"5d778327d22f1e78b7671bd2\",\n              \"name\": \"test Category 1\",\n              \"picture\": \"banana shake.jpg\",\n              \"created_at\": \"2019-09-10T11:06:03.670Z\",\n              \"updated_at\": \"2020-01-14T09:54:11.905Z\",\n              \"__v\": 0,\n              \"subcategories\": [\n                  {\n                      \"_id\": \"5e1d8b56401e1a0c41f65e15\",\n                      \"status\": 1,\n                      \"parent\": \"5d77839bd22f1e78b7671bf7\",\n                      \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                      \"name\": \"Ice cream\",\n                      \"created_at\": \"2020-01-14T09:35:18.169Z\",\n                      \"updated_at\": \"2020-01-14T09:35:18.169Z\",\n                      \"__v\": 0\n                  }\n              ]\n          },\n          {\n              \"_id\": \"5d7783d2d22f1e78b7671bf8\",\n              \"status\": 1,\n              \"parent\": null,\n              \"store_id\": \"5d778327d22f1e78b7671bd2\",\n              \"name\": \"test category 2\",\n              \"picture\": \"category1.png\",\n              \"created_at\": \"2019-09-10T11:06:58.799Z\",\n              \"updated_at\": \"2019-09-10T11:06:58.799Z\",\n              \"__v\": 0,\n              \"subcategories\": [\n                  {\n                      \"_id\": \"5d9c49e9d22f1e78b76728b8\",\n                      \"status\": 1,\n                      \"parent\": \"5d7783d2d22f1e78b7671bf8\",\n                      \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                      \"name\": \"SubCategory0006\",\n                      \"created_at\": \"2019-10-08T08:33:45.315Z\",\n                      \"updated_at\": \"2019-10-08T08:33:45.315Z\",\n                      \"__v\": 0\n                  },\n                  {\n                      \"_id\": \"5d9c49f5d22f1e78b76728b9\",\n                      \"status\": 1,\n                      \"parent\": \"5d7783d2d22f1e78b7671bf8\",\n                      \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                      \"name\": \"SubCategory0007\",\n                      \"created_at\": \"2019-10-08T08:33:57.987Z\",\n                      \"updated_at\": \"2019-10-08T08:33:57.987Z\",\n                      \"__v\": 0\n                  }\n              ]\n          },\n          {\n              \"_id\": \"5dbc8e53d01b806bfe171457\",\n              \"status\": 1,\n              \"parent\": null,\n              \"store_id\": \"5d778327d22f1e78b7671bd2\",\n              \"name\": \"test category 3\",\n              \"picture\": \"imagenotavailable.png\",\n              \"created_at\": \"2019-11-01T19:58:11.790Z\",\n              \"updated_at\": \"2019-11-01T19:58:11.790Z\",\n              \"__v\": 0,\n              \"subcategories\": []\n          }\n      ],\n      \"paginationVariables\": {\n          \"pageNo\": 1,\n          \"perPage\": 10,\n          \"totalItems\": 4\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Id is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Id is invalid.",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Id is invalid\",\n   \"error\": {\n       \"validation\": {\n           \"store_id\": [\n               \"Id is invalid\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/category.js",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "get",
    "url": "/api/admin/category/categories",
    "title": "Get Store Categories for Super Admin Management",
    "name": "Get_Store_Categories_for_Super_Admin",
    "group": "Admin-Category",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "store_id",
            "description": "<p>Unique Id of Store</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"categories\": [\n           {\n               \"_id\": \"5d77839bd22f1e78b7671bf7\",\n               \"status\": 1,\n               \"parent\": null,\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"name\": \"test Category 1\",\n               \"picture\": \"banana shake.jpg\",\n               \"created_at\": \"2019-09-10T11:06:03.670Z\",\n               \"updated_at\": \"2020-01-14T09:54:11.905Z\",\n               \"__v\": 0,\n               \"subcategories\": [\n                   {\n                       \"_id\": \"5e1d8b56401e1a0c41f65e15\",\n                       \"status\": 1,\n                       \"parent\": \"5d77839bd22f1e78b7671bf7\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Ice cream\",\n                       \"created_at\": \"2020-01-14T09:35:18.169Z\",\n                       \"updated_at\": \"2020-01-14T09:35:18.169Z\",\n                       \"__v\": 0\n                   }\n               ]\n           },\n           {\n               \"_id\": \"5d7783d2d22f1e78b7671bf8\",\n               \"status\": 1,\n               \"parent\": null,\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"name\": \"test category 2\",\n               \"picture\": \"category1.png\",\n               \"created_at\": \"2019-09-10T11:06:58.799Z\",\n               \"updated_at\": \"2019-09-10T11:06:58.799Z\",\n               \"__v\": 0,\n               \"subcategories\": [\n                   {\n                       \"_id\": \"5d9c49e9d22f1e78b76728b8\",\n                       \"status\": 1,\n                       \"parent\": \"5d7783d2d22f1e78b7671bf8\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"SubCategory0006\",\n                       \"created_at\": \"2019-10-08T08:33:45.315Z\",\n                       \"updated_at\": \"2019-10-08T08:33:45.315Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5d9c49f5d22f1e78b76728b9\",\n                       \"status\": 1,\n                       \"parent\": \"5d7783d2d22f1e78b7671bf8\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"SubCategory0007\",\n                       \"created_at\": \"2019-10-08T08:33:57.987Z\",\n                       \"updated_at\": \"2019-10-08T08:33:57.987Z\",\n                       \"__v\": 0\n                   }\n               ]\n           },\n           {\n               \"_id\": \"5da81a395a367e70790dfa00\",\n               \"status\": 1,\n               \"parent\": null,\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"name\": \"Snacks\",\n               \"picture\": \"breakfast and dairy.jpeg\",\n               \"created_at\": \"2019-10-17T07:37:29.373Z\",\n               \"updated_at\": \"2019-10-17T07:37:29.373Z\",\n               \"__v\": 0,\n               \"subcategories\": [\n                   {\n                       \"_id\": \"5da81a5d5a367e70790dfa01\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Party & Festive Needs\\t\",\n                       \"created_at\": \"2019-10-17T07:38:05.175Z\",\n                       \"updated_at\": \"2019-10-17T07:38:05.175Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81a685a367e70790dfa02\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Ice Cream\",\n                       \"created_at\": \"2019-10-17T07:38:16.909Z\",\n                       \"updated_at\": \"2019-10-17T07:38:16.909Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81a785a367e70790dfa03\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Biscuits\",\n                       \"created_at\": \"2019-10-17T07:38:32.699Z\",\n                       \"updated_at\": \"2019-10-17T07:38:32.699Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81a835a367e70790dfa04\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Gum & Candy\",\n                       \"created_at\": \"2019-10-17T07:38:43.216Z\",\n                       \"updated_at\": \"2019-10-17T07:38:43.216Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81a8e5a367e70790dfa05\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Chips & Crisps\",\n                       \"created_at\": \"2019-10-17T07:38:54.801Z\",\n                       \"updated_at\": \"2019-10-17T07:38:54.801Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81a995a367e70790dfa06\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Nuts & Dried Fruits\",\n                       \"created_at\": \"2019-10-17T07:39:05.220Z\",\n                       \"updated_at\": \"2019-10-17T07:39:05.220Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81aa25a367e70790dfa07\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Deserts Mixes\",\n                       \"created_at\": \"2019-10-17T07:39:14.233Z\",\n                       \"updated_at\": \"2019-10-17T07:39:14.233Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81aaf5a367e70790dfa08\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Cakes\",\n                       \"created_at\": \"2019-10-17T07:39:27.035Z\",\n                       \"updated_at\": \"2019-10-17T07:39:27.035Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81ab75a367e70790dfa09\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Namkeen\",\n                       \"created_at\": \"2019-10-17T07:39:35.665Z\",\n                       \"updated_at\": \"2019-10-17T07:39:35.665Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81ac15a367e70790dfa0a\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Noodle & Soup\",\n                       \"created_at\": \"2019-10-17T07:39:45.561Z\",\n                       \"updated_at\": \"2019-10-17T07:39:45.561Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81ace5a367e70790dfa0b\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Pasta & Vermicelli\",\n                       \"created_at\": \"2019-10-17T07:39:58.635Z\",\n                       \"updated_at\": \"2019-10-17T07:39:58.635Z\",\n                       \"__v\": 0\n                   }\n               ]\n           },\n           {\n               \"_id\": \"5dbc8e53d01b806bfe171457\",\n               \"status\": 1,\n               \"parent\": null,\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"name\": \"test category 3\",\n               \"picture\": \"imagenotavailable.png\",\n               \"created_at\": \"2019-11-01T19:58:11.790Z\",\n               \"updated_at\": \"2019-11-01T19:58:11.790Z\",\n               \"__v\": 0,\n               \"subcategories\": []\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNPROCESSABLE_ENTITY",
            "description": "<p>Id is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Id is invalid",
          "content": "\n{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Id is invalid\",\n   \"error\": {\n       \"validation\": {\n           \"store_id\": [\n               \"Id is invalid\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/category.js",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "put",
    "url": "/api/admin/category:id",
    "title": "Update Category",
    "name": "Update_Category",
    "group": "Admin-Category",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Category.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "store_id",
            "description": "<p>Id of the Store.</p>"
          },
          {
            "group": "Parameter",
            "type": "[File]",
            "optional": false,
            "field": "picture",
            "description": "<p>Array of pictures of products.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response :",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"category\": {\n           \"status\": 1,\n           \"parent\": null,\n           \"_id\": \"5d89bdead22f1e78b7672593\",\n           \"store_id\": \"5d7607c59b5f0f76ee4f68b0\",\n           \"name\": \"Test Category2\",\n           \"picture\":\"Screenshot_2020-02-04 Shuffle \u0013 A Number For Every Occasion\\\".png\",\n           \"created_at\": \"2019-09-24T06:55:38.852Z\",\n           \"updated_at\": \"2020-03-18T10:14:50.073Z\",\n           \"__v\": 0\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Validation",
            "description": "<p>Error Status is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Status is a required field\",\n   \"error\": {\n       \"validation\": {\n           \"owner_details\": [\n               \"Status is a required field\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/category.js",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "POST",
    "url": "/api/admin/city",
    "title": "",
    "name": "Add_a_City_List",
    "group": "Admin-City",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Added City</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the City</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "Http/1.1 200 OK\n\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"city\": {\n           \"areas\": [],\n           \"status\": 1,\n           \"_id\": \"5e73176551e5fd30231ef987\",\n           \"name\": \"Test City\",\n           \"created_at\": \"2020-03-19T06:55:33.433Z\",\n           \"updated_at\": \"2020-03-19T06:55:33.433Z\",\n           \"__v\": 0\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422",
            "description": "<p>Name is a required field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Name is a required field.\",\n   \"error\": {\n       \"validation\": {\n           \"city_details\": [\n               \"Name is a required field.\"\n           ]\n       }\n   }\n}",
          "type": "json"
        },
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Name is a required field.\",\n   \"error\": {\n       \"validation\": {\n           \"city_details\": [\n               \"Name is a required field.\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/city.js",
    "groupTitle": "Admin-City"
  },
  {
    "type": "Delete",
    "url": "api/admin/city/:id",
    "title": "",
    "name": "Delete_a_City",
    "group": "Admin-City",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "Http/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNPROCESSABLE_ENTITY",
            "description": "<p>City Id is Invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"City Id is Invalid\",\n   \"error\": {\n       \"validation\": {\n           \"city_id\": [\n               \"City Id is Invalid\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/city.js",
    "groupTitle": "Admin-City"
  },
  {
    "type": "Put",
    "url": "/api/admin/city/:id",
    "title": "",
    "name": "Update_a_City",
    "group": "Admin-City",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the City</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the City</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "Http/1.1 200 OK\n\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"city\": {\n           \"areas\": [],\n           \"status\": 1,\n           \"_id\": \"5e73184b03278532e166a493\",\n           \"name\": \"Test City\",\n           \"created_at\": \"2020-03-19T06:59:23.381Z\",\n           \"updated_at\": \"2020-03-19T06:59:23.381Z\",\n           \"__v\": 0\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422",
            "description": "<p>Name is a required field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Name is a required field.\",\n   \"error\": {\n       \"validation\": {\n           \"city_details\": [\n               \"Name is a required field.\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/city.js",
    "groupTitle": "Admin-City"
  },
  {
    "type": "Get",
    "url": "/api/admin/file-exists",
    "title": "Check if File Exists or not",
    "name": "Check_if_File_Exists_or_not",
    "group": "Admin-Common",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the file which we have to check</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "Http/1.1 200 OK\n{\n   \"success\": true\n}",
          "type": "json"
        },
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/common.js",
    "groupTitle": "Admin-Common"
  },
  {
    "type": "POST",
    "url": "/api/store/dashboard",
    "title": "Dashboard Data",
    "name": "Dashboard_Data",
    "group": "Admin-Common",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "from_date",
            "description": "<p>Date from data should be displayed</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "to_date",
            "description": "<p>Date till data should be displayed</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "Http/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"total_orders\": 182,\n       \"total_customers\": 90,\n       \"total_stores\": 13,\n       \"total_sale\": 174443.51,\n       \"graph_sale_data\": [],\n       \"graph_order_date\": []\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>To Date is a Required Field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"To Date is a Required Field\",\n   \"error\": {\n       \"validation\": {\n           \"from_date\": [\n               \"To Date is a Required Field\"\n           ]\n       }\n   }\n}",
          "type": "json"
        },
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"From Date is a Required Field\",\n   \"error\": {\n       \"validation\": {\n           \"from_date\": [\n               \"From Date is a Required Field\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/common.js",
    "groupTitle": "Admin-Common"
  },
  {
    "type": "Get",
    "url": "/api/admin/manual-slots",
    "title": "Manual Slots",
    "name": "Manual_Slots",
    "group": "Admin-Common",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "Http/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"message\": \"Slot updated Successfully.\"\n   }\n}",
          "type": "json"
        },
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/common.js",
    "groupTitle": "Admin-Common"
  },
  {
    "type": "Get",
    "url": "/api/admin/slot-scheduler",
    "title": "Slot Scheduler",
    "name": "Slot-Scheduler",
    "group": "Admin-Common",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "Http/1.1 200 OK\n\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"message\": \"Scheduler Run\"\n   }\n}",
          "type": "json"
        },
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/common.js",
    "groupTitle": "Admin-Common"
  },
  {
    "type": "Get",
    "url": "/api/admin/config",
    "title": "Get Config",
    "name": "Get_Config",
    "group": "Admin-Config",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"taxes\": []\n   }\n}",
          "type": "json"
        },
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/config.js",
    "groupTitle": "Admin-Config"
  },
  {
    "type": "POST",
    "url": "/api/admin/coupon",
    "title": "Add a Coupon",
    "name": "Add_a_Coupon",
    "group": "Admin-Coupon",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "store",
            "description": "<p>with fields &quot;_id&quot; Id of the Store &quot;name&quot; Name of the Store.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Coupon Type</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Coupon Code</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Coupon Value</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Coupon Start date</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Coupon End Date</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Coupon Status</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "min_order_amount",
            "description": "<p>Coupon Minimum Order Amount</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "usage",
            "description": "<p>Coupon Usage</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"coupon\": {\n           \"usage\": 1,\n           \"status\": 1,\n           \"_id\": \"5e7356c82aabe529abfca61b\",\n           \"store\": {\n               \"_id\": \"5e71fa41397c6558cd4813b4\",\n               \"name\": \"Test Store\"\n           },\n           \"type\": 1,\n           \"code\": \"COUPON500\",\n           \"value\": 50,\n           \"start_date\": \"2020-03-18T18:30:00.000Z\",\n           \"end_date\": \"2020-03-31T18:29:59.999Z\",\n           \"min_order_amount\": 500,\n           \"created_at\": \"2020-03-19T11:26:00.447Z\",\n           \"updated_at\": \"2020-03-19T11:26:00.447Z\",\n           \"__v\": 0\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CONFLICT",
            "description": "<p>Coupon already exists.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 409,\n       \"name\": \"CONFLICT\",\n       \"description\": \"The resource you are requesting already exists.\"\n   },\n   \"singleStringMessage\": \"Coupon already exists.\",\n   \"error\": {\n       \"code\": [\n           \"Coupon already exists.\"\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/coupon.js",
    "groupTitle": "Admin-Coupon"
  },
  {
    "type": "Delete",
    "url": "/api/admin/coupon:id",
    "title": "Delete Coupon",
    "name": "Delete_a_Coupon",
    "group": "Admin-Coupon",
    "success": {
      "examples": [
        {
          "title": "success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"coupon\": {\n           \"n\": 1,\n           \"opTime\": {\n               \"ts\": \"6805899146831069185\",\n               \"t\": 67\n           },\n           \"electionId\": \"7fffffff0000000000000043\",\n           \"ok\": 1,\n           \"$clusterTime\": {\n               \"clusterTime\": \"6805899146831069185\",\n               \"signature\": {\n                   \"hash\": \"cp3HqDvVtLUqmAh/G33Bs1XJoJw=\",\n                   \"keyId\": \"6753601258507993089\"\n               }\n           },\n           \"operationTime\": \"6805899146831069185\",\n           \"deletedCount\": 1\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNPROCESSABLE_ENTITY",
            "description": "<p>Id is Invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Id is invalid\",\n   \"error\": {\n       \"validation\": {\n           \"coupon_id\": [\n               \"Id is invalid\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/coupon.js",
    "groupTitle": "Admin-Coupon"
  },
  {
    "type": "Get",
    "url": "/api/admin/coupon",
    "title": "Get Coupon List",
    "name": "Get_Coupon_List",
    "group": "Admin-Coupon",
    "parameter": {
      "fields": {
        "Query Params) {String} (Optional": [
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "pageNo",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "perPage:",
            "description": "<p>Items to be displayed per Page.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "search:",
            "description": "<p>Coupon to be searched.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "sortType",
            "description": "<p>To be Sorted.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"coupon\": [\n           {\n               \"store\": {\n                   \"_id\": \"5e05d5ff954bc84f45786dd6\",\n                   \"name\": \"KNN General Store\"\n               },\n               \"usage\": 50,\n               \"status\": 1,\n               \"_id\": \"5e47d81ed21fe166d8c9375b\",\n               \"type\": 1,\n               \"code\": \"WELCOME100\",\n               \"value\": 100,\n               \"start_date\": \"2020-02-14T19:00:00.000Z\",\n               \"end_date\": \"2020-02-22T18:59:59.999Z\",\n               \"min_order_amount\": 500,\n               \"created_at\": \"2020-02-15T11:38:06.552Z\",\n               \"updated_at\": \"2020-02-15T11:38:06.552Z\",\n               \"__v\": 0\n           },\n           {\n               \"store\": {\n                   \"_id\": \"5d9eda647a30b1642ce9cb77\",\n                   \"name\": \"Saveway Super Store\"\n               },\n               \"usage\": 50,\n               \"status\": 1,\n               \"_id\": \"5debbd2568a40316a20bfb03\",\n               \"type\": 1,\n               \"code\": \"WELCOME100\",\n               \"value\": 100,\n               \"start_date\": \"2019-12-06T19:00:00.000Z\",\n               \"end_date\": \"2019-12-31T18:59:59.999Z\",\n               \"min_order_amount\": 1000,\n               \"created_at\": \"2019-12-07T14:54:29.821Z\",\n               \"updated_at\": \"2019-12-18T05:27:56.762Z\",\n               \"__v\": 0\n           },\n           {\n               \"store\": {\n                   \"_id\": \"5d7607c59b5f0f76ee4f68b0\",\n                   \"name\": \"METRO\"\n               },\n               \"usage\": 9,\n               \"status\": 1,\n               \"_id\": \"5e6b35536c789d243501e0b5\",\n               \"type\": 1,\n               \"code\": \"COUPONCODE\",\n               \"value\": 100,\n               \"start_date\": \"2020-03-12T18:30:00.000Z\",\n               \"end_date\": \"2020-04-12T18:29:59.999Z\",\n               \"min_order_amount\": 100,\n               \"created_at\": \"2020-03-13T07:25:07.968Z\",\n               \"updated_at\": \"2020-03-13T07:28:49.233Z\",\n               \"__v\": 0\n           }\n       ],\n       \"paginationVariables\": {\n           \"pageNo\": 1,\n           \"perPage\": 10,\n           \"totalItems\": 3\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>401</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/coupon.js",
    "groupTitle": "Admin-Coupon"
  },
  {
    "type": "Post",
    "url": "/api/admin/driver",
    "title": "Update a Coupon",
    "name": "Update_a_Coupon",
    "group": "Admin-Coupon",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "store",
            "description": "<p>An Object with field &quot;id&quot; Unique id of a Store &quot;name&quot; Name of the Store</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"coupon\": {\n           \"store\": {\n               \"_id\": \"5e71fa41397c6558cd4813b4\",\n               \"name\": \"Test Store\"\n           },\n           \"usage\": 1,\n           \"status\": 1,\n           \"_id\": \"5e734e76d84ff72540a87a79\",\n           \"type\": 1,\n           \"code\": \"COUPON50\",\n           \"value\": 100,\n           \"start_date\": \"2020-03-18T18:30:00.000Z\",\n           \"end_date\": \"2020-03-31T18:29:59.999Z\",\n           \"min_order_amount\": 1000,\n           \"created_at\": \"2020-03-19T10:50:30.312Z\",\n           \"updated_at\": \"2020-03-19T11:56:12.862Z\",\n           \"__v\": 0\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Minimum",
            "description": "<p>Order Amount is Required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "<!DOCTYPE html>",
          "content": "\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\">\n\t<title>Error</title>\n</head>\n\n<body>\n\t<pre>SyntaxError: Unexpected token } in JSON at position 316<br> &nbsp; &nbsp;at JSON.parse (&lt;anonymous&gt;)<br> &nbsp; &nbsp;at parse (/home/enuke/Desktop/Projects/Aapkidokan/Backend_APIS/node_modules/body-parser/lib/types/json.js:89:19)<br> &nbsp; &nbsp;at /home/enuke/Desktop/Projects/Aapkidokan/Backend_APIS/node_modules/body-parser/lib/read.js:121:18<br> &nbsp; &nbsp;at invokeCallback (/home/enuke/Desktop/Projects/Aapkidokan/Backend_APIS/node_modules/raw-body/index.js:224:16)<br> &nbsp; &nbsp;at done (/home/enuke/Desktop/Projects/Aapkidokan/Backend_APIS/node_modules/raw-body/index.js:213:7)<br> &nbsp; &nbsp;at IncomingMessage.onEnd (/home/enuke/Desktop/Projects/Aapkidokan/Backend_APIS/node_modules/raw-body/index.js:273:7)<br> &nbsp; &nbsp;at IncomingMessage.emit (events.js:333:22)<br> &nbsp; &nbsp;at IncomingMessage.EventEmitter.emit (domain.js:485:12)<br> &nbsp; &nbsp;at endReadableNT (_stream_readable.js:1220:12)<br> &nbsp; &nbsp;at processTicksAndRejections (internal/process/task_queues.js:84:21)</pre>\n</body>\n\n</html>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/coupon.js",
    "groupTitle": "Admin-Coupon"
  },
  {
    "type": "Get",
    "url": "/api/admin/customer",
    "title": "Add a Customer.",
    "name": "Add_a_Customer",
    "group": "Admin-Customer",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "full_name",
            "description": "<p>Full Name of the Customer</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>EmailId of the Customer</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>Contact Number of the Customer</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"customer\": {\n           \"picture\": null,\n           \"gmail_id\": null,\n           \"facebook_id\": null,\n           \"is_logout\": false,\n           \"status\": 1,\n           \"_id\": \"5e749890e8d0225d1a745dc9\",\n           \"email\": \"vbgmail.com\",\n           \"contact_number\": \"7474512451\",\n           \"full_name\": \"Khushal\",\n           \"address\": [],\n           \"created_at\": \"2020-03-20T10:18:56.445Z\",\n           \"updated_at\": \"2020-03-20T10:18:56.445Z\",\n           \"__v\": 0\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Email",
            "description": "<p>address already exists</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Email address already exists.\",\n   \"error\": {\n       \"validation\": {\n           \"email\": [\n               \"Email address already exists.\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/customer.js",
    "groupTitle": "Admin-Customer"
  },
  {
    "type": "Post",
    "url": "/api/admin/customer/address",
    "title": "Add an address",
    "name": "Add_an_address",
    "group": "Admin-Customer",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "alias:",
            "description": "<p>Alias Address</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "city_id:",
            "description": "<p>Unique id of the City</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "full_name:",
            "description": "<p>Full Name of the address</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "contact_number:",
            "description": "<p>Contact Number</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "house_no:",
            "description": "<p>House Number</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "coordinates:",
            "description": "<p>Coordinates of the Address</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "gps_address:",
            "description": "<p>GPS Address</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email:",
            "description": "<p>emailId of the address</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "locality:",
            "description": "<p>Locality</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"address\": [\n           {\n               \"_id\": \"5e74acd225e3026eeac5f1d9\",\n               \"alias\": \"home\",\n               \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n               \"full_name\": \"Test Address\",\n               \"contact_number\": \"9878854125\",\n               \"house_no\": \"112\",\n               \"coordinates\": {\n                   \"latitude\": 24.8607,\n                   \"longitude\": 67.0011\n               },\n               \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n               \"email\": \"siju.samson@enukesoftware.com\",\n               \"locality\": \"aa\",\n               \"city\": {\n                   \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                   \"areas\": [\n                       \"5d7605099b5f0f76ee4f68ae\",\n                       \"5d7605219b5f0f76ee4f68af\",\n                       \"5dea5254d85c19035ebf1217\",\n                       \"5dea52b5d85c19035ebf1218\",\n                       \"5dea52bfd85c19035ebf1219\",\n                       \"5dea52d0d85c19035ebf121a\",\n                       \"5dea52e0d85c19035ebf121b\",\n                       \"5dea52eed85c19035ebf121c\",\n                       \"5df635134648a37afa44d108\",\n                       \"5e05acca954bc84f45786dd2\",\n                       \"5e05acf1954bc84f45786dd3\",\n                       \"5e05acfb954bc84f45786dd4\",\n                       \"5e05ad5e954bc84f45786dd5\",\n                       \"5e262d10d21fe166d8c93049\",\n                       \"5e262d43d21fe166d8c9304a\",\n                       \"5e2ac47dd21fe166d8c930b3\",\n                       \"5e469966d21fe166d8c9356f\"\n                   ],\n                   \"status\": 1,\n                   \"name\": \"Karachi\",\n                   \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                   \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                   \"__v\": 0\n               }\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "City",
            "description": "<p>Id is a required field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"City Id is a required field\",\n   \"error\": {\n       \"validation\": {\n           \"city_id\": [\n               \"City Id is a required field\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/customer.js",
    "groupTitle": "Admin-Customer"
  },
  {
    "type": "Post",
    "url": "/api/admin/customer/check",
    "title": "Check if a Customer Exists",
    "name": "Check_if_Customer_Exists",
    "group": "Admin-Customer",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "emailOrContactNumber",
            "description": "<p>Email or Contact Number whose existence has to be checked</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"customer\": {\n           \"picture\": \"https://lh3.googleusercontent.com/a-/AOh14Gieu49oiaQdfOFRlkQT8sarTglujEYHmYyk8OAq=s96-c\",\n           \"gmail_id\": \"112459883666387708857\",\n           \"facebook_id\": null,\n           \"is_logout\": false,\n           \"status\": 1,\n           \"_id\": \"5e54f2958d75b6697f983ed2\",\n           \"email\": \"rohit.kumar@enukesoftware.com\",\n           \"full_name\": \"Rohit Kumar\",\n           \"address\": [\n               {\n                   \"coordinates\": {\n                       \"latitude\": 24.8607,\n                       \"longitude\": 67.0011\n                   },\n                   \"_id\": \"5e54fc05c995596ce45aa44f\",\n                   \"alias\": \"home\",\n                   \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                   \"full_name\": \"afd\",\n                   \"email\": \"dfsds@gfg.fgd\",\n                   \"contact_number\": \"1234567890\",\n                   \"house_no\": \"dfd-7\",\n                   \"locality\": \"fsdfd fgngf\",\n                   \"landmark\": \"fdf gnf\",\n                   \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                   \"what_3_words\": \"dsfdf\"\n               }\n           ],\n           \"created_at\": \"2020-02-25T10:10:29.193Z\",\n           \"updated_at\": \"2020-03-19T12:04:04.192Z\",\n           \"__v\": 0\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Internal",
            "description": "<p>Server Error emailOrContactNumber is Required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Email or contact number is not registered with Us\",\n   \"error\": {\n       \"validation\": {\n           \"contact_number\": [\n               \"Email or contact number is not registered with Us\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/customer.js",
    "groupTitle": "Admin-Customer"
  },
  {
    "type": "Put",
    "url": "/api/admin/customer/address/:id",
    "title": "Delete an address",
    "name": "Delete_an_address",
    "group": "Admin-Customer",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"customer\": {\n           \"picture\": \"https://lh3.googleusercontent.com/a-/AOh14Gieu49oiaQdfOFRlkQT8sarTglujEYHmYyk8OAq=s96-c\",\n           \"gmail_id\": \"112459883666387708857\",\n           \"facebook_id\": null,\n           \"is_logout\": false,\n           \"status\": 1,\n           \"_id\": \"5e54f2958d75b6697f983ed2\",\n           \"email\": \"rohit.kumar@enukesoftware.com\",\n           \"full_name\": \"Rohit Kumar\",\n           \"address\": [\n               {\n                   \"coordinates\": {\n                       \"latitude\": 24.8607,\n                       \"longitude\": 67.0011\n                   },\n                   \"_id\": \"5e7861ebe002aa193df88934\",\n                   \"alias\": \"home\",\n                   \"city_id\": \"5e731565f982bf2f87623efc\",\n                   \"full_name\": \"Work\",\n                   \"email\": \"rohit@gmail.com\",\n                   \"contact_number\": \"7102102145\",\n                   \"house_no\": \"123\",\n                   \"locality\": \"fsdfd fgngf\",\n                   \"landmark\": \"fdf gnf\",\n                   \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\"\n               }\n           ],\n           \"created_at\": \"2020-02-25T10:10:29.193Z\",\n           \"updated_at\": \"2020-03-23T07:16:06.062Z\",\n           \"__v\": 0\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Not",
            "description": "<p>Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "not found",
          "content": "not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/customer.js",
    "groupTitle": "Admin-Customer"
  },
  {
    "type": "Get",
    "url": "/api/admin/customer/edit",
    "title": "Edit a Customer",
    "name": "Edit_a_Customer",
    "group": "Admin-Customer",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Id of the Customer</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Customer</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>EmailId of the Customer</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>Contact Number of the Customer</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "full_name",
            "description": "<p>Full Name of the Customer</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the Customer</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"customer\": {\n           \"picture\": null,\n           \"gmail_id\": null,\n           \"facebook_id\": null,\n           \"is_logout\": false,\n           \"status\": 1,\n           \"_id\": \"5e749890e8d0225d1a745dc9\",\n           \"email\": \"vb@gmail.com\",\n           \"contact_number\": \"7474512451\",\n           \"full_name\": \"Khushal\",\n           \"address\": [],\n           \"created_at\": \"2020-03-20T10:18:56.445Z\",\n           \"updated_at\": \"2020-03-20T10:35:29.249Z\",\n           \"__v\": 0\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/customer.js",
    "groupTitle": "Admin-Customer"
  },
  {
    "type": "Put",
    "url": "/api/admin/customer/address/:id",
    "title": "Edit an address",
    "name": "Edit_an_address",
    "group": "Admin-Customer",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique Id of a String</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "alias",
            "description": "<p>Alias Name of the Address</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>Unique City Id</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "full_name",
            "description": "<p>Full Name of the Address</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>Contact Number</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "house_no",
            "description": "<p>House Number</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "locality",
            "description": "<p>Locality</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "landmark",
            "description": "<p>Landmark of your address</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "gps_address",
            "description": "<p>GPS Address</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "what_3_words",
            "description": "<p>What 3 words</p>"
          },
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "city",
            "description": "<p>An Object with fields &quot;_id&quot; (Unique Id of the String), &quot;areas&quot; (Array of areas), &quot;status&quot;(Status of the City), &quot;name&quot; (Name of the City)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"customer\": {\n           \"picture\": \"https://lh3.googleusercontent.com/a-/AOh14Gieu49oiaQdfOFRlkQT8sarTglujEYHmYyk8OAq=s96-c\",\n           \"gmail_id\": \"112459883666387708857\",\n           \"facebook_id\": null,\n           \"is_logout\": false,\n           \"status\": 1,\n           \"_id\": \"5e54f2958d75b6697f983ed2\",\n           \"email\": \"rohit.kumar@enukesoftware.com\",\n           \"full_name\": \"Rohit Kumar\",\n           \"address\": [\n               {\n                   \"_id\": \"5e54fc05c995596ce45aa44f\",\n                   \"alias\": \"home\",\n                   \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                   \"full_name\": \"afd1\",\n                   \"email\": \"dfsds@gfg.fgd\",\n                   \"contact_number\": \"1234567890\",\n                   \"house_no\": \"dfd-7\",\n                   \"locality\": \"fsdfd fgngf\",\n                   \"landmark\": \"fdf gnf\",\n                   \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                   \"what_3_words\": \"dsfdf\"\n               }\n           ],\n           \"created_at\": \"2020-02-25T10:10:29.193Z\",\n           \"updated_at\": \"2020-03-23T06:06:55.118Z\",\n           \"__v\": 0\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Email",
            "description": "<p>Id is a required field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "\n{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Email address is a required field.\",\n   \"error\": {\n       \"validation\": {\n           \"email\": [\n               \"Email address is a required field.\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/customer.js",
    "groupTitle": "Admin-Customer"
  },
  {
    "type": "Get",
    "url": "api/admin/customer/address",
    "title": "Get Address of a User",
    "name": "Get_Address_of_a_User",
    "group": "Admin-Customer",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>User Id of Customer</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"address\": [\n           {\n               \"_id\": \"5e54fc05c995596ce45aa44f\",\n               \"alias\": \"home\",\n               \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n               \"full_name\": \"afd\",\n               \"email\": \"dfsds@gfg.fgd\",\n               \"contact_number\": \"1234567890\",\n               \"house_no\": \"dfd-7\",\n               \"locality\": \"fsdfd fgngf\",\n               \"landmark\": \"fdf gnf\",\n               \"coordinates\": {\n                   \"latitude\": 24.8607,\n                   \"longitude\": 67.0011\n               },\n               \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n               \"what_3_words\": \"dsfdf\",\n               \"city\": {\n                   \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                   \"areas\": [\n                       \"5d7605099b5f0f76ee4f68ae\",\n                       \"5d7605219b5f0f76ee4f68af\",\n                       \"5dea5254d85c19035ebf1217\",\n                       \"5dea52b5d85c19035ebf1218\",\n                       \"5dea52bfd85c19035ebf1219\",\n                       \"5dea52d0d85c19035ebf121a\",\n                       \"5dea52e0d85c19035ebf121b\",\n                       \"5dea52eed85c19035ebf121c\",\n                       \"5df635134648a37afa44d108\",\n                       \"5e05acca954bc84f45786dd2\",\n                       \"5e05acf1954bc84f45786dd3\",\n                       \"5e05acfb954bc84f45786dd4\",\n                       \"5e05ad5e954bc84f45786dd5\",\n                       \"5e262d10d21fe166d8c93049\",\n                       \"5e262d43d21fe166d8c9304a\",\n                       \"5e2ac47dd21fe166d8c930b3\",\n                       \"5e469966d21fe166d8c9356f\"\n                   ],\n                   \"status\": 1,\n                   \"name\": \"Karachi\",\n                   \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                   \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                   \"__v\": 0\n               }\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Id is a required field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"User Id is a required field\",\n   \"error\": {\n       \"validation\": {\n           \"user_id\": [\n               \"User Id is a required field\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/customer.js",
    "groupTitle": "Admin-Customer"
  },
  {
    "type": "Get",
    "url": "/api/admin/customer",
    "title": "Get All Customers.",
    "name": "Get_All_Customers",
    "group": "Admin-Customer",
    "parameter": {
      "fields": {
        "Query Params) {String} (Optional": [
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "pageNo",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "perPage",
            "description": "<p>Items to be displayed per Page.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "search",
            "description": "<p>Store to be searched.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "sortType",
            "description": "<p>To be Sorted.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"customers\": [\n           {\n               \"picture\": null,\n               \"gmail_id\": null,\n               \"facebook_id\": null,\n               \"is_logout\": false,\n               \"status\": 3,\n               \"_id\": \"5e04b308954bc84f45786dbb\",\n               \"email\": \"hilebec452@topmail.ws\",\n               \"full_name\": \"Checking\",\n               \"contact_number\": \"03121122112\",\n               \"password\": \"$2b$10$nyRHAX6I5DNfpwbV.HWjHO5gK3WOrLmYUeHE7EtpL/.YpwQrfrJfy\",\n               \"verification_token\": \"d750d375-6e52-4476-b784-7a5e9def8d64\",\n               \"address\": [],\n               \"created_at\": \"2019-12-26T13:18:00.945Z\",\n               \"updated_at\": \"2019-12-26T13:18:15.936Z\",\n               \"__v\": 0,\n               \"otp\": 473665,\n               \"otp_created\": \"2019-12-26T13:18:00.954Z\"\n           },\n           {\n               \"picture\": null,\n               \"gmail_id\": null,\n               \"facebook_id\": null,\n               \"is_logout\": false,\n               \"status\": 3,\n               \"_id\": \"5e2f3638d21fe166d8c9320a\",\n               \"email\": \"arhamshahid2010@icloud.com\",\n               \"password\": \"$2b$10$iNsPbE.krgsPrSVBY3Gi6.RSax1Vuw377Ga32FGZ/1HaSLjUyrIYm\",\n               \"full_name\": \"arham\",\n               \"contact_number\": \"03003645020\",\n               \"verification_token\": \"2948f4e0-7d09-46e3-860f-2b256234a0fe\",\n               \"address\": [],\n               \"created_at\": \"2020-01-27T19:12:56.434Z\",\n               \"updated_at\": \"2020-01-27T19:13:21.928Z\",\n               \"__v\": 0,\n               \"otp\": 674903,\n               \"otp_created\": \"2020-01-27T19:12:56.449Z\"\n           },\n           {\n               \"picture\": null,\n               \"gmail_id\": null,\n               \"facebook_id\": null,\n               \"is_logout\": false,\n               \"status\": 3,\n               \"_id\": \"5e3077b7d21fe166d8c93216\",\n               \"full_name\": \"Rushna Sajid\",\n               \"email\": \"sajid.rush@gmail.com\",\n               \"contact_number\": \"03123643212\",\n               \"password\": \"$2b$10$C0gjT1pLm7roxH6NB.ZP.O4rj/TrV/trq/8SizKy7uAfLpBrkJudu\",\n               \"verification_token\": \"a5341b04-a4d0-4c1b-a777-4a7a6dffbd78\",\n               \"address\": [],\n               \"created_at\": \"2020-01-28T18:04:39.794Z\",\n               \"updated_at\": \"2020-01-28T18:05:25.121Z\",\n               \"__v\": 0,\n               \"otp\": 130821,\n               \"otp_created\": \"2020-01-28T18:04:39.804Z\"\n           },\n           {\n               \"picture\": null,\n               \"gmail_id\": null,\n               \"facebook_id\": null,\n               \"is_logout\": false,\n               \"status\": 3,\n               \"_id\": \"5e307a32d21fe166d8c93217\",\n               \"full_name\": \"Adil Khan\",\n               \"email\": \"adilk6866@gmail.com\",\n               \"contact_number\": \"03032431170\",\n               \"password\": \"$2b$10$VxLNcsFTTC5lVQw4rUWg9../nFsIwlUeC6K8ehffOrncjGBvm5/.G\",\n               \"verification_token\": \"4f34a988-f15d-442a-9a6f-5632fd80aa0a\",\n               \"address\": [],\n               \"created_at\": \"2020-01-28T18:15:14.155Z\",\n               \"updated_at\": \"2020-01-28T18:17:42.417Z\",\n               \"__v\": 0,\n               \"otp\": 836870,\n               \"otp_created\": \"2020-01-28T18:15:14.174Z\"\n           },\n           {\n               \"picture\": null,\n               \"gmail_id\": null,\n               \"facebook_id\": null,\n               \"is_logout\": false,\n               \"status\": 3,\n               \"_id\": \"5e313b0cd21fe166d8c93243\",\n               \"full_name\": \"Naseera haneef\",\n               \"email\": \"psz.opportunity19@yahoo.com\",\n               \"contact_number\": \"03360893070\",\n               \"password\": \"$2b$10$UJ3SmHGf/9XJ7tJO2vX9DupMnvI4OszkIRMTd5Tabg84PNFyiiUUW\",\n               \"verification_token\": \"2d9357a5-1090-4308-a527-d5459991289d\",\n               \"address\": [],\n               \"created_at\": \"2020-01-29T07:58:04.142Z\",\n               \"updated_at\": \"2020-01-29T07:59:47.632Z\",\n               \"__v\": 0,\n               \"otp\": 982170,\n               \"otp_created\": \"2020-01-29T07:58:04.158Z\"\n           },\n           {\n               \"picture\": null,\n               \"gmail_id\": null,\n               \"facebook_id\": null,\n               \"is_logout\": false,\n               \"status\": 3,\n               \"_id\": \"5e32503fd21fe166d8c93274\",\n               \"full_name\": \"Deepak Kumar\",\n               \"email\": \"rathideepak8680@gmail.com\",\n               \"contact_number\": \"03327359077\",\n               \"password\": \"$2b$10$OayfKj8Z/VSo5.f96urPt.48COQJSdAo8Kckc.xa.xcYMIrJ5htEy\",\n               \"verification_token\": \"b69141cc-b0f7-4773-8f43-ad1478c7453e\",\n               \"address\": [],\n               \"created_at\": \"2020-01-30T03:40:47.605Z\",\n               \"updated_at\": \"2020-01-30T03:41:49.086Z\",\n               \"__v\": 0,\n               \"otp\": 627393,\n               \"otp_created\": \"2020-01-30T03:40:47.617Z\"\n           },\n           {\n               \"picture\": null,\n               \"gmail_id\": null,\n               \"facebook_id\": null,\n               \"is_logout\": false,\n               \"status\": 3,\n               \"_id\": \"5e35dd3dd21fe166d8c9330c\",\n               \"full_name\": \"Govind\",\n               \"email\": \"govindkumarrathi77@gmail.com\",\n               \"contact_number\": \"03212081374\",\n               \"password\": \"$2b$10$TL3RksbrywvEpACEegxPkOTplq8fF17RkgrLZGU6cBaYMtW/HwfE.\",\n               \"verification_token\": \"03d9d327-7d6e-4ea6-8211-6454e8ef690b\",\n               \"address\": [],\n               \"created_at\": \"2020-02-01T20:19:09.094Z\",\n               \"updated_at\": \"2020-02-01T20:19:37.693Z\",\n               \"__v\": 0,\n               \"otp\": 871186,\n               \"otp_created\": \"2020-02-01T20:19:09.109Z\"\n           },\n           {\n               \"picture\": null,\n               \"gmail_id\": null,\n               \"facebook_id\": null,\n               \"is_logout\": false,\n               \"status\": 3,\n               \"_id\": \"5e35e27ad21fe166d8c9330d\",\n               \"full_name\": \"Arif Ansari\",\n               \"email\": \"arifansari202a@gmail.com\",\n               \"contact_number\": \"03452287744\",\n               \"password\": \"$2b$10$33qqCplLb4LIEakH0o5op.6D3irGb/QzHbtloTUvxTJB.kBimXMAu\",\n               \"verification_token\": \"8678f4af-5d62-4ccc-aa40-09b2d4700535\",\n               \"address\": [],\n               \"created_at\": \"2020-02-01T20:41:30.730Z\",\n               \"updated_at\": \"2020-02-01T20:42:46.860Z\",\n               \"__v\": 0,\n               \"otp\": 574646,\n               \"otp_created\": \"2020-02-01T20:41:30.747Z\"\n           },\n           {\n               \"picture\": null,\n               \"gmail_id\": null,\n               \"facebook_id\": null,\n               \"is_logout\": false,\n               \"status\": 3,\n               \"_id\": \"5e388597d21fe166d8c93361\",\n               \"email\": \"haseebmemonshop@gmail.com\",\n               \"password\": \"$2b$10$EyHqgzaU/ZLopb4bZyMykuQzNvu/IdXKlTDi9nwILzJX8VTaSRB/W\",\n               \"full_name\": \"haseeb\",\n               \"contact_number\": \"03080296274\",\n               \"verification_token\": \"a152f88c-8524-4d6c-86be-a03b263eb3b1\",\n               \"address\": [],\n               \"created_at\": \"2020-02-03T20:41:59.794Z\",\n               \"updated_at\": \"2020-02-03T20:42:30.132Z\",\n               \"__v\": 0,\n               \"otp\": 384062,\n               \"otp_created\": \"2020-02-03T20:41:59.804Z\"\n           },\n           {\n               \"picture\": null,\n               \"gmail_id\": null,\n               \"facebook_id\": null,\n               \"is_logout\": false,\n               \"status\": 3,\n               \"_id\": \"5e3f2518d21fe166d8c93458\",\n               \"full_name\": \"Irfan Ahmed\",\n               \"email\": \"ia370287@gmail.com\",\n               \"contact_number\": \"03032003232\",\n               \"password\": \"$2b$10$SYVwuuv2iPmFPkvUCfdCgecG0eIB/8omeRYc4AE6oUakfvHlZGOe2\",\n               \"verification_token\": \"1c3d1ca4-747e-4aaa-90c8-047bad5e83fa\",\n               \"address\": [],\n               \"created_at\": \"2020-02-08T21:16:08.964Z\",\n               \"updated_at\": \"2020-02-08T21:16:51.353Z\",\n               \"__v\": 0,\n               \"otp\": 290496,\n               \"otp_created\": \"2020-02-08T21:16:08.983Z\"\n           }\n       ],\n       \"totalCount\": 90\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/customer.js",
    "groupTitle": "Admin-Customer"
  },
  {
    "type": "Post",
    "url": "/api/admin/driver",
    "title": "Add a Driver",
    "name": "Add_a_Driver",
    "group": "Admin-Driver",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the driver</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "percentageCommission",
            "description": "<p>Percentage Commission</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "full_name",
            "description": "<p>Name of the Driver</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id of the Driver</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>Contact Number of the Driver</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the Driver</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the Driver</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "driving_license",
            "description": "<p>Driving License of the Driver</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"driver\": {\n           \"picture\": \"Screenshot from 2020-02-18 14-49-15.png\",\n           \"percentageCommission\": 2,\n           \"is_online\": true,\n           \"is_logout\": false,\n           \"status\": 1,\n           \"_id\": \"5e7229b81dbfb17a8266a97b\",\n           \"full_name\": \"Test Driver\",\n           \"email\": \"testdriver2@enukesoftware.com\",\n           \"contact_number\": \"9878854126\",\n           \"password\": \"$2b$10$lKSOeutK4fLkdnUpZD7AYOYBph6g.XMbXYmE0LQT9XBoQ7ZSVG2f2\",\n           \"address\": \"112\",\n           \"driving_license\": \"123\",\n           \"created_at\": \"2020-03-18T14:01:28.145Z\",\n           \"updated_at\": \"2020-03-18T14:01:28.145Z\",\n           \"__v\": 0\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNPROCESSABLE_ENTITY",
            "description": "<p>Email address is a required field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Email address is a required field.\",\n   \"error\": {\n       \"validation\": {\n           \"email\": [\n               \"Email address is a required field.\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/driver.js",
    "groupTitle": "Admin-Driver"
  },
  {
    "type": "Put",
    "url": "api/admin/driver/change-password/:id",
    "title": "Change Driver Password",
    "name": "Change_Password_of_a_driver.",
    "group": "Admin-Driver",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Change Password of a driver</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"driver\": {\n           \"picture\": null,\n           \"percentageCommission\": 10,\n           \"is_online\": true,\n           \"is_logout\": false,\n           \"status\": 1,\n           \"_id\": \"5d79f10ed22f1e78b7671d74\",\n           \"email\": \"prince.kumar@enukesoftware.com\",\n           \"password\": \"$2b$10$68KJiWoNIlfe0m27HVQZA.CIqb4qIF.ioMNsbiNcLt8f1s1EaIN26\",\n           \"full_name\": \"PRINCE KUMAR\",\n           \"contact_number\": \"8285724681\",\n           \"address\": \"C 37 Najafgarh Nayabazar, Near BVM Public School\",\n           \"created_at\": \"2019-09-12T07:17:34.858Z\",\n           \"updated_at\": \"2020-03-18T14:12:02.201Z\",\n           \"__v\": 0,\n           \"fcm_token\": \"fui46PA2ZTk:APA91bGDNaCm_0ZeT1Lq89xwx6PQDdUaHE4U5dSz22vk6ReWUx2HcvZv2P28M7079GA5Ud0OJUuk-CkPfCh2l8aJ0A2s5RTZ2CeaGUNlbbBTI5x8GNBmj07obxfU3LdeMiYx3L1bHg1u\",\n           \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzlmMTBlZDIyZjFlNzhiNzY3MWQ3NCIsInR5cGUiOjQsImlhdCI6MTU4NDQ0NjY2MX0.HAA2vDCEqPnoMQHyRdAFy1skHku19ZjlJL80boNxzlk\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"singleStringMessage\": \"Cast to ObjectId failed for value \\\"5d79f10ed22f1e78b7671d7\\\" at path \\\"_id\\\" for model \\\"Driver\\\"\",\n   \"error\": {\n       \"stringValue\": \"\\\"5d79f10ed22f1e78b7671d7\\\"\",\n       \"kind\": \"ObjectId\",\n       \"value\": \"5d79f10ed22f1e78b7671d7\",\n       \"path\": \"_id\",\n       \"reason\": {},\n       \"message\": \"Cast to ObjectId failed for value \\\"5d79f10ed22f1e78b7671d7\\\" at path \\\"_id\\\" for model \\\"Driver\\\"\",\n       \"name\": \"CastError\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/driver.js",
    "groupTitle": "Admin-Driver"
  },
  {
    "type": "Delete",
    "url": "/api/admin/driver/:id",
    "title": "",
    "name": "Delete_a_Driver",
    "group": "Admin-Driver",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"driver\": {\n           \"picture\": \"Screenshot from 2020-02-18 14-49-15.png\",\n           \"percentageCommission\": 2,\n           \"is_online\": true,\n           \"is_logout\": false,\n           \"status\": 1,\n           \"_id\": \"5e7229b81dbfb17a8266a97b\",\n           \"full_name\": \"Test Driver\",\n           \"email\": \"testdriver2@enukesoftware.com\",\n           \"contact_number\": \"9878854126\",\n           \"password\": \"$2b$10$lKSOeutK4fLkdnUpZD7AYOYBph6g.XMbXYmE0LQT9XBoQ7ZSVG2f2\",\n           \"address\": \"112\",\n           \"driving_license\": \"123\",\n           \"created_at\": \"2020-03-18T14:01:28.145Z\",\n           \"updated_at\": \"2020-03-19T06:09:28.027Z\",\n           \"__v\": 0\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>401</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/driver.js",
    "groupTitle": "Admin-Driver"
  },
  {
    "type": "Get",
    "url": "/api/admin/driver",
    "title": "Get All Drivers",
    "name": "Get_All_Drivers",
    "group": "Admin-Driver",
    "parameter": {
      "fields": {
        "Query Params) {String} (Optional": [
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "pageNo",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "perPage:",
            "description": "<p>Items to be displayed per Page.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "search:",
            "description": "<p>Store to be searched.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "sortType:-1",
            "description": "<p>To be Sorted.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"drivers\": [\n           {\n               \"picture\": null,\n               \"percentageCommission\": 5,\n               \"is_online\": true,\n               \"is_logout\": false,\n               \"status\": 2,\n               \"_id\": \"5dea5479d85c19035ebf121f\",\n               \"email\": \"hashir.ahmed@aapkidokan.com\",\n               \"password\": \"$2b$10$AzrGBD/0zxhpzSHLGkcpJOrCZSqTujpzDuq4kUBGIr6ZJzqnwBuN2\",\n               \"full_name\": \"Hashir Ahmed\",\n               \"contact_number\": \"03422681694\",\n               \"address\": \"Gulshan\",\n               \"created_at\": \"2019-12-06T13:15:37.660Z\",\n               \"updated_at\": \"2020-03-03T11:54:41.498Z\",\n               \"__v\": 0,\n               \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZWE1NDc5ZDg1YzE5MDM1ZWJmMTIxZiIsInR5cGUiOjQsImlhdCI6MTU3OTYwMDY2Nn0.zvTvk-c39Aju8gbQq5S4RnOLIp4hGUZ29ScZHPN3zss\",\n               \"fcm_token\": \"cwOeAMtVJ4o:APA91bFY8FmMg_OVRCyvzqEdud_sPbaoP2X7QkKyCcDqVFXeoCAUsFKQPEx03alD5khsPrdsmUipdjJ1199o_PQXVQohnC9XOqhlWPv1UKorQGuq7NNGBUlo1S2suvoPn0QSFU1IiCe4\"\n           },\n           {\n               \"picture\": null,\n               \"percentageCommission\": 10,\n               \"is_online\": true,\n               \"is_logout\": false,\n               \"status\": 1,\n               \"_id\": \"5d79f10ed22f1e78b7671d74\",\n               \"email\": \"prince.kumar@enukesoftware.com\",\n               \"password\": \"$2b$10$V1ijCdR.etx3L46BMFprguuPOXmHAcCQhkl36di.tBew.DjlGNaVu\",\n               \"full_name\": \"PRINCE KUMAR\",\n               \"contact_number\": \"8285724681\",\n               \"address\": \"C 37 Najafgarh Nayabazar, Near BVM Public School\",\n               \"created_at\": \"2019-09-12T07:17:34.858Z\",\n               \"updated_at\": \"2020-03-17T12:04:21.007Z\",\n               \"__v\": 0,\n               \"fcm_token\": \"fui46PA2ZTk:APA91bGDNaCm_0ZeT1Lq89xwx6PQDdUaHE4U5dSz22vk6ReWUx2HcvZv2P28M7079GA5Ud0OJUuk-CkPfCh2l8aJ0A2s5RTZ2CeaGUNlbbBTI5x8GNBmj07obxfU3LdeMiYx3L1bHg1u\",\n               \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzlmMTBlZDIyZjFlNzhiNzY3MWQ3NCIsInR5cGUiOjQsImlhdCI6MTU4NDQ0NjY2MX0.HAA2vDCEqPnoMQHyRdAFy1skHku19ZjlJL80boNxzlk\"\n           },\n           {\n               \"picture\": null,\n               \"percentageCommission\": 0,\n               \"is_online\": true,\n               \"is_logout\": false,\n               \"status\": 1,\n               \"_id\": \"5d9dda22d22f1e78b76728c3\",\n               \"email\": \"nasir.ahmed@aapkidokan.com\",\n               \"password\": \"$2b$10$Se2zNSy8Ct3UA788zAdwSO2NkQeqhMKZcGpTAi2xXuTDkeelIRUdC\",\n               \"full_name\": \"Nasir Ahmed\",\n               \"contact_number\": \"03218994366\",\n               \"address\": \"Bait-ul-Mukaram Masjid, B29, Master Square، University Rd, Block 13/A Block 13 A Opp، Karachi, Karachi City, Sindh, Pakistan\",\n               \"driving_license\": \"154512154956\",\n               \"created_at\": \"2019-10-09T13:01:22.730Z\",\n               \"updated_at\": \"2020-01-15T09:08:51.960Z\",\n               \"__v\": 0,\n               \"fcm_token\": \"em_1AecwxWg:APA91bE-u0HYQ9_7z3RNl9KrlA86vY5DSyKmzSNgFu1D8YFIjrtzvZtQ65QDjbZEbFegYjZ_QTqgp3TcF720_015Q52iXoSTst87VnG0WXa8GleHsHB1g_KPqHojtQ5mYxeCcmPTy803\",\n               \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOWRkYTIyZDIyZjFlNzhiNzY3MjhjMyIsInR5cGUiOjQsImlhdCI6MTU3OTA3OTMyN30.WRLVWh3--pe7H8e9-mWdFgSrH3Zlil4f_wLSrK6Vn9s\"\n           },\n           {\n               \"picture\": null,\n               \"percentageCommission\": 0,\n               \"is_online\": true,\n               \"is_logout\": false,\n               \"status\": 1,\n               \"_id\": \"5dea53edd85c19035ebf121d\",\n               \"email\": \"yasir.mangi@aapkidokan.com\",\n               \"password\": \"$2b$10$rMNypS3lK.5sX8pM7caPUeEi2Ezfbrlm6wjYHqVZqWs54iLA0l0Ty\",\n               \"full_name\": \"Yasir Ali\",\n               \"contact_number\": \"03133078092\",\n               \"address\": \"Gulshan\",\n               \"created_at\": \"2019-12-06T13:13:17.426Z\",\n               \"updated_at\": \"2019-12-10T15:57:39.689Z\",\n               \"__v\": 0,\n               \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZWE1M2VkZDg1YzE5MDM1ZWJmMTIxZCIsInR5cGUiOjQsImlhdCI6MTU3NTcwNDIwOX0.vTB55W-6BBnPwO32TVXeX705nC-IiOckgdJLHqYUhkE\",\n               \"fcm_token\": \"dAyqVVKFjbk:APA91bEgwAY4v-SJoZAt-aje0HcrDQc3xOnZl6crKoiZAH1K5t2E9X2nhGo1tDVbniQNAPJVGqT-LImFnUkwgYEvRD548ADfTIoWok2Bf2ajbzG5lDV3XlohF0EAAlhJzImIWywAKfQh\"\n           },\n           {\n               \"picture\": null,\n               \"percentageCommission\": 0,\n               \"is_online\": true,\n               \"is_logout\": true,\n               \"status\": 1,\n               \"_id\": \"5dea5445d85c19035ebf121e\",\n               \"email\": \"hammad.siddiqui@aapkidokan.com\",\n               \"password\": \"$2b$10$OAg1a3NW1/kZpW8/5IcMKOYUWJyjIGGNJ8x1Gsnda.rWeRLoP6cX6\",\n               \"full_name\": \"Hammad Hassan\",\n               \"contact_number\": \"03333743790\",\n               \"address\": \"Gulshan\",\n               \"created_at\": \"2019-12-06T13:14:45.040Z\",\n               \"updated_at\": \"2020-02-29T09:08:39.286Z\",\n               \"__v\": 0,\n               \"fcm_token\": \"dZIGhg0kz2g:APA91bGe6pW5WOfGzf1ih_xDoLOXgM7IB_bkeXzwlsvespoKAsfPbLWTfM_oTd7er6fwn5lMFNtgP4qfgkeYEs9HaH-GNh1KxZs_FrTESrbGPwDdIz7raRND619EttBSQqVgyRRi1tFF\",\n               \"verification_token\": \"b6a67c71-e504-443b-b3e8-1246aeae032b\",\n               \"otp\": 593737,\n               \"otp_created\": \"2020-02-29T09:08:39.285Z\"\n           },\n           {\n               \"picture\": null,\n               \"percentageCommission\": 0,\n               \"is_online\": true,\n               \"is_logout\": false,\n               \"status\": 1,\n               \"_id\": \"5dea892ed85c19035ebf1238\",\n               \"email\": \"najam.sahto@gmail.com\",\n               \"password\": \"$2b$10$jeLNLonOzCtta7I2rcVzXuf.yMQCBdd8OmXnQn4T2Xze8RdRrIwfu\",\n               \"full_name\": \"Najam\",\n               \"contact_number\": \"03012999901\",\n               \"address\": \"Gulshan\",\n               \"created_at\": \"2019-12-06T17:00:30.248Z\",\n               \"updated_at\": \"2019-12-21T09:17:00.925Z\",\n               \"__v\": 0,\n               \"fcm_token\": \"diLyMin-RYI:APA91bFAAsTj-4mkvLOgVg9eDCtwxflmxaEQ2T_oAamgAz3xXhW2v1wlbytzzfWDhPXG6Kr2LWxwSKu1oLfMe3ciobwHiRZVA8dPCKBxBdiTMVkol85Q2tFkDk-kkdbfEqz7COQt-ftv\",\n               \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZWE4OTJlZDg1YzE5MDM1ZWJmMTIzOCIsInR5cGUiOjQsImlhdCI6MTU3NjkxOTgyMH0.HLD-AmOo7Nlz63x3Xyqqth_8nHm4XRxpm01vliZ_izU\"\n           },\n           {\n               \"picture\": \"Farhad Profile picture.jpeg\",\n               \"percentageCommission\": 10,\n               \"is_online\": true,\n               \"is_logout\": false,\n               \"status\": 1,\n               \"_id\": \"5e4e2a39d21fe166d8c94153\",\n               \"email\": \"alifarhad856@gmail.com\",\n               \"password\": \"$2b$10$W1UCnj3ZNrW6sM/NrFAEjetCQBAS3C4U7drCYCvm8GBvzj.32tsmm\",\n               \"full_name\": \"Farhad Ali\",\n               \"contact_number\": \"03122515627\",\n               \"address\": \"House no K 112/A Qasba Colony town\",\n               \"driving_license\": \"4240142360253#404\",\n               \"created_at\": \"2020-02-20T06:42:01.336Z\",\n               \"updated_at\": \"2020-03-03T11:31:36.910Z\",\n               \"__v\": 0,\n               \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNGUyYTM5ZDIxZmUxNjZkOGM5NDE1MyIsInR5cGUiOjQsImlhdCI6MTU4MjE4MDk2N30.RCQ1jN3FZ9wpW8F1RzK7JAfz_OYcasH4OJdxbB9sbBg\",\n               \"fcm_token\": \"d32no1aujA0:APA91bEh0NVodEn4aeT-BtOxchmBNb8XtTnwXkcdRm5DUCfEY0Urpfu-sgmkee3ZuL7Uwk48uaHxALinDLmEyTwzjB5yKto_MMGaMMOfTvUJR2hpCKVNLYCOkmaw3X77qaAZqPPrrrIG\"\n           }\n       ],\n       \"totalCount\": 7\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>401</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/driver.js",
    "groupTitle": "Admin-Driver"
  },
  {
    "type": "Put",
    "url": "/api/admin/driver/:id",
    "title": "Update Driver",
    "name": "Update_Driver",
    "group": "Admin-Driver",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "status:",
            "description": "<p>Status of the driver</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "percentageCommission",
            "description": "<p>: Percentage Commission of the driver.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "full_name",
            "description": "<p>: Full Name of the driver</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email:",
            "description": "<p>Email of the driver.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "contact_number:",
            "description": "<p>Contact Number of the Driver.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>: Password of the Driver</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "address:",
            "description": "<p>Address of the driver.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "driving_license:",
            "description": "<p>Driving license of the driver</p>"
          },
          {
            "group": "Body",
            "type": "File",
            "optional": false,
            "field": "picture:",
            "description": "<p>Picture of Driver</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "is_online:",
            "description": "<p>Is Driver Online</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "is_logout:",
            "description": "<p>Is Driver Logout</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "_id:",
            "description": "<p>Unique Id of a Driver</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"driver\": {\n           \"picture\": \"Screenshot from 2020-02-20 16-27-43.png\",\n           \"percentageCommission\": 2,\n           \"is_online\": true,\n           \"is_logout\": false,\n           \"status\": 1,\n           \"_id\": \"5e7229001dbfb17a8266a97a\",\n           \"full_name\": \"Test Drive\",\n           \"email\": \"testdriver@enukesoftware.com\",\n           \"contact_number\": \"9878854125\",\n           \"password\": \"$2b$10$YQUB7rPWNQZcf/HNIsqS2e4lZYapt.lNm0eddfHFa9ldPsyDHDlve\",\n           \"address\": \" 12\",\n           \"driving_license\": \"1234\",\n           \"created_at\": \"2020-03-18T13:58:24.412Z\",\n           \"updated_at\": \"2020-03-18T17:25:38.716Z\",\n           \"__v\": 0\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/driver.js",
    "groupTitle": "Admin-Driver"
  },
  {
    "type": "Get",
    "url": "/api/admin/order/today-count",
    "title": "Get Order Today Count",
    "name": "Get_Order_Count",
    "group": "Admin-Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"ordersCount\": 2\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>401</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/order.js",
    "groupTitle": "Admin-Order"
  },
  {
    "type": "Get",
    "url": "/api/admin/order",
    "title": "Get Order List",
    "name": "Get_Order_List",
    "group": "Admin-Order",
    "parameter": {
      "fields": {
        "Query Params) {String} (Optional": [
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "pageNo",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "perPage:",
            "description": "<p>Items to be displayed per Page.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "search:",
            "description": "<p>Coupon to be searched.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "sortType",
            "description": "<p>To be Sorted.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"order\": [\n           {\n               \"_id\": \"5d886976d22f1e78b767249f\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.9210435,\n                           \"longitude\": 67.10559360000002\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"NA-Class 190/219\",\n                       \"locality\": \"Karachi\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 28.4649909,\n                           \"longitude\": 77.0318711\n                       },\n                       \"full_name\": \"Taimoor Lang\",\n                       \"email\": \"taimoor.lang@aapkidokan.com\",\n                       \"contact_number\": \"1234123123\",\n                       \"house_no\": \"F-16\",\n                       \"locality\": \"Gajnavi, Salar Masood\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"alias\": \"home\",\n                       \"gps_address\": \"Gurgaon bus stand, Unnamed Road, Adarsh Nagar, Sector 12, Gurugram, Haryana, India\",\n                       \"landmark\": \"Md Gauri is ghar\",\n                       \"what_3_words\": \"\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 1,\n               \"is_express_delivery\": false,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 150,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"slot_id\": \"5d7e8a6cd22f1e78b7671fad\",\n               \"deliver_start_time\": \"2019-09-23T07:00:00.000Z\",\n               \"deliver_end_time\": \"2019-09-23T09:00:00.000Z\",\n               \"customer_id\": \"5d79f86fd22f1e78b7671d84\",\n               \"store_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"products\": [\n                   {\n                       \"pictures\": [\n                           \"00200056.jpg\"\n                       ],\n                       \"_id\": \"5d886976d22f1e78b76724a0\",\n                       \"product_id\": \"5d788f0ed22f1e78b7671c3a\",\n                       \"size\": \"92.1gm\",\n                       \"price\": 670,\n                       \"count\": 2,\n                       \"name\": \"Doritos Spicy Sweet Chili\"\n                   }\n               ],\n               \"total_amount\": 1400,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 1400,\n               \"commission_percentage\": 2,\n               \"admin_commission_amount\": 28,\n               \"store_payout_amount\": 1372,\n               \"order_id\": \"eafeffd\",\n               \"created_at\": \"2019-09-23T06:43:02.053Z\",\n               \"updated_at\": \"2020-03-18T10:28:52.455Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5d79f10ed22f1e78b7671d74\",\n               \"store\": {\n                   \"_id\": \"5d7607c59b5f0f76ee4f68b0\",\n                   \"picture\": \"12.png\",\n                   \"has_express_delivery\": false,\n                   \"drivers\": [\n                       \"5d79f10ed22f1e78b7671d74\",\n                       \"5dea892ed85c19035ebf1238\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"12:00\",\n                       \"close_time\": \"21:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"ham.hassansiddiqui@gmail.com\",\n                       \"password\": \"$2b$10$yTWjJmy7DS2R6h8zyDr.6unwkX0teyzU50lT4pvoQo3NYTHZBKmQu\",\n                       \"full_name\": \"Hammad Hassan\",\n                       \"contact_number\": \"03333743790\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d7607c59b5f0f76ee4f68b1\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9210435,\n                               \"longitude\": 67.10559360000002\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e262d10d21fe166d8c93049\",\n                           \"shop_no\": \"NA-Class 190/219\",\n                           \"locality\": \"Karachi\",\n                           \"unique_link\": \"TKhr3\"\n                       }\n                   ],\n                   \"name\": \"METRO\",\n                   \"commission\": 3,\n                   \"created_at\": \"2019-09-09T08:05:25.721Z\",\n                   \"updated_at\": \"2020-03-05T06:26:57.905Z\",\n                   \"__v\": 0,\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzYwN2M1OWI1ZjBmNzZlZTRmNjhiMCIsInR5cGUiOjIsImlhdCI6MTU4MzM4ODM4NX0.4uZ9x7xPDnYiRisnZJ7a0UPep8LRYYOD8KXxgi6J-7o\",\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzYwN2M1OWI1ZjBmNzZlZTRmNjhiMCIsImlhdCI6MTU3ODkxMTA4Mn0.k-Ek52UwRftyj8hywTqFUneWb1kW8_pfocE0ayMaFZI\",\n                   \"storeCategory\": \"5e4fb5e3beee3369a6b32a0d\",\n                   \"delivery_charges\": [\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389a\",\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389b\",\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389c\",\n                           \"order_amount\": 1001,\n                           \"charges\": 30\n                       }\n                   ],\n                   \"storeInfo\": {\n                       \"faq\": \"<p>dfdf</p><p><br></p><p>a</p><p>d</p><p>s</p>\",\n                       \"termAndCondition\": \"<h2>Term and condition</h2><h2>Term and condition</h2><h2>Term and condition</h2><h2><br></h2>\",\n                       \"privacyAndPolicy\": \"<p>Last Updated: May 25, 2019</p><p>Thank you for using aapkidokan.com services. We are dedicated to provide you the best online shopping and delivery experience possible. This Privacy Policy outlines how we respect and value the trust you put in aapkidokan.com. This Policy applies regardless of how you access the aapkidokan.com platform - whether this is via a mobile app or web interface.</p><p><br></p><p>INFORMATION WE COLLECT</p><p>When you use our website or mobile application, you may provide us with information about yourself. For instance, when you create an account with aapkidokan.com you provide us with personal information like your name, email address, and phone number. And if you place an order with aapkidokan.com, we collect information including your address and the details of your order.</p><p>If you log into the services through a third-party service, both we and that third-party may receive some information about you and your use of the service. For example, if you choose to log into the services with your Facebook account, we may receive information from Facebook, such as your name, e-mail address, and public profile information about your contacts. We may also offer social sharing tools that let you share actions on the services with other websites and vice versa. In those cases, the providers of those tools may receive information about you when you use those tools. You should check the privacy policies of these third party services and your settings there for more information.</p><p>We use your contact information to send you offers based on your previous orders and your interests when you use the aapkidokan.com services, either through a browser or mobile app, we automatically receive some technical information about the hardware and software that is being used.</p><p><br></p><p>USE OF YOUR INFORMATION</p><p><strong> We may use the information we collect for various purposes including:</strong></p><ul><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Manage and improve the services aapkidokan.com provide to you</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Administer and operate your account</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Process your orders, receive payments for the orders</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Understand your shopping behavior to develop and improve our products and services and offer you customized content (including advertising and promotions), such as prominently displaying items you purchase frequently</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Provide customer service, respond to your communications and requests, and resolve complaint and disputes and contact you about your use of appkidokan.com services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">Inform you about online offers, products, services and important changes to the Website and our services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">In our efforts to continually improve our product and service offerings, we collect and analyze demographic and profile data about our users' activity on our Website.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">We identify and use your IP address to help diagnose problems with our server, and to administer our Website. Your IP address is also used to help identify you and to gather broad demographic information.</li></ul><p>DISCLOSING YOUR PERSONAL INFORMATION</p><p><strong> Your personal information is safe with us, we will never disclose your information to anyone outside the aapkidokan.com except where we have your consent, and we may also disclose the information where:</strong></p><ul><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> To other companies who provide a service to us, For example, we may provide information to advertisers to help them reach the kind of audience they want to target and to enable us to comply with our commitments to our advertisers (e.g. by displaying their advertisements to a target audience).</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We will share your information with entities outside of the Services when we have your consent to do so or it is done at your direction.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information with our retail partners in order to provide and maintain the Services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information with third parties to process information on our behalf or to provide certain services (such as delivery services, advertising services, or information to better tailor our services to you). For the purposes of this processing or provision of services, we may share your information with such third parties under appropriate confidentiality provisions.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> For legal purposes, we may share your information when we believe that the disclosure is reasonably necessary to (a) comply with applicable laws, regulations, legal process, or requests from law enforcement or regulatory authorities, (b) prevent, detect, or otherwise handle fraud, security, or technical issues, and (c) protect the safety, rights, or property of any person, the public, or aapkidokan.com.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information in connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business by another company. We may also share your information between and among aapkidokan.com and other companies under common control and ownership.</li></ul><p>COOKIES AND OTHER TRACKING TECHNOLOGIES</p><p>We also use cookies to allow you to enter your password less frequently during a session. Cookies can also help us provide information that is targeted to your interests.</p><p>Cookies are small text files that are sent by your computer when you access our services through a browser. We may use session cookies (which expire when you close your browser), persistent cookies (which expire when you choose to clear them from your browser), and other identifiers to collect information from your browser or device that helps us personalize your experience, measure, manage, and display advertising on the services or on other services; understand your usage of the Services and other services in order to serve customized ads and remember that you are logged into the Services. By using your browser settings, you may block cookies or adjust settings for notifications when a cookie is set.</p><p>Additionally, you may encounter \\\"cookies\\\" or other similar devices on certain pages of the Website that are placed by third parties. We do not control the use of cookies by third parties</p><p><br></p><p>WHAT SECURITY MEASURES WE APPLY</p><p>We maintain commercially reasonable technical, administrative, and physical safeguards to ensure your Information is treated securely and in accordance with this Privacy Policy, and to protect against unauthorized access or alteration to, disclosure, or destruction of your Information. We may, for example, use encryption technology to secure your Information by utilizing Secure Socket Layer (SSL) software. Only those authorized employees, contractors, and agents who need to know your Information in connection with the performance of their services are allowed to access this Information.</p><p>It is important for you to protect yourself against unauthorized access to your password and to your devices used to access our Services. You are responsible for keeping your password confidential. For example, ensure that you sign off when you have finished using a shared device.</p><p>Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your Information, we cannot guarantee the security of your Information transmitted to our Platform and any transmission is at your own risk.</p><p><br></p><p>CHANGES TO OUR POLICY</p><p>Our business changes constantly, and our Privacy Policy may therefore also need to change. We reserve the right to change the policy at any time. We will post the current version of this Privacy Policy on the Platform and each such change will be effective upon posting on the Platform or upon the date designated by us as the \\\"effective date\\\".</p><p>We may e-mail periodic reminders of our notices and conditions, but you should check our Platform frequently to see recent changes.</p><p>It is your obligation to regularly check the Privacy Policy. Your continued use of the Platform following any such change constitutes your agreement to this Privacy Policy as so modified</p><p><br></p><p>CONTACT INFORMATION</p><p>If you have any concerns, questions or comments about your Information or our Privacy Policy, please contact us&nbsp;with thorough description at following:</p>\",\n                       \"contactInfo\": \"<h2 class=\\\"ql-align-center\\\"><strong style=\\\"color: rgb(255, 194, 102);\\\">Your personal information is</strong><strong> </strong></h2><p><br></p><p><strong>safe with us, we will never disclose your information to anyone outside the aapkidokan.com except where we have your consent, and we may also disclose the information where:</strong></p><ul><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;To other companies who provide a service to us, For example, we may provide information to advertisers to help them reach the kind of audience they want to target and to enable us to comply with our commitments to our advertisers (e.g. by displaying their advertisements to a target audience).</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We will share your information with entities outside of the Services when we have your consent to do so or it is done at your direction.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information with our retail partners in order to provide and maintain the Services.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information with third parties to process information on our behalf or to provide certain services (such as delivery services, advertising services, or information to better tailor our services to you). For the purposes of this processing or provision of services, we may share your information with such third parties under appropriate confidentiality provisions.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;For legal purposes, we may share your information when we believe that the disclosure is reasonably necessary to (a) comply with applicable laws, regulations, legal process, or requests from law enforcement or regulatory authorities, (b) prevent, detect, or otherwise handle fraud, security, or technical issues, and (c) protect the safety, rights, or property of any person, the public, or aapkidokan.com.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information in connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business by another company. We may also share your information between and among aapkidokan.com and other companies under common control and ownership.</li></ul>\"\n                   }\n               },\n               \"driver\": {\n                   \"_id\": \"5d79f10ed22f1e78b7671d74\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"prince.kumar@enukesoftware.com\",\n                   \"password\": \"$2b$10$68KJiWoNIlfe0m27HVQZA.CIqb4qIF.ioMNsbiNcLt8f1s1EaIN26\",\n                   \"full_name\": \"PRINCE KUMAR\",\n                   \"contact_number\": \"8285724681\",\n                   \"address\": \"C 37 Najafgarh Nayabazar, Near BVM Public School\",\n                   \"created_at\": \"2019-09-12T07:17:34.858Z\",\n                   \"updated_at\": \"2020-03-19T12:14:06.318Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"fui46PA2ZTk:APA91bGDNaCm_0ZeT1Lq89xwx6PQDdUaHE4U5dSz22vk6ReWUx2HcvZv2P28M7079GA5Ud0OJUuk-CkPfCh2l8aJ0A2s5RTZ2CeaGUNlbbBTI5x8GNBmj07obxfU3LdeMiYx3L1bHg1u\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzlmMTBlZDIyZjFlNzhiNzY3MWQ3NCIsInR5cGUiOjQsImlhdCI6MTU4NDYyMDA0Nn0.ZRfBIdtxbgWyfPMbQHM4ouJEfs88VEz1YY2S2zXsZDQ\",\n                   \"percentageCommission\": 10\n               }\n           },\n           {\n               \"_id\": \"5da2dbbb7a30b1642ce9cc31\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.9210435,\n                           \"longitude\": 67.10559360000002\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"NA-Class 190/219\",\n                       \"locality\": \"Karachi\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.908779121311746,\n                           \"longitude\": 67.13000267744064\n                       },\n                       \"full_name\": \"Tanzeel\",\n                       \"email\": \"tanzeels@gmail.com\",\n                       \"contact_number\": \"03018492428\",\n                       \"house_no\": \"B-602/ bait ul Hina Apartments \",\n                       \"locality\": \"gulshan e jauhar, block 18\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"alias\": \"home\",\n                       \"gps_address\": \"32, Block 18 Gulistan-e-Johar, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"landmark\": \"near Rabia city\",\n                       \"what_3_words\": \"What3Words\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 5,\n               \"is_express_delivery\": true,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 150,\n               \"driver_assigned\": false,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"deliver_start_time\": \"2019-10-13T08:09:31.383Z\",\n               \"deliver_end_time\": \"2019-10-13T10:09:31.383Z\",\n               \"customer_id\": \"5da2dab97a30b1642ce9cc2f\",\n               \"store_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"products\": [\n                   {\n                       \"pictures\": [\n                           \"01500024.jpg\"\n                       ],\n                       \"_id\": \"5da2dbbb7a30b1642ce9cc32\",\n                       \"product_id\": \"5d8a097cd22f1e78b7672639\",\n                       \"size\": \"1 Pack X 52 Pcs\",\n                       \"price\": 2289,\n                       \"count\": 1,\n                       \"name\": \"Pampers - Pants Junior (Size-5) \"\n                   }\n               ],\n               \"total_amount\": 2289,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 2289,\n               \"commission_percentage\": 2,\n               \"admin_commission_amount\": 45.78,\n               \"store_payout_amount\": 2243.22,\n               \"order_id\": \"5d51668\",\n               \"created_at\": \"2019-10-13T08:09:31.402Z\",\n               \"updated_at\": \"2019-12-21T08:26:24.900Z\",\n               \"__v\": 0,\n               \"cancelled_by\": \"customer\",\n               \"store\": {\n                   \"_id\": \"5d7607c59b5f0f76ee4f68b0\",\n                   \"picture\": \"12.png\",\n                   \"has_express_delivery\": false,\n                   \"drivers\": [\n                       \"5d79f10ed22f1e78b7671d74\",\n                       \"5dea892ed85c19035ebf1238\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"12:00\",\n                       \"close_time\": \"21:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"ham.hassansiddiqui@gmail.com\",\n                       \"password\": \"$2b$10$yTWjJmy7DS2R6h8zyDr.6unwkX0teyzU50lT4pvoQo3NYTHZBKmQu\",\n                       \"full_name\": \"Hammad Hassan\",\n                       \"contact_number\": \"03333743790\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d7607c59b5f0f76ee4f68b1\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9210435,\n                               \"longitude\": 67.10559360000002\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e262d10d21fe166d8c93049\",\n                           \"shop_no\": \"NA-Class 190/219\",\n                           \"locality\": \"Karachi\",\n                           \"unique_link\": \"TKhr3\"\n                       }\n                   ],\n                   \"name\": \"METRO\",\n                   \"commission\": 3,\n                   \"created_at\": \"2019-09-09T08:05:25.721Z\",\n                   \"updated_at\": \"2020-03-05T06:26:57.905Z\",\n                   \"__v\": 0,\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzYwN2M1OWI1ZjBmNzZlZTRmNjhiMCIsInR5cGUiOjIsImlhdCI6MTU4MzM4ODM4NX0.4uZ9x7xPDnYiRisnZJ7a0UPep8LRYYOD8KXxgi6J-7o\",\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzYwN2M1OWI1ZjBmNzZlZTRmNjhiMCIsImlhdCI6MTU3ODkxMTA4Mn0.k-Ek52UwRftyj8hywTqFUneWb1kW8_pfocE0ayMaFZI\",\n                   \"storeCategory\": \"5e4fb5e3beee3369a6b32a0d\",\n                   \"delivery_charges\": [\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389a\",\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389b\",\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389c\",\n                           \"order_amount\": 1001,\n                           \"charges\": 30\n                       }\n                   ],\n                   \"storeInfo\": {\n                       \"faq\": \"<p>dfdf</p><p><br></p><p>a</p><p>d</p><p>s</p>\",\n                       \"termAndCondition\": \"<h2>Term and condition</h2><h2>Term and condition</h2><h2>Term and condition</h2><h2><br></h2>\",\n                       \"privacyAndPolicy\": \"<p>Last Updated: May 25, 2019</p><p>Thank you for using aapkidokan.com services. We are dedicated to provide you the best online shopping and delivery experience possible. This Privacy Policy outlines how we respect and value the trust you put in aapkidokan.com. This Policy applies regardless of how you access the aapkidokan.com platform - whether this is via a mobile app or web interface.</p><p><br></p><p>INFORMATION WE COLLECT</p><p>When you use our website or mobile application, you may provide us with information about yourself. For instance, when you create an account with aapkidokan.com you provide us with personal information like your name, email address, and phone number. And if you place an order with aapkidokan.com, we collect information including your address and the details of your order.</p><p>If you log into the services through a third-party service, both we and that third-party may receive some information about you and your use of the service. For example, if you choose to log into the services with your Facebook account, we may receive information from Facebook, such as your name, e-mail address, and public profile information about your contacts. We may also offer social sharing tools that let you share actions on the services with other websites and vice versa. In those cases, the providers of those tools may receive information about you when you use those tools. You should check the privacy policies of these third party services and your settings there for more information.</p><p>We use your contact information to send you offers based on your previous orders and your interests when you use the aapkidokan.com services, either through a browser or mobile app, we automatically receive some technical information about the hardware and software that is being used.</p><p><br></p><p>USE OF YOUR INFORMATION</p><p><strong> We may use the information we collect for various purposes including:</strong></p><ul><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Manage and improve the services aapkidokan.com provide to you</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Administer and operate your account</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Process your orders, receive payments for the orders</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Understand your shopping behavior to develop and improve our products and services and offer you customized content (including advertising and promotions), such as prominently displaying items you purchase frequently</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Provide customer service, respond to your communications and requests, and resolve complaint and disputes and contact you about your use of appkidokan.com services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">Inform you about online offers, products, services and important changes to the Website and our services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">In our efforts to continually improve our product and service offerings, we collect and analyze demographic and profile data about our users' activity on our Website.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">We identify and use your IP address to help diagnose problems with our server, and to administer our Website. Your IP address is also used to help identify you and to gather broad demographic information.</li></ul><p>DISCLOSING YOUR PERSONAL INFORMATION</p><p><strong> Your personal information is safe with us, we will never disclose your information to anyone outside the aapkidokan.com except where we have your consent, and we may also disclose the information where:</strong></p><ul><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> To other companies who provide a service to us, For example, we may provide information to advertisers to help them reach the kind of audience they want to target and to enable us to comply with our commitments to our advertisers (e.g. by displaying their advertisements to a target audience).</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We will share your information with entities outside of the Services when we have your consent to do so or it is done at your direction.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information with our retail partners in order to provide and maintain the Services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information with third parties to process information on our behalf or to provide certain services (such as delivery services, advertising services, or information to better tailor our services to you). For the purposes of this processing or provision of services, we may share your information with such third parties under appropriate confidentiality provisions.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> For legal purposes, we may share your information when we believe that the disclosure is reasonably necessary to (a) comply with applicable laws, regulations, legal process, or requests from law enforcement or regulatory authorities, (b) prevent, detect, or otherwise handle fraud, security, or technical issues, and (c) protect the safety, rights, or property of any person, the public, or aapkidokan.com.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information in connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business by another company. We may also share your information between and among aapkidokan.com and other companies under common control and ownership.</li></ul><p>COOKIES AND OTHER TRACKING TECHNOLOGIES</p><p>We also use cookies to allow you to enter your password less frequently during a session. Cookies can also help us provide information that is targeted to your interests.</p><p>Cookies are small text files that are sent by your computer when you access our services through a browser. We may use session cookies (which expire when you close your browser), persistent cookies (which expire when you choose to clear them from your browser), and other identifiers to collect information from your browser or device that helps us personalize your experience, measure, manage, and display advertising on the services or on other services; understand your usage of the Services and other services in order to serve customized ads and remember that you are logged into the Services. By using your browser settings, you may block cookies or adjust settings for notifications when a cookie is set.</p><p>Additionally, you may encounter \\\"cookies\\\" or other similar devices on certain pages of the Website that are placed by third parties. We do not control the use of cookies by third parties</p><p><br></p><p>WHAT SECURITY MEASURES WE APPLY</p><p>We maintain commercially reasonable technical, administrative, and physical safeguards to ensure your Information is treated securely and in accordance with this Privacy Policy, and to protect against unauthorized access or alteration to, disclosure, or destruction of your Information. We may, for example, use encryption technology to secure your Information by utilizing Secure Socket Layer (SSL) software. Only those authorized employees, contractors, and agents who need to know your Information in connection with the performance of their services are allowed to access this Information.</p><p>It is important for you to protect yourself against unauthorized access to your password and to your devices used to access our Services. You are responsible for keeping your password confidential. For example, ensure that you sign off when you have finished using a shared device.</p><p>Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your Information, we cannot guarantee the security of your Information transmitted to our Platform and any transmission is at your own risk.</p><p><br></p><p>CHANGES TO OUR POLICY</p><p>Our business changes constantly, and our Privacy Policy may therefore also need to change. We reserve the right to change the policy at any time. We will post the current version of this Privacy Policy on the Platform and each such change will be effective upon posting on the Platform or upon the date designated by us as the \\\"effective date\\\".</p><p>We may e-mail periodic reminders of our notices and conditions, but you should check our Platform frequently to see recent changes.</p><p>It is your obligation to regularly check the Privacy Policy. Your continued use of the Platform following any such change constitutes your agreement to this Privacy Policy as so modified</p><p><br></p><p>CONTACT INFORMATION</p><p>If you have any concerns, questions or comments about your Information or our Privacy Policy, please contact us&nbsp;with thorough description at following:</p>\",\n                       \"contactInfo\": \"<h2 class=\\\"ql-align-center\\\"><strong style=\\\"color: rgb(255, 194, 102);\\\">Your personal information is</strong><strong> </strong></h2><p><br></p><p><strong>safe with us, we will never disclose your information to anyone outside the aapkidokan.com except where we have your consent, and we may also disclose the information where:</strong></p><ul><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;To other companies who provide a service to us, For example, we may provide information to advertisers to help them reach the kind of audience they want to target and to enable us to comply with our commitments to our advertisers (e.g. by displaying their advertisements to a target audience).</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We will share your information with entities outside of the Services when we have your consent to do so or it is done at your direction.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information with our retail partners in order to provide and maintain the Services.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information with third parties to process information on our behalf or to provide certain services (such as delivery services, advertising services, or information to better tailor our services to you). For the purposes of this processing or provision of services, we may share your information with such third parties under appropriate confidentiality provisions.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;For legal purposes, we may share your information when we believe that the disclosure is reasonably necessary to (a) comply with applicable laws, regulations, legal process, or requests from law enforcement or regulatory authorities, (b) prevent, detect, or otherwise handle fraud, security, or technical issues, and (c) protect the safety, rights, or property of any person, the public, or aapkidokan.com.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information in connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business by another company. We may also share your information between and among aapkidokan.com and other companies under common control and ownership.</li></ul>\"\n                   }\n               }\n           },\n           {\n               \"_id\": \"5dcbfeb0ed31e91844278ebd\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.9210435,\n                           \"longitude\": 67.10559360000002\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"NA-Class 190/219\",\n                       \"locality\": \"Karachi\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.861478767361103,\n                           \"longitude\": 67.00280588493344\n                       },\n                       \"alias\": \"home\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"full_name\": \"Enuke\",\n                       \"email\": \"enuke@enuke.com\",\n                       \"contact_number\": \"9999999999\",\n                       \"house_no\": \"test\",\n                       \"locality\": \"test\",\n                       \"landmark\": \"test\",\n                       \"gps_address\": \"Data Center, Bhimpura Karachi, Karachi City, Sindh, Pakistan\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 1,\n               \"is_express_delivery\": false,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 200,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"slot_id\": \"5dcbf585ed31e91844278e65\",\n               \"deliver_start_time\": \"2019-11-19T07:00:00.000Z\",\n               \"deliver_end_time\": \"2019-11-19T09:00:00.000Z\",\n               \"customer_id\": \"5dcbf452ed31e91844278e4a\",\n               \"store_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"products\": [\n                   {\n                       \"pictures\": [\n                           \"anlkvhnhqk0cvys3y.jpg\"\n                       ],\n                       \"_id\": \"5dcbfeb0ed31e91844278ec0\",\n                       \"product_id\": \"5d76bc669b5f0f76ee4f6952\",\n                       \"size\": \"9 gm\",\n                       \"price\": 240,\n                       \"count\": 1,\n                       \"name\": \"Cadbury dairy milk Box\"\n                   },\n                   {\n                       \"pictures\": [\n                           \"anlkvhnhqk0c6vrjq.jpeg\"\n                       ],\n                       \"_id\": \"5dcbfeb0ed31e91844278ebf\",\n                       \"product_id\": \"5d7617d39b5f0f76ee4f68fa\",\n                       \"size\": \"500 gm\",\n                       \"price\": 47.5,\n                       \"count\": 1,\n                       \"name\": \" Beetroot (Chukandar)\"\n                   },\n                   {\n                       \"pictures\": [\n                           \"anlkvhnhqk0cdu28n.jpg\"\n                       ],\n                       \"_id\": \"5dcbfeb0ed31e91844278ebe\",\n                       \"product_id\": \"5d7645719b5f0f76ee4f6912\",\n                       \"size\": \"51gm\",\n                       \"price\": 105,\n                       \"count\": 2,\n                       \"name\": \"Mars Chocolate\"\n                   }\n               ],\n               \"total_amount\": 497.5,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 497.5,\n               \"commission_percentage\": 2,\n               \"admin_commission_amount\": 9.95,\n               \"store_payout_amount\": 487.55,\n               \"order_id\": \"c027885\",\n               \"created_at\": \"2019-11-13T13:01:36.227Z\",\n               \"updated_at\": \"2020-01-10T14:21:24.408Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5d79f10ed22f1e78b7671d74\",\n               \"store\": {\n                   \"_id\": \"5d7607c59b5f0f76ee4f68b0\",\n                   \"picture\": \"12.png\",\n                   \"has_express_delivery\": false,\n                   \"drivers\": [\n                       \"5d79f10ed22f1e78b7671d74\",\n                       \"5dea892ed85c19035ebf1238\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"12:00\",\n                       \"close_time\": \"21:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"ham.hassansiddiqui@gmail.com\",\n                       \"password\": \"$2b$10$yTWjJmy7DS2R6h8zyDr.6unwkX0teyzU50lT4pvoQo3NYTHZBKmQu\",\n                       \"full_name\": \"Hammad Hassan\",\n                       \"contact_number\": \"03333743790\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d7607c59b5f0f76ee4f68b1\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9210435,\n                               \"longitude\": 67.10559360000002\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e262d10d21fe166d8c93049\",\n                           \"shop_no\": \"NA-Class 190/219\",\n                           \"locality\": \"Karachi\",\n                           \"unique_link\": \"TKhr3\"\n                       }\n                   ],\n                   \"name\": \"METRO\",\n                   \"commission\": 3,\n                   \"created_at\": \"2019-09-09T08:05:25.721Z\",\n                   \"updated_at\": \"2020-03-05T06:26:57.905Z\",\n                   \"__v\": 0,\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzYwN2M1OWI1ZjBmNzZlZTRmNjhiMCIsInR5cGUiOjIsImlhdCI6MTU4MzM4ODM4NX0.4uZ9x7xPDnYiRisnZJ7a0UPep8LRYYOD8KXxgi6J-7o\",\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzYwN2M1OWI1ZjBmNzZlZTRmNjhiMCIsImlhdCI6MTU3ODkxMTA4Mn0.k-Ek52UwRftyj8hywTqFUneWb1kW8_pfocE0ayMaFZI\",\n                   \"storeCategory\": \"5e4fb5e3beee3369a6b32a0d\",\n                   \"delivery_charges\": [\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389a\",\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389b\",\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389c\",\n                           \"order_amount\": 1001,\n                           \"charges\": 30\n                       }\n                   ],\n                   \"storeInfo\": {\n                       \"faq\": \"<p>dfdf</p><p><br></p><p>a</p><p>d</p><p>s</p>\",\n                       \"termAndCondition\": \"<h2>Term and condition</h2><h2>Term and condition</h2><h2>Term and condition</h2><h2><br></h2>\",\n                       \"privacyAndPolicy\": \"<p>Last Updated: May 25, 2019</p><p>Thank you for using aapkidokan.com services. We are dedicated to provide you the best online shopping and delivery experience possible. This Privacy Policy outlines how we respect and value the trust you put in aapkidokan.com. This Policy applies regardless of how you access the aapkidokan.com platform - whether this is via a mobile app or web interface.</p><p><br></p><p>INFORMATION WE COLLECT</p><p>When you use our website or mobile application, you may provide us with information about yourself. For instance, when you create an account with aapkidokan.com you provide us with personal information like your name, email address, and phone number. And if you place an order with aapkidokan.com, we collect information including your address and the details of your order.</p><p>If you log into the services through a third-party service, both we and that third-party may receive some information about you and your use of the service. For example, if you choose to log into the services with your Facebook account, we may receive information from Facebook, such as your name, e-mail address, and public profile information about your contacts. We may also offer social sharing tools that let you share actions on the services with other websites and vice versa. In those cases, the providers of those tools may receive information about you when you use those tools. You should check the privacy policies of these third party services and your settings there for more information.</p><p>We use your contact information to send you offers based on your previous orders and your interests when you use the aapkidokan.com services, either through a browser or mobile app, we automatically receive some technical information about the hardware and software that is being used.</p><p><br></p><p>USE OF YOUR INFORMATION</p><p><strong> We may use the information we collect for various purposes including:</strong></p><ul><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Manage and improve the services aapkidokan.com provide to you</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Administer and operate your account</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Process your orders, receive payments for the orders</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Understand your shopping behavior to develop and improve our products and services and offer you customized content (including advertising and promotions), such as prominently displaying items you purchase frequently</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Provide customer service, respond to your communications and requests, and resolve complaint and disputes and contact you about your use of appkidokan.com services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">Inform you about online offers, products, services and important changes to the Website and our services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">In our efforts to continually improve our product and service offerings, we collect and analyze demographic and profile data about our users' activity on our Website.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">We identify and use your IP address to help diagnose problems with our server, and to administer our Website. Your IP address is also used to help identify you and to gather broad demographic information.</li></ul><p>DISCLOSING YOUR PERSONAL INFORMATION</p><p><strong> Your personal information is safe with us, we will never disclose your information to anyone outside the aapkidokan.com except where we have your consent, and we may also disclose the information where:</strong></p><ul><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> To other companies who provide a service to us, For example, we may provide information to advertisers to help them reach the kind of audience they want to target and to enable us to comply with our commitments to our advertisers (e.g. by displaying their advertisements to a target audience).</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We will share your information with entities outside of the Services when we have your consent to do so or it is done at your direction.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information with our retail partners in order to provide and maintain the Services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information with third parties to process information on our behalf or to provide certain services (such as delivery services, advertising services, or information to better tailor our services to you). For the purposes of this processing or provision of services, we may share your information with such third parties under appropriate confidentiality provisions.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> For legal purposes, we may share your information when we believe that the disclosure is reasonably necessary to (a) comply with applicable laws, regulations, legal process, or requests from law enforcement or regulatory authorities, (b) prevent, detect, or otherwise handle fraud, security, or technical issues, and (c) protect the safety, rights, or property of any person, the public, or aapkidokan.com.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information in connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business by another company. We may also share your information between and among aapkidokan.com and other companies under common control and ownership.</li></ul><p>COOKIES AND OTHER TRACKING TECHNOLOGIES</p><p>We also use cookies to allow you to enter your password less frequently during a session. Cookies can also help us provide information that is targeted to your interests.</p><p>Cookies are small text files that are sent by your computer when you access our services through a browser. We may use session cookies (which expire when you close your browser), persistent cookies (which expire when you choose to clear them from your browser), and other identifiers to collect information from your browser or device that helps us personalize your experience, measure, manage, and display advertising on the services or on other services; understand your usage of the Services and other services in order to serve customized ads and remember that you are logged into the Services. By using your browser settings, you may block cookies or adjust settings for notifications when a cookie is set.</p><p>Additionally, you may encounter \\\"cookies\\\" or other similar devices on certain pages of the Website that are placed by third parties. We do not control the use of cookies by third parties</p><p><br></p><p>WHAT SECURITY MEASURES WE APPLY</p><p>We maintain commercially reasonable technical, administrative, and physical safeguards to ensure your Information is treated securely and in accordance with this Privacy Policy, and to protect against unauthorized access or alteration to, disclosure, or destruction of your Information. We may, for example, use encryption technology to secure your Information by utilizing Secure Socket Layer (SSL) software. Only those authorized employees, contractors, and agents who need to know your Information in connection with the performance of their services are allowed to access this Information.</p><p>It is important for you to protect yourself against unauthorized access to your password and to your devices used to access our Services. You are responsible for keeping your password confidential. For example, ensure that you sign off when you have finished using a shared device.</p><p>Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your Information, we cannot guarantee the security of your Information transmitted to our Platform and any transmission is at your own risk.</p><p><br></p><p>CHANGES TO OUR POLICY</p><p>Our business changes constantly, and our Privacy Policy may therefore also need to change. We reserve the right to change the policy at any time. We will post the current version of this Privacy Policy on the Platform and each such change will be effective upon posting on the Platform or upon the date designated by us as the \\\"effective date\\\".</p><p>We may e-mail periodic reminders of our notices and conditions, but you should check our Platform frequently to see recent changes.</p><p>It is your obligation to regularly check the Privacy Policy. Your continued use of the Platform following any such change constitutes your agreement to this Privacy Policy as so modified</p><p><br></p><p>CONTACT INFORMATION</p><p>If you have any concerns, questions or comments about your Information or our Privacy Policy, please contact us&nbsp;with thorough description at following:</p>\",\n                       \"contactInfo\": \"<h2 class=\\\"ql-align-center\\\"><strong style=\\\"color: rgb(255, 194, 102);\\\">Your personal information is</strong><strong> </strong></h2><p><br></p><p><strong>safe with us, we will never disclose your information to anyone outside the aapkidokan.com except where we have your consent, and we may also disclose the information where:</strong></p><ul><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;To other companies who provide a service to us, For example, we may provide information to advertisers to help them reach the kind of audience they want to target and to enable us to comply with our commitments to our advertisers (e.g. by displaying their advertisements to a target audience).</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We will share your information with entities outside of the Services when we have your consent to do so or it is done at your direction.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information with our retail partners in order to provide and maintain the Services.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information with third parties to process information on our behalf or to provide certain services (such as delivery services, advertising services, or information to better tailor our services to you). For the purposes of this processing or provision of services, we may share your information with such third parties under appropriate confidentiality provisions.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;For legal purposes, we may share your information when we believe that the disclosure is reasonably necessary to (a) comply with applicable laws, regulations, legal process, or requests from law enforcement or regulatory authorities, (b) prevent, detect, or otherwise handle fraud, security, or technical issues, and (c) protect the safety, rights, or property of any person, the public, or aapkidokan.com.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information in connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business by another company. We may also share your information between and among aapkidokan.com and other companies under common control and ownership.</li></ul>\"\n                   }\n               },\n               \"driver\": {\n                   \"_id\": \"5d79f10ed22f1e78b7671d74\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"prince.kumar@enukesoftware.com\",\n                   \"password\": \"$2b$10$68KJiWoNIlfe0m27HVQZA.CIqb4qIF.ioMNsbiNcLt8f1s1EaIN26\",\n                   \"full_name\": \"PRINCE KUMAR\",\n                   \"contact_number\": \"8285724681\",\n                   \"address\": \"C 37 Najafgarh Nayabazar, Near BVM Public School\",\n                   \"created_at\": \"2019-09-12T07:17:34.858Z\",\n                   \"updated_at\": \"2020-03-19T12:14:06.318Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"fui46PA2ZTk:APA91bGDNaCm_0ZeT1Lq89xwx6PQDdUaHE4U5dSz22vk6ReWUx2HcvZv2P28M7079GA5Ud0OJUuk-CkPfCh2l8aJ0A2s5RTZ2CeaGUNlbbBTI5x8GNBmj07obxfU3LdeMiYx3L1bHg1u\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzlmMTBlZDIyZjFlNzhiNzY3MWQ3NCIsInR5cGUiOjQsImlhdCI6MTU4NDYyMDA0Nn0.ZRfBIdtxbgWyfPMbQHM4ouJEfs88VEz1YY2S2zXsZDQ\",\n                   \"percentageCommission\": 10\n               }\n           },\n           {\n               \"_id\": \"5dccea83ed31e91844278ed1\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.9210435,\n                           \"longitude\": 67.10559360000002\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"NA-Class 190/219\",\n                       \"locality\": \"Karachi\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.81780509999999,\n                           \"longitude\": 66.9847155\n                       },\n                       \"alias\": \"home\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"full_name\": \"Shakeel\",\n                       \"email\": \"hashir.ahmed@aapkidokan.com\",\n                       \"contact_number\": \"03142219941\",\n                       \"house_no\": \"Plot # 26 Oil Installation Area \",\n                       \"locality\": \"Shahrah e ghalib\",\n                       \"landmark\": \"Kemari\",\n                       \"gps_address\": \"burshane \",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 1,\n               \"is_express_delivery\": false,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 150,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"slot_id\": \"5dcbf585ed31e91844278e59\",\n               \"deliver_start_time\": \"2019-11-16T07:00:00.000Z\",\n               \"deliver_end_time\": \"2019-11-16T09:00:00.000Z\",\n               \"customer_id\": \"5dcce5e8ed31e91844278ecf\",\n               \"store_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"products\": [\n                   {\n                       \"pictures\": [\n                           \"005000143.jpg\"\n                       ],\n                       \"_id\": \"5dccea83ed31e91844278ed3\",\n                       \"product_id\": \"5d8085e7d22f1e78b76720d1\",\n                       \"size\": \"1.9 kg\",\n                       \"price\": 1622,\n                       \"count\": 1,\n                       \"name\": \"Nestle EveryDay Milk Powder \"\n                   },\n                   {\n                       \"pictures\": [\n                           \"00300045.jpg\"\n                       ],\n                       \"_id\": \"5dccea83ed31e91844278ed2\",\n                       \"product_id\": \"5d7cc650d22f1e78b7671f66\",\n                       \"size\": \"1 KG\",\n                       \"price\": 85,\n                       \"count\": 1,\n                       \"name\": \"Leela Sugar \"\n                   }\n               ],\n               \"total_amount\": 1707,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 1707,\n               \"commission_percentage\": 2,\n               \"admin_commission_amount\": 34.14,\n               \"store_payout_amount\": 1672.86,\n               \"order_id\": \"26d2730\",\n               \"created_at\": \"2019-11-14T05:47:47.289Z\",\n               \"updated_at\": \"2020-01-10T14:21:21.530Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5d79f10ed22f1e78b7671d74\",\n               \"store\": {\n                   \"_id\": \"5d7607c59b5f0f76ee4f68b0\",\n                   \"picture\": \"12.png\",\n                   \"has_express_delivery\": false,\n                   \"drivers\": [\n                       \"5d79f10ed22f1e78b7671d74\",\n                       \"5dea892ed85c19035ebf1238\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"12:00\",\n                       \"close_time\": \"21:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"ham.hassansiddiqui@gmail.com\",\n                       \"password\": \"$2b$10$yTWjJmy7DS2R6h8zyDr.6unwkX0teyzU50lT4pvoQo3NYTHZBKmQu\",\n                       \"full_name\": \"Hammad Hassan\",\n                       \"contact_number\": \"03333743790\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d7607c59b5f0f76ee4f68b1\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9210435,\n                               \"longitude\": 67.10559360000002\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e262d10d21fe166d8c93049\",\n                           \"shop_no\": \"NA-Class 190/219\",\n                           \"locality\": \"Karachi\",\n                           \"unique_link\": \"TKhr3\"\n                       }\n                   ],\n                   \"name\": \"METRO\",\n                   \"commission\": 3,\n                   \"created_at\": \"2019-09-09T08:05:25.721Z\",\n                   \"updated_at\": \"2020-03-05T06:26:57.905Z\",\n                   \"__v\": 0,\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzYwN2M1OWI1ZjBmNzZlZTRmNjhiMCIsInR5cGUiOjIsImlhdCI6MTU4MzM4ODM4NX0.4uZ9x7xPDnYiRisnZJ7a0UPep8LRYYOD8KXxgi6J-7o\",\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzYwN2M1OWI1ZjBmNzZlZTRmNjhiMCIsImlhdCI6MTU3ODkxMTA4Mn0.k-Ek52UwRftyj8hywTqFUneWb1kW8_pfocE0ayMaFZI\",\n                   \"storeCategory\": \"5e4fb5e3beee3369a6b32a0d\",\n                   \"delivery_charges\": [\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389a\",\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389b\",\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389c\",\n                           \"order_amount\": 1001,\n                           \"charges\": 30\n                       }\n                   ],\n                   \"storeInfo\": {\n                       \"faq\": \"<p>dfdf</p><p><br></p><p>a</p><p>d</p><p>s</p>\",\n                       \"termAndCondition\": \"<h2>Term and condition</h2><h2>Term and condition</h2><h2>Term and condition</h2><h2><br></h2>\",\n                       \"privacyAndPolicy\": \"<p>Last Updated: May 25, 2019</p><p>Thank you for using aapkidokan.com services. We are dedicated to provide you the best online shopping and delivery experience possible. This Privacy Policy outlines how we respect and value the trust you put in aapkidokan.com. This Policy applies regardless of how you access the aapkidokan.com platform - whether this is via a mobile app or web interface.</p><p><br></p><p>INFORMATION WE COLLECT</p><p>When you use our website or mobile application, you may provide us with information about yourself. For instance, when you create an account with aapkidokan.com you provide us with personal information like your name, email address, and phone number. And if you place an order with aapkidokan.com, we collect information including your address and the details of your order.</p><p>If you log into the services through a third-party service, both we and that third-party may receive some information about you and your use of the service. For example, if you choose to log into the services with your Facebook account, we may receive information from Facebook, such as your name, e-mail address, and public profile information about your contacts. We may also offer social sharing tools that let you share actions on the services with other websites and vice versa. In those cases, the providers of those tools may receive information about you when you use those tools. You should check the privacy policies of these third party services and your settings there for more information.</p><p>We use your contact information to send you offers based on your previous orders and your interests when you use the aapkidokan.com services, either through a browser or mobile app, we automatically receive some technical information about the hardware and software that is being used.</p><p><br></p><p>USE OF YOUR INFORMATION</p><p><strong> We may use the information we collect for various purposes including:</strong></p><ul><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Manage and improve the services aapkidokan.com provide to you</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Administer and operate your account</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Process your orders, receive payments for the orders</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Understand your shopping behavior to develop and improve our products and services and offer you customized content (including advertising and promotions), such as prominently displaying items you purchase frequently</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Provide customer service, respond to your communications and requests, and resolve complaint and disputes and contact you about your use of appkidokan.com services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">Inform you about online offers, products, services and important changes to the Website and our services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">In our efforts to continually improve our product and service offerings, we collect and analyze demographic and profile data about our users' activity on our Website.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">We identify and use your IP address to help diagnose problems with our server, and to administer our Website. Your IP address is also used to help identify you and to gather broad demographic information.</li></ul><p>DISCLOSING YOUR PERSONAL INFORMATION</p><p><strong> Your personal information is safe with us, we will never disclose your information to anyone outside the aapkidokan.com except where we have your consent, and we may also disclose the information where:</strong></p><ul><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> To other companies who provide a service to us, For example, we may provide information to advertisers to help them reach the kind of audience they want to target and to enable us to comply with our commitments to our advertisers (e.g. by displaying their advertisements to a target audience).</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We will share your information with entities outside of the Services when we have your consent to do so or it is done at your direction.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information with our retail partners in order to provide and maintain the Services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information with third parties to process information on our behalf or to provide certain services (such as delivery services, advertising services, or information to better tailor our services to you). For the purposes of this processing or provision of services, we may share your information with such third parties under appropriate confidentiality provisions.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> For legal purposes, we may share your information when we believe that the disclosure is reasonably necessary to (a) comply with applicable laws, regulations, legal process, or requests from law enforcement or regulatory authorities, (b) prevent, detect, or otherwise handle fraud, security, or technical issues, and (c) protect the safety, rights, or property of any person, the public, or aapkidokan.com.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information in connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business by another company. We may also share your information between and among aapkidokan.com and other companies under common control and ownership.</li></ul><p>COOKIES AND OTHER TRACKING TECHNOLOGIES</p><p>We also use cookies to allow you to enter your password less frequently during a session. Cookies can also help us provide information that is targeted to your interests.</p><p>Cookies are small text files that are sent by your computer when you access our services through a browser. We may use session cookies (which expire when you close your browser), persistent cookies (which expire when you choose to clear them from your browser), and other identifiers to collect information from your browser or device that helps us personalize your experience, measure, manage, and display advertising on the services or on other services; understand your usage of the Services and other services in order to serve customized ads and remember that you are logged into the Services. By using your browser settings, you may block cookies or adjust settings for notifications when a cookie is set.</p><p>Additionally, you may encounter \\\"cookies\\\" or other similar devices on certain pages of the Website that are placed by third parties. We do not control the use of cookies by third parties</p><p><br></p><p>WHAT SECURITY MEASURES WE APPLY</p><p>We maintain commercially reasonable technical, administrative, and physical safeguards to ensure your Information is treated securely and in accordance with this Privacy Policy, and to protect against unauthorized access or alteration to, disclosure, or destruction of your Information. We may, for example, use encryption technology to secure your Information by utilizing Secure Socket Layer (SSL) software. Only those authorized employees, contractors, and agents who need to know your Information in connection with the performance of their services are allowed to access this Information.</p><p>It is important for you to protect yourself against unauthorized access to your password and to your devices used to access our Services. You are responsible for keeping your password confidential. For example, ensure that you sign off when you have finished using a shared device.</p><p>Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your Information, we cannot guarantee the security of your Information transmitted to our Platform and any transmission is at your own risk.</p><p><br></p><p>CHANGES TO OUR POLICY</p><p>Our business changes constantly, and our Privacy Policy may therefore also need to change. We reserve the right to change the policy at any time. We will post the current version of this Privacy Policy on the Platform and each such change will be effective upon posting on the Platform or upon the date designated by us as the \\\"effective date\\\".</p><p>We may e-mail periodic reminders of our notices and conditions, but you should check our Platform frequently to see recent changes.</p><p>It is your obligation to regularly check the Privacy Policy. Your continued use of the Platform following any such change constitutes your agreement to this Privacy Policy as so modified</p><p><br></p><p>CONTACT INFORMATION</p><p>If you have any concerns, questions or comments about your Information or our Privacy Policy, please contact us&nbsp;with thorough description at following:</p>\",\n                       \"contactInfo\": \"<h2 class=\\\"ql-align-center\\\"><strong style=\\\"color: rgb(255, 194, 102);\\\">Your personal information is</strong><strong> </strong></h2><p><br></p><p><strong>safe with us, we will never disclose your information to anyone outside the aapkidokan.com except where we have your consent, and we may also disclose the information where:</strong></p><ul><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;To other companies who provide a service to us, For example, we may provide information to advertisers to help them reach the kind of audience they want to target and to enable us to comply with our commitments to our advertisers (e.g. by displaying their advertisements to a target audience).</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We will share your information with entities outside of the Services when we have your consent to do so or it is done at your direction.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information with our retail partners in order to provide and maintain the Services.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information with third parties to process information on our behalf or to provide certain services (such as delivery services, advertising services, or information to better tailor our services to you). For the purposes of this processing or provision of services, we may share your information with such third parties under appropriate confidentiality provisions.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;For legal purposes, we may share your information when we believe that the disclosure is reasonably necessary to (a) comply with applicable laws, regulations, legal process, or requests from law enforcement or regulatory authorities, (b) prevent, detect, or otherwise handle fraud, security, or technical issues, and (c) protect the safety, rights, or property of any person, the public, or aapkidokan.com.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information in connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business by another company. We may also share your information between and among aapkidokan.com and other companies under common control and ownership.</li></ul>\"\n                   }\n               },\n               \"driver\": {\n                   \"_id\": \"5d79f10ed22f1e78b7671d74\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"prince.kumar@enukesoftware.com\",\n                   \"password\": \"$2b$10$68KJiWoNIlfe0m27HVQZA.CIqb4qIF.ioMNsbiNcLt8f1s1EaIN26\",\n                   \"full_name\": \"PRINCE KUMAR\",\n                   \"contact_number\": \"8285724681\",\n                   \"address\": \"C 37 Najafgarh Nayabazar, Near BVM Public School\",\n                   \"created_at\": \"2019-09-12T07:17:34.858Z\",\n                   \"updated_at\": \"2020-03-19T12:14:06.318Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"fui46PA2ZTk:APA91bGDNaCm_0ZeT1Lq89xwx6PQDdUaHE4U5dSz22vk6ReWUx2HcvZv2P28M7079GA5Ud0OJUuk-CkPfCh2l8aJ0A2s5RTZ2CeaGUNlbbBTI5x8GNBmj07obxfU3LdeMiYx3L1bHg1u\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzlmMTBlZDIyZjFlNzhiNzY3MWQ3NCIsInR5cGUiOjQsImlhdCI6MTU4NDYyMDA0Nn0.ZRfBIdtxbgWyfPMbQHM4ouJEfs88VEz1YY2S2zXsZDQ\",\n                   \"percentageCommission\": 10\n               }\n           },\n           {\n               \"_id\": \"5dea98bd68a40316a20bf8ab\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.9128145,\n                           \"longitude\": 67.0802142\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"37\",\n                       \"locality\": \"Gulshan\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.86092389611868,\n                           \"longitude\": 67.00235527381894\n                       },\n                       \"alias\": \"home\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"full_name\": \"Khushal\",\n                       \"email\": \"khushalp32@gmail.com\",\n                       \"contact_number\": \"9711669906\",\n                       \"locality\": \"Karachi block 1\",\n                       \"house_no\": \"123\",\n                       \"gps_address\": \"Data Center, Bhimpura Karachi, Karachi City, Sindh, Pakistan\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 1,\n               \"is_express_delivery\": false,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 150,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"slot_id\": \"5de64674d85c19035ebf06d9\",\n               \"deliver_start_time\": \"2019-12-07T07:00:00.000Z\",\n               \"deliver_end_time\": \"2019-12-07T09:00:00.000Z\",\n               \"customer_id\": \"5ddd17e6d85c19035ebf0338\",\n               \"store_id\": \"5d9eda647a30b1642ce9cb77\",\n               \"products\": [\n                   {\n                       \"pictures\": [],\n                       \"_id\": \"5dea98bd68a40316a20bf8ac\",\n                       \"product_id\": \"5de90bced85c19035ebf11d3\",\n                       \"size\": \"5kg\",\n                       \"price\": 960,\n                       \"count\": 2,\n                       \"name\": \"Laar - Lazzat Basmati Rice (Sella) 5kg\"\n                   }\n               ],\n               \"total_amount\": 1920,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 1920,\n               \"commission_percentage\": 1,\n               \"admin_commission_amount\": 19.2,\n               \"store_payout_amount\": 1900.8,\n               \"order_id\": \"5f8fd26\",\n               \"created_at\": \"2019-12-06T18:06:53.519Z\",\n               \"updated_at\": \"2019-12-07T17:30:15.985Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5d9dda22d22f1e78b76728c3\",\n               \"store\": {\n                   \"_id\": \"5d9eda647a30b1642ce9cb77\",\n                   \"picture\": \"Saveway Store logo.jpg\",\n                   \"has_express_delivery\": true,\n                   \"drivers\": [\n                       \"5d9dda22d22f1e78b76728c3\",\n                       \"5dea53edd85c19035ebf121d\",\n                       \"5dea5445d85c19035ebf121e\",\n                       \"5dea5479d85c19035ebf121f\",\n                       \"5dea892ed85c19035ebf1238\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"11:00\",\n                       \"close_time\": \"23:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"nasirahmed110@gmail.com\",\n                       \"password\": \"$2b$10$79BZrJpB2WeHAFRBN5.AFuHJPDse3vRUyBEa3yuYyB9TowG8GnGMm\",\n                       \"full_name\": \"Dr. Farooq \",\n                       \"contact_number\": \"03218994366\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d9eda647a30b1642ce9cb78\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e262d43d21fe166d8c9304a\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Karachi\",\n                           \"gps_address\": \"saveway\",\n                           \"unique_link\": \"Zsm7Em\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1229\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"53iRt\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1228\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea5254d85c19035ebf1217\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"53iRx\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1227\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52b5d85c19035ebf1218\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"53iRy\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1226\",\n                           \"coordinates\": {\n                               \"longitude\": 67.0802142,\n                               \"latitude\": 24.9128145\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52bfd85c19035ebf1219\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"53iRz\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1225\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52d0d85c19035ebf121a\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"22H1Aw\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1224\",\n                           \"coordinates\": {\n                               \"longitude\": 67.0802142,\n                               \"latitude\": 24.9128145\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52e0d85c19035ebf121b\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"22H1Az\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1223\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52eed85c19035ebf121c\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"22H1AC\"\n                       }\n                   ],\n                   \"name\": \"Saveway Super Store\",\n                   \"commission\": 1,\n                   \"created_at\": \"2019-10-10T07:14:44.355Z\",\n                   \"updated_at\": \"2020-02-24T12:32:19.381Z\",\n                   \"__v\": 0,\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOWVkYTY0N2EzMGIxNjQyY2U5Y2I3NyIsInR5cGUiOjIsImlhdCI6MTU3ODk5Mjk1Mn0.Cwk6bEQ73cP-KAMUihbhTuXW4XEScnqEAsm9F8JsFtk\",\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOWVkYTY0N2EzMGIxNjQyY2U5Y2I3NyIsImlhdCI6MTU3ODkxMTMzMX0.nMJVQksXhU572y57lNHSl8Bor3ldNtx1jHPtN0OZIBs\",\n                   \"storeCategory\": \"5e4fb5e3beee3369a6b32a0d\",\n                   \"delivery_charges\": [\n                       {\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"order_amount\": 1000,\n                           \"charges\": 50\n                       }\n                   ]\n               },\n               \"driver\": {\n                   \"_id\": \"5d9dda22d22f1e78b76728c3\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"nasir.ahmed@aapkidokan.com\",\n                   \"password\": \"$2b$10$Se2zNSy8Ct3UA788zAdwSO2NkQeqhMKZcGpTAi2xXuTDkeelIRUdC\",\n                   \"full_name\": \"Nasir Ahmed\",\n                   \"contact_number\": \"03218994366\",\n                   \"address\": \"Bait-ul-Mukaram Masjid, B29, Master Square، University Rd, Block 13/A Block 13 A Opp، Karachi, Karachi City, Sindh, Pakistan\",\n                   \"driving_license\": \"154512154956\",\n                   \"created_at\": \"2019-10-09T13:01:22.730Z\",\n                   \"updated_at\": \"2020-01-15T09:08:51.960Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"em_1AecwxWg:APA91bE-u0HYQ9_7z3RNl9KrlA86vY5DSyKmzSNgFu1D8YFIjrtzvZtQ65QDjbZEbFegYjZ_QTqgp3TcF720_015Q52iXoSTst87VnG0WXa8GleHsHB1g_KPqHojtQ5mYxeCcmPTy803\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOWRkYTIyZDIyZjFlNzhiNzY3MjhjMyIsInR5cGUiOjQsImlhdCI6MTU3OTA3OTMyN30.WRLVWh3--pe7H8e9-mWdFgSrH3Zlil4f_wLSrK6Vn9s\"\n               }\n           },\n           {\n               \"_id\": \"5deb555468a40316a20bf916\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.9128145,\n                           \"longitude\": 67.0802142\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5dea52b5d85c19035ebf1218\",\n                       \"shop_no\": \"37\",\n                       \"locality\": \"Gulshan\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.90920783669007,\n                           \"longitude\": 67.1299919120278\n                       },\n                       \"alias\": \"home\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"full_name\": \"Najam ul Saqib\",\n                       \"email\": \"najam.sahto@gmail.com\",\n                       \"contact_number\": \"03012999901\",\n                       \"locality\": \"Gulstan-e-Johar, Block 18\",\n                       \"landmark\": \"Rabia City\",\n                       \"house_no\": \"Flat 506, Bait ul Hina\",\n                       \"gps_address\": \"32, Block 18 Gulistan-e-Johar, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 1,\n               \"is_express_delivery\": true,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 150,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"deliver_start_time\": \"2019-12-07T07:31:32.364Z\",\n               \"deliver_end_time\": \"2019-12-07T09:31:32.365Z\",\n               \"customer_id\": \"5dea7a2bd85c19035ebf122b\",\n               \"store_id\": \"5d9eda647a30b1642ce9cb77\",\n               \"products\": [\n                   {\n                       \"pictures\": [\n                           \"003000359.jpeg\"\n                       ],\n                       \"_id\": \"5deb555468a40316a20bf918\",\n                       \"product_id\": \"5de90bced85c19035ebf11d3\",\n                       \"size\": \"5kg\",\n                       \"price\": 960,\n                       \"count\": 1,\n                       \"name\": \"Laar - Lazzat Basmati Rice (Sella) 5kg\"\n                   },\n                   {\n                       \"pictures\": [\n                           \"009000201.jpg\"\n                       ],\n                       \"_id\": \"5deb555468a40316a20bf917\",\n                       \"product_id\": \"5de51973d85c19035ebf05bf\",\n                       \"size\": \"500 ml\",\n                       \"price\": 350,\n                       \"count\": 1,\n                       \"name\": \"Dettol - Kitchen Cleaner 500 ml\"\n                   }\n               ],\n               \"total_amount\": 1310,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 1310,\n               \"commission_percentage\": 1,\n               \"admin_commission_amount\": 13.1,\n               \"store_payout_amount\": 1296.9,\n               \"order_id\": \"6b42811\",\n               \"created_at\": \"2019-12-07T07:31:32.381Z\",\n               \"updated_at\": \"2019-12-07T07:34:02.340Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5d9dda22d22f1e78b76728c3\",\n               \"store\": {\n                   \"_id\": \"5d9eda647a30b1642ce9cb77\",\n                   \"picture\": \"Saveway Store logo.jpg\",\n                   \"has_express_delivery\": true,\n                   \"drivers\": [\n                       \"5d9dda22d22f1e78b76728c3\",\n                       \"5dea53edd85c19035ebf121d\",\n                       \"5dea5445d85c19035ebf121e\",\n                       \"5dea5479d85c19035ebf121f\",\n                       \"5dea892ed85c19035ebf1238\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"11:00\",\n                       \"close_time\": \"23:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"nasirahmed110@gmail.com\",\n                       \"password\": \"$2b$10$79BZrJpB2WeHAFRBN5.AFuHJPDse3vRUyBEa3yuYyB9TowG8GnGMm\",\n                       \"full_name\": \"Dr. Farooq \",\n                       \"contact_number\": \"03218994366\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d9eda647a30b1642ce9cb78\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e262d43d21fe166d8c9304a\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Karachi\",\n                           \"gps_address\": \"saveway\",\n                           \"unique_link\": \"Zsm7Em\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1229\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"53iRt\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1228\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea5254d85c19035ebf1217\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"53iRx\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1227\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52b5d85c19035ebf1218\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"53iRy\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1226\",\n                           \"coordinates\": {\n                               \"longitude\": 67.0802142,\n                               \"latitude\": 24.9128145\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52bfd85c19035ebf1219\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"53iRz\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1225\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52d0d85c19035ebf121a\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"22H1Aw\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1224\",\n                           \"coordinates\": {\n                               \"longitude\": 67.0802142,\n                               \"latitude\": 24.9128145\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52e0d85c19035ebf121b\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"22H1Az\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1223\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52eed85c19035ebf121c\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"22H1AC\"\n                       }\n                   ],\n                   \"name\": \"Saveway Super Store\",\n                   \"commission\": 1,\n                   \"created_at\": \"2019-10-10T07:14:44.355Z\",\n                   \"updated_at\": \"2020-02-24T12:32:19.381Z\",\n                   \"__v\": 0,\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOWVkYTY0N2EzMGIxNjQyY2U5Y2I3NyIsInR5cGUiOjIsImlhdCI6MTU3ODk5Mjk1Mn0.Cwk6bEQ73cP-KAMUihbhTuXW4XEScnqEAsm9F8JsFtk\",\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOWVkYTY0N2EzMGIxNjQyY2U5Y2I3NyIsImlhdCI6MTU3ODkxMTMzMX0.nMJVQksXhU572y57lNHSl8Bor3ldNtx1jHPtN0OZIBs\",\n                   \"storeCategory\": \"5e4fb5e3beee3369a6b32a0d\",\n                   \"delivery_charges\": [\n                       {\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"order_amount\": 1000,\n                           \"charges\": 50\n                       }\n                   ]\n               },\n               \"driver\": {\n                   \"_id\": \"5d9dda22d22f1e78b76728c3\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"nasir.ahmed@aapkidokan.com\",\n                   \"password\": \"$2b$10$Se2zNSy8Ct3UA788zAdwSO2NkQeqhMKZcGpTAi2xXuTDkeelIRUdC\",\n                   \"full_name\": \"Nasir Ahmed\",\n                   \"contact_number\": \"03218994366\",\n                   \"address\": \"Bait-ul-Mukaram Masjid, B29, Master Square، University Rd, Block 13/A Block 13 A Opp، Karachi, Karachi City, Sindh, Pakistan\",\n                   \"driving_license\": \"154512154956\",\n                   \"created_at\": \"2019-10-09T13:01:22.730Z\",\n                   \"updated_at\": \"2020-01-15T09:08:51.960Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"em_1AecwxWg:APA91bE-u0HYQ9_7z3RNl9KrlA86vY5DSyKmzSNgFu1D8YFIjrtzvZtQ65QDjbZEbFegYjZ_QTqgp3TcF720_015Q52iXoSTst87VnG0WXa8GleHsHB1g_KPqHojtQ5mYxeCcmPTy803\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOWRkYTIyZDIyZjFlNzhiNzY3MjhjMyIsInR5cGUiOjQsImlhdCI6MTU3OTA3OTMyN30.WRLVWh3--pe7H8e9-mWdFgSrH3Zlil4f_wLSrK6Vn9s\"\n               }\n           },\n           {\n               \"_id\": \"5df220cee1c7be6b429732ca\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.9128145,\n                           \"longitude\": 67.0802142\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"37\",\n                       \"locality\": \"Gulshan\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.8607,\n                           \"longitude\": 67.0011\n                       },\n                       \"alias\": \"home\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"full_name\": \"khushal\",\n                       \"email\": \"test@gmail.com\",\n                       \"contact_number\": \"9711669906\",\n                       \"house_no\": \"11\",\n                       \"locality\": \"22\",\n                       \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 1,\n               \"is_express_delivery\": false,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 200,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"slot_id\": \"5de8026cd85c19035ebf1169\",\n               \"deliver_start_time\": \"2019-12-12T13:00:00.000Z\",\n               \"deliver_end_time\": \"2019-12-12T15:00:00.000Z\",\n               \"customer_id\": \"5ddd1734d85c19035ebf0336\",\n               \"store_id\": \"5d9eda647a30b1642ce9cb77\",\n               \"products\": [\n                   {\n                       \"pictures\": [\n                           \"0030006151.jpg\"\n                       ],\n                       \"_id\": \"5df220cee1c7be6b429732cb\",\n                       \"product_id\": \"5dd3d02bed31e9184427931f\",\n                       \"size\": \"100 gm\",\n                       \"price\": 65,\n                       \"count\": 1,\n                       \"name\": \"National - Coriander Powder 100 gm\"\n                   }\n               ],\n               \"total_amount\": 65,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 65,\n               \"commission_percentage\": 1,\n               \"admin_commission_amount\": 0.65,\n               \"store_payout_amount\": 64.35,\n               \"order_id\": \"71733d1\",\n               \"created_at\": \"2019-12-12T11:13:18.763Z\",\n               \"updated_at\": \"2019-12-16T07:22:31.951Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5d9dda22d22f1e78b76728c3\",\n               \"store\": {\n                   \"_id\": \"5d9eda647a30b1642ce9cb77\",\n                   \"picture\": \"Saveway Store logo.jpg\",\n                   \"has_express_delivery\": true,\n                   \"drivers\": [\n                       \"5d9dda22d22f1e78b76728c3\",\n                       \"5dea53edd85c19035ebf121d\",\n                       \"5dea5445d85c19035ebf121e\",\n                       \"5dea5479d85c19035ebf121f\",\n                       \"5dea892ed85c19035ebf1238\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"11:00\",\n                       \"close_time\": \"23:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"nasirahmed110@gmail.com\",\n                       \"password\": \"$2b$10$79BZrJpB2WeHAFRBN5.AFuHJPDse3vRUyBEa3yuYyB9TowG8GnGMm\",\n                       \"full_name\": \"Dr. Farooq \",\n                       \"contact_number\": \"03218994366\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d9eda647a30b1642ce9cb78\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e262d43d21fe166d8c9304a\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Karachi\",\n                           \"gps_address\": \"saveway\",\n                           \"unique_link\": \"Zsm7Em\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1229\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"53iRt\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1228\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea5254d85c19035ebf1217\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"53iRx\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1227\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52b5d85c19035ebf1218\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"53iRy\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1226\",\n                           \"coordinates\": {\n                               \"longitude\": 67.0802142,\n                               \"latitude\": 24.9128145\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52bfd85c19035ebf1219\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"53iRz\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1225\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52d0d85c19035ebf121a\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"22H1Aw\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1224\",\n                           \"coordinates\": {\n                               \"longitude\": 67.0802142,\n                               \"latitude\": 24.9128145\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52e0d85c19035ebf121b\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"22H1Az\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1223\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52eed85c19035ebf121c\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"22H1AC\"\n                       }\n                   ],\n                   \"name\": \"Saveway Super Store\",\n                   \"commission\": 1,\n                   \"created_at\": \"2019-10-10T07:14:44.355Z\",\n                   \"updated_at\": \"2020-02-24T12:32:19.381Z\",\n                   \"__v\": 0,\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOWVkYTY0N2EzMGIxNjQyY2U5Y2I3NyIsInR5cGUiOjIsImlhdCI6MTU3ODk5Mjk1Mn0.Cwk6bEQ73cP-KAMUihbhTuXW4XEScnqEAsm9F8JsFtk\",\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOWVkYTY0N2EzMGIxNjQyY2U5Y2I3NyIsImlhdCI6MTU3ODkxMTMzMX0.nMJVQksXhU572y57lNHSl8Bor3ldNtx1jHPtN0OZIBs\",\n                   \"storeCategory\": \"5e4fb5e3beee3369a6b32a0d\",\n                   \"delivery_charges\": [\n                       {\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"order_amount\": 1000,\n                           \"charges\": 50\n                       }\n                   ]\n               },\n               \"driver\": {\n                   \"_id\": \"5d9dda22d22f1e78b76728c3\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"nasir.ahmed@aapkidokan.com\",\n                   \"password\": \"$2b$10$Se2zNSy8Ct3UA788zAdwSO2NkQeqhMKZcGpTAi2xXuTDkeelIRUdC\",\n                   \"full_name\": \"Nasir Ahmed\",\n                   \"contact_number\": \"03218994366\",\n                   \"address\": \"Bait-ul-Mukaram Masjid, B29, Master Square، University Rd, Block 13/A Block 13 A Opp، Karachi, Karachi City, Sindh, Pakistan\",\n                   \"driving_license\": \"154512154956\",\n                   \"created_at\": \"2019-10-09T13:01:22.730Z\",\n                   \"updated_at\": \"2020-01-15T09:08:51.960Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"em_1AecwxWg:APA91bE-u0HYQ9_7z3RNl9KrlA86vY5DSyKmzSNgFu1D8YFIjrtzvZtQ65QDjbZEbFegYjZ_QTqgp3TcF720_015Q52iXoSTst87VnG0WXa8GleHsHB1g_KPqHojtQ5mYxeCcmPTy803\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOWRkYTIyZDIyZjFlNzhiNzY3MjhjMyIsInR5cGUiOjQsImlhdCI6MTU3OTA3OTMyN30.WRLVWh3--pe7H8e9-mWdFgSrH3Zlil4f_wLSrK6Vn9s\"\n               }\n           },\n           {\n               \"_id\": \"5df22110e1a77a6b60162b5e\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.9128145,\n                           \"longitude\": 67.0802142\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"37\",\n                       \"locality\": \"Gulshan\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.8607,\n                           \"longitude\": 67.0011\n                       },\n                       \"alias\": \"home\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"full_name\": \"khushal\",\n                       \"email\": \"test@gmail.com\",\n                       \"contact_number\": \"9711669906\",\n                       \"house_no\": \"11\",\n                       \"locality\": \"22\",\n                       \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 1,\n               \"is_express_delivery\": false,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 200,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"slot_id\": \"5de8026cd85c19035ebf1169\",\n               \"deliver_start_time\": \"2019-12-12T13:00:00.000Z\",\n               \"deliver_end_time\": \"2019-12-12T15:00:00.000Z\",\n               \"customer_id\": \"5ddd1734d85c19035ebf0336\",\n               \"store_id\": \"5d9eda647a30b1642ce9cb77\",\n               \"products\": [\n                   {\n                       \"pictures\": [\n                           \"009000201.jpg\"\n                       ],\n                       \"_id\": \"5df22110e1a77a6b60162b5f\",\n                       \"product_id\": \"5de51973d85c19035ebf05bf\",\n                       \"size\": \"500 ml\",\n                       \"price\": 350,\n                       \"count\": 1,\n                       \"name\": \"Dettol - Kitchen Cleaner 500 ml\"\n                   }\n               ],\n               \"total_amount\": 350,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 350,\n               \"commission_percentage\": 1,\n               \"admin_commission_amount\": 3.5,\n               \"store_payout_amount\": 346.5,\n               \"order_id\": \"a42ab39\",\n               \"created_at\": \"2019-12-12T11:14:24.491Z\",\n               \"updated_at\": \"2019-12-16T07:22:27.674Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5d9dda22d22f1e78b76728c3\",\n               \"store\": {\n                   \"_id\": \"5d9eda647a30b1642ce9cb77\",\n                   \"picture\": \"Saveway Store logo.jpg\",\n                   \"has_express_delivery\": true,\n                   \"drivers\": [\n                       \"5d9dda22d22f1e78b76728c3\",\n                       \"5dea53edd85c19035ebf121d\",\n                       \"5dea5445d85c19035ebf121e\",\n                       \"5dea5479d85c19035ebf121f\",\n                       \"5dea892ed85c19035ebf1238\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"11:00\",\n                       \"close_time\": \"23:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"nasirahmed110@gmail.com\",\n                       \"password\": \"$2b$10$79BZrJpB2WeHAFRBN5.AFuHJPDse3vRUyBEa3yuYyB9TowG8GnGMm\",\n                       \"full_name\": \"Dr. Farooq \",\n                       \"contact_number\": \"03218994366\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d9eda647a30b1642ce9cb78\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e262d43d21fe166d8c9304a\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Karachi\",\n                           \"gps_address\": \"saveway\",\n                           \"unique_link\": \"Zsm7Em\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1229\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"53iRt\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1228\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea5254d85c19035ebf1217\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"53iRx\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1227\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52b5d85c19035ebf1218\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"53iRy\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1226\",\n                           \"coordinates\": {\n                               \"longitude\": 67.0802142,\n                               \"latitude\": 24.9128145\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52bfd85c19035ebf1219\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"53iRz\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1225\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52d0d85c19035ebf121a\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"22H1Aw\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1224\",\n                           \"coordinates\": {\n                               \"longitude\": 67.0802142,\n                               \"latitude\": 24.9128145\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52e0d85c19035ebf121b\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"22H1Az\"\n                       },\n                       {\n                           \"_id\": \"5dea5605d85c19035ebf1223\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9128145,\n                               \"longitude\": 67.0802142\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5dea52eed85c19035ebf121c\",\n                           \"shop_no\": \"37\",\n                           \"locality\": \"Gulshan\",\n                           \"unique_link\": \"22H1AC\"\n                       }\n                   ],\n                   \"name\": \"Saveway Super Store\",\n                   \"commission\": 1,\n                   \"created_at\": \"2019-10-10T07:14:44.355Z\",\n                   \"updated_at\": \"2020-02-24T12:32:19.381Z\",\n                   \"__v\": 0,\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOWVkYTY0N2EzMGIxNjQyY2U5Y2I3NyIsInR5cGUiOjIsImlhdCI6MTU3ODk5Mjk1Mn0.Cwk6bEQ73cP-KAMUihbhTuXW4XEScnqEAsm9F8JsFtk\",\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOWVkYTY0N2EzMGIxNjQyY2U5Y2I3NyIsImlhdCI6MTU3ODkxMTMzMX0.nMJVQksXhU572y57lNHSl8Bor3ldNtx1jHPtN0OZIBs\",\n                   \"storeCategory\": \"5e4fb5e3beee3369a6b32a0d\",\n                   \"delivery_charges\": [\n                       {\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"order_amount\": 1000,\n                           \"charges\": 50\n                       }\n                   ]\n               },\n               \"driver\": {\n                   \"_id\": \"5d9dda22d22f1e78b76728c3\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"nasir.ahmed@aapkidokan.com\",\n                   \"password\": \"$2b$10$Se2zNSy8Ct3UA788zAdwSO2NkQeqhMKZcGpTAi2xXuTDkeelIRUdC\",\n                   \"full_name\": \"Nasir Ahmed\",\n                   \"contact_number\": \"03218994366\",\n                   \"address\": \"Bait-ul-Mukaram Masjid, B29, Master Square، University Rd, Block 13/A Block 13 A Opp، Karachi, Karachi City, Sindh, Pakistan\",\n                   \"driving_license\": \"154512154956\",\n                   \"created_at\": \"2019-10-09T13:01:22.730Z\",\n                   \"updated_at\": \"2020-01-15T09:08:51.960Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"em_1AecwxWg:APA91bE-u0HYQ9_7z3RNl9KrlA86vY5DSyKmzSNgFu1D8YFIjrtzvZtQ65QDjbZEbFegYjZ_QTqgp3TcF720_015Q52iXoSTst87VnG0WXa8GleHsHB1g_KPqHojtQ5mYxeCcmPTy803\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOWRkYTIyZDIyZjFlNzhiNzY3MjhjMyIsInR5cGUiOjQsImlhdCI6MTU3OTA3OTMyN30.WRLVWh3--pe7H8e9-mWdFgSrH3Zlil4f_wLSrK6Vn9s\"\n               }\n           },\n           {\n               \"_id\": \"5df52ef74648a37afa44d0ff\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.9210435,\n                           \"longitude\": 67.10559360000002\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"NA-Class 190/219\",\n                       \"locality\": \"Karachi\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.90920783669007,\n                           \"longitude\": 67.1299919120278\n                       },\n                       \"alias\": \"home\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"full_name\": \"Najam ul Saqib\",\n                       \"email\": \"najam.sahto@gmail.com\",\n                       \"contact_number\": \"03012999901\",\n                       \"locality\": \"Gulstan-e-Johar, Block 18\",\n                       \"landmark\": \"Rabia City\",\n                       \"house_no\": \"Flat 506, Bait ul Hina\",\n                       \"gps_address\": \"32, Block 18 Gulistan-e-Johar, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 1,\n               \"is_express_delivery\": false,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 200,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"slot_id\": \"5debf6ec68a40316a20bfb05\",\n               \"deliver_start_time\": \"2019-12-15T09:00:00.000Z\",\n               \"deliver_end_time\": \"2019-12-15T11:00:00.000Z\",\n               \"customer_id\": \"5dea7a2bd85c19035ebf122b\",\n               \"store_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"products\": [\n                   {\n                       \"pictures\": [\n                           \"00200056.jpg\"\n                       ],\n                       \"_id\": \"5df52ef74648a37afa44d100\",\n                       \"product_id\": \"5d788f0ed22f1e78b7671c3a\",\n                       \"size\": \"92.1gm\",\n                       \"price\": 670,\n                       \"count\": 1,\n                       \"name\": \"Doritos Spicy Sweet Chili\"\n                   }\n               ],\n               \"total_amount\": 670,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 670,\n               \"commission_percentage\": 2,\n               \"admin_commission_amount\": 13.4,\n               \"store_payout_amount\": 656.6,\n               \"order_id\": \"94b0191\",\n               \"created_at\": \"2019-12-14T18:50:31.963Z\",\n               \"updated_at\": \"2019-12-21T08:38:34.421Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5dea892ed85c19035ebf1238\",\n               \"store\": {\n                   \"_id\": \"5d7607c59b5f0f76ee4f68b0\",\n                   \"picture\": \"12.png\",\n                   \"has_express_delivery\": false,\n                   \"drivers\": [\n                       \"5d79f10ed22f1e78b7671d74\",\n                       \"5dea892ed85c19035ebf1238\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"12:00\",\n                       \"close_time\": \"21:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"ham.hassansiddiqui@gmail.com\",\n                       \"password\": \"$2b$10$yTWjJmy7DS2R6h8zyDr.6unwkX0teyzU50lT4pvoQo3NYTHZBKmQu\",\n                       \"full_name\": \"Hammad Hassan\",\n                       \"contact_number\": \"03333743790\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d7607c59b5f0f76ee4f68b1\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9210435,\n                               \"longitude\": 67.10559360000002\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e262d10d21fe166d8c93049\",\n                           \"shop_no\": \"NA-Class 190/219\",\n                           \"locality\": \"Karachi\",\n                           \"unique_link\": \"TKhr3\"\n                       }\n                   ],\n                   \"name\": \"METRO\",\n                   \"commission\": 3,\n                   \"created_at\": \"2019-09-09T08:05:25.721Z\",\n                   \"updated_at\": \"2020-03-05T06:26:57.905Z\",\n                   \"__v\": 0,\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzYwN2M1OWI1ZjBmNzZlZTRmNjhiMCIsInR5cGUiOjIsImlhdCI6MTU4MzM4ODM4NX0.4uZ9x7xPDnYiRisnZJ7a0UPep8LRYYOD8KXxgi6J-7o\",\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzYwN2M1OWI1ZjBmNzZlZTRmNjhiMCIsImlhdCI6MTU3ODkxMTA4Mn0.k-Ek52UwRftyj8hywTqFUneWb1kW8_pfocE0ayMaFZI\",\n                   \"storeCategory\": \"5e4fb5e3beee3369a6b32a0d\",\n                   \"delivery_charges\": [\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389a\",\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389b\",\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389c\",\n                           \"order_amount\": 1001,\n                           \"charges\": 30\n                       }\n                   ],\n                   \"storeInfo\": {\n                       \"faq\": \"<p>dfdf</p><p><br></p><p>a</p><p>d</p><p>s</p>\",\n                       \"termAndCondition\": \"<h2>Term and condition</h2><h2>Term and condition</h2><h2>Term and condition</h2><h2><br></h2>\",\n                       \"privacyAndPolicy\": \"<p>Last Updated: May 25, 2019</p><p>Thank you for using aapkidokan.com services. We are dedicated to provide you the best online shopping and delivery experience possible. This Privacy Policy outlines how we respect and value the trust you put in aapkidokan.com. This Policy applies regardless of how you access the aapkidokan.com platform - whether this is via a mobile app or web interface.</p><p><br></p><p>INFORMATION WE COLLECT</p><p>When you use our website or mobile application, you may provide us with information about yourself. For instance, when you create an account with aapkidokan.com you provide us with personal information like your name, email address, and phone number. And if you place an order with aapkidokan.com, we collect information including your address and the details of your order.</p><p>If you log into the services through a third-party service, both we and that third-party may receive some information about you and your use of the service. For example, if you choose to log into the services with your Facebook account, we may receive information from Facebook, such as your name, e-mail address, and public profile information about your contacts. We may also offer social sharing tools that let you share actions on the services with other websites and vice versa. In those cases, the providers of those tools may receive information about you when you use those tools. You should check the privacy policies of these third party services and your settings there for more information.</p><p>We use your contact information to send you offers based on your previous orders and your interests when you use the aapkidokan.com services, either through a browser or mobile app, we automatically receive some technical information about the hardware and software that is being used.</p><p><br></p><p>USE OF YOUR INFORMATION</p><p><strong> We may use the information we collect for various purposes including:</strong></p><ul><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Manage and improve the services aapkidokan.com provide to you</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Administer and operate your account</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Process your orders, receive payments for the orders</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Understand your shopping behavior to develop and improve our products and services and offer you customized content (including advertising and promotions), such as prominently displaying items you purchase frequently</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Provide customer service, respond to your communications and requests, and resolve complaint and disputes and contact you about your use of appkidokan.com services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">Inform you about online offers, products, services and important changes to the Website and our services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">In our efforts to continually improve our product and service offerings, we collect and analyze demographic and profile data about our users' activity on our Website.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">We identify and use your IP address to help diagnose problems with our server, and to administer our Website. Your IP address is also used to help identify you and to gather broad demographic information.</li></ul><p>DISCLOSING YOUR PERSONAL INFORMATION</p><p><strong> Your personal information is safe with us, we will never disclose your information to anyone outside the aapkidokan.com except where we have your consent, and we may also disclose the information where:</strong></p><ul><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> To other companies who provide a service to us, For example, we may provide information to advertisers to help them reach the kind of audience they want to target and to enable us to comply with our commitments to our advertisers (e.g. by displaying their advertisements to a target audience).</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We will share your information with entities outside of the Services when we have your consent to do so or it is done at your direction.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information with our retail partners in order to provide and maintain the Services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information with third parties to process information on our behalf or to provide certain services (such as delivery services, advertising services, or information to better tailor our services to you). For the purposes of this processing or provision of services, we may share your information with such third parties under appropriate confidentiality provisions.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> For legal purposes, we may share your information when we believe that the disclosure is reasonably necessary to (a) comply with applicable laws, regulations, legal process, or requests from law enforcement or regulatory authorities, (b) prevent, detect, or otherwise handle fraud, security, or technical issues, and (c) protect the safety, rights, or property of any person, the public, or aapkidokan.com.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information in connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business by another company. We may also share your information between and among aapkidokan.com and other companies under common control and ownership.</li></ul><p>COOKIES AND OTHER TRACKING TECHNOLOGIES</p><p>We also use cookies to allow you to enter your password less frequently during a session. Cookies can also help us provide information that is targeted to your interests.</p><p>Cookies are small text files that are sent by your computer when you access our services through a browser. We may use session cookies (which expire when you close your browser), persistent cookies (which expire when you choose to clear them from your browser), and other identifiers to collect information from your browser or device that helps us personalize your experience, measure, manage, and display advertising on the services or on other services; understand your usage of the Services and other services in order to serve customized ads and remember that you are logged into the Services. By using your browser settings, you may block cookies or adjust settings for notifications when a cookie is set.</p><p>Additionally, you may encounter \\\"cookies\\\" or other similar devices on certain pages of the Website that are placed by third parties. We do not control the use of cookies by third parties</p><p><br></p><p>WHAT SECURITY MEASURES WE APPLY</p><p>We maintain commercially reasonable technical, administrative, and physical safeguards to ensure your Information is treated securely and in accordance with this Privacy Policy, and to protect against unauthorized access or alteration to, disclosure, or destruction of your Information. We may, for example, use encryption technology to secure your Information by utilizing Secure Socket Layer (SSL) software. Only those authorized employees, contractors, and agents who need to know your Information in connection with the performance of their services are allowed to access this Information.</p><p>It is important for you to protect yourself against unauthorized access to your password and to your devices used to access our Services. You are responsible for keeping your password confidential. For example, ensure that you sign off when you have finished using a shared device.</p><p>Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your Information, we cannot guarantee the security of your Information transmitted to our Platform and any transmission is at your own risk.</p><p><br></p><p>CHANGES TO OUR POLICY</p><p>Our business changes constantly, and our Privacy Policy may therefore also need to change. We reserve the right to change the policy at any time. We will post the current version of this Privacy Policy on the Platform and each such change will be effective upon posting on the Platform or upon the date designated by us as the \\\"effective date\\\".</p><p>We may e-mail periodic reminders of our notices and conditions, but you should check our Platform frequently to see recent changes.</p><p>It is your obligation to regularly check the Privacy Policy. Your continued use of the Platform following any such change constitutes your agreement to this Privacy Policy as so modified</p><p><br></p><p>CONTACT INFORMATION</p><p>If you have any concerns, questions or comments about your Information or our Privacy Policy, please contact us&nbsp;with thorough description at following:</p>\",\n                       \"contactInfo\": \"<h2 class=\\\"ql-align-center\\\"><strong style=\\\"color: rgb(255, 194, 102);\\\">Your personal information is</strong><strong> </strong></h2><p><br></p><p><strong>safe with us, we will never disclose your information to anyone outside the aapkidokan.com except where we have your consent, and we may also disclose the information where:</strong></p><ul><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;To other companies who provide a service to us, For example, we may provide information to advertisers to help them reach the kind of audience they want to target and to enable us to comply with our commitments to our advertisers (e.g. by displaying their advertisements to a target audience).</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We will share your information with entities outside of the Services when we have your consent to do so or it is done at your direction.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information with our retail partners in order to provide and maintain the Services.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information with third parties to process information on our behalf or to provide certain services (such as delivery services, advertising services, or information to better tailor our services to you). For the purposes of this processing or provision of services, we may share your information with such third parties under appropriate confidentiality provisions.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;For legal purposes, we may share your information when we believe that the disclosure is reasonably necessary to (a) comply with applicable laws, regulations, legal process, or requests from law enforcement or regulatory authorities, (b) prevent, detect, or otherwise handle fraud, security, or technical issues, and (c) protect the safety, rights, or property of any person, the public, or aapkidokan.com.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information in connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business by another company. We may also share your information between and among aapkidokan.com and other companies under common control and ownership.</li></ul>\"\n                   }\n               },\n               \"driver\": {\n                   \"_id\": \"5dea892ed85c19035ebf1238\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"najam.sahto@gmail.com\",\n                   \"password\": \"$2b$10$jeLNLonOzCtta7I2rcVzXuf.yMQCBdd8OmXnQn4T2Xze8RdRrIwfu\",\n                   \"full_name\": \"Najam\",\n                   \"contact_number\": \"03012999901\",\n                   \"address\": \"Gulshan\",\n                   \"created_at\": \"2019-12-06T17:00:30.248Z\",\n                   \"updated_at\": \"2019-12-21T09:17:00.925Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"diLyMin-RYI:APA91bFAAsTj-4mkvLOgVg9eDCtwxflmxaEQ2T_oAamgAz3xXhW2v1wlbytzzfWDhPXG6Kr2LWxwSKu1oLfMe3ciobwHiRZVA8dPCKBxBdiTMVkol85Q2tFkDk-kkdbfEqz7COQt-ftv\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZWE4OTJlZDg1YzE5MDM1ZWJmMTIzOCIsInR5cGUiOjQsImlhdCI6MTU3NjkxOTgyMH0.HLD-AmOo7Nlz63x3Xyqqth_8nHm4XRxpm01vliZ_izU\"\n               }\n           },\n           {\n               \"_id\": \"5df52f914648a37afa44d102\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.9210435,\n                           \"longitude\": 67.10559360000002\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"NA-Class 190/219\",\n                       \"locality\": \"Karachi\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.90920783669007,\n                           \"longitude\": 67.1299919120278\n                       },\n                       \"alias\": \"home\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"full_name\": \"Najam ul Saqib\",\n                       \"email\": \"najam.sahto@gmail.com\",\n                       \"contact_number\": \"03012999901\",\n                       \"locality\": \"Gulstan-e-Johar, Block 18\",\n                       \"landmark\": \"Rabia City\",\n                       \"house_no\": \"Flat 506, Bait ul Hina\",\n                       \"gps_address\": \"32, Block 18 Gulistan-e-Johar, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 1,\n               \"is_express_delivery\": false,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 150,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"slot_id\": \"5debf6ec68a40316a20bfb05\",\n               \"deliver_start_time\": \"2019-12-15T09:00:00.000Z\",\n               \"deliver_end_time\": \"2019-12-15T11:00:00.000Z\",\n               \"customer_id\": \"5dea7a2bd85c19035ebf122b\",\n               \"store_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"products\": [\n                   {\n                       \"pictures\": [\n                           \"00400015.png\"\n                       ],\n                       \"_id\": \"5df52f914648a37afa44d105\",\n                       \"product_id\": \"5d7f2fc2d22f1e78b7671fcc\",\n                       \"size\": \"3 Ltr\",\n                       \"price\": 700,\n                       \"count\": 1,\n                       \"name\": \"Dalda - Cooking Oil Bottle\"\n                   }\n               ],\n               \"total_amount\": 700,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 700,\n               \"commission_percentage\": 2,\n               \"admin_commission_amount\": 27.34,\n               \"store_payout_amount\": 1339.66,\n               \"order_id\": \"a76ead2\",\n               \"created_at\": \"2019-12-14T18:53:05.750Z\",\n               \"updated_at\": \"2020-03-18T11:14:52.200Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5dea892ed85c19035ebf1238\",\n               \"store\": {\n                   \"_id\": \"5d7607c59b5f0f76ee4f68b0\",\n                   \"picture\": \"12.png\",\n                   \"has_express_delivery\": false,\n                   \"drivers\": [\n                       \"5d79f10ed22f1e78b7671d74\",\n                       \"5dea892ed85c19035ebf1238\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"12:00\",\n                       \"close_time\": \"21:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"ham.hassansiddiqui@gmail.com\",\n                       \"password\": \"$2b$10$yTWjJmy7DS2R6h8zyDr.6unwkX0teyzU50lT4pvoQo3NYTHZBKmQu\",\n                       \"full_name\": \"Hammad Hassan\",\n                       \"contact_number\": \"03333743790\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d7607c59b5f0f76ee4f68b1\",\n                           \"coordinates\": {\n                               \"latitude\": 24.9210435,\n                               \"longitude\": 67.10559360000002\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e262d10d21fe166d8c93049\",\n                           \"shop_no\": \"NA-Class 190/219\",\n                           \"locality\": \"Karachi\",\n                           \"unique_link\": \"TKhr3\"\n                       }\n                   ],\n                   \"name\": \"METRO\",\n                   \"commission\": 3,\n                   \"created_at\": \"2019-09-09T08:05:25.721Z\",\n                   \"updated_at\": \"2020-03-05T06:26:57.905Z\",\n                   \"__v\": 0,\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzYwN2M1OWI1ZjBmNzZlZTRmNjhiMCIsInR5cGUiOjIsImlhdCI6MTU4MzM4ODM4NX0.4uZ9x7xPDnYiRisnZJ7a0UPep8LRYYOD8KXxgi6J-7o\",\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzYwN2M1OWI1ZjBmNzZlZTRmNjhiMCIsImlhdCI6MTU3ODkxMTA4Mn0.k-Ek52UwRftyj8hywTqFUneWb1kW8_pfocE0ayMaFZI\",\n                   \"storeCategory\": \"5e4fb5e3beee3369a6b32a0d\",\n                   \"delivery_charges\": [\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389a\",\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389b\",\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"_id\": \"5e5798dc89c6c4420e8f389c\",\n                           \"order_amount\": 1001,\n                           \"charges\": 30\n                       }\n                   ],\n                   \"storeInfo\": {\n                       \"faq\": \"<p>dfdf</p><p><br></p><p>a</p><p>d</p><p>s</p>\",\n                       \"termAndCondition\": \"<h2>Term and condition</h2><h2>Term and condition</h2><h2>Term and condition</h2><h2><br></h2>\",\n                       \"privacyAndPolicy\": \"<p>Last Updated: May 25, 2019</p><p>Thank you for using aapkidokan.com services. We are dedicated to provide you the best online shopping and delivery experience possible. This Privacy Policy outlines how we respect and value the trust you put in aapkidokan.com. This Policy applies regardless of how you access the aapkidokan.com platform - whether this is via a mobile app or web interface.</p><p><br></p><p>INFORMATION WE COLLECT</p><p>When you use our website or mobile application, you may provide us with information about yourself. For instance, when you create an account with aapkidokan.com you provide us with personal information like your name, email address, and phone number. And if you place an order with aapkidokan.com, we collect information including your address and the details of your order.</p><p>If you log into the services through a third-party service, both we and that third-party may receive some information about you and your use of the service. For example, if you choose to log into the services with your Facebook account, we may receive information from Facebook, such as your name, e-mail address, and public profile information about your contacts. We may also offer social sharing tools that let you share actions on the services with other websites and vice versa. In those cases, the providers of those tools may receive information about you when you use those tools. You should check the privacy policies of these third party services and your settings there for more information.</p><p>We use your contact information to send you offers based on your previous orders and your interests when you use the aapkidokan.com services, either through a browser or mobile app, we automatically receive some technical information about the hardware and software that is being used.</p><p><br></p><p>USE OF YOUR INFORMATION</p><p><strong> We may use the information we collect for various purposes including:</strong></p><ul><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Manage and improve the services aapkidokan.com provide to you</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Administer and operate your account</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Process your orders, receive payments for the orders</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Understand your shopping behavior to develop and improve our products and services and offer you customized content (including advertising and promotions), such as prominently displaying items you purchase frequently</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Provide customer service, respond to your communications and requests, and resolve complaint and disputes and contact you about your use of appkidokan.com services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">Inform you about online offers, products, services and important changes to the Website and our services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">In our efforts to continually improve our product and service offerings, we collect and analyze demographic and profile data about our users' activity on our Website.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">We identify and use your IP address to help diagnose problems with our server, and to administer our Website. Your IP address is also used to help identify you and to gather broad demographic information.</li></ul><p>DISCLOSING YOUR PERSONAL INFORMATION</p><p><strong> Your personal information is safe with us, we will never disclose your information to anyone outside the aapkidokan.com except where we have your consent, and we may also disclose the information where:</strong></p><ul><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> To other companies who provide a service to us, For example, we may provide information to advertisers to help them reach the kind of audience they want to target and to enable us to comply with our commitments to our advertisers (e.g. by displaying their advertisements to a target audience).</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We will share your information with entities outside of the Services when we have your consent to do so or it is done at your direction.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information with our retail partners in order to provide and maintain the Services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information with third parties to process information on our behalf or to provide certain services (such as delivery services, advertising services, or information to better tailor our services to you). For the purposes of this processing or provision of services, we may share your information with such third parties under appropriate confidentiality provisions.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> For legal purposes, we may share your information when we believe that the disclosure is reasonably necessary to (a) comply with applicable laws, regulations, legal process, or requests from law enforcement or regulatory authorities, (b) prevent, detect, or otherwise handle fraud, security, or technical issues, and (c) protect the safety, rights, or property of any person, the public, or aapkidokan.com.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information in connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business by another company. We may also share your information between and among aapkidokan.com and other companies under common control and ownership.</li></ul><p>COOKIES AND OTHER TRACKING TECHNOLOGIES</p><p>We also use cookies to allow you to enter your password less frequently during a session. Cookies can also help us provide information that is targeted to your interests.</p><p>Cookies are small text files that are sent by your computer when you access our services through a browser. We may use session cookies (which expire when you close your browser), persistent cookies (which expire when you choose to clear them from your browser), and other identifiers to collect information from your browser or device that helps us personalize your experience, measure, manage, and display advertising on the services or on other services; understand your usage of the Services and other services in order to serve customized ads and remember that you are logged into the Services. By using your browser settings, you may block cookies or adjust settings for notifications when a cookie is set.</p><p>Additionally, you may encounter \\\"cookies\\\" or other similar devices on certain pages of the Website that are placed by third parties. We do not control the use of cookies by third parties</p><p><br></p><p>WHAT SECURITY MEASURES WE APPLY</p><p>We maintain commercially reasonable technical, administrative, and physical safeguards to ensure your Information is treated securely and in accordance with this Privacy Policy, and to protect against unauthorized access or alteration to, disclosure, or destruction of your Information. We may, for example, use encryption technology to secure your Information by utilizing Secure Socket Layer (SSL) software. Only those authorized employees, contractors, and agents who need to know your Information in connection with the performance of their services are allowed to access this Information.</p><p>It is important for you to protect yourself against unauthorized access to your password and to your devices used to access our Services. You are responsible for keeping your password confidential. For example, ensure that you sign off when you have finished using a shared device.</p><p>Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your Information, we cannot guarantee the security of your Information transmitted to our Platform and any transmission is at your own risk.</p><p><br></p><p>CHANGES TO OUR POLICY</p><p>Our business changes constantly, and our Privacy Policy may therefore also need to change. We reserve the right to change the policy at any time. We will post the current version of this Privacy Policy on the Platform and each such change will be effective upon posting on the Platform or upon the date designated by us as the \\\"effective date\\\".</p><p>We may e-mail periodic reminders of our notices and conditions, but you should check our Platform frequently to see recent changes.</p><p>It is your obligation to regularly check the Privacy Policy. Your continued use of the Platform following any such change constitutes your agreement to this Privacy Policy as so modified</p><p><br></p><p>CONTACT INFORMATION</p><p>If you have any concerns, questions or comments about your Information or our Privacy Policy, please contact us&nbsp;with thorough description at following:</p>\",\n                       \"contactInfo\": \"<h2 class=\\\"ql-align-center\\\"><strong style=\\\"color: rgb(255, 194, 102);\\\">Your personal information is</strong><strong> </strong></h2><p><br></p><p><strong>safe with us, we will never disclose your information to anyone outside the aapkidokan.com except where we have your consent, and we may also disclose the information where:</strong></p><ul><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;To other companies who provide a service to us, For example, we may provide information to advertisers to help them reach the kind of audience they want to target and to enable us to comply with our commitments to our advertisers (e.g. by displaying their advertisements to a target audience).</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We will share your information with entities outside of the Services when we have your consent to do so or it is done at your direction.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information with our retail partners in order to provide and maintain the Services.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information with third parties to process information on our behalf or to provide certain services (such as delivery services, advertising services, or information to better tailor our services to you). For the purposes of this processing or provision of services, we may share your information with such third parties under appropriate confidentiality provisions.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;For legal purposes, we may share your information when we believe that the disclosure is reasonably necessary to (a) comply with applicable laws, regulations, legal process, or requests from law enforcement or regulatory authorities, (b) prevent, detect, or otherwise handle fraud, security, or technical issues, and (c) protect the safety, rights, or property of any person, the public, or aapkidokan.com.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information in connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business by another company. We may also share your information between and among aapkidokan.com and other companies under common control and ownership.</li></ul>\"\n                   }\n               },\n               \"driver\": {\n                   \"_id\": \"5dea892ed85c19035ebf1238\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"najam.sahto@gmail.com\",\n                   \"password\": \"$2b$10$jeLNLonOzCtta7I2rcVzXuf.yMQCBdd8OmXnQn4T2Xze8RdRrIwfu\",\n                   \"full_name\": \"Najam\",\n                   \"contact_number\": \"03012999901\",\n                   \"address\": \"Gulshan\",\n                   \"created_at\": \"2019-12-06T17:00:30.248Z\",\n                   \"updated_at\": \"2019-12-21T09:17:00.925Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"diLyMin-RYI:APA91bFAAsTj-4mkvLOgVg9eDCtwxflmxaEQ2T_oAamgAz3xXhW2v1wlbytzzfWDhPXG6Kr2LWxwSKu1oLfMe3ciobwHiRZVA8dPCKBxBdiTMVkol85Q2tFkDk-kkdbfEqz7COQt-ftv\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZWE4OTJlZDg1YzE5MDM1ZWJmMTIzOCIsInR5cGUiOjQsImlhdCI6MTU3NjkxOTgyMH0.HLD-AmOo7Nlz63x3Xyqqth_8nHm4XRxpm01vliZ_izU\"\n               }\n           }\n       ],\n       \"paginationVariables\": {\n           \"pageNo\": 1,\n           \"perPage\": 10,\n           \"totalItems\": 186\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>401</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/order.js",
    "groupTitle": "Admin-Order"
  },
  {
    "type": "Put",
    "url": "/api/admin/order/:id",
    "title": "Update Order",
    "name": "Update_Order",
    "group": "Admin-Order",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "_id:",
            "description": "<p>Unique Order Id</p>"
          },
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "address:",
            "description": "<p>An Object with fields &quot;pickup&quot; , (Displaying information regarding pickup), &quot;delivery&quot; (&quot;coordinates&quot;, &quot;alias&quot;, &quot;city_id&quot;, &quot;full_name&quot;, &quot;email&quot;, &quot;contact_number&quot;, &quot;locality&quot;, &quot;house_no&quot;, &quot;gps_address&quot;, &quot;city&quot;).</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "status:",
            "description": "<p>Status of the Order</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": false,
            "field": "is_express_delivery:",
            "description": "<p>Is Express Delivery</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": false,
            "field": "payment_type",
            "description": "<p>: Type of Payment</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": false,
            "field": "discount:",
            "description": "<p>Discount in our Order</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": false,
            "field": "delivery_charges:",
            "description": "<p>Delivery Charges</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "driver_assigned:",
            "description": "<p>Is Driver Assigned</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "is_delivered_by_store:",
            "description": "<p>Is Products Delivered by Store</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "store_paid",
            "description": "<p>: Store Paid</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "slot_id:",
            "description": "<p>Slot Id</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "deliver_start_time:",
            "description": "<p>Delivery Start Time</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "deliver_end_time",
            "description": "<p>: Delivery End Time</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "customer_id:",
            "description": "<p>Customer Id</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "store_id",
            "description": "<p>: Store Id</p>"
          },
          {
            "group": "Body",
            "type": "Array[]",
            "optional": false,
            "field": "products",
            "description": "<p>: An Array of objects with fields &quot;pictures&quot; (pictures), &quot;id&quot; (Unique Id), &quot;product_id&quot; (Product Id), &quot;size&quot; (Size of the products ), &quot;price&quot; (Price of the product), &quot;count&quot; (Count of the product), &quot;name&quot; (Name)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "total_amount:",
            "description": "<p>Total Amount to be Paid</p>"
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "taxes:",
            "description": "<p>Taxes</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "total_amount_after_tax:",
            "description": "<p>Total Amount after paying tax</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "commission_percentage:",
            "description": "<p>Percentage Commission,</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "admin_commission_amount:",
            "description": "<p>Admin's Commission Amount</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "store_payout_amount:",
            "description": "<p>Store Payout Amount</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "order_id:",
            "description": "<p>Order Id</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "created_at:",
            "description": "<p>Created At</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "updated_at:",
            "description": "<p>Updated At</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "driver_id",
            "description": "<p>: Driver Id</p>"
          },
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "store",
            "description": "<p>: An Object with field names &quot;id&quot; (Unique Id of the Store), &quot;picture&quot; (Picture of the Store), &quot;has_express_delivery&quot; (Boolean), &quot;drivers&quot; (Array of Drivers), &quot;status&quot; (Status), &quot;timings&quot; (open_time, close_time) , &quot;owner&quot; (Details of Owner with &quot;email&quot;, &quot;password&quot;, &quot;full_name&quot;, &quot;contact_number&quot;), &quot;self_delivery&quot; (Store has Self Delivery), &quot;address&quot; (an array with fields &quot;_id&quot;, &quot;coordinates&quot;, &quot;city_id&quot;, &quot;area_id&quot;, &quot;shop_no&quot;, &quot;locality&quot;, &quot;gps_address&quot;, &quot;unique_link&quot;), &quot;name&quot; (Name), &quot;commission&quot; (Commission), &quot;created_at&quot; (Created At), &quot;updated_at&quot; (Updated At), &quot;auth_token&quot; (Authorisation token), &quot;sku_token&quot; (SKU token), &quot;storeCategory&quot; (Store Category), &quot;delivery_charges&quot; (An Array with fields &quot;order_amount&quot; (Order Amount), &quot;charges&quot; (Charges))</p>"
          },
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "driver:",
            "description": "<p>An Object with field names &quot;_id&quot; (Unique Id of the Driver), &quot;picture&quot; (Picture of the Driver), &quot;is_online&quot; (Is Online), &quot;is_logout&quot; (Is Logout), &quot;status&quot; (Status of the Driver), &quot;email&quot; (EmailId of the Driver), &quot;password&quot; (Password of the Driver),  &quot;full_name&quot; (Full Name of the Driver), &quot;contact_number&quot; (Contact Number), &quot;address&quot; (Address pf the Driver), &quot;driving_license&quot; (Driving License of the Driver), &quot;created_at&quot; (Created Date of the Driver), &quot;updated_at&quot; (Updated Date of the Driver),&quot;fcm_token&quot; (FCM token), &quot;auth_token&quot; (Auth Token)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": " HTTP/1.1 200 OK\n       \"{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"updateOrder\": {\n           \"address\": {\n               \"pickup\": {\n                   \"coordinates\": {\n                       \"latitude\": 24.9128145,\n                       \"longitude\": 67.0802142\n                   },\n                   \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                   \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                   \"shop_no\": \"37\",\n                   \"locality\": \"Gulshan\"\n               },\n               \"delivery\": {\n                   \"coordinates\": {\n                       \"latitude\": 24.86092389611868,\n                       \"longitude\": 67.00235527381894\n                   },\n                   \"alias\": \"home\",\n                   \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                   \"full_name\": \"Khushal\",\n                   \"email\": \"khushalp32@gmail.com\",\n                   \"contact_number\": \"9711669906\",\n                   \"locality\": \"Karachi block 1\",\n                   \"house_no\": \"123\",\n                   \"gps_address\": \"Data Center, Bhimpura Karachi, Karachi City, Sindh, Pakistan\"\n               }\n           },\n           \"status\": 1,\n           \"is_express_delivery\": false,\n           \"payment_type\": 1,\n           \"discount\": 0,\n           \"delivery_charges\": 150,\n           \"driver_assigned\": true,\n           \"is_delivered_by_store\": false,\n           \"store_paid\": false,\n           \"_id\": \"5dea98bd68a40316a20bf8ab\",\n           \"slot_id\": \"5de64674d85c19035ebf06d9\",\n           \"deliver_start_time\": \"2019-12-07T07:00:00.000Z\",\n           \"deliver_end_time\": \"2019-12-07T09:00:00.000Z\",\n           \"customer_id\": \"5ddd17e6d85c19035ebf0338\",\n           \"store_id\": \"5d9eda647a30b1642ce9cb77\",\n           \"products\": [\n               {\n                   \"pictures\": [],\n                   \"_id\": \"5dea98bd68a40316a20bf8ac\",\n                   \"product_id\": \"5de90bced85c19035ebf11d3\",\n                   \"size\": \"5kg\",\n                   \"price\": 960,\n                   \"count\": 2,\n                   \"name\": \"Laar - Lazzat Basmati Rice (Sella) 5kg\"\n               }\n           ],\n           \"total_amount\": 1920,\n           \"taxes\": [],\n           \"total_amount_after_tax\": 1920,\n           \"commission_percentage\": 1,\n           \"admin_commission_amount\": 19.2,\n           \"store_payout_amount\": 1900.8,\n           \"order_id\": \"5f8fd26\",\n           \"created_at\": \"2019-12-06T18:06:53.519Z\",\n           \"updated_at\": \"2020-03-20T04:39:48.389Z\",\n           \"__v\": 0,\n           \"driver_id\": \"5dea53edd85c19035ebf121d\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INTERNAL",
            "description": "<p>SERVER Error Address is Required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"singleStringMessage\": \"Cannot read property 'delivery' of undefined\",\n   \"error\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/order.js",
    "groupTitle": "Admin-Order"
  },
  {
    "type": "Post",
    "url": "/api/admin/product",
    "title": "Add a Product",
    "name": "Add_a_Product",
    "group": "Admin-Products",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "store_id:",
            "description": "<p>Unique Id of the Store</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name:",
            "description": "<p>Name of the Product</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "category_id:",
            "description": "<p>Category Id of the Product</p>"
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "pictures",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "price:",
            "description": "<p>A Object with fields &quot;cost_price&quot; (Cost Price of the Product) and &quot;sale_price&quot; (Sale Price of the Product)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>Size of the Product</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "status:",
            "description": "<p>Status of the product</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "sku_id:",
            "description": "<p>SkuId (If any)</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "stock_quantity:",
            "description": "<p>Stock Quantity</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "tags:",
            "description": "<p>Tags</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "order_max",
            "description": "<p>Maximum Orders that can be placed</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 20 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"is_featured\": false,\n        \"is_best_selling\": false,\n        \"pictures\": [],\n        \"status\": 1,\n        \"order_max\": 1000,\n        \"tags\": [\n            \"Test\"\n        ],\n        \"_id\": \"5e747756a050c140c524d742\",\n        \"store_id\": \"5d778327d22f1e78b7671bd2\",\n        \"name\": \"Test Product\",\n        \"category_id\": \"5e1d8b56401e1a0c41f65e15\",\n        \"price\": {\n            \"cost_price\": 10,\n            \"sale_price\": 2\n        },\n        \"size\": \"21\",\n        \"sku_id\": \" \",\n        \"stock_quantity\": 100,\n        \"created_at\": \"2020-03-20T07:57:10.544Z\",\n        \"updated_at\": \"2020-03-20T07:57:10.544Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>200 Name is a Required Field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"singleStringMessage\": \"Product validation failed: name: Name is a required field.\",\n   \"error\": {\n       \"errors\": {\n           \"name\": {\n               \"message\": \"Name is a required field.\",\n               \"name\": \"ValidatorError\",\n               \"properties\": {\n                   \"message\": \"Name is a required field.\",\n                   \"type\": \"required\",\n                   \"path\": \"name\"\n               },\n               \"kind\": \"required\",\n               \"path\": \"name\"\n           }\n       },\n       \"_message\": \"Product validation failed\",\n       \"message\": \"Product validation failed: name: Name is a required field.\",\n       \"name\": \"ValidationError\"\n   }\n}",
          "type": "json"
        },
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"The Store Id is a required field\",\n   \"error\": {\n       \"validation\": {\n           \"store_id\": [\n               \"The Store Id is a required field\"\n           ]\n       }\n   }\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/product.js",
    "groupTitle": "Admin-Products"
  },
  {
    "type": "Post",
    "url": "/api/store/product",
    "title": "Add a Product",
    "name": "Add_a_Product",
    "group": "Admin-Products",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Product</p>"
          },
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "store_id",
            "description": "<p>Unique Id of the Store</p>"
          },
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>Unique Id of the Category</p>"
          },
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "size:",
            "description": "<p>Size of the Product</p>"
          },
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "stock_quantity",
            "description": "<p>Stock Quantity of the Product</p>"
          },
          {
            "group": "Params",
            "type": "Object",
            "optional": false,
            "field": "price",
            "description": "<p>A Object with fields &quot;cost_price&quot; (Cost Price of the Product),  &quot;sale_price&quot; (Sale Price of the Product )</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "Http/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"is_featured\": false,\n       \"is_best_selling\": false,\n       \"pictures\": [],\n       \"status\": 1,\n       \"order_max\": 20,\n       \"tags\": [],\n       \"_id\": \"5e78a19435051f4c7499f045\",\n       \"name\": \"Bru Coffee\",\n       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n       \"category_id\": \"5ce53626a9f87e3f24781040\",\n       \"size\": \"250 g\",\n       \"stock_quantity\": 20,\n       \"price\": {\n           \"cost_price\": 20,\n           \"sale_price\": 30\n       },\n       \"created_at\": \"2020-03-23T11:46:28.017Z\",\n       \"updated_at\": \"2020-03-23T11:46:28.017Z\",\n       \"__v\": 0\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error Name is a required field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Name is a required field",
          "content": "{\n   \"success\": false,\n   \"singleStringMessage\": \"Product validation failed: name: Name is a required field.\",\n   \"error\": {\n       \"errors\": {\n           \"name\": {\n               \"message\": \"Name is a required field.\",\n               \"name\": \"ValidatorError\",\n               \"properties\": {\n                   \"message\": \"Name is a required field.\",\n                   \"type\": \"required\",\n                   \"path\": \"name\"\n               },\n               \"kind\": \"required\",\n               \"path\": \"name\"\n           }\n       },\n       \"_message\": \"Product validation failed\",\n       \"message\": \"Product validation failed: name: Name is a required field.\",\n       \"name\": \"ValidationError\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/store/product.js",
    "groupTitle": "Admin-Products"
  },
  {
    "type": "Delete",
    "url": "/api/admin/product/:id",
    "title": "Delete Product",
    "name": "Delete_a_Product",
    "group": "Admin-Products",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Product</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "Http/1.1 200 OK\n\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"product\": {\n           \"n\": 1,\n           \"opTime\": {\n               \"ts\": \"6807431238974963713\",\n               \"t\": 68\n           },\n           \"electionId\": \"7fffffff0000000000000044\",\n           \"ok\": 1,\n           \"$clusterTime\": {\n               \"clusterTime\": \"6807431238974963713\",\n               \"signature\": {\n                   \"hash\": \"trxQw4NmdEOed/BWttQO21sxN8k=\",\n                   \"keyId\": \"6753601258507993089\"\n               }\n           },\n           \"operationTime\": \"6807431238974963713\",\n           \"deletedCount\": 1\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422",
            "description": "<p>UNPROCESSABLE_ENTITY</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Id is invalid\",\n   \"error\": {\n       \"validation\": {\n           \"product_id\": [\n               \"Id is invalid\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/store/product.js",
    "groupTitle": "Admin-Products"
  },
  {
    "type": "Delete",
    "url": "/api/admin/product/:id",
    "title": "Delete a product",
    "name": "Delete_a_product",
    "group": "Admin-Products",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 20 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"product\": {\n           \"n\": 1,\n           \"opTime\": {\n               \"ts\": \"6806226702511898625\",\n               \"t\": 68\n           },\n           \"electionId\": \"7fffffff0000000000000044\",\n           \"ok\": 1,\n           \"$clusterTime\": {\n               \"clusterTime\": \"6806226702511898625\",\n               \"signature\": {\n                   \"hash\": \"w3TR3epiMA9p/UoPZkyLkuDVqYg=\",\n                   \"keyId\": \"6753601258507993089\"\n               }\n           },\n           \"operationTime\": \"6806226702511898625\",\n           \"deletedCount\": 1\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Id",
            "description": "<p>is invalid 422</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Id is invalid\",\n   \"error\": {\n       \"validation\": {\n           \"product_id\": [\n               \"Id is invalid\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/product.js",
    "groupTitle": "Admin-Products"
  },
  {
    "type": "Put",
    "url": "/api/store/product/:id",
    "title": "Edit a Product",
    "name": "Edit_a_Product",
    "group": "Admin-Products",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Product</p>"
          },
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Status of Product</p>"
          },
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique id of the Product</p>"
          },
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "store_id",
            "description": "<p>Unique Id of the Store</p>"
          },
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>Unique Id of the Category</p>"
          },
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "stock_quantity",
            "description": "<p>Stock Quantity of the Product</p>"
          },
          {
            "group": "Params",
            "type": "Object",
            "optional": false,
            "field": "price",
            "description": "<p>A Object with fields &quot;cost_price&quot; (Cost Price of the Product),  &quot;sale_price&quot; (Sale Price of the Product )</p>"
          }
        ],
        "Params) {Optional} (Boolean": [
          {
            "group": "Params) {Optional} (Boolean",
            "optional": false,
            "field": "is_featured",
            "description": "<p>Is Product Featured</p>"
          },
          {
            "group": "Params) {Optional} (Boolean",
            "optional": false,
            "field": "is_best_selling",
            "description": "<p>Is Product Best Selling</p>"
          }
        ],
        "Params) {Optional} (Array": [
          {
            "group": "Params) {Optional} (Array",
            "optional": false,
            "field": "pictures",
            "description": "<p>Array of pictures</p>"
          },
          {
            "group": "Params) {Optional} (Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags of the product</p>"
          }
        ],
        "Params) {Optional} (Number": [
          {
            "group": "Params) {Optional} (Number",
            "optional": false,
            "field": "order_max",
            "description": "<p>Maximum Orders to be placed</p>"
          }
        ],
        "Params) (Optional) (String": [
          {
            "group": "Params) (Optional) (String",
            "optional": false,
            "field": "sku_id",
            "description": "<p>Unique SKU Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "Htp/1.1 20 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"product\": {\n            \"price\": {\n                \"cost_price\": 10,\n                \"sale_price\": 2\n            },\n            \"is_featured\": false,\n            \"is_best_selling\": false,\n            \"pictures\": [],\n            \"status\": 1,\n            \"order_max\": 1000,\n            \"tags\": [\n                \"Test\"\n            ],\n            \"_id\": \"5e748a57981bfc50754e11af\",\n            \"store_id\": \"5d778327d22f1e78b7671bd2\",\n            \"name\": \"Test Product\",\n            \"category_id\": \"5e1d8b56401e1a0c41f65e15\",\n            \"size\": \"210\",\n            \"sku_id\": \"1\",\n            \"stock_quantity\": 100,\n            \"created_at\": \"2020-03-20T09:18:15.382Z\",\n            \"updated_at\": \"2020-03-23T13:05:42.001Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error Name is a required field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Name is a required field",
          "content": "{\n   \"success\": false,\n   \"singleStringMessage\": \"Product validation failed: name: Name is a required field.\",\n   \"error\": {\n       \"errors\": {\n           \"name\": {\n               \"message\": \"Name is a required field.\",\n               \"name\": \"ValidatorError\",\n               \"properties\": {\n                   \"message\": \"Name is a required field.\",\n                   \"type\": \"required\",\n                   \"path\": \"name\"\n               },\n               \"kind\": \"required\",\n               \"path\": \"name\"\n           }\n       },\n       \"_message\": \"Product validation failed\",\n       \"message\": \"Product validation failed: name: Name is a required field.\",\n       \"name\": \"ValidationError\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/store/product.js",
    "groupTitle": "Admin-Products"
  },
  {
    "type": "Get",
    "url": "/api/store/product",
    "title": "Get Products",
    "name": "Get_Products",
    "group": "Admin-Products",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "pageNo",
            "description": "<p>Current Page Number</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "perPage",
            "description": "<p>Items to be displayed in per page.</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Product to be searched</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>Unique category Id whose products has to be displayed.</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "subcategory_id",
            "description": "<p>Unique Sub category Id whose products has to be displayed.</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Sort Field</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "sortType",
            "description": "<p>Sort Type</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"subcategories\": [\n           {\n               \"price\": {\n                   \"cost_price\": 34,\n                   \"sale_price\": 25\n               },\n               \"is_featured\": false,\n               \"is_best_selling\": false,\n               \"pictures\": [\n                   \"Sample_Image_1.jpeg\"\n               ],\n               \"status\": 1,\n               \"order_max\": 50,\n               \"tags\": [\n                   \"ice-cream\",\n                   \"chocolate\"\n               ],\n               \"_id\": \"5e1d8ba9c011a50c3ad3ce0f\",\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"name\": \"Quality wall\",\n               \"category_id\": \"5e1d8b56401e1a0c41f65e15\",\n               \"size\": \"200 gm\",\n               \"sku_id\": \"654464\",\n               \"stock_quantity\": 497,\n               \"created_at\": \"2020-01-14T09:36:41.253Z\",\n               \"updated_at\": \"2020-02-21T04:32:52.200Z\",\n               \"__v\": 0\n           },\n           {\n               \"price\": {\n                   \"cost_price\": 55,\n                   \"sale_price\": 40\n               },\n               \"is_featured\": false,\n               \"is_best_selling\": false,\n               \"pictures\": [\n                   \"Sample_Image_1.jpeg\"\n               ],\n               \"status\": 1,\n               \"order_max\": 100,\n               \"tags\": [\n                   \"ice-cream\",\n                   \"chocolate\"\n               ],\n               \"_id\": \"5e1d912908f1d10c6f2880f1\",\n               \"name\": \"Choco Crunch\",\n               \"category_id\": \"5e1d8b56401e1a0c41f65e15\",\n               \"size\": \"250 gm\",\n               \"stock_quantity\": 1000,\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"created_at\": \"2020-01-14T10:00:09.661Z\",\n               \"updated_at\": \"2020-02-04T07:22:54.318Z\",\n               \"__v\": 0\n           },\n           {\n               \"price\": {\n                   \"cost_price\": 50,\n                   \"sale_price\": 40\n               },\n               \"is_featured\": false,\n               \"is_best_selling\": false,\n               \"pictures\": [],\n               \"status\": 1,\n               \"order_max\": 5,\n               \"tags\": [\n                   \"ice-cream\",\n                   \"chocolate\"\n               ],\n               \"_id\": \"5e1d92a6c011a50c3ad3ce10\",\n               \"name\": \"Cofo Icecream\",\n               \"category_id\": \"5e1d8b56401e1a0c41f65e15\",\n               \"size\": \"200 gm\",\n               \"stock_quantity\": 120,\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"created_at\": \"2020-01-14T10:06:30.818Z\",\n               \"updated_at\": \"2020-01-14T10:06:30.818Z\",\n               \"__v\": 0\n           },\n           {\n               \"price\": {\n                   \"cost_price\": 10,\n                   \"sale_price\": 2\n               },\n               \"is_featured\": false,\n               \"is_best_selling\": false,\n               \"pictures\": [],\n               \"status\": 1,\n               \"order_max\": 1000,\n               \"tags\": [\n                   \"Test\"\n               ],\n               \"_id\": \"5e7474eb3c03f83f3eadb04d\",\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"name\": \"Test Product\",\n               \"category_id\": \"5e1d8b56401e1a0c41f65e15\",\n               \"size\": \"21\",\n               \"sku_id\": \"\",\n               \"stock_quantity\": 100,\n               \"created_at\": \"2020-03-20T07:46:51.302Z\",\n               \"updated_at\": \"2020-03-20T07:46:51.302Z\",\n               \"__v\": 0\n           },\n           {\n               \"price\": {\n                   \"cost_price\": 10,\n                   \"sale_price\": 2\n               },\n               \"is_featured\": false,\n               \"is_best_selling\": false,\n               \"pictures\": [],\n               \"status\": 1,\n               \"order_max\": 1000,\n               \"tags\": [\n                   \"Test\"\n               ],\n               \"_id\": \"5e747756a050c140c524d742\",\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"name\": \"Test Product2\",\n               \"category_id\": \"5e1d8b56401e1a0c41f65e15\",\n               \"size\": \"21\",\n               \"sku_id\": \" \",\n               \"stock_quantity\": 100,\n               \"created_at\": \"2020-03-20T07:57:10.544Z\",\n               \"updated_at\": \"2020-03-20T09:25:02.945Z\",\n               \"__v\": 0\n           },\n           {\n               \"price\": {\n                   \"cost_price\": 10,\n                   \"sale_price\": 2\n               },\n               \"is_featured\": false,\n               \"is_best_selling\": false,\n               \"pictures\": [],\n               \"status\": 1,\n               \"order_max\": 1000,\n               \"tags\": [\n                   \"Test\"\n               ],\n               \"_id\": \"5e748a57981bfc50754e11af\",\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"name\": \"Test Product\",\n               \"category_id\": \"5e1d8b56401e1a0c41f65e15\",\n               \"size\": \"21\",\n               \"sku_id\": \" 1\",\n               \"stock_quantity\": 100,\n               \"created_at\": \"2020-03-20T09:18:15.382Z\",\n               \"updated_at\": \"2020-03-20T09:18:15.382Z\",\n               \"__v\": 0\n           },\n           {\n               \"price\": {\n                   \"cost_price\": 11,\n                   \"sale_price\": 11\n               },\n               \"is_featured\": false,\n               \"is_best_selling\": false,\n               \"pictures\": [\n                   \"Screenshot from 2020-02-18 12-08-17.png\"\n               ],\n               \"status\": 1,\n               \"order_max\": 1000,\n               \"tags\": [],\n               \"_id\": \"5e789b520fa8d64c6db91a3f\",\n               \"name\": \"Home\",\n               \"category_id\": \"5e1d8b56401e1a0c41f65e15\",\n               \"size\": \"111\",\n               \"stock_quantity\": 11,\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"created_at\": \"2020-03-23T11:19:46.359Z\",\n               \"updated_at\": \"2020-03-23T11:19:46.359Z\",\n               \"__v\": 0\n           }\n       ],\n       \"paginationVariables\": {\n           \"pageNo\": 1,\n           \"perPage\": 10,\n           \"totalItems\": 7\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorised",
            "description": "<p>Error 401</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/store/product.js",
    "groupTitle": "Admin-Products"
  },
  {
    "type": "Get",
    "url": "/api/admin/report/payment",
    "title": "Get Products Report.",
    "name": "Get_Products_Report",
    "group": "Admin-Products",
    "parameter": {
      "fields": {
        "Query Params) {String} (Optional": [
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "pageNo",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "perPage:",
            "description": "<p>Items to be displayed per Page.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "search:",
            "description": "<p>Store Report to be searched.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "sortType",
            "description": "<p>To be Sorted.</p>"
          }
        ],
        "Query Params": [
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "store_id",
            "description": "<p>Unique Id of the Store.</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>Unique Id of the Category.</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "subcategory_id",
            "description": "<p>Unique Id of the Sub Category.</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Field to be Sorted.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 20 OK\n\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"subcategories\": [\n           {\n               \"price\": {\n                   \"cost_price\": 600,\n                   \"sale_price\": 70\n               },\n               \"is_featured\": true,\n               \"is_best_selling\": false,\n               \"pictures\": [\n                   \"djcbsdbfuisdgfhs.jpeg\"\n               ],\n               \"status\": 1,\n               \"order_max\": 5,\n               \"tags\": [\n                   \"vegetable\",\n                   \"Apple Gourd Round\",\n                   \"Gol\",\n                   \"Sabzi\",\n                   \"Tinday\"\n               ],\n               \"_id\": \"5d7616f29b5f0f76ee4f68f9\",\n               \"store_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"name\": \" Apple Gourd Round (Tinday)\",\n               \"category_id\": \"5d76091f9b5f0f76ee4f68df\",\n               \"size\": \"1 Kg\",\n               \"stock_quantity\": 27,\n               \"created_at\": \"2019-09-09T09:10:10.221Z\",\n               \"updated_at\": \"2020-03-19T12:27:27.934Z\",\n               \"__v\": 0,\n               \"sku_id\": \"Test_SKU\"\n           },\n           {\n               \"price\": {\n                   \"cost_price\": 47.6,\n                   \"sale_price\": 47.5\n               },\n               \"is_featured\": false,\n               \"is_best_selling\": true,\n               \"pictures\": [\n                   \"anlkvhnhqk0c6vrjq.jpeg\"\n               ],\n               \"status\": 1,\n               \"order_max\": 5,\n               \"tags\": [\n                   \"vegetable\",\n                   \"Beetroot\",\n                   \"Chukandar\",\n                   \"Sabzi\",\n                   \"Organic Food\"\n               ],\n               \"_id\": \"5d7617d39b5f0f76ee4f68fa\",\n               \"store_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"name\": \" Beetroot (Chukandar)\",\n               \"category_id\": \"5d76091f9b5f0f76ee4f68df\",\n               \"size\": \"500 gm\",\n               \"stock_quantity\": 14,\n               \"created_at\": \"2019-09-09T09:13:55.771Z\",\n               \"updated_at\": \"2020-03-19T06:03:13.244Z\",\n               \"__v\": 0\n           },\n           {\n               \"price\": {\n                   \"cost_price\": 185,\n                   \"sale_price\": 185\n               },\n               \"is_featured\": true,\n               \"is_best_selling\": false,\n               \"pictures\": [\n                   \"anlkvhnhqk0c72w0x.jpeg\"\n               ],\n               \"status\": 1,\n               \"order_max\": 5,\n               \"tags\": [\n                   \"vegetable\",\n                   \"Broccoli\",\n                   \"Sabz Gobi\",\n                   \"Sabzi\",\n                   \"Organic Food\",\n                   \"Gobi\"\n               ],\n               \"_id\": \"5d7619209b5f0f76ee4f68fb\",\n               \"store_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"name\": \" Broccoli (Sabz Gobi)\",\n               \"category_id\": \"5d76091f9b5f0f76ee4f68df\",\n               \"size\": \"250 gm\",\n               \"stock_quantity\": 1,\n               \"created_at\": \"2019-09-09T09:19:28.167Z\",\n               \"updated_at\": \"2020-03-19T12:27:27.998Z\",\n               \"__v\": 0\n           },\n           {\n               \"price\": {\n                   \"cost_price\": 35,\n                   \"sale_price\": 35\n               },\n               \"is_featured\": false,\n               \"is_best_selling\": false,\n               \"pictures\": [\n                   \"anlkvhnhqk0c7aa0v.gif\"\n               ],\n               \"status\": 1,\n               \"order_max\": 5,\n               \"tags\": [\n                   \"vegetable\",\n                   \"capsium\",\n                   \"shimla mirch\",\n                   \"Sabzi\",\n                   \"organic food\",\n                   \"mirch\"\n               ],\n               \"_id\": \"5d761a789b5f0f76ee4f68fc\",\n               \"store_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"name\": \" Capsium (Shimla Mirch)\",\n               \"category_id\": \"5d76091f9b5f0f76ee4f68df\",\n               \"size\": \"250 gm\",\n               \"stock_quantity\": 25,\n               \"created_at\": \"2019-09-09T09:25:12.901Z\",\n               \"updated_at\": \"2019-09-09T09:25:12.901Z\",\n               \"__v\": 0\n           },\n           {\n               \"price\": {\n                   \"cost_price\": 98,\n                   \"sale_price\": 98\n               },\n               \"is_featured\": false,\n               \"is_best_selling\": false,\n               \"pictures\": [\n                   \"anlkvhnhqk0c7ouvw.jpeg\"\n               ],\n               \"status\": 1,\n               \"order_max\": 5,\n               \"tags\": [\n                   \"vegetable\",\n                   \"garlic\",\n                   \"peeled\",\n                   \"Sabzi\",\n                   \"organic food\",\n                   \"chila hua lehsan\"\n               ],\n               \"_id\": \"5d761d219b5f0f76ee4f68fd\",\n               \"store_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"name\": \" Garlic Peeled (Chila Hua Lehsan)\",\n               \"category_id\": \"5d76091f9b5f0f76ee4f68df\",\n               \"size\": \"250 gm\",\n               \"stock_quantity\": 25,\n               \"created_at\": \"2019-09-09T09:36:33.121Z\",\n               \"updated_at\": \"2019-09-09T09:36:33.121Z\",\n               \"__v\": 0\n           },\n           {\n               \"price\": {\n                   \"cost_price\": 31.5,\n                   \"sale_price\": 31.5\n               },\n               \"is_featured\": false,\n               \"is_best_selling\": true,\n               \"pictures\": [\n                   \"anlkvhnhqk0c86qgu.jpeg\"\n               ],\n               \"status\": 1,\n               \"order_max\": 5,\n               \"tags\": [\n                   \"vegetable\",\n                   \"lemon\",\n                   \"limoo\",\n                   \"Sabzi\",\n                   \"Organic Food\"\n               ],\n               \"_id\": \"5d761f159b5f0f76ee4f68fe\",\n               \"store_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"name\": \" Lemon (Limoo)\",\n               \"category_id\": \"5d76091f9b5f0f76ee4f68df\",\n               \"size\": \"250 gm\",\n               \"stock_quantity\": 19,\n               \"created_at\": \"2019-09-09T09:44:53.327Z\",\n               \"updated_at\": \"2020-03-19T06:03:13.328Z\",\n               \"__v\": 0\n           },\n           {\n               \"price\": {\n                   \"cost_price\": 56,\n                   \"sale_price\": 56\n               },\n               \"is_featured\": false,\n               \"is_best_selling\": true,\n               \"pictures\": [\n                   \"anlkvhnhqk0c8towy.jpeg\"\n               ],\n               \"status\": 1,\n               \"order_max\": 5,\n               \"tags\": [\n                   \"vegetable\",\n                   \"Lettuce\",\n                   \"Salad Patta\",\n                   \"Sabzi\",\n                   \"Organic Food\",\n                   \"Aapkidokan Products\"\n               ],\n               \"_id\": \"5d7624929b5f0f76ee4f68ff\",\n               \"store_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"name\": \" Lettuce (Salad Patta)\",\n               \"category_id\": \"5d76091f9b5f0f76ee4f68df\",\n               \"size\": \"250 gm\",\n               \"stock_quantity\": 21,\n               \"created_at\": \"2019-09-09T10:08:18.280Z\",\n               \"updated_at\": \"2020-03-19T06:03:13.416Z\",\n               \"__v\": 0\n           },\n           {\n               \"price\": {\n                   \"cost_price\": 90,\n                   \"sale_price\": 90\n               },\n               \"is_featured\": false,\n               \"is_best_selling\": false,\n               \"pictures\": [\n                   \"anlkvhnhqk0c9l7fm.gif\"\n               ],\n               \"status\": 1,\n               \"order_max\": 5,\n               \"tags\": [\n                   \"vegetable\",\n                   \"Raw Papaya\",\n                   \"Kacha Papita\",\n                   \"Sabzi\",\n                   \"Organic Food\"\n               ],\n               \"_id\": \"5d7629959b5f0f76ee4f6900\",\n               \"store_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"name\": \" Raw Papaya (Kacha Papita)\",\n               \"category_id\": \"5d76091f9b5f0f76ee4f68df\",\n               \"size\": \"1 Kg\",\n               \"stock_quantity\": 25,\n               \"created_at\": \"2019-09-09T10:29:41.992Z\",\n               \"updated_at\": \"2019-09-09T10:29:41.992Z\",\n               \"__v\": 0\n           },\n           {\n               \"price\": {\n                   \"cost_price\": 105,\n                   \"sale_price\": 95\n               },\n               \"is_featured\": false,\n               \"is_best_selling\": false,\n               \"pictures\": [\n                   \"anlkvhnhqk0cavgz3.jpg\"\n               ],\n               \"status\": 1,\n               \"order_max\": 5,\n               \"tags\": [\n                   \"vegetable\",\n                   \"Turnip\",\n                   \"Shalgham\",\n                   \"Sabzi\",\n                   \"Organic Food\",\n                   \"root\"\n               ],\n               \"_id\": \"5d7632049b5f0f76ee4f6903\",\n               \"store_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"name\": \" Turnip (Shalgham)\",\n               \"category_id\": \"5d76091f9b5f0f76ee4f68df\",\n               \"size\": \"1 Kg\",\n               \"stock_quantity\": 25,\n               \"created_at\": \"2019-09-09T11:05:40.534Z\",\n               \"updated_at\": \"2019-09-09T11:05:40.534Z\",\n               \"__v\": 0\n           },\n           {\n               \"price\": {\n                   \"cost_price\": 22.5,\n                   \"sale_price\": 22.5\n               },\n               \"is_featured\": false,\n               \"is_best_selling\": false,\n               \"pictures\": [\n                   \"anlkvhnhqk0cb57tr.gif\"\n               ],\n               \"status\": 1,\n               \"order_max\": 5,\n               \"tags\": [\n                   \"vegetable\",\n                   \"Bitter Gourd\",\n                   \"Karela\",\n                   \"Sabzi\",\n                   \"Organic Food\"\n               ],\n               \"_id\": \"5d7633cb9b5f0f76ee4f6905\",\n               \"store_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"name\": \" Bitter Gourd (Karela)\",\n               \"category_id\": \"5d76091f9b5f0f76ee4f68df\",\n               \"size\": \"250 gm\",\n               \"stock_quantity\": 25,\n               \"created_at\": \"2019-09-09T11:13:15.239Z\",\n               \"updated_at\": \"2019-09-09T11:13:15.239Z\",\n               \"__v\": 0\n           }\n       ],\n       \"paginationVariables\": {\n           \"pageNo\": 1,\n           \"perPage\": 10,\n           \"totalItems\": 47\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>401</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/product.js",
    "groupTitle": "Admin-Products"
  },
  {
    "type": "Get",
    "url": "/api/admin/product/:id",
    "title": "Update Product",
    "name": "Update_Product",
    "group": "Admin-Products",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "price:",
            "description": "<p>A Object with fields &quot;cost_price&quot; (Cost Price of the Product) and &quot;sale_price&quot; (Sale Price of the Product)</p>"
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "pictures",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "status:",
            "description": "<p>Status of the product</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "order_max",
            "description": "<p>Maximum Orders that can be placed</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "tags:",
            "description": "<p>Tags</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "_id:",
            "description": "<p>Unique Id of Product</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "store_id:",
            "description": "<p>Unique Id of the Store</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name:",
            "description": "<p>Name of the Product</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "category_id:",
            "description": "<p>Category Id of the Product</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>Size of the Product</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "stock_quantity:",
            "description": "<p>Stock Quantity</p>"
          }
        ],
        "Body) (boolean": [
          {
            "group": "Body) (boolean",
            "optional": false,
            "field": "is_featured:",
            "description": "<p>Is Product Featured</p>"
          },
          {
            "group": "Body) (boolean",
            "optional": false,
            "field": "is_best_selling:",
            "description": "<p>Is Product Best Selling</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 20 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"product\": {\n           \"price\": {\n               \"cost_price\": 10,\n               \"sale_price\": 2\n           },\n           \"is_featured\": false,\n           \"is_best_selling\": false,\n           \"pictures\": [],\n           \"status\": 1,\n           \"order_max\": 1000,\n           \"tags\": [\n               \"Test\"\n           ],\n           \"_id\": \"5e747756a050c140c524d742\",\n           \"store_id\": \"5d778327d22f1e78b7671bd2\",\n           \"name\": \"Test Product2\",\n           \"category_id\": \"5e1d8b56401e1a0c41f65e15\",\n           \"size\": \"21\",\n           \"sku_id\": \" \",\n           \"stock_quantity\": 100,\n           \"created_at\": \"2020-03-20T07:57:10.544Z\",\n           \"updated_at\": \"2020-03-20T09:25:02.945Z\",\n           \"__v\": 0\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Name is a Required Field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"singleStringMessage\": \"Product validation failed: name: Name is a required field.\",\n   \"error\": {\n       \"errors\": {\n           \"name\": {\n               \"message\": \"Name is a required field.\",\n               \"name\": \"ValidatorError\",\n               \"properties\": {\n                   \"message\": \"Name is a required field.\",\n                   \"type\": \"required\",\n                   \"path\": \"name\"\n               },\n               \"kind\": \"required\",\n               \"path\": \"name\"\n           }\n       },\n       \"_message\": \"Product validation failed\",\n       \"message\": \"Product validation failed: name: Name is a required field.\",\n       \"name\": \"ValidationError\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/product.js",
    "groupTitle": "Admin-Products"
  },
  {
    "type": "Get",
    "url": "/api/admin/report/commission",
    "title": "Get Commission Report",
    "name": "Get_Commission_Report",
    "group": "Admin-Report",
    "parameter": {
      "fields": {
        "Query Params) {String} (Optional": [
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "pageNo",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "perPage:",
            "description": "<p>Items to be displayed per Page.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "search:",
            "description": "<p>Commission Report to be searched.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "sortType",
            "description": "<p>To be Sorted.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"stores\": [\n           {\n               \"_id\": \"5e2eca2ad21fe166d8c93159\",\n               \"name\": \"Amir Vegetables & Meat Store\",\n               \"ownerName\": \"Kamran\",\n               \"sales\": 321,\n               \"totalCommission\": 22.47\n           },\n           {\n               \"_id\": \"5e05d5ff954bc84f45786dd6\",\n               \"name\": \"KNN General Store\",\n               \"ownerName\": \"Najam\",\n               \"sales\": 5285,\n               \"totalCommission\": 105.7\n           },\n           {\n               \"_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"name\": \"METRO\",\n               \"ownerName\": \"Hammad Hassan\",\n               \"sales\": 5660,\n               \"totalCommission\": 177.89999999999998\n           }\n       ],\n       \"paginationVariables\": {\n           \"pageNo\": 1,\n           \"perPage\": 10\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>401</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/report.js",
    "groupTitle": "Admin-Report"
  },
  {
    "type": "Get",
    "url": "/api/admin/report/commission",
    "title": "Get Coupons Report",
    "name": "Get_Commission_Report",
    "group": "Admin-Report",
    "parameter": {
      "fields": {
        "Query Params) {String} (Optional": [
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "pageNo",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "perPage:",
            "description": "<p>Items to be displayed per Page.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "search:",
            "description": "<p>Coupons Report to be searched.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "sortType",
            "description": "<p>To be Sorted.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"coupons\": [\n           {\n               \"_id\": \"5e6b35536c789d243501e0b5\",\n               \"couponCode\": \"COUPONCODE\",\n               \"orderId\": \"1d6f890\",\n               \"customer\": \"Rohit Kumar\",\n               \"couponAmount\": 100,\n               \"usedDate\": \"2020-03-13T07:28:48.980Z\"\n           }\n       ],\n       \"paginationVariables\": {\n           \"pageNo\": 1,\n           \"perPage\": 10\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>401</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/report.js",
    "groupTitle": "Admin-Report"
  },
  {
    "type": "Get",
    "url": "/api/admin/report/commission",
    "title": "Get Coupons Report",
    "name": "Get_Commission_Report",
    "group": "Admin-Report",
    "parameter": {
      "fields": {
        "Query Params) {String} (Optional": [
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "pageNo",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "perPage:",
            "description": "<p>Items to be displayed per Page.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "search:",
            "description": "<p>Coupons Report to be searched.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "sortType",
            "description": "<p>To be Sorted.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"driverCommissions\": [\n           {\n               \"_id\": \"5e732a3f81e3b443d3f33a12\",\n               \"orderId\": \"8f23ece\",\n               \"totalAmount\": 3000,\n               \"totalAdminCommission\": 101.1,\n               \"totalDriverCommission\": 0\n           },\n           {\n               \"_id\": \"5e709c82df07ca075e4f441d\",\n               \"orderId\": \"7618402\",\n               \"totalAmount\": 225,\n               \"totalAdminCommission\": 6.75,\n               \"totalDriverCommission\": 0\n           },\n           {\n               \"_id\": \"5e6f42e73665c35677d667bb\",\n               \"orderId\": \"05714c5\",\n               \"totalAmount\": 250,\n               \"totalAdminCommission\": 7.5,\n               \"totalDriverCommission\": 25\n           },\n           {\n               \"_id\": \"5e6b835a717a3735d1007ca7\",\n               \"orderId\": \"033f6e1\",\n               \"totalAmount\": 600,\n               \"totalAdminCommission\": 12,\n               \"totalDriverCommission\": 0\n           },\n           {\n               \"_id\": \"5e6b3630759fc8244d89c15f\",\n               \"orderId\": \"1d6f890\",\n               \"totalAmount\": 250,\n               \"totalAdminCommission\": 4.5,\n               \"totalDriverCommission\": 0\n           },\n           {\n               \"_id\": \"5e5f4f9ca4b29438db61648e\",\n               \"orderId\": \"97967f5\",\n               \"totalAmount\": 365,\n               \"totalAdminCommission\": 7.3,\n               \"totalDriverCommission\": 36.5\n           },\n           {\n               \"_id\": \"5e5f4aa1f0850329955609c1\",\n               \"orderId\": \"9f799ab\",\n               \"totalAmount\": 1106,\n               \"totalAdminCommission\": 22.12,\n               \"totalDriverCommission\": 110.6\n           },\n           {\n               \"_id\": \"5e5f486df0850329955609be\",\n               \"orderId\": \"41fe128\",\n               \"totalAmount\": 155,\n               \"totalAdminCommission\": 3.1,\n               \"totalDriverCommission\": 15.5\n           },\n           {\n               \"_id\": \"5e5f451aeba5e4297d6ada79\",\n               \"orderId\": \"93bb47b\",\n               \"totalAmount\": 1725,\n               \"totalAdminCommission\": 34.5,\n               \"totalDriverCommission\": 172.5\n           },\n           {\n               \"_id\": \"5e5e72fd2629035f654f1efe\",\n               \"orderId\": \"6281ac8\",\n               \"totalAmount\": 670,\n               \"totalAdminCommission\": 20.1,\n               \"totalDriverCommission\": 0\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/report.js",
    "groupTitle": "Admin-Report"
  },
  {
    "type": "Get",
    "url": "/api/admin/report/store",
    "title": "Get Shops Report.",
    "name": "Get_Shops_Report",
    "group": "Admin-Report",
    "parameter": {
      "fields": {
        "Query Params) {String} (Optional": [
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "pageNo",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "perPage:",
            "description": "<p>Items to be displayed per Page.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "search:",
            "description": "<p>Shops Report to be searched.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "sortType",
            "description": "<p>To be Sorted.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 20 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"stores\": [\n           {\n               \"_id\": \"5e2eca2ad21fe166d8c93159\",\n               \"name\": \"Amir Vegetables & Meat Store\",\n               \"ownerName\": \"Kamran\",\n               \"items\": 3,\n               \"soldQty\": 1,\n               \"sales\": 321,\n               \"totalCommission\": 22.47\n           },\n           {\n               \"_id\": \"5e05d5ff954bc84f45786dd6\",\n               \"name\": \"KNN General Store\",\n               \"ownerName\": \"Najam\",\n               \"items\": 12,\n               \"soldQty\": 7,\n               \"sales\": 5285,\n               \"totalCommission\": 105.7\n           },\n           {\n               \"_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"name\": \"METRO\",\n               \"ownerName\": \"Hammad Hassan\",\n               \"items\": 13,\n               \"soldQty\": 10,\n               \"sales\": 5660,\n               \"totalCommission\": 177.89999999999998\n           }\n       ],\n       \"paginationVariables\": {\n           \"pageNo\": 1,\n           \"perPage\": 10\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>401</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/report.js",
    "groupTitle": "Admin-Report"
  },
  {
    "type": "Get",
    "url": "/api/admin/report/payment",
    "title": "Get Store Payment Report.",
    "name": "Get_Store_Payment_Report",
    "group": "Admin-Report",
    "parameter": {
      "fields": {
        "Query Params) {String} (Optional": [
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "pageNo",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "perPage:",
            "description": "<p>Items to be displayed per Page.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "search:",
            "description": "<p>Store Report to be searched.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "sortType",
            "description": "<p>To be Sorted.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 20 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"payments\": [\n           {\n               \"_id\": \"5e2eca2ad21fe166d8c93159\",\n               \"name\": \"Amir Vegetables & Meat Store\",\n               \"totalOrders\": 1,\n               \"totalAmount\": 321,\n               \"totalCommission\": 22.47,\n               \"taxAmount\": 0,\n               \"deliveryCharges\": 100\n           },\n           {\n               \"_id\": \"5d778327d22f1e78b7671bd2\",\n               \"name\": \"Enuke Test store\",\n               \"totalOrders\": 0,\n               \"totalAmount\": 0,\n               \"totalCommission\": 0,\n               \"taxAmount\": 0,\n               \"deliveryCharges\": 0\n           },\n           {\n               \"_id\": \"5e05d5ff954bc84f45786dd6\",\n               \"name\": \"KNN General Store\",\n               \"totalOrders\": 7,\n               \"totalAmount\": 5285,\n               \"totalCommission\": 105.7,\n               \"taxAmount\": 0,\n               \"deliveryCharges\": 350\n           },\n           {\n               \"_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"name\": \"METRO\",\n               \"totalOrders\": 10,\n               \"totalAmount\": 5660,\n               \"totalCommission\": 177.9,\n               \"taxAmount\": 0,\n               \"deliveryCharges\": 800\n           },\n           {\n               \"_id\": \"5e469bf4d21fe166d8c93570\",\n               \"name\": \"Marhaba Superstore\",\n               \"totalOrders\": 0,\n               \"totalAmount\": 0,\n               \"totalCommission\": 0,\n               \"taxAmount\": 0,\n               \"deliveryCharges\": 0\n           },\n           {\n               \"_id\": \"5d9eda647a30b1642ce9cb77\",\n               \"name\": \"Saveway Super Store\",\n               \"totalOrders\": 0,\n               \"totalAmount\": 0,\n               \"totalCommission\": 0,\n               \"taxAmount\": 0,\n               \"deliveryCharges\": 0\n           }\n       ],\n       \"paginationVariables\": {\n           \"pageNo\": 1,\n           \"perPage\": 10,\n           \"totalItems\": 13\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>401</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/report.js",
    "groupTitle": "Admin-Report"
  },
  {
    "type": "post",
    "url": "/api/admin/store",
    "title": "Add Store",
    "name": "Add_a_Store",
    "group": "Admin-Store",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "timings",
            "description": "<p>An Object with fields &quot;open_time&quot; (Open time of Store) &quot;close_time&quot; (Close Time of Store).</p>"
          },
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "owner",
            "description": "<p>An Object with fields &quot;full_name&quot; (Full Name of Owner) &quot;email&quot; (Email of Owner) &quot;contact_number&quot; (Contact Number of Owner) &quot;password&quot; (Password) &quot;confirm_password&quot; (Confirm Password).</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "status:",
            "description": "<p>Status of Store</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "self_delivery",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "has_express_delivery",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Array[]",
            "optional": false,
            "field": "address:",
            "description": "<p>An Array of Objects with fields &quot;city_id&quot; (City Id) &quot;area_id&quot; (Area Id) &quot;coordinates&quot; {&quot;latitude&quot; and &quot;longitude&quot;}, &quot;shop_no&quot; (Shop Number), &quot;locality&quot; (Locality), &quot;gps_address&quot;: (GPS Address),</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "storeCategory:",
            "description": "<p>Store Category Id,</p>"
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "delivery_charges",
            "description": "<p>: An array of Objects with fields &quot;order_amount&quot; (Order Amount), &quot;charges&quot; (Charges),</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name:",
            "description": "<p>Store Name,</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "commission",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "drivers",
            "description": "<p>,</p>"
          },
          {
            "group": "Body",
            "type": "File",
            "optional": false,
            "field": "store_picture",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 Ok\n {\n \"picture\": \"Screenshot from 2020-02-20 16-27-43.png\",\n   \"has_express_delivery\": true,\n     \"drivers\": [],\n       \"status\": 1,\n         \"_id\": \"5e71fa41397c6558cd4813b4\",\n           \"timings\": {\n             \"open_time\": \"10:00\",\n               \"close_time\": \"22:00\"\n           },\n             \"owner\": {\n               \"full_name\": \"Enuke\",\n                 \"email\": \"enuke@software.com\",\n                   \"contact_number\": \"7896541414\",\n                     \"password\": \"$2b$10$TMghiMMoxBAERAI68XmMy.j0oz11eWZUqq0K52TY48qLvHKkIkMRy\"\n             },\n               \"self_delivery\": true,\n                 \"address\": [\n                   {\n                     \"_id\": \"5e71fa41397c6558cd4813b5\",\n                     \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                     \"area_id\": \"5e262d43d21fe166d8c9304a\",\n                     \"coordinates\": {\n                       \"latitude\": 24.8607,\n                       \"longitude\": 67.0011\n                     },\n                     \"shop_no\": \"112\",\n                     \"locality\": \"112\",\n                     \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                     \"unique_link\": \"Zm3EbS\"\n                   }\n                 ],\n                   \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\",\n                     \"delivery_charges\": [\n                       {\n                         \"_id\": \"5e71fa41397c6558cd4813b6\",\n                         \"order_amount\": 500,\n                         \"charges\": 100\n                       },\n                       {\n                         \"_id\": \"5e71fa41397c6558cd4813b7\",\n                         \"order_amount\": 800,\n                         \"charges\": 50\n                       },\n                       {\n                         \"_id\": \"5e71fa41397c6558cd4813b8\",\n                         \"order_amount\": 1000,\n                         \"charges\": 50\n                       }\n                     ],\n                       \"name\": \"Test Store\",\n                         \"commission\": 1,\n                           \"created_at\": \"2020-03-18T10:38:57.197Z\",\n                             \"updated_at\": \"2020-03-18T10:38:57.197Z\",\n                               \"__v\": 0\n}\n *",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Id is invalid\",\n   \"error\": {\n       \"validation\": {\n           \"storeCategoryId\": [\n               \"Id is invalid\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/store.js",
    "groupTitle": "Admin-Store"
  },
  {
    "type": "Put",
    "url": "/api/admin/store/change-password/:id",
    "title": "Change Store Password",
    "name": "Change_Password_of_Store",
    "group": "Admin-Store",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Change Store Password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"store\": {\n           \"timings\": {\n               \"open_time\": \"10:00\",\n               \"close_time\": \"20:00\"\n           },\n           \"owner\": {\n               \"email\": \"tanzeels@gmail.com\",\n               \"password\": \"$2b$10$ENfeK7ifcqH/.W91fBVK2uoCjMUYkPvsAByboYtT3NoRhnWgGToZW\",\n               \"full_name\": \"Tanzeel\",\n               \"contact_number\": \"03018492425\"\n           },\n           \"storeInfo\": {\n               \"faq\": \"<h5 class=\\\"ql-align-center\\\"><strong style=\\\"color: rgb(0, 102, 204);\\\">What is InstaShop?</strong></h5><p class=\\\"ql-align-center\\\"><br></p><p>The result? More time to enjoy doing the things you love with the people you love the most. InstaShop is available for free on iOS, Android and web.</p><h5><strong>How can I make an order on InstaShop for the first time?</strong></h5><p>First select your location. For your first order, fill-in your address and register your mobile number (your personal information is treated confidentially. For more information please read our privacy policy)</p><p>Feel free to choose a preferred supermarket, browse through a wide variety of products or search for a particular product and add it to your basket by tapping on it. The last step is to review your order, select the preferred payment method and place your order.</p><h5><strong>Does InstaShop provide any other services besides grocery delivery?</strong></h5><p>Although, grocery delivery is the primary service of InstaShop, it does provide other services like delivery of organic products and house cleaning. Moreover, InstaShop is always on the road to expand its services and fulfill the demands of their users.</p><h5><strong>What kind of products do you have?</strong></h5><p>With InstaShop you can order a wide range of products, from fresh fruits to birthday candles. Product lines include: fruits &amp; vegetables, dairy &amp; eggs, bakery, soft drinks &amp; juices, candies &amp; snacks, beauty &amp; hygiene products, meat &amp; fish, cans &amp; jars, baby care products, household care products, pasta and rice, coffee and tea, herbs, pet care and healthy and organic products.</p><h5><strong>Can’t find a product, what can I do?</strong></h5><p>Make sure there are no spelling mistakes in your search words. If the product is unavailable, there are two easy ways to suggest to us to add it. You can either visit the side menu and tap the suggest a product option or suggest the product via the no results search screen. We will do our best to include it in the application as of the earliest.</p>\",\n               \"termAndCondition\": \"<h1 class=\\\"ql-align-center\\\"><strong>Terms of service</strong></h1><p><br></p><p class=\\\"ql-align-justify\\\"><strong>Welcome to InstaShop!</strong></p><p class=\\\"ql-align-justify\\\">&nbsp;</p><p class=\\\"ql-align-justify\\\">Here you can find all the terms and conditions that we apply in order to perform our provided services at the highest level of our standards. If you’re here, that means you’re smart enough to read them carefully before using our services.</p><p class=\\\"ql-align-justify\\\">&nbsp;</p><p class=\\\"ql-align-justify\\\">PLEASE READ THE FOLLOWING TERMS AND CONDITIONS CAREFULLY. THEY CONTAIN IMPORTANT INFORMATION ABOUT YOUR RIGHTS AND OBLIGATIONS, AS WELL AS LIMITATIONS AND EXCLUSIONS THAT APPLY TO YOUR PURCHASES.</p><p class=\\\"ql-align-justify\\\">&nbsp;</p><p class=\\\"ql-align-justify\\\"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* GENERAL SCOPE</strong></p><p class=\\\"ql-align-justify\\\">&nbsp;</p><p class=\\\"ql-align-justify\\\">InstaShop provides software-based delivery services for goods such as food, beverages and other grocery products (collectively, Groceries). These terms (Terms of Service) apply when you use the InstaShop mobile applications or websites (collectively, Services).</p><p class=\\\"ql-align-justify\\\">&nbsp;</p><p class=\\\"ql-align-justify\\\">By using the Services, you automatically agree to the Terms of Service.</p><p class=\\\"ql-align-justify\\\">&nbsp;</p><p class=\\\"ql-align-justify\\\">InstaShop is a platform for facilitating the exchange of services between individuals (User) who are willing to order Groceries via our partners (Shops) that are willing to collect and deliver the ordered Groceries.</p>\",\n               \"privacyAndPolicy\": \"<h1 class=\\\"ql-align-center\\\"><strong>Privacy Policy</strong></h1><p><br></p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\"><strong><u>** INSTASHOP PRIVACY POLICY</u></strong></p><p class=\\\"ql-align-justify\\\"><strong><u>------------------------------------------------------------</u></strong></p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\"><strong><u>Last Updated: January 15, 2018</u></strong></p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\">Thank you for using InstaShop! We are committed to providing you the best online shopping and delivery experience possible. This Privacy Policy explains what information we collect, how that information is used, under what circumstances we share information, and the choices you can make about that information. This Policy applies whether you access InstaShop through a browser, through a mobile app, or through some other method.</p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\"><strong><em><u>INFORMATION WE COLLECT</u></em></strong></p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\">* Information you provide to us or allow others to provide to us</p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\">At various points in the InstaShop experience, you may provide us with information about yourself. For example, when you create an account with InstaShop, you provide us with personal information like your name, email address, and zip code. And if you place an order with InstaShop, we collect information including your address, phone number and the details of your order.</p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\">If you log into the InstaShop service through a third-party, we may receive some information about you through them. For example, if you choose to log into InstaShop with your Facebook account, we may receive information about your contacts. We may also offer social sharing tools (such as the Facebook Like button) that let you share actions on InstaShop with other sites and vice versa. You should check the privacy policies of these services and your settings there for more information.</p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\">* Technical information about usage of InstaShop</p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\">When you use the InstaShop services, either through a browser or mobile app, we automatically receive some technical information about the hardware and software that is being used.</p>\",\n               \"contactInfo\": \"<p>Call to store: 021 3434345</p><p>Store Manager: Hammad Siddique</p>\"\n           },\n           \"picture\": \"cowwww.jpg\",\n           \"has_express_delivery\": false,\n           \"drivers\": [],\n           \"status\": 1,\n           \"_id\": \"5df637e34648a37afa44d109\",\n           \"self_delivery\": true,\n           \"address\": [\n               {\n                   \"coordinates\": {\n                       \"latitude\": 24.909252523573674,\n                       \"longitude\": 67.13001967493653\n                   },\n                   \"_id\": \"5df637e34648a37afa44d10a\",\n                   \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                   \"area_id\": \"5e262d10d21fe166d8c93049\",\n                   \"shop_no\": \"37\",\n                   \"locality\": \"Johar\",\n                   \"gps_address\": \"32, Block 18 Gulistan-e-Johar, Karachi, Karachi City, Sindh, Pakistan\",\n                   \"unique_link\": \"Z2jPHpd\"\n               }\n           ],\n           \"name\": \"Fresh Picked\",\n           \"commission\": 3,\n           \"created_at\": \"2019-12-15T13:40:51.978Z\",\n           \"updated_at\": \"2020-03-18T13:21:11.735Z\",\n           \"__v\": 0,\n           \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjYzN2UzNDY0OGEzN2FmYTQ0ZDEwOSIsInR5cGUiOjIsImlhdCI6MTU4MjgxMDY5NH0.5Ff7eEVx5wgWMSuogS3Gj8_pjlPoZ-lOK4GC_VQKvJo\",\n           \"storeCategory\": \"5e4ff077d463092ecbc36e6e\",\n           \"delivery_charges\": [\n               {\n                   \"order_amount\": 500,\n                   \"charges\": 100\n               },\n               {\n                   \"order_amount\": 800,\n                   \"charges\": 50\n               },\n               {\n                   \"order_amount\": 1000,\n                   \"charges\": 50\n               }\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Internal",
            "description": "<p>Server Error 500</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Password is a required field.",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Password is a required field.\",\n   \"error\": {\n       \"validation\": {\n           \"password\": [\n               \"Password is a required field.\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/store.js",
    "groupTitle": "Admin-Store"
  },
  {
    "type": "Delete",
    "url": "/api/admin/store/:id",
    "title": "Delete a Store",
    "name": "Delete_Store",
    "group": "Admin-Store",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"store\": {\n           \"n\": 1,\n           \"opTime\": {\n               \"ts\": \"6805535290086653953\",\n               \"t\": 64\n           },\n           \"electionId\": \"7fffffff0000000000000040\",\n           \"ok\": 1,\n           \"$clusterTime\": {\n               \"clusterTime\": \"6805535290086653953\",\n               \"signature\": {\n                   \"hash\": \"9wW8CkpYM2WzrB8oa/HNLBMm0d4=\",\n                   \"keyId\": \"6753601258507993089\"\n               }\n           },\n           \"operationTime\": \"6805535290086653953\",\n           \"deletedCount\": 1\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422",
            "description": "<p>UNPROCESSABLE_ENTITY</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Id is invalid",
          "content": "\n{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Id is invalid\",\n   \"error\": {\n       \"validation\": {\n           \"id\": [\n               \"Id is invalid\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/store.js",
    "groupTitle": "Admin-Store"
  },
  {
    "type": "Get",
    "url": "/api/admin/store",
    "title": "Get All Stores",
    "name": "Get_All_Stores",
    "group": "Admin-Store",
    "parameter": {
      "fields": {
        "Query Params) {String} (Optional": [
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "pageNo",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "perPage:",
            "description": "<p>Items to be displayed per Page.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "search:",
            "description": "<p>Store to be searched.</p>"
          },
          {
            "group": "Query Params) {String} (Optional",
            "optional": false,
            "field": "sortType:-1",
            "description": "<p>To be Sorted.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"stores\": [\n           {\n               \"timings\": {\n                   \"open_time\": \"18:00\",\n                   \"close_time\": \"23:55\"\n               },\n               \"owner\": {\n                   \"email\": \"najam_81@hotmail.com\",\n                   \"password\": \"$2b$10$VIG2tY227wzZI04LMoNXce8irRjnnzoiAUEPNwYlkjDtHip0Umhna\",\n                   \"full_name\": \"Najam\",\n                   \"contact_number\": \"03012999902\"\n               },\n               \"picture\": \"Karahi11.jpg\",\n               \"has_express_delivery\": false,\n               \"drivers\": [\n                   \"5d9dda22d22f1e78b76728c3\"\n               ],\n               \"status\": 2,\n               \"_id\": \"5e1382ce954bc84f4578715e\",\n               \"self_delivery\": false,\n               \"address\": [\n                   {\n                       \"coordinates\": {\n                           \"latitude\": 24.909252523573674,\n                           \"longitude\": 67.13001967493653\n                       },\n                       \"_id\": \"5e1382ce954bc84f4578715f\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5df635134648a37afa44d108\",\n                       \"shop_no\": \"37\",\n                       \"locality\": \"Karachi\",\n                       \"gps_address\": \"\",\n                       \"unique_link\": \"2bawbs\"\n                   }\n               ],\n               \"name\": \"KN Restaurant \",\n               \"commission\": 20,\n               \"created_at\": \"2020-01-06T18:56:14.138Z\",\n               \"updated_at\": \"2020-02-27T10:38:33.036Z\",\n               \"__v\": 0,\n               \"delivery_charges\": [\n                   {\n                       \"order_amount\": 500,\n                       \"charges\": 100\n                   },\n                   {\n                       \"order_amount\": 800,\n                       \"charges\": 50\n                   },\n                   {\n                       \"order_amount\": 1000,\n                       \"charges\": 50\n                   }\n               ],\n               \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\"\n           },\n           {\n               \"timings\": {\n                   \"open_time\": \"10:00\",\n                   \"close_time\": \"22:00\"\n               },\n               \"owner\": {\n                   \"email\": \"mart360shop@gmail.com\",\n                   \"password\": \"$2b$10$EQYJ8YwRi3YtsmiSV49rlOuFVHrss/a1bFVTX0KafVSZw1ri1WHWO\",\n                   \"full_name\": \"Muhammad Abdullah\",\n                   \"contact_number\": \"03218293207\"\n               },\n               \"picture\": \"download.png\",\n               \"has_express_delivery\": true,\n               \"drivers\": [\n                   \"5d9dda22d22f1e78b76728c3\"\n               ],\n               \"status\": 2,\n               \"_id\": \"5e2ac5fbd21fe166d8c930b4\",\n               \"self_delivery\": false,\n               \"address\": [\n                   {\n                       \"coordinates\": {\n                           \"latitude\": 24.8005095,\n                           \"longitude\": 67.071469817\n                       },\n                       \"_id\": \"5e2ac5fbd21fe166d8c930b5\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5e2ac47dd21fe166d8c930b3\",\n                       \"shop_no\": \"18C,Lane 9 off Khe-e-ittehad, DHA Phase 6\",\n                       \"locality\": \"DHA Phase - 6\",\n                       \"unique_link\": \"2lM7OD\"\n                   }\n               ],\n               \"name\": \"MART 360\",\n               \"commission\": 0,\n               \"created_at\": \"2020-01-24T10:24:59.765Z\",\n               \"updated_at\": \"2020-03-03T07:44:45.209Z\",\n               \"__v\": 0,\n               \"delivery_charges\": [\n                   {\n                       \"_id\": \"5e5e0aedaa5dc75f356b1288\",\n                       \"order_amount\": 500,\n                       \"charges\": 100\n                   },\n                   {\n                       \"_id\": \"5e5e0aedaa5dc75f356b1289\",\n                       \"order_amount\": 800,\n                       \"charges\": 50\n                   },\n                   {\n                       \"_id\": \"5e5e0aedaa5dc75f356b128a\",\n                       \"order_amount\": 1000,\n                       \"charges\": 60\n                   }\n               ],\n               \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\"\n           },\n           {\n               \"timings\": {\n                   \"open_time\": \"12:00\",\n                   \"close_time\": \"21:00\"\n               },\n               \"owner\": {\n                   \"email\": \"ham.hassansiddiqui@gmail.com\",\n                   \"password\": \"$2b$10$yTWjJmy7DS2R6h8zyDr.6unwkX0teyzU50lT4pvoQo3NYTHZBKmQu\",\n                   \"full_name\": \"Hammad Hassan\",\n                   \"contact_number\": \"03333743790\"\n               },\n               \"storeInfo\": {\n                   \"faq\": \"<p>dfdf</p><p><br></p><p>a</p><p>d</p><p>s</p>\",\n                   \"termAndCondition\": \"<h2>Term and condition</h2><h2>Term and condition</h2><h2>Term and condition</h2><h2><br></h2>\",\n                   \"privacyAndPolicy\": \"<p>Last Updated: May 25, 2019</p><p>Thank you for using aapkidokan.com services. We are dedicated to provide you the best online shopping and delivery experience possible. This Privacy Policy outlines how we respect and value the trust you put in aapkidokan.com. This Policy applies regardless of how you access the aapkidokan.com platform - whether this is via a mobile app or web interface.</p><p><br></p><p>INFORMATION WE COLLECT</p><p>When you use our website or mobile application, you may provide us with information about yourself. For instance, when you create an account with aapkidokan.com you provide us with personal information like your name, email address, and phone number. And if you place an order with aapkidokan.com, we collect information including your address and the details of your order.</p><p>If you log into the services through a third-party service, both we and that third-party may receive some information about you and your use of the service. For example, if you choose to log into the services with your Facebook account, we may receive information from Facebook, such as your name, e-mail address, and public profile information about your contacts. We may also offer social sharing tools that let you share actions on the services with other websites and vice versa. In those cases, the providers of those tools may receive information about you when you use those tools. You should check the privacy policies of these third party services and your settings there for more information.</p><p>We use your contact information to send you offers based on your previous orders and your interests when you use the aapkidokan.com services, either through a browser or mobile app, we automatically receive some technical information about the hardware and software that is being used.</p><p><br></p><p>USE OF YOUR INFORMATION</p><p><strong> We may use the information we collect for various purposes including:</strong></p><ul><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Manage and improve the services aapkidokan.com provide to you</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Administer and operate your account</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Process your orders, receive payments for the orders</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Understand your shopping behavior to develop and improve our products and services and offer you customized content (including advertising and promotions), such as prominently displaying items you purchase frequently</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> Provide customer service, respond to your communications and requests, and resolve complaint and disputes and contact you about your use of appkidokan.com services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">Inform you about online offers, products, services and important changes to the Website and our services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">In our efforts to continually improve our product and service offerings, we collect and analyze demographic and profile data about our users' activity on our Website.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\">We identify and use your IP address to help diagnose problems with our server, and to administer our Website. Your IP address is also used to help identify you and to gather broad demographic information.</li></ul><p>DISCLOSING YOUR PERSONAL INFORMATION</p><p><strong> Your personal information is safe with us, we will never disclose your information to anyone outside the aapkidokan.com except where we have your consent, and we may also disclose the information where:</strong></p><ul><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> To other companies who provide a service to us, For example, we may provide information to advertisers to help them reach the kind of audience they want to target and to enable us to comply with our commitments to our advertisers (e.g. by displaying their advertisements to a target audience).</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We will share your information with entities outside of the Services when we have your consent to do so or it is done at your direction.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information with our retail partners in order to provide and maintain the Services.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information with third parties to process information on our behalf or to provide certain services (such as delivery services, advertising services, or information to better tailor our services to you). For the purposes of this processing or provision of services, we may share your information with such third parties under appropriate confidentiality provisions.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> For legal purposes, we may share your information when we believe that the disclosure is reasonably necessary to (a) comply with applicable laws, regulations, legal process, or requests from law enforcement or regulatory authorities, (b) prevent, detect, or otherwise handle fraud, security, or technical issues, and (c) protect the safety, rights, or property of any person, the public, or aapkidokan.com.</li><li><img src=\\\"http://localhost:4201/assets/img/point.jpg\\\"> We may share your information in connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business by another company. We may also share your information between and among aapkidokan.com and other companies under common control and ownership.</li></ul><p>COOKIES AND OTHER TRACKING TECHNOLOGIES</p><p>We also use cookies to allow you to enter your password less frequently during a session. Cookies can also help us provide information that is targeted to your interests.</p><p>Cookies are small text files that are sent by your computer when you access our services through a browser. We may use session cookies (which expire when you close your browser), persistent cookies (which expire when you choose to clear them from your browser), and other identifiers to collect information from your browser or device that helps us personalize your experience, measure, manage, and display advertising on the services or on other services; understand your usage of the Services and other services in order to serve customized ads and remember that you are logged into the Services. By using your browser settings, you may block cookies or adjust settings for notifications when a cookie is set.</p><p>Additionally, you may encounter \\\"cookies\\\" or other similar devices on certain pages of the Website that are placed by third parties. We do not control the use of cookies by third parties</p><p><br></p><p>WHAT SECURITY MEASURES WE APPLY</p><p>We maintain commercially reasonable technical, administrative, and physical safeguards to ensure your Information is treated securely and in accordance with this Privacy Policy, and to protect against unauthorized access or alteration to, disclosure, or destruction of your Information. We may, for example, use encryption technology to secure your Information by utilizing Secure Socket Layer (SSL) software. Only those authorized employees, contractors, and agents who need to know your Information in connection with the performance of their services are allowed to access this Information.</p><p>It is important for you to protect yourself against unauthorized access to your password and to your devices used to access our Services. You are responsible for keeping your password confidential. For example, ensure that you sign off when you have finished using a shared device.</p><p>Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your Information, we cannot guarantee the security of your Information transmitted to our Platform and any transmission is at your own risk.</p><p><br></p><p>CHANGES TO OUR POLICY</p><p>Our business changes constantly, and our Privacy Policy may therefore also need to change. We reserve the right to change the policy at any time. We will post the current version of this Privacy Policy on the Platform and each such change will be effective upon posting on the Platform or upon the date designated by us as the \\\"effective date\\\".</p><p>We may e-mail periodic reminders of our notices and conditions, but you should check our Platform frequently to see recent changes.</p><p>It is your obligation to regularly check the Privacy Policy. Your continued use of the Platform following any such change constitutes your agreement to this Privacy Policy as so modified</p><p><br></p><p>CONTACT INFORMATION</p><p>If you have any concerns, questions or comments about your Information or our Privacy Policy, please contact us&nbsp;with thorough description at following:</p>\",\n                   \"contactInfo\": \"<h2 class=\\\"ql-align-center\\\"><strong style=\\\"color: rgb(255, 194, 102);\\\">Your personal information is</strong><strong> </strong></h2><p><br></p><p><strong>safe with us, we will never disclose your information to anyone outside the aapkidokan.com except where we have your consent, and we may also disclose the information where:</strong></p><ul><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;To other companies who provide a service to us, For example, we may provide information to advertisers to help them reach the kind of audience they want to target and to enable us to comply with our commitments to our advertisers (e.g. by displaying their advertisements to a target audience).</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We will share your information with entities outside of the Services when we have your consent to do so or it is done at your direction.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information with our retail partners in order to provide and maintain the Services.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information with third parties to process information on our behalf or to provide certain services (such as delivery services, advertising services, or information to better tailor our services to you). For the purposes of this processing or provision of services, we may share your information with such third parties under appropriate confidentiality provisions.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;For legal purposes, we may share your information when we believe that the disclosure is reasonably necessary to (a) comply with applicable laws, regulations, legal process, or requests from law enforcement or regulatory authorities, (b) prevent, detect, or otherwise handle fraud, security, or technical issues, and (c) protect the safety, rights, or property of any person, the public, or aapkidokan.com.</li><li><img src=\\\"https://aapkidokan.com/assets/img/point.jpg\\\">&nbsp;We may share your information in connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business by another company. We may also share your information between and among aapkidokan.com and other companies under common control and ownership.</li></ul>\"\n               },\n               \"picture\": \"12.png\",\n               \"has_express_delivery\": false,\n               \"drivers\": [\n                   \"5d79f10ed22f1e78b7671d74\",\n                   \"5dea892ed85c19035ebf1238\"\n               ],\n               \"status\": 1,\n               \"_id\": \"5d7607c59b5f0f76ee4f68b0\",\n               \"self_delivery\": false,\n               \"address\": [\n                   {\n                       \"coordinates\": {\n                           \"latitude\": 24.9210435,\n                           \"longitude\": 67.10559360000002\n                       },\n                       \"_id\": \"5d7607c59b5f0f76ee4f68b1\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5e262d10d21fe166d8c93049\",\n                       \"shop_no\": \"NA-Class 190/219\",\n                       \"locality\": \"Karachi\",\n                       \"unique_link\": \"TKhr3\"\n                   }\n               ],\n               \"name\": \"METRO\",\n               \"commission\": 3,\n               \"created_at\": \"2019-09-09T08:05:25.721Z\",\n               \"updated_at\": \"2020-03-05T06:26:57.905Z\",\n               \"__v\": 0,\n               \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzYwN2M1OWI1ZjBmNzZlZTRmNjhiMCIsInR5cGUiOjIsImlhdCI6MTU4MzM4ODM4NX0.4uZ9x7xPDnYiRisnZJ7a0UPep8LRYYOD8KXxgi6J-7o\",\n               \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzYwN2M1OWI1ZjBmNzZlZTRmNjhiMCIsImlhdCI6MTU3ODkxMTA4Mn0.k-Ek52UwRftyj8hywTqFUneWb1kW8_pfocE0ayMaFZI\",\n               \"storeCategory\": \"5e4fb5e3beee3369a6b32a0d\",\n               \"delivery_charges\": [\n                   {\n                       \"_id\": \"5e5798dc89c6c4420e8f389a\",\n                       \"order_amount\": 500,\n                       \"charges\": 100\n                   },\n                   {\n                       \"_id\": \"5e5798dc89c6c4420e8f389b\",\n                       \"order_amount\": 800,\n                       \"charges\": 50\n                   },\n                   {\n                       \"_id\": \"5e5798dc89c6c4420e8f389c\",\n                       \"order_amount\": 1001,\n                       \"charges\": 30\n                   }\n               ]\n           },\n           {\n               \"timings\": {\n                   \"open_time\": \"5:00\",\n                   \"close_time\": \"23:00\"\n               },\n               \"owner\": {\n                   \"email\": \"enuke@enuke.com\",\n                   \"password\": \"$2b$10$KgSpGfY2JtUZouE9LNRGlue3ngzQRnYzAc7sF5fw4XBKVmrH/YfnO\",\n                   \"full_name\": \"Enuke\",\n                   \"contact_number\": \"9999988888\"\n               },\n               \"picture\": \"img store.jpg\",\n               \"has_express_delivery\": false,\n               \"drivers\": [\n                   \"5d79f10ed22f1e78b7671d74\"\n               ],\n               \"status\": 1,\n               \"_id\": \"5d778327d22f1e78b7671bd2\",\n               \"self_delivery\": false,\n               \"address\": [\n                   {\n                       \"coordinates\": {\n                           \"latitude\": 24.8607,\n                           \"longitude\": 67.0011\n                       },\n                       \"_id\": \"5d778327d22f1e78b7671bd3\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5e469966d21fe166d8c9356f\",\n                       \"shop_no\": \"20\",\n                       \"locality\": \"test locality\",\n                       \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"unique_link\": \"Z1xaR9L\"\n                   }\n               ],\n               \"name\": \"Enuke Test store\",\n               \"commission\": 20,\n               \"created_at\": \"2019-09-10T11:04:07.991Z\",\n               \"updated_at\": \"2020-03-12T11:46:00.799Z\",\n               \"__v\": 0,\n               \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsImlhdCI6MTU3ODkxMDg5NX0.PV2a49oVu-3BjT8SRb0isTYbP_AogywQDcYaEDtOk-w\",\n               \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsInR5cGUiOjIsImlhdCI6MTU4NDAxMzU2MH0.6UOfFoSELTE40TAMfUz6uBoROUPwlvLb5gcJNkhmwzA\",\n               \"delivery_charges\": [\n                   {\n                       \"_id\": \"5e5dc219f2b4181e2319f026\",\n                       \"order_amount\": 500,\n                       \"charges\": 100\n                   },\n                   {\n                       \"_id\": \"5e5dc219f2b4181e2319f025\",\n                       \"order_amount\": 800,\n                       \"charges\": 50\n                   },\n                   {\n                       \"_id\": \"5e5dc219f2b4181e2319f024\",\n                       \"order_amount\": 1000,\n                       \"charges\": 30\n                   }\n               ],\n               \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\"\n           },\n           {\n               \"timings\": {\n                   \"open_time\": \"11:00\",\n                   \"close_time\": \"23:00\"\n               },\n               \"owner\": {\n                   \"email\": \"nasirahmed110@gmail.com\",\n                   \"password\": \"$2b$10$79BZrJpB2WeHAFRBN5.AFuHJPDse3vRUyBEa3yuYyB9TowG8GnGMm\",\n                   \"full_name\": \"Dr. Farooq \",\n                   \"contact_number\": \"03218994366\"\n               },\n               \"picture\": \"Saveway Store logo.jpg\",\n               \"has_express_delivery\": true,\n               \"drivers\": [\n                   \"5d9dda22d22f1e78b76728c3\",\n                   \"5dea53edd85c19035ebf121d\",\n                   \"5dea5445d85c19035ebf121e\",\n                   \"5dea5479d85c19035ebf121f\",\n                   \"5dea892ed85c19035ebf1238\"\n               ],\n               \"status\": 1,\n               \"_id\": \"5d9eda647a30b1642ce9cb77\",\n               \"self_delivery\": false,\n               \"address\": [\n                   {\n                       \"coordinates\": {\n                           \"latitude\": 24.9128145,\n                           \"longitude\": 67.0802142\n                       },\n                       \"_id\": \"5d9eda647a30b1642ce9cb78\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5e262d43d21fe166d8c9304a\",\n                       \"shop_no\": \"37\",\n                       \"locality\": \"Karachi\",\n                       \"gps_address\": \"saveway\",\n                       \"unique_link\": \"Zsm7Em\"\n                   },\n                   {\n                       \"coordinates\": {\n                           \"latitude\": 24.9128145,\n                           \"longitude\": 67.0802142\n                       },\n                       \"_id\": \"5dea5605d85c19035ebf1229\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"37\",\n                       \"locality\": \"Gulshan\",\n                       \"unique_link\": \"53iRt\"\n                   },\n                   {\n                       \"coordinates\": {\n                           \"latitude\": 24.9128145,\n                           \"longitude\": 67.0802142\n                       },\n                       \"_id\": \"5dea5605d85c19035ebf1228\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5dea5254d85c19035ebf1217\",\n                       \"shop_no\": \"37\",\n                       \"locality\": \"Gulshan\",\n                       \"unique_link\": \"53iRx\"\n                   },\n                   {\n                       \"coordinates\": {\n                           \"latitude\": 24.9128145,\n                           \"longitude\": 67.0802142\n                       },\n                       \"_id\": \"5dea5605d85c19035ebf1227\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5dea52b5d85c19035ebf1218\",\n                       \"shop_no\": \"37\",\n                       \"locality\": \"Gulshan\",\n                       \"unique_link\": \"53iRy\"\n                   },\n                   {\n                       \"coordinates\": {\n                           \"longitude\": 67.0802142,\n                           \"latitude\": 24.9128145\n                       },\n                       \"_id\": \"5dea5605d85c19035ebf1226\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5dea52bfd85c19035ebf1219\",\n                       \"shop_no\": \"37\",\n                       \"locality\": \"Gulshan\",\n                       \"unique_link\": \"53iRz\"\n                   },\n                   {\n                       \"coordinates\": {\n                           \"latitude\": 24.9128145,\n                           \"longitude\": 67.0802142\n                       },\n                       \"_id\": \"5dea5605d85c19035ebf1225\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5dea52d0d85c19035ebf121a\",\n                       \"shop_no\": \"37\",\n                       \"locality\": \"Gulshan\",\n                       \"unique_link\": \"22H1Aw\"\n                   },\n                   {\n                       \"coordinates\": {\n                           \"longitude\": 67.0802142,\n                           \"latitude\": 24.9128145\n                       },\n                       \"_id\": \"5dea5605d85c19035ebf1224\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5dea52e0d85c19035ebf121b\",\n                       \"shop_no\": \"37\",\n                       \"locality\": \"Gulshan\",\n                       \"unique_link\": \"22H1Az\"\n                   },\n                   {\n                       \"coordinates\": {\n                           \"latitude\": 24.9128145,\n                           \"longitude\": 67.0802142\n                       },\n                       \"_id\": \"5dea5605d85c19035ebf1223\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5dea52eed85c19035ebf121c\",\n                       \"shop_no\": \"37\",\n                       \"locality\": \"Gulshan\",\n                       \"unique_link\": \"22H1AC\"\n                   }\n               ],\n               \"name\": \"Saveway Super Store\",\n               \"commission\": 1,\n               \"created_at\": \"2019-10-10T07:14:44.355Z\",\n               \"updated_at\": \"2020-02-24T12:32:19.381Z\",\n               \"__v\": 0,\n               \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOWVkYTY0N2EzMGIxNjQyY2U5Y2I3NyIsInR5cGUiOjIsImlhdCI6MTU3ODk5Mjk1Mn0.Cwk6bEQ73cP-KAMUihbhTuXW4XEScnqEAsm9F8JsFtk\",\n               \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOWVkYTY0N2EzMGIxNjQyY2U5Y2I3NyIsImlhdCI6MTU3ODkxMTMzMX0.nMJVQksXhU572y57lNHSl8Bor3ldNtx1jHPtN0OZIBs\",\n               \"storeCategory\": \"5e4fb5e3beee3369a6b32a0d\",\n               \"delivery_charges\": [\n                   {\n                       \"order_amount\": 500,\n                       \"charges\": 100\n                   },\n                   {\n                       \"order_amount\": 800,\n                       \"charges\": 50\n                   },\n                   {\n                       \"order_amount\": 1000,\n                       \"charges\": 50\n                   }\n               ]\n           },\n           {\n               \"timings\": {\n                   \"open_time\": \"10:00\",\n                   \"close_time\": \"20:00\"\n               },\n               \"owner\": {\n                   \"email\": \"tanzeels@gmail.com\",\n                   \"password\": \"$2b$10$ENYq6vaX5CnvzbqLTVp/WuMVOlh0hsgK37X2KNvsKHSC/oGesQAJK\",\n                   \"full_name\": \"Tanzeel\",\n                   \"contact_number\": \"03018492425\"\n               },\n               \"storeInfo\": {\n                   \"faq\": \"<h5 class=\\\"ql-align-center\\\"><strong style=\\\"color: rgb(0, 102, 204);\\\">What is InstaShop?</strong></h5><p class=\\\"ql-align-center\\\"><br></p><p>The result? More time to enjoy doing the things you love with the people you love the most. InstaShop is available for free on iOS, Android and web.</p><h5><strong>How can I make an order on InstaShop for the first time?</strong></h5><p>First select your location. For your first order, fill-in your address and register your mobile number (your personal information is treated confidentially. For more information please read our privacy policy)</p><p>Feel free to choose a preferred supermarket, browse through a wide variety of products or search for a particular product and add it to your basket by tapping on it. The last step is to review your order, select the preferred payment method and place your order.</p><h5><strong>Does InstaShop provide any other services besides grocery delivery?</strong></h5><p>Although, grocery delivery is the primary service of InstaShop, it does provide other services like delivery of organic products and house cleaning. Moreover, InstaShop is always on the road to expand its services and fulfill the demands of their users.</p><h5><strong>What kind of products do you have?</strong></h5><p>With InstaShop you can order a wide range of products, from fresh fruits to birthday candles. Product lines include: fruits &amp; vegetables, dairy &amp; eggs, bakery, soft drinks &amp; juices, candies &amp; snacks, beauty &amp; hygiene products, meat &amp; fish, cans &amp; jars, baby care products, household care products, pasta and rice, coffee and tea, herbs, pet care and healthy and organic products.</p><h5><strong>Can’t find a product, what can I do?</strong></h5><p>Make sure there are no spelling mistakes in your search words. If the product is unavailable, there are two easy ways to suggest to us to add it. You can either visit the side menu and tap the suggest a product option or suggest the product via the no results search screen. We will do our best to include it in the application as of the earliest.</p>\",\n                   \"termAndCondition\": \"<h1 class=\\\"ql-align-center\\\"><strong>Terms of service</strong></h1><p><br></p><p class=\\\"ql-align-justify\\\"><strong>Welcome to InstaShop!</strong></p><p class=\\\"ql-align-justify\\\">&nbsp;</p><p class=\\\"ql-align-justify\\\">Here you can find all the terms and conditions that we apply in order to perform our provided services at the highest level of our standards. If you’re here, that means you’re smart enough to read them carefully before using our services.</p><p class=\\\"ql-align-justify\\\">&nbsp;</p><p class=\\\"ql-align-justify\\\">PLEASE READ THE FOLLOWING TERMS AND CONDITIONS CAREFULLY. THEY CONTAIN IMPORTANT INFORMATION ABOUT YOUR RIGHTS AND OBLIGATIONS, AS WELL AS LIMITATIONS AND EXCLUSIONS THAT APPLY TO YOUR PURCHASES.</p><p class=\\\"ql-align-justify\\\">&nbsp;</p><p class=\\\"ql-align-justify\\\"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* GENERAL SCOPE</strong></p><p class=\\\"ql-align-justify\\\">&nbsp;</p><p class=\\\"ql-align-justify\\\">InstaShop provides software-based delivery services for goods such as food, beverages and other grocery products (collectively, Groceries). These terms (Terms of Service) apply when you use the InstaShop mobile applications or websites (collectively, Services).</p><p class=\\\"ql-align-justify\\\">&nbsp;</p><p class=\\\"ql-align-justify\\\">By using the Services, you automatically agree to the Terms of Service.</p><p class=\\\"ql-align-justify\\\">&nbsp;</p><p class=\\\"ql-align-justify\\\">InstaShop is a platform for facilitating the exchange of services between individuals (User) who are willing to order Groceries via our partners (Shops) that are willing to collect and deliver the ordered Groceries.</p>\",\n                   \"privacyAndPolicy\": \"<h1 class=\\\"ql-align-center\\\"><strong>Privacy Policy</strong></h1><p><br></p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\"><strong><u>** INSTASHOP PRIVACY POLICY</u></strong></p><p class=\\\"ql-align-justify\\\"><strong><u>------------------------------------------------------------</u></strong></p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\"><strong><u>Last Updated: January 15, 2018</u></strong></p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\">Thank you for using InstaShop! We are committed to providing you the best online shopping and delivery experience possible. This Privacy Policy explains what information we collect, how that information is used, under what circumstances we share information, and the choices you can make about that information. This Policy applies whether you access InstaShop through a browser, through a mobile app, or through some other method.</p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\"><strong><em><u>INFORMATION WE COLLECT</u></em></strong></p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\">* Information you provide to us or allow others to provide to us</p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\">At various points in the InstaShop experience, you may provide us with information about yourself. For example, when you create an account with InstaShop, you provide us with personal information like your name, email address, and zip code. And if you place an order with InstaShop, we collect information including your address, phone number and the details of your order.</p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\">If you log into the InstaShop service through a third-party, we may receive some information about you through them. For example, if you choose to log into InstaShop with your Facebook account, we may receive information about your contacts. We may also offer social sharing tools (such as the Facebook Like button) that let you share actions on InstaShop with other sites and vice versa. You should check the privacy policies of these services and your settings there for more information.</p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\">* Technical information about usage of InstaShop</p><p class=\\\"ql-align-justify\\\"><br></p><p class=\\\"ql-align-justify\\\">When you use the InstaShop services, either through a browser or mobile app, we automatically receive some technical information about the hardware and software that is being used.</p>\",\n                   \"contactInfo\": \"<p>Call to store: 021 3434345</p><p>Store Manager: Hammad Siddique</p>\"\n               },\n               \"picture\": \"cowwww.jpg\",\n               \"has_express_delivery\": false,\n               \"drivers\": [],\n               \"status\": 1,\n               \"_id\": \"5df637e34648a37afa44d109\",\n               \"self_delivery\": true,\n               \"address\": [\n                   {\n                       \"coordinates\": {\n                           \"latitude\": 24.909252523573674,\n                           \"longitude\": 67.13001967493653\n                       },\n                       \"_id\": \"5df637e34648a37afa44d10a\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5e262d10d21fe166d8c93049\",\n                       \"shop_no\": \"37\",\n                       \"locality\": \"Johar\",\n                       \"gps_address\": \"32, Block 18 Gulistan-e-Johar, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"unique_link\": \"Z2jPHpd\"\n                   }\n               ],\n               \"name\": \"Fresh Picked\",\n               \"commission\": 3,\n               \"created_at\": \"2019-12-15T13:40:51.978Z\",\n               \"updated_at\": \"2020-02-27T14:18:26.087Z\",\n               \"__v\": 0,\n               \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjYzN2UzNDY0OGEzN2FmYTQ0ZDEwOSIsInR5cGUiOjIsImlhdCI6MTU4MjgxMDY5NH0.5Ff7eEVx5wgWMSuogS3Gj8_pjlPoZ-lOK4GC_VQKvJo\",\n               \"storeCategory\": \"5e4ff077d463092ecbc36e6e\",\n               \"delivery_charges\": [\n                   {\n                       \"order_amount\": 500,\n                       \"charges\": 100\n                   },\n                   {\n                       \"order_amount\": 800,\n                       \"charges\": 50\n                   },\n                   {\n                       \"order_amount\": 1000,\n                       \"charges\": 50\n                   }\n               ]\n           },\n           {\n               \"timings\": {\n                   \"open_time\": \"11:00\",\n                   \"close_time\": \"23:00\"\n               },\n               \"owner\": {\n                   \"email\": \"najam.sahto@gmail.com\",\n                   \"password\": \"$2b$10$vmlPIwvdU95ThLbZGYFiqOzP9f8qYQPPWyjXHBMwnTYz1LX7bxgny\",\n                   \"full_name\": \"Najam\",\n                   \"contact_number\": \"03012999901\"\n               },\n               \"picture\": \"KNN STORE.jpg\",\n               \"has_express_delivery\": true,\n               \"drivers\": [\n                   \"5d9dda22d22f1e78b76728c3\",\n                   \"5dea5445d85c19035ebf121e\",\n                   \"5dea892ed85c19035ebf1238\",\n                   \"5dea53edd85c19035ebf121d\",\n                   \"5e4e2a39d21fe166d8c94153\",\n                   \"5d79f10ed22f1e78b7671d74\"\n               ],\n               \"status\": 1,\n               \"_id\": \"5e05d5ff954bc84f45786dd6\",\n               \"self_delivery\": false,\n               \"address\": [\n                   {\n                       \"coordinates\": {\n                           \"latitude\": 24.9237623,\n                           \"longitude\": 67.1405999\n                       },\n                       \"_id\": \"5e05d5ff954bc84f45786dd7\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5e262d10d21fe166d8c93049\",\n                       \"shop_no\": \"Shop #101  Street 5, Block 10 Gulistan-e-Johar, Karachi, Karachi City, Sindh Pakistan\",\n                       \"locality\": \"Kamran Chorangi\",\n                       \"gps_address\": \"Street 5, Block 10 Gulistan-e-Johar, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"unique_link\": \"1K9RNH\"\n                   },\n                   {\n                       \"coordinates\": {\n                           \"latitude\": 24.901932227546816,\n                           \"longitude\": 67.08738320527952\n                       },\n                       \"_id\": \"5e26d1f5d21fe166d8c9305b\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5e262d43d21fe166d8c9304a\",\n                       \"shop_no\": \"Shop B 170, Block 18 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"locality\": \"Itehad Park\",\n                       \"gps_address\": \"Plot B 170, Block 18 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"unique_link\": \"2nq4ow\"\n                   }\n               ],\n               \"name\": \"KNN General Store\",\n               \"commission\": 2,\n               \"created_at\": \"2019-12-27T09:59:27.130Z\",\n               \"updated_at\": \"2020-03-04T06:04:30.327Z\",\n               \"__v\": 0,\n               \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMDVkNWZmOTU0YmM4NGY0NTc4NmRkNiIsInR5cGUiOjIsImlhdCI6MTU4MjYzNDIzMH0.SeYPoytSIORJLLNqCoIwEKtRe3rjpr9fr2f5cT6pvsQ\",\n               \"storeCategory\": \"5e4fb5e3beee3369a6b32a0d\",\n               \"delivery_charges\": [\n                   {\n                       \"_id\": \"5e5f44eef0850329955609bb\",\n                       \"order_amount\": 500,\n                       \"charges\": 100\n                   },\n                   {\n                       \"_id\": \"5e5f44eef0850329955609bc\",\n                       \"order_amount\": 800,\n                       \"charges\": 50\n                   },\n                   {\n                       \"_id\": \"5e5f44eef0850329955609bd\",\n                       \"order_amount\": 1000,\n                       \"charges\": 50\n                   }\n               ]\n           },\n           {\n               \"timings\": {\n                   \"open_time\": \"10:00\",\n                   \"close_time\": \"22:00\"\n               },\n               \"owner\": {\n                   \"email\": \"kamran.meo247@gmail.com\",\n                   \"password\": \"$2a$10$Le1.Hc8ZRQFVAnuRnXu.8edg/qwW/WVIdL6geI.eeNZyoqxsJFYBu\",\n                   \"full_name\": \"Kamran\",\n                   \"contact_number\": \"03331232666\"\n               },\n               \"picture\": \"Amir Meat & Vegetable.jpg\",\n               \"has_express_delivery\": true,\n               \"drivers\": [\n                   \"5dea5445d85c19035ebf121e\",\n                   \"5d9dda22d22f1e78b76728c3\",\n                   \"5dea53edd85c19035ebf121d\",\n                   \"5dea892ed85c19035ebf1238\",\n                   \"5e4e2a39d21fe166d8c94153\"\n               ],\n               \"status\": 1,\n               \"_id\": \"5e2eca2ad21fe166d8c93159\",\n               \"self_delivery\": false,\n               \"address\": [\n                   {\n                       \"coordinates\": {\n                           \"latitude\": 24.91601032494211,\n                           \"longitude\": 67.13109974669648\n                       },\n                       \"_id\": \"5e2eca2ad21fe166d8c9315b\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5e262d10d21fe166d8c93049\",\n                       \"shop_no\": \"Shop# 18 Rado Tower Block 12 Gulistan e Johar, Karachi\",\n                       \"locality\": \"Rado Bakery\",\n                       \"gps_address\": \"Service Rd, Block 12 Gulistan-e-Johar, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"unique_link\": \"Z20IAoC\"\n                   },\n                   {\n                       \"coordinates\": {\n                           \"latitude\": 24.91601032494211,\n                           \"longitude\": 67.13110511111451\n                       },\n                       \"_id\": \"5e2eca2ad21fe166d8c9315a\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5e262d43d21fe166d8c9304a\",\n                       \"shop_no\": \"Shop# 18 Rado Tower Block 12 Gulistan e Johar, Karachi\",\n                       \"locality\": \"Rado Bakery\",\n                       \"gps_address\": \"Service Rd, Block 12 Gulistan-e-Johar, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"unique_link\": \"Zw5WqT\"\n                   }\n               ],\n               \"name\": \"Amir Vegetables & Meat Store\",\n               \"commission\": 7,\n               \"created_at\": \"2020-01-27T11:31:54.123Z\",\n               \"updated_at\": \"2020-02-27T17:59:15.739Z\",\n               \"__v\": 0,\n               \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMmVjYTJhZDIxZmUxNjZkOGM5MzE1OSIsInR5cGUiOjIsImlhdCI6MTU4MjgyNjM1NX0.GCH_MYX_i7K2k9rLjqpeG8Lly2zOhLwXpM_Upcpdh7E\",\n               \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMmVjYTJhZDIxZmUxNjZkOGM5MzE1OSIsImlhdCI6MTU4MTUyOTMyOH0.tRILHO1F1oc07qfxWylIy-JXV-Zd_vS_mgqKtEyBvqA\",\n               \"delivery_charges\": [\n                   {\n                       \"order_amount\": 500,\n                       \"charges\": 100\n                   },\n                   {\n                       \"order_amount\": 800,\n                       \"charges\": 50\n                   },\n                   {\n                       \"order_amount\": 1000,\n                       \"charges\": 50\n                   }\n               ]\n           },\n           {\n               \"timings\": {\n                   \"open_time\": \"11:00\",\n                   \"close_time\": \"23:00\"\n               },\n               \"owner\": {\n                   \"email\": \"faraz.marhaba@gmail.com\",\n                   \"password\": \"$2a$10$rdhe4wMQ8ffq.O/9.mFG5uhiQLoaLzvAlRvKo4aRnZY7RMlk7xzN2\",\n                   \"full_name\": \"Faraz \",\n                   \"contact_number\": \"03133078092\"\n               },\n               \"picture\": \"Logo Design 2.png\",\n               \"has_express_delivery\": true,\n               \"drivers\": [\n                   \"5dea5445d85c19035ebf121e\",\n                   \"5d9dda22d22f1e78b76728c3\",\n                   \"5dea53edd85c19035ebf121d\"\n               ],\n               \"status\": 1,\n               \"_id\": \"5e469bf4d21fe166d8c93570\",\n               \"self_delivery\": false,\n               \"address\": [\n                   {\n                       \"coordinates\": {\n                           \"latitude\": 25.0588778,\n                           \"longitude\": 67.3108652\n                       },\n                       \"_id\": \"5e469bf4d21fe166d8c93571\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5e469966d21fe166d8c9356f\",\n                       \"shop_no\": \"Store no. 02\",\n                       \"locality\": \"Precent 10/10A Bahria Town \",\n                       \"gps_address\": \"marhaba supermarket\",\n                       \"unique_link\": \"Z1Q5xV6\"\n                   }\n               ],\n               \"name\": \"Marhaba Superstore\",\n               \"commission\": 2,\n               \"created_at\": \"2020-02-14T13:09:08.142Z\",\n               \"updated_at\": \"2020-02-20T20:11:14.573Z\",\n               \"__v\": 0,\n               \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDY5YmY0ZDIxZmUxNjZkOGM5MzU3MCIsInR5cGUiOjIsImlhdCI6MTU4MjE5MTMxNH0.SI6LJlIzYdM5Lz58xfuJhWyR6z3iO4ukY5hd3yKTiPk\",\n               \"delivery_charges\": [\n                   {\n                       \"order_amount\": 500,\n                       \"charges\": 100\n                   },\n                   {\n                       \"order_amount\": 800,\n                       \"charges\": 50\n                   },\n                   {\n                       \"order_amount\": 1000,\n                       \"charges\": 50\n                   }\n               ]\n           },\n           {\n               \"timings\": {\n                   \"open_time\": \"12:00\",\n                   \"close_time\": \"14:00\"\n               },\n               \"owner\": {\n                   \"full_name\": \"ere\",\n                   \"email\": \"fd@dfd.df\",\n                   \"contact_number\": \"1234567890\",\n                   \"password\": \"$2b$10$AoH4Hv0wtqB2KRxE130LquUUExVKHDoOwZ5Du7fKl2GpKheN7afzO\"\n               },\n               \"storeInfo\": \"{\\\"faq\\\":\\\"<p>The easiest way to order your groceries and have them delivered to your doorstep in less than 60 or 120 minutes average time depending on your Location. Groceries delivered to you in just a few clicks! No need to go out to the supermarket or local store. Access our app from anywhere, select your trusted store, browse your products and click to buy! You can receive your delivery to any address, home, office or the park.</p><p>Aapkidokan records all orders history. Re-order with just a click.</p><p>We offer a convenient and seamless grocery shopping experience that frees you from the unavoidable chore of heading to the supermarket with all the challenges you may face there. You will have luxury time to enjoy doing the things you love the most with the people you love the most!The easiest way to order your groceries and have them delivered to your doorstep in less than 60 or 120 minutes average time depending on your Location. Groceries delivered to you in just a few clicks! No need to go out to the supermarket or local store. Access our app from anywhere, select your trusted store, browse your products and click to buy! You can receive your delivery to any address, home, office or the park.</p><p>Aapkidokan records all orders history. Re-order with just a click.</p><p>We offer a convenient and seamless grocery shopping experience that frees you from the unavoidable chore of heading to the supermarket with all the challenges you may face there. You will have luxury time to enjoy doing the things you love the most with the people you love the most!</p>\\\",\\\"termAndCondition\\\":\\\"<p>The easiest way to order your groceries and have them delivered to your doorstep in less than 60 or 120 minutes average time depending on your Location. Groceries delivered to you in just a few clicks! No need to go out to the supermarket or local store. Access our app from anywhere, select your trusted store, browse your products and click to buy! You can receive your delivery to any address, home, office or the park.</p><p>Aapkidokan records all orders history. Re-order with just a click.</p><p>We offer a convenient and seamless grocery shopping experience that frees you from the unavoidable chore of heading to the supermarket with all the challenges you may face there. You will have luxury time to enjoy doing the things you love the most with the people you love the most!</p>\\\",\\\"privacyAndPolicy\\\":\\\"<p>The easiest way to order your groceries and have them delivered to your doorstep in less than 60 or 120 minutes average time depending on your Location. Groceries delivered to you in just a few clicks! No need to go out to the supermarket or local store. Access our app from anywhere, select your trusted store, browse your products and click to buy! You can receive your delivery to any address, home, office or the park.</p><p>Aapkidokan records all orders history. Re-order with just a click.</p><p>We offer a convenient and seamless grocery shopping experience that frees you from the unavoidable chore of heading to the supermarket with all the challenges you may face there. You will have luxury time to enjoy doing the things you love the most with the people you love the most!</p>\\\",\\\"contactInfo\\\":\\\"<p>The easiest way to order your groceries and have them delivered to your doorstep in less than 60 or 120 minutes average time depending on your Location. Groceries delivered to you in just a few clicks! No need to go out to the supermarket or local store. Access our app from anywhere, select your trusted store, browse your products and click to buy! You can receive your delivery to any address, home, office or the park.</p><p>Aapkidokan records all orders history. Re-order with just a click.</p><p>We offer a convenient and seamless grocery shopping experience that frees you from the unavoidable chore of heading to the supermarket with all the challenges you may face there. You will have luxury time to enjoy doing the things you love the most with the people you love the most!</p>\\\"}\",\n               \"picture\": \"djcbsdbfuisdgfhs.jpeg\",\n               \"has_express_delivery\": false,\n               \"drivers\": [],\n               \"status\": 1,\n               \"_id\": \"5e54ec353437456289561e05\",\n               \"self_delivery\": false,\n               \"address\": [\n                   {\n                       \"coordinates\": {\n                           \"latitude\": 24.8607,\n                           \"longitude\": 67.0011\n                       },\n                       \"_id\": \"5e54ec353437456289561e06\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5e262d10d21fe166d8c93049\",\n                       \"shop_no\": \"123\",\n                       \"locality\": \"Sector 14\",\n                       \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"unique_link\": \"Zi0mKi\"\n                   }\n               ],\n               \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\",\n               \"name\": \"Proper Store\",\n               \"commission\": 123,\n               \"delivery_charges\": [\n                   {\n                       \"_id\": \"5e54ec353437456289561e09\",\n                       \"order_amount\": 500,\n                       \"charges\": 100\n                   },\n                   {\n                       \"_id\": \"5e54ec353437456289561e08\",\n                       \"order_amount\": 800,\n                       \"charges\": 43\n                   },\n                   {\n                       \"_id\": \"5e54ec353437456289561e07\",\n                       \"order_amount\": 1000,\n                       \"charges\": 51\n                   }\n               ],\n               \"created_at\": \"2020-02-25T09:43:17.950Z\",\n               \"updated_at\": \"2020-03-03T11:56:41.730Z\",\n               \"__v\": 0,\n               \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNTRlYzM1MzQzNzQ1NjI4OTU2MWUwNSIsInR5cGUiOjIsImlhdCI6MTU4Mjc4OTEzOX0.QaO8L6S-NnyPAhjX3KD3lSZFCoC3Jgd9OdRMlHhupiQ\",\n               \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNTRlYzM1MzQzNzQ1NjI4OTU2MWUwNSIsImlhdCI6MTU4Mjc4OTIyMX0.zaSv10ArklXufF3OUvN1vL2EKTuZHNJa9c121qYMquU\"\n           }\n       ],\n       \"paginationVariables\": {\n           \"pageNo\": 1,\n           \"perPage\": 10,\n           \"totalItems\": 13\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>401</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n    \"success\": false,\n    \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/store.js",
    "groupTitle": "Admin-Store"
  },
  {
    "type": "Put",
    "url": "api/admin/store/:id",
    "title": "Update a Store",
    "name": "Update_a_Store",
    "group": "Admin-Store",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "drivers:",
            "description": "<p>Array of Driver Id</p>"
          },
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "timings:",
            "description": "<p>An Object with fields &quot;open_time&quot; (Open Time of Store),&quot;close_time&quot; (Closing Time of Store).</p>"
          },
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "owner:",
            "description": "<p>An Object with fields &quot;email&quot; (Email id of owner),&quot;password&quot; (Password of Owner), &quot;full_name&quot; (Full Name of Owner), &quot;contact_number&quot; (Contact Number of Owner).</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "has_express_delivery",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>: Store Id</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "self_delivery",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "address:An",
            "description": "<p>Array with fields &quot;coordinates&quot; (An Object with fields &quot;latitude&quot;, &quot;longitude&quot;),  &quot;_id&quot; (Address Id), &quot;city_id&quot; (City ID), &quot;area_id&quot;(Area Id),&quot;shop_no&quot; (Shop Number), &quot;locality&quot; (Locality of Store), &quot;unique_link&quot;: (Unique Link)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "commission",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "delivery_charges:",
            "description": "<p>An array with fields with &quot;_id&quot;,&quot;order_amount&quot; (Order Amount),&quot;charges&quot; (Charges)}</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "storeCategory:",
            "description": "<p>Store Category Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"store\": {\n           \"timings\": {\n               \"open_time\": \"10:00\",\n               \"close_time\": \"22:30\"\n           },\n           \"owner\": {\n               \"email\": \"mart360shop@gmail.com\",\n               \"password\": \"$2b$10$EQYJ8YwRi3YtsmiSV49rlOuFVHrss/a1bFVTX0KafVSZw1ri1WHWO\",\n               \"full_name\": \"Muhammad Abdullah\",\n               \"contact_number\": \"03218293207\"\n           },\n           \"picture\": \"Screenshot from 2020-01-27 12-55-21.png\",\n           \"has_express_delivery\": true,\n           \"drivers\": [\n               \"5d9dda22d22f1e78b76728c3\"\n           ],\n           \"status\": 2,\n           \"_id\": \"5e2ac5fbd21fe166d8c930b4\",\n           \"self_delivery\": false,\n           \"address\": [\n               {\n                   \"coordinates\": {\n                       \"latitude\": 24.8005095,\n                       \"longitude\": 67.071469817\n                   },\n                   \"_id\": \"5e2ac5fbd21fe166d8c930b5\",\n                   \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                   \"area_id\": \"5e2ac47dd21fe166d8c930b3\",\n                   \"shop_no\": \"18C,Lane 9 off Khe-e-ittehad, DHA Phase 6\",\n                   \"locality\": \"DHA Phase - 6\",\n                   \"unique_link\": \"2lM7OD\"\n               }\n           ],\n           \"name\": \"MART 360\",\n           \"commission\": 0,\n           \"created_at\": \"2020-01-24T10:24:59.765Z\",\n           \"updated_at\": \"2020-03-18T12:39:16.709Z\",\n           \"__v\": 0,\n           \"delivery_charges\": [\n               {\n                   \"_id\": \"5e5e0aedaa5dc75f356b1288\",\n                   \"order_amount\": 500,\n                   \"charges\": 100\n               },\n               {\n                   \"_id\": \"5e5e0aedaa5dc75f356b1289\",\n                   \"order_amount\": 800,\n                   \"charges\": 50\n               },\n               {\n                   \"_id\": \"5e5e0aedaa5dc75f356b128a\",\n                   \"order_amount\": 1000,\n                   \"charges\": 60\n               }\n           ],\n           \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>500</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "\n{\n   \"success\": false,\n   \"singleStringMessage\": \"Cannot read property 'filename' of undefined\",\n   \"error\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/store.js",
    "groupTitle": "Admin-Store"
  },
  {
    "type": "post",
    "url": "/api/admin/auth/login",
    "title": "Admin Login",
    "name": "Admin_Login",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Admin's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Admin's password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"code\": 200,\n  \"data\": {\n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.\n      eyJpZCI6IjVjZjY1ZDFjMWM5ZDQ0MDAwMDkyNWQ1MiIsInR5c\n      GUiOjEsImlhdCI6MTU4NDQyOTg4OH0.jAyIKa9yeri-\n      3DpPltN9BDVpUcddqKXHyWrF_BD_Zow\",\n      \"user\": {\n          \"permissions\": [\n              \"DASHBOARD\",\n              \"STORE\",\n              \"CUSTOMER\",\n              \"DRIVER\",\n              \"CATEGORY\",\n              \"PRODUCT\",\n              \"ORDER\",\n              \"REPORT\",\n              \"COUPON\",\n              \"SETTING\"\n          ],\n          \"status\": 1,\n          \"_id\": \"5cf65d1c1c9d440000925d52\",\n          \"name\": \"Khushal Pahuja\",\n          \"email\": \"khushal.pahuja@enukesoftware.com\",\n          \"password\": null,\n          \"updated_at\": \"2020-02-24T09:27:57.799Z\"\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedError",
            "description": "<p>Username or Password is invalid. HTTP/1.1 200 OK { &quot;success&quot;: false, &quot;code&quot;: { &quot;code&quot;: 401, &quot;name&quot;: &quot;UNAUTHORIZED&quot;, &quot;description&quot;: &quot;You are not logged in, e.g. using a valid access token.&quot; }, &quot;singleStringMessage&quot;: &quot;Username or Password is invalid&quot;, &quot;error&quot;: {} }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/auth.js",
    "groupTitle": "Admin"
  },
  {
    "type": "Get",
    "url": "/api/admin/area/cities",
    "title": "Get City List",
    "name": "Get_City_List",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "pageNo",
            "description": "<p>Page No</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "perPage",
            "description": "<p>Per Page items to be displayed.</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Item to be searched</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "Http/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"cities\": [\n           {\n               \"status\": 1,\n               \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n               \"name\": \"Karachi\",\n               \"created_at\": \"2019-09-09T07:47:28.591Z\",\n               \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n               \"__v\": 0\n           },\n           {\n               \"status\": 1,\n               \"_id\": \"5e4fb1919542d566f68a716e\",\n               \"name\": \"sdsds\",\n               \"created_at\": \"2020-02-21T10:31:45.695Z\",\n               \"updated_at\": \"2020-02-21T10:31:45.695Z\",\n               \"__v\": 0\n           }\n       ],\n       \"totalCityCount\": 2\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/admin/area.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/customer/areas",
    "title": "Get Area List",
    "name": "Get_Area_List",
    "group": "Customer-Area",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>id of the city to get its areas.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"city\": {\n            \"areas\": [\n                {\n                    \"_id\": \"5cd01b02c1a6f3317fd9f072\",\n                    \"name\": \"sector-14\",\n                    \"created_at\": \"2019-05-06T11:31:14.865Z\",\n                    \"updated_at\": \"2019-05-06T11:31:14.865Z\",\n                    \"__v\": 0\n                },\n                {\n                    \"_id\": \"5cd01b0cf03a5831a00732d9\",\n                    \"name\": \"sector-12\",\n                    \"created_at\": \"2019-05-06T11:31:24.523Z\",\n                    \"updated_at\": \"2019-05-06T11:31:24.523Z\",\n                    \"__v\": 0\n                }\n            ],\n            \"_id\": \"5cd01c1839b32d325085052d\",\n            \"name\": \"Gurgaon\",\n            \"created_at\": \"2019-05-06T11:35:52.520Z\",\n            \"updated_at\": \"2019-05-06T11:35:52.520Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Facebook Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Facebook error invalid token:",
          "content": "{\n    \"success\": false,\n    \"singleStringMessage\": \"400 - {\\\"error\\\":{\\\"message\\\":\\\"Error validating access token: Session has expired on Thursday, 02-May-19 09:00:00 PDT. The current time is Thursday, 09-May-19 05:47:57 PDT.\\\",\\\"type\\\":\\\"OAuthException\\\",\\\"code\\\":190,\\\"error_subcode\\\":463,\\\"fbtrace_id\\\":\\\"AYxofrM9uxc\\\"}}\",\n    \"error\": {\n        \"error\": {\n            \"message\": \"Error validating access token: Session has expired on Thursday, 02-May-19 09:00:00 PDT. The current time is Thursday, 09-May-19 05:47:57 PDT.\",\n            \"type\": \"OAuthException\",\n            \"code\": 190,\n            \"error_subcode\": 463,\n            \"fbtrace_id\": \"AYxofrM9uxc\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/common.js",
    "groupTitle": "Customer-Area"
  },
  {
    "type": "post",
    "url": "/api/customer/auth/change-password",
    "title": "Change Password",
    "name": "Change_Password",
    "group": "Customer-Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>user's new password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": null,\n            \"verification_token\": \"4afee0fe-e6cd-4dbf-8d6f-9c87c1af3f6d\",\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T12:00:31.950Z\",\n            \"__v\": 0\n        },\n        \"message\": \"Password has been updated Successfully\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Password is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Password is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 401,\n        \"name\": \"UNAUTHORIZED\",\n        \"description\": \"You are not logged in, e.g. using a valid access token.\"\n    },\n    \"singleStringMessage\": \"Password is invalid\",\n    \"error\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/auth.js",
    "groupTitle": "Customer-Auth"
  },
  {
    "type": "post",
    "url": "/api/customer/auth/facebook-login",
    "title": "Facebook Login",
    "name": "Facebook_Login",
    "group": "Customer-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>user id obtained from facebook.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token obtained from facebook.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": 438468363,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com || null\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": null,\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T12:00:31.950Z\",\n            \"__v\": 0\n        },\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Facebook Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Facebook error invalid token:",
          "content": "{\n    \"success\": false,\n    \"singleStringMessage\": \"400 - {\\\"error\\\":{\\\"message\\\":\\\"Error validating access token: Session has expired on Thursday, 02-May-19 09:00:00 PDT. The current time is Thursday, 09-May-19 05:47:57 PDT.\\\",\\\"type\\\":\\\"OAuthException\\\",\\\"code\\\":190,\\\"error_subcode\\\":463,\\\"fbtrace_id\\\":\\\"AYxofrM9uxc\\\"}}\",\n    \"error\": {\n        \"error\": {\n            \"message\": \"Error validating access token: Session has expired on Thursday, 02-May-19 09:00:00 PDT. The current time is Thursday, 09-May-19 05:47:57 PDT.\",\n            \"type\": \"OAuthException\",\n            \"code\": 190,\n            \"error_subcode\": 463,\n            \"fbtrace_id\": \"AYxofrM9uxc\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/auth.js",
    "groupTitle": "Customer-Auth"
  },
  {
    "type": "post",
    "url": "/api/customer/auth/forget-password",
    "title": "Forgot Password",
    "name": "Forgot_Password",
    "group": "Customer-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>user's contact number.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"verification_token\": \"4afee0fe-e6cd-4dbf-8d6f-9c87c1af3f6d\",\n        \"message\": \"An OTP was sent to your contact number. Please check.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Contact Number is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Contact Number is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Contact number is not registered With Us\",\n    \"error\": {\n        \"validation\": {\n            \"contact_number\": [\n                \"Contact number is not registered With Us\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/auth.js",
    "groupTitle": "Customer-Auth"
  },
  {
    "type": "post",
    "url": "/api/customer/auth/google-login",
    "title": "Google Login",
    "name": "Google_Login",
    "group": "Customer-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_token",
            "description": "<p>google token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": 64736438,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": null,\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T12:00:31.950Z\",\n            \"__v\": 0\n        },\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Google Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Google error invalid token:",
          "content": "{\n    \"success\": false,\n    \"singleStringMessage\": \"Token used too late, 1557405751.128 > 1556626806: {\\\"iss\\\":\\\"accounts.google.com\\\",\\\"azp\\\":\\\"210682269861-pruagrtf51m3t90cn9eru3lk0hs1gaic.apps.googleusercontent.com\\\",\\\"aud\\\":\\\"210682269861-pruagrtf51m3t90cn9eru3lk0hs1gaic.apps.googleusercontent.com\\\",\\\"sub\\\":\\\"111692623871330382648\\\",\\\"email\\\":\\\"khushalp1996@gmail.com\\\",\\\"email_verified\\\":true,\\\"at_hash\\\":\\\"-ZHn89tIf-KuMnR6nbqFSA\\\",\\\"name\\\":\\\"Khushal Pahuja\\\",\\\"picture\\\":\\\"https://lh5.googleusercontent.com/-p6ZLexYjO5U/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfSeiuC8r2fgg-IBhfkho9fn0kGLQ/s96-c/photo.jpg\\\",\\\"given_name\\\":\\\"Khushal\\\",\\\"family_name\\\":\\\"Pahuja\\\",\\\"locale\\\":\\\"en\\\",\\\"iat\\\":1556622906,\\\"exp\\\":1556626506,\\\"jti\\\":\\\"f3c7b936c63244316f76415b1b0442b626e4087c\\\"}\",\n    \"error\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/auth.js",
    "groupTitle": "Customer-Auth"
  },
  {
    "type": "post",
    "url": "/api/customer/auth/register",
    "title": "User Registration",
    "name": "Register_User",
    "group": "Customer-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user's email .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>user's contact number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "full_name",
            "description": "<p>user's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"verification_token\": \"68f63534-631f-41a4-8cde-2d7b55e2a276\",\n        \"message\": \"An OTP was sent to your contact number. Please check.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyExists",
            "description": "<p>The user already exists.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Email address already exists.\",\n    \"error\": {\n        \"validation\": {\n            \"email\": [\n                \"Email address already exists.\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/auth.js",
    "groupTitle": "Customer-Auth"
  },
  {
    "type": "post",
    "url": "/api/customer/auth/reset-password",
    "title": "Reset Password",
    "name": "Reset_Password",
    "group": "Customer-Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": null,\n            \"verification_token\": \"4afee0fe-e6cd-4dbf-8d6f-9c87c1af3f6d\",\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T12:00:31.950Z\",\n            \"__v\": 0\n        },\n        \"message\": \"Password has been updated Successfully\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Password is required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Password is required:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Password is a required field\",\n    \"error\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/auth.js",
    "groupTitle": "Customer-Auth"
  },
  {
    "type": "post",
    "url": "/api/customer/auth/login",
    "title": "User Login",
    "name": "User_Login",
    "group": "Customer-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>user's email or contact number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZDQwYmExZTVjNTZiMzQwYWEyYTliYyIsImlhdCI6MTU1NzQwMTM1NX0.owNAZZXZP9BcannAZb6SmCJdDIn0xwj81WzrtCLhbAE\",\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": null,\n            \"verification_token\": \"68f63534-631f-41a4-8cde-2d7b55e2a276\",\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T11:14:41.688Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedError",
            "description": "<p>Username or Password is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 401,\n        \"name\": \"UNAUTHORIZED\",\n        \"description\": \"You are not logged in, e.g. using a valid access token.\"\n    },\n    \"singleStringMessage\": \"Username or Password is invalid\",\n    \"error\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/auth.js",
    "groupTitle": "Customer-Auth"
  },
  {
    "type": "post",
    "url": "/api/customer/auth/verify-otp",
    "title": "User Otp Verification",
    "name": "User_Otp_Verification",
    "group": "Customer-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>user's contact number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>otp.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verification_token",
            "description": "<p>verification token send in previous response.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": \"$2b$10$kDWy7UMqIXmqxMSq6hcgpuiSb4BjDQcB5WcNGTYsNB3ZqI0BNnuqq\",\n            \"verification_token\": \"68f63534-631f-41a4-8cde-2d7b55e2a276\",\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T11:14:41.688Z\",\n            \"__v\": 0\n        },\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZDQwYmExZTVjNTZiMzQwYWEyYTliYyIsInR5cGUiOjMsImlhdCI6MTU1NzQwMTgxOH0.osWeW6W3X6j74wVYaAwgjbH2vR0rWQyegX0HUw-5O1o\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Verification token is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Verification token is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Verification token is invalid\",\n    \"error\": {\n        \"validation\": {\n            \"verification_token\": [\n                \"Verification token is invalid\"\n            ]\n        }\n    }\n}",
          "type": "json"
        },
        {
          "title": "Otp is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Invalid otp. Please try again.\"\n    error: {\n           message: \"Invalid otp. Please try again.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/auth.js",
    "groupTitle": "Customer-Auth"
  },
  {
    "type": "get",
    "url": "/api/customer/category",
    "title": "Get Categories",
    "name": "Get_Categories",
    "group": "Customer-Category",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "store_id",
            "description": "<p>ID of the store to get categories of.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"categories\": [\n            {\n                \"_id\": \"5cd55cec828e75341ca089cb\",\n                \"status\": 1,\n                \"parent\": null,\n                \"name\": \"Dairy Products\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"created_at\": \"2019-05-10T11:13:48.073Z\",\n                \"updated_at\": \"2019-05-10T11:13:48.073Z\",\n                \"__v\": 0,\n                \"subcategories\": [\n                    {\n                        \"_id\": \"5cd55d96828e75341ca089cc\",\n                        \"status\": 1,\n                        \"parent\": \"5cd55cec828e75341ca089cb\",\n                        \"name\": \"Milk\",\n                        \"store_id\": \"5cd1259b63aff817c37afb02\",\n                        \"created_at\": \"2019-05-10T11:16:38.799Z\",\n                        \"updated_at\": \"2019-05-10T11:16:38.799Z\",\n                        \"__v\": 0\n                    },\n                    {\n                        \"_id\": \"5cdac8de1c9d4400003f31b6\",\n                        \"status\": 2,\n                        \"name\": \"cheese\",\n                        \"store_id\": \"5cd1259b63aff817c37afb02\",\n                        \"parent\": \"5cd55cec828e75341ca089cb\"\n                    }\n                ]\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Store Id is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Store Id is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"The Store Id is a required field\",\n    \"error\": {\n        \"validation\": {\n            \"store_id\": [\n                \"The Store Id is a required field\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/category.js",
    "groupTitle": "Customer-Category"
  },
  {
    "type": "get",
    "url": "/api/customer/category/:id",
    "title": "Get Category details",
    "name": "Get_Category_details",
    "group": "Customer-Category",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the category to get subcategories of.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"category\": {\n            \"_id\": \"5ce533a8a9f87e3f2478103d\",\n            \"status\": 1,\n            \"parent\": null,\n            \"store_id\": \"5ce513d4a2041b29b2543750\",\n            \"name\": \"Refreshments\",\n            \"picture\": \"ivvfch0jvz5g6y6.png\",\n            \"created_at\": \"2019-05-22T11:34:00.018Z\",\n            \"updated_at\": \"2019-05-22T11:34:00.018Z\",\n            \"__v\": 0,\n            \"subcategories\": [\n                {\n                    \"_id\": \"5ce691368c74ad496365d5b0\",\n                    \"status\": 1,\n                    \"parent\": \"5ce533a8a9f87e3f2478103d\",\n                    \"store_id\": \"5ce513d4a2041b29b2543750\",\n                    \"name\": \"Soft Drinks\",\n                    \"picture\": \"ivvfehvjw0mq6ve.jpg\",\n                    \"created_at\": \"2019-05-23T12:25:26.112Z\",\n                    \"updated_at\": \"2019-05-23T12:25:26.112Z\",\n                    \"__v\": 0\n                },\n                {\n                    \"_id\": \"5ce69a6ac977714e4b66f0f4\",\n                    \"status\": 1,\n                    \"parent\": \"5ce533a8a9f87e3f2478103d\",\n                    \"store_id\": \"5ce513d4a2041b29b2543750\",\n                    \"name\": \"Water\",\n                    \"picture\": \"ivvffgrjw0o4pcm.jpg\",\n                    \"created_at\": \"2019-05-23T13:04:42.877Z\",\n                    \"updated_at\": \"2019-05-23T13:04:42.877Z\",\n                    \"__v\": 0\n                }\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/category.js",
    "groupTitle": "Customer-Category"
  },
  {
    "type": "get",
    "url": "/api/customer/cities",
    "title": "Get Cities List",
    "name": "Cities_List",
    "group": "Customer-Common",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"cities\": [\n            {\n                \"_id\": \"5cd01c1839b32d325085052d\",\n                \"name\": \"Gurgaon\",\n                \"created_at\": \"2019-05-06T11:35:52.520Z\",\n                \"updated_at\": \"2019-05-06T11:35:52.520Z\",\n                \"__v\": 0\n            },\n            {\n                \"_id\": \"5cd02537b1ef5e3bfb165f5c\",\n                \"name\": \"Gurgaon New\",\n                \"created_at\": \"2019-05-06T12:14:47.699Z\",\n                \"updated_at\": \"2019-05-06T12:14:47.699Z\",\n                \"__v\": 0\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/common.js",
    "groupTitle": "Customer-Common"
  },
  {
    "type": "get",
    "url": "/api/customer/contact-us",
    "title": "Contact Us",
    "name": "Contact_Us",
    "group": "Customer-Common",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": " HTTP/1.1 200 OK\n {\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"contactRequest\": {\n           \"_id\": \"5e787de42daf030e5c836583\",\n           \"name\": \"Siju Samson\",\n           \"message\": \"12345\",\n           \"email\": \"siju.samson@enukesoftware.com\",\n           \"created_at\": \"2020-03-23T09:14:12.057Z\",\n           \"updated_at\": \"2020-03-23T09:14:12.057Z\",\n           \"__v\": 0\n       },\n       \"mailData\": {\n           \"envelope\": {\n               \"from\": \"aapkidokan@gmail.com\",\n               \"to\": [\n                   \"siju.samson@enukesoftware.com\"\n               ]\n           },\n           \"messageId\": \"<0101017106abc18f-290207e7-5aed-431b-ba00-8a276d06fa19-000000@us-west-2.amazonses.com>\",\n           \"response\": \"0101017106abc18f-290207e7-5aed-431b-ba00-8a276d06fa19-000000\",\n           \"raw\": {\n               \"type\": \"Buffer\",\n               \"data\": [\n                   67,\n                   111,\n                   110,\n                   116,\n                   101,\n                   110,\n                   116,\n                   45,\n                   84,\n                   121,\n                   112,\n                   101,\n                   58,\n                   32,\n                   116,\n                   101,\n                   120,\n                   116,\n                   47,\n                   104,\n                   116,\n                   109,\n                   108,\n                   13,\n                   10,\n                   70,\n                   114,\n                   111,\n                   109,\n                   58,\n                   32,\n                   97,\n                   97,\n                   112,\n                   107,\n                   105,\n                   100,\n                   111,\n                   107,\n                   97,\n                   110,\n                   64,\n                   103,\n                   109,\n                   97,\n                   105,\n                   108,\n                   46,\n                   99,\n                   111,\n                   109,\n                   13,\n                   10,\n                   84,\n                   111,\n                   58,\n                   32,\n                   115,\n                   105,\n                   106,\n                   117,\n                   46,\n                   115,\n                   97,\n                   109,\n                   115,\n                   111,\n                   110,\n                   64,\n                   101,\n                   110,\n                   117,\n                   107,\n                   101,\n                   115,\n                   111,\n                   102,\n                   116,\n                   119,\n                   97,\n                   114,\n                   101,\n                   46,\n                   99,\n                   111,\n                   109,\n                   13,\n                   10,\n                   83,\n                   117,\n                   98,\n                   106,\n                   101,\n                   99,\n                   116,\n                   58,\n                   32,\n                   79,\n                   114,\n                   100,\n                   101,\n                   114,\n                   32,\n                   66,\n                   105,\n                   108,\n                   108,\n                   13,\n                   10,\n                   77,\n                   101,\n                   115,\n                   115,\n                   97,\n                   103,\n                   101,\n                   45,\n                   73,\n                   68,\n                   58,\n                   32,\n                   60,\n                   98,\n                   50,\n                   51,\n                   55,\n                   56,\n                   51,\n                   49,\n                   55,\n                   45,\n                   100,\n                   50,\n                   98,\n                   57,\n                   45,\n                   55,\n                   98,\n                   55,\n                   100,\n                   45,\n                   99,\n                   99,\n                   102,\n                   55,\n                   45,\n                   52,\n                   51,\n                   52,\n                   48,\n                   48,\n                   102,\n                   101,\n                   57,\n                   52,\n                   102,\n                   102,\n                   52,\n                   64,\n                   103,\n                   109,\n                   97,\n                   105,\n                   108,\n                   46,\n                   99,\n                   111,\n                   109,\n                   62,\n                   13,\n                   10,\n                   67,\n                   111,\n                   110,\n                   116,\n                   101,\n                   110,\n                   116,\n                   45,\n                   84,\n                   114,\n                   97,\n                   110,\n                   115,\n                   102,\n                   101,\n                   114,\n                   45,\n                   69,\n                   110,\n                   99,\n                   111,\n                   100,\n                   105,\n                   110,\n                   103,\n                   58,\n                   32,\n                   113,\n                   117,\n                   111,\n                   116,\n                   101,\n                   100,\n                   45,\n                   112,\n                   114,\n                   105,\n                   110,\n                   116,\n                   97,\n                   98,\n                   108,\n                   101,\n                   13,\n                   10,\n                   68,\n                   97,\n                   116,\n                   101,\n                   58,\n                   32,\n                   77,\n                   111,\n                   110,\n                   44,\n                   32,\n                   50,\n                   51,\n                   32,\n                   77,\n                   97,\n                   114,\n                   32,\n                   50,\n                   48,\n                   50,\n                   48,\n                   32,\n                   48,\n                   57,\n                   58,\n                   49,\n                   52,\n                   58,\n                   49,\n                   49,\n                   32,\n                   43,\n                   48,\n                   48,\n                   48,\n                   48,\n                   13,\n                   10,\n                   77,\n                   73,\n                   77,\n                   69,\n                   45,\n                   86,\n                   101,\n                   114,\n                   115,\n                   105,\n                   111,\n                   110,\n                   58,\n                   32,\n                   49,\n                   46,\n                   48,\n                   13,\n                   10,\n                   13,\n                   10,\n                   60,\n                   104,\n                   52,\n                   62,\n                   68,\n                   101,\n                   97,\n                   114,\n                   32,\n                   83,\n                   105,\n                   106,\n                   117,\n                   32,\n                   83,\n                   97,\n                   109,\n                   115,\n                   111,\n                   110,\n                   33,\n                   60,\n                   47,\n                   104,\n                   52,\n                   62,\n                   60,\n                   112,\n                   62,\n                   84,\n                   104,\n                   97,\n                   110,\n                   107,\n                   32,\n                   89,\n                   111,\n                   117,\n                   32,\n                   70,\n                   111,\n                   114,\n                   32,\n                   67,\n                   111,\n                   110,\n                   116,\n                   97,\n                   99,\n                   116,\n                   105,\n                   110,\n                   103,\n                   32,\n                   85,\n                   115,\n                   46,\n                   32,\n                   87,\n                   101,\n                   32,\n                   119,\n                   105,\n                   108,\n                   108,\n                   32,\n                   71,\n                   101,\n                   116,\n                   32,\n                   98,\n                   97,\n                   99,\n                   107,\n                   32,\n                   61,\n                   13,\n                   10,\n                   116,\n                   111,\n                   32,\n                   121,\n                   111,\n                   117,\n                   32,\n                   115,\n                   111,\n                   111,\n                   110,\n                   46,\n                   60,\n                   47,\n                   112,\n                   62,\n                   60,\n                   98,\n                   114,\n                   62,\n                   13,\n                   10\n               ]\n           }\n       },\n       \"message\": \"Thank you for Contacting Us\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/common.js",
    "groupTitle": "Customer-Common"
  },
  {
    "type": "get",
    "url": "/api/customer/coupon/check",
    "title": "Check Coupon Validation",
    "name": "Coupon_Validation",
    "group": "Customer-Coupon",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "coupon_code",
            "description": "<p>Coupon code to be applied.</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "store_id",
            "description": "<p>ID of the store to which coupon is applied.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"coupon\": {\n            \"store\": {\n                \"name\": \"Health Store\",\n                \"_id\": \"5ce513d4a2041b29b2543750\"\n            },\n            \"status\": 1,\n            \"_id\": \"5cf10cda19e5af3ad9d1dd38\",\n            \"code\": \"10OFF\",\n            \"type\": 2,\n            \"value\": 10,\n            \"start_date\": \"2019-05-31T11:05:56.000Z\",\n            \"end_date\": \"2019-06-04T11:05:56.000Z\",\n            \"created_at\": \"2019-05-31T11:15:38.820Z\",\n            \"updated_at\": \"2019-05-31T11:15:38.820Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Coupon Code is Invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Coupon Code is Invalid.",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Coupon Code is Not Valid\",\n   \"error\": {\n       \"validation\": {\n           \"coupon_code\": [\n               \"Coupon Code is Not Valid\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/coupon.js",
    "groupTitle": "Customer-Coupon"
  },
  {
    "type": "put",
    "url": "/api/customer/order/cancel",
    "title": "Cancel Order",
    "name": "Cancel_Order",
    "group": "Customer-Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>Id of the order to be cancelled.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"orders\": [\n           {\n               \"_id\": \"5cefc0819527d436cfca3b21\",\n               \"address\": {\n                   \"pickup\": {\n                       \"street\": \"test street\",\n                       \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                       \"city_id\": \"5cd01c1839b32d325085052d\"\n                   },\n                   \"delivery\": {\n                       \"house_no\": \"23-R\",\n                       \"locality\": \"xyz colony\",\n                       \"city_id\": \"5cd01c1839b32d325085052d\",\n                       \"alias\": \"home\",\n                       \"landmark\": \"xyz park\",\n                       \"email\": \"khushal@gmail.com\",\n                       \"contact_number\": \"9711669906\",\n                       \"full_name\": \"khushal\"\n                   }\n               },\n               \"status\": 5,\n               \"is_express_delivery\": false,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"deliver_start_time\": \"2019-05-30T11:37:37.789Z\",\n               \"deliver_end_time\": \"2019-05-30T13:37:37.789Z\",\n               \"customer_id\": \"5ce7f068b9c00379c7d8564b\",\n               \"store_id\": \"5ce513d4a2041b29b2543750\",\n               \"products\": [\n                   {\n                       \"pictures\": [\n                           \"ivvffb3jvz9rs8h.jpg\"\n                       ],\n                       \"_id\": \"5cefc0819527d436cfca3b22\",\n                       \"product_id\": \"5ce55003a047874d7fc513ed\",\n                       \"size\": \"250 g\",\n                       \"price\": 30,\n                       \"count\": 2,\n                       \"name\": \"Bru Coffee\"\n                   }\n               ],\n               \"total_amount\": 60,\n               \"created_at\": \"2019-05-30T11:37:37.866Z\",\n               \"updated_at\": \"2019-05-30T11:37:37.866Z\",\n               \"__v\": 0,\n               \"store\": {\n                   \"_id\": \"5ce513d4a2041b29b2543750\",\n                   \"picture\": \"ivvf88ijvz0lk37.png\",\n                   \"status\": 3,\n                   \"name\": \"Health Store\",\n                   \"address\": {\n                       \"street\": \"test street\",\n                       \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                       \"city_id\": \"5cd01c1839b32d325085052d\"\n                   },\n                   \"commission\": 10,\n                   \"owner\": {\n                       \"full_name\": \"Aditya\",\n                       \"email\": \"aditya@gmail.com\",\n                       \"contact_number\": \"1234567890\",\n                       \"password\": \"$2b$10$3/e.Z01e6SoeAht85tyrK.oqiMd/amt.WqfEY7qeYj.VZ5Lx.lRue\"\n                   },\n                   \"timings\": {\n                       \"open_time\": \"08:00\",\n                       \"close_time\": \"20:00\"\n                   },\n                   \"has_express_delivery\": true,\n                   \"created_at\": \"2019-05-22T09:18:12.315Z\",\n                   \"updated_at\": \"2019-05-22T09:18:12.315Z\",\n                   \"__v\": 0\n               }\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Order cannot be cancelled.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Order cannot be cancelled:",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"The Order cannot be cancelled. Please Contact Customer Support.\",\n   \"error\": {\n       \"validation\": {\n           \"order\": [\n               \"The Order cannot be cancelled. Please Contact Customer Support.\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/order.js",
    "groupTitle": "Customer-Order"
  },
  {
    "type": "Get",
    "url": "/api/customer/order/getOrderedStores",
    "title": "Get Ordered Stores",
    "name": "Get_Ordered_Store",
    "group": "Customer-Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"stores\": [\n           {\n               \"_id\": \"5e05d5ff954bc84f45786dd6\",\n               \"picture\": \"KNN STORE.jpg\",\n               \"has_express_delivery\": true,\n               \"drivers\": [\n                   \"5d9dda22d22f1e78b76728c3\",\n                   \"5dea5445d85c19035ebf121e\",\n                   \"5dea892ed85c19035ebf1238\",\n                   \"5dea53edd85c19035ebf121d\",\n                   \"5e4e2a39d21fe166d8c94153\",\n                   \"5e537a88d21fe166d8c94568\",\n                   \"5e58ec2a2daf030e5c835e34\"\n               ],\n               \"status\": 1,\n               \"timings\": {\n                   \"open_time\": \"11:00\",\n                   \"close_time\": \"23:00\"\n               },\n               \"owner\": {\n                   \"email\": \"najam.sahto@gmail.com\",\n                   \"password\": \"$2b$10$oJMcgQDP2Ml8SO0lxoCHmu.gblcisq8Ue18wiKtAX0ZL6KUTbqjsm\",\n                   \"full_name\": \"Najam\",\n                   \"contact_number\": \"03012999901\"\n               },\n               \"self_delivery\": false,\n               \"address\": [\n                   {\n                       \"_id\": \"5e05d5ff954bc84f45786dd7\",\n                       \"coordinates\": {\n                           \"latitude\": 24.9237623,\n                           \"longitude\": 67.1405999\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5e262d10d21fe166d8c93049\",\n                       \"shop_no\": \"Shop #101  Street 5, Block 10 Gulistan-e-Johar, Karachi, Karachi City, Sindh Pakistan\",\n                       \"locality\": \"Kamran Chorangi\",\n                       \"gps_address\": \"Street 5, Block 10 Gulistan-e-Johar, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"unique_link\": \"1K9RNH\"\n                   },\n                   {\n                       \"_id\": \"5e26d1f5d21fe166d8c9305b\",\n                       \"coordinates\": {\n                           \"latitude\": 24.901932227546816,\n                           \"longitude\": 67.08738320527952\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5e262d43d21fe166d8c9304a\",\n                       \"shop_no\": \"Shop B 170, Block 18 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"locality\": \"Itehad Park\",\n                       \"gps_address\": \"Plot B 170, Block 18 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"unique_link\": \"2nq4ow\"\n                   }\n               ],\n               \"name\": \"KNN General Store\",\n               \"commission\": 2,\n               \"created_at\": \"2019-12-27T09:59:27.130Z\",\n               \"updated_at\": \"2020-03-19T09:03:59.547Z\",\n               \"__v\": 0,\n               \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMDVkNWZmOTU0YmM4NGY0NTc4NmRkNiIsInR5cGUiOjIsImlhdCI6MTU4NDYwODYzOX0.g8s1cZ1vlgZJVRQOSwdfq2NQjtBlHVSm_IM21cmKqdk\"\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized</p> <p>{ &quot;success&quot;: false, &quot;error&quot;: 401 }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/order.js",
    "groupTitle": "Customer-Order"
  },
  {
    "type": "post",
    "url": "/api/customer/order/checkout",
    "title": "Order Checkout",
    "name": "Order_Checkout",
    "group": "Customer-Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "store_id",
            "description": "<p>Id of the store.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "slot_id",
            "description": "<p>Id of the Slot in which it is to be delivered.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "address_id",
            "description": "<p>Address Id of the customer at which the order is to be delivered.</p>"
          },
          {
            "group": "Body",
            "type": "Object[]",
            "optional": false,
            "field": "products",
            "description": "<p>An object with fields &quot;quantity&quot; (quantity of product ) ,  &quot;_id&quot; (product id).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"order\": {\n            \"address\": {\n                \"pickup\": {\n                    \"street\": \"test street\",\n                    \"area_id\": \"5cd01b02c1a6f3317fdBoo9f072\",\n                    \"city_id\": \"5cd01c1839b32d325085052d\"\n                },\n                \"delivery\": {\n                    \"house_no\": \"23-R\",\n                    \"locality\": \"xyz colony\",\n                    \"city_id\": \"5cd01c1839b32d325085052d\",\n                    \"alias\": \"home\",\n                    \"landmark\": \"xyz park\",\n                    \"email\": \"khushal@gmail.com\",\n                    \"contact_number\": \"9711669906\",\n                    \"full_name\": \"khushal\"\n                }\n            },\n            \"status\": 1,\n            \"is_express_delivery\": false,\n            \"payment_type\": 1,\n            \"discount\": 0,\n            \"_id\": \"5cefc0819527d436cfca3b21\",\n            \"deliver_start_time\": \"2019-05-30T11:37:37.789Z\",\n            \"deliver_end_time\": \"2019-05-30T13:37:37.789Z\",\n            \"customer_id\": \"5ce7f068b9c00379c7d8564b\",\n            \"store_id\": \"5ce513d4a2041b29b2543750\",\n            \"products\": [\n                {\n                    \"pictures\": [\n                        \"ivvffb3jvz9rs8h.jpg\"\n                    ],\n                    \"_id\": \"5cefc0819527d436cfca3b22\",\n                    \"product_id\": \"5ce55003a047874d7fc513ed\",\n                    \"size\": \"250 g\",\n                    \"price\": 30,\n                    \"count\": 2,\n                    \"name\": \"Bru Coffee\"\n                }\n            ],\n            \"total_amount\": 60,\n            \"created_at\": \"2019-05-30T11:37:37.866Z\",\n            \"updated_at\": \"2019-05-30T11:37:37.866Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Invalid Data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Address Id is invalid:",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Address Id is invalid\",\n   \"error\": {\n       \"validation\": {\n           \"address_id\": [\n               \"Address Id is invalid\"\n           ]\n       }\n   }\n}",
          "type": "json"
        },
        {
          "title": "Slot Id is invalid:",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Slot Id is Invalid\",\n   \"error\": {\n       \"validation\": {\n           \"slot_id\": [\n               \"Slot Id is Invalid\"\n           ]\n       }\n   }\n}",
          "type": "json"
        },
        {
          "title": "Some Products are not available:",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Some Products Are Not Available Right Now\",\n   \"error\": {\n       \"validation\": {\n           \"message\": \"Some Products Are Not Available Right Now\",\n           \"outOfStockProducts\": [\n               {\n                   \"_id\": \"5ce55003a047874d7fc513ed\",\n                   \"stock_quantity\": 0,\n                   \"quantity_ordered\": 100\n               }\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/order.js",
    "groupTitle": "Customer-Order"
  },
  {
    "type": "get",
    "url": "/api/customer/order",
    "title": "Order History",
    "name": "Order_History",
    "group": "Customer-Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"orders\": [\n           {\n               \"_id\": \"5cefc0819527d436cfca3b21\",\n               \"address\": {\n                   \"pickup\": {\n                       \"street\": \"test street\",\n                       \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                       \"city_id\": \"5cd01c1839b32d325085052d\"\n                   },\n                   \"delivery\": {\n                       \"house_no\": \"23-R\",\n                       \"locality\": \"xyz colony\",\n                       \"city_id\": \"5cd01c1839b32d325085052d\",\n                       \"alias\": \"home\",\n                       \"landmark\": \"xyz park\",\n                       \"email\": \"khushal@gmail.com\",\n                       \"contact_number\": \"9711669906\",\n                       \"full_name\": \"khushal\"\n                   }\n               },\n               \"status\": 1,\n               \"is_express_delivery\": false,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"deliver_start_time\": \"2019-05-30T11:37:37.789Z\",\n               \"deliver_end_time\": \"2019-05-30T13:37:37.789Z\",\n               \"customer_id\": \"5ce7f068b9c00379c7d8564b\",\n               \"store_id\": \"5ce513d4a2041b29b2543750\",\n               \"products\": [\n                   {\n                       \"pictures\": [\n                           \"ivvffb3jvz9rs8h.jpg\"\n                       ],\n                       \"_id\": \"5cefc0819527d436cfca3b22\",\n                       \"product_id\": \"5ce55003a047874d7fc513ed\",\n                       \"size\": \"250 g\",\n                       \"price\": 30,\n                       \"count\": 2,\n                       \"name\": \"Bru Coffee\"\n                   }\n               ],\n               \"total_amount\": 60,\n               \"created_at\": \"2019-05-30T11:37:37.866Z\",\n               \"updated_at\": \"2019-05-30T11:37:37.866Z\",\n               \"__v\": 0,\n               \"store\": {\n                   \"_id\": \"5ce513d4a2041b29b2543750\",\n                   \"picture\": \"ivvf88ijvz0lk37.png\",\n                   \"status\": 3,\n                   \"name\": \"Health Store\",\n                   \"address\": {\n                       \"street\": \"test street\",\n                       \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                       \"city_id\": \"5cd01c1839b32d325085052d\"\n                   },\n                   \"commission\": 10,\n                   \"owner\": {\n                       \"full_name\": \"Aditya\",\n                       \"email\": \"aditya@gmail.com\",\n                       \"contact_number\": \"1234567890\",\n                       \"password\": \"$2b$10$3/e.Z01e6SoeAht85tyrK.oqiMd/amt.WqfEY7qeYj.VZ5Lx.lRue\"\n                   },\n                   \"timings\": {\n                       \"open_time\": \"08:00\",\n                       \"close_time\": \"20:00\"\n                   },\n                   \"has_express_delivery\": true,\n                   \"created_at\": \"2019-05-22T09:18:12.315Z\",\n                   \"updated_at\": \"2019-05-22T09:18:12.315Z\",\n                   \"__v\": 0\n               }\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/order.js",
    "groupTitle": "Customer-Order"
  },
  {
    "type": "post",
    "url": "/api/customer/product/availability",
    "title": "Check Products Availability",
    "name": "Check_Products_Availability",
    "group": "Customer-Product",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "store_id",
            "description": "<p>Id of the store.</p>"
          },
          {
            "group": "Body",
            "type": "Object[]",
            "optional": false,
            "field": "products",
            "description": "<p>An object with fields &quot;quantity&quot; (quantity of product ) ,  &quot;_id&quot; (product id).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"message\": \"All Products Are Available\",\n       \"outOfStockProducts\": []\n   }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"message\": \"Some Products Are Not Available Right Now\",\n       \"outOfStockProducts\": [\n           {\n               \"_id\": \"5ce55003a047874d7fc513ed\",\n               \"stock_quantity\": 12,\n               \"quantity_ordered\": 100\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/product.js",
    "groupTitle": "Customer-Product"
  },
  {
    "type": "get",
    "url": "/api/customer/product",
    "title": "Get Products",
    "name": "Get_Products",
    "group": "Customer-Product",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "store_id",
            "description": "<p>Id of the store.</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>(optional) Parent catgeory id if all selected.</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "subcategory_id",
            "description": "<p>(optional) Sub category of the products require.</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>(optional) search keyword by name of product.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"subcategories\": [\n           {\n               \"_id\": \"5cdac8de1c9d4400003f31b6\",\n               \"status\": 2,\n               \"name\": \"cheese\",\n               \"store_id\": \"5cd1259b63aff817c37afb02\",\n               \"parent\": \"5cd55cec828e75341ca089cb\",\n               \"products\": []\n           },\n           {\n               \"_id\": \"5cd55d96828e75341ca089cc\",\n               \"status\": 1,\n               \"parent\": \"5cd55cec828e75341ca089cb\",\n               \"name\": \"Milk\",\n               \"store_id\": \"5cd1259b63aff817c37afb02\",\n               \"created_at\": \"2019-05-10T11:16:38.799Z\",\n               \"updated_at\": \"2019-05-10T11:16:38.799Z\",\n               \"__v\": 0,\n               \"products\": [\n                   {\n                       \"_id\": \"5ce3db99f558770b9cab1170\",\n                       \"is_featured\": true,\n                       \"pictures\": [\n                           \"nfufhuhsdfu\",\n                           \"fihwfuisudfdgsu\"\n                       ],\n                       \"name\": \"amul milk\",\n                       \"store_id\": \"5cd1259b63aff817c37afb02\",\n                       \"category_id\": \"5cd55d96828e75341ca089cc\",\n                       \"size\": \"1 litre\",\n                       \"price\": {\n                           \"cost_price\": 20,\n                           \"sale_price\": 30\n                       },\n                       \"stock_quantity\": 10,\n                       \"created_at\": \"2019-05-21T11:06:01.448Z\",\n                       \"updated_at\": \"2019-05-21T11:06:01.448Z\",\n                       \"__v\": 0\n                   }\n               ]\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Store Id is a required field.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Store Id is a required field:",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"The Store Id is a required field\",\n   \"error\": {\n       \"validation\": {\n           \"store_id\": [\n               \"The Store Id is a required field\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/product.js",
    "groupTitle": "Customer-Product"
  },
  {
    "type": "get",
    "url": "/api/customer/store",
    "title": "Get Stores",
    "name": "Get_Stores",
    "group": "Customer-Store",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "area_id",
            "description": "<p>ID of area selected by user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"stores\": [\n            {\n                \"address\": {\n                    \"house_no\": \"21/3\",\n                    \"street\": \"XYZ street\",\n                    \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                    \"city_id\": \"5cd01c1839b32d325085052d\"\n                },\n                \"owner\": {\n                    \"full_name\": \"khushal pahuja\",\n                    \"contact_number\": \"9711669906\",\n                    \"password\": \"$2b$10$.tTIIkskAAhZqEg20cfVx.sHXlnPB93/zVLBFldR6anWN1Qdc8MIC\"\n                },\n                \"picture\": \"ivvf81xjvz0j7eq.png\",\n                \"has_express_delivery\": false,\n                \"status\": 1,\n                \"_id\": \"5cd1259b63aff817c37afb02\",\n                \"email\": \"khushal.pahuja@enukesoftware.com\",\n                \"contact_number\": \"9711669906\",\n                \"name\": \"XYZ store\",\n                \"commission\": 2,\n                \"created_at\": \"2019-05-07T06:28:43.580Z\",\n                \"updated_at\": \"2019-05-07T06:28:43.580Z\",\n                \"__v\": 0\n            }\n        ],\n        \"area\": {\n            \"_id\": \"5cd01b02c1a6f3317fd9f072\",\n            \"name\": \"sector-14\",\n            \"created_at\": \"2019-05-06T11:31:14.865Z\",\n            \"updated_at\": \"2019-05-06T11:31:14.865Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Verification token is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Verification token is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Area Id is a required field\",\n    \"error\": {\n        \"validation\": {\n            \"area_id\": [\n                \"Area Id is a required field\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/store.js",
    "groupTitle": "Customer-Store"
  },
  {
    "type": "get",
    "url": "/api/customer/store/:id/slots",
    "title": "Get Store's Slots",
    "name": "Get_Stores_Slots",
    "group": "Customer-Store",
    "parameter": {
      "fields": {
        "params": [
          {
            "group": "params",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>store id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"slots\": [\n            {\n                \"slots\": [\n                    {\n                        \"status\": 1,\n                        \"_id\": \"5cee5c10f38e36387d7ef103\",\n                        \"start_time\": \"2019-05-30T12:30:00.315Z\",\n                        \"end_time\": \"2019-05-30T14:30:00.315Z\",\n                        \"store_id\": \"5ce513d4a2041b29b2543750\",\n                        \"created_at\": \"2019-05-29T10:16:48.123Z\",\n                        \"updated_at\": \"2019-05-29T10:16:48.123Z\",\n                        \"__v\": 0\n                    },\n                    {\n                        \"status\": 1,\n                        \"_id\": \"5cee5c1bf38e36387d7ef104\",\n                        \"start_time\": \"2019-05-30T10:30:00.315Z\",\n                        \"end_time\": \"2019-05-30T12:30:00.315Z\",\n                        \"store_id\": \"5ce513d4a2041b29b2543750\",\n                        \"created_at\": \"2019-05-29T10:16:59.869Z\",\n                        \"updated_at\": \"2019-05-29T10:16:59.869Z\",\n                        \"__v\": 0\n                    },\n                    {\n                        \"status\": 1,\n                        \"_id\": \"5cee5c6ef38e36387d7ef105\",\n                        \"start_time\": \"2019-05-30T08:30:00.315Z\",\n                        \"end_time\": \"2019-05-30T10:30:00.315Z\",\n                        \"store_id\": \"5ce513d4a2041b29b2543750\",\n                        \"created_at\": \"2019-05-29T10:18:22.794Z\",\n                        \"updated_at\": \"2019-05-29T10:18:22.794Z\",\n                        \"__v\": 0\n                    }\n                ],\n                \"date\": \"2019-05-30\"\n            },\n            {\n                \"slots\": [\n                    {\n                        \"status\": 1,\n                        \"_id\": \"5cee5cd3f38e36387d7ef109\",\n                        \"start_time\": \"2019-05-31T02:30:00.315Z\",\n                        \"end_time\": \"2019-05-31T04:30:00.315Z\",\n                        \"store_id\": \"5ce513d4a2041b29b2543750\",\n                        \"created_at\": \"2019-05-29T10:20:03.424Z\",\n                        \"updated_at\": \"2019-05-29T10:20:03.424Z\",\n                        \"__v\": 0\n                    },\n                    {\n                        \"status\": 1,\n                        \"_id\": \"5cee5cdbf38e36387d7ef10a\",\n                        \"start_time\": \"2019-05-31T04:30:00.315Z\",\n                        \"end_time\": \"2019-05-31T06:30:00.315Z\",\n                        \"store_id\": \"5ce513d4a2041b29b2543750\",\n                        \"created_at\": \"2019-05-29T10:20:11.548Z\",\n                        \"updated_at\": \"2019-05-29T10:20:11.548Z\",\n                        \"__v\": 0\n                    },\n                    {\n                        \"status\": 1,\n                        \"_id\": \"5cee5ce2f38e36387d7ef10b\",\n                        \"start_time\": \"2019-05-31T06:30:00.315Z\",\n                        \"end_time\": \"2019-05-31T08:30:00.315Z\",\n                        \"store_id\": \"5ce513d4a2041b29b2543750\",\n                        \"created_at\": \"2019-05-29T10:20:18.007Z\",\n                        \"updated_at\": \"2019-05-29T10:20:18.007Z\",\n                        \"__v\": 0\n                    },\n                    {\n                        \"status\": 1,\n                        \"_id\": \"5cee5ceaf38e36387d7ef10c\",\n                        \"start_time\": \"2019-05-31T08:30:00.315Z\",\n                        \"end_time\": \"2019-05-31T10:30:00.315Z\",\n                        \"store_id\": \"5ce513d4a2041b29b2543750\",\n                        \"created_at\": \"2019-05-29T10:20:26.090Z\",\n                        \"updated_at\": \"2019-05-29T10:20:26.090Z\",\n                        \"__v\": 0\n                    },\n                    {\n                        \"status\": 1,\n                        \"_id\": \"5cee5cf0f38e36387d7ef10d\",\n                        \"start_time\": \"2019-05-31T10:30:00.315Z\",\n                        \"end_time\": \"2019-05-31T12:30:00.315Z\",\n                        \"store_id\": \"5ce513d4a2041b29b2543750\",\n                        \"created_at\": \"2019-05-29T10:20:32.720Z\",\n                        \"updated_at\": \"2019-05-29T10:20:32.720Z\",\n                        \"__v\": 0\n                    },\n                    {\n                        \"status\": 1,\n                        \"_id\": \"5cee5cf7f38e36387d7ef10e\",\n                        \"start_time\": \"2019-05-31T12:30:00.315Z\",\n                        \"end_time\": \"2019-05-31T14:30:00.315Z\",\n                        \"store_id\": \"5ce513d4a2041b29b2543750\",\n                        \"created_at\": \"2019-05-29T10:20:39.020Z\",\n                        \"updated_at\": \"2019-05-29T10:20:39.020Z\",\n                        \"__v\": 0\n                    }\n                ],\n                \"date\": \"2019-05-31\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Id",
            "description": "<p>is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Id is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Id is invalid\",\n    \"error\": {\n        \"validation\": {\n            \"id\": [\n                \"Id is invalid\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/store.js",
    "groupTitle": "Customer-Store"
  },
  {
    "type": "get",
    "url": "/api/customer/store/:id",
    "title": "Get Store's Home page",
    "name": "Get_Stores_home_page",
    "group": "Customer-Store",
    "parameter": {
      "fields": {
        "params": [
          {
            "group": "params",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>store id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"featured_products\": [\n            {\n                \"price\": {\n                    \"cost_price\": 20,\n                    \"sale_price\": 30\n                },\n                \"is_featured\": true,\n                \"pictures\": [\n                    \"nfufhuhsdfu\",\n                    \"fihwfuisudfdgsu\"\n                ],\n                \"_id\": \"5ce3db99f558770b9cab1170\",\n                \"name\": \"amul milk\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"category_id\": \"5cd55d96828e75341ca089cc\",\n                \"size\": \"1 litre\",\n                \"stock_quantity\": 10,\n                \"created_at\": \"2019-05-21T11:06:01.448Z\",\n                \"updated_at\": \"2019-05-21T11:06:01.448Z\",\n                \"__v\": 0\n            }\n        ],\n        \"best_selling_products\": [],\n        \"categories\": [\n            {\n                \"status\": 1,\n                \"parent\": null,\n                \"_id\": \"5cd55cec828e75341ca089cb\",\n                \"name\": \"Dairy Products\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"created_at\": \"2019-05-10T11:13:48.073Z\",\n                \"updated_at\": \"2019-05-10T11:13:48.073Z\",\n                \"__v\": 0\n            }\n        ],\n        \"store\": {\n            \"address\": {\n                \"house_no\": \"21/3\",\n                \"street\": \"XYZ street\",\n                \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                \"city_id\": \"5cd01c1839b32d325085052d\"\n            },\n            \"owner\": {\n                \"full_name\": \"khushal pahuja\",\n                \"contact_number\": \"9711669906\"\n            },\n            \"picture\": null,\n            \"status\": 3,\n            \"_id\": \"5cd1259b63aff817c37afb02\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"password\": \"$2b$10$.tTIIkskAAhZqEg20cfVx.sHXlnPB93/zVLBFldR6anWN1Qdc8MIC\",\n            \"name\": \"XYZ store\",\n            \"commission\": 2,\n            \"verification_token\": \"1e8c0eed-6864-4492-977f-7cd49263a8b0\",\n            \"created_at\": \"2019-05-07T06:28:43.580Z\",\n            \"updated_at\": \"2019-05-07T06:28:43.580Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Id",
            "description": "<p>is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Id is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Id is invalid\",\n    \"error\": {\n        \"validation\": {\n            \"id\": [\n                \"Id is invalid\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/store.js",
    "groupTitle": "Customer-Store"
  },
  {
    "type": "post",
    "url": "/api/customer/user/address",
    "title": "Add Address",
    "name": "Add_Address",
    "group": "Customer-User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locality",
            "description": "<p>user's locality address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "house_no",
            "description": "<p>house number .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email for this address .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>contact number for this address .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "landmark",
            "description": "<p>(optional) Landmark for this address .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>City Id of the address .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alias",
            "description": "<p>alias name for address.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"customer\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5ce7f068b9c00379c7d8564b\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": \"$2b$10$ooranEJziyIxjfLLprkIVuVjjBhRfZ72DXqlhGNk4K2CyziGfQ/MC\",\n            \"verification_token\": \"b7274e6b-690b-46da-9dda-631d013743e2\",\n            \"address\": [\n                {\n                    \"_id\": \"5ced0d960945c93eb129d2f5\",\n                    \"house_no\": \"123\",\n                    \"locality\": \"xyz colony\",\n                    \"city_id\": \"5cd01c1839b32d325085052d\",\n                    \"alias\": \"home\",\n                    \"landmark\": \"xyz park\",\n                    \"email\": \"khushal@gmail.com\",\n                    \"contact_number\": \"9711669906\"\n                }\n            ],\n            \"created_at\": \"2019-05-24T13:23:52.522Z\",\n            \"updated_at\": \"2019-05-28T10:29:42.517Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>House no is Required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "House no is Required:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"House No. is a required field\",\n    \"error\": {\n        \"validation\": {\n            \"house_no\": [\n                \"House No. is a required field\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/user.js",
    "groupTitle": "Customer-User"
  },
  {
    "type": "delete",
    "url": "/api/customer/user/address/:id",
    "title": "Delete Address",
    "name": "Delete_Address",
    "group": "Customer-User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Address to be deleted</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"customer\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5ce7f068b9c00379c7d8564b\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": \"$2b$10$ooranEJziyIxjfLLprkIVuVjjBhRfZ72DXqlhGNk4K2CyziGfQ/MC\",\n            \"verification_token\": \"b7274e6b-690b-46da-9dda-631d013743e2\",\n            \"address\": [\n                {\n                    \"_id\": \"5ced0d960945c93eb129d2f5\",\n                    \"house_no\": \"123\",\n                    \"locality\": \"xyz colony\",\n                    \"city_id\": \"5cd01c1839b32d325085052d\",\n                    \"alias\": \"home\",\n                    \"landmark\": \"xyz park\",\n                    \"email\": \"khushal@gmail.com\",\n                    \"contact_number\": \"9711669906\"\n                }\n            ],\n            \"created_at\": \"2019-05-24T13:23:52.522Z\",\n            \"updated_at\": \"2019-05-28T10:29:42.517Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/user.js",
    "groupTitle": "Customer-User"
  },
  {
    "type": "get",
    "url": "/api/customer/user/address",
    "title": "Get Addresses",
    "name": "Get_Addresses",
    "group": "Customer-User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"address\": [\n            {\n                \"_id\": \"5ced0d960945c93eb129d2f5\",\n                \"house_no\": \"123\",\n                \"locality\": \"xyz colony\",\n                \"city_id\": \"5cd01c1839b32d325085052d\",\n                \"alias\": \"home\",\n                \"landmark\": \"xyz park\",\n                \"email\": \"khushal@gmail.com\",\n                \"contact_number\": \"9711669906\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Auth Token is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Auth token is invalid:",
          "content": "{\n    \"success\": false,\n    \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/user.js",
    "groupTitle": "Customer-User"
  },
  {
    "type": "get",
    "url": "/api/customer/user/profile",
    "title": "Get Profile",
    "name": "Get_Profile",
    "group": "Customer-User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"customer\": {\n            \"picture\": \"ivvf6tmjwrhh057.png\",\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cf609a8a460b46232cb3e41\",\n            \"email\": \"khushal.pahuja@enukesoftware.cm\",\n            \"password\": \"$2b$10$PqV6nF6Sp36ZjAmgWGU97OEQmfVgVGmF3XBJKeQUzarzAkbKrFJ0y\",\n            \"full_name\": \"Khushal Pahuja 1\",\n            \"contact_number\": \"9711669906\",\n            \"verification_token\": null,\n            \"address\": [],\n            \"created_at\": \"2019-06-04T06:03:20.802Z\",\n            \"updated_at\": \"2019-06-11T07:28:06.505Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/user.js",
    "groupTitle": "Customer-User"
  },
  {
    "type": "put",
    "url": "/api/customer/user/address/:id",
    "title": "Update Address",
    "name": "Update_Address",
    "group": "Customer-User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Address to be updated</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locality",
            "description": "<p>user's locality address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "house_no",
            "description": "<p>house number .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email for this address .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>contact number for this address .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "landmark",
            "description": "<p>(optional) Landmark for this address .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>City Id of the address .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alias",
            "description": "<p>alias name for address.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"customer\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5ce7f068b9c00379c7d8564b\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": \"$2b$10$ooranEJziyIxjfLLprkIVuVjjBhRfZ72DXqlhGNk4K2CyziGfQ/MC\",\n            \"verification_token\": \"b7274e6b-690b-46da-9dda-631d013743e2\",\n            \"address\": [\n                {\n                    \"_id\": \"5ced0d960945c93eb129d2f5\",\n                    \"house_no\": \"123\",\n                    \"locality\": \"xyz colony\",\n                    \"city_id\": \"5cd01c1839b32d325085052d\",\n                    \"alias\": \"home\",\n                    \"landmark\": \"xyz park\",\n                    \"email\": \"khushal@gmail.com\",\n                    \"contact_number\": \"9711669906\"\n                }\n            ],\n            \"created_at\": \"2019-05-24T13:23:52.522Z\",\n            \"updated_at\": \"2019-05-28T10:29:42.517Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>House no is Required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "House no is Required:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"House No. is a required field\",\n    \"error\": {\n        \"validation\": {\n            \"house_no\": [\n                \"House No. is a required field\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/user.js",
    "groupTitle": "Customer-User"
  },
  {
    "type": "put",
    "url": "/api/customer/user/profile/:id",
    "title": "Update Profile",
    "name": "Update_Profile",
    "group": "Customer-User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the User to be updated</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "full_name",
            "description": "<p>(optional) name of the user.</p>"
          },
          {
            "group": "Body",
            "type": "File",
            "optional": false,
            "field": "picture",
            "description": "<p>(optional) Profile Picture .</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"customer\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5ce7f068b9c00379c7d8564b\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": \"$2b$10$ooranEJziyIxjfLLprkIVuVjjBhRfZ72DXqlhGNk4K2CyziGfQ/MC\",\n            \"verification_token\": \"b7274e6b-690b-46da-9dda-631d013743e2\",\n            \"address\": [\n                {\n                    \"_id\": \"5ced0d960945c93eb129d2f5\",\n                    \"house_no\": \"123\",\n                    \"locality\": \"xyz colony\",\n                    \"city_id\": \"5cd01c1839b32d325085052d\",\n                    \"alias\": \"home\",\n                    \"landmark\": \"xyz park\",\n                    \"email\": \"khushal@gmail.com\",\n                    \"contact_number\": \"9711669906\"\n                }\n            ],\n            \"created_at\": \"2019-05-24T13:23:52.522Z\",\n            \"updated_at\": \"2019-05-28T10:29:42.517Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Auth Token is Invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Auth Token is Invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Authentication token is invalid\",\n    \"error\": {\n        \"validation\": {\n            \"token\": [\n                \"Authentication token is invalid\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/customer/user.js",
    "groupTitle": "Customer-User"
  },
  {
    "type": "post",
    "url": "/api/driver/auth/change-password",
    "title": "Change Password",
    "name": "Change_Password",
    "group": "Driver-Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>user's new password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": null,\n            \"verification_token\": \"4afee0fe-e6cd-4dbf-8d6f-9c87c1af3f6d\",\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T12:00:31.950Z\",\n            \"__v\": 0\n        },\n        \"message\": \"Password has been updated Successfully\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Password is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Password is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 401,\n        \"name\": \"UNAUTHORIZED\",\n        \"description\": \"You are not logged in, e.g. using a valid access token.\"\n    },\n    \"singleStringMessage\": \"Password is invalid\",\n    \"error\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/driver/auth.js",
    "groupTitle": "Driver-Auth"
  },
  {
    "type": "post",
    "url": "/api/driver/auth/forget-password",
    "title": "Forgot Password",
    "name": "Forgot_Password",
    "group": "Driver-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>user's contact number.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"verification_token\": \"4afee0fe-e6cd-4dbf-8d6f-9c87c1af3f6d\",\n        \"message\": \"An OTP was sent to your contact number. Please check.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Contact Number is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Contact Number is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Contact number is not registered With Us\",\n    \"error\": {\n        \"validation\": {\n            \"contact_number\": [\n                \"Contact number is not registered With Us\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/driver/auth.js",
    "groupTitle": "Driver-Auth"
  },
  {
    "type": "post",
    "url": "/api/driver/auth/reset-password",
    "title": "Reset Password",
    "name": "Reset_Password",
    "group": "Driver-Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": null,\n            \"verification_token\": \"4afee0fe-e6cd-4dbf-8d6f-9c87c1af3f6d\",\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T12:00:31.950Z\",\n            \"__v\": 0\n        },\n        \"message\": \"Password has been updated Successfully\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Password is required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Password is required:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Password is a required field\",\n    \"error\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/driver/auth.js",
    "groupTitle": "Driver-Auth"
  },
  {
    "type": "post",
    "url": "/api/driver/auth/login",
    "title": "User Login",
    "name": "User_Login",
    "group": "Driver-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>user's email or contact number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMDlkNjFlMjFkMDM1MTZkMjRiYmU3YSIsImlhdCI6MTU2MDkyNTc1MX0.-kEWw_nlKWZzvn_wxTOMPOj8OvR9iQo1Bd-qbAXMlSs\",\n        \"user\": {\n            \"picture\": null,\n            \"status\": 1,\n            \"_id\": \"5d09d61e21d03516d24bbe7a\",\n            \"full_name\": \"khushal\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"password\": null,\n            \"contact_number\": \"9711669906\",\n            \"address\": \"Test Street\",\n            \"created_at\": \"2019-06-19T06:28:46.600Z\",\n            \"updated_at\": \"2019-06-19T06:28:46.600Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedError",
            "description": "<p>Username or Password is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 401,\n        \"name\": \"UNAUTHORIZED\",\n        \"description\": \"You are not logged in, e.g. using a valid access token.\"\n    },\n    \"singleStringMessage\": \"Username or Password is invalid\",\n    \"error\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/driver/auth.js",
    "groupTitle": "Driver-Auth"
  },
  {
    "type": "post",
    "url": "/api/driver/auth/verify-otp",
    "title": "User Otp Verification",
    "name": "User_Otp_Verification",
    "group": "Driver-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>user's contact number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>otp.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verification_token",
            "description": "<p>verification token send in previous response.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": \"$2b$10$kDWy7UMqIXmqxMSq6hcgpuiSb4BjDQcB5WcNGTYsNB3ZqI0BNnuqq\",\n            \"verification_token\": \"68f63534-631f-41a4-8cde-2d7b55e2a276\",\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T11:14:41.688Z\",\n            \"__v\": 0\n        },\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZDQwYmExZTVjNTZiMzQwYWEyYTliYyIsInR5cGUiOjMsImlhdCI6MTU1NzQwMTgxOH0.osWeW6W3X6j74wVYaAwgjbH2vR0rWQyegX0HUw-5O1o\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Verification token is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Verification token is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Verification token is invalid\",\n    \"error\": {\n        \"validation\": {\n            \"verification_token\": [\n                \"Verification token is invalid\"\n            ]\n        }\n    }\n}",
          "type": "json"
        },
        {
          "title": "Otp is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Invalid otp. Please try again.\"\n    error: {\n           message: \"Invalid otp. Please try again.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/driver/auth.js",
    "groupTitle": "Driver-Auth"
  },
  {
    "type": "put",
    "url": "/api/driver/order/accept/:id",
    "title": "Accept Order",
    "name": "Accept_Order",
    "group": "Driver-Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the order to be accepted.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"order\": {\n            \"address\": {\n                \"pickup\": {\n                    \"house_no\": \"21/3\",\n                    \"street\": \"XYZ street\",\n                    \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                    \"city_id\": \"5cd01c1839b32d325085052d\"\n                },\n                \"delivery\": {\n                    \"alias\": \"work\",\n                    \"full_name\": \"Najam ul Saqib\",\n                    \"email\": \"najam.sahto@gmail.com\",\n                    \"contact_number\": \"3012999901\",\n                    \"house_no\": \"Office number 309, Progressive Plaza\",\n                    \"locality\": \"Beaumont Road\",\n                    \"landmark\": \"Near Marriet Hotel\",\n                    \"city_id\": \"5cd02537b1ef5e3bfb165f5c\"\n                }\n            },\n            \"status\": 1,\n            \"is_express_delivery\": false,\n            \"payment_type\": 1,\n            \"discount\": 0,\n            \"delivery_charges\": 0,\n            \"driver_assigned\": true,\n            \"_id\": \"5cf6b2d5b4deea62d01e4b2a\",\n            \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n            \"deliver_start_time\": \"2019-06-06T10:30:00.000Z\",\n            \"deliver_end_time\": \"2019-06-06T12:30:00.000Z\",\n            \"customer_id\": \"5ceb927146c8cf13bc2e0db6\",\n            \"store_id\": \"5cd1259b63aff817c37afb02\",\n            \"products\": [\n                {\n                    \"pictures\": [\n                        \"z7re7faj1hjvzafr9e.jpeg\"\n                    ],\n                    \"_id\": \"5cf6b2d5b4deea62d01e4b2c\",\n                    \"product_id\": \"5ce55461ff79ad6065d5b9fe\",\n                    \"size\": \"1 litre\",\n                    \"price\": 30,\n                    \"count\": 1,\n                    \"name\": \"Amul Milk\"\n                },\n                {\n                    \"pictures\": [\n                        \"z7re7faj1hjvzafr9e.jpeg\"\n                    ],\n                    \"_id\": \"5cf6b2d5b4deea62d01e4b2b\",\n                    \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                    \"size\": \"1 litre\",\n                    \"price\": 30,\n                    \"count\": 1,\n                    \"name\": \"Amul Milk\"\n                }\n            ],\n            \"total_amount\": 60,\n            \"order_id\": \"f1444c7\",\n            \"created_at\": \"2019-06-04T18:05:09.150Z\",\n            \"updated_at\": \"2019-06-20T10:55:26.817Z\",\n            \"__v\": 0,\n            \"driver_id\": \"5d09d61e21d03516d24bbe7a\",\n            \"taxes\": []\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Order Already Accepted BY other Driver.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Order Already Accepted BY other Driver:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"This Order has already been accepted by other driver.\",\n    \"error\": {\n        \"validation\": {\n            \"order\": [\n                \"This Order has already been accepted by other driver.\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/driver/order.js",
    "groupTitle": "Driver-Order"
  },
  {
    "type": "get",
    "url": "/api/driver/order/unassigned",
    "title": "Get Unassigned Order",
    "name": "Get_Unassigned_Order",
    "group": "Driver-Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"orders\": [\n            {\n                \"_id\": \"5cf67b33b4deea62d01e4b1c\",\n                \"address\": {\n                    \"pickup\": {\n                        \"house_no\": \"21/3\",\n                        \"street\": \"XYZ street\",\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\"\n                    },\n                    \"delivery\": {\n                        \"full_name\": \"Love\",\n                        \"email\": \"Love@gmail.com\",\n                        \"contact_number\": \"9900887766\",\n                        \"house_no\": \"G-78\",\n                        \"locality\": \"Srs\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"alias\": \"home\"\n                    }\n                },\n                \"status\": 2,\n                \"is_express_delivery\": false,\n                \"payment_type\": 1,\n                \"discount\": 0,\n                \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n                \"deliver_start_time\": \"2019-06-06T10:30:00.000Z\",\n                \"deliver_end_time\": \"2019-06-06T12:30:00.000Z\",\n                \"customer_id\": \"5cf67a6fb4deea62d01e4b18\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"products\": [\n                    {\n                        \"pictures\": [\n                            \"z7re7faj1hjvzafr9e.jpeg\"\n                        ],\n                        \"_id\": \"5cf67b33b4deea62d01e4b1d\",\n                        \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                        \"size\": \"1 litre\",\n                        \"price\": 30,\n                        \"count\": 3,\n                        \"name\": \"Amul Milk\"\n                    }\n                ],\n                \"total_amount\": 90,\n                \"order_id\": \"c4486c0\",\n                \"driver_assigned\": false,\n                \"created_at\": \"2019-06-04T14:07:47.918Z\",\n                \"updated_at\": \"2019-06-04T14:07:47.918Z\",\n                \"__v\": 0\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/driver/order.js",
    "groupTitle": "Driver-Order"
  },
  {
    "type": "get",
    "url": "/api/driver/order",
    "title": "Get driver orders",
    "name": "Get_driver_orders",
    "group": "Driver-Order",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>(optional) Status of the order to be displayed.</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "from_date",
            "description": "<p>(optional) (YYYY-MM-DD) Start Date of the order to be displayed Otherwise today's date is considered .</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "to_date",
            "description": "<p>(optional) (YYYY-MM-DD) End Date of the order to be displayed Otherwise today's date is considered.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"orders\": [\n            {\n                \"_id\": \"5cf67b33b4deea62d01e4b1c\",\n                \"address\": {\n                    \"pickup\": {\n                        \"house_no\": \"21/3\",\n                        \"street\": \"XYZ street\",\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\"\n                    },\n                    \"delivery\": {\n                        \"full_name\": \"Love\",\n                        \"email\": \"Love@gmail.com\",\n                        \"contact_number\": \"9900887766\",\n                        \"house_no\": \"G-78\",\n                        \"locality\": \"Srs\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"alias\": \"home\",\n                        \"city\": {\n                            \"_id\": \"5cd01c1839b32d325085052d\",\n                            \"areas\": [\n                                \"5cd01b02c1a6f3317fd9f072\",\n                                \"5cd01b0cf03a5831a00732d9\"\n                            ],\n                            \"name\": \"Islamabad\",\n                            \"created_at\": \"2019-05-06T11:35:52.520Z\",\n                            \"updated_at\": \"2019-05-06T11:35:52.520Z\",\n                            \"__v\": 0\n                        }\n                    }\n                },\n                \"status\": 3,\n                \"is_express_delivery\": false,\n                \"payment_type\": 1,\n                \"discount\": 0,\n                \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n                \"deliver_start_time\": \"2019-06-20T00:30:00.000Z\",\n                \"deliver_end_time\": \"2019-06-20T02:30:00.000Z\",\n                \"customer_id\": \"5cf67a6fb4deea62d01e4b18\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"products\": [\n                    {\n                        \"pictures\": [\n                            \"z7re7faj1hjvzafr9e.jpeg\"\n                        ],\n                        \"_id\": \"5cf67b33b4deea62d01e4b1d\",\n                        \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                        \"size\": \"1 litre\",\n                        \"price\": 30,\n                        \"count\": 3,\n                        \"name\": \"Amul Milk\"\n                    }\n                ],\n                \"total_amount\": 90,\n                \"order_id\": \"c4486c0\",\n                \"driver_assigned\": true,\n                \"created_at\": \"2019-06-04T14:07:47.918Z\",\n                \"updated_at\": \"2019-06-20T05:40:38.015Z\",\n                \"__v\": 0,\n                \"driver_id\": \"5d09d61e21d03516d24bbe7a\",\n                \"store\": {\n                    \"_id\": \"5cd1259b63aff817c37afb02\",\n                    \"picture\": \"ivvf6q6jx4hu1j7.png\",\n                    \"status\": 1,\n                    \"email\": \"khushal.pahuja@enukesoftware.com\",\n                    \"contact_number\": \"9711669906\",\n                    \"name\": \"XYZ store\",\n                    \"owner\": {\n                        \"full_name\": \"khushal pahuja\",\n                        \"email\": \"khushal.pahuja@enukesoftware.com\",\n                        \"contact_number\": \"9711669906\",\n                        \"password\": \"$2b$10$.tTIIkskAAhZqEg20cfVx.sHXlnPB93/zVLBFldR6anWN1Qdc8MIC\"\n                    },\n                    \"commission\": 2,\n                    \"address\": {\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"shop_no\": \"123\",\n                        \"locality\": \"Near Test Corner\"\n                    },\n                    \"timings\": {\n                        \"open_time\": \"08:00\",\n                        \"close_time\": \"20:00\"\n                    },\n                    \"created_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"updated_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"drivers\": [\n                        \"5d09d61e21d03516d24bbe7a\"\n                    ],\n                    \"__v\": 0,\n                    \"has_express_delivery\": false,\n                    \"self_delivery\": false\n                }\n            }\n        ],\n        \"orderCounts\": {\n            \"total\": 3,\n            \"unDelivered\": 0,\n            \"completed\": 1\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/driver/order.js",
    "groupTitle": "Driver-Order"
  },
  {
    "type": "get",
    "url": "/api/driver/order/scheduled",
    "title": "Scheduled Orders",
    "name": "Scheduled_Orders",
    "group": "Driver-Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"orders\": [\n            {\n                \"_id\": \"5cf6b2d5b4deea62d01e4b2a\",\n                \"address\": {\n                    \"pickup\": {\n                        \"house_no\": \"21/3\",\n                        \"street\": \"XYZ street\",\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\"\n                    },\n                    \"delivery\": {\n                        \"alias\": \"work\",\n                        \"full_name\": \"Najam ul Saqib\",\n                        \"email\": \"najam.sahto@gmail.com\",\n                        \"contact_number\": \"3012999901\",\n                        \"house_no\": \"Office number 309, Progressive Plaza\",\n                        \"locality\": \"Beaumont Road\",\n                        \"landmark\": \"Near Marriet Hotel\",\n                        \"city_id\": \"5cd02537b1ef5e3bfb165f5c\",\n                        \"city\": {\n                            \"_id\": \"5cd02537b1ef5e3bfb165f5c\",\n                            \"areas\": [\n                                \"5cd01b12c96f3731b5639a17\",\n                                \"5cd01b1d14310e31d2ffff6d\"\n                            ],\n                            \"name\": \"Lahore\",\n                            \"created_at\": \"2019-05-06T12:14:47.699Z\",\n                            \"updated_at\": \"2019-05-06T12:14:47.699Z\",\n                            \"__v\": 0\n                        }\n                    }\n                },\n                \"status\": 1,\n                \"is_express_delivery\": false,\n                \"payment_type\": 1,\n                \"discount\": 0,\n                \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n                \"deliver_start_time\": \"2019-06-06T10:30:00.000Z\",\n                \"deliver_end_time\": \"2019-06-06T12:30:00.000Z\",\n                \"customer_id\": \"5ceb927146c8cf13bc2e0db6\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"products\": [\n                    {\n                        \"pictures\": [\n                            \"z7re7faj1hjvzafr9e.jpeg\"\n                        ],\n                        \"_id\": \"5cf6b2d5b4deea62d01e4b2c\",\n                        \"product_id\": \"5ce55461ff79ad6065d5b9fe\",\n                        \"size\": \"1 litre\",\n                        \"price\": 30,\n                        \"count\": 1,\n                        \"name\": \"Amul Milk\"\n                    },\n                    {\n                        \"pictures\": [\n                            \"z7re7faj1hjvzafr9e.jpeg\"\n                        ],\n                        \"_id\": \"5cf6b2d5b4deea62d01e4b2b\",\n                        \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                        \"size\": \"1 litre\",\n                        \"price\": 30,\n                        \"count\": 1,\n                        \"name\": \"Amul Milk\"\n                    }\n                ],\n                \"total_amount\": 60,\n                \"order_id\": \"f1444c7\",\n                \"driver_assigned\": true,\n                \"created_at\": \"2019-06-04T18:05:09.150Z\",\n                \"updated_at\": \"2019-06-20T10:55:26.817Z\",\n                \"__v\": 0,\n                \"driver_id\": \"5d09d61e21d03516d24bbe7a\",\n                \"store\": {\n                    \"_id\": \"5cd1259b63aff817c37afb02\",\n                    \"picture\": \"ivvf6q6jx4hu1j7.png\",\n                    \"status\": 1,\n                    \"email\": \"khushal.pahuja@enukesoftware.com\",\n                    \"contact_number\": \"9711669906\",\n                    \"name\": \"XYZ store\",\n                    \"owner\": {\n                        \"full_name\": \"khushal pahuja\",\n                        \"email\": \"khushal.pahuja@enukesoftware.com\",\n                        \"contact_number\": \"9711669906\",\n                        \"password\": \"$2b$10$.tTIIkskAAhZqEg20cfVx.sHXlnPB93/zVLBFldR6anWN1Qdc8MIC\"\n                    },\n                    \"commission\": 2,\n                    \"address\": {\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"shop_no\": \"123\",\n                        \"locality\": \"Near Test Corner\"\n                    },\n                    \"timings\": {\n                        \"open_time\": \"08:00\",\n                        \"close_time\": \"20:00\"\n                    },\n                    \"created_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"updated_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"drivers\": [\n                        \"5d09d61e21d03516d24bbe7a\"\n                    ],\n                    \"__v\": 0,\n                    \"has_express_delivery\": false,\n                    \"self_delivery\": false\n                }\n            },\n            {\n                \"_id\": \"5cf67b33b4deea62d01e4b1c\",\n                \"address\": {\n                    \"pickup\": {\n                        \"house_no\": \"21/3\",\n                        \"street\": \"XYZ street\",\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\"\n                    },\n                    \"delivery\": {\n                        \"full_name\": \"Love\",\n                        \"email\": \"Love@gmail.com\",\n                        \"contact_number\": \"9900887766\",\n                        \"house_no\": \"G-78\",\n                        \"locality\": \"Srs\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"alias\": \"home\",\n                        \"city\": {\n                            \"_id\": \"5cd01c1839b32d325085052d\",\n                            \"areas\": [\n                                \"5cd01b02c1a6f3317fd9f072\",\n                                \"5cd01b0cf03a5831a00732d9\"\n                            ],\n                            \"name\": \"Islamabad\",\n                            \"created_at\": \"2019-05-06T11:35:52.520Z\",\n                            \"updated_at\": \"2019-05-06T11:35:52.520Z\",\n                            \"__v\": 0\n                        }\n                    }\n                },\n                \"status\": 1,\n                \"is_express_delivery\": false,\n                \"payment_type\": 1,\n                \"discount\": 0,\n                \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n                \"deliver_start_time\": \"2019-06-20T00:30:00.000Z\",\n                \"deliver_end_time\": \"2019-06-20T02:30:00.000Z\",\n                \"customer_id\": \"5cf67a6fb4deea62d01e4b18\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"products\": [\n                    {\n                        \"pictures\": [\n                            \"z7re7faj1hjvzafr9e.jpeg\"\n                        ],\n                        \"_id\": \"5cf67b33b4deea62d01e4b1d\",\n                        \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                        \"size\": \"1 litre\",\n                        \"price\": 30,\n                        \"count\": 3,\n                        \"name\": \"Amul Milk\"\n                    }\n                ],\n                \"total_amount\": 90,\n                \"order_id\": \"c4486c0\",\n                \"driver_assigned\": true,\n                \"created_at\": \"2019-06-04T14:07:47.918Z\",\n                \"updated_at\": \"2019-06-20T05:40:38.015Z\",\n                \"__v\": 0,\n                \"driver_id\": \"5d09d61e21d03516d24bbe7a\",\n                \"store\": {\n                    \"_id\": \"5cd1259b63aff817c37afb02\",\n                    \"picture\": \"ivvf6q6jx4hu1j7.png\",\n                    \"status\": 1,\n                    \"email\": \"khushal.pahuja@enukesoftware.com\",\n                    \"contact_number\": \"9711669906\",\n                    \"name\": \"XYZ store\",\n                    \"owner\": {\n                        \"full_name\": \"khushal pahuja\",\n                        \"email\": \"khushal.pahuja@enukesoftware.com\",\n                        \"contact_number\": \"9711669906\",\n                        \"password\": \"$2b$10$.tTIIkskAAhZqEg20cfVx.sHXlnPB93/zVLBFldR6anWN1Qdc8MIC\"\n                    },\n                    \"commission\": 2,\n                    \"address\": {\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"shop_no\": \"123\",\n                        \"locality\": \"Near Test Corner\"\n                    },\n                    \"timings\": {\n                        \"open_time\": \"08:00\",\n                        \"close_time\": \"20:00\"\n                    },\n                    \"created_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"updated_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"drivers\": [\n                        \"5d09d61e21d03516d24bbe7a\"\n                    ],\n                    \"__v\": 0,\n                    \"has_express_delivery\": false,\n                    \"self_delivery\": false\n                }\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/driver/order.js",
    "groupTitle": "Driver-Order"
  },
  {
    "type": "put",
    "url": "/api/driver/order/status-update/:id",
    "title": "Update order status",
    "name": "Update_order_status",
    "group": "Driver-Order",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the order to be updated.</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the order.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"order\": {\n            \"address\": {\n                \"pickup\": {\n                    \"house_no\": \"21/3\",\n                    \"street\": \"XYZ street\",\n                    \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                    \"city_id\": \"5cd01c1839b32d325085052d\"\n                },\n                \"delivery\": {\n                    \"alias\": \"work\",\n                    \"full_name\": \"Najam ul Saqib\",\n                    \"email\": \"najam.sahto@gmail.com\",\n                    \"contact_number\": \"3012999901\",\n                    \"house_no\": \"Office number 309, Progressive Plaza\",\n                    \"locality\": \"Beaumont Road\",\n                    \"landmark\": \"Near Marriet Hotel\",\n                    \"city_id\": \"5cd02537b1ef5e3bfb165f5c\"\n                }\n            },\n            \"status\": 4,\n            \"is_express_delivery\": false,\n            \"payment_type\": 1,\n            \"discount\": 0,\n            \"delivery_charges\": 0,\n            \"driver_assigned\": true,\n            \"_id\": \"5cf6b2d5b4deea62d01e4b2a\",\n            \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n            \"deliver_start_time\": \"2019-06-06T10:30:00.000Z\",\n            \"deliver_end_time\": \"2019-06-06T12:30:00.000Z\",\n            \"customer_id\": \"5ceb927146c8cf13bc2e0db6\",\n            \"store_id\": \"5cd1259b63aff817c37afb02\",\n            \"products\": [\n                {\n                    \"pictures\": [\n                        \"z7re7faj1hjvzafr9e.jpeg\"\n                    ],\n                    \"_id\": \"5cf6b2d5b4deea62d01e4b2c\",\n                    \"product_id\": \"5ce55461ff79ad6065d5b9fe\",\n                    \"size\": \"1 litre\",\n                    \"price\": 30,\n                    \"count\": 1,\n                    \"name\": \"Amul Milk\"\n                },\n                {\n                    \"pictures\": [\n                        \"z7re7faj1hjvzafr9e.jpeg\"\n                    ],\n                    \"_id\": \"5cf6b2d5b4deea62d01e4b2b\",\n                    \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                    \"size\": \"1 litre\",\n                    \"price\": 30,\n                    \"count\": 1,\n                    \"name\": \"Amul Milk\"\n                }\n            ],\n            \"total_amount\": 60,\n            \"order_id\": \"f1444c7\",\n            \"created_at\": \"2019-06-04T18:05:09.150Z\",\n            \"updated_at\": \"2019-06-20T14:17:31.411Z\",\n            \"__v\": 0,\n            \"driver_id\": \"5d09d61e21d03516d24bbe7a\",\n            \"taxes\": []\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/driver/order.js",
    "groupTitle": "Driver-Order"
  },
  {
    "type": "get",
    "url": "/api/driver/user/profile",
    "title": "Get Profile",
    "name": "Get_Profile",
    "group": "Driver-User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"customer\": {\n            \"picture\": \"ivvf6tmjwrhh057.png\",\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cf609a8a460b46232cb3e41\",\n            \"email\": \"khushal.pahuja@enukesoftware.cm\",\n            \"password\": \"$2b$10$PqV6nF6Sp36ZjAmgWGU97OEQmfVgVGmF3XBJKeQUzarzAkbKrFJ0y\",\n            \"full_name\": \"Khushal Pahuja 1\",\n            \"contact_number\": \"9711669906\",\n            \"verification_token\": null,\n            \"address\": [],\n            \"created_at\": \"2019-06-04T06:03:20.802Z\",\n            \"updated_at\": \"2019-06-11T07:28:06.505Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/driver/user.js",
    "groupTitle": "Driver-User"
  },
  {
    "type": "put",
    "url": "/api/driver/user/profile/:id",
    "title": "Update Profile",
    "name": "Update_Profile",
    "group": "Driver-User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the User to be updated</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "full_name",
            "description": "<p>(optional) name of the user.</p>"
          },
          {
            "group": "Body",
            "type": "File",
            "optional": false,
            "field": "picture",
            "description": "<p>(optional) Profile Picture .</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"customer\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5ce7f068b9c00379c7d8564b\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": \"$2b$10$ooranEJziyIxjfLLprkIVuVjjBhRfZ72DXqlhGNk4K2CyziGfQ/MC\",\n            \"verification_token\": \"b7274e6b-690b-46da-9dda-631d013743e2\",\n            \"address\": [\n                {\n                    \"_id\": \"5ced0d960945c93eb129d2f5\",\n                    \"house_no\": \"123\",\n                    \"locality\": \"xyz colony\",\n                    \"city_id\": \"5cd01c1839b32d325085052d\",\n                    \"alias\": \"home\",\n                    \"landmark\": \"xyz park\",\n                    \"email\": \"khushal@gmail.com\",\n                    \"contact_number\": \"9711669906\"\n                }\n            ],\n            \"created_at\": \"2019-05-24T13:23:52.522Z\",\n            \"updated_at\": \"2019-05-28T10:29:42.517Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Auth Token is Invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Auth Token is Invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Authentication token is invalid\",\n    \"error\": {\n        \"validation\": {\n            \"token\": [\n                \"Authentication token is invalid\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/driver/user.js",
    "groupTitle": "Driver-User"
  },
  {
    "type": "Post",
    "url": "/api/store/auth/login",
    "title": "Store Login",
    "name": "Login",
    "group": "Store-Auth",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Email Id of the Store</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the Store</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "Http/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsInR5cGUiOjIsImlhdCI6MTU4NTAzMTExMn0.PINUvpQKU5HqYlpB3QpdfmjeLH6ytXt0kl3sKM9UB3Q\",\n       \"user\": {\n           \"timings\": {\n               \"open_time\": \"5:00\",\n               \"close_time\": \"23:00\"\n           },\n           \"owner\": {\n               \"email\": \"enuke@enuke.com\",\n               \"password\": \"$2b$10$KgSpGfY2JtUZouE9LNRGlue3ngzQRnYzAc7sF5fw4XBKVmrH/YfnO\",\n               \"full_name\": \"Enuke\",\n               \"contact_number\": \"9999988888\"\n           },\n           \"picture\": \"img store.jpg\",\n           \"has_express_delivery\": false,\n           \"drivers\": [\n               \"5d79f10ed22f1e78b7671d74\"\n           ],\n           \"status\": 1,\n           \"_id\": \"5d778327d22f1e78b7671bd2\",\n           \"self_delivery\": false,\n           \"address\": [\n               {\n                   \"coordinates\": {\n                       \"latitude\": 24.8607,\n                       \"longitude\": 67.0011\n                   },\n                   \"_id\": \"5d778327d22f1e78b7671bd3\",\n                   \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                   \"area_id\": \"5e469966d21fe166d8c9356f\",\n                   \"shop_no\": \"20\",\n                   \"locality\": \"test locality\",\n                   \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                   \"unique_link\": \"Z1xaR9L\"\n               }\n           ],\n           \"name\": \"Enuke Test store\",\n           \"commission\": 20,\n           \"created_at\": \"2019-09-10T11:04:07.991Z\",\n           \"updated_at\": \"2020-03-24T06:24:16.648Z\",\n           \"__v\": 0,\n           \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsImlhdCI6MTU3ODkxMDg5NX0.PV2a49oVu-3BjT8SRb0isTYbP_AogywQDcYaEDtOk-w\",\n           \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsInR5cGUiOjIsImlhdCI6MTU4NTAzMTA1Nn0.ixUzo5UC7PhGrzjhKom1F5Fqzf2v4V3oAifIKssjK-0\",\n           \"delivery_charges\": [\n               {\n                   \"_id\": \"5e5dc219f2b4181e2319f026\",\n                   \"order_amount\": 500,\n                   \"charges\": 100\n               },\n               {\n                   \"_id\": \"5e5dc219f2b4181e2319f025\",\n                   \"order_amount\": 800,\n                   \"charges\": 50\n               },\n               {\n                   \"_id\": \"5e5dc219f2b4181e2319f024\",\n                   \"order_amount\": 1000,\n                   \"charges\": 30\n               }\n           ],\n           \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422",
            "description": "<p>Username is a required field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Username is a required field.\",\n   \"error\": {\n       \"validation\": {\n           \"username\": [\n               \"Username is a required field.\"\n           ]\n       }\n   }\n}",
          "type": "json"
        },
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"Password is a required field.\",\n   \"error\": {\n       \"validation\": {\n           \"password\": [\n               \"Password is a required field.\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/store/auth.js",
    "groupTitle": "Store-Auth"
  },
  {
    "type": "post",
    "url": "/api/store/catgeory",
    "title": "Add Category",
    "name": "Add_Category",
    "group": "Store-Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "store_id",
            "description": "<p>ID of the store.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>(optional) If its a parent catgeory Specify parent category id.</p>"
          },
          {
            "group": "Parameter",
            "type": "[File]",
            "optional": false,
            "field": "Pictures",
            "description": "<p>Array of the pictures of products.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"status\": 1,\n        \"parent\": \"5ce533a8a9f87e3f2478103d\",\n        \"_id\": \"5ce691368c74ad496365d5b0\",\n        \"store_id\": \"5ce513d4a2041b29b2543750\",\n        \"name\": \"Soft Drinks\",\n        \"picture\": \"ivvfehvjw0mq6ve.jpg\",\n        \"created_at\": \"2019-05-23T12:25:26.112Z\",\n        \"updated_at\": \"2019-05-23T12:25:26.112Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Image is required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Image is required:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Image is a required.\",\n    \"error\": {\n        \"validation\": {\n            \"picture\": [\n                \"Image is a required \"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/store/category.js",
    "groupTitle": "Store-Category"
  },
  {
    "type": "",
    "url": "/name",
    "title": "Get Categories",
    "group": "Store-Category",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"categories\": [\n           {\n               \"_id\": \"5d77839bd22f1e78b7671bf7\",\n               \"status\": 1,\n               \"parent\": null,\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"name\": \"test Category 1\",\n               \"picture\": \"banana shake.jpg\",\n               \"created_at\": \"2019-09-10T11:06:03.670Z\",\n               \"updated_at\": \"2020-01-14T09:54:11.905Z\",\n               \"__v\": 0,\n               \"subcategories\": [\n                   {\n                       \"_id\": \"5e1d8b56401e1a0c41f65e15\",\n                       \"status\": 1,\n                       \"parent\": \"5d77839bd22f1e78b7671bf7\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Ice cream\",\n                       \"created_at\": \"2020-01-14T09:35:18.169Z\",\n                       \"updated_at\": \"2020-01-14T09:35:18.169Z\",\n                       \"__v\": 0\n                   }\n               ]\n           },\n           {\n               \"_id\": \"5d7783d2d22f1e78b7671bf8\",\n               \"status\": 1,\n               \"parent\": null,\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"name\": \"test category 2\",\n               \"picture\": \"category1.png\",\n               \"created_at\": \"2019-09-10T11:06:58.799Z\",\n               \"updated_at\": \"2019-09-10T11:06:58.799Z\",\n               \"__v\": 0,\n               \"subcategories\": [\n                   {\n                       \"_id\": \"5d9c49e9d22f1e78b76728b8\",\n                       \"status\": 1,\n                       \"parent\": \"5d7783d2d22f1e78b7671bf8\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"SubCategory0006\",\n                       \"created_at\": \"2019-10-08T08:33:45.315Z\",\n                       \"updated_at\": \"2019-10-08T08:33:45.315Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5d9c49f5d22f1e78b76728b9\",\n                       \"status\": 1,\n                       \"parent\": \"5d7783d2d22f1e78b7671bf8\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"SubCategory0007\",\n                       \"created_at\": \"2019-10-08T08:33:57.987Z\",\n                       \"updated_at\": \"2019-10-08T08:33:57.987Z\",\n                       \"__v\": 0\n                   }\n               ]\n           },\n           {\n               \"_id\": \"5da81a395a367e70790dfa00\",\n               \"status\": 1,\n               \"parent\": null,\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"name\": \"Snacks\",\n               \"picture\": \"breakfast and dairy.jpeg\",\n               \"created_at\": \"2019-10-17T07:37:29.373Z\",\n               \"updated_at\": \"2019-10-17T07:37:29.373Z\",\n               \"__v\": 0,\n               \"subcategories\": [\n                   {\n                       \"_id\": \"5da81a5d5a367e70790dfa01\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Party & Festive Needs\\t\",\n                       \"created_at\": \"2019-10-17T07:38:05.175Z\",\n                       \"updated_at\": \"2019-10-17T07:38:05.175Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81a685a367e70790dfa02\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Ice Cream\",\n                       \"created_at\": \"2019-10-17T07:38:16.909Z\",\n                       \"updated_at\": \"2019-10-17T07:38:16.909Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81a785a367e70790dfa03\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Biscuits\",\n                       \"created_at\": \"2019-10-17T07:38:32.699Z\",\n                       \"updated_at\": \"2019-10-17T07:38:32.699Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81a835a367e70790dfa04\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Gum & Candy\",\n                       \"created_at\": \"2019-10-17T07:38:43.216Z\",\n                       \"updated_at\": \"2019-10-17T07:38:43.216Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81a8e5a367e70790dfa05\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Chips & Crisps\",\n                       \"created_at\": \"2019-10-17T07:38:54.801Z\",\n                       \"updated_at\": \"2019-10-17T07:38:54.801Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81a995a367e70790dfa06\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Nuts & Dried Fruits\",\n                       \"created_at\": \"2019-10-17T07:39:05.220Z\",\n                       \"updated_at\": \"2019-10-17T07:39:05.220Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81aa25a367e70790dfa07\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Deserts Mixes\",\n                       \"created_at\": \"2019-10-17T07:39:14.233Z\",\n                       \"updated_at\": \"2019-10-17T07:39:14.233Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81aaf5a367e70790dfa08\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Cakes\",\n                       \"created_at\": \"2019-10-17T07:39:27.035Z\",\n                       \"updated_at\": \"2019-10-17T07:39:27.035Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81ab75a367e70790dfa09\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Namkeen\",\n                       \"created_at\": \"2019-10-17T07:39:35.665Z\",\n                       \"updated_at\": \"2019-10-17T07:39:35.665Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81ac15a367e70790dfa0a\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Noodle & Soup\",\n                       \"created_at\": \"2019-10-17T07:39:45.561Z\",\n                       \"updated_at\": \"2019-10-17T07:39:45.561Z\",\n                       \"__v\": 0\n                   },\n                   {\n                       \"_id\": \"5da81ace5a367e70790dfa0b\",\n                       \"status\": 1,\n                       \"parent\": \"5da81a395a367e70790dfa00\",\n                       \"store_id\": \"5d778327d22f1e78b7671bd2\",\n                       \"name\": \"Pasta & Vermicelli\",\n                       \"created_at\": \"2019-10-17T07:39:58.635Z\",\n                       \"updated_at\": \"2019-10-17T07:39:58.635Z\",\n                       \"__v\": 0\n                   }\n               ]\n           },\n           {\n               \"_id\": \"5dbc8e53d01b806bfe171457\",\n               \"status\": 1,\n               \"parent\": null,\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"name\": \"test category 3\",\n               \"picture\": \"imagenotavailable.png\",\n               \"created_at\": \"2019-11-01T19:58:11.790Z\",\n               \"updated_at\": \"2019-11-01T19:58:11.790Z\",\n               \"__v\": 0,\n               \"subcategories\": []\n           },\n           {\n               \"_id\": \"5e71cc28b63595371e4f622c\",\n               \"status\": 1,\n               \"parent\": null,\n               \"name\": \"Test Category\",\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"picture\":\"Screenshot_2020-02-04 Shuffle \u0013 A Number For Every Occasion\\\".png\",\n               \"created_at\": \"2020-03-18T07:22:16.950Z\",\n               \"updated_at\": \"2020-03-18T07:22:16.950Z\",\n               \"__v\": 0,\n               \"subcategories\": []\n           },\n           {\n               \"_id\": \"5e71d0627a77dc3a548f0fce\",\n               \"status\": 1,\n               \"parent\": null,\n               \"name\": \"Test Category1\",\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"picture\":\"Screenshot_2020-02-04 Shuffle \u0013 A Number For Every Occasion\\\".png\",\n               \"created_at\": \"2020-03-18T07:40:18.571Z\",\n               \"updated_at\": \"2020-03-18T07:40:18.571Z\",\n               \"__v\": 0,\n               \"subcategories\": []\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/store/category.js",
    "groupTitle": "Store-Category",
    "name": "Name"
  },
  {
    "type": "Post",
    "url": "/api/store/dashboard",
    "title": "Dashboard Data",
    "name": "Dashboard_Data",
    "group": "Store-Dashboard",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "from_date",
            "description": "<p>Date from data should be displayed</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "to_date",
            "description": "<p>Date till data should be displayed</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"total_orders\": 21,\n       \"total_sale\": 6905,\n       \"graph_sale_data\": [\n           {\n               \"month\": \"03\",\n               \"sale\": 30\n           },\n           {\n               \"month\": \"02\",\n               \"sale\": 135\n           },\n           {\n               \"month\": \"01\",\n               \"sale\": 6465\n           }\n       ],\n       \"graph_order_date\": [\n           {\n               \"status\": 1,\n               \"order\": 4\n           },\n           {\n               \"status\": 4,\n               \"order\": 4\n           },\n           {\n               \"status\": 5,\n               \"order\": 3\n           },\n           {\n               \"status\": 3,\n               \"order\": 9\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>From Date is a Required Field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"From Date is a Required Field\",\n   \"error\": {\n       \"validation\": {\n           \"from_date\": [\n               \"From Date is a Required Field\"\n           ]\n       }\n   }\n}",
          "type": "json"
        },
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"To Date is a Required Field\",\n   \"error\": {\n       \"validation\": {\n           \"from_date\": [\n               \"To Date is a Required Field\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/store/common.js",
    "groupTitle": "Store-Dashboard"
  },
  {
    "type": "Get",
    "url": "/api/store/order",
    "title": "Get Orders",
    "name": "Get_Orders",
    "group": "Store-Orders",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "pageNo",
            "description": "<p>Current Page Number</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "perPage",
            "description": "<p>Items to be displayed in per page.</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Orders to be searched</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Sort Field</p>"
          }
        ],
        "Query String) {String} (Option": [
          {
            "group": "Query String) {String} (Option",
            "optional": false,
            "field": "sortType",
            "description": "<p>Sort Type</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "Http/1.1 200OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"order\": [\n           {\n               \"_id\": \"5dfa1983954bc84f45786cf7\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.8607,\n                           \"longitude\": 67.0011\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"20\",\n                       \"locality\": \"test locality\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.8607,\n                           \"longitude\": 67.0011\n                       },\n                       \"alias\": \"home\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"full_name\": \"Shahroz\",\n                       \"contact_number\": \"9999999999\",\n                       \"locality\": \"Test\",\n                       \"landmark\": \"Ind\",\n                       \"email\": \"shahroz.ansari@enukesoftware.com\",\n                       \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"house_no\": \"22\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 1,\n               \"is_express_delivery\": false,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 200,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": true,\n               \"store_paid\": false,\n               \"slot_id\": \"5df9f3aa4648a37afa44d183\",\n               \"deliver_start_time\": \"2019-12-21T10:00:00.000Z\",\n               \"deliver_end_time\": \"2019-12-21T12:00:00.000Z\",\n               \"customer_id\": \"5df72e9d4648a37afa44d12e\",\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"products\": [\n                   {\n                       \"pictures\": [\n                           \"0080010.jpg0080010.jpg\"\n                       ],\n                       \"_id\": \"5dfa1983954bc84f45786cf8\",\n                       \"product_id\": \"5de8a00dd85c19035ebf116e\",\n                       \"size\": \"1 Pc\",\n                       \"price\": 275,\n                       \"count\": 1,\n                       \"name\": \"Ceramic Mug\"\n                   }\n               ],\n               \"total_amount\": 275,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 275,\n               \"commission_percentage\": 20,\n               \"admin_commission_amount\": 55,\n               \"store_payout_amount\": 220,\n               \"order_id\": \"63aa8c2\",\n               \"created_at\": \"2019-12-18T12:20:19.422Z\",\n               \"updated_at\": \"2020-01-10T14:01:11.089Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5d79f10ed22f1e78b7671d74\",\n               \"store\": {\n                   \"_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"picture\": \"img store.jpg\",\n                   \"has_express_delivery\": false,\n                   \"drivers\": [\n                       \"5d79f10ed22f1e78b7671d74\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"5:00\",\n                       \"close_time\": \"23:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"enuke@enuke.com\",\n                       \"password\": \"$2b$10$KgSpGfY2JtUZouE9LNRGlue3ngzQRnYzAc7sF5fw4XBKVmrH/YfnO\",\n                       \"full_name\": \"Enuke\",\n                       \"contact_number\": \"9999988888\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d778327d22f1e78b7671bd3\",\n                           \"coordinates\": {\n                               \"latitude\": 24.8607,\n                               \"longitude\": 67.0011\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e469966d21fe166d8c9356f\",\n                           \"shop_no\": \"20\",\n                           \"locality\": \"test locality\",\n                           \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                           \"unique_link\": \"Z1xaR9L\"\n                       }\n                   ],\n                   \"name\": \"Enuke Test store\",\n                   \"commission\": 20,\n                   \"created_at\": \"2019-09-10T11:04:07.991Z\",\n                   \"updated_at\": \"2020-03-12T11:46:00.799Z\",\n                   \"__v\": 0,\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsImlhdCI6MTU3ODkxMDg5NX0.PV2a49oVu-3BjT8SRb0isTYbP_AogywQDcYaEDtOk-w\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsInR5cGUiOjIsImlhdCI6MTU4NDAxMzU2MH0.6UOfFoSELTE40TAMfUz6uBoROUPwlvLb5gcJNkhmwzA\",\n                   \"delivery_charges\": [\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f026\",\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f025\",\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f024\",\n                           \"order_amount\": 1000,\n                           \"charges\": 30\n                       }\n                   ],\n                   \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\"\n               },\n               \"driver\": {\n                   \"_id\": \"5d79f10ed22f1e78b7671d74\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"prince.kumar@enukesoftware.com\",\n                   \"password\": \"$2b$10$68KJiWoNIlfe0m27HVQZA.CIqb4qIF.ioMNsbiNcLt8f1s1EaIN26\",\n                   \"full_name\": \"PRINCE KUMAR\",\n                   \"contact_number\": \"8285724681\",\n                   \"address\": \"C 37 Najafgarh Nayabazar, Near BVM Public School\",\n                   \"created_at\": \"2019-09-12T07:17:34.858Z\",\n                   \"updated_at\": \"2020-03-23T10:17:43.395Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"eg5DRGNSThA:APA91bGvquxW5mM8lRZdyV8x0tGQw7QSGV3wvLsoJtdnHu59ayLcW8j6MJ-KLgxLhm0JZWAw6DKCK-GoFICyndx3mzYcAHMWpeokMBR94nV3x7uFTwJ9Tu2Qi59hINrKYPUxk3DTVWKx\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzlmMTBlZDIyZjFlNzhiNzY3MWQ3NCIsInR5cGUiOjQsImlhdCI6MTU4NDk1ODY2M30.I08IZ8YhgzDwSJ75NY4aCjFc_RVVTaZl-Z6mwsa-Hzw\",\n                   \"percentageCommission\": 10\n               }\n           },\n           {\n               \"_id\": \"5e186dc0c011a50c3ad3cdb5\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.8607,\n                           \"longitude\": 67.0011\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"20\",\n                       \"locality\": \"test locality\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.86137168713979,\n                           \"longitude\": 67.0001451335907\n                       },\n                       \"alias\": \"home\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"full_name\": \"pratibha\",\n                       \"email\": \"pratibha.chaudhary@enukesoftware.com\",\n                       \"contact_number\": \"8796231458\",\n                       \"house_no\": \"sdfdsf\",\n                       \"locality\": \"dfdsf\",\n                       \"landmark\": \"dfdsfdsf\",\n                       \"gps_address\": \"Pitchar Rd, Shiddi Village, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"what_3_words\": \"dfdf gryrty\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 3,\n               \"is_express_delivery\": true,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 200,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": true,\n               \"store_paid\": false,\n               \"deliver_start_time\": \"2020-01-10T12:27:44.427Z\",\n               \"deliver_end_time\": \"2020-01-10T14:27:44.427Z\",\n               \"customer_id\": \"5e186d7c08f1d10c6f28809d\",\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"products\": [\n                   {\n                       \"pictures\": [\n                           \"0080010.jpg0080010.jpg\"\n                       ],\n                       \"_id\": \"5e186dc0c011a50c3ad3cdb8\",\n                       \"product_id\": \"5de8a00dd85c19035ebf116e\",\n                       \"size\": \"1 Pc\",\n                       \"price\": 275,\n                       \"count\": 2,\n                       \"name\": \"Ceramic Mug\"\n                   },\n                   {\n                       \"pictures\": [\n                           \"0080011.jpg\"\n                       ],\n                       \"_id\": \"5e186dc0c011a50c3ad3cdb7\",\n                       \"product_id\": \"5de8a015d85c19035ebf116f\",\n                       \"size\": \"1 Pc\",\n                       \"price\": 100,\n                       \"count\": 2,\n                       \"name\": \"China Mug (Size - L)\"\n                   },\n                   {\n                       \"pictures\": [\n                           \"0080012.jpg\"\n                       ],\n                       \"_id\": \"5e186dc0c011a50c3ad3cdb6\",\n                       \"product_id\": \"5de8a01ed85c19035ebf1170\",\n                       \"size\": \"1 Pc\",\n                       \"price\": 70,\n                       \"count\": 3,\n                       \"name\": \"China Mug (Size - M)\"\n                   }\n               ],\n               \"total_amount\": 960,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 960,\n               \"commission_percentage\": 20,\n               \"admin_commission_amount\": 192,\n               \"store_payout_amount\": 768,\n               \"order_id\": \"26050c3\",\n               \"created_at\": \"2020-01-10T12:27:44.465Z\",\n               \"updated_at\": \"2020-01-10T14:16:18.852Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5d79f10ed22f1e78b7671d74\",\n               \"store\": {\n                   \"_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"picture\": \"img store.jpg\",\n                   \"has_express_delivery\": false,\n                   \"drivers\": [\n                       \"5d79f10ed22f1e78b7671d74\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"5:00\",\n                       \"close_time\": \"23:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"enuke@enuke.com\",\n                       \"password\": \"$2b$10$KgSpGfY2JtUZouE9LNRGlue3ngzQRnYzAc7sF5fw4XBKVmrH/YfnO\",\n                       \"full_name\": \"Enuke\",\n                       \"contact_number\": \"9999988888\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d778327d22f1e78b7671bd3\",\n                           \"coordinates\": {\n                               \"latitude\": 24.8607,\n                               \"longitude\": 67.0011\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e469966d21fe166d8c9356f\",\n                           \"shop_no\": \"20\",\n                           \"locality\": \"test locality\",\n                           \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                           \"unique_link\": \"Z1xaR9L\"\n                       }\n                   ],\n                   \"name\": \"Enuke Test store\",\n                   \"commission\": 20,\n                   \"created_at\": \"2019-09-10T11:04:07.991Z\",\n                   \"updated_at\": \"2020-03-12T11:46:00.799Z\",\n                   \"__v\": 0,\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsImlhdCI6MTU3ODkxMDg5NX0.PV2a49oVu-3BjT8SRb0isTYbP_AogywQDcYaEDtOk-w\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsInR5cGUiOjIsImlhdCI6MTU4NDAxMzU2MH0.6UOfFoSELTE40TAMfUz6uBoROUPwlvLb5gcJNkhmwzA\",\n                   \"delivery_charges\": [\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f026\",\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f025\",\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f024\",\n                           \"order_amount\": 1000,\n                           \"charges\": 30\n                       }\n                   ],\n                   \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\"\n               },\n               \"driver\": {\n                   \"_id\": \"5d79f10ed22f1e78b7671d74\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"prince.kumar@enukesoftware.com\",\n                   \"password\": \"$2b$10$68KJiWoNIlfe0m27HVQZA.CIqb4qIF.ioMNsbiNcLt8f1s1EaIN26\",\n                   \"full_name\": \"PRINCE KUMAR\",\n                   \"contact_number\": \"8285724681\",\n                   \"address\": \"C 37 Najafgarh Nayabazar, Near BVM Public School\",\n                   \"created_at\": \"2019-09-12T07:17:34.858Z\",\n                   \"updated_at\": \"2020-03-23T10:17:43.395Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"eg5DRGNSThA:APA91bGvquxW5mM8lRZdyV8x0tGQw7QSGV3wvLsoJtdnHu59ayLcW8j6MJ-KLgxLhm0JZWAw6DKCK-GoFICyndx3mzYcAHMWpeokMBR94nV3x7uFTwJ9Tu2Qi59hINrKYPUxk3DTVWKx\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzlmMTBlZDIyZjFlNzhiNzY3MWQ3NCIsInR5cGUiOjQsImlhdCI6MTU4NDk1ODY2M30.I08IZ8YhgzDwSJ75NY4aCjFc_RVVTaZl-Z6mwsa-Hzw\",\n                   \"percentageCommission\": 10\n               }\n           },\n           {\n               \"_id\": \"5e187c28401e1a0c41f65dc3\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.8607,\n                           \"longitude\": 67.0011\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"20\",\n                       \"locality\": \"test locality\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.86187788373269,\n                           \"longitude\": 67.00032752380372\n                       },\n                       \"alias\": \"work\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"full_name\": \"Ruqaiya\",\n                       \"email\": \"ruqaiya@guerrillamail.com\",\n                       \"contact_number\": \"8796231458\",\n                       \"house_no\": \"gjuyt\",\n                       \"locality\": \"eredf\",\n                       \"landmark\": \"dfdsf\",\n                       \"gps_address\": \"Muhammad Ali Alvi Rd, Shiddi Village, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"what_3_words\": null,\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 3,\n               \"is_express_delivery\": true,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 200,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"deliver_start_time\": \"2020-01-10T13:29:12.264Z\",\n               \"deliver_end_time\": \"2020-01-10T15:29:12.267Z\",\n               \"customer_id\": \"5e186d7c08f1d10c6f28809d\",\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"products\": [\n                   {\n                       \"pictures\": [\n                           \"0080011.jpg\"\n                       ],\n                       \"_id\": \"5e187c28401e1a0c41f65dc4\",\n                       \"product_id\": \"5de8a015d85c19035ebf116f\",\n                       \"size\": \"1 Pc\",\n                       \"price\": 100,\n                       \"count\": 6,\n                       \"name\": \"China Mug (Size - L)\"\n                   }\n               ],\n               \"total_amount\": 600,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 600,\n               \"commission_percentage\": 20,\n               \"admin_commission_amount\": 120,\n               \"store_payout_amount\": 480,\n               \"order_id\": \"bbbf731\",\n               \"created_at\": \"2020-01-10T13:29:12.292Z\",\n               \"updated_at\": \"2020-01-10T13:56:00.234Z\",\n               \"__v\": 0,{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsInR5cGUiOjIsImlhdCI6MTU4NTAzMTExMn0.PINUvpQKU5HqYlpB3QpdfmjeLH6ytXt0kl3sKM9UB3Q\",\n        \"user\": {\n            \"timings\": {\n                \"open_time\": \"5:00\",\n                \"close_time\": \"23:00\"\n            },\n            \"owner\": {\n                \"email\": \"enuke@enuke.com\",\n                \"password\": \"$2b$10$KgSpGfY2JtUZouE9LNRGlue3ngzQRnYzAc7sF5fw4XBKVmrH/YfnO\",\n                \"full_name\": \"Enuke\",\n                \"contact_number\": \"9999988888\"\n            },\n            \"picture\": \"img store.jpg\",\n            \"has_express_delivery\": false,\n            \"drivers\": [\n                \"5d79f10ed22f1e78b7671d74\"\n            ],\n            \"status\": 1,\n            \"_id\": \"5d778327d22f1e78b7671bd2\",\n            \"self_delivery\": false,\n            \"address\": [\n                {\n                    \"coordinates\": {\n                        \"latitude\": 24.8607,\n                        \"longitude\": 67.0011\n                    },\n                    \"_id\": \"5d778327d22f1e78b7671bd3\",\n                    \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                    \"area_id\": \"5e469966d21fe166d8c9356f\",\n                    \"shop_no\": \"20\",\n                    \"locality\": \"test locality\",\n                    \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                    \"unique_link\": \"Z1xaR9L\"\n                }\n            ],\n            \"name\": \"Enuke Test store\",\n            \"commission\": 20,\n            \"created_at\": \"2019-09-10T11:04:07.991Z\",\n            \"updated_at\": \"2020-03-24T06:24:16.648Z\",\n            \"__v\": 0,\n            \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsImlhdCI6MTU3ODkxMDg5NX0.PV2a49oVu-3BjT8SRb0isTYbP_AogywQDcYaEDtOk-w\",\n            \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsInR5cGUiOjIsImlhdCI6MTU4NTAzMTA1Nn0.ixUzo5UC7PhGrzjhKom1F5Fqzf2v4V3oAifIKssjK-0\",\n            \"delivery_charges\": [\n                {\n                    \"_id\": \"5e5dc219f2b4181e2319f026\",\n                    \"order_amount\": 500,\n                    \"charges\": 100\n                },\n                {\n                    \"_id\": \"5e5dc219f2b4181e2319f025\",\n                    \"order_amount\": 800,\n                    \"charges\": 50\n                },\n                {\n                    \"_id\": \"5e5dc219f2b4181e2319f024\",\n                    \"order_amount\": 1000,\n                    \"charges\": 30\n                }\n            ],\n            \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\"\n        }\n    }\n}\n               \"driver_id\": \"5d79f10ed22f1e78b7671d74\",\n               \"store\": {\n                   \"_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"picture\": \"img store.jpg\",\n                   \"has_express_delivery\": false,\n                   \"drivers\": [\n                       \"5d79f10ed22f1e78b7671d74\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"5:00\",\n                       \"close_time\": \"23:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"enuke@enuke.com\",\n                       \"password\": \"$2b$10$KgSpGfY2JtUZouE9LNRGlue3ngzQRnYzAc7sF5fw4XBKVmrH/YfnO\",\n                       \"full_name\": \"Enuke\",\n                       \"contact_number\": \"9999988888\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d778327d22f1e78b7671bd3\",\n                           \"coordinates\": {\n                               \"latitude\": 24.8607,\n                               \"longitude\": 67.0011\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e469966d21fe166d8c9356f\",\n                           \"shop_no\": \"20\",\n                           \"locality\": \"test locality\",\n                           \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                           \"unique_link\": \"Z1xaR9L\"\n                       }\n                   ],\n                   \"name\": \"Enuke Test store\",\n                   \"commission\": 20,\n                   \"created_at\": \"2019-09-10T11:04:07.991Z\",\n                   \"updated_at\": \"2020-03-12T11:46:00.799Z\",\n                   \"__v\": 0,\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsImlhdCI6MTU3ODkxMDg5NX0.PV2a49oVu-3BjT8SRb0isTYbP_AogywQDcYaEDtOk-w\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsInR5cGUiOjIsImlhdCI6MTU4NDAxMzU2MH0.6UOfFoSELTE40TAMfUz6uBoROUPwlvLb5gcJNkhmwzA\",\n                   \"delivery_charges\": [\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f026\",\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f025\",\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f024\",\n                           \"order_amount\": 1000,\n                           \"charges\": 30\n                       }\n                   ],\n                   \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\"\n               },\n               \"driver\": {\n                   \"_id\": \"5d79f10ed22f1e78b7671d74\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"prince.kumar@enukesoftware.com\",\n                   \"password\": \"$2b$10$68KJiWoNIlfe0m27HVQZA.CIqb4qIF.ioMNsbiNcLt8f1s1EaIN26\",\n                   \"full_name\": \"PRINCE KUMAR\",\n                   \"contact_number\": \"8285724681\",\n                   \"address\": \"C 37 Najafgarh Nayabazar, Near BVM Public School\",\n                   \"created_at\": \"2019-09-12T07:17:34.858Z\",\n                   \"updated_at\": \"2020-03-23T10:17:43.395Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"eg5DRGNSThA:APA91bGvquxW5mM8lRZdyV8x0tGQw7QSGV3wvLsoJtdnHu59ayLcW8j6MJ-KLgxLhm0JZWAw6DKCK-GoFICyndx3mzYcAHMWpeokMBR94nV3x7uFTwJ9Tu2Qi59hINrKYPUxk3DTVWKx\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzlmMTBlZDIyZjFlNzhiNzY3MWQ3NCIsInR5cGUiOjQsImlhdCI6MTU4NDk1ODY2M30.I08IZ8YhgzDwSJ75NY4aCjFc_RVVTaZl-Z6mwsa-Hzw\",\n                   \"percentageCommission\": 10\n               }\n           },\n           {\n               \"_id\": \"5e187c4c08f1d10c6f28809f\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.8607,\n                           \"longitude\": 67.0011\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"20\",\n                       \"locality\": \"test locality\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.86138142170918,\n                           \"longitude\": 66.99995201454163\n                       },\n                       \"alias\": \"work\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"full_name\": \"Pratibha Chaudhray\",\n                       \"email\": \"pratibha.chaudhary@enukesoftware.com\",\n                       \"contact_number\": \"8796231458\",\n                       \"house_no\": \"32B, old dlf\",\n                       \"locality\": \"dfsd\",\n                       \"landmark\": \"dfds\",\n                       \"gps_address\": \"Pitchar Rd, Shiddi Village, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"what_3_words\": \"\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 3,\n               \"is_express_delivery\": false,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 200,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"slot_id\": \"5e0e3dec954bc84f45786ff0\",\n               \"deliver_start_time\": \"2020-01-10T14:00:00.000Z\",\n               \"deliver_end_time\": \"2020-01-10T16:00:00.000Z\",\n               \"customer_id\": \"5e186d7c08f1d10c6f28809d\",\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"products\": [\n                   {\n                       \"pictures\": [\n                           \"0080012.jpg\"\n                       ],\n                       \"_id\": \"5e187c4c08f1d10c6f2880a0\",\n                       \"product_id\": \"5de8a01ed85c19035ebf1170\",\n                       \"size\": \"1 Pc\",\n                       \"price\": 70,\n                       \"count\": 10,\n                       \"name\": \"China Mug (Size - M)\"\n                   }\n               ],\n               \"total_amount\": 700,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 700,\n               \"commission_percentage\": 20,\n               \"admin_commission_amount\": 140,\n               \"store_payout_amount\": 560,\n               \"order_id\": \"f84b790\",\n               \"created_at\": \"2020-01-10T13:29:48.044Z\",\n               \"updated_at\": \"2020-01-10T13:53:37.708Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5d79f10ed22f1e78b7671d74\",\n               \"store\": {\n                   \"_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"picture\": \"img store.jpg\",\n                   \"has_express_delivery\": false,\n                   \"drivers\": [\n                       \"5d79f10ed22f1e78b7671d74\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"5:00\",\n                       \"close_time\": \"23:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"enuke@enuke.com\",\n                       \"password\": \"$2b$10$KgSpGfY2JtUZouE9LNRGlue3ngzQRnYzAc7sF5fw4XBKVmrH/YfnO\",\n                       \"full_name\": \"Enuke\",\n                       \"contact_number\": \"9999988888\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d778327d22f1e78b7671bd3\",\n                           \"coordinates\": {\n                               \"latitude\": 24.8607,\n                               \"longitude\": 67.0011\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e469966d21fe166d8c9356f\",\n                           \"shop_no\": \"20\",\n                           \"locality\": \"test locality\",\n                           \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                           \"unique_link\": \"Z1xaR9L\"\n                       }\n                   ],\n                   \"name\": \"Enuke Test store\",\n                   \"commission\": 20,\n                   \"created_at\": \"2019-09-10T11:04:07.991Z\",\n                   \"updated_at\": \"2020-03-12T11:46:00.799Z\",\n                   \"__v\": 0,\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsImlhdCI6MTU3ODkxMDg5NX0.PV2a49oVu-3BjT8SRb0isTYbP_AogywQDcYaEDtOk-w\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsInR5cGUiOjIsImlhdCI6MTU4NDAxMzU2MH0.6UOfFoSELTE40TAMfUz6uBoROUPwlvLb5gcJNkhmwzA\",\n                   \"delivery_charges\": [\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f026\",\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f025\",\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f024\",\n                           \"order_amount\": 1000,\n                           \"charges\": 30\n                       }\n                   ],\n                   \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\"\n               },\n               \"driver\": {\n                   \"_id\": \"5d79f10ed22f1e78b7671d74\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"prince.kumar@enukesoftware.com\",\n                   \"password\": \"$2b$10$68KJiWoNIlfe0m27HVQZA.CIqb4qIF.ioMNsbiNcLt8f1s1EaIN26\",\n                   \"full_name\": \"PRINCE KUMAR\",\n                   \"contact_number\": \"8285724681\",\n                   \"address\": \"C 37 Najafgarh Nayabazar, Near BVM Public School\",\n                   \"created_at\": \"2019-09-12T07:17:34.858Z\",\n                   \"updated_at\": \"2020-03-23T10:17:43.395Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"eg5DRGNSThA:APA91bGvquxW5mM8lRZdyV8x0tGQw7QSGV3wvLsoJtdnHu59ayLcW8j6MJ-KLgxLhm0JZWAw6DKCK-GoFICyndx3mzYcAHMWpeokMBR94nV3x7uFTwJ9Tu2Qi59hINrKYPUxk3DTVWKx\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzlmMTBlZDIyZjFlNzhiNzY3MWQ3NCIsInR5cGUiOjQsImlhdCI6MTU4NDk1ODY2M30.I08IZ8YhgzDwSJ75NY4aCjFc_RVVTaZl-Z6mwsa-Hzw\",\n                   \"percentageCommission\": 10\n               }\n           },\n           {\n               \"_id\": \"5e187c8b6572b00c58f4e44c\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.8607,\n                           \"longitude\": 67.0011\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"20\",\n                       \"locality\": \"test locality\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.86138142170918,\n                           \"longitude\": 66.99995201454163\n                       },\n                       \"alias\": \"work\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"full_name\": \"Pratibha Chaudhray\",\n                       \"email\": \"pratibha.chaudhary@enukesoftware.com\",\n                       \"contact_number\": \"8796231458\",\n                       \"house_no\": \"32B, old dlf\",\n                       \"locality\": \"dfsd\",\n                       \"landmark\": \"dfds\",\n                       \"gps_address\": \"Pitchar Rd, Shiddi Village, Karachi, Karachi City, Sindh, Pakistan\",\n                       \"what_3_words\": \"\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 3,\n               \"is_express_delivery\": true,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 200,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"deliver_start_time\": \"2020-01-10T13:30:51.079Z\",\n               \"deliver_end_time\": \"2020-01-10T15:30:51.080Z\",\n               \"customer_id\": \"5e186d7c08f1d10c6f28809d\",\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"products\": [\n                   {\n                       \"pictures\": [\n                           \"0080010.jpg0080010.jpg\"\n                       ],\n                       \"_id\": \"5e187c8b6572b00c58f4e44f\",\n                       \"product_id\": \"5de8a00dd85c19035ebf116e\",\n                       \"size\": \"1 Pc\",\n                       \"price\": 275,\n                       \"count\": 1,\n                       \"name\": \"Ceramic Mug\"\n                   },\n                   {\n                       \"pictures\": [],\n                       \"_id\": \"5e187c8b6572b00c58f4e44e\",\n                       \"product_id\": \"5df36d264648a37afa44d0f6\",\n                       \"size\": \"20*20\",\n                       \"price\": 20,\n                       \"count\": 5,\n                       \"name\": \"Test 1\"\n                   },\n                   {\n                       \"pictures\": [\n                           \"0080011.jpg\"\n                       ],\n                       \"_id\": \"5e187c8b6572b00c58f4e44d\",\n                       \"product_id\": \"5de8a015d85c19035ebf116f\",\n                       \"size\": \"1 Pc\",\n                       \"price\": 100,\n                       \"count\": 1,\n                       \"name\": \"China Mug (Size - L)\"\n                   }\n               ],\n               \"total_amount\": 475,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 475,\n               \"commission_percentage\": 20,\n               \"admin_commission_amount\": 95,\n               \"store_payout_amount\": 380,\n               \"order_id\": \"8f88c9b\",\n               \"created_at\": \"2020-01-10T13:30:51.110Z\",\n               \"updated_at\": \"2020-01-10T13:46:30.337Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5d79f10ed22f1e78b7671d74\",\n               \"store\": {\n                   \"_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"picture\": \"img store.jpg\",\n                   \"has_express_delivery\": false,\n                   \"drivers\": [\n                       \"5d79f10ed22f1e78b7671d74\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"5:00\",\n                       \"close_time\": \"23:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"enuke@enuke.com\",\n                       \"password\": \"$2b$10$KgSpGfY2JtUZouE9LNRGlue3ngzQRnYzAc7sF5fw4XBKVmrH/YfnO\",\n                       \"full_name\": \"Enuke\",\n                       \"contact_number\": \"9999988888\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d778327d22f1e78b7671bd3\",\n                           \"coordinates\": {\n                               \"latitude\": 24.8607,\n                               \"longitude\": 67.0011\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e469966d21fe166d8c9356f\",\n                           \"shop_no\": \"20\",\n                           \"locality\": \"test locality\",\n                           \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                           \"unique_link\": \"Z1xaR9L\"\n                       }\n                   ],\n                   \"name\": \"Enuke Test store\",\n                   \"commission\": 20,\n                   \"created_at\": \"2019-09-10T11:04:07.991Z\",\n                   \"updated_at\": \"2020-03-12T11:46:00.799Z\",\n                   \"__v\": 0,\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsImlhdCI6MTU3ODkxMDg5NX0.PV2a49oVu-3BjT8SRb0isTYbP_AogywQDcYaEDtOk-w\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsInR5cGUiOjIsImlhdCI6MTU4NDAxMzU2MH0.6UOfFoSELTE40TAMfUz6uBoROUPwlvLb5gcJNkhmwzA\",\n                   \"delivery_charges\": [\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f026\",\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f025\",\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f024\",\n                           \"order_amount\": 1000,\n                           \"charges\": 30\n                       }\n                   ],\n                   \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\"\n               },\n               \"driver\": {\n                   \"_id\": \"5d79f10ed22f1e78b7671d74\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"prince.kumar@enukesoftware.com\",\n                   \"password\": \"$2b$10$68KJiWoNIlfe0m27HVQZA.CIqb4qIF.ioMNsbiNcLt8f1s1EaIN26\",\n                   \"full_name\": \"PRINCE KUMAR\",\n                   \"contact_number\": \"8285724681\",\n                   \"address\": \"C 37 Najafgarh Nayabazar, Near BVM Public School\",\n                   \"created_at\": \"2019-09-12T07:17:34.858Z\",\n                   \"updated_at\": \"2020-03-23T10:17:43.395Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"eg5DRGNSThA:APA91bGvquxW5mM8lRZdyV8x0tGQw7QSGV3wvLsoJtdnHu59ayLcW8j6MJ-KLgxLhm0JZWAw6DKCK-GoFICyndx3mzYcAHMWpeokMBR94nV3x7uFTwJ9Tu2Qi59hINrKYPUxk3DTVWKx\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzlmMTBlZDIyZjFlNzhiNzY3MWQ3NCIsInR5cGUiOjQsImlhdCI6MTU4NDk1ODY2M30.I08IZ8YhgzDwSJ75NY4aCjFc_RVVTaZl-Z6mwsa-Hzw\",\n                   \"percentageCommission\": 10\n               }\n           },\n           {\n               \"_id\": \"5e188323c011a50c3ad3cdbf\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.8607,\n                           \"longitude\": 67.0011\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"20\",\n                       \"locality\": \"test locality\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 28.465801633735133,\n                           \"longitude\": 77.03795285895467\n                       },\n                       \"full_name\": \"Raj\",\n                       \"email\": \"enuke.software38@gmail.com\",\n                       \"contact_number\": \"9456315575\",\n                       \"house_no\": \"315\",\n                       \"locality\": \"sector 14\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"alias\": \"home\",\n                       \"gps_address\": \"2A, 339/2, 2nd Floor, The Pavillion, behind Hotel Vits Mango, Anamika Enclave, Sector 14, Gurugram, Haryana 122001, India\",\n                       \"landmark\": \"\",\n                       \"what_3_words\": \"\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 4,\n               \"is_express_delivery\": false,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 200,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"slot_id\": \"5e0e3dec954bc84f45786ff0\",\n               \"deliver_start_time\": \"2020-01-10T14:00:00.000Z\",\n               \"deliver_end_time\": \"2020-01-10T16:00:00.000Z\",\n               \"customer_id\": \"5d7a2ab2d22f1e78b7671db2\",\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"products\": [\n                   {\n                       \"pictures\": [],\n                       \"_id\": \"5e188323c011a50c3ad3cdc1\",\n                       \"product_id\": \"5df36d264648a37afa44d0f6\",\n                       \"size\": \"20*20\",\n                       \"price\": 20,\n                       \"count\": 3,\n                       \"name\": \"Test 1\"\n                   },\n                   {\n                       \"pictures\": [\n                           \"0080011.jpg\"\n                       ],\n                       \"_id\": \"5e188323c011a50c3ad3cdc0\",\n                       \"product_id\": \"5de8a015d85c19035ebf116f\",\n                       \"size\": \"1 Pc\",\n                       \"price\": 100,\n                       \"count\": 2,\n                       \"name\": \"China Mug (Size - L)\"\n                   }\n               ],\n               \"total_amount\": 260,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 260,\n               \"commission_percentage\": 20,\n               \"admin_commission_amount\": 52,\n               \"store_payout_amount\": 208,\n               \"order_id\": \"6121604\",\n               \"created_at\": \"2020-01-10T13:58:59.866Z\",\n               \"updated_at\": \"2020-01-10T14:16:12.850Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5d79f10ed22f1e78b7671d74\",\n               \"undelivered_description\": \"Ghhj\",\n               \"store\": {\n                   \"_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"picture\": \"img store.jpg\",\n                   \"has_express_delivery\": false,\n                   \"drivers\": [\n                       \"5d79f10ed22f1e78b7671d74\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"5:00\",\n                       \"close_time\": \"23:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"enuke@enuke.com\",\n                       \"password\": \"$2b$10$KgSpGfY2JtUZouE9LNRGlue3ngzQRnYzAc7sF5fw4XBKVmrH/YfnO\",\n                       \"full_name\": \"Enuke\",\n                       \"contact_number\": \"9999988888\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d778327d22f1e78b7671bd3\",\n                           \"coordinates\": {\n                               \"latitude\": 24.8607,\n                               \"longitude\": 67.0011\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e469966d21fe166d8c9356f\",\n                           \"shop_no\": \"20\",\n                           \"locality\": \"test locality\",\n                           \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                           \"unique_link\": \"Z1xaR9L\"\n                       }\n                   ],\n                   \"name\": \"Enuke Test store\",\n                   \"commission\": 20,\n                   \"created_at\": \"2019-09-10T11:04:07.991Z\",\n                   \"updated_at\": \"2020-03-12T11:46:00.799Z\",\n                   \"__v\": 0,\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsImlhdCI6MTU3ODkxMDg5NX0.PV2a49oVu-3BjT8SRb0isTYbP_AogywQDcYaEDtOk-w\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsInR5cGUiOjIsImlhdCI6MTU4NDAxMzU2MH0.6UOfFoSELTE40TAMfUz6uBoROUPwlvLb5gcJNkhmwzA\",\n                   \"delivery_charges\": [\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f026\",\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f025\",\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f024\",\n                           \"order_amount\": 1000,\n                           \"charges\": 30\n                       }\n                   ],\n                   \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\"\n               },\n               \"driver\": {\n                   \"_id\": \"5d79f10ed22f1e78b7671d74\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"prince.kumar@enukesoftware.com\",\n                   \"password\": \"$2b$10$68KJiWoNIlfe0m27HVQZA.CIqb4qIF.ioMNsbiNcLt8f1s1EaIN26\",\n                   \"full_name\": \"PRINCE KUMAR\",\n                   \"contact_number\": \"8285724681\",\n                   \"address\": \"C 37 Najafgarh Nayabazar, Near BVM Public School\",\n                   \"created_at\": \"2019-09-12T07:17:34.858Z\",\n                   \"updated_at\": \"2020-03-23T10:17:43.395Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"eg5DRGNSThA:APA91bGvquxW5mM8lRZdyV8x0tGQw7QSGV3wvLsoJtdnHu59ayLcW8j6MJ-KLgxLhm0JZWAw6DKCK-GoFICyndx3mzYcAHMWpeokMBR94nV3x7uFTwJ9Tu2Qi59hINrKYPUxk3DTVWKx\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzlmMTBlZDIyZjFlNzhiNzY3MWQ3NCIsInR5cGUiOjQsImlhdCI6MTU4NDk1ODY2M30.I08IZ8YhgzDwSJ75NY4aCjFc_RVVTaZl-Z6mwsa-Hzw\",\n                   \"percentageCommission\": 10\n               }\n           },\n           {\n               \"_id\": \"5e188354c011a50c3ad3cdc2\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.8607,\n                           \"longitude\": 67.0011\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"20\",\n                       \"locality\": \"test locality\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 28.465801633735133,\n                           \"longitude\": 77.03795285895467\n                       },\n                       \"full_name\": \"Raj\",\n                       \"email\": \"enuke.software38@gmail.com\",\n                       \"contact_number\": \"9456315575\",\n                       \"house_no\": \"315\",\n                       \"locality\": \"sector 14\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"alias\": \"home\",\n                       \"gps_address\": \"2A, 339/2, 2nd Floor, The Pavillion, behind Hotel Vits Mango, Anamika Enclave, Sector 14, Gurugram, Haryana 122001, India\",\n                       \"landmark\": \"\",\n                       \"what_3_words\": \"\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 3,\n               \"is_express_delivery\": false,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 200,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"slot_id\": \"5e0e3dec954bc84f45786ff0\",\n               \"deliver_start_time\": \"2020-01-10T14:00:00.000Z\",\n               \"deliver_end_time\": \"2020-01-10T16:00:00.000Z\",\n               \"customer_id\": \"5d7a2ab2d22f1e78b7671db2\",\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"products\": [\n                   {\n                       \"pictures\": [],\n                       \"_id\": \"5e188354c011a50c3ad3cdc3\",\n                       \"product_id\": \"5df36d264648a37afa44d0f6\",\n                       \"size\": \"20*20\",\n                       \"price\": 20,\n                       \"count\": 2,\n                       \"name\": \"Test 1\"\n                   }\n               ],\n               \"total_amount\": 40,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 40,\n               \"commission_percentage\": 20,\n               \"admin_commission_amount\": 8,\n               \"store_payout_amount\": 32,\n               \"order_id\": \"5b222ea\",\n               \"created_at\": \"2020-01-10T13:59:48.704Z\",\n               \"updated_at\": \"2020-01-10T14:15:57.276Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5d79f10ed22f1e78b7671d74\",\n               \"store\": {\n                   \"_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"picture\": \"img store.jpg\",\n                   \"has_express_delivery\": false,\n                   \"drivers\": [\n                       \"5d79f10ed22f1e78b7671d74\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"5:00\",\n                       \"close_time\": \"23:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"enuke@enuke.com\",\n                       \"password\": \"$2b$10$KgSpGfY2JtUZouE9LNRGlue3ngzQRnYzAc7sF5fw4XBKVmrH/YfnO\",\n                       \"full_name\": \"Enuke\",\n                       \"contact_number\": \"9999988888\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d778327d22f1e78b7671bd3\",\n                           \"coordinates\": {\n                               \"latitude\": 24.8607,\n                               \"longitude\": 67.0011\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e469966d21fe166d8c9356f\",\n                           \"shop_no\": \"20\",\n                           \"locality\": \"test locality\",\n                           \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                           \"unique_link\": \"Z1xaR9L\"\n                       }\n                   ],\n                   \"name\": \"Enuke Test store\",\n                   \"commission\": 20,\n                   \"created_at\": \"2019-09-10T11:04:07.991Z\",\n                   \"updated_at\": \"2020-03-12T11:46:00.799Z\",\n                   \"__v\": 0,\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsImlhdCI6MTU3ODkxMDg5NX0.PV2a49oVu-3BjT8SRb0isTYbP_AogywQDcYaEDtOk-w\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsInR5cGUiOjIsImlhdCI6MTU4NDAxMzU2MH0.6UOfFoSELTE40TAMfUz6uBoROUPwlvLb5gcJNkhmwzA\",\n                   \"delivery_charges\": [\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f026\",\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f025\",\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f024\",\n                           \"order_amount\": 1000,\n                           \"charges\": 30\n                       }\n                   ],\n                   \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\"\n               },\n               \"driver\": {\n                   \"_id\": \"5d79f10ed22f1e78b7671d74\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"prince.kumar@enukesoftware.com\",\n                   \"password\": \"$2b$10$68KJiWoNIlfe0m27HVQZA.CIqb4qIF.ioMNsbiNcLt8f1s1EaIN26\",\n                   \"full_name\": \"PRINCE KUMAR\",\n                   \"contact_number\": \"8285724681\",\n                   \"address\": \"C 37 Najafgarh Nayabazar, Near BVM Public School\",\n                   \"created_at\": \"2019-09-12T07:17:34.858Z\",\n                   \"updated_at\": \"2020-03-23T10:17:43.395Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"eg5DRGNSThA:APA91bGvquxW5mM8lRZdyV8x0tGQw7QSGV3wvLsoJtdnHu59ayLcW8j6MJ-KLgxLhm0JZWAw6DKCK-GoFICyndx3mzYcAHMWpeokMBR94nV3x7uFTwJ9Tu2Qi59hINrKYPUxk3DTVWKx\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzlmMTBlZDIyZjFlNzhiNzY3MWQ3NCIsInR5cGUiOjQsImlhdCI6MTU4NDk1ODY2M30.I08IZ8YhgzDwSJ75NY4aCjFc_RVVTaZl-Z6mwsa-Hzw\",\n                   \"percentageCommission\": 10\n               }\n           },\n           {\n               \"_id\": \"5e1887f9c011a50c3ad3cdc4\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.8607,\n                           \"longitude\": 67.0011\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"20\",\n                       \"locality\": \"test locality\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 28.465801633735133,\n                           \"longitude\": 77.03795285895467\n                       },\n                       \"full_name\": \"Raj\",\n                       \"email\": \"enuke.software38@gmail.com\",\n                       \"contact_number\": \"9456315575\",\n                       \"house_no\": \"315\",\n                       \"locality\": \"sector 14\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"alias\": \"home\",\n                       \"gps_address\": \"2A, 339/2, 2nd Floor, The Pavillion, behind Hotel Vits Mango, Anamika Enclave, Sector 14, Gurugram, Haryana 122001, India\",\n                       \"landmark\": \"\",\n                       \"what_3_words\": \"\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 1,\n               \"is_express_delivery\": false,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 200,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"slot_id\": \"5e0f8f6c954bc84f4578700d\",\n               \"deliver_start_time\": \"2020-01-11T06:00:00.000Z\",\n               \"deliver_end_time\": \"2020-01-11T08:00:00.000Z\",\n               \"customer_id\": \"5d7a2ab2d22f1e78b7671db2\",\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"products\": [\n                   {\n                       \"pictures\": [],\n                       \"_id\": \"5e1887f9c011a50c3ad3cdc5\",\n                       \"product_id\": \"5df36d264648a37afa44d0f6\",\n                       \"size\": \"20*20\",\n                       \"price\": 20,\n                       \"count\": 4,\n                       \"name\": \"Test 1\"\n                   }\n               ],\n               \"total_amount\": 80,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 80,\n               \"commission_percentage\": 20,\n               \"admin_commission_amount\": 16,\n               \"store_payout_amount\": 64,\n               \"order_id\": \"d4f1a3c\",\n               \"created_at\": \"2020-01-10T14:19:37.539Z\",\n               \"updated_at\": \"2020-01-10T14:19:49.190Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5d79f10ed22f1e78b7671d74\",\n               \"store\": {\n                   \"_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"picture\": \"img store.jpg\",\n                   \"has_express_delivery\": false,\n                   \"drivers\": [\n                       \"5d79f10ed22f1e78b7671d74\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"5:00\",\n                       \"close_time\": \"23:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"enuke@enuke.com\",\n                       \"password\": \"$2b$10$KgSpGfY2JtUZouE9LNRGlue3ngzQRnYzAc7sF5fw4XBKVmrH/YfnO\",\n                       \"full_name\": \"Enuke\",\n                       \"contact_number\": \"9999988888\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d778327d22f1e78b7671bd3\",\n                           \"coordinates\": {\n                               \"latitude\": 24.8607,\n                               \"longitude\": 67.0011\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e469966d21fe166d8c9356f\",\n                           \"shop_no\": \"20\",\n                           \"locality\": \"test locality\",\n                           \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                           \"unique_link\": \"Z1xaR9L\"\n                       }\n                   ],\n                   \"name\": \"Enuke Test store\",\n                   \"commission\": 20,\n                   \"created_at\": \"2019-09-10T11:04:07.991Z\",\n                   \"updated_at\": \"2020-03-12T11:46:00.799Z\",\n                   \"__v\": 0,\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsImlhdCI6MTU3ODkxMDg5NX0.PV2a49oVu-3BjT8SRb0isTYbP_AogywQDcYaEDtOk-w\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsInR5cGUiOjIsImlhdCI6MTU4NDAxMzU2MH0.6UOfFoSELTE40TAMfUz6uBoROUPwlvLb5gcJNkhmwzA\",\n                   \"delivery_charges\": [\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f026\",\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f025\",\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f024\",\n                           \"order_amount\": 1000,\n                           \"charges\": 30\n                       }\n                   ],\n                   \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\"\n               },\n               \"driver\": {\n                   \"_id\": \"5d79f10ed22f1e78b7671d74\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"prince.kumar@enukesoftware.com\",\n                   \"password\": \"$2b$10$68KJiWoNIlfe0m27HVQZA.CIqb4qIF.ioMNsbiNcLt8f1s1EaIN26\",\n                   \"full_name\": \"PRINCE KUMAR\",\n                   \"contact_number\": \"8285724681\",\n                   \"address\": \"C 37 Najafgarh Nayabazar, Near BVM Public School\",\n                   \"created_at\": \"2019-09-12T07:17:34.858Z\",\n                   \"updated_at\": \"2020-03-23T10:17:43.395Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"eg5DRGNSThA:APA91bGvquxW5mM8lRZdyV8x0tGQw7QSGV3wvLsoJtdnHu59ayLcW8j6MJ-KLgxLhm0JZWAw6DKCK-GoFICyndx3mzYcAHMWpeokMBR94nV3x7uFTwJ9Tu2Qi59hINrKYPUxk3DTVWKx\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzlmMTBlZDIyZjFlNzhiNzY3MWQ3NCIsInR5cGUiOjQsImlhdCI6MTU4NDk1ODY2M30.I08IZ8YhgzDwSJ75NY4aCjFc_RVVTaZl-Z6mwsa-Hzw\",\n                   \"percentageCommission\": 10\n               }\n           },\n           {\n               \"_id\": \"5e1c0ddfc011a50c3ad3cdf6\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.8607,\n                           \"longitude\": 67.0011\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"20\",\n                       \"locality\": \"test locality\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 28.465801633735133,\n                           \"longitude\": 77.03795285895467\n                       },\n                       \"full_name\": \"Raj\",\n                       \"email\": \"enuke.software38@gmail.com\",\n                       \"contact_number\": \"9456315575\",\n                       \"house_no\": \"315\",\n                       \"locality\": \"sector 14\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"alias\": \"home\",\n                       \"gps_address\": \"2A, 339/2, 2nd Floor, The Pavillion, behind Hotel Vits Mango, Anamika Enclave, Sector 14, Gurugram, Haryana 122001, India\",\n                       \"landmark\": \"\",\n                       \"what_3_words\": \"\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 4,\n               \"is_express_delivery\": false,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 200,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"slot_id\": \"5e12326c954bc84f45787043\",\n               \"deliver_start_time\": \"2020-01-13T08:00:00.000Z\",\n               \"deliver_end_time\": \"2020-01-13T10:00:00.000Z\",\n               \"customer_id\": \"5d7a2ab2d22f1e78b7671db2\",\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"products\": [\n                   {\n                       \"pictures\": [],\n                       \"_id\": \"5e1c0ddfc011a50c3ad3cdf9\",\n                       \"product_id\": \"5df36d264648a37afa44d0f6\",\n                       \"size\": \"20*20\",\n                       \"price\": 20,\n                       \"count\": 1,\n                       \"name\": \"Test 1\"\n                   },\n                   {\n                       \"pictures\": [\n                           \"0080010.jpg0080010.jpg\"\n                       ],\n                       \"_id\": \"5e1c0ddfc011a50c3ad3cdf8\",\n                       \"product_id\": \"5de8a00dd85c19035ebf116e\",\n                       \"size\": \"1 Pc\",\n                       \"price\": 275,\n                       \"count\": 1,\n                       \"name\": \"Ceramic Mug\"\n                   },\n                   {\n                       \"pictures\": [\n                           \"0080011.jpg\"\n                       ],\n                       \"_id\": \"5e1c0ddfc011a50c3ad3cdf7\",\n                       \"product_id\": \"5de8a015d85c19035ebf116f\",\n                       \"size\": \"1 Pc\",\n                       \"price\": 100,\n                       \"count\": 1,\n                       \"name\": \"China Mug (Size - L)\"\n                   }\n               ],\n               \"total_amount\": 395,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 395,\n               \"commission_percentage\": 20,\n               \"admin_commission_amount\": 79,\n               \"store_payout_amount\": 316,\n               \"order_id\": \"13188b0\",\n               \"created_at\": \"2020-01-13T06:27:43.276Z\",\n               \"updated_at\": \"2020-01-13T09:33:26.239Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5d79f10ed22f1e78b7671d74\",\n               \"undelivered_description\": \"Location is not Correct\",\n               \"store\": {\n                   \"_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"picture\": \"img store.jpg\",\n                   \"has_express_delivery\": false,\n                   \"drivers\": [\n                       \"5d79f10ed22f1e78b7671d74\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"5:00\",\n                       \"close_time\": \"23:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"enuke@enuke.com\",\n                       \"password\": \"$2b$10$KgSpGfY2JtUZouE9LNRGlue3ngzQRnYzAc7sF5fw4XBKVmrH/YfnO\",\n                       \"full_name\": \"Enuke\",\n                       \"contact_number\": \"9999988888\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d778327d22f1e78b7671bd3\",\n                           \"coordinates\": {\n                               \"latitude\": 24.8607,\n                               \"longitude\": 67.0011\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e469966d21fe166d8c9356f\",\n                           \"shop_no\": \"20\",\n                           \"locality\": \"test locality\",\n                           \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                           \"unique_link\": \"Z1xaR9L\"\n                       }\n                   ],\n                   \"name\": \"Enuke Test store\",\n                   \"commission\": 20,\n                   \"created_at\": \"2019-09-10T11:04:07.991Z\",\n                   \"updated_at\": \"2020-03-12T11:46:00.799Z\",\n                   \"__v\": 0,\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsImlhdCI6MTU3ODkxMDg5NX0.PV2a49oVu-3BjT8SRb0isTYbP_AogywQDcYaEDtOk-w\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsInR5cGUiOjIsImlhdCI6MTU4NDAxMzU2MH0.6UOfFoSELTE40TAMfUz6uBoROUPwlvLb5gcJNkhmwzA\",\n                   \"delivery_charges\": [\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f026\",\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f025\",\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f024\",\n                           \"order_amount\": 1000,\n                           \"charges\": 30\n                       }\n                   ],\n                   \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\"\n               },\n               \"driver\": {\n                   \"_id\": \"5d79f10ed22f1e78b7671d74\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"prince.kumar@enukesoftware.com\",\n                   \"password\": \"$2b$10$68KJiWoNIlfe0m27HVQZA.CIqb4qIF.ioMNsbiNcLt8f1s1EaIN26\",\n                   \"full_name\": \"PRINCE KUMAR\",\n                   \"contact_number\": \"8285724681\",\n                   \"address\": \"C 37 Najafgarh Nayabazar, Near BVM Public School\",\n                   \"created_at\": \"2019-09-12T07:17:34.858Z\",\n                   \"updated_at\": \"2020-03-23T10:17:43.395Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"eg5DRGNSThA:APA91bGvquxW5mM8lRZdyV8x0tGQw7QSGV3wvLsoJtdnHu59ayLcW8j6MJ-KLgxLhm0JZWAw6DKCK-GoFICyndx3mzYcAHMWpeokMBR94nV3x7uFTwJ9Tu2Qi59hINrKYPUxk3DTVWKx\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzlmMTBlZDIyZjFlNzhiNzY3MWQ3NCIsInR5cGUiOjQsImlhdCI6MTU4NDk1ODY2M30.I08IZ8YhgzDwSJ75NY4aCjFc_RVVTaZl-Z6mwsa-Hzw\",\n                   \"percentageCommission\": 10\n               }\n           },\n           {\n               \"_id\": \"5e1c39d8401e1a0c41f65dfa\",\n               \"address\": {\n                   \"pickup\": {\n                       \"coordinates\": {\n                           \"latitude\": 24.8607,\n                           \"longitude\": 67.0011\n                       },\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"area_id\": \"5d7605099b5f0f76ee4f68ae\",\n                       \"shop_no\": \"20\",\n                       \"locality\": \"test locality\"\n                   },\n                   \"delivery\": {\n                       \"coordinates\": {\n                           \"latitude\": 28.465801633735133,\n                           \"longitude\": 77.03795285895467\n                       },\n                       \"full_name\": \"Raj\",\n                       \"email\": \"enuke.software38@gmail.com\",\n                       \"contact_number\": \"9456315575\",\n                       \"house_no\": \"315\",\n                       \"locality\": \"sector 14\",\n                       \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                       \"alias\": \"home\",\n                       \"gps_address\": \"2A, 339/2, 2nd Floor, The Pavillion, behind Hotel Vits Mango, Anamika Enclave, Sector 14, Gurugram, Haryana 122001, India\",\n                       \"landmark\": \"\",\n                       \"what_3_words\": \"\",\n                       \"city\": {\n                           \"_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"areas\": [\n                               \"5d7605099b5f0f76ee4f68ae\",\n                               \"5d7605219b5f0f76ee4f68af\",\n                               \"5dea5254d85c19035ebf1217\",\n                               \"5dea52b5d85c19035ebf1218\",\n                               \"5dea52bfd85c19035ebf1219\",\n                               \"5dea52d0d85c19035ebf121a\",\n                               \"5dea52e0d85c19035ebf121b\",\n                               \"5dea52eed85c19035ebf121c\",\n                               \"5df635134648a37afa44d108\",\n                               \"5e05acca954bc84f45786dd2\",\n                               \"5e05acf1954bc84f45786dd3\",\n                               \"5e05acfb954bc84f45786dd4\",\n                               \"5e05ad5e954bc84f45786dd5\",\n                               \"5e262d10d21fe166d8c93049\",\n                               \"5e262d43d21fe166d8c9304a\",\n                               \"5e2ac47dd21fe166d8c930b3\",\n                               \"5e469966d21fe166d8c9356f\"\n                           ],\n                           \"status\": 1,\n                           \"name\": \"Karachi\",\n                           \"created_at\": \"2019-09-09T07:47:28.591Z\",\n                           \"updated_at\": \"2020-02-14T12:58:14.336Z\",\n                           \"__v\": 0\n                       }\n                   }\n               },\n               \"status\": 3,\n               \"is_express_delivery\": false,\n               \"payment_type\": 1,\n               \"discount\": 0,\n               \"delivery_charges\": 200,\n               \"driver_assigned\": true,\n               \"is_delivered_by_store\": false,\n               \"store_paid\": false,\n               \"slot_id\": \"5e12326c954bc84f45787044\",\n               \"deliver_start_time\": \"2020-01-13T10:00:00.000Z\",\n               \"deliver_end_time\": \"2020-01-13T12:00:00.000Z\",\n               \"customer_id\": \"5d7a2ab2d22f1e78b7671db2\",\n               \"store_id\": \"5d778327d22f1e78b7671bd2\",\n               \"products\": [\n                   {\n                       \"pictures\": [],\n                       \"_id\": \"5e1c39d8401e1a0c41f65dfb\",\n                       \"product_id\": \"5df36d264648a37afa44d0f6\",\n                       \"size\": \"20*20\",\n                       \"price\": 20,\n                       \"count\": 2,\n                       \"name\": \"Test 1\"\n                   }\n               ],\n               \"total_amount\": 40,\n               \"taxes\": [],\n               \"total_amount_after_tax\": 40,\n               \"commission_percentage\": 20,\n               \"admin_commission_amount\": 8,\n               \"store_payout_amount\": 32,\n               \"order_id\": \"88c3730\",\n               \"created_at\": \"2020-01-13T09:35:20.404Z\",\n               \"updated_at\": \"2020-01-13T13:47:07.553Z\",\n               \"__v\": 0,\n               \"driver_id\": \"5d79f10ed22f1e78b7671d74\",\n               \"store\": {\n                   \"_id\": \"5d778327d22f1e78b7671bd2\",\n                   \"picture\": \"img store.jpg\",\n                   \"has_express_delivery\": false,\n                   \"drivers\": [\n                       \"5d79f10ed22f1e78b7671d74\"\n                   ],\n                   \"status\": 1,\n                   \"timings\": {\n                       \"open_time\": \"5:00\",\n                       \"close_time\": \"23:00\"\n                   },\n                   \"owner\": {\n                       \"email\": \"enuke@enuke.com\",\n                       \"password\": \"$2b$10$KgSpGfY2JtUZouE9LNRGlue3ngzQRnYzAc7sF5fw4XBKVmrH/YfnO\",\n                       \"full_name\": \"Enuke\",\n                       \"contact_number\": \"9999988888\"\n                   },\n                   \"self_delivery\": false,\n                   \"address\": [\n                       {\n                           \"_id\": \"5d778327d22f1e78b7671bd3\",\n                           \"coordinates\": {\n                               \"latitude\": 24.8607,\n                               \"longitude\": 67.0011\n                           },\n                           \"city_id\": \"5d7603909b5f0f76ee4f68ad\",\n                           \"area_id\": \"5e469966d21fe166d8c9356f\",\n                           \"shop_no\": \"20\",\n                           \"locality\": \"test locality\",\n                           \"gps_address\": \"2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan\",\n                           \"unique_link\": \"Z1xaR9L\"\n                       }\n                   ],\n                   \"name\": \"Enuke Test store\",\n                   \"commission\": 20,\n                   \"created_at\": \"2019-09-10T11:04:07.991Z\",\n                   \"updated_at\": \"2020-03-12T11:46:00.799Z\",\n                   \"__v\": 0,\n                   \"sku_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsImlhdCI6MTU3ODkxMDg5NX0.PV2a49oVu-3BjT8SRb0isTYbP_AogywQDcYaEDtOk-w\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzc4MzI3ZDIyZjFlNzhiNzY3MWJkMiIsInR5cGUiOjIsImlhdCI6MTU4NDAxMzU2MH0.6UOfFoSELTE40TAMfUz6uBoROUPwlvLb5gcJNkhmwzA\",\n                   \"delivery_charges\": [\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f026\",\n                           \"order_amount\": 500,\n                           \"charges\": 100\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f025\",\n                           \"order_amount\": 800,\n                           \"charges\": 50\n                       },\n                       {\n                           \"_id\": \"5e5dc219f2b4181e2319f024\",\n                           \"order_amount\": 1000,\n                           \"charges\": 30\n                       }\n                   ],\n                   \"storeCategory\": \"5e4fb5d3beee3369a6b32a0b\"\n               },\n               \"driver\": {\n                   \"_id\": \"5d79f10ed22f1e78b7671d74\",\n                   \"picture\": null,\n                   \"is_online\": true,\n                   \"is_logout\": false,\n                   \"status\": 1,\n                   \"email\": \"prince.kumar@enukesoftware.com\",\n                   \"password\": \"$2b$10$68KJiWoNIlfe0m27HVQZA.CIqb4qIF.ioMNsbiNcLt8f1s1EaIN26\",\n                   \"full_name\": \"PRINCE KUMAR\",\n                   \"contact_number\": \"8285724681\",\n                   \"address\": \"C 37 Najafgarh Nayabazar, Near BVM Public School\",\n                   \"created_at\": \"2019-09-12T07:17:34.858Z\",\n                   \"updated_at\": \"2020-03-23T10:17:43.395Z\",\n                   \"__v\": 0,\n                   \"fcm_token\": \"eg5DRGNSThA:APA91bGvquxW5mM8lRZdyV8x0tGQw7QSGV3wvLsoJtdnHu59ayLcW8j6MJ-KLgxLhm0JZWAw6DKCK-GoFICyndx3mzYcAHMWpeokMBR94nV3x7uFTwJ9Tu2Qi59hINrKYPUxk3DTVWKx\",\n                   \"auth_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzlmMTBlZDIyZjFlNzhiNzY3MWQ3NCIsInR5cGUiOjQsImlhdCI6MTU4NDk1ODY2M30.I08IZ8YhgzDwSJ75NY4aCjFc_RVVTaZl-Z6mwsa-Hzw\",\n                   \"percentageCommission\": 10\n               }\n           }\n       ],\n       \"paginationVariables\": {\n           \"pageNo\": 1,\n           \"perPage\": 10,\n           \"totalItems\": 21\n       }\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n  \"success\": false,\n  \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/store/order.js",
    "groupTitle": "Store-Orders"
  },
  {
    "type": "Get",
    "url": "/api/store/order/today-count",
    "title": "Get Total Orders Count",
    "name": "Get_Total_Orders_Count",
    "group": "Store-Orders",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"ordersCount\": 0\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorised",
            "description": "<p>Error 401</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"success\": false,\n   \"error\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/store/order.js",
    "groupTitle": "Store-Orders"
  },
  {
    "type": "Get",
    "url": "api/store/report/payment",
    "title": "Get Store Payment Report",
    "name": "Get_Store_Payment_Report",
    "group": "Store-Payments",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "Date",
            "optional": false,
            "field": "from_date",
            "description": "<p>: The Date you want the reports from</p>"
          },
          {
            "group": "Query String",
            "type": "Date",
            "optional": false,
            "field": "to_date",
            "description": "<p>: The Date you want the reports till</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "Http/1.1 200 OK\n\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"payments\": [\n           {\n               \"_id\": \"5d778327d22f1e78b7671bd2\",\n               \"name\": \"Enuke Test store\",\n               \"totalOrders\": 0,\n               \"totalAmount\": 0,\n               \"totalCommission\": 0,\n               \"taxAmount\": 0,\n               \"deliveryCharges\": 0\n           }\n       ],\n       \"paginationVariables\": {\n           \"pageNo\": 1,\n           \"perPage\": 10\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>401 { &quot;success&quot;: false, &quot;error&quot;: 401 }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/store/report.js",
    "groupTitle": "Store-Payments"
  },
  {
    "type": "Get",
    "url": "/api/store/report/store",
    "title": "Get Store Report",
    "name": "Get_Store_Report",
    "group": "Store-Reports",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "pageNo",
            "description": "<p>Current Page Number</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "perPage",
            "description": "<p>Items to be displayed in per page.</p>"
          },
          {
            "group": "Query String",
            "type": "Date",
            "optional": false,
            "field": "from_date",
            "description": "<p>: The Date you want the reports from</p>"
          },
          {
            "group": "Query String",
            "type": "Date",
            "optional": false,
            "field": "to_date",
            "description": "<p>: The Date you want the reports till</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "Http/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"stores\": [],\n       \"paginationVariables\": {\n           \"pageNo\": 1,\n           \"perPage\": 10\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>401 { &quot;success&quot;: false, &quot;error&quot;: 401 }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Aapkidokan/Backend_APIS/routes/apis/store/report.js",
    "groupTitle": "Store-Reports"
  }
] });
