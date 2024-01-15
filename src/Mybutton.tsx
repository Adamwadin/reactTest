
import React, { useState } from 'react';

const SumButton: React.FC = () => {
    const [number1, setNumber1] = useState<number>(0);
    const [number2, setNumber2] = useState<number>(0);
    const [sum, setSum] = useState<number | null>(null);

    const handleSum = () => {
        const result = number1 + number2;
        setSum(result);
    };

    return (
        <div>
            <label>
                Number 1:
                <input type="number" value={number1} onChange={(e) => setNumber1(+e.target.value)} />
            </label>

            <label>
                Number 2:
                <input type="number" value={number2} onChange={(e) => setNumber2(+e.target.value)} />
            </label>

            <button onClick={handleSum}>Calculate Sum</button>

            {sum !== null && (
                <p>
                    The sum of {number1} and {number2} is: {sum}
                </p>
            )}
        </div>
    );
};

export default SumButton;
