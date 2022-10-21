const API_URL= 'http://35.247.214.17:8000/api/restaurants/'

export const listRestaurants =  async () => {
    return await fetch(API_URL);
};

export const listRestaurantsWhitId =  async (id) => {
    return await fetch(API_URL + id);
    
};

export const topRestaurants =  async () => {
    return await fetch(API_URL + "top");
};

export const SearchRestaurantsWhitName =  async (name) => {
    return await fetch(API_URL + "name/" + name);
};

export const SearchRestaurantsWhitLocation =  async (location) => {
    return await fetch(API_URL + "location/" + location);
};

export const SearchRestaurantsWhitNameLocation =  async (name, location) => {
    return await fetch(API_URL + "search/" + location + "/" + name);
};