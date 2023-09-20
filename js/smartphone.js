//  MY SMARTPHONE PROGRAMMING FOUNDATIONS CA

// Make an array of objects

const smartPhones = [
  {
    brand: "Apple",
    model: "Iphone 8 Plus",
    year: 2017,
    isTouchScreen: true,
    homeButton: true,
    availableApps: ["Snapchat", "VG", "Wordfeud", "Aftenposten"],
    callSomeone(contact) {
      alert(`Calling ${contact}...`);
    },
    imageSrc: "/images/Iphone.png",
  },
  {
    brand: "Samsung",
    model: "Samsung Galaxy A23",
    year: 2022,
    isTouchScreen: true,
    homeButton: false,
    availableApps: ["Camera", "Dagbladet", "Finn"],
    callSomeone(contact) {
      alert(`Calling ${contact}...`);
    },
    imageSrc: "/images/Samsung.png",
  },
  {
    brand: "Huawei",
    model: "Huawei P30 Pro New Edition",
    year: 2020,
    isTouchScreen: true,
    homeButton: false,
    availableApps: ["Settings", "Tiktok", "Facebook"],
    callSomeone(contact) {
      alert(`Calling ${contact}...`);
    },
    imageSrc: "/images/Huawei.png",
  },
  {
    brand: "Nokia",
    model: "Nokia 3310",
    year: 2000,
    isTouchScreen: false,
    homeButton: false,
    availableApps: ["Phonebook", "Calculator", "Snake"],
    callSomeone(contact) {
      alert(`Calling ${contact}...`);
    },
    imageSrc: "/images/Nokia.png",
  },
];

const buttonRandom = document.querySelector(".callRandom");
const buttonSomeone = document.querySelector(".callSomeone");

buttonRandom.addEventListener("click", function () {
  smartPhones[0].callSomeone("Mom");
});

buttonSomeone.addEventListener("click", function () {
  let contact = window.prompt("Who would you like to call?");
  if (contact !== null && contact.trim() !== "") {
    contact = contact.trim();
    const result = window.confirm(`Are you sure you want to call ${contact}?`);
    if (result) {
      smartPhones[0].callSomeone(contact);
    }
  }
});

const brand = document.querySelector(".brand");
const model = document.querySelector(".model");
const year = document.querySelector(".year");
const isTouchScreen = document.querySelector(".isTouchScreen");
const isHomeButton = document.querySelector(".homeButton");
const availableApps = document.querySelector(".availableApps");
const image = document.querySelector(".image");

const originalBrandText = brand.textContent;
const originalModelText = model.textContent;
const originalYearText = year.textContent;
const originalTouchText = isTouchScreen.textContent;
const originalHomeText = isHomeButton.textContent;
const originalAppText = availableApps.textContent;

function updateBrandText(phone) {
  brand.textContent = originalBrandText + " " + phone.brand;
}

function updateModelText(phone) {
  model.textContent = originalModelText + " " + phone.model;
}

function updateYearText(phone) {
  year.textContent = originalYearText + " " + phone.year;
}

function updateTouchText(phone) {
  isTouchScreen.textContent = originalTouchText + " " + phone.isTouchScreen;
}

function updateHomeText(phone) {
  isHomeButton.textContent = originalHomeText + " " + phone.homeButton;
}

function updatePhoneDetails(phone) {
  updateBrandText(phone);
  updateModelText(phone);
  updateYearText(phone);
  updateTouchText(phone);
  updateHomeText(phone);
  availableApps.textContent =
    "Available Apps: " + phone.availableApps.join(", ");
  image.src = phone.imageSrc;
}

let currentPhone = smartPhones[0];

updatePhoneDetails(currentPhone);

const changePhone = document.querySelector(".change-phone");
const headerText = document.querySelector("h1");

const headerDefault = headerText.innerText;

const surprise = document.querySelector(".surprise-button");

surprise.addEventListener("click", function () {
  currentPhone = smartPhones[3];
  updatePhoneDetails(currentPhone);
  surprise.classList.add("hidden");
  headerText.innerText = "NOKIA";
  changePhone.innerText = "Change my phone";
});

changePhone.addEventListener("click", function () {
  if (currentPhone === smartPhones[0]) {
    currentPhone = smartPhones[1];
  } else if (currentPhone === smartPhones[1]) {
    currentPhone = smartPhones[2];
  } else if (currentPhone === smartPhones[2]) {
    currentPhone = smartPhones[0];
  } else if (currentPhone === smartPhones[3]) {
    headerText.innerText = headerDefault;
    surprise.classList.remove("hidden");
    changePhone.innerText = "Change my Smartphone";
    currentPhone = smartPhones[0];
  }
  updatePhoneDetails(currentPhone);
});
