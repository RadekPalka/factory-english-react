import type { Flashcard } from "../types/Flashcard";

export const MATERIALS : Flashcard[]= [
  { polishWord: "paleta", englishWords: ["pallet"] },
  { polishWord: "duży karton", englishWords: ["big box", "large carton"] },
  { polishWord: "mały karton", englishWords: ["small box", "small carton"] },
  { polishWord: "karton zbiorczy", englishWords: ["master carton"] },
  { polishWord: "taśma klejąca", englishWords: ["adhesive tape", "sticky tape"] },
  { polishWord: "taśma pakowa", englishWords: ["packing tape"] },
  { polishWord: "folia stretch", englishWords: ["stretch film", "stretch wrap"] },
  { polishWord: "worek", englishWords: ["bag"] },
  { polishWord: "worek big-bag", englishWords: ["big bag", "bulk bag"] },
  { polishWord: "oktabina", englishWords: ["octabin", "octabin box"] },
] ;

export const PRODUCTION_AND_GRINDER : Flashcard[]= [
  { polishWord: "tworzywo", englishWords: ["material", "plastic material"] },
  { polishWord: "granulat", englishWords: ["granulate", "pellets"] },
  { polishWord: "regranulat", englishWords: ["recycled material", "regranulate"] },
  { polishWord: "przemiał", englishWords: ["regrind", "regrind material"] },
  { polishWord: "pierwotne tworzywo", englishWords: ["virgin material"] },
  { polishWord: "wtryskarka", englishWords: ["injection molding machine", "injection machine"] },
  { polishWord: "lej zasypowy", englishWords: ["hopper"] },
  { polishWord: "młynek", englishWords: ["grinder"] },
  { polishWord: "waga (urządzenie)", englishWords: ["scale"] },
  { polishWord: "waga / masa (materiału)", englishWords: ["weight"] },
]

export const WAREHOUSE: Flashcard[] = [
  { polishWord: "wózkowy / operator wózka widłowego", englishWords: ["forklift operator"] },
  { polishWord: "wózek widłowy", englishWords: ["forklift"] },
  { polishWord: "ręczny paleciak", englishWords: ["pallet jack"] },
  { polishWord: "magazynier", englishWords: ["warehouse worker"] },
  { polishWord: "pracownik produkcji", englishWords: ["production worker"] },
  { polishWord: "kierownik", englishWords: ["manager", "supervisor"] },
  { polishWord: "kierownik zmiany", englishWords: ["shift supervisor"] },
  { polishWord: "brygadzista", englishWords: ["foreman", "team leader"] },
  { polishWord: "magazyn", englishWords: ["warehouse"] },
  { polishWord: "regał / stojak", englishWords: ["shelf", "rack"] },
  { polishWord: "miejsce paletowe", englishWords: ["pallet space"] },
  { polishWord: "strefa przyjęć", englishWords: ["receiving area"] },
  { polishWord: "strefa wysyłek", englishWords: ["shipping area"] },
  { polishWord: "załadunek", englishWords: ["loading"] },
  { polishWord: "rozładunek", englishWords: ["unloading"] },
  { polishWord: "rampa załadunkowa", englishWords: ["loading ramp"] },
  { polishWord: "nośnik (numer w systemie)", englishWords: ["container id"] },
]

export const WASTE : Flashcard[]= [
  { polishWord: "odpady ogólnie", englishWords: ["waste"] },
  { polishWord: "odpad produkcyjny / braki", englishWords: ["scrap", "production scrap"] },
  { polishWord: "odrzut (sztuki odrzucone)", englishWords: ["rejected parts", "rejects"] },
  { polishWord: "zanieczyszczenie", englishWords: ["contamination"] },
  { polishWord: "pył / drobinki z przemiału", englishWords: ["dust", "fines"] },
  { polishWord: "przemiał", englishWords: ["regrind"] },
  { polishWord: "mieszanka z przemiałem", englishWords: ["blend with regrind"] },
]

export const ANIMALS : Flashcard[]= [
  {polishWord: "pies", englishWords: ["dog"]},
  {polishWord: "kot", englishWords: ["cat"]},
  {polishWord: "lew", englishWords: ["lion"]}
]

export type Category = {
  label: string;
  cards: readonly Flashcard[];
};


export const CATEGORIES = [
  { label: "Materiały", cards: MATERIALS },
  { label: "Produkcja / młynek", cards: PRODUCTION_AND_GRINDER },
  { label: "Magazyn", cards: WAREHOUSE },
  { label: "Odpady", cards: WASTE },
  { label: "test", cards: ANIMALS}
 ]

