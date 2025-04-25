// import React, { useState, useEffect } from 'react';
// import type { Team, GamePhase } from '../../types/game';
// import { questions } from '../../utils/questions';
// import Timer from './Timer';
// import QuestionCard from './QuestionCard';
// import Scoreboard from './Scoreboard';

// interface QuizGameProps {
//   teams: Team[];
//   onGameComplete: (teams: Team[]) => void;
// }

// const TIMER_DURATION = 60;
// const RESULT_DISPLAY_DURATION = 2000;

// export default function QuizGame({ teams, onGameComplete }: QuizGameProps) {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [activeTeam, setActiveTeam] = useState(0);
//   const [originalTeam, setOriginalTeam] = useState(0);
//   const [phase, setPhase] = useState<GamePhase>('firstAttempt');
//   const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
//   const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
//   const [showResult, setShowResult] = useState(false);
//   const [updatedTeams, setUpdatedTeams] = useState(teams);

//   useEffect(() => {
//     if (timeLeft > 0 && !showResult) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else if (timeLeft === 0 && !showResult) {
//       handleAnswerSubmit(-1);
//     }
//   }, [timeLeft, showResult]);

//   const handleAnswerSubmit = (answerIndex: number) => {
//     setSelectedAnswer(answerIndex);
//     setShowResult(true);
    
//     const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;
    
//     if (isCorrect) {
//       const points = phase === 'firstAttempt' ? 5 : phase === 'secondAttempt' ? 3 : 0;
//       if (points > 0) {
//         const newTeams = [...updatedTeams];
//         newTeams[activeTeam].score += points;
//         setUpdatedTeams(newTeams);
//       }
//     }

//     setTimeout(() => {
//       if (!isCorrect) {
//         if (phase === 'firstAttempt') {
//           setPhase('secondAttempt');
//           setActiveTeam((activeTeam + 1) % teams.length);
//         } else if (phase === 'secondAttempt') {
//           setPhase('massRound');
//         }
//         setTimeLeft(TIMER_DURATION);
//         setSelectedAnswer(null);
//         setShowResult(false);
//       } else {
//         if (currentQuestion < questions.length - 1) {
//           setCurrentQuestion(currentQuestion + 1);
//           setPhase('firstAttempt');
//           const nextTeam = (originalTeam + 1) % teams.length;
//           setActiveTeam(nextTeam);
//           setOriginalTeam(nextTeam);
//           setTimeLeft(TIMER_DURATION);
//           setSelectedAnswer(null);
//           setShowResult(false);
//         } else {
//           onGameComplete(updatedTeams);
//         }
//       }
//     }, RESULT_DISPLAY_DURATION);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-100 p-6">
//       <div className="mb-8 flex justify-between items-center">
//         <div className="flex items-center gap-4">
//           <Timer timeLeft={timeLeft} total={TIMER_DURATION} />
//           {phase !== 'massRound' && (
//             <div className="text-xl font-semibold text-gray-800">
//               Team: {updatedTeams[activeTeam].name}
//             </div>
//           )}
//         </div>
//         <div className="text-lg font-medium text-gray-600">
//           Question {currentQuestion + 1} of {questions.length}
//         </div>
//       </div>

//       <QuestionCard
//         question={questions[currentQuestion]}
//         phase={phase}
//         selectedAnswer={selectedAnswer}
//         showResult={showResult}
//         onAnswer={handleAnswerSubmit}
//       />

//       <div className="mt-8">
//         <Scoreboard
//           teams={updatedTeams}
//           activeTeam={activeTeam}
//           phase={phase}
//         />
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import type { Team, GamePhase } from '../../types/game';
// import { questions } from '../../utils/questions';
// import Timer from './Timer';
// import QuestionCard from './QuestionCard';
// import Scoreboard from './Scoreboard';

// interface QuizGameProps {
//   teams: Team[];
//   onGameComplete: (teams: Team[]) => void;
// }

// const TIMER_DURATION_FIRST_ATTEMPT = 60;
// const TIMER_DURATION_SECOND_ATTEMPT = 30;
// const RESULT_DISPLAY_DURATION = 20000;

// export default function QuizGame({ teams, onGameComplete }: QuizGameProps) {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [activeTeam, setActiveTeam] = useState(0);
//   const [originalTeam, setOriginalTeam] = useState(0);
//   const [phase, setPhase] = useState<GamePhase>('firstAttempt');
//   const [timeLeft, setTimeLeft] = useState(TIMER_DURATION_FIRST_ATTEMPT);
//   const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
//   const [showResult, setShowResult] = useState(false);
//   const [updatedTeams, setUpdatedTeams] = useState(teams);

//   useEffect(() => {
//     if (phase !== 'massRound' && timeLeft > 0 && !showResult) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else if (timeLeft === 0 && !showResult) {
//       handleAnswerSubmit(-1);
//     }
//   }, [timeLeft, showResult, phase]);

//   const handleAnswerSubmit = (answerIndex: number) => {
//     setSelectedAnswer(answerIndex);
//     setShowResult(true);

//     const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;

//     if (isCorrect) {
//       const points = phase === 'firstAttempt' ? 5 : phase === 'secondAttempt' ? 3 : 0;
//       if (points > 0) {
//         const newTeams = [...updatedTeams];
//         newTeams[activeTeam].score += points;
//         setUpdatedTeams(newTeams);
//       }
//     }

//     setTimeout(() => {
//       if (!isCorrect) {
//         if (phase === 'firstAttempt') {
//           setPhase('secondAttempt');
//           setTimeLeft(TIMER_DURATION_SECOND_ATTEMPT);
//           setActiveTeam((activeTeam + 1) % teams.length);
//         } else if (phase === 'secondAttempt') {
//           setPhase('massRound');
//         }
//         setSelectedAnswer(null);
//         setShowResult(false);
//       } else {
//         if (currentQuestion < questions.length - 1) {
//           setCurrentQuestion(currentQuestion + 1);
//           setPhase('firstAttempt');
//           const nextTeam = (originalTeam + 1) % teams.length;
//           setActiveTeam(nextTeam);
//           setOriginalTeam(nextTeam);
//           setTimeLeft(TIMER_DURATION_FIRST_ATTEMPT);
//           setSelectedAnswer(null);
//           setShowResult(false);
//         } else {
//           onGameComplete(updatedTeams);
//         }
//       }
//     }, RESULT_DISPLAY_DURATION);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-100 p-6">
//       <div className="mb-8 flex justify-between items-center">
//         <div className="flex items-center gap-4">
//           {phase !== 'massRound' && (
//             <Timer timeLeft={timeLeft} total={
//               phase === 'firstAttempt'
//                 ? TIMER_DURATION_FIRST_ATTEMPT
//                 : TIMER_DURATION_SECOND_ATTEMPT
//             } />
//           )}
//           {phase !== 'massRound' && (
//             <div className="text-xl font-semibold text-gray-800">
//               Team: {updatedTeams[activeTeam].name}
//             </div>
//           )}
//         </div>
//         <div className="text-lg font-medium text-gray-600">
//           Question {currentQuestion + 1} of {questions.length}
//         </div>
//       </div>

//       <QuestionCard
//         question={questions[currentQuestion]}
//         phase={phase}
//         selectedAnswer={selectedAnswer}
//         showResult={showResult}
//         onAnswer={handleAnswerSubmit}
//       />

//       <div className="mt-8">
//         <Scoreboard
//           teams={updatedTeams}
//           activeTeam={activeTeam}
//           phase={phase}
//         />
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import type { Team, GamePhase } from '../../types/game';
import { questions } from '../../utils/questions';
import Timer from './Timer';
import QuestionCard from './QuestionCard';
import Scoreboard from './Scoreboard';

interface QuizGameProps {
  teams: Team[];
  onGameComplete: (teams: Team[]) => void;
}

const TIMER_DURATION_FIRST_ATTEMPT = 60;
const TIMER_DURATION_SECOND_ATTEMPT = 30;
const RESULT_DISPLAY_DURATION = 2000;

export default function QuizGame({ teams, onGameComplete }: QuizGameProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [activeTeam, setActiveTeam] = useState(0);
  const [originalTeam, setOriginalTeam] = useState(0);
  const [phase, setPhase] = useState<GamePhase>('firstAttempt');
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION_FIRST_ATTEMPT);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showIntro, setShowIntro] = useState(true); // New state for intro phase
  const [updatedTeams, setUpdatedTeams] = useState(teams);

  useEffect(() => {
    if (!showIntro && phase !== 'massRound' && timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleAnswerSubmit(-1);
    }
  }, [timeLeft, showResult, showIntro, phase]);

  const handleAnswerSubmit = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;

    if (isCorrect) {
      const points = phase === 'firstAttempt' ? 5 : phase === 'secondAttempt' ? 3 : 0;
      if (points > 0) {
        const newTeams = [...updatedTeams];
        newTeams[activeTeam].score += points;
        setUpdatedTeams(newTeams);
      }
    }

    setTimeout(() => {
      if (!isCorrect) {
        if (phase === 'firstAttempt') {
          setPhase('secondAttempt');
          setTimeLeft(TIMER_DURATION_SECOND_ATTEMPT);
          setActiveTeam((activeTeam + 1) % teams.length);
        } else if (phase === 'secondAttempt') {
          setPhase('massRound');
        }
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setPhase('firstAttempt');
          const nextTeam = (originalTeam + 1) % teams.length;
          setActiveTeam(nextTeam);
          setOriginalTeam(nextTeam);
          setTimeLeft(TIMER_DURATION_FIRST_ATTEMPT);
          setSelectedAnswer(null);
          setShowResult(false);
          setShowIntro(true); // Show intro for the next question
        } else {
          onGameComplete(updatedTeams);
        }
      }
    }, RESULT_DISPLAY_DURATION);
  };

  const startQuestion = () => {
    setShowIntro(false);
    setTimeLeft(
      phase === 'firstAttempt' ? TIMER_DURATION_FIRST_ATTEMPT : TIMER_DURATION_SECOND_ATTEMPT
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-100 p-6">
      {showIntro ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-blue-100 rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Team: <span className="text-blue-600">{updatedTeams[activeTeam].name}</span>
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Get ready for Question {currentQuestion + 1}!
          </p>
          <button
            onClick={startQuestion}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Question
          </button>
        </div>
      ) : (
        <>
          <div className="mb-8 flex justify-between items-center">
            <div className="flex items-center gap-4">
              {phase !== 'massRound' && (
                <Timer
                  timeLeft={timeLeft}
                  total={
                    phase === 'firstAttempt'
                      ? TIMER_DURATION_FIRST_ATTEMPT
                      : TIMER_DURATION_SECOND_ATTEMPT
                  }
                />
              )}
              {phase !== 'massRound' && (
                <div className="text-xl font-semibold text-gray-800">
                  Team: {updatedTeams[activeTeam].name}
                </div>
              )}
            </div>
            <div className="text-lg font-medium text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>

          <QuestionCard
            question={questions[currentQuestion]}
            phase={phase}
            selectedAnswer={selectedAnswer}
            showResult={showResult}
            onAnswer={handleAnswerSubmit}
          />

          <div className="mt-8">
            <Scoreboard teams={updatedTeams} activeTeam={activeTeam} phase={phase} />
          </div>
        </>
      )}
    </div>
  );
}
