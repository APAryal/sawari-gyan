// import React from 'react';
// import { Trophy, Medal } from 'lucide-react';
// import type { Team } from '../../types/game';

// interface ResultCardProps {
//   team: Team;
//   position: number;
// }

// export default function ResultCard({ team, position }: ResultCardProps) {
//   return (
//     <div className={`bg-white rounded-lg shadow-md p-6 transform transition-all ${
//       position === 0 ? 'scale-105' : ''
//     }`}>
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           {position === 0 && <Trophy className="w-8 h-8 text-yellow-500" /> }
//           {position === 1 }
//           {position === 2 }
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">
//               {team.name}
//             </h2>
//             <div className="text-gray-600">
//               {team.members.map(m => m.name).join(', ')}
//             </div>
//           </div>
//         </div>
//         <div className="text-3xl font-bold text-blue-600">
//           {team.score} pts
//         </div>
//       </div>
//     </div>
//   );
// }import React from 'react';
// import { Trophy } from 'lucide-react';
// import type { Team } from '../../types/game';

// interface ResultCardProps {
//   team: Team;
//   position: number;
// }

// export default function ResultCard({ team, position }: ResultCardProps) {
//   return (
//     <div className={`bg-white rounded-lg shadow-md p-6 transform transition-all ${
//       position === 0 ? 'scale-104' : ''
//     }`}>
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           {/* First Position */}
//           {position === 0 && <Trophy className="w-8 h-8 text-yellow-500" />}
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">
//               {team.name}
//             </h2>
//             <div className="text-gray-600">
//               {team.members.map(m => m.name).join(', ')}
//             </div>
//             {/* Congratulatory message for first position */}
//             {position === 0 ? (
//               <p className="text-green-500 font-semibold mt-2 text-center">
//                 Congratulatios 😊❤️!
//               </p>
//             ) : (
//               <p className="text-gray-500 font-semibold mt-2 text-center">
//                 Thank you for playing the quiz!
//               </p>
//             )}
//           </div>
//         </div>
//         <div className="text-3xl font-bold text-blue-600">
//           {team.score} pts
//         </div>
//       </div>
//     </div>
//   );
// }
import { Trophy } from 'lucide-react';
import type { Team } from '../../types/game';

interface ResultCardProps {
  team: Team;
  position: number;
}

export default function ResultCard({ team, position }: ResultCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 transform transition-all ${
      position === 0 ? 'scale-104' : ''
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* First Position */}
          {position === 0 && <Trophy className="w-8 h-8 text-yellow-500" />}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {team.name}
            </h2>
            <div className="text-gray-600">
              {/* Show all team members */}
              {team.members.length > 0 
                ? team.members.map((m, index) => (
                    <span key={m.id}>
                      {m.name}
                      {index < team.members.length - 1 && ', '}
                    </span>
                  ))
                : 'No members'}
            </div>
            {/* Congratulatory message for first position */}
            {position === 0 ? (
              <p className="text-green-500 font-semibold mt-2 text-center">
                Congratulations 😊❤️!
              </p>
            ) : (
              <p className="text-gray-500 font-semibold mt-2 text-center">
                Thank you for playing the quiz!
              </p>
            )}
          </div>
        </div>
        <div className="text-3xl font-bold text-blue-600">
          {team.score} pts
        </div>
      </div>
    </div>
  );
}
