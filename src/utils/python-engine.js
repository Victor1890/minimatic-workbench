/**
 * Pyodide (Python WASM) Client Runner
 * Dynamically loads Pyodide CDN script on demand and executes Python code in-browser.
 */

let pyodidePromise = null;

function loadPyodideScript() {
  if (pyodidePromise) return pyodidePromise;
  pyodidePromise = new Promise((resolve, reject) => {
    if (window.loadPyodide) {
      resolve(window.loadPyodide());
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
    script.onload = async () => {
      try {
        const py = await window.loadPyodide();
        resolve(py);
      } catch (err) {
        reject(err);
      }
    };
    script.onerror = () => reject(new Error('Failed to load Pyodide CDN script'));
    document.head.appendChild(script);
  });
  return pyodidePromise;
}

export async function runPythonCode(code, outputElementId) {
  const container = document.getElementById(outputElementId);
  if (!container) return;

  container.innerHTML = `<div style="color: #95908d; font-size: 13px; font-family: monospace;">⏳ Loading Python Pyodide WASM runtime...</div>`;

  try {
    const pyodide = await loadPyodideScript();
    let logs = [];
    pyodide.setStdout({ batched: (str) => logs.push(str) });
    pyodide.setStderr({ batched: (str) => logs.push('ERROR: ' + str) });

    const result = await pyodide.runPythonAsync(code);

    let outputHtml = '';
    if (logs.length > 0) {
      outputHtml += `<div style="background: #1b1c1c; color: #a8d5c4; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 13px; white-space: pre-wrap;">${logs.join('\n')}</div>`;
    }
    if (result !== undefined && result !== null) {
      outputHtml += `<div style="margin-top: 8px; color: #17805e; font-family: monospace; font-weight: 600; font-size: 13px;">Return value: ${result}</div>`;
    }
    if (!outputHtml) {
      outputHtml = `<div style="color: #95908d; font-size: 13px;">Python code executed cleanly (no stdout output).</div>`;
    }

    container.innerHTML = outputHtml;
  } catch (err) {
    container.innerHTML = `<div style="background: #ffcdd2; color: #b71c1c; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 13px; white-space: pre-wrap;">Traceback error:\n${err.message}</div>`;
  }
}
