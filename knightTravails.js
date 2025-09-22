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
            [1,-2], [2,-1], [1,2], [2,1],
            [-1,-2], [-2,-1], [-1,2], [-2,1],
        ]
        // If the current position is [3,3]
        /* 
            [3,3]
            +1 -2
            +1 +2
            +2 -1
            +2 +1

            -1 -2
            -1 +2
            -2 -1
            -2 +2
        */
        // Max moves is always 8
        // Each possible position must be
        // One has to have two difference
        // The other has to have only one difference
        const moves = differences.map((difference) => {
            const row = currentPosition[0] + difference[0]
            const column = currentPosition[1] + difference[1]
            return [row, column];
        })

        // Filter out moves that aren't valid.

        return moves

        // Don't add if it outside the valid range of indexes
    }

}

const graph = new KnightTravails();
graph.initialize();
/* prettyPrint(graph.board); */
graph.getKnightMoves([3,3]);