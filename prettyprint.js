export default function prettyPrint(nestedArray) {
    // Print each 8 arrays in one row
    // Print the first row
    let row = [];
    // push to the row the first 8 then print then empty
    for (let rowIndex = 0; rowIndex < 8; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 8; columnIndex++) {
            const cell = nestedArray.shift();
            row.push(cell);
        }
        console.log(JSON.stringify(row));
        row = [];
    }
    
}