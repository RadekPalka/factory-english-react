import { useState } from "react";
import type { QuizType } from "../types/QuizType";
import type { QuizPhase } from "../types/QuizPhase";
import type { Flashcard } from "../types/Flashcard";

export const Quiz: React.FC<QuizType> = ({
  category,
  flashcards,
  setFlashcards,
  setStateToSetup,
}) => {
  const [phase, setPhase] = useState<QuizPhase>("typing");
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [flashcardsToLearn, setFlashcardsToLearn] = useState<Set<Flashcard>>(
    () => new Set()
  );

  const getButtonText = () => {
    if (phase === "typing") return "Sprawdź";
    if (phase === "feedback") return "Następny wyraz";
  };

  const checkAnswer = () => {
    if (flashcards[index].englishWords.includes(userInput.trim().toLowerCase())) {
      setMessage("Dobra odpowiedź");
      setResult("correct");
    } else {
      setMessage(
        `Błąd. Prawidłowa odpowiedź to: ${flashcards[index].englishWords.join(", lub ")}`
      );
      setFlashcardsToLearn((prev) => {
        const next = new Set(prev);
        next.add(flashcards[index]);
        return next;
      });
      setResult("wrong");
    }
  };

  const next = () => {
    if (result === "correct") {
      const newArr = flashcards.filter((_, i) => i !== index);
      setFlashcards(newArr);

      if (newArr.length === 0) {
        setPhase("end");
      } else if (index >= newArr.length) {
        setIndex(0);
      }
      return;
    } else if (result === "wrong") {
      setIndex((prev) => {
        if (prev < flashcards.length - 1) return prev + 1;
        return 0;
      });
    }
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (phase === "typing") {
      setPhase("feedback");
      checkAnswer();
    } else if (phase === "feedback") {
      setPhase("typing");
      setUserInput("");
      setMessage("");
      next();
    }
  };

  if (phase !== "end") {
    return (
      <section className="quiz">
        <div className="quiz__head">
          <h2 className="card__title">{category.label}</h2>
          <p className="muted">Pozostało: <strong>{flashcards.length}</strong></p>
        </div>

        <div className="prompt">
          <p className="prompt__label">Przetłumacz wyraz:</p>
          <p className="prompt__word">{flashcards[index].polishWord}</p>
        </div>

        <form className="quiz__form" onSubmit={handleForm}>
          <input
            className="input"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Wpisz tłumaczenie…"
            autoFocus
          />

          <button className="btn btn--primary" type="submit">
            {getButtonText()}
          </button>
        </form>

        {message && (
          <p
            className={
              result === "correct" ? "alert alert--success" : "alert alert--error"
            }
          >
            {message}
          </p>
        )}

        <div className="quiz__actions">
          <button className="btn btn--ghost" type="button" onClick={setStateToSetup}>
            Przerwij / menu
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="end">
      <h2 className="card__title">Koniec</h2>
      <p className="muted">Wyrazy do nauczenia:</p>

      <ul className="list">
        {[...flashcardsToLearn].map((flashcard) => (
          <li className="list__item" key={flashcard.polishWord}>
            <span className="list__pl">{flashcard.polishWord}</span>
            <span className="list__dash">—</span>
            <span className="list__en">{flashcard.englishWords.join(" lub ")}</span>
          </li>
        ))}
      </ul>

      <button className="btn btn--primary" type="button" onClick={setStateToSetup}>
        Wróć do głównego menu
      </button>
    </section>
  );
};
