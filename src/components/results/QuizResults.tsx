import React from 'react';
import type { Team } from '../../types/game';
import ResultCard from './ResultCard';
import ResultsHeader from './ResultsHeader';
import PlayAgainButton from './PlayAgainButton';

interface QuizResultsProps {
  teams: Team[];
  onPlayAgain: () => void;
}

export default function QuizResults({ teams, onPlayAgain }: QuizResultsProps) {
  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-100 p-6">
      <ResultsHeader />

      <div className="space-y-6">
        {sortedTeams.map((team, index) => (
          <ResultCard
            key={team.id}
            team={team}
            position={index}
          />
        ))}
      </div>

      <PlayAgainButton onClick={onPlayAgain} />
    </div>
  );
}