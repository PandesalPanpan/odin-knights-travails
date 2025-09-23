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

    /* 
        knightMoves(currentPosition, goalPosition)
        returns the shortest path move set
        Usage: knightMoves([3,3],[5,4])
    */
    knightMoves = (currentPosition, goalPosition) => {
        // Find the shortest path using BSF
        // Loop through until it finds the shortest path
        const queue = [currentPosition];
        const visited = [];
        // I need to somehow remember the previous set of moves for each
        // moves
        while (queue.length > 0) {
            // Grab the item in the queue
            const current = queue.shift();
            if (current[0] == goalPosition[0] && current[1] == goalPosition[1]) {
                return current;
            }

            // The queue is pushing a single element with two arrays
            const moves = this.getKnightMoves(current);
            moves.forEach((move) => {
                if (!visited.includes(move)) {
                    queue.push(move);
                }
            })

            visited.push(current);
            // Check if the position matches currentPosition
        }

    }

}

const graph = new KnightTravails();
graph.initialize();
prettyPrint(graph.board);
graph.getKnightMoves([0, 0]);