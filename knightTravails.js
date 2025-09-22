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
    // Returns an array of possible cells a knigtht can move
    getKnightMoves = (currentPosition) => {
        // Two Steps Forward, One Step to Sides
        const differences = [
            [1, -2], [2, -1], [1, 2], [2, 1],
            [-1, -2], [-2, -1], [-1, 2], [-2, 1],
        ]

        const moves = differences.reduce((accumulator, difference) => {
            const row = currentPosition[0] + difference[0]
            const column = currentPosition[1] + difference[1]
            if (row >= 0 && row <= 7 && column >= 0 && column <= 7) {
                accumulator.push([row, column]);
            }

            return accumulator;
        }, []);
        return moves;
    }

}

const graph = new KnightTravails();
graph.initialize();
prettyPrint(graph.board);
graph.getKnightMoves([0, 0]);