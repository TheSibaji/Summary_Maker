async function summarize(){
    const text = document.getElementById('inputText').value;
    console.log(text);

    const requestBody ={
    text: text.toString(),
    min_length: 100,
    max_length: 300,
    };
    
    // Check if the input text is not empty
    // if (inputText.trim() === "") {
    //     alert("Please enter text to summarize.");
    //     return;
    // }

    try{
        const response = await fetch('https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-text/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-key': '567c11ea14msh17376f724cab002p1b3fb6jsn912f03f421d9',
                'x-rapidapi-host': 'tldrthis.p.rapidapi.com'
            },
            body: JSON.stringify(requestBody)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json(); // Assuming the response is JSON, use response.text() if it's plain text
        console.log(result);

        const set = document.getElementById("summary");
        set.innerText = result.summary.toString();
    }catch (e){
        console.log(e);
    }
}
    