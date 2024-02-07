import { Category, Allergen, Menu, Coordinate, Dish, Restaurant, } from './restaurant.js';

const MODEL = Symbol('restaurant');
const VIEW = Symbol('restaurantView');
const LOAD_MANAGER_OBJECTS = Symbol('Load Manager Objects');

class RestaurantController {
    constructor(model, view) {

        this[MODEL] = model;
        this[VIEW] = view;

        this.onLoad();


    }

    [LOAD_MANAGER_OBJECTS]() {
        // Crear instancias de las categorías, platos, alérgenos, menús y restaurantes

        // Creamos los 4 platos de pasta
        let spaghetti = new Dish("Spaghetti", "Spaghetti con tomate",
            ["Spaghetti", "Tomate"],
            "URL_Spaghetti_Con_Tomate");

        let macarrones = new Dish("macarrones", "Macarrones con tomate",
            ["Macarrones", "Tomate"],
            "URL_Macarrones_Con_Tomate");

        let pizza = new Dish("Pizza", "Pizza con tomate",
            ["Pizza", "Tomate"],
            "URL_Pizza_Con_Tomate");

        let calzone = new Dish("Calzone", "Calzone con tomate",
            ["Calzone", "Tomate"],
            "URL_Calzone_Con_Tomate");


        // Creamos los 4 platos de carne
        let ternera = new Dish("Ternera", "Ternera en salsa",
            ["Ternera", "Salsa"],
            "URL_Ternera_En_Salsa");

        let cordero = new Dish("Cordero", "Cordero en salsa",
            ["Cordero", "Salsa"],
            "URL_Cordero_En_Salsa");

        let wahiu = new Dish("Wahiu", "Wahiu en salsa",
            ["Wahiu", "Salsa"],
            "URL_Wahiu_En_Salsa");

        let ciervo = new Dish("Ciervo", "Ciervo en salsa",
            ["Ciervo", "Salsa"],
            "URL_Ciervo_En_Salsa");


        // Creamos los 4 platos de carne
        let merluza = new Dish("Merluza", "Merluza en salsa",
            ["Merluza", "Salsa"],
            "URL_Merluza_En_Salsa");

        let salmon = new Dish("Salmon", "Salmon en salsa",
            ["Salmon", "Salsa"],
            "URL_Salmon_En_Salsa");

        let boqueron = new Dish("Boqueron", "Boqueron en salsa",
            ["Boqueron", "Salsa"],
            "URL_Boqueron_En_Salsa");

        let panga = new Dish("Panga", "Panga en salsa",
            ["Panga", "Salsa"],
            "URL_Panga_En_Salsa");

        // Crear un objeto de la clase Category
        let pasta = new Category("Pasta", "Platos Tipicos");
        let carne = new Category("Pasta", "Platos Tipicos");
        let pescado = new Category("Pasta", "Platos Tipicos");

        // Crear un objeto de la clase Allergen
        let gluten = new Allergen("Gluten", "La pasta contiene gluten");
        let lactosa = new Allergen("Lactosa", "La salsa contiene leche");
        let frutosSecos = new Allergen("Frutos Secos", "La carne contiene trazas de frutos secos");
        let platano = new Allergen("Platanos", "La salsa puede contener trazas de platano");

        // Crear un objeto de la clase Menu
        let menuPasta = new Menu("Menu del Día", "Menu diario del restaurante");
        let menuCarnes = new Menu("Menu del Día", "Menu diario del restaurante");
        let menuPescado = new Menu("Menu del Día", "Menu diario del restaurante");

        // Crear un objeto de la clase Coordinate
        let coordenadasSergio = new Coordinate(40.7128, -74.0060);
        let coordenadasGourmet = new Coordinate(40.7128, -74.0060);
        let coordenadasTenedor = new Coordinate(40.7128, -74.0060);

        // Crear un objeto de la clase Restaurant
        let cocinaDeSergio = new Restaurant("La cocina de Sergio", "Restaurante tradicional", coordenadasSergio);
        let cocinaGourmet = new Restaurant("La cocina Gourmet", "Restaurante tradicional", coordenadasGourmet);
        let cocinaTenedor = new Restaurant("La cocina del Tenedor", "Restaurante tradicional", coordenadasTenedor);

        // Asignamos los platos a las categorías
        this[MODEL].assignCategoryToDish(pasta, spaghetti);
        this[MODEL].assignCategoryToDish(pasta, macarrones);
        this[MODEL].assignCategoryToDish(pasta, pizza);
        this[MODEL].assignCategoryToDish(pasta, calzone);

        this[MODEL].assignCategoryToDish(pescado, merluza);
        this[MODEL].assignCategoryToDish(pescado, panga);
        this[MODEL].assignCategoryToDish(pescado, boqueron);
        this[MODEL].assignCategoryToDish(pescado, salmon);

        this[MODEL].assignCategoryToDish(carne, ternera);
        this[MODEL].assignCategoryToDish(carne, cordero);
        this[MODEL].assignCategoryToDish(carne, ciervo);
        this[MODEL].assignCategoryToDish(carne, wahiu);


        // Asignamos los platos a los menus
        this[MODEL].assignMenuToDish(menuPasta, calzone);
        this[MODEL].assignMenuToDish(menuPasta, pizza);
        this[MODEL].assignMenuToDish(menuPasta, macarrones);

        this[MODEL].assignMenuToDish(menuCarnes, wahiu);
        this[MODEL].assignMenuToDish(menuCarnes, cordero);
        this[MODEL].assignMenuToDish(menuCarnes, ternera);

        this[MODEL].assignMenuToDish(menuPescado, salmon);
        this[MODEL].assignMenuToDish(menuPescado, boqueron);
        this[MODEL].assignMenuToDish(menuPescado, merluza);
    }

    onLoad = () => {
        this[LOAD_MANAGER_OBJECTS]();
    };
}


export default RestaurantController;