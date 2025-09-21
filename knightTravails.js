import prettyPrint from "./prettyprint.js";
// Create a chessboard?
/* 
    8x8, I need to create a graph with adjacent list, in each position
    include the possible movies

*/
// Print a chessboard with their two dimensional positions
// [0,0],[0,1]

export default class KnightTravails {
    board;

    initialize = () => {
        // Two nested loops?
        const nestedArray = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                nestedArray.push([i, j]);
            }
        }
        this.board = nestedArray;
    }

    // Identify the possible moves in a current position
    

}

const graph = new KnightTravails();
graph.initialize();
prettyPrint(graph.board);