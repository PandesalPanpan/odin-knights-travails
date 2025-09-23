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
        // What if the queue stores a set of moves?
        // then grab the possible moves by grabbing the last element of set of moves
        const queue = [[currentPosition]];
        const visited = [];
        let currentPath;
        // I need to somehow remember the previous set of moves for each
        // moves
        while (queue.length > 0) {
            // Grab the item in the queue
            currentPath = queue.shift();
            // Check if the last element of current is equal to goalPosition
            const latestPosition = currentPath.at(-1);

            if (latestPosition[0] == goalPosition[0] && latestPosition[1] == goalPosition[1]) {
                break;
            }

            const moves = this.getKnightMoves(latestPosition);
            moves.forEach((move) => {
                if (!visited.includes(move)) {
                    queue.push([...currentPath, move]);
                }
            })

            visited.push(latestPosition);
            // Check if the position matches currentPosition
        }

        // Don't count the initial position as moves
        console.log(`You made it in ${currentPath.length - 1} moves! Here's your path:`)
        currentPath.forEach((move) => {
            const moveString = JSON.stringify(move);
            console.log(moveString);
        })
    }

}

const knight = new KnightTravails();
knight.initialize();
knight.knightMoves([0,0],[3,3]);
knight.knightMoves([3,3],[0,0]);
knight.knightMoves([0,0],[7,7]);
knight.knightMoves([3,3],[4,3]);