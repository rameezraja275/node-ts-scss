"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_json_1 = __importDefault(require("./data.json"));
console.log(data_json_1.default);
var students = [{
        name: "rameez",
        age: 27,
    }, {
        name: "ahmad",
        age: 30
    }];
for (var i = 0; i < students.length; i++) {
    console.log("heelow");
}
