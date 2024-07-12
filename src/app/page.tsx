'use client';

import { useState } from 'react';

import styles from './page.module.css';

export default function Home() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = async () => {
    // Mocking an API call
    const response = await fetch('/api/summarize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    setSummary(data.summary);
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1 className={styles.text}>
          Kevin&apos;s
          <span className={styles.colored_text_1}>&nbsp;Insightflo&nbsp;</span>
          Text Summarization Project
        </h1>
      </div>
      <div className={styles.description}>
        <h1>Text Summarization</h1>
        <textarea
          className={styles.textarea}
          placeholder="Paste or type your article here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.button} onClick={handleSubmit}>
          Summarize
        </button>
        {summary && (
          <div className={styles.summary}>
            <h2>Summary</h2>
            <p>{summary}</p>
          </div>
        )}
      </div>
    </main>
  );
}
