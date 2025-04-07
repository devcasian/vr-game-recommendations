const gameInfo = {
    'beatsaber': {
        title: 'Beat Saber Installation Instructions',
        imagePath: 'src/beatsaber.png'
    },
    'bladesorcery': {
        title: 'Blade and Sorcery Installation Instructions',
        imagePath: 'src/bladesorcery.png'
    },
    'bonelab': {
        title: 'Bonelab Installation Instructions',
        imagePath: 'src/bonelab.png'
    },
    'superhot': {
        title: 'Superhot VR Installation Instructions',
        imagePath: 'src/superhot.png'
    },
    'theclimb': {
        title: 'The Climb Installation Instructions',
        imagePath: 'src/theclimb.png'
    },
    'alyx': {
        title: 'Half-Life: Alyx Installation Instructions',
        imagePath: 'src/alyx.png'
    },
    'phasmophobia': {
        title: 'Phasmophobia Installation Instructions',
        imagePath: 'src/phasmophobia.png'
    },
    'thelab': {
        title: 'The Lab Installation Instructions',
        imagePath: 'src/thelab.png'
    },
    'jobsimulator': {
        title: 'Job Simulator Instructions',
        imagePath: 'src/jobsimulator.png'
    },
    'nanovr': {
        title: 'Nano Instructions',
        imagePath: 'src/nanovr.png'
    }
};

function showInstructions(game) {
    const modal = document.getElementById("instructionModal");
    const modalTitle = document.getElementById("modalTitle");
    const instructionImage = document.getElementById("instructionImage");
    
    instructionImage.innerHTML = '';
    
    if (gameInfo[game]) {
        modalTitle.textContent = gameInfo[game].title;
        
        const img = document.createElement('img');
        img.src = gameInfo[game].imagePath;
        img.alt = `${game} installation instructions`;
        instructionImage.appendChild(img);
    } else {
        modalTitle.textContent = "Installation Instructions";
        instructionImage.innerHTML = '<p>Screenshot not available</p>';
    }
    
    modal.style.display = "block";
}

function closeInstructions() {
    const modal = document.getElementById("instructionModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("instructionModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};