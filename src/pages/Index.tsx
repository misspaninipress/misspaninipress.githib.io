
import { motion } from "framer-motion";
import CharacterCard from "../components/CharacterCard";

const characters = [
  {
    name: "cassidy",
    fullName: "cassidy blanchard",
    pronouns: "she/her",
    age: 19,
    image: "https://i.pinimg.com/736x/f3/a8/15/f3a8153badc7ce5b03ee1683d3b70abc.jpg",
    wattpadUrl: "https://www.wattpad.com/1080548546-someone-new-original-characters-cassidy-blanchard",
  },
  {
    name: "wren",
    fullName: "wren huxley",
    pronouns: "she/her",
    age: 19,
    image: "https://i.pinimg.com/736x/9e/91/30/9e91306b8181a80b743a6021355c8783.jpg",
    wattpadUrl: "https://www.wattpad.com/1221851501-someone-new-original-characters-wren-huxley",
  },
  {
    name: "samira",
    fullName: "samira",
    pronouns: "she/her",
    age: null,
    image: "https://i.pinimg.com/736x/81/ac/e3/81ace36abf9b8f829d97ecedd5f5bff3.jpg",
    wattpadUrl: "https://www.wattpad.com/1348660366-someone-new-original-characters-samira",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nini-dark mb-4">
            penned by nini ♥
          </h1>
          <p className="text-lg md:text-xl text-nini-wine font-light italic mb-4">
            a collection of original characters by{" "}
            <a 
              href="https://www.wattpad.com/user/misspanini" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-nini-rose hover:text-nini-wine transition-colors underline decoration-1 underline-offset-4"
            >
              @misspanini
            </a>
          </p>

          <div className="decorative-separator" aria-hidden="true" />
        </motion.div>

        {/* Character Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {characters.map((character, index) => (
            <motion.div
              key={character.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="character-card"
            >
              <CharacterCard {...character} />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer with Wattpad Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="https://www.wattpad.com/user/misspanini"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-nini-wine hover:bg-nini-dark text-white rounded-full font-light tracking-wide text-sm transition-all duration-300 hover:transform hover:scale-105"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            visit my wattpad profile
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
