import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdModeEdit } from 'react-icons/md';
import { FoodForm } from './Form';
import { Modal } from './Modal';

interface Foods {
    id: number,
    title: string,
    desc: string,
    price: number,
    oldprice: number,
    url: string
}

const initialState: Foods = {
    id: 0,
    title: "",
    desc: "",
    price: 0,
    oldprice: 0,
    url: ""
}

const API_URL = "https://6777b7b280a79bf91902b4ff.mockapi.io/Food";

const Food = () => {
    const [data, setData] = useState<Foods>(initialState)
    const [food, setFood] = useState<Foods[]>([])
    const [reload, setReload] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingFood, setEditingFood] = useState<Foods | null>(null);

    useEffect(() => {
        axios
            .get(API_URL)
            .then(res => setFood(res.data))
        setData(initialState)
    }, [reload])

    const handleDeleteCard = (id: number) => {
        axios
            .delete(`${API_URL}/${id}`)
            .then(() => setReload(i => !i))
    }

    const handleSubmit = async (formData: Foods) => {
            if (formData.id) {
                await axios.put(`${API_URL}/${formData.id}`, formData);
            } else {
                await axios.post(API_URL, formData);
            }
            setReload(i => !i);
            setIsModalOpen(false);
            setEditingFood(null);
    };

    const handleEdit = (food: Foods) => {
        setEditingFood(food);
        setIsModalOpen(true);
    }

    const handleAddNew = () => {
        setEditingFood(null);
        setIsModalOpen(true);
    }

    return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8">Bizning Menyu</h1>
            <div className='w-full flex justify-center'>
              <motion.button
                  className="bg-green-500 text-white px-4 py-2 rounded-full mb-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddNew}
              >
                  Yangi taom qo'shish
              </motion.button>

            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <FoodForm
                    initialFood={editingFood || undefined}
                    onSubmit={handleSubmit}
                    onCancel={() => setIsModalOpen(false)}
                />
            </Modal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {food.map((food, index) => (
                    <motion.div
                        key={food.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <motion.img
                            src={food?.url}
                            alt={food.title}
                            className="w-full p-10 object-cover cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{food.title}</h2>
                            <p className="text-gray-600 mb-4">{food.desc}</p>
                            <div className="flex justify-between items-center whitespace-nowrap">
                                <div>
                                    <span className="text-2xl font-bold text-green-600">{food.price.toLocaleString()} $</span>
                                    {food.oldprice > 0 && (
                                        <span className="text-sm text-gray-500 line-through ml-2">
                                            {food.oldprice.toLocaleString()} $
                                        </span>
                                    )}
                                </div>
                                <div className='flex items-center gap-2'>
                                    <motion.button
                                        className="bg-red-500 text-sm text-white px-4 py-2 rounded-full flex items-center gap-1"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleDeleteCard(food.id)}
                                    >
                                        O'chirish <RiDeleteBin6Line />
                                    </motion.button>
                                    <motion.button
                                        className="bg-blue-500 text-sm text-white px-4 py-2 rounded-full flex items-center gap-1"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleEdit(food)}
                                    >
                                        Tahrirlash <MdModeEdit />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Food
