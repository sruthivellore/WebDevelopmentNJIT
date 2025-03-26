console.log(`LAB 4`);
function calculateCircleMetrics(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    const perimeter = 2 * Math.PI * radius;
    return { area: area.toFixed(2), perimeter: perimeter.toFixed(2) };
}

function calculateRectangleMetrics(width, height) {
    const area = width * height;
    const perimeter = 2 * (width + height);
    return { area: area.toFixed(2), perimeter: perimeter.toFixed(2) };
}

function calculateCylinderMetrics(radius, length) {
    const baseArea = Math.PI * Math.pow(radius, 2);
    const volume = baseArea * length;
    return { baseArea: baseArea.toFixed(2), volume: volume.toFixed(2) };
}

function calculateGratuity(subtotal, gratuityRate) {
    const gratuity = (subtotal * gratuityRate) / 100;
    const total = subtotal + gratuity;
    return { gratuity: gratuity.toFixed(2), total: total.toFixed(2) };
}

console.log(`QUESTION 1`);
const radius = 5.5;
const circleResult = calculateCircleMetrics(radius);
console.log(`Circle - Radius: ${radius}`);
console.log(`Circle - Area: ${circleResult.area}`);
console.log(`Circle - Perimeter: ${circleResult.perimeter}`);

console.log(`QUESTION 2`);
const width = 4.5;
const height = 7.9;
const rectangleResult = calculateRectangleMetrics(width, height);
console.log(`Rectangle - Width: ${width}, Height: ${height}`);
console.log(`Rectangle - Area: ${rectangleResult.area}`);
console.log(`Rectangle - Perimeter: ${rectangleResult.perimeter}`);

console.log(`QUESTION 3`);
const cylinderRadius = parseFloat(prompt("Enter the radius of a cylinder:"));
const cylinderLength = parseFloat(prompt("Enter the length of a cylinder:"));
const cylinderResult = calculateCylinderMetrics(cylinderRadius, cylinderLength);
console.log(`Cylinder - Radius: ${cylinderRadius}, Length: ${cylinderLength}`);
console.log(`Cylinder - Base Area: ${cylinderResult.baseArea}`);
console.log(`Cylinder - Volume: ${cylinderResult.volume}`);

console.log(`QUESTION 4`);
const input = prompt("Enter the subtotal and a gratuity rate:").split(" ");
const subtotal = parseFloat(input[0]);
const gratuityRate = parseFloat(input[1]);
const gratuityResult = calculateGratuity(subtotal, gratuityRate);
console.log(`The gratuity is $${gratuityResult.gratuity} and total is $${gratuityResult.total}`);
