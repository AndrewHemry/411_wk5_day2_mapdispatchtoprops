export const addCar = (newCar) => {
    return {
        type: "ADD_CAR",
        value: newCar
    }
}

// Not sure if the index as the arguement is correct here
export const removeCar = (index) => {
    return {
        type: "REMOVE_CAR",
        value: index
    }
}