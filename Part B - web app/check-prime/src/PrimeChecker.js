import React, { useState } from 'react';
import './PrimeChecker.css';

const PrimeChecker = () => {
  const [number, setNumber] = useState('');
  const [minRange, setMinRange] = useState('');
  const [maxRange, setMaxRange] = useState('');
  const [singleResult, setSingleResult] = useState('');
  const [rangeResults, setRangeResults] = useState([]);

  const checkPrime = (num) => {
    if (num <= 1) return 'Number should be greater than 1';
  
    let factors = [];
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
  
    if (factors.length === 0) {
      return 'Prime!';
    } else {
      return `Factors: ${factors}`;
    }
  };  

  const findPrimesInRange = (min, max) => {
    const primes = [];
    for (let i = min; i <= max; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  };

  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const handleCheckPrime = () => {
    setSingleResult(checkPrime(parseInt(number)));
  };

  const handleFindPrimesInRange = () => {
    setRangeResults(findPrimesInRange(parseInt(minRange), parseInt(maxRange)));
  };

  return (
    <div className="prime-checker">
      <h1>Prime Checker</h1>
      <div className="input-section">
        <label>Check if a number is prime:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={handleCheckPrime}>Check</button>
        <div className="result">{singleResult}</div>
      </div>
      <div className="input-section">
        <label>Find primes in range:</label>
        <input
          type="number"
          placeholder="Min"
          value={minRange}
          onChange={(e) => setMinRange(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max"
          value={maxRange}
          onChange={(e) => setMaxRange(e.target.value)}
        />
        <button onClick={handleFindPrimesInRange}>Find Primes</button>
        <div className="result">
          {rangeResults.length > 0 ? (
            <ul>
              {rangeResults.map((prime) => (
                <li key={prime}>{prime}</li>
              ))}
            </ul>
          ) : (
            <p>No primes found in the range.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrimeChecker;
