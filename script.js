// Configuration - CHANGE THESE TO HER ACTUAL NAME
const HER_REAL_NAME = "Marvel"; // Change "Sarah" to her actual name
const ALLOWED_VARIATIONS = ["Sweerie", "sweerie"]; 
// Add her name variations, nicknames, or pet names

// Sweet decline messages with emojis
const declineMessages = [
    "That's not quite right, my love! Try again ❤️",
    "Hmm, that's not the name in my heart. Give it another try! 💕",
    "Only one special name will work here, my dear! 💖",
    "My heart only recognizes one name. Try again! 😘",
    "That's a beautiful name, but not the one I'm thinking of! 💝",
    "Close, but not quite! Remember who this is for? 💗",
    "I'm waiting for a very special name... 😉",
    "Think of who makes my heart skip a beat! 💓",
    "Only her name opens this heart of mine! 💞",
    "The password to my heart is her name! 🔐💖"
];

// Sweet Descriptions Database (400+ sweet words for endless spins)
const sweetDescriptions = [
    "Your smile lights up my world brighter than a thousand suns.",
    "Your eyes hold galaxies of beauty that I could explore forever.",
    "Your laughter is my favorite melody, playing on repeat in my heart.",
    "Your kindness touches everyone around you like gentle morning dew.",
    "Your intelligence and wisdom leave me in awe every single day.",
    "Your strength inspires me to be a better person.",
    "Your compassion for others shows the incredible depth of your soul.",
    "Your sense of humor brings joy to even the darkest days.",
    "Your creativity turns ordinary moments into extraordinary memories.",
    "Your voice is the most beautiful sound I've ever heard.",
    "Your touch sends waves of warmth through my entire being.",
    "Your presence makes any place feel like home.",
    "Your dreams are as beautiful as the stars, and I want to help you reach them all.",
    "Your passion for life is infectious and makes everything more vibrant.",
    "Your resilience in facing challenges makes me admire you even more.",
    "Your honesty and integrity are rare treasures in this world.",
    "Your grace under pressure is something truly remarkable.",
    "Your intuition about people and situations is almost magical.",
    "Your generosity knows no bounds, and it makes my heart swell with pride.",
    "Your patience with others is a testament to your beautiful character.",
    "Your adventurous spirit makes every day an exciting journey.",
    "Your loyalty is a foundation I feel blessed to build upon.",
    "Your elegance in everything you do is simply breathtaking.",
    "Your curiosity about the world keeps our conversations endlessly fascinating.",
    "Your confidence when you walk into a room turns every head.",
    "Your vulnerability with me is the greatest gift I've ever received.",
    "Your ambition drives you to achieve amazing things, and I love watching you soar.",
    "Your gentle nature calms storms I didn't even know were raging inside me.",
    "Your artistic soul sees beauty where others see only ordinary things.",
    "Your cooking (or lack thereof) is adorable and endearing in every way.",
    "Your morning voice, sleepy and soft, is my favorite wake-up call.",
    "The way you bite your lip when you're thinking is impossibly cute.",
    "Your excitement over little things reminds me to appreciate life's simple joys.",
    "Your dedication to your passions is incredibly attractive.",
    "The way you care for animals shows your nurturing heart.",
    "Your appreciation for nature makes every walk together feel like an adventure.",
    "Your ability to listen makes people feel truly heard and valued.",
    "Your thoughtfulness in remembering small details about people is extraordinary.",
    "Your courage to be authentically yourself inspires everyone around you.",
    "Your smile lines tell stories of happiness that I want to keep adding to.",
    "Your hands fit perfectly in mine like they were made to be there.",
    "The scent of your perfume/hair/being lingers in my memory like a sweet dream.",
    "Your midnight conversations are treasures I keep locked in my heart.",
    "Your morning rituals, even the messy ones, are beautiful to witness.",
    "Your determination when you set your mind to something is unstoppable.",
    "Your ability to make people feel comfortable is a rare gift.",
    "Your wisdom beyond your years never ceases to amaze me.",
    "Your playfulness brings out the childlike joy in my heart.",
    "Your respect for others, regardless of differences, shows your true character.",
    "Your love for learning makes you constantly evolve into an even more amazing person.",
    "Your capacity to love deeply is the most beautiful thing I've ever experienced.",
    "The way you look at me makes me feel like the luckiest person alive.",
    "Your imperfections are perfect to me because they make you uniquely you.",
    "Your support in my dreams gives me strength I didn't know I had.",
    "Your forgiveness teaches me about true grace and moving forward.",
    "Your spontaneity keeps our relationship exciting and fresh.",
    "Your traditions and values are something I deeply respect and admire.",
    "Your fashion sense always leaves me breathless when I see you.",
    "Your singing voice, even if you think it's bad, is music to my ears.",
    "Your dance moves, coordinated or not, make my heart skip beats.",
    "Your handwriting tells a story of elegance and personality.",
    "Your taste in music/movies/books gives me insight into your beautiful mind.",
    "Your coffee/tea order is memorized in my heart along with everything else about you.",
    "Your sneezes are the cutest sounds I've ever heard.",
    "Your sleepy cuddles are my favorite place in the entire world.",
    "Your focused face when you're working on something is incredibly attractive.",
    "Your excitement when you talk about your passions makes my heart swell.",
    "Your ability to find solutions where others see problems is remarkable.",
    "Your gratitude for life's blessings, big and small, is humbling.",
    "Your resilience in bouncing back from setbacks is awe-inspiring.",
    "Your ability to make ordinary days feel like celebrations.",
    "Your nurturing nature makes everyone around you feel cared for.",
    "Your unique perspective on the world challenges and expands my own.",
    "Your commitment to personal growth is something I deeply admire.",
    "Your ability to stay calm in chaos is a superpower I wish I had.",
    "Your respect for yourself sets an example for everyone who knows you.",
    "Your love for family shows where your beautiful heart comes from.",
    "Your ability to communicate your feelings helps our relationship flourish.",
    "Your trust in me is a precious gift I will always protect.",
    "Your willingness to try new things with me creates memories I'll cherish forever.",
    "Your acceptance of my flaws makes me want to be a better person for you.",
    "Your partnership in life's journey is the greatest blessing I could ask for.",
    "Your very existence makes the world a better, more beautiful place.",
    "You are my favorite hello and my hardest goodbye.",
    "You are the missing piece I didn't know I was searching for.",
    "You are the calm in my storm and the fire in my soul.",
    "You are my today and all of my tomorrows.",
    "You are the reason I believe in magic and destiny.",
    "You are my safe place in a chaotic world.",
    "You are the dream I never want to wake up from.",
    "You are my greatest adventure and my favorite destination.",
    "You are the home my heart has always been searching for.",
    "You are the answer to questions I didn't even know how to ask."
];

// Generate more descriptions
const adjectives = ["beautiful", "amazing", "stunning", "breathtaking", "magnificent", "gorgeous", "exquisite", "lovely", "charming", "enchanting"];
const nouns = ["smile", "laugh", "voice", "touch", "presence", "spirit", "soul", "heart", "mind"];
const verbs = ["lights up", "warms", "fills", "touches", "enchants", "captivates", "inspires", "transforms"];
const qualities = ["kindness", "intelligence", "grace", "wisdom", "strength", "courage", "creativity", "passion"];

for (let i = 0; i < 200; i++) {
    const adj1 = adjectives[Math.floor(Math.random() * adjectives.length)];
    const adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const quality = qualities[Math.floor(Math.random() * qualities.length)];
    
    const templates = [
        `Your ${adj1} ${noun} ${verb} my world in ways I never imagined possible.`,
        `I'm constantly amazed by your ${adj1} ${quality} and ${adj2} spirit.`,
        `Every day, I discover something new and ${adj1} about you that makes me fall in love all over again.`,
        `Your ${adj1} presence ${verb} even the simplest moments with magic and joy.`,
        `The way you ${verb} with such ${adj1} ${quality} is truly inspiring.`,
        `I cherish your ${adj1} ${noun} more than you could ever know.`,
        `Your ${adj2} ${quality} combined with your ${adj1} heart makes you absolutely perfect.`,
        `When you share your ${adj1} ${noun}, the entire world seems to brighten.`,
        `Your ${adj2} approach to life ${verb} me to be a better person every day.`,
        `I could spend eternity admiring your ${adj1} ${noun} and never grow tired of it.`
    ];
    
    const description = templates[Math.floor(Math.random() * templates.length)];
    sweetDescriptions.push(description);
}

// Initialize variables
let spinCount = 0;
let uniqueCount = 0;
let isSpinning = false;
let usedDescriptions = new Set();
const totalDescriptions = sweetDescriptions.length;
let herName = "My Love";

// DOM Elements
const spinBtn = document.getElementById('spinBtn');
const spinWheel = document.getElementById('spinWheel');
const wheelSegments = document.querySelector('.wheel-segments');
const sparkleCard = document.getElementById('sparkleCard');
const sweetDescription = document.getElementById('sweetDescription');
const spinInstruction = document.getElementById('spinInstruction');
const spinCountElement = document.getElementById('spinCount');
const uniqueCountElement = document.getElementById('uniqueCount');
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
const galleryGrid = document.getElementById('galleryGrid');
const shuffleBtn = document.getElementById('shuffleBtn');
const surpriseBtn = document.getElementById('surpriseBtn');
const letterCards = document.querySelectorAll('.letter-card');
const letterModal = document.getElementById('letterModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeModalBtn = document.querySelector('.close-modal');
const secretItems = document.querySelectorAll('.surprise-item');
const infiniteHeart = document.getElementById('infiniteHeart');
const nameModal = document.getElementById('nameModal');
const nameInput = document.getElementById('nameInput');
const saveNameBtn = document.getElementById('saveNameBtn');
const herNameElement = document.getElementById('herName');

// Photo data - Replace with actual photos of her
const herPhotos = [
    { id: 1, url: '/assets/images/pic003.jpeg', alt: 'Beautiful smile', caption: 'That smile that melts my heart' },
    { id: 2, url: '/assets/images/pic004.jpeg', alt: 'Laughing moment', caption: 'Your laughter is my favorite sound' },
    { id: 3, url: '/assets/images/pic001.png', alt: 'Thoughtful look', caption: 'Lost in your beautiful thoughts' },
    { id: 4, url: '/assets/images/pic002.jpeg', alt: 'Adventurous spirit', caption: 'A quiet beauty that speaks to my heart.' },
    { id: 5, url: '/assets/images/pic008.jpeg', alt: 'Casual beauty', caption: 'Everyday beauty that takes my breath away' },
    { id: 6, url: '/assets/images/pic006.jpeg', alt: 'Special occasion', caption: 'Dressed up and stunning as always' },
    { id: 7, url: '/assets/images/pic007.jpeg', alt: 'Natural beauty', caption: 'Just being you, which is perfect' },
    { id: 8, url: '/assets/images/pic005.jpeg', alt: 'Fun moment', caption: 'Having fun and making memories' },
    { id: 9, url: '/assets/images/pic009.jpeg', alt: 'Quiet moment', caption: 'Peaceful and beautiful' },
    { id: 10, url: './assets/images/pic10.jpeg', alt: 'Together', caption: 'My favorite place is with you' }
];

// Love letters content
const loveLetters = {
    1: {
        title: "Why I Love You",
        content: "My dearest love, from the moment I met you, my world transformed. I love you not only for who you are but for who I become when I'm with you. Your smile is the sunrise that brightens my darkest days, your laughter is the melody that plays in my heart, and your touch is the comfort that soothes my soul. Every quality you possess, from your kindness to your strength, makes me fall in love with you more each day. You are my greatest blessing, my deepest joy, and my forever love. With all my heart, now and always."
    },
    2: {
        title: "My Promise",
        content: "My beautiful love, I promise to cherish you every single day. I promise to be your safe harbor in every storm, your biggest supporter in every dream, and your constant companion in every adventure. I promise to listen, to understand, to forgive, and to grow with you. I promise to love you not only in the easy moments but especially in the challenging ones. I promise to choose you, every day, for all the days of my life. You are my forever, and I am yours, completely and unconditionally."
    },
    3: {
        title: "Dreams With You",
        content: "My darling, when I dream of the future, you are in every scene. I dream of mornings waking up beside you, of shared sunsets and whispered conversations. I dream of building a life filled with laughter, love, and beautiful memories. I dream of growing old with you, hand in hand, heart to heart. Every dream I have is brighter because you're in it. With you, the future isn't just something to look forward to—it's a beautiful adventure I can't wait to begin. You are my dream come true, and I can't wait to live all our dreams together."
    }
};

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Show name input modal first
    showNameModal();
    
    // Initialize background elements
    createFloatingHearts();
    createTwinklingStars();
    createGlowingParticles();
    createLoveWords();
    
    // Initialize spin wheel segments
    initializeSpinWheel();
    
    // Initialize photo gallery with placeholders
    initializeGallery();
    
    // Set up event listeners
    setupEventListeners();
    
    // Start background music quietly
    backgroundMusic.volume = 0.3;
    
    // Check if user has scrolled to bottom for final surprise
    window.addEventListener('scroll', checkScrollForSurprise);
});


// Show name input modal with validation
function showNameModal() {
    nameModal.classList.remove('hidden');
    nameInput.focus();
    nameInput.value = ''; // Clear any previous input
    
    // Update the modal text to be more romantic
    const modalBody = nameModal.querySelector('.name-modal-body p');
    modalBody.textContent = `To unlock my heart, you must enter the most beautiful name I know...`;
    
    const nameHint = nameModal.querySelector('.name-hint');
    nameHint.textContent = `Hint: It's the name of the person who owns my heart ❤️`;
    
    saveNameBtn.addEventListener('click', function() {
        validateName();
    });
    
    // Allow Enter key to validate name
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            validateName();
        }
    });
    
    // Clear any previous error messages
    const existingError = nameModal.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add shake animation to input for attention
    nameInput.style.animation = 'none';
    setTimeout(() => {
        nameInput.style.animation = 'softPulse 2s infinite';
    }, 100);
    
    // Add CSS for animations
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes softPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes celebrate {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
        }
        
        .error-message {
            color: #ff6b6b;
            font-size: 0.9rem;
            margin-top: 10px;
            animation: shake 0.5s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        
        .success-message {
            color: #51cf66;
            font-size: 1rem;
            margin-top: 10px;
            animation: celebrate 0.5s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        
        .name-input-correct {
            border-color: #51cf66 !important;
            box-shadow: 0 0 20px rgba(81, 207, 102, 0.3) !important;
            animation: celebrate 0.5s ease !important;
        }
        
        .name-input-wrong {
            border-color: #ff6b6b !important;
            box-shadow: 0 0 20px rgba(255, 107, 107, 0.3) !important;
            animation: shake 0.5s ease !important;
        }
    `;
    document.head.appendChild(styleSheet);
}
//music unpause code
// Function to play/unpause the background music
function playMusic() {
    const music = document.getElementById('backgroundMusic');
    const musicBtn = document.getElementById('musicToggle');
    const musicStatus = musicBtn.querySelector('.music-status');
    const musicIcon = musicBtn.querySelector('i');
    
    if (music) {
        music.play()
            .then(() => {
                // Update button to playing state
                musicStatus.textContent = 'Playing';
                musicIcon.className = 'fas fa-music fa-beat'; // Add beating animation
                musicBtn.classList.add('playing');
                console.log('🎵 Music is playing!');
            })
            .catch(error => {
                console.error('Failed to play music:', error);
                // Show error message to user
                musicStatus.textContent = 'Click to play';
                alert('Click anywhere to enable music playback');
            });
    }
}

// Validate the entered name
function validateName() {
    const enteredName = nameInput.value.trim();
    
    // Clear any previous messages
    const existingMessage = nameModal.querySelector('.error-message, .success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Check if name is correct (case insensitive)
    const isCorrect = ALLOWED_VARIATIONS.some(variation => 
        enteredName === variation
    );
    
    if (isCorrect) {
        // Correct name entered
        herName = enteredName;
        herNameElement.textContent = enteredName;
        
        // Add success styling
        nameInput.classList.remove('name-input-wrong');
        nameInput.classList.add('name-input-correct');
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <i class="fas fa-heart"></i>
            That's my girl! Welcome to my heart, ${enteredName}! 
            <i class="fas fa-heart"></i>
        `;
        
        nameModal.querySelector('.name-modal-body').appendChild(successMessage);
        
        // Disable the input and button
        nameInput.disabled = true;
        saveNameBtn.disabled = true;
        saveNameBtn.innerHTML = '<i class="fas fa-check"></i> Access Granted!';
        saveNameBtn.style.background = 'linear-gradient(45deg, #51cf66, #40c057)';
        
        // Create celebration and close modal after delay
        createNameCelebration(enteredName);
        
        setTimeout(() => {
            nameModal.classList.add('hidden');
            createWelcomeCelebration();
            playMusic();
        }, 2000);
        
    } else {
        // Wrong name entered
        nameInput.classList.remove('name-input-correct');
        nameInput.classList.add('name-input-wrong');
        
        // Get random decline message
        const randomMessage = declineMessages[Math.floor(Math.random() * declineMessages.length)];
        
        // Show error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.innerHTML = `
            <i class="fas fa-times"></i>
            ${randomMessage}
        `;
        
        nameModal.querySelector('.name-modal-body').appendChild(errorMessage);
        
        // Shake the modal for emphasis
        nameModal.querySelector('.name-modal-content').style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            nameModal.querySelector('.name-modal-content').style.animation = '';
        }, 500);
        
        // Clear input and refocus
        setTimeout(() => {
            nameInput.value = '';
            nameInput.focus();
        }, 300);
        
        // Create wrong name animation
        createWrongNameAnimation();
    }
}

// Create celebration for correct name
function createNameCelebration(name) {
    const celebration = document.getElementById('celebration');
    celebration.innerHTML = '';
    celebration.style.opacity = '1';
    
    // Create celebration message
    const message = document.createElement('div');
    message.innerHTML = `Perfect! ❤️`;
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '40px';
    message.style.fontWeight = 'bold';
    message.style.color = '#51cf66';
    message.style.textShadow = '0 0 20px #51cf66';
    message.style.zIndex = '1002';
    message.style.pointerEvents = 'none';
    message.style.textAlign = 'center';
    message.style.opacity = '0';
    
    celebration.appendChild(message);
    
    // Animate message
    message.animate([
        { opacity: 0, transform: 'translate(-50%, -50%) scale(0)' },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1.2)' },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
    ], {
        duration: 1000,
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    });
    
    // Create heart explosion with green hearts
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💚';
            heart.style.position = 'fixed';
            heart.style.fontSize = `${Math.random() * 30 + 20}px`;
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.opacity = '1';
            heart.style.zIndex = '1001';
            heart.style.pointerEvents = 'none';
            
            celebration.appendChild(heart);
            
            // Animate heart
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 200 + 100;
            const duration = Math.random() * 1500 + 1000;
            
            heart.animate([
                { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
                { transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1)`, opacity: 0 }
            ], {
                duration: duration,
                easing: 'ease-out'
            });
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, duration);
        }, i * 50);
    }
}

// Create animation for wrong name
function createWrongNameAnimation() {
    const celebration = document.getElementById('celebration');
    celebration.innerHTML = '';
    celebration.style.opacity = '1';
    
    // Create sad message
    const message = document.createElement('div');
    message.innerHTML = 'Not quite... 💔';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '35px';
    message.style.fontWeight = 'bold';
    message.style.color = '#ff6b6b';
    message.style.textShadow = '0 0 15px #ff6b6b';
    message.style.zIndex = '1002';
    message.style.pointerEvents = 'none';
    message.style.textAlign = 'center';
    message.style.opacity = '0';
    
    celebration.appendChild(message);
    
    // Animate message
    message.animate([
        { opacity: 0, transform: 'translate(-50%, -50%) scale(0)' },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1.1)' },
        { opacity: 0, transform: 'translate(-50%, -50%) scale(0.9)' }
    ], {
        duration: 1500,
        easing: 'ease-out'
    });
    
    // Create broken hearts animation
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💔';
            heart.style.position = 'fixed';
            heart.style.fontSize = `${Math.random() * 25 + 15}px`;
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = `${Math.random() * 100}vh`;
            heart.style.opacity = '0.8';
            heart.style.zIndex = '1001';
            heart.style.pointerEvents = 'none';
            
            celebration.appendChild(heart);
            
            // Animate heart falling
            const duration = Math.random() * 2000 + 1000;
            
            heart.animate([
                { transform: 'translateY(-100px) rotate(0deg)', opacity: 0.8 },
                { transform: 'translateY(100vh) rotate(360deg)', opacity: 0 }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)'
            });
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, duration);
        }, i * 100);
    }
    
    // Hide celebration after animation
    setTimeout(() => {
        celebration.style.opacity = '0';
    }, 2000);
}

// Create welcome celebration with her name
function createWelcomeCelebration() {
    const celebration = document.getElementById('celebration');
    celebration.innerHTML = '';
    celebration.style.opacity = '1';
    
    // Create welcome message
    const message = document.createElement('div');
    message.innerHTML = `Welcome to My Heart, ${herName}! ❤️`;
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '45px';
    message.style.fontWeight = 'bold';
    message.style.color = '#ff6b8b';
    message.style.textShadow = '0 0 30px #ff6b8b';
    message.style.zIndex = '1002';
    message.style.pointerEvents = 'none';
    message.style.textAlign = 'center';
    message.style.opacity = '0';
    
    celebration.appendChild(message);
    
    // Animate message
    message.animate([
        { opacity: 0, transform: 'translate(-50%, -50%) scale(0)' },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        { opacity: 0, transform: 'translate(-50%, -50%) scale(1.2)' }
    ], {
        duration: 3000,
        easing: 'ease-out'
    });
    
    // Create heart explosion
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.fontSize = `${Math.random() * 40 + 20}px`;
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.opacity = '1';
            heart.style.zIndex = '1001';
            heart.style.pointerEvents = 'none';
            
            celebration.appendChild(heart);
            
            // Animate heart
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 300 + 100;
            const duration = Math.random() * 2000 + 1000;
            
            heart.animate([
                { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
                { transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1)`, opacity: 0 }
            ], {
                duration: duration,
                easing: 'ease-out'
            });
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, duration);
        }, i * 50);
    }
    
    // Hide celebration after animation
    setTimeout(() => {
        celebration.style.opacity = '0';
    }, 3500);
}

// Initialize spin wheel with segments
function initializeSpinWheel() {
    const segmentCount = 10;
    const segmentDegree = 360 / segmentCount;
    
    for (let i = 0; i < segmentCount; i++) {
        const segment = document.createElement('div');
        segment.className = 'wheel-segment';
        segment.style.transform = `rotate(${i * segmentDegree}deg)`;
        
        const content = document.createElement('div');
        content.className = 'segment-content';
        content.innerHTML = '💖';
        content.style.setProperty('--segment-rotate', `${-i * segmentDegree}deg`);
        
        segment.appendChild(content);
        wheelSegments.appendChild(segment);
    }
}

// Create floating hearts in background
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const heartCount = 30;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = `${Math.random() * 30 + 20}px`;
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.opacity = `${Math.random() * 0.5 + 0.2}`;
        heart.style.color = getRandomHeartColor();
        heart.style.zIndex = '-1';
        heart.style.animation = `float ${Math.random() * 20 + 10}s linear infinite`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(heart);
    }
    
    // Add float animation
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes float {
            0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: ${Math.random() * 0.5 + 0.2};
            }
            25% {
                transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(90deg);
            }
            50% {
                transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(180deg);
                opacity: ${Math.random() * 0.5 + 0.5};
            }
            75% {
                transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(270deg);
            }
            100% {
                transform: translate(0, 0) rotate(360deg);
                opacity: ${Math.random() * 0.5 + 0.2};
            }
        }
    `;
    document.head.appendChild(styleSheet);
}

// Create twinkling stars
function createTwinklingStars() {
    const container = document.querySelector('.twinkling-stars');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = `${Math.random() * 4 + 1}px`;
        star.style.height = star.style.width;
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.opacity = `${Math.random() * 0.8 + 0.2}`;
        star.style.boxShadow = '0 0 10px white';
        star.style.zIndex = '-1';
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite alternate`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(star);
    }
}

// Create glowing particles
function createGlowingParticles() {
    const container = document.querySelector('.glowing-particles');
    const particleCount = 50;
    const colors = ['#ff6b8b', '#9c88ff', '#ffd700', '#ff4757'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 20 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.opacity = `${Math.random() * 0.4 + 0.1}`;
        particle.style.filter = 'blur(5px)';
        particle.style.zIndex = '-1';
        particle.style.animation = `drift ${Math.random() * 40 + 20}s linear infinite`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        container.appendChild(particle);
    }
}

// Create floating love words
function createLoveWords() {
    const container = document.querySelector('.love-words');
    const words = ['Love', 'Forever', 'Beautiful', 'Amazing', 'Perfect', 'Sweet', 'Adore', 'Cherish', 'Treasure', 'Heart'];
    const colors = ['#ff6b8b', '#ffd700', '#9c88ff', '#ff4757', '#ff9a9e'];
    
    for (let i = 0; i < 20; i++) {
        const word = document.createElement('div');
        word.textContent = words[Math.floor(Math.random() * words.length)];
        word.style.position = 'absolute';
        word.style.fontSize = `${Math.random() * 20 + 15}px`;
        word.style.fontFamily = "'Dancing Script', cursive";
        word.style.left = `${Math.random() * 100}vw`;
        word.style.top = `${Math.random() * 100}vh`;
        word.style.opacity = `${Math.random() * 0.3 + 0.1}`;
        word.style.color = colors[Math.floor(Math.random() * colors.length)];
        word.style.zIndex = '-1';
        word.style.animation = `floatWord ${Math.random() * 30 + 15}s linear infinite`;
        word.style.animationDelay = `${Math.random() * 10}s`;
        word.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        
        container.appendChild(word);
    }
}

// Get random heart color
function getRandomHeartColor() {
    const colors = ['#ff6b8b', '#ff4757', '#9c88ff', '#ffd700', '#ff9a9e'];
    return colors[Math.floor(Math.random() * colors.length)];
}
// Show RANDOM photo surprise - T
function showRandomPhotoSurprise() {
    // Pick a random photo from the array
    const randomIndex = Math.floor(Math.random() * herPhotos.length);
    const randomPhoto = herPhotos[randomIndex];
    
    console.log('Showing random photo:', randomPhoto.id, randomPhoto.caption);
    
    // Call showPhotoSurprise with the random photo ID
    showPhotoSurprise(randomPhoto.id);
}


// Show random photo surprise
function showPhotoSurprise(photoId) {
    const photo = herPhotos.find(p => p.id == photoId) || herPhotos[0];
    
    // Create photo modal
    const modal = document.createElement('div');
    modal.className = 'photo-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '2000';
    modal.style.opacity = '0';
    modal.style.transition = 'opacity 0.3s';
    modal.style.backdropFilter = 'blur(5px)';
    
    modal.innerHTML = `
        <div class="photo-modal-content" style="max-width: 90%; max-height: 90%; text-align: center;">
            <div class="photo-container" style="margin: 0 auto 20px; max-width: 800px; max-height: 500px; overflow: hidden; border-radius: 15px; box-shadow: 0 10px 40px rgba(0,0,0,0.5);">
                <img src="${photo.url}" alt="${photo.alt}" style="width: 100%; height: 100%; object-fit: contain; max-height: 500px;">
            </div>
            <h3 style="color: white; font-family: 'Dancing Script', cursive; font-size: 2.5rem; margin-bottom: 10px; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">${photo.caption}</h3>
            <p style="color: #ffd700; font-size: 1.2rem; margin-bottom: 20px;">✨ You are always beautiful in my eyes ✨</p>
            <button class="close-photo-modal" style="background: #ff6b8b; color: white; border: none; padding: 12px 30px; border-radius: 50px; font-size: 1rem; cursor: pointer; font-weight: 600; transition: transform 0.2s, background 0.2s; box-shadow: 0 5px 15px rgba(255,107,139,0.4);" 
            onmouseover="this.style.background='#ff8ca3'; this.style.transform='scale(1.05)'" 
            onmouseout="this.style.background='#ff6b8b'; this.style.transform='scale(1)'">
                <i class="fas fa-heart" style="margin-right: 8px;"></i>Close
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Fade in
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    // Add close event
    const closeBtn = modal.querySelector('.close-photo-modal');
    closeBtn.addEventListener('click', () => {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    });
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        }
    });
    
    // Add celebration
    createHeartExplosion();
}

// Initialize photo gallery
// Initialize photo gallery with your real photos
function initializeGallery() {
    herPhotos.forEach((photo, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.id = photo.id;
        
        // Create image container
        const imgContainer = document.createElement('div');
        imgContainer.className = 'image-container';
        
        // Create actual image element
        const img = new Image();
        img.src = photo.url;
        img.alt = photo.alt || 'Memory with you';
        img.loading = 'lazy';
        
        // Add loading animation
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.4s ease';
        
        // When image loads successfully
        img.onload = function() {
            this.style.opacity = '1';
            this.classList.add('loaded');
            
            // Remove loading spinner
            const spinner = this.parentElement.querySelector('.loading-spinner');
            if (spinner) spinner.remove();
            
            // Remove placeholder background
            this.parentElement.style.background = 'none';
        };
        
        // Error handling - if image fails to load, show fallback
        img.onerror = function() {
            this.style.display = 'none';
            
            // Create fallback with gradient and heart
            const fallback = document.createElement('div');
            fallback.className = 'photo-fallback';
            fallback.style.background = `linear-gradient(135deg, #ff6b8b, #ff9a9e)`;
            fallback.innerHTML = `
                <i class="fas fa-heart" style="font-size: 3rem; color: white; opacity: 0.8;"></i>
                <p style="color: white; margin-top: 10px;">${photo.caption}</p>
            `;
            
            this.parentElement.appendChild(fallback);
            
            // Remove spinner
            const spinner = this.parentElement.querySelector('.loading-spinner');
            if (spinner) spinner.remove();
        };
        
        // Loading spinner
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        spinner.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        // Overlay with caption
        const overlay = document.createElement('div');
        overlay.className = 'photo-overlay';
        overlay.innerHTML = `<h3>${photo.caption}</h3>`;
        
        // Assemble the gallery item
        imgContainer.appendChild(img);
        imgContainer.appendChild(spinner);
        galleryItem.appendChild(imgContainer);
        galleryItem.appendChild(overlay);
        galleryGrid.appendChild(galleryItem);
        
        // Add click event to show photo surprise
        galleryItem.addEventListener('click', function() {
            showPhotoSurprise(photo.id);
        });
    });
}

// No need for getRandomColor anymore, but keep it if you want to use it elsewhere

// Set up all event listeners
function setupEventListeners() {
    // Spin button
    spinBtn.addEventListener('click', handleSpin);
    
    // Music toggle
    musicToggle.addEventListener('click', toggleMusic);
    
    // Shuffle gallery
    shuffleBtn.addEventListener('click', shuffleGallery);
    
    // Photo surprise button
    surpriseBtn.addEventListener('click', showRandomPhotoSurprise);
    
    // Love letters - FIXED with proper event delegation
    letterCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            const letterId = this.dataset.letter;
            openLoveLetter(letterId);
        });
    });
    
    // Close modal button
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeLoveLetter);
    }
    
    // Close modal when clicking outside
    letterModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeLoveLetter();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && letterModal.classList.contains('active')) {
            closeLoveLetter();
        }
    });
    
    // Secret items
    secretItems.forEach(item => {
        item.addEventListener('click', function() {
            const secretId = this.id;
            revealSecret(secretId);
        });
    });
    
    // Double-click easter egg
    let lastClick = 0;
    document.addEventListener('click', function(e) {
        const currentTime = new Date().getTime();
        if (currentTime - lastClick < 500) {
            // Double click detected
            createDoubleClickSurprise(e.clientX, e.clientY);
        }
        lastClick = currentTime;
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === ' ') {
            e.preventDefault();
            handleSpin();
        } else if (e.key === 'm' || e.key === 'M') {
            toggleMusic();
        } else if (e.key === 's' || e.key === 'S') {
            showRandomPhotoSurprise();
        }
    });
}

// Handle spin wheel
function handleSpin() {
    if (isSpinning) return;
    
    isSpinning = true;
    spinBtn.disabled = true;
    spinWheel.classList.add('spinning');
    
    // Get random description
    let randomIndex;
    let attempts = 0;
    
    // Try to get a description that hasn't been used recently
    do {
        randomIndex = Math.floor(Math.random() * totalDescriptions);
        attempts++;
    } while (usedDescriptions.has(randomIndex) && attempts < 50 && usedDescriptions.size < totalDescriptions * 0.8);
    
    // If we've used too many, reset the used set
    if (usedDescriptions.size > totalDescriptions * 0.8) {
        usedDescriptions.clear();
    }
    
    // If this is a new unique description, increment count
    if (!usedDescriptions.has(randomIndex)) {
        uniqueCount++;
        uniqueCountElement.textContent = uniqueCount;
    }
    
    usedDescriptions.add(randomIndex);
    const description = sweetDescriptions[randomIndex];
    
    // Update spin count
    spinCount++;
    spinCountElement.textContent = spinCount;
    
    // Calculate spin parameters
    const baseSpins = 5; // Minimum spins
    const extraSpins = Math.floor(Math.random() * 3) + 2; // 2-4 extra spins
    const totalSpins = baseSpins + extraSpins;
    const rotation = (totalSpins * 360) + (Math.random() * 360); // Random final position
    
    // Apply spin animation
    spinWheel.style.transition = 'transform 3s cubic-bezier(0.2, 0.8, 0.3, 1)';
    spinWheel.style.transform = `rotate(${rotation}deg)`;
    
    // Hide instruction, show sparkle card after delay
    spinInstruction.classList.add('hidden');
    
    setTimeout(() => {
        // Update description text with typewriter effect
        sweetDescription.textContent = '';
        sparkleCard.classList.remove('hidden');
        
        // Typewriter effect
        typeWriterEffect(description, sweetDescription, 30, () => {
            // Celebration after text is fully displayed
            createSparkleCelebration();
        });
        
        // Remove spinning class and reset wheel after a moment
        setTimeout(() => {
            spinWheel.classList.remove('spinning');
            spinWheel.style.transition = 'transform 1s';
            spinWheel.style.transform = `rotate(${rotation % 360}deg)`;
        }, 500);
        
        // Re-enable spin button
        setTimeout(() => {
            isSpinning = false;
            spinBtn.disabled = false;
        }, 3500);
    }, 3000);
}

// Typewriter effect
function typeWriterEffect(text, element, speed, callback) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    
    type();
}

// Create sparkle celebration
function createSparkleCelebration() {
    const celebration = document.getElementById('celebration');
    celebration.innerHTML = '';
    celebration.style.opacity = '1';
    
    // Create sparkles
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = ['❤️', '✨', '🌟', '💫', '⭐'][Math.floor(Math.random() * 5)];
            sparkle.style.position = 'fixed';
            sparkle.style.fontSize = `${Math.random() * 30 + 20}px`;
            sparkle.style.left = '50%';
            sparkle.style.top = '50%';
            sparkle.style.opacity = '1';
            sparkle.style.zIndex = '1001';
            sparkle.style.pointerEvents = 'none';
            
            celebration.appendChild(sparkle);
            
            // Animate sparkle
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 200 + 100;
            const duration = Math.random() * 1000 + 500;
            
            sparkle.animate([
                { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
                { transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1)`, opacity: 0 }
            ], {
                duration: duration,
                easing: 'ease-out'
            });
            
            // Remove sparkle after animation
            setTimeout(() => {
                sparkle.remove();
            }, duration);
        }, i * 30);
    }
    
    // Hide celebration after animation
    setTimeout(() => {
        celebration.style.opacity = '0';
    }, 2000);
}

// Toggle background music
function toggleMusic() {
    const musicIcon = musicToggle.querySelector('i');
    const musicStatus = musicToggle.querySelector('.music-status');
    
    if (backgroundMusic.paused) {
        backgroundMusic.play().then(() => {
            musicIcon.className = 'fas fa-pause';
            musicStatus.textContent = 'Pause';
        }).catch(e => {
            console.log("Autoplay prevented:", e);
            alert("Please interact with the page to play music, then click the music button again.");
        });
    } else {
        backgroundMusic.pause();
        musicIcon.className = 'fas fa-music';
        musicStatus.textContent = 'Play';
    }
}

// Shuffle gallery
function shuffleGallery() {
    const items = Array.from(galleryGrid.children);
    
    // Shuffle array using Fisher-Yates algorithm
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        galleryGrid.appendChild(items[j]);
    }
    
    // Add shuffle animation
    galleryGrid.style.animation = 'none';
    setTimeout(() => {
        galleryGrid.style.animation = 'cardAppear 0.8s';
    }, 10);
    
    // Create shuffle effect
    createShuffleEffect();
}

// Create shuffle effect
function createShuffleEffect() {
    const celebration = document.getElementById('celebration');
    celebration.innerHTML = '';
    celebration.style.opacity = '1';
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.fontSize = `${Math.random() * 25 + 15}px`;
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.opacity = '1';
        heart.style.zIndex = '1001';
        heart.style.pointerEvents = 'none';
        
        celebration.appendChild(heart);
        
        // Animate heart
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 200 + 100;
        const duration = Math.random() * 1000 + 500;
        
        heart.animate([
            { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
            { transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'ease-out'
        });
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, duration);
    }
    
    setTimeout(() => {
        celebration.style.opacity = '0';
    }, 1500);
}
// Open love letter - FIXED
// Open love letter - DEBUGGED VERSION
function openLoveLetter(letterId) {
    console.log('Opening letter:', letterId);
    
    const letter = loveLetters[letterId];
    if (!letter) {
        console.error('Letter not found:', letterId);
        return;
    }
    
    console.log('Letter found:', letter.title);
    
    // Update modal content
    modalTitle.textContent = letter.title;
    modalText.textContent = letter.content;
    
    console.log('Modal elements:', {
        modalTitle: modalTitle,
        modalText: modalText,
        letterModal: letterModal
    });
    
    // Show the modal
    letterModal.classList.add('active');
    console.log('Modal class added, should be visible now');
    
    // Prevent background scrolling
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    
    console.log('Modal should be open now');
    
    // Add letter opening effect
    createLetterOpeningEffect();
}

// Close love letter - DEBUGGED VERSION
function closeLoveLetter() {
    console.log('Closing letter modal');
    
    // Hide the modal
    letterModal.classList.remove('active');
    
    // Restore background scrolling
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    
    if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    
    console.log('Modal closed');
}

// Create letter opening effect
function createLetterOpeningEffect() {
    const celebration = document.getElementById('celebration');
    celebration.innerHTML = '';
    celebration.style.opacity = '1';
    
    // Create floating hearts
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💌';
        heart.style.position = 'fixed';
        heart.style.fontSize = `${Math.random() * 30 + 20}px`;
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.opacity = '1';
        heart.style.zIndex = '1001';
        heart.style.pointerEvents = 'none';
        
        celebration.appendChild(heart);
        
        // Animate heart
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 150 + 50;
        const duration = Math.random() * 1500 + 1000;
        
        heart.animate([
            { transform: 'translate(-50%, -50%) scale(0) rotate(0deg)', opacity: 1 },
            { transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1) rotate(360deg)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'ease-out'
        });
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, duration);
    }
    
    setTimeout(() => {
        celebration.style.opacity = '0';
    }, 2000);
}

// Reveal secret
function revealSecret(secretId) {
    const secrets = {
        secret1: {
            title: "You Found a Secret!",
            message: "My love for you grows stronger every single day. You are the most precious gift in my life.",
            icon: "❤️"
        },
        secret2: {
            title: "Shooting Star Wish",
            message: "I wished for you before I even knew you existed. Now you're here, making every wish come true.",
            icon: "⭐"
        },
        secret3: {
            title: "Locked Away in My Heart",
            message: "All my favorite memories are safely stored in my heart, and every single one has you in it.",
            icon: "🔒"
        }
    };
    
    const secret = secrets[secretId] || secrets.secret1;
    
    // Create secret notification
    const notification = document.createElement('div');
    notification.className = 'secret-notification';
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.background = 'linear-gradient(145deg, rgba(255, 107, 139, 0.9), rgba(156, 136, 255, 0.9))';
    notification.style.backdropFilter = 'blur(10px)';
    notification.style.color = 'white';
    notification.style.padding = '20px';
    notification.style.borderRadius = '15px';
    notification.style.zIndex = '1000';
    notification.style.maxWidth = '300px';
    notification.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    notification.style.transform = 'translateX(400px)';
    notification.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
            <div style="font-size: 30px;">${secret.icon}</div>
            <h4 style="margin: 0; font-family: 'Dancing Script', cursive; font-size: 1.8rem;">${secret.title}</h4>
        </div>
        <p style="margin: 0; font-size: 1rem;">${secret.message}</p>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Create celebration
    createHeartExplosion();
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 500);
    }, 5000);
}

// Create heart explosion
function createHeartExplosion() {
    const celebration = document.getElementById('celebration');
    celebration.innerHTML = '';
    celebration.style.opacity = '1';
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.fontSize = `${Math.random() * 30 + 20}px`;
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.opacity = '1';
        heart.style.zIndex = '1001';
        heart.style.pointerEvents = 'none';
        
        celebration.appendChild(heart);
        
        // Animate heart
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 200 + 100;
        const duration = Math.random() * 1500 + 1000;
        
        heart.animate([
            { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
            { transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'ease-out'
        });
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, duration);
    }
    
    setTimeout(() => {
        celebration.style.opacity = '0';
    }, 2000);
}

// Create double click surprise
function createDoubleClickSurprise(x, y) {
    const celebration = document.getElementById('celebration');
    celebration.innerHTML = '';
    celebration.style.opacity = '1';
    
    // Create surprise message
    const message = document.createElement('div');
    message.innerHTML = 'I Love You!';
    message.style.position = 'fixed';
    message.style.left = `${x}px`;
    message.style.top = `${y}px`;
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '40px';
    message.style.fontWeight = 'bold';
    message.style.color = '#ffd700';
    message.style.textShadow = '0 0 20px #ffd700';
    message.style.zIndex = '1002';
    message.style.pointerEvents = 'none';
    message.style.opacity = '0';
    
    celebration.appendChild(message);
    
    // Animate message
    message.animate([
        { opacity: 0, transform: 'translate(-50%, -50%) scale(0)' },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        { opacity: 0, transform: 'translate(-50%, -50%) scale(1.5)' }
    ], {
        duration: 2000,
        easing: 'ease-out'
    });
    
    // Create hearts around the message
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.fontSize = `${Math.random() * 25 + 15}px`;
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        heart.style.opacity = '1';
        heart.style.zIndex = '1001';
        heart.style.pointerEvents = 'none';
        
        celebration.appendChild(heart);
        
        // Animate heart
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 100 + 50;
        const duration = Math.random() * 1500 + 1000;
        
        heart.animate([
            { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
            { transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'ease-out'
        });
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, duration);
    }
    
    // Remove message after animation
    setTimeout(() => {
        message.remove();
        celebration.style.opacity = '0';
    }, 2000);
}

// Check scroll for final surprise
function checkScrollForSurprise() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    
    if (scrollTop + clientHeight >= scrollHeight - 100) {
        // User has scrolled to bottom
        infiniteHeart.classList.add('active');
        
        // Create final celebration
        if (!window.finalCelebrationShown) {
            createFinalCelebration();
            window.finalCelebrationShown = true;
        }
    }
}

// Create final celebration
function createFinalCelebration() {
    const celebration = document.getElementById('celebration');
    celebration.innerHTML = '';
    celebration.style.opacity = '1';
    
    // Create final message
    const message = document.createElement('div');
    message.innerHTML = 'Forever Yours ❤️';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '60px';
    message.style.fontWeight = 'bold';
    message.style.color = '#ff6b8b';
    message.style.textShadow = '0 0 30px #ff6b8b';
    message.style.zIndex = '1002';
    message.style.pointerEvents = 'none';
    message.style.textAlign = 'center';
    message.style.opacity = '0';
    
    celebration.appendChild(message);
    
    // Animate message
    message.animate([
        { opacity: 0, transform: 'translate(-50%, -50%) scale(0)' },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        { opacity: 0, transform: 'translate(-50%, -50%) scale(1.2)' }
    ], {
        duration: 4000,
        easing: 'ease-out'
    });
    
    // Create massive heart rain
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = ['❤️', '💖', '💗', '💓', '💕'][Math.floor(Math.random() * 5)];
            heart.style.position = 'fixed';
            heart.style.fontSize = `${Math.random() * 40 + 20}px`;
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = '-50px';
            heart.style.opacity = '0.8';
            heart.style.zIndex = '1001';
            heart.style.pointerEvents = 'none';
            
            celebration.appendChild(heart);
            
            // Animate heart falling
            const duration = Math.random() * 3000 + 2000;
            
            heart.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 0.8 },
                { transform: 'translateY(100vh) rotate(360deg)', opacity: 0 }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
            });
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, duration);
        }, i * 100);
    }
    
    // Hide celebration after animation
    setTimeout(() => {
        celebration.style.opacity = '0';
    }, 5000);
}
// ===== SCROLL REVEAL FOR VIDEO =====
function revealOnScroll() {
    const videoContainer = document.querySelector('.valentine-video-container');
    
    if (!videoContainer) return;
    
    const windowHeight = window.innerHeight;
    const revealTop = videoContainer.getBoundingClientRect().top;
    const revealPoint = 150;
    
    if (revealTop < windowHeight - revealPoint) {
        videoContainer.classList.add('revealed');
        
        // Auto-play video when revealed
        const video = document.querySelector('.valentine-video');
        if (video && video.tagName === 'VIDEO') {
            video.play();
        }
    }
}

// Listen for scroll
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);