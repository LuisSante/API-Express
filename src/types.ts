// export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export enum Visibility {
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
}

export enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloidy = "cloudy",
  windy = "windy",
  Stormy = "stormy",
}

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type NonSensitveInfoDiaryEntry = Pick<
  DiaryEntry,
  "id" | "date" | "weather" | "visibility"
>;

export type NewDiaryEntry = Omit<DiaryEntry, "id">;
