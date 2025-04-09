// DOM Elements
const searchInput = document.getElementById('searchTools');
const toolsGrid = document.getElementById('toolsGrid');
const categoryButtons = document.querySelectorAll('[data-category]');

// Load header and footer
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', 'components/header.html');
    loadComponent('footer', 'components/footer.html');
    displayTools('all');
});

// Load components dynamically
async function loadComponent(id, url) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        document.getElementById(id).innerHTML = html;
    } catch (error) {
        console.error(`Error loading ${id}:`, error);
    }
}

// Display tools based on category
function displayTools(category) {
    toolsGrid.innerHTML = '';
    const toolsToDisplay = category === 'all' ? allTools : allTools.filter(tool => tool.category === category);
    
    toolsToDisplay.forEach(tool => {
        const toolCard = createToolCard(tool);
        toolsGrid.appendChild(toolCard);
    });
}

// Create tool card element
function createToolCard(tool) {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4 mb-4';
    
    col.innerHTML = `
        <div class="card tool-card h-100">
            <div class="card-body">
                <span class="badge bg-primary category-badge">${tool.category}</span>
                <h5 class="card-title">${tool.name}</h5>
                <p class="card-text">${tool.description}</p>
                <a href="${tool.url}" class="btn btn-primary">Use Tool</a>
            </div>
        </div>
    `;
    
    return col;
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredTools = allTools.filter(tool => {
        return tool.name.toLowerCase().includes(searchTerm) ||
               tool.description.toLowerCase().includes(searchTerm);
    });
    
    toolsGrid.innerHTML = '';
    filteredTools.forEach(tool => {
        const toolCard = createToolCard(tool);
        toolsGrid.appendChild(toolCard);
    });
});

// Category filter functionality
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayTools(category);
    });
});