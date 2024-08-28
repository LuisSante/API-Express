import express from "express";
import * as diaryService from "../services/diaryServices";
import { toNowDiaryEntry } from "../lib/utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
  const diary = diaryService.findById(Number(req.params.id));

  return diary !== null ? res.send(diary) : res.send;
});

router.get("/next/:id", (req, res) => {
  const diary = diaryService.findByIdToNonSensitive(Number(req.params.id));

  return diary !== null ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  try {
    const newDiaryEntry = toNowDiaryEntry(req.body);
    const addedDiaryEntry = diaryService.addDiary(newDiaryEntry);
    res.json(addedDiaryEntry);
  } catch (_e) {
    res.status(400);
  }
});

export default router;
