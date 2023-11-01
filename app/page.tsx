'use client';
import {useState} from 'react';
import styles from './page.module.css'
export default function Board() {

    const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState<boolean>(true);

    function calculateWinner(squares: string[]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    function handleClick(i: number): void {
        if (squares[i] != null || calculateWinner(squares)) {
            return
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        }
        else {
            nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        if (calculateWinner(squares) != null) {

        }
        setXIsNext(!xIsNext);
    }


    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }


    return (
        <div className={styles.wrapper}>
            <div>
                <div className="status">{status}</div>
                <div>
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
                </div>
                <div >
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
                </div>
                <div >
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
                </div>

            </div>
        </div>);
}

function Square({value, onSquareClick}: {value: string, onSquareClick: () => void}) {

    return <>
        <button onClick={onSquareClick} className={styles.square}>{value}</button>
    </>

}
