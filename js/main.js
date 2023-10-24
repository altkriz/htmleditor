    // Get editor and output elements
    const codeEditor = document.getElementById('code-editor');
    const output = document.getElementById('output');
    
    // Load saved code from local storage
    const savedCode = localStorage.getItem('savedCode');
    if (savedCode) {
        codeEditor.value = savedCode;
    }
    
    // Update output function
    function updateOutput() {
        // Get code from editor
        const code = codeEditor.value;
        
        // Set iframe source to code
        output.srcdoc = code;
        
        // Save code to local storage
        localStorage.setItem('savedCode', code);
    }
    
    // Update output on editor change
    codeEditor.addEventListener('input', updateOutput);
    
    // Save code function
    function saveCode() {
        // Get code from editor
        const code = codeEditor.value;
        
        // Send AJAX request to save.php to save code to file
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://kriztech.in/editor/save.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Code saved successfully!');
        } else {
            alert('Error saving code.');
        }
        };
        xhr.send(`code=${encodeURIComponent(code)}`);
    }
    
    // Run code function
    function runCode() {
        // Get code from editor
        const code = codeEditor.value;
        
        // Set iframe source to blank
        output.srcdoc = 'code';
        
        // Set iframe source to code  
        setTimeout(() => {
        output.srcdoc = code;
        }, 0);
    }
    const block1Button = document.getElementById('block1-button');
    const block2Button = document.getElementById('block2-button');
    const block3Button = document.getElementById('block3-button');
    const block1 = document.getElementById('block1');
    const block2 = document.getElementById('block2');
    const block3 = document.getElementById('block3');
    
    // Hide all blocks except the first one
    block2.style.display = 'none';
    block3.style.display = 'none';
    
    // Add event listeners to the buttons
    block1Button.addEventListener('click', () => {
        block1.style.display = 'block';
        block2.style.display = 'none';
        block3.style.display = 'none';
    });
    
    block2Button.addEventListener('click', () => {
        block1.style.display = 'none';
        block2.style.display = 'block';
        block3.style.display = 'none';
    });
    
    block3Button.addEventListener('click', () => {
        block1.style.display = 'none';
        block2.style.display = 'none';
        block3.style.display = 'block';
    });
    function downloadCode() {
        var code = document.getElementById("code-editor").value;
        var filename = "mycode.html";
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(code));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      }