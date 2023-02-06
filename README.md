# Работа с гитом

## Базовые принципы

### Создание коммитов
- Один коммит - одна фича
- Имя коммита должно отображать изменения в коде
- Имя коммита должно быть лаконичным
- Для более подробного описания можно использовать блок описания коммита

### Работа с ветками
- Одна ветка - одна задача
- Не меняем главную ветку напрямую, все изменения через пулл реквесты
- Имя ветки отражает суть задачи

## Базовые команды

### Работа с коммитами и удаленным репозиторием

- `git add fileNames` - добавляет файлы для коммита
- `git comit -m 'message'` - коммит добавленные файлы с сообщением
- `git fetch` - запрашивает информацию о ветках с удаленного репозитория
- `git push` - отправляет данные на удаленный репозиторий
- `git pull` - получает данные с удаленного репозитория

### Работа с ветками

- `git checkout name` - переключамся на существующую ветку
- `git checkout -b name` - создаем новую ветку и переключаемся на нее
- `git branch` - получаем список доступных веток
- `git merge name` - запускает процесс слияния двух веток
- `git merge --continue` - продолжает процесс слияния после разрешения мердж конфликтов
- `git merge --abort` - сбрасывает прогресс слияния веток


