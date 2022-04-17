// открытие меню бублика
const menu = document.getElementById('menu-toggle-nav');
menu.addEventListener('click', function() {
	const box = document.querySelector('.menu-box');
	box.style.visibility = (box.style.visibility == 'visible') ? 'hidden' : 'visible';
})


// закрытие меню бублика после нажатия на строки меню
const items = document.querySelectorAll('.menu-item');
items.forEach(el => el.addEventListener('click', function() {
	document.querySelector('.menu-box').style.visibility = 'hidden';
	document.getElementById('menu-toggle-nav').checked = false;
}))

// const
let arrName = ['Fata Morgana', 'Город под подошвой', 'Кто убил Марка', 'Биполярочка', 'Что такое империя', 'Сказка о потерянном времени', 'Мне скучно жить', 'В книге всё было по-другому', 'Earth Burns', 'Горсвет', 'В долгий путь', 'Что такое BEEF', 'Tabasco', 'Ветер перемен', 'HPL', 'Под дождём', 'Дело нескольких минут',];
let arrSingles = [0,1,2,3,4];
refreshSingles();
const audio = new Audio();


// обновление синглов
function refreshSingles() {

  for (i=0; i<5; i++) {

    let singles_img = document.querySelector('.singles_img' + i);
	 let singles_title = document.querySelector('.singles_title' + i);

    if (singles_img != null) {
    	console.log(i, arrSingles[i], arrName[arrSingles[i]])
      singles_img.src = 'img/Singles/' + arrName[arrSingles[i]] + '.jpg';
      singles_img.alt = arrName[arrSingles[i]];
      singles_title.innerHTML = arrName[arrSingles[i]];
    }
  }
}

// Запуск песен
const playBtns = document.querySelectorAll('.popular_item');
playBtns.forEach(el => el.addEventListener('click', function() {
	audio.src = `img/Music/${el.id}.mp3`;
	audio.play();

	let activeFlag = el.classList.contains("active");
	document.querySelectorAll('.popular_item').forEach(ell => ell.classList.remove("active"));
	if (activeFlag) {audio.pause(); } 
	else {
		el.classList.add("active"); 
	}	
}))


// влево-вправо 2 кнопки
const circle = document.querySelectorAll('.svg_circle');
circle.forEach(el => el.addEventListener('click', function() {
    if (el.id == 'right') {arrSingles = arrSingles.map(el => (el<16) ? el+1 : 0);}
    if (el.id == 'left') {arrSingles = arrSingles.map(el => (el>0) ? el-1 : 16);}
    refreshSingles();
}))


// перевод русский-английский
const i18Obj = {
	'en': {
		'lng01': 'BIOGRAPHY',
		'lng02': 'ALBUMS',
		'lng03': 'MUSIC',
		'lng04': 'VIDEO',
		'lng05': 'SHOP',
		'lng06': 'SINGLES',
		'lng07': 'POPULAR TRACKS',

		'lng08': '    Childhood',
		'lng09': 'Creativity',
		'lng10': '    Battles',
		'lng11': 'Concerts',
		'lng12': '    Politics',
		'lng13': 'Awards',

		'lng14': 'Miron was born on January 31, 1985 in Leningrad. His father was a professor of physics, and his mother was a librarian. After 4 years of studying at a Leningrad school, their family moved to the German town of Ruttenscheid.<br><br>It was difficult for Miron, who found himself in a foreign environment without knowing German. It was rap that became the anchor of salvation, which helped the 13-year-old teenager overcome ridicule and bullying. He composed his first works under the pseudonym MC Myth.<br><br>At the age of 15, the guy changed his place of residence again - he moved to the English city of Slough. According to Miron, there were many drug addicts and outcasts among the local children.<br><br>It was the teacher who taught history there who noticed the guy is potential and insisted that he apply to Oxford. Miron chose the department of English literature and managed to enter. On the course, he was surrounded by native Englishmen from the "top of society".<br><br>In 2006, he was diagnosed with "bipolar disorder", as a result of which Myron was expelled from the university. He was able to recover and eventually graduated from Oxford, but the grades in the diploma were the lowest possible.<br><br>After graduation, Myron rented an apartment on the outskirts of London and tried to get a job, but it was difficult even for an Oxford graduate. As a result, he got a job at a construction site - this decision was not easy. Subsequently, he changed many professions - he worked as a tutor, guide, entertainer, worked in the office, unloaded trucks.',
		'lng15': 'In 2008, Miron began posting his demos on the Internet. By this time, he had adopted the pseudonym Oxxxymiron, which was a reference, firstly, to his real name, secondly, to the literary term "oxymoron", and the triple "x" referred to the generous use of obscene language in his tracks.<br> <br>Together with Schokk Miron created his own label "Vagabund" and released his first album - "Eternal Jew". After a skirmish with rapper Roma Zhigan, Shock left for Germany, and Oksimiron gave a free solo concert in Moscow and went to London.<br><br>In 2012, Miron presented the first mixtape "miXXXtape I" to fans, and a year later the following saw the light - "miXXXtape II: Long way home".<br><br>In 2015, he releases the album "Gorgorod". It was a complete conceptual work that tells the story of a writer named Mark.<br><br>In September 2017, the rapper broke a year and a half silence and presented a new track "Bipolarochka", which he wrote and recorded in one night. For two years, Oksimiron was the executive director of the Booking Machine label. <br><br>His story about emigration inspired Mikhail Idov to create the series "Londongrad". The rapper also wrote the title track "Londongrad", which sounded in the series. In 2019, Oksimiron took part in the filming of the documentary "BEEF: Russian hip-hop".<br><br>In November 2021, he released the first track after a long silence - a ten-minute confession "Who killed Mark?" the story of the beating of Zhigan. On December 1, Oksimiron presented a new album, Beauty and Ugliness, which included 22 new songs.',
		'lng16': 'On Versus battles, rappers Dunya, Krip-a-Krip, Johnnyboy became his opponents - and each time he won an unconditional victory, as the audience responded, “flawless victory”.<br><br>In June 2016, Versus Oxxxymiron vs ST took place , where Miron once again won. The video of their battle was posted on Youtube, and in just three days the number of views exceeded 5 million.<br><br>In August 2017, the long-awaited rap battle of Oksimiron vs MC Purulent (Glory to the CPSU) took place. According to the results of three rounds, all five judges voted for Purulent.<br><br>In October 2019, Oxxxymiron clashed with Dizaster. The opponents read in English.',
		'lng17': 'In 2016, Oxxxymiron held two big tours: "Takeover tour" and "Back to Europe Tour".<br><br>In October-December 2017, he held a tour of the cities of Russia.<br><br>In August 2018 and 2019 of the year, together with the Booking Machine label, they took part in the Booking Machine Festival concert.<br><br>At the beginning of 2022, Oksimiron is performances were to take place in Moscow and St. Petersburg. But due to the armed conflict in Ukraine, he canceled all concerts. In the spring he held 3 concerts of "RUSSIANS AGAINT WAR" in Istanbul, London and Berlin.',
		'lng18': 'Oksimiron is active in the opposition. In July-August 2019, the rapper publicly supported a series of protests in the wake of the exclusion of independent candidates for elections to the Moscow City Duma.<br><br>In 2022, he expressed his disagreement with the authorities in Russia and went to rallies against the war in Ukraine.<br><br>For 3 concerts "RAW" collected $195.000 with tickets and donations to help Ukrainians.',
		'lng19': 'Winner of the "GQ Man of the Year 2012" award in the "Discovery of the Year" nomination.<br><br>Winner in public voting Hip-hop.ru Award:<br>2009 - "Discovery of the Year", "Best Demo Music Track" , "Best MC of the 14th Independent Battle", "Battle Breakthrough", "Best Battle Track", "Best Battle Sparring"<br>2011 - "Best Album", "Best Demo Music Track"<br>2012 - Best Video, Artist of the Year, Event of the Year, Best Mixtape<br>2013 - Best Video, Artist of the Year, Best Mixtape<br><br>Public Vote Winner portal The Flow:<br>2015 - "Best domestic album", "Best Russian-language track", "Best Russian-language artist" <br>2021 - "Album of the year", "Track of the year", "Artist of the year"<br> <br>Award "Chartova Dozen" (2018) in the nomination "Best duet" (together with the Bi-2 group), etc.',
	},
	'ru' : {
		'lng01': 'БИОГРАФИЯ',
		'lng02': 'АЛЬБОМЫ',
		'lng03': 'МУЗЫКА',
		'lng04': 'КЛИПЫ',
		'lng05': 'МАГАЗИН',
		'lng06': 'CИНГЛЫ',
		'lng07': 'ТРЭКИ',

		'lng08': '    Детство',
		'lng09': 'Творчество',
		'lng10': '    Батлы',
		'lng11': 'Концерты',
		'lng12': '    Политика',
		'lng13': 'Награды',

		'lng14': 'Мирон родился 31 января 1985 года в Ленинграде. Отец был профессором физики, а мать – библиотекарем. После 4 лет обучения в ленинградской школе их семья перебирается в немецкий городок Руттеншайд.<br><br>Оказавшемуся в чужой среде без знания немецкого языка Мирону было сложно. Именно рэп стал тем якорем спасения, который помог 13-летнему подростку преодолеть насмешки и издевательства. Первые работы он сочинял под псевдонимом MC Миф.<br><br>В 15 лет парень вновь поменял место жительства – переехал в английский город Слау. По воспоминаниям Мирона, среди местных ребят было много наркоманов и маргиналов.<br><br>Именно учительница, преподававшая там историю, заметила потенциал парня и настояла, чтобы он подал заявку в Оксфорд. Мирон выбрал факультет английской литературы и сумел поступить. На курсе его окружали коренные англичане из «верхушки общества».<br><br>В 2006 году ему диагностировали «биполярное расстройство», в результате чего Мирон был исключен из университета. Он смог восстановиться и в итоге окончил Оксфорд, однако оценки в дипломе были самыми низкими из возможных.<br><br>После выпуска Мирон снял квартиру на окраине Лондона и попытался устроиться на работу, однако это было сложно даже для выпускника Оксфорда. В результате он устроился на стройку – это решение далось нелегко. Впоследствии он сменил немало профессий – подрабатывал репетитором, гидом, конферансье, трудился в офисе, разгружал фуры.',
		'lng15': 'В 2008 году Мирон начал выкладывать в интернет свои демо-записи. К этому времени он взял псевдоним Oxxxymiron, что являлось отсылкой, во-первых, к его настоящему имени, во-вторых, к литературному термину «оксюморон», а утроенное «x» отсылало к щедрому использованию нецензурной лексики в его треках.<br><br>Вместе с Schokk Мирон создал собственный лейбл «Vagabund» и выпустил свой первый альбом – «Вечный жид». После стычки с рэпером Ромой Жиганом Шок уехал в Германию, а Оксимирон дал бесплатный сольный концерт в Москве и  отправился в Лондон.<br><br>В 2012 году Мирон представил поклонникам первый микстейп «miXXXtape I», а год спустя свет увидел следующий – «miXXXtape II: Долгий путь домой».<br><br>В 2015 году выпускает альбом «Горгород». Это было законченное концептуальное произведение, рассказывающее историю писателя по имени Марк.<br><br>В сентябре 2017 года рэпер прервал полуторагодовое молчание и представил новый трек «Биполярочка», который написал и записал за одну ночь. В течение двух лет Оксимирон был исполнительным директором лейбла Booking Machine. <br><br>Его история об эмиграции вдохновила Михаила Идова на создание сериала "Лондонград". Рэпер же написал заглавную композицию "Лондонград", которая звучала в сериале. В 2019 году Оксимирон принял участие в съемках документального фильма "BEEF: Русский хип-хоп".<br><br>В ноябре 2021 года он выпустил первый после долгого молчания трек – десятиминутную исповедь «Кто убил Марка?», в которой вновь вспомнил историю с избиением Жиганом. 1 декабря Оксимирон представил новый альбом «Красота и уродство», куда вошли 22 новых песни.',
		'lng16': 'На Versus-батлах его противниками становились рэперы Дуня, Крип-а-Крип, Johnnyboy – и каждый раз он одерживал безоговорочную победу, как отзывались зрители, «flawless victory».<br><br>В июне 2016 года состоялся Versus Oxxxymiron vs ST, где Мирон в очередной раз одержал победу. Видео их баттла было выложено на Youtube, и всего за три дня количество просмотров превысило 5 миллионов.<br><br>В августе 2017 года состоялся долгожданный рэп-баттл Оксимирона vs MC Гнойный (Слава КПСС). По итогам трех раундов все пятеро судей отдали голос за Гнойного.<br><br>В октябре 2019 года Oxxxymiron схлеснулся с Dizaster. Соперники читали на английском языке.',
		'lng17': 'В 2016 году Oxxxymiron провел два больших тура: «Takeover tour» и «Back to Europe Tour».<br><br>В октябре-декабре 2017 года провёл тур по городам России.<br><br>В августе 2018 и 2019 года вместе с лейблом Booking Machine поучаствовали в концерте «Booking Machine Festival».<br><br>В начале 2022 года должны были пройти выступления Оксимирона в Москве и Петербурге. Но из-за вооруженного конфликта на Украине он отменил все концерты. Весной провёл 3 концерта «RUSSIANS AGAINT WAR» в Стамбуле, Лондоне и Берлине.',
		'lng18': 'Оксимирон ведет активную оппозиционную деятельность. В июле-августе 2019 года рэпер публично поддержал серию протестов на волне недопущения независимых кандидатов на выборы в Мосгордуму.<br><br>В 2022 году высказывал своё несогласие с властью в России и выходил на митинги против войны в Украине.<br><br>За 3 концерта «RAW» собрали билетами и донатами 195.000$ на помощь украинцам.',
		'lng19': 'Обладатель премии «Человек года GQ 2012» в номинации «Открытие года».<br><br>Победитель в общественных голосованиях Hip-hop.ru Award:<br>2009 год - «Открытие года», «Лучший трек демо-музыки», «Лучший МС 14-го независимого баттла», «Прорыв баттла», «Лучший трек баттла», «Лучший спарринг баттла»<br>2011 год - «Лучший альбом», «Лучший трек демо-музыки»<br>2012 год - «Лучшее видео», «Исполнитель года», «Событие года», «Лучший mixtape»<br>2013 год - «Лучшее видео», «Исполнитель года», «Лучший mixtape»<br><br>Победитель в общественных голосованиях портала The Flow:<br>2015 год - «Лучший отечественный альбом», «лучший русскоязычный трек», «лучший русскоязычный артист» <br>2021 год - «Альбом года», «трек года», «артист года»<br><br>Премия «Чартова Дюжина» (2018) в номинации «Лучший дуэт» (вместе с группой Би-2) и др.',
	}
}

  const ru = document.getElementById("switch-ru");

  ru.addEventListener('click', function() {
		document.getElementById("ru").style.color = "#fff";
		document.getElementById("en").style.color = "#9c9c9c";
		
		document.querySelectorAll("*").forEach(el => (el.classList.forEach((ell) => ell in i18Obj["en"] ? el.innerHTML = String(i18Obj["ru"][ell]) : true))); 
  }) 


   const en = document.getElementById("switch-en");
 
	en.addEventListener('click', function() {
		document.getElementById("en").style.color = "#fff";
		document.getElementById("ru").style.color = "#9c9c9c";

		document.querySelectorAll("*").forEach(el => (el.classList.forEach((ell) => ell in i18Obj["en"] ? el.innerHTML = String(i18Obj["en"][ell]) : true))); 
  })  