import { useState } from "react";
import "./App.css";
import type { Flashcard } from "./types/Flashcard";
import { CategorySetup } from "./components/CategorySetup";
import type { Category } from "./categories/categories";
import { Quiz } from "./components/Quiz";

function App() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [quizState, setQuizState] = useState<"setup" | "playing" | "end">("setup");
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

  const handleButton = (category: Category) => {
    setFlashcards([...category.cards]);
    setQuizState("playing");
    setCurrentCategory(category);
  };

  const setStateToSetup = () => {
    setQuizState("setup");
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Quiz</h1>
        <a
          className="app__link"
          href="https://radekpalka.github.io/factory-dictionary/"
          target="_blank"
          rel="noreferrer"
        >
          Strona ze słówkami
        </a>
      </header>

      <main className="card">
        {quizState === "setup" && <CategorySetup handleButton={handleButton} />}

        {quizState === "playing" && currentCategory && (
          <Quiz
            category={currentCategory}
            flashcards={flashcards}
            setFlashcards={setFlashcards}
            setStateToSetup={setStateToSetup}
          />
        )}
      </main>

      <footer className="app__footer">
        <small>Local-first • React + TS</small>
      </footer>
    </div>
  );
}

export default App;
