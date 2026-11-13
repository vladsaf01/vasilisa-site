# Сайт «Василиса» — Astro

**Дата:** 08.11.2026
**Статус:** этап 1 — каркас и маршруты. CMS/SEO/аналитика — следующие этапы.

---

## Команды

```bash
npm install
npm run dev      # локальная разработка, http://localhost:4321
npm run build    # сборка в dist/
npm run preview  # предпросмотр сборки
```

---

## Структура

```
site/
  src/
    components/   Header, Footer, ProductCard, CategoryCard
    data/         catalog.ts (категории и модели), settings.ts (контакты)
    layouts/      Base.astro
    pages/        index, [category], [category]/[slug], o-nas,
                  dostavka-i-kontakty, politika, 404
    styles/       global.css
  public/
    img/          фото работ
    main.js       меню, шапка, галерея
  astro.config.mjs
```

---

## Маршруты

| Маршрут | Страница |
|---|---|
| `/` | Главная |
| `/kukhni/`, `/krovati/`, `/tumby/`, `/komody/`, `/shkafy/` | Категории |
| `/shkafy/shkaf-s-rabochey-zonoy/` и т.д. | Карточки моделей |
| `/o-nas/` | О нас и работы |
| `/dostavka-i-kontakty/` | Доставка, оплата, контакты |
| `/politika/` | Политика конфиденциальности |
| `/404.html` | 404 |

---

## Логотип

Официальный логотип компании утверждён 13.11.2026 (см. `../08_Решения_и_план.md`, раздел 1c).

- `public/img/logo-vasilisa.png` — полная версия (монограмма + «ВАСИЛИСА» + «МЕБЕЛЬ НА ЗАКАЗ»), футер;
- `public/img/logo-mark.png` — монограмма, шапка сайта;
- `public/favicon.png` — иконка сайта.

---

## Заглушки

- Контакты — в `src/data/settings.ts`.
- Категории и модели — в `src/data/catalog.ts`.
- У части моделей нет фото: в карточке показывается «Фото скоро».
- Отзывы и часть текстов — черновые.

---

## Что дальше

1. Sveltia CMS (`/admin`) + коллекции моделей и категорий.
2. SEO: мета, sitemap, robots, JSON-LD, хлебные крошки.
3. Метрика и цели.
4. Наполнение реальными фото и ценами.
5. Деплой и домен.
