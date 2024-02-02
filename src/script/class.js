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
    const majorDiv = document.querySelector(".main");
    this.title = document.createElement("h3");
    this.title.classList.add("main--title");
    this.title.textContent = `FEATURED EVENT`;

    this.mainDiv = document.createElement("div");
    this.mainDiv.classList.add("big-event-container");
    this.headerH2 = document.createElement("h2");
    this.headerH2.classList.add("big-event-header");

    this.headerH2.textContent = `${this.header}`;

    this.eventContent = document.createElement("div");
    this.eventContent.classList.add("event--content");

    this.button = document.createElement("button");
    this.button.classList.add("big-event-button");
    this.button.textContent = "Register";

    this.descriptionEl = document.createElement("p");
    this.descriptionEl.classList.add("big-event-description");
    this.descriptionEl.textContent = `${this.description}`;

    this.imgEl = document.createElement("img");
    this.imgEl.classList.add("big-event-img");
    this.imgEl.src = `${this.img}`;
    this.imgEl.alt = "Photo of main event";

    console.log(majorDiv);

    majorDiv.appendChild(this.mainDiv);
    this.eventContent.appendChild(this.headerH2);
    this.mainDiv.appendChild(this.title);
    this.mainDiv.appendChild(this.imgEl);
    this.mainDiv.appendChild(this.eventContent);
    this.eventContent.appendChild(this.descriptionEl);
    this.mainDiv.appendChild(this.button);
  };

  attachStaticEventListeners = () => {};

  updateDynamicValues = () => {};

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

    this.headerH2 = document.createElement("h2");
    this.headerH2.classList.add("small-div-header");
    this.headerH2.textContent = `${this.header}`;

    this.button = document.createElement("button");
    this.button.textContent = "More";
    this.button.classList.add("small-event-button");

    majorDiv.appendChild(this.smallDiv);
    this.smallDiv.appendChild(this.smallDivBox);
    this.smallDivBox.appendChild(this.headerH2);
    this.smallDivBox.appendChild(this.button);
  };

  attachStaticEventListeners = () => {};

  updateDynamicValues = () => {};
}
