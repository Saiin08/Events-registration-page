export class BigEvent {
  constructor(header, description, img) {
    this.header = header;
    this.description = description;
    this.img = img;
    this.createStartingElement();
  }
  createStartingElement = () => {
    this.prepareStaticHtml();
    this.attachStaticEventListeners();
    this.updateDynamicValues();
  };

prepareStaticHtml = () => {
    const majorDiv = document.querySelector('.main')

    this.header = document.createElement("h2");
    this.header.classList.add("big-event-header");

    this.eventContent = document.createElement('div')
    this.eventContent.classList.add('event--content')

    this.header = document.createElement('h2')
    this.header.classList.add('big-event-header')

    this.button = document.createElement("button");
    this.button.classList.add("big-event-button");
    this.button.textContent = "Register";

    this.img = document.createElement("img");
    this.img.classList.add("big-event-img");
    this.img.src = `${this.img}`;
    this.img.alt = "Photo of main event";

    this.img = document.createElement('img')
    this.img.classList.add('big-event-img')
    this.img.src = `${this.img}`
    this.img.alt = 'Photo of main event'
    
    majorDiv.appendChild(this.mainDiv)
    this.mainDiv.appendChild(this.eventContent)
    this.eventContent.appendChild(this.header)
    this.mainDiv.appendChild(this.img)
    this.eventContent.appendChild(this.description)
    this.mainDiv.appendChild(this.button)
}

attachStaticEventListeners = () => {

}

updateDynamicValues = () => {

}

  attachStaticEventListeners = () => {};

  updateDynamicValues = () => {};
}

export class SmallEvent {
  constructor(header) {
    this.header = header;
    this.createStartingElement();
  }
  createStartingElement = () => {
    this.prepareStaticHtml();
    this.attachStaticEventListeners();
    this.updateDynamicValues();
  };

  prepareStaticHtml = () => {
    const majorDiv = document.querySelector(".main");

    this.smallDiv = document.createElement("div");
    this.smallDiv.classList.add("small-event-container");

    this.smallDivBox = document.createElement("div");
    this.smallDivBox.classList.add("small-event-box");

    this.header = document.createElement("h2");
    this.header.classList.add("small-div-header");

    this.button = document.createElement("button");
    this.button.textContent = "More";
    this.classList.add("small-event-button");

    majorDiv.appendChild(this.smallDiv);
    this.smallDiv.appendChild(this.smallDivBox);
    this.smallDivBox.appendChild(this.header);
    this.smallDivBox.appendChild(this.button);
  };

  attachStaticEventListeners = () => {
    this.button = document.querySelector(".small-event-button");
    this.button.addEventListener("click", () => {});
  };

  updateDynamicValues = () => {};
}
