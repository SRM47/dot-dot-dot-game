'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface GameRoomProps {
  roomCode: string;
}

const GameRoom: React.FC<GameRoomProps> = ({ roomCode }) => {
    const router = useRouter();
    const [currentQuestion, setCurrentQuestion] = useState('474747474747?'); // Initial question
    const [playerResponse, setPlayerResponse] = useState('');
    const [activePlayers, setActivePlayers] = useState(0); // Placeholder
    const upcomingQuestions = ['xxxxxxx?', 'yyyyyyy?', '???????']; // Sample
  
    const handleResponseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPlayerResponse(event.target.value);
    };
  
    const handleSubmitResponse = () => {
      // Logic to send the response to the game server
      console.log(`Submitted response: ${playerResponse}`);
      // ... update game state, get next question, etc.
    };
  
    const handleSkipQuestion = () => {
      // Logic to fetch the next question from the server
      console.log('Skipping question');
      // ... update currentQuestion state
    };
  
    const handleLeaveRoom = () => {
      // Logic to leave the game and navigate back to the main menu
      router.push('/');
    };

  return (
    <div className="flex flex-col items-center justify-center w-4/5 h-4/5 mx-auto bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-4">Room Code: {roomCode}</h2>
      <h3 className="text-xl text-white mb-8">Current Question: {currentQuestion}</h3>

      {/* Top Right Section */}
      <div className="flex flex-col items-end space-y-2 mb-8 w-1/2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Skip</button>

        <div className="bg-gray-800 p-4 rounded text-white">
          <h4 className="text-lg font-semibold">#Active Players: {activePlayers}</h4>
          <div>
            <h4 className="text-base font-medium mt-2">Upcoming Questions:</h4>
            <ul>
              {upcomingQuestions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Response Area */}
      <div className="flex flex-col items-center space-y-4 w-3/4">
        <h3 className="text-xl text-white">RESPONSE AREA</h3>
        <input
          type="text"
          value={playerResponse}
          onChange={handleResponseChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        <button onClick={handleLeaveRoom} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Leave Room</button>
      </div>
    </div>
  );
};

export default GameRoom;
