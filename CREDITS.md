# CREDITS — «Асфальт помнит: Зима на районе»

Версия документа: 2026-11-14. Этот файл поставляется с игрой (`CREDITS.md` в корне сборки, пункт меню «Авторы и лицензии»). Сохраняйте его в каждой распространяемой версии.
Авторы CC BY-материалов не поддерживают эту игру и её издателя.

## 1. Как создавалась игра

- Код, процедурная графика, часть звуков и музыка финала созданы с помощью ИИ-ассистента Claude Code (Anthropic) по заданиям владельца проекта (Вадим). Сюжет, тексты и персонажи — вымышленные; совпадения случайны.
- Сторонние растровые изображения, спрайты и шрифтовые файлы в игру **не включены**.

## 2. Графика

| Что | Происхождение | Лицензия |
|---|---|---|
| Спрайты персонажей, окружение, интерьеры, мебель, предметы, постеры, интерфейс | Рисуются кодом (Canvas, `src/core/*`, `public/assets/asset-manifest.json`: source = procedural). Сторонних изображений нет | Оригинальная работа проекта, права у владельца проекта |
| Афиша киносеанса (`film`, `src/core/InteriorDeco.js`) | Нарисована кодом 2026-11-14, оригинальный рисунок без реальных названий | Оригинальная работа проекта |
| `public/favicon.ico` | Происхождение не документировано — **UNKNOWN**. Перед релизом заменить своим значком или подтвердить авторство | UNKNOWN |

## 3. Шрифты

Шрифтовые файлы не распространяются. Интерфейс использует системный шрифт `Courier New` (моноширинный запасной вариант браузера), установленный на устройстве игрока. Лицензия на шрифт к игре не передаётся.

## 4. Аудио — оригинальные файлы проекта (14 шт.)

Созданы процедурным синтезом (скрипты `tools/t4/*.py`, numpy → ffmpeg libvorbis). Сторонних записей и сэмплов нет. Лицензия: оригинальная работа проекта. **Не прослушаны человеком** — до релиза нужна ручная приёмка. Подробная таблица: `docs/AUDIO_CREDITS.md`.

Эмбиент: snow, entrance, hospital, shop, crowd, disco_room, radio, tv, car, passerby. Шаги: step_asphalt, step_wood, step_stairs. Музыка финала: ending.

## 5. Аудио — сторонние материалы, обязательная атрибуция (CC BY)

Источник всех — OpenGameArt.org. Изменения: короткие фрагменты, обрезка тишины, моно (эффекты), фейды, подгонка громкости, перекодирование в OGG Vorbis, у фонов — зацикливание кроссфейдом.

- **Thoughtful Piano Theme** — Trinnox (street_day). https://opengameart.org/content/thoughtful-piano-theme — CC BY 3.0 https://creativecommons.org/licenses/by/3.0/
- **Sad Piano** — megaPixelMusic / Mega Pixel Music Lab (story). https://opengameart.org/content/sad-piano-0 — CC BY 3.0
- **Retro Synthwave Loops** (going_undercover-loop1 → disco, hostile_territory-loop1 → battle) — Tomasz Kucza (Magnesus). https://opengameart.org/content/retro-synthwave-loops — CC BY 4.0 https://creativecommons.org/licenses/by/4.0/
- **Super Foley Pack** (stop, hit, swing, dodge, block, fall, stun) — dklon. https://opengameart.org/content/super-foley-pack — CC BY 3.0
- **Coins Sounds** (coin) — Jesús Lastra (jalastram). https://opengameart.org/content/coins-sounds — CC BY 3.0

## 6. Аудио — сторонние материалы CC0 (атрибуция не обязательна, указана добровольно)

Лицензия: CC0 1.0 https://creativecommons.org/publicdomain/zero/1.0/

- The Cynic Project (cynicmusic.com, pixelsphere.org) — Calm Ambient 1 (menu), Calm Relax 1 (home), Calm Ambient 2 (hospital_music)
- Tsorthan Grove — Streets After Midnight (street_night)
- Kilua Boy — Through Fire (violin)
- Julie Damsgaard / Spring Spring / Spring Enterprises — Slow Piano Intermission (indoor)
- Bashar3A (skirmish.io) — Mild Wind Background Noise (wind)
- IgnasD — High traffic road sounds (street)
- Corsica_S, извлёк Iwan Gabovitch (qubodup) — 42 Snow and Gravel Footsteps (step_snow)
- qubodup (Iwan Gabovitch) — Door Open, Door Close Set (door_open, door_close); Button Click Sound Effect (click, hover, menu_close)
- GboxMikeFozzy — Footsteps (step_concrete)
- Scribe и qubodup — Click UI Menu SFX (select, error, quest_fail, save); оригинал — SuperTuxKart sound effects, лицензию первоисточника подтвердить отдельно
- OwlishMedia (Owlstorm) — Sound Effects Pack (step_run, breath, hurt, pickup, use, inventory, quest_start, quest_done, menu_open)

Страницы-источники и сопоставление по файлам: `public/assets/audio/CREDITS.md`, `docs/AUDIO_ASSETS_LICENSES.md`. Страницы OpenGameArt в проверке ТЗ №2 открыть не удалось (HTTP 403), сведения по записям проекта — перед релизом перепроверить.

## 7. Программные библиотеки

| Библиотека | Версия | Лицензия | Текст лицензии в сборке |
|---|---|---|---|
| Phaser | ^3.80.1 (Richard Davey, Phaser Studio Inc.) | MIT | `licenses/phaser-MIT.txt` |
| Vite (сборка; код в игру не входит, кроме служебных вставок) | ^5.4.0 | MIT | `licenses/vite-MIT.txt` |
| Howler.js | ^2.2.4 | MIT | `licenses/howler-MIT.txt` |

Howler указан в зависимостях, но игровым кодом не импортируется. Остальные пакеты в `package-lock.json` — dev-зависимости сборки (MIT, ISC, BSD-3-Clause).

## 8. Что требует решения владельца до релиза

1. Прослушать все 54 аудиофайла (особенно 14 оригинальных).
2. Заменить или подтвердить `favicon.ico` (UNKNOWN).
3. Перепроверить страницы OpenGameArt и лицензию первоисточника «Click UI Menu SFX».
