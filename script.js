function generateMadLib() {
    // Get values from input fields
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const verb = document.getElementById('verb').value;
    const pluralNoun = document.getElementById('pluralNoun').value;
    const color = document.getElementById('color').value;
    const adverb = document.getElementById('adverb').value;
    const bodyPart = document.getElementById('bodyPart').value;
    const emotion = document.getElementById('emotion').value;
    const animal = document.getElementById('animal').value;
    const food = document.getElementById('food').value;

    // Generate Mad Lib
    const madLib = `The ${adjective} ${noun} ${verb} over the ${color} ${pluralNoun}. They were ${adverb} ${emotion} when they saw a ${animal} with a ${bodyPart} eating ${food}.`;

    // Open a new window and display the result
    const newWindow = window.open('', '_blank');
    newWindow.document.write('<html><head><title>Mad Lib Result</title></head><body>');
    newWindow.document.write('<h1>Mad Lib Result</h1>');
    newWindow.document.write(`<p>${madLib}</p>`);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
}