import type { Category } from "../categories/categories"
import type { Flashcard } from "./Flashcard"

export type QuizType = {
  category : Category,
  flashcards : Flashcard[],
  setFlashcards : React.Dispatch<React.SetStateAction<Flashcard[]>>
  setStateToSetup: () => void
} 