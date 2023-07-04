import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
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

const animalModel = mongoose.model("Animals", animalSchema);

const CountrySchema = new mongoose.Schema({
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

const countryModel = mongoose.model("Countries", CountrySchema);

const issLocationSchema = new mongoose.Schema({
  longitude: String,
  latitude: String,
  timestamp: Number,
  date: String,
  hour: String,
});

const issLocationModel = mongoose.model("issLocation", issLocationSchema);

export { animalModel, countryModel, issLocationModel };
