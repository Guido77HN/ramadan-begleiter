
"use client";
import { useState, useEffect } from "react";

const spiritualQuotes = [
  "Fasten ist das Schild des Gläubigen. — Prophet Muhammad (s.a.w.)",
  "Wer immer Allah fürchtet, dem macht Er einen Ausweg. — Koran 65:2",
  "Der beste unter euch ist derjenige, der sich am besten benimmt. — Prophet Muhammad (s.a.w.)",
  "Im Gedenken an Allah finden Herzen Ruhe. — Koran 13:28",
  "Geduld ist Licht. — Prophet Muhammad (s.a.w.)",
  "Jede gute Tat wird vervielfacht während des Ramadan.",
  "Vergebung ist das Geschenk des Herzens.",
  "Fasten ist mehr als Verzicht – es ist eine Reinigung von innen.",
  "Lerne loszulassen, um zu empfangen.",
  "Die Nacht des Schicksals ist besser als tausend Monate. — Koran 97:3",
  "Barmherzigkeit beginnt mit Mitgefühl.",
  "Einen Tag in Geduld zu leben ist ein Schritt zur inneren Freiheit.",
  "Wahrer Reichtum ist Zufriedenheit.",
  "Wer seinem Bruder hilft, dem hilft Allah.",
  "Du bist nicht allein in deiner Anstrengung. Allah sieht dich.",
  "Licht kommt, wenn du innerlich still wirst.",
  "Die Zeit mit Allah ist niemals verschwendet.",
  "Der Ramadan ist ein Monat der Nähe, nicht der Entfernung.",
  "Was du gibst, kommt vielfach zu dir zurück.",
  "Fasten ist eine Einladung zur Achtsamkeit.",
  "Ein reines Herz ist wertvoller als alles Gold.",
  "Der Körper fastet – aber die Seele wird genährt.",
  "Du wirst nicht geprüft, um zu zerbrechen, sondern zu wachsen.",
  "Hoffnung ist ein Licht, das nie verlischt.",
  "Lass deine Gebete Flügel sein, nicht Worte.",
  "Am Ende jedes Tages wartet Erbarmen.",
  "Ein stilles Herz hört besser.",
  "Was du heute denkst, wird morgen dein Leben. — Prophet Muhammad (sinngemäß)",
  "In der Nacht liegt die Tiefe des Tages.",
  "Ramadan endet, aber seine Spuren bleiben."
];

export default function Page() {
  const [currentDay, setCurrentDay] = useState(1);

  useEffect(() => {
    const today = new Date();
    const start = new Date(2026, 1, 18);
    const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
    if (diff >= 0 && diff < 30) setCurrentDay(diff + 1);
  }, []);

  return (
    <main className="p-6 font-sans">
      <h1 className="text-2xl font-bold text-center mb-4">🕌 Ramadan-Begleiter 2026</h1>
      <p className="text-center italic mb-4">Heute ist Tag {currentDay} von 30</p>
      <blockquote className="bg-gray-100 border-l-4 border-yellow-400 p-4 text-sm italic">
        {spiritualQuotes[currentDay - 1]}
      </blockquote>
    </main>
  );
}
