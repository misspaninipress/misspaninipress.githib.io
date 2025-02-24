
import { useState } from "react";
import { motion } from "framer-motion";

interface CharacterCardProps {
  name: string;
  fullName: string;
  pronouns: string;
  age: number | null;
  image: string;
  wattpadUrl: string;
}

const CharacterCard = ({
  name,
  fullName,
  pronouns,
  age,
  image,
  wattpadUrl,
}: CharacterCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(wattpadUrl, "_blank")}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
        {/* Image with color overlay */}
        <div className="relative w-full h-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-nini-pink/20 mix-blend-multiply transition-opacity duration-300" />
        </div>
        
        {/* Character Name with Background Stripe */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
          <div className="relative">
            {/* Background Stripe */}
            <div className="absolute inset-0 bg-nini-rose/70 backdrop-blur-sm -skew-y-1 transform rounded" />
            <h3 className="relative text-white text-3xl font-light tracking-wide text-center font-['Playfair_Display'] py-1">
              {name.toLowerCase()}
            </h3>
          </div>
        </div>

        {/* Hover Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-nini-wine/90 backdrop-blur-sm p-6 flex flex-col justify-center items-center text-white"
        >
          <h4 className="text-xl font-light mb-2 font-['Playfair_Display']">{fullName.toLowerCase()}</h4>
          <p className="text-sm mb-1 font-['Cormorant_Garamond']">{pronouns.toLowerCase()}</p>
          <p className="text-sm font-['Cormorant_Garamond']">{age ? `${age} years` : "age unknown"}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CharacterCard;
