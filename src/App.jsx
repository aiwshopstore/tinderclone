import { useState } from "react";

const sampleProfiles = [
  {
    id: 1,
    name: "Alex",
    age: 26,
    bio: "Love hiking and coffee ☕",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sophia",
    age: 24,
    bio: "Artist & traveler 🎨✈️",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Liam",
    age: 29,
    bio: "Tech nerd and foodie 🍔💻",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

export default function App() {
  const [profiles, setProfiles] = useState(sampleProfiles);
  const [matches, setMatches] = useState([]);

  const handleSwipe = (liked) => {
    const [current, ...rest] = profiles;
    if (liked) {
      setMatches((prev) => [...prev, current]);
    }
    setProfiles(rest);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-pink-300 p-4">
      <h1 className="text-3xl font-bold mb-6">SwipeApp</h1>
      {profiles.length > 0 ? (
        <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={profiles[0].image}
            alt={profiles[0].name}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              {profiles[0].name}, {profiles[0].age}
            </h2>
            <p className="text-gray-700 mt-2">{profiles[0].bio}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleSwipe(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-xl"
              >
                Pass
              </button>
              <button
                onClick={() => handleSwipe(true)}
                className="px-4 py-2 bg-green-500 text-white rounded-xl"
              >
                Like
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold">No more profiles 😢</h2>
          <p className="text-gray-600 mt-2">
            {matches.length > 0
              ? `You liked ${matches.length} people! 🎉`
              : "Start swiping to find your match!"}
          </p>
        </div>
      )}
    </div>
  );
}
