const button = document.querySelector(".btn");
const par = document.querySelector(".par");
const text = [
  "Нет греха, кроме глупости",
  "Трудно избежать будущего",
  "У меня очень непритязательный вкус — достаточно самого лучшего.",
  "Очень опасно встретить женщину, которая полностью тебя понимает. Это обычно кончается женитьбой. ",
  "Мужчин можно анализировать и обсуждать, женщин же только обожать.",
  "Самая обыкновенная безделица приобретает удивительный интерес, как только начинаешь скрывать её от людей.",
  "Влюбленность начинается с того, что человек обманывает себя, а кончается тем, что он обманывает другого. Это и принято называть романом.",
  "Мужчины всегда хотят быть первой любовью женщины. Женщины мечтают быть последним романом мужчины.",
  "Единственный способ отделать от искушения — уступить ему.",
  "Всякое желание, которое мы стараемся подавить, бродит в нашей душе и отравляет нас.",
  "Грех, совершенный однажды с содроганием, мы повторяем в жизни много раз — но уже с удовольствием.",
  "Мы не выносим людей с теми же недостатками, что у нас.",
  "Весь мир — театр, но труппа никуда не годится.",
  "Абсурдно делить людей на хороших и плохих. Люди бывают или забавные, или занудные.",
  "Ты любишь всех, а любить всех — значит не любить никого. Тебе все одинаково безразличны.",
  "Мужчины женятся от усталости, женщины выходят замуж из любопытства. И тем и другим брак приносит разочарование.",
  "Будь собой. Прочие роли уже заняты.",
  "Душу лучше всего лечить ощущениями, а от ощущений лечит только душа.",
  "Между капризом и «вечной любовью» разница только та, что каприз длится несколько дольше.",
  "Цель жизни — самовыражение. Проявить во всей полноте свою сущность — вот для чего мы живем.",
  "Я вовсе не хочу знать, что говорят за моей спиной, — я и без того о себе достаточно высокого мнения.",
  "Я могу устоять перед чем угодно, кроме соблазна.",
  "Всё, что есть прекрасного в этой жизни, либо аморально, либо незаконно, либо приводит к ожирению."
];

button.addEventListener('click', ()=>{
    let index=Math.floor(Math.random()*text.length);
    let textRandom=text[index];
    par.style.display='block';
    par.textContent=textRandom;
})
