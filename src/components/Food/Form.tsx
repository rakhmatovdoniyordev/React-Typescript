import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Foods {
  id: number;
  title: string;
  desc: string;
  price: number;
  oldprice: number;
  url: string;
}

interface FoodFormProps {
  initialFood?: Foods;
  onSubmit: (food: Foods) => void;
  onCancel: () => void;
}

const initialState: Foods = {
  id: 0,
  title: "",
  desc: "",
  price: 0,
  oldprice: 0,
  url: ""
};

export const FoodForm: React.FC<FoodFormProps> = ({ initialFood, onSubmit, onCancel }) => {
    const [food, setFood] = useState<Foods>(initialFood || initialState);

    useEffect(() => {
      if (initialFood) {
        setFood(initialFood);
      }
    }, [initialFood]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFood(prev => ({ ...prev, [name]: name === 'price' || name === 'oldprice' ? parseFloat(value) : value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(food);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">{food.id ? 'Taomni tahrirlash' : 'Yangi taom qo\'shish'}</h2>
        <div>
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Nomi</label>
          <input
            type="text"
            id="title"
            name="title"
            value={food.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="desc" className="block text-gray-700 font-bold mb-2">Tavsif</label>
          <textarea
            id="desc"
            name="desc"
            value={food.desc}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Narx</label>
          <input
            type="number"
            id="price"
            name="price"
            value={food.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="oldprice" className="block text-gray-700 font-bold mb-2">Eski narx</label>
          <input
            type="number"
            id="oldprice"
            name="oldprice"
            value={food.oldprice}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="url" className="block text-gray-700 font-bold mb-2">Rasm URL</label>
          <input
            type="url"
            id="url"
            name="url"
            value={food.url}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex justify-end gap-4">
          <motion.button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Bekor qilish
          </motion.button>
          <motion.button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {food.id ? 'Saqlash' : 'Qo\'shish'}
          </motion.button>
        </div>
      </form>
    );
};
