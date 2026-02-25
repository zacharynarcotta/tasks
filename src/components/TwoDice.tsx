import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [dieLeft, setDieLeft] = useState<number>(1);
    const [dieRight, setDieRight] = useState<number>(6);

    const rollLeft = (): void => {
        setDieLeft(d6());
    };
    const rollRight = (): void => {
        setDieRight(d6());
    };

    return (
        <div>
            Two Dice
            <div>
                <span data-testid="left-die">{dieLeft}</span>
                <span data-testid="right-die">{dieRight}</span>
            </div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            <div>
                <span>
                    {dieLeft === dieRight && dieLeft === 1 ?
                        "You Lose..."
                    : dieLeft === dieRight ?
                        "You Win!"
                    :   ""}
                </span>
            </div>
        </div>
    );
}
