import express, { Request, Response } from "express";
import { animalModel, countryModel, issLocationModel } from "./models";

const router = express.Router();

router.get("/animal/PantheraLeo", async (req: Request, res: Response) => {
  try {
    const data = await animalModel.find({ species: "Panthera leo" });
    res.json(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.get("/country/all", async (req: Request, res: Response) => {
  try {
    const data = await countryModel.find();
    res.json(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.get("/iss/location", async (req: Request, res: Response) => {
  try {
    const data = await issLocationModel.find().sort({ _id: -1 }).limit(1); //only fetch the last object in the mongodb collection
    res.json(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

export default router;
