# Biuro Postępowań Towarzyskich (BPT)

Aplikacja webowa (PWA) przeciwko krępującej ciszy. Fikcyjny urząd prowadzi
„postępowania" w sprawach nawiązywania rozmowy między dwiema osobami.
Działa w pełni offline, bez żadnego backendu i bez łączności między telefonami —
dwa urządzenia synchronizują się wyłącznie przez wspólną sygnaturę sprawy
(deterministyczny generator losowości).

## Pliki

- `index.html` — cała aplikacja: wygląd, logika i bank ponad 150 pytań
- `manifest.webmanifest` — manifest PWA (instalacja jako ikonka na telefonie)
- `sw.js` — service worker (pełne działanie offline)
- `icon.svg` — pieczęć BPT (ikona aplikacji)

## Jak opublikować na GitHub Pages (krok po kroku)

1. Załóż na GitHubie nowe repozytorium, np. o nazwie `bpt` (publiczne).
2. Wgraj do niego wszystkie pliki z tego folderu (można przez stronę GitHuba:
   **Add file → Upload files**, przeciągnij pliki i kliknij **Commit changes**).
3. W repozytorium wejdź w **Settings → Pages**.
4. W sekcji **Build and deployment** wybierz: Source = **Deploy from a branch**,
   Branch = **main**, folder **/ (root)**. Zapisz.
5. Po chwili aplikacja będzie dostępna pod adresem
   `https://TWOJA-NAZWA.github.io/bpt/`.

## Jak zainstalować na telefonie

Otwórz adres aplikacji w przeglądarce na telefonie, a następnie:

- **Android (Chrome):** menu ⋮ → „Dodaj do ekranu głównego" / „Zainstaluj aplikację"
- **iPhone (Safari):** przycisk udostępniania → „Dodaj do ekranu początkowego"

Po pierwszym otwarciu aplikacja działa również bez internetu.

## Jak grać (w skrócie)

1. Dwie osoby uzgadniają **ustnie** sygnaturę sprawy, np. `3-17`
   (kategoria 1–5 oraz dowolna liczba 01–99).
2. Każda wpisuje tę samą sygnaturę na swoim telefonie.
3. Jedna wybiera rolę **strony indagującej** (pyta), druga — **indagowanej**
   (odpowiada). Wybór dotyczy tylko pierwszego pytania.
4. Ta sama sygnatura daje identyczną kolejność pytań na obu telefonach.
5. Po każdym pytaniu role zamieniają się **automatycznie** (dialogowy ping-pong):
   kto odpowiadał, ten zadaje następne pytanie.
6. W toku sprawy można zmienić sygnaturę („Zmiana sygnatury sprawy" pod pytaniem) —
   obie osoby uzgadniają nową ustnie i wpisują ją u siebie, po czym na nowo
   wskazują role.
7. Gdy liczniki się rozjadą — „Sprostowanie omyłki pisarskiej" pozwala
   ręcznie ustawić numer pytania i rolę.

Tryb awaryjny na jeden telefon: **„Wniosek w trybie pilnym"** na ekranie startowym.
