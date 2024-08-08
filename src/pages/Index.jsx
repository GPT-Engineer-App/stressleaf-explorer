import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Cat } from "lucide-react"

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the purr, meow, and hiss.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats have a third eyelid called the nictitating membrane to protect their eyes."
];

const Index = () => {
  const [factIndex, setFactIndex] = useState(0);

  const nextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6 space-y-6">
        <div className="flex items-center justify-center space-x-4">
          <Cat className="h-8 w-8 text-blue-500" />
          <h1 className="text-4xl font-bold text-center">All About Cats</h1>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="A cute cat"
          className="mx-auto object-cover w-full h-64 rounded-md"
        />
        <p className="text-xl text-gray-700 text-center">{catFacts[factIndex]}</p>
        <div className="flex justify-center">
          <Button onClick={nextFact} className="mt-4">
            Next Cat Fact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
