// Baza danych dla Nadprzestrzeni Filmowej

export const katalogFilmow = [
    {
        id: 1,
        tytul: "Blade Runner 2049",
        kategoria: "cyberpunk",
        rok: "2017",
        ocena: "8.0/10",
        opis: "Oficer K odkrywa długo skrywaną tajemnicę, która może pogrążyć resztki społeczeństwa w chaosie.",
        zdjecie: "zdjecia/blade-runner.jpg"
    },
    {
        id: 2,
        tytul: "Interstellar",
        kategoria: "hard-scifi",
        rok: "2014",
        ocena: "8.3/10",
        opis: "Grupa naukowców wyrusza w podróż przez tunel czasoprzestrzenny, szukając nowego domu dla ludzkości.",
        zdjecie: "zdjecia/interstellar.jpg"
    },
    {
        id: 3,
        tytul: "Gwiezdne Wojny: Nowa Nadzieja",
        kategoria: "space-opera",
        rok: "1977",
        ocena: "8.0/10",
        opis: "Młody Luke Skywalker dołącza do Rebeliantów, aby stawić czoła złowrogiemu Imperium.",
        zdjecie: "zdjecia/star-wars.jpg"
    },
    {
        id: 4,
        tytul: "Nowy Początek (Arrival)",
        kategoria: "first-contact",
        rok: "2016",
        ocena: "7.8/10",
        opis: "Językoznawca próbuje porozumieć się z obcymi, których statki wylądowały na Ziemi.",
        zdjecie: "zdjecia/arrival.jpg"
    },
    {
        id: 5,
        tytul: "Matrix",
        kategoria: "cyberpunk",
        rok: "1999",
        ocena: "8.1/10",
        opis: "Haker Neo dowiaduje się, że świat, w którym żyje, jest wirtualną symulacją stworzoną przez maszyny.",
        zdjecie: "zdjecia/matrix.jpg"
    },
    {
        id: 6,
        tytul: "Diuna: Część Druga",
        kategoria: "space-opera",
        rok: "2024",
        ocena: "8.5/10",
        opis: "Paul Atryda jednoczy siły z Fremenami, szukając zemsty na spiskowcach, którzy zniszczyli jego rodzinę.",
        zdjecie: "zdjecia/dune2.jpg"
    },
    {
        id: 7,
        tytul: "Marsjanin",
        kategoria: "hard-scifi",
        rok: "2015",
        ocena: "7.9/10",
        opis: "Astronauta zostaje uznany za zmarłego i porzucony na Marsie przez swoją załogę. Musi przetrwać.",
        zdjecie: "zdjecia/marsjanin.jpg"
    },
    {
        id: 8,
        tytul: "Bliski kontakt trzeciego stopnia",
        kategoria: "first-contact",
        rok: "1977",
        ocena: "7.4/10",
        opis: "Pracownik kabenergetyczny doświadcza spotkania z niezidentyfikowanym obiektem latającym.",
        zdjecie: "zdjecia/close-encounters.jpg"
    },
    {
        id: 9,
        tytul: "Ghost in the Shell",
        kategoria: "cyberpunk",
        rok: "1995",
        ocena: "8.0/10",
        opis: "Cyborg-policjantka ściga tajemniczego haker-a zwanego Władcą Marionetek.",
        zdjecie: "zdjecia/gits.jpg"
    },
    {
        id: 10,
        tytul: "Odyseja kosmiczna",
        kategoria: "hard-scifi",
        rok: "1968",
        ocena: "8.2/10",
        opis: "Ludzkość wpada na trop tajemniczego monolitu ukrytego pod powierzchnią Księżyca.",
        zdjecie: "zdjecia/odyssey.jpg"
    },
    {
        id: 11,
        tytul: "Star Trek",
        kategoria: "space-opera",
        rok: "2009",
        ocena: "7.5/10",
        opis: "Załoga statku USS Enterprise wyrusza w podróż pełną niebezpieczeństw pod wodzą młodego Kirka.",
        zdjecie: "zdjecia/star-trek.jpg"
    },
    {
        id: 12,
        tytul: "Dzień Niepodległości",
        kategoria: "first-contact",
        rok: "1996",
        ocena: "7.1/10",
        opis: "Ziemia staje w obliczu inwazji obcych posiadających gigantyczną przewagę technologiczną.",
        zdjecie: "zdjecia/independence-day.jpg"
    }
];

export const postacieSF = [
    {
        id: 1,
        imie: "Ellen Ripley",
        zrodlo: "Obcy",
        opis: "Twarda oficer, symbol walki z ksenomorfami.",
        zdjecie: "zdjecia/postac-ripley.jpg"
    },
    {
        id: 2,
        imie: "Darth Vader",
        zrodlo: "Gwiezdne Wojny",
        opis: "Mroczny Lord Sithów, potężny władca Mocy.",
        zdjecie: "zdjecia/postac-vader.jpg"
    },
    {
        id: 3,
        imie: "Neo",
        zrodlo: "Matrix",
        opis: "Wybraniec, który odkrył prawdę o symulacji.",
        zdjecie: "zdjecia/postac-neo.jpg"
    },
    {
        id: 4,
        imie: "Spock",
        zrodlo: "Star Trek",
        opis: "Logiczny oficer naukowy z rasy Wulkanian.",
        zdjecie: "zdjecia/postac-spock.jpg"
    },
    {
        id: 5,
        imie: "Rick Deckard",
        zrodlo: "Blade Runner",
        opis: "Łowca androidów tropiący zbuntowane replikanty.",
        zdjecie: "zdjecia/postac-deckard.jpg"
    },
    {
        id: 6,
        imie: "Sarah Connor",
        zrodlo: "Terminator",
        opis: "Matka przyszłego lidera opozycji przeciwko maszynom.",
        zdjecie: "zdjecia/postac-sarah.jpg"
    },
    {
        id: 7,
        imie: "Han Solo",
        zrodlo: "Gwiezdne Wojny",
        opis: "Przemytnik o złotym sercu i kapitan Sokoła Millenium.",
        zdjecie: "zdjecia/postac-hansolo.jpg"
    },
    {
        id: 8,
        imie: "Terminator T-800",
        zrodlo: "Terminator",
        opis: "Elektroniczny zabójca wysłany z przyszłości.",
        zdjecie: "zdjecia/postac-terminator.jpg"
    },
{
        id: 9,
        imie: "Optimus Prime",
        zrodlo: "Transformers",
        opis: "Szlachetny lider Autobotów, walczący o wolność we wszechświecie i obronę Ziemi.",
        zdjecie: "zdjecia/postac-optimus.jpg"
    },
    {
        id: 10,
        imie: "Ksenomorf",
        zrodlo: "Obcy",
        opis: "Perfekcyjny organizm drapieżny z kosmosu.",
        zdjecie: "zdjecia/postac-alien.jpg"
    },
    {
        id: 11,
        imie: "Doctor Who",
        zrodlo: "Doktor Who",
        opis: "Władca Czasu podróżujący w TARDIS przez epoki.",
        zdjecie: "zdjecia/postac-doctor.jpg"
    },
    {
        id: 12,
        imie: "Wall-E",
        zrodlo: "WALL·E",
        opis: "Mały robot sprzątający, który odmienił losy ludzi.",
        zdjecie: "zdjecia/postac-walle.jpg"
    }
];

export const nadchodzacePremiery = [
    {
        id: 1,
        tytul: "Godzilla Minus Zero",
        data: "Premiera: 2026",
        opis: "Kolejna odsłona kultowej japońskiej serii o potężnym gigancie, powracająca do mrocznych i katastroficznych korzeni.",
        zdjecie: "zdjecia/premiera-1.jpg"
    },
    {
        id: 2,
        tytul: "Ray Gunn",
        data: "Premiera: 2027",
        opis: "Epicka animowana opowieść w stylistyce noir science-fiction, śledząca losy prywatnego detektiva w retro-futurystycznym świecie.",
        zdjecie: "zdjecia/premiera-2.jpg"
    },
    {
        id: 3,
        tytul: "Dune: Part Three",
        data: "Premiera: 2026",
        opis: "Domknięcie monumentalnej trylogii Denisa Villeneuve'a, adaptujące wydarzenia z powieści 'Mesjasz Diuny'.",
        zdjecie: "zdjecia/premiera-3.jpg"
    },
    {
        id: 4,
        tytul: "Star Wars: Starfighter",
        data: "Premiera: W produkcji",
        opis: "Nowe kosmiczne widowisko osadzone w uniwersum Gwiezdnych Wojen, skupiające się na elitarnych bitwach gwiezdnych myśliwców.",
        zdjecie: "zdjecia/premiera-4.jpg"
    },
    {
        id: 5,
        tytul: "Avengers: Secret Wars",
        data: "Premiera: Nadchodzi",
        opis: "Wielki finał Sagi Multiwersum w Kinowym Uniwersum Marvela, łączący bohaterów z różnych wymiarów w ostatecznym starciu.",
        zdjecie: "zdjecia/premiera-5.jpg"
    },
    {
        id: 6,
        tytul: "Spaceballs: The New One",
        data: "Premiera: 2027",
        opis: "Kultowa parodia kosmicznych oper powraca na wielkie ekrany z zupełnie nową porcją absurdalnego humoru Sci-Fi.",
        zdjecie: "zdjecia/premiera-6.jpg"
    },
    {
        id: 7,
        tytul: "Godzilla x Kong: Supernova",
        data: "Premiera: 2027",
        opis: "Kolejne starcie i współpraca najsłynniejszych tytanów MonsterVerse w obliczu kosmicznego zagrożenia.",
        zdjecie: "zdjecia/premiera-7.jpg"
    },
    {
        id: 8,
        tytul: "Razem we wszechświecie",
        data: "Premiera: 2027",
        opis: "Wzruszająca, kameralna opowieść o dwójce astronautów, których losy splatają się na stacji badawczej na orbicie.",
        zdjecie: "zdjecia/premiera-8.jpg"
    },
    {
        id: 9,
        tytul: "Above the Below",
        data: "Premiera: 2026",
        opis: "Trójka astronautów przeżywa niszczycielski powrót na Ziemię i odkrywa, że zostali odcięci od świata.",
        zdjecie: "zdjecia/premiera-9.jpg"
    }
];