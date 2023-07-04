"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.issLocationModel = exports.countryModel = exports.animalModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const animalSchema = new mongoose_1.default.Schema({
    basisOfRecord: String,
    scientificName: String,
    kingdom: String,
    phylum: String,
    order: String,
    family: String,
    genus: String,
    species: String,
    genericName: String,
    specificEpithet: String,
    decimalLongitude: Number,
    decimalLatitude: Number,
    continent: String,
    year: Number,
    month: Number,
    day: Number,
    eventDate: String,
    animalImageInfo: Object,
    locationCountryName: Object,
    preciseLocationWithinCountry: Object,
    animalClass: String,
    country: String,
    taxonId: String,
});
const animalModel = mongoose_1.default.model("Animals", animalSchema);
exports.animalModel = animalModel;
const CountrySchema = new mongoose_1.default.Schema({
    name: String,
    official: String,
    nativeNameOfficial: String,
    cca2: String,
    currencieName: String,
    currencieSymbol: String,
    capital: String,
    region: String,
    subregion: String,
    language: String,
    latlng: [Number],
    islandlocked: Boolean,
    borders: [String],
    area: Number,
    flag: String,
    population: Number,
    gini: Number,
    carside: String,
    startOfWeek: String,
    capitalLocation: [Number],
    capitalMainDescription: String,
    capitalTemperature: Number,
    capitalHumidity: Number,
    capitalPressure: Number,
    capitalWindSpeed: Number,
    capitalWindDirection: Number,
    capitalCouldPercentage: Number,
});
const countryModel = mongoose_1.default.model("Countries", CountrySchema);
exports.countryModel = countryModel;
const issLocationSchema = new mongoose_1.default.Schema({
    longitude: String,
    latitude: String,
    timestamp: Number,
    date: String,
    hour: String,
});
const issLocationModel = mongoose_1.default.model("issLocation", issLocationSchema);
exports.issLocationModel = issLocationModel;
