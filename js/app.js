console.info("The application is started!");

const cars = [
    // Source from https://www.irishtimes.com/life-and-style/motors/top-100

    "BMW 3 Series",
    "Toyota Corolla",
    "Kia eSoul",
    "Tesla Model 3",
    "Jaguar I-Pace",
    "Skoda Superb",
    "Audi e-Tron",
    "Mazda 3",
    "Mercedes-Benz E-class",
    "Toyota Camry",
    "Peugeot 5008",
    "Audi A6",
    "Hyundai Kona",
    "Toyota C-HR",
    "Range Rover Evoque",
    "Ford Focus",
    "Skoda Octavia",
    "Lexus UX",
    "Hyundai Santa Fe",
    "Mazda CX-30",
    "Seat Ateca",
    "Mercedes-Benz C-Class",
    "Toyota RAV4",
    "Mazda 6",
    "Lexus LC",
    "Mercedes-Benz S-Class",
    "Volkswagen Golf",
    "Ford Fiesta",
    "Dacia Duster",
    "BMW 5 Series",
    "Honda Civic",
    "Audi Q8",
    "Kia Ceed",
    "Hyundai i30",
    "BMW i3",
    "Hyundai Tucson",
    "Seat Ibiza",
    "Kia Niro",
    "Volkswagen Polo",
    "Peugeot 3008",
    "Suzuki Swift",
    "Volkswagen Passat",
    "Mini Hatch",
    "Volvo S60/V60",
    "BMW i8",
    "Toyota Prius",
    "Ford Mustang",
    "Nissan Leaf",
    "Opel Astra",
    "BMW 1 Series",
    "Hyundai i10",
    "BMW 2 Series Coupe",
    "Porsche 718 Boxster",
    "Hyundai Ioniq",
    "Seat Arona",
    "Honda CR-V",
    "Toyota Land Cruiser",
    "Volkswagen Tiguan",
    "Audi A5",
    "Mercedes-Benz GLC",
    "Peugeot 208",
    "BMW 8 Series",
    "Tesla Model S",
    "Mazda MX-5",
    "Mitsubishi Outlander",
    "Skoda Kodiaq",
    "Nissan Qashqai",
    "Citroen C5 Aircross",
    "BMW 7 Series",
    "Volkswagen Touran",
    "Volvo S90",
    "Citroen C3",
    "Mercedes-Benz GLE",
    "Lexus ES",
    "Renault Scenic",
    "Alfa Romeo Giulia",
    "Land Rover Discovery",
    "Ford Mondeo",
    "Alfa Romeo Stelvio",
    "Audi A7",
    "Volvo XC90",
    "Volkswagen T-Cross",
    "Renault Clio",
    "Fiat 500",
    "Open Insignia",
    "BMW X3",
    "Seat Alhambra",
    "Toyota Supra",
    "BMW X5",
    "Volvo XC60",
    "Mercedes-Benz A-Class",
    "Audi Q5",
    "Citroen C4 Spacetourer",
    "Ford Ranger Raptor",
    "Bentley Continental GT",
    "Ford S-Max"
];

var carlist_form = document.getElementById("carlist");;
var searchbar_form = document.getElementById("searchbar");

function addCars(){
    for (let i = 0; i < cars.length; i++) {
        carlist_form.innerHTML = carlist_form.innerHTML+"<option>"+cars[i]+"</option>";
    }
}

function searchCar() {
    carlist_form.innerHTML = ""; // Reset list
    for(let y = 0; y < cars.length; y++)
    {
        if (searchbar_form.value.substr(0, searchbar_form.value.length).toUpperCase() == cars[y].substr(0, searchbar_form.value.length).toUpperCase()) {
            carlist_form.innerHTML = carlist_form.innerHTML+"<option>"+cars[y]+"</option>";
        }
    }
}

carlist_form.onload = addCars();