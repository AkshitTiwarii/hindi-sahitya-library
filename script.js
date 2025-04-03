// Top Indian Authors Data
const indianAuthors = [
    {
        id: "premchand",
        name: "मुंशी प्रेमचंद",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Premchand.jpg",
        bio: "हिंदी और उर्दू के महान लेखक...",
        books: [
            { title: "गोदान", year: "1936", cover: "https://m.media-amazon.com/images/I/51Z5Z8Z9ZJL.jpg", isbn: "8126713628" }
        ]
    }
    // Add other authors here
];

// Initialize Google Books API
function initGoogleBooks() {
    if (typeof google !== 'undefined' && google.books) {
        google.books.load();
        google.books.setOnLoadCallback(initializeApp);
    } else {
        console.error("Google Books API failed to load");
    }
}

// Main initialization
function initializeApp() {
    initializeAuthorIndex();
    setupEventListeners();
    loadDefaultBook();
}

// Event listeners setup
function setupEventListeners() {
    // Navigation events
    document.getElementById('navHome').addEventListener('click', showIndexPage);
    document.getElementById('homeLink').addEventListener('click', showIndexPage);
    
    // Search functionality
    document.getElementById('searchButton').addEventListener('click', handleSearch);
}

// Load default book
function loadDefaultBook() {
    loadBookByISBN('8126713628'); // Godaan by Premchand
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initGoogleBooks();
    
    // Fallback if Google Books fails
    setTimeout(() => {
        if (typeof google === 'undefined') {
            initializeApp();
        }
    }, 3000);
});