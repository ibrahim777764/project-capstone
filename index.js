// eslint-disable-next-line no-unused-vars
const speakersContainer = document.getElementById('speakers');
// eslint-disable-next-line no-unused-vars
const data = [
  {
    id: 1,
    pic: './img/1.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Yochai Benkler',
    designation: 'Credited with creating the worlds first purpose-built motor car in 1886',
    history: 'n 1871, at the age of twenty-seven, Karl Benz joined August Ritter in launching the Iron Foundry and Mechanical Workshop in Mannheim, later renamed Factory for Machines for Sheet-metal Working',
  },
  {
    id: 2,
    pic: './img/2.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Kilnam Chor',
    designation: 'Motor car pioneer, entrepreneur and industrial visionary',
    history: 'In 1891, Ford became an engineer with the Edison Illuminating Company of Detroit. After his promotion to Chief Engineer in 1893, he had enough time and money to devote attention to his experiments on gasoline engines..',
  },
  {
    id: 3,
    pic: './img/4.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'SohYeong Noh',
    designation: 'The innovative packaging of the Mini',
    history: 'Issigonis was appointed a Commander of the Order of the British Empire in the 1964 Birthday Honours[10] and Knight Bachelor in the 1969 Birthday Honours.[11] On 22 July 1969, he was knighted by Elizabeth II during an investiture ceremony at Buckingham Palace.[12].',
  },
  {
    id: 4,
    pic: './img/5.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Julia Leda',
    designation: 'SEngine innovator with Coventry Climax, Lotus and Jaguar',
    history: 'His career then took a change in direction and he moved into journalism becoming Technical Editor of The Autocar magazine in 1955 but while there he also worked on the design of the Ford based twin-cam engine for Lotus.[1]',
  },
  {
    id: 5,
    pic: './img/3.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Stephanie',
    designation: 'The diesel engine',
    history: 'The first successful Diesel engine Motor 250/400 was officially tested in 1897 and is now on display at the German Technical Museum in Munich..',
  },
  {
    id: 6,
    pic: './img/6.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Reagan Storch',
    designation: 'Credited with creating the first useful four stroke engine',
    history: 'Otto was aware of the concept of compressed fuel charge and tried to make an engine using this principle in 1861. It ran for just a few minutes before breaking. Ottos brother gave up on the concept, resulting in Otto looking for help elsewhere.[2][3].',
  },
];

const speakerContainer = document.createElement('section');
speakerContainer.setAttribute('class', 'featured-speakers');
speakerContainer.setAttribute('id', 'speakers');

data.forEach((speakerPara) => {
  const speakerSection = document.createElement('div');
  speakerSection.setAttribute('class', 'speaker-section');
  speakerSection.setAttribute('id', 'each-speaker');

  const imageSection = document.createElement('div');
  imageSection.setAttribute('class', 'speaker-image-section');
  const image = document.createElement('img');
  image.setAttribute('class', 'speaker-image');
  image.setAttribute('src', speakerPara.pic);
  image.setAttribute('alt', speakerPara.altText);

  imageSection.appendChild(image);
  speakerSection.appendChild(imageSection);

  const contentSection = document.createElement('div');
  contentSection.setAttribute('class', 'speaker-details');
  contentSection.setAttribute('id', 'about-speaker');

  const speakerName = document.createElement('h2');
  speakerName.setAttribute('class', 'speaker-name');
  speakerName.textContent = speakerPara.nameOfSpeaker;
  contentSection.appendChild(speakerName);

  const speakerDesignation = document.createElement('p');
  speakerDesignation.setAttribute('class', 'speaker-designation');
  speakerDesignation.textContent = speakerPara.designation;
  contentSection.appendChild(speakerDesignation);

  const dotText = document.createElement('p');
  dotText.setAttribute('id', 'dots');
  dotText.textContent = '.........';
  contentSection.appendChild(dotText);

  const speakerHistory = document.createElement('p');
  speakerHistory.setAttribute('class', 'speaker-history');
  speakerHistory.textContent = speakerPara.history;
  contentSection.appendChild(speakerHistory);

  speakerSection.appendChild(contentSection);
  speakerContainer.appendChild(speakerSection);
});

const loadSpeakers = () => speakersContainer.appendChild(speakerContainer);

window.onload(loadSpeakers());
