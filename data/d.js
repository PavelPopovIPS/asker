const data = [
    { 'q': '1. Из шерсти какого животного обычно делают смычок для скрипки?', 'a': 'Из конского волоса.' },
    { 'q': '2. Сколько планет в нашей Солнечной системе?', 'a': 'Восемь.' },
    { 'q': '3. Какое самое быстрое наземное животное?', 'a': 'Гепард.' },
    { 'q': '4. Какая страна является домом для кенгуру?', 'a': 'Австралия.' },
    { 'q': '5. Какой процент поверхности Земли занимает вода?', 'a': 'Более 71%.' },
    { 'q': '6. Как зовут принцессу из "Принцессы и лягушки"?', 'a': 'Тиана.' },
    { 'q': '7. Сколько лет Джинн просидел в лампе, прежде чем его нашел Аладдин?', 'a': '10 000 лет.' },
    { 'q': '8. Сколько пар крыльев у пчел?', 'a': 'Две.' },
    { 'q': '9. Кто написал «Гамлета»?', 'a': 'Уильям Шекспир.' },
    { 'q': '10. Какой супергерой может карабкаться по стенам и зданиям?', 'a': 'Человек-паук.' },
    { 'q': '11. Какая планета в нашей Солнечной системе известна наличием колец?', 'a': 'Сатурн.' },
    { 'q': '12. Какой певческий голос самый высокий: сопрано, тенор или баритон?', 'a': 'Сопрано.' },
    { 'q': '13. Если вы страдаете арахнофобией, какого животного вы боитесь?', 'a': 'Пауков.' },
    { 'q': '14. Что значит "Акуна Матата"?', 'a': 'Не волнуйся/Никаких проблем.' },
    { 'q': '15. Сколько длится футбольный матч?', 'a': '90 минут.' },
    { 'q': '16. Кто злодей в «101 далматинце»?', 'a': 'Круэлла де Виль.' },
    { 'q': '17. Сколько может весить синий кит?', 'a': 'Свыше 200 тонн.' },
    { 'q': '18. Какое единственное наземное животное не умеет прыгать?', 'a': 'Слон.' },
    { 'q': '19. Какое животное может поднять вес, в 50 раз превышающий его собственный вес?', 'a': 'Муравей.' },
    { 'q': '20. Какой знаменитый музыкант сочинил «Волшебную флейту»?', 'a': 'Моцарт.' },
    { 'q': '21. В какой стране зародились Олимпийские игры?', 'a': 'В Греции.' },
    { 'q': '22. Из чего сделана туфелька Золушки?', 'a': 'Из хрусталя.' },
    { 'q': '23. Какая религия ассоциируется с Пасхой?', 'a': 'Христианство.' },
    { 'q': '24. Как называются семена, из которых делают шоколад?', 'a': 'Какао-бобы.' },
    { 'q': '25. Сколько ног у паука?', 'a': 'Восемь.' },
    { 'q': '26. Какого цвета изумруд?', 'a': 'Зеленого.' },
    { 'q': '27. Какой американский штат известен Голливудом?', 'a': 'Калифорния.' },
    { 'q': '28. К какому виду рыб относится рыбка Немо?', 'a': 'Рыба-клоун.' },
    { 'q': '29. Где находится Великая пирамида Гизы?', 'a': 'В Египте.' },
    { 'q': '30. Сколько дней в году?', 'a': '365.' },
    { 'q': '31. Почему вещи падают, когда вы их роняете?', 'a': 'Из-за гравитации.' },
    { 'q': '32. Какое самое большое млекопитающее в мире?', 'a': 'Кит.' },
    { 'q': '33. В какой столице Европы находится Эйфелева башня?', 'a': 'В Париже.' },
    { 'q': '34. Какое животное самое высокое в мире?', 'a': 'Жираф.' },
    { 'q': '35. Как называется ученый, изучающий горные породы?', 'a': 'Геолог.' },
    { 'q': '36. Сколько континентов в мире?', 'a': 'Семь.' },
    { 'q': '37. Какие две планеты в нашей Солнечной системе начинаются с буквы М?', 'a': 'Марс и Меркурий.' },
    { 'q': '38. Сколько костей у акул?', 'a': 'Ноль.' },
    { 'q': '39. Назовите ближайшую к Земле звезду?', 'a': 'Солнце.' },
    { 'q': '40. Кто нарисовал Мону Лизу?', 'a': 'Леонардо да Винчи.' },
    { 'q': '41. Какой знаменитый океанский лайнер затонул во время своего первого рейса в 1912 году?', 'a': '«Титаник».' },
    { 'q': '42. Из какого фильма принцесса Фиона?', 'a': '«Шрек».' },
    { 'q': '43. Какая самая высокая гора в мире?', 'a': 'Эверест.' },
    { 'q': '44. В какую игру играют на Уимблдоне?', 'a': 'В теннис.' },
    { 'q': '45. Что за гонка Тур де Франс?', 'a': 'Велогонка.' },
    { 'q': '46. Химическое вещество хлорид натрия более широко известно как что?', 'a': 'Соль.' },
    { 'q': '47. Как обычно называют сушеный виноград?', 'a': 'Изюм.' },
    { 'q': '48. Какое самое холодное место в мире?', 'a': 'Антарктида.' },
    { 'q': '49. Какая пища отпугивает вампиров?', 'a': 'Чеснок.' },
    { 'q': '50. Из чего состоят облака?', 'a': 'Из воды.' },
    { 'q': '51. Какова химическая формула воды?', 'a': 'Н2О.' },
    { 'q': '52. Как называют человека, изучающего животных?', 'a': 'Зоолог.' },
    { 'q': '53. Как называют человека, изучающего растения?', 'a': 'Ботаник.' },
    { 'q': '54. Кого считают королем поп-музыки?', 'a': 'Майкла Джексона.' },
    { 'q': '55. Как зовут игрушечного ковбоя из "Истории игрушек"?', 'a': 'Вуди.' },
    { 'q': '56. Как называется место, куда ты идешь, чтобы увидеть много животных?', 'a': 'Зоопарк.' },
    { 'q': '57. Если заморозить воду, что получится?', 'a': 'Лед.' },
    { 'q': '58. Какая кошка считается приносящей несчастья?', 'a': 'Черная.' },
    { 'q': '59. Как зовут пирата из "Питера Пэна"?', 'a': 'Капитан Крюк.' },
    { 'q': '60. Каким животным был Абу в «Аладдине»?', 'a': 'Обезьяной.' },
    { 'q': '61. Что противоположно понятию «дешево»?', 'a': 'Дорого.' },
    { 'q': '62. Что могло сделать Гарри Поттера невидимым?', 'a': 'Плащ-невидимка.' },
    { 'q': '63. Какую пищу едят панды?', 'a': 'Бамбук.' },
    { 'q': '64. На каком дереве растут желуди?', 'a': 'На дубе.' },
    { 'q': '65. Как называется колокол часов Вестминстерского дворца в Лондоне?', 'a': 'Биг-Бен.' },
    { 'q': '66. Из плодов какого дерева делают чернослив?', 'a': 'Слива.' },
    { 'q': '67. Как называется детёныш овцы?', 'a': 'Ягненок.' },
    { 'q': '68. Сколько братьев было у царя Давида?', 'a': 'Семь.' },
    { 'q': '69. Сколько заповедей в Ветхом Завете?', 'a': '613.' },
    { 'q': '70. Кто построил ковчег?', 'a': 'Ной.' },
    { 'q': '71. Какого цвета костюм Санты?', 'a': 'Красного.' },
    { 'q': '72. Что Санта использует для доставки подарков?', 'a': 'Сани.' },
    { 'q': '73. Какую планету часто называют планетой-сестрой Земли?', 'a': 'Венера.' },
    { 'q': '74. Какой газ необходим человеку для дыхания?', 'a': 'Кислород.' },
    { 'q': '75. Как называется слой, защищающий Землю от вредных лучей?', 'a': 'Озон.' },
    { 'q': '76. У какой диснеевской принцессы рыжие волосы и она русалка?', 'a': 'У Ариэль.' },
    { 'q': '77. Кто является модельером в «Суперсемейке»?', 'a': 'Эдна Мод.' },
    { 'q': '78. Сколько лет Крашу из «В поисках Немо»?', 'a': '150.' },
    { 'q': '79. Как называются животные без позвоночника?', 'a': 'Беспозвоночные.' },
    { 'q': '80. Какой самый внешний слой Земли?', 'a': 'Кора.' },
    { 'q': '81. Как зовут Спящую красавицу?', 'a': 'Аврора.' },
    { 'q': '82. В какой день недели празднуют Пасху?', 'a': 'В воскресенье.' },
    { 'q': '83. У какого единственного плода семена расположены на внешней кожуре?', 'a': 'У клубники.' },
    { 'q': '84. Каким витамином богаты апельсины?', 'a': 'Витамином С.' },
    { 'q': '85. Какое липкое и сладкое вещество производят пчелы?', 'a': 'Мед.' },
    { 'q': '86. Сколько струн у скрипки?', 'a': 'Четыре.' },
    { 'q': '87. Какой ударный инструмент назван в честь его формы?', 'a': 'Треугольник.' },
    { 'q': '88. Что забивают молотком?', 'a': 'Гвоздь.' },
    { 'q': '89. Чей нос становился длиннее каждый раз, когда он лгал?', 'a': 'Пиноккио.' },
    { 'q': '90. Согласно книге Доктора Сьюза, кто украл Рождество?', 'a': 'Гринч.' },
    { 'q': '91. Когда отмирают листья?', 'a': 'Осенью.' },
    { 'q': '92. Что такое бронтозавр?', 'a': 'Динозавр.' },
    { 'q': '93. Как зовут любимую сову Гарри Поттера?', 'a': 'Хедвиг.' },
    { 'q': '94. Какое самое медленное животное?', 'a': 'Трехпалый ленивец.' },
    { 'q': '95. Какого цвета смурфики?', 'a': 'Голубого.' },
    { 'q': '96. Кто напарник Бэтмена по борьбе с преступностью?', 'a': 'Робин.' },
    { 'q': '97. Как называется расплавленная порода после извержения вулкана?', 'a': 'Лава.' },
    { 'q': '98. Как называется группа звезд, образующих «картинку»?', 'a': 'Созвездие.' },
    { 'q': '99. Как называется воображаемая линия, соединяющая северный и южный полюса?', 'a': 'Нулевой меридиан.' },
    { 'q': '100. Из чего состоит сердцевина мяча для гольфа?', 'a': 'Из резины.' }
]

const errorMessages = [
    { code: '500', text: 'Ой, что-то произошло на сервере.', color: 'red' },
    { code: '400', text: 'Неправильный запрос.', color: '#ffc107' },
]