export interface Category {
  slug: string;
  title: string;
  short: string;
  description: string;
  image?: string;
}

export interface Model {
  slug: string;
  category: string;
  title: string;
  price: number;
  dimensions: string;
  materials: string;
  description: string;
  images: string[];
  featured?: boolean;
  placeholder?: boolean;
}

export const categories: Category[] = [
  {
    slug: 'kukhni',
    title: 'Кухни',
    short: 'Прямые, угловые, П-образные',
    description:
      'Кухни на заказ в Санкт-Петербурге: прямые, угловые и П-образные. ЛДСП и МДФ, проверенная фурнитура, сборка и монтаж.',
  },
  {
    slug: 'krovati',
    title: 'Кровати',
    short: 'С ящиками и подъёмным механизмом',
    description:
      'Кровати с ящиками для хранения и подъёмным механизмом. Подберём размер и материал под вашу спальню.',
  },
  {
    slug: 'tumby',
    title: 'Тумбы',
    short: 'Прикроватные и подвесные',
    description:
      'Прикроватные и подвесные тумбы под размеры спальни. Аккуратные фасады и удобное хранение.',
  },
  {
    slug: 'komody',
    title: 'Комоды',
    short: 'Узкие, широкие, высокие',
    description:
      'Комоды для спальни и гостиной: узкие, широкие и высокие. Подберём количество ящиков и материал.',
  },
  {
    slug: 'shkafy',
    title: 'Шкафы',
    short: 'Купе, распашные, гардеробные',
    description:
      'Шкафы-купе, распашные шкафы и гардеробные. Проектируем под нишу и рост, собираем и устанавливаем сами.',
    image: '/img/shkaf-1.png',
  },
];

export const models: Model[] = [
  // Шкафы
  {
    slug: 'shkaf-s-rabochey-zonoy',
    category: 'shkafy',
    title: 'Шкаф с рабочей зоной',
    price: 105000,
    dimensions: '2800 × 2600 × 600 мм, стол 550 мм',
    materials: 'ЛДСП, МДФ',
    description:
      'Шкаф с встроенной рабочей зоной: место для одежды и стол у окна в одном комплекте. Подходит для спальни, детской или кабинета в новостройке.',
    images: ['/img/shkaf-2.png', '/img/shkaf-1.png', '/img/garderob.png'],
    featured: true,
  },
  {
    slug: 'garderobnaya',
    category: 'shkafy',
    title: 'Гардеробная',
    price: 160000,
    dimensions: '~2 × 3 м, высота 2600 мм',
    materials: 'ЛДСП',
    description:
      'Гардеробная под нишу или отдельную комнату: штанги, полки и ящики. Планируем наполнение под ваши вещи.',
    images: ['/img/garderob.png'],
    featured: true,
  },
  {
    slug: 'shkaf-kupe',
    category: 'shkafy',
    title: 'Шкаф-купе',
    price: 105000,
    dimensions: '2800 × 2600 × 600 мм',
    materials: 'ЛДСП',
    description:
      'Шкаф-купе с раздвижными дверями. Экономит место и подходит для прихожей или спальни.',
    images: ['/img/shkaf-1.png'],
    featured: true,
  },

  // Кровати
  {
    slug: 'krovat-s-yashchikami',
    category: 'krovati',
    title: 'Кровать с ящиками',
    price: 30000,
    dimensions: '2000 × 900 мм',
    materials: 'ЛДСП',
    description:
      'Кровать с ящиками для хранения. Подойдёт для небольшой спальни или детской.',
    images: [],
    featured: true,
    placeholder: true,
  },
  {
    slug: 'krovat-s-podyomnym-mehanizmom',
    category: 'krovati',
    title: 'Кровать с подъёмным механизмом',
    price: 0,
    dimensions: 'уточняется',
    materials: 'ЛДСП, МДФ',
    description: 'Модель скоро появится. Пришлите фото и характеристики — заполним карточку.',
    images: [],
    placeholder: true,
  },

  // Кухни
  {
    slug: 'kuhnya-pryamaya',
    category: 'kukhni',
    title: 'Кухня прямая «Прага»',
    price: 0,
    dimensions: 'по проекту',
    materials: 'ЛДСП',
    description: 'Модель скоро появится. Пришлите фото и характеристики — заполним карточку.',
    images: [],
    placeholder: true,
  },
  {
    slug: 'kuhnya-uglovaya',
    category: 'kukhni',
    title: 'Кухня угловая «Нева»',
    price: 0,
    dimensions: 'по проекту',
    materials: 'ЛДСП',
    description: 'Модель скоро появится. Пришлите фото и характеристики — заполним карточку.',
    images: [],
    placeholder: true,
  },

  // Тумбы
  {
    slug: 'tumba-prikrovatnaya',
    category: 'tumby',
    title: 'Тумба прикроватная',
    price: 0,
    dimensions: 'уточняется',
    materials: 'ЛДСП',
    description: 'Модель скоро появится. Пришлите фото и характеристики — заполним карточку.',
    images: [],
    placeholder: true,
  },
  {
    slug: 'tumba-podvesnaya',
    category: 'tumby',
    title: 'Тумба подвесная',
    price: 0,
    dimensions: 'уточняется',
    materials: 'ЛДСП',
    description: 'Модель скоро появится. Пришлите фото и характеристики — заполним карточку.',
    images: [],
    placeholder: true,
  },

  // Комоды
  {
    slug: 'komod-shirokiy',
    category: 'komody',
    title: 'Комод широкий',
    price: 0,
    dimensions: 'уточняется',
    materials: 'ЛДСП',
    description: 'Модель скоро появится. Пришлите фото и характеристики — заполним карточку.',
    images: [],
    placeholder: true,
  },
  {
    slug: 'komod-uzkiy',
    category: 'komody',
    title: 'Комод узкий',
    price: 0,
    dimensions: 'уточняется',
    materials: 'ЛДСП',
    description: 'Модель скоро появится. Пришлите фото и характеристики — заполним карточку.',
    images: [],
    placeholder: true,
  },
];

export const getCategory = (slug: string): Category =>
  categories.find((c) => c.slug === slug) ?? categories[0];

export const getModelsByCategory = (slug: string): Model[] =>
  models.filter((m) => m.category === slug);

export const getFeatured = (): Model[] => models.filter((m) => m.featured);

export const getModel = (category: string, slug: string): Model | undefined =>
  models.find((m) => m.category === category && m.slug === slug);
