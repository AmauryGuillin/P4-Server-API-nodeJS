"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("./models");
const router = express_1.default.Router();
router.get("/animal/PantheraLeo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield models_1.animalModel.find({ species: "Panthera leo" });
        res.json(data);
    }
    catch (error) {
        console.error("Erreur lors de la récupération des données", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
}));
router.get("/country/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield models_1.countryModel.find();
        res.json(data);
    }
    catch (error) {
        console.error("Erreur lors de la récupération des données", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
}));
router.get("/iss/location", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield models_1.issLocationModel.find().sort({ _id: -1 }).limit(1); //only fetch the last object in the mongodb collection
        res.json(data);
    }
    catch (error) {
        console.error("Erreur lors de la récupération des données", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
}));
exports.default = router;
