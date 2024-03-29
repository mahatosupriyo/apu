import React from 'react';
import { Creation } from '@/types/types';
import styles from '@/styles/components/Creations/CreationCard.module.scss'
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { GetStaticProps } from 'next';

interface CardProps {
    card: Creation;
}

const cardVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};


const CreationCard: React.FC<CardProps> = ({ card }) => (



    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ type: 'spring', stiffness: 100, mass: 0.5, delay: parseInt(card.id) * 0.2 }}
        className={styles.CreationCard}

        key={card.id}
    >
        <Link href={`/creations/${encodeURIComponent(card.title.toLowerCase().replace(/ /g, '-'))}`} className={styles.CardLink} draggable="false">
            <img draggable="false" className={styles.Thumbnail} src={card.thumbnail_url} alt={card.title} />
            <div className={styles.CardData}>
                <h2 className={styles.Title}>
                    {card.title}
                </h2>
            </div>
        </Link>
    </motion.div>
);

export default CreationCard;