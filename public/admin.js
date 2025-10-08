// Simple in-memory storage for demo purposes
// In production, this would be replaced with proper backend API calls

let currentUser = null;

// Initialize with default admin
const admins = [
    {
        email: 'frankms@gmail.com',
        password: 'frankms@gmail.com',
        role: 'Super Admin',
        created: new Date().toISOString(),
        isDefault: true
    }
];

// Sample whitepaper downloads data
const whitepaperDownloads = [
    {
        name: 'John Smith',
        email: 'john.smith@techcorp.com',
        downloadDate: new Date(Date.now() - 86400000).toISOString() // Yesterday
    },
    {
        name: 'Sarah Johnson',
        email: 'sarah.j@innovate.io',
        downloadDate: new Date(Date.now() - 172800000).toISOString() // 2 days ago
    },
    {
        name: '',
        email: 'mike.chen@startup.com',
        downloadDate: new Date(Date.now() - 259200000).toISOString() // 3 days ago
    }
];

// DOM Elements
const loginModal = document.getElementById('loginModal');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const currentUserSpan = document.getElementById('currentUser');
const logoutBtn = document.getElementById('logoutBtn');

// Tab elements
const navBtns = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Modal elements
const addAdminModal = document.getElementById('addAdminModal');
const addAdminBtn = document.getElementById('addAdminBtn');
const closeAddAdminModal = document.getElementById('closeAddAdminModal');
const cancelAddAdmin = document.getElementById('cancelAddAdmin');
const addAdminForm = document.getElementById('addAdminForm');

// Profile form
const profileForm = document.getElementById('profileForm');
const profileEmail = document.getElementById('profileEmail');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    checkAuthStatus();
    setupEventListeners();
});

function checkAuthStatus() {
    const savedUser = localStorage.getItem('eco2_admin_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showDashboard();
    } else {
        showLogin();
    }
}

function setupEventListeners() {
    // Login form
    loginForm.addEventListener('submit', handleLogin);
    
    // Logout
    logoutBtn.addEventListener('click', handleLogout);
    
    // Navigation tabs
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
    
    // Add admin modal
    addAdminBtn.addEventListener('click', () => addAdminModal.classList.remove('hidden'));
    closeAddAdminModal.addEventListener('click', () => addAdminModal.classList.add('hidden'));
    cancelAddAdmin.addEventListener('click', () => addAdminModal.classList.add('hidden'));
    addAdminForm.addEventListener('submit', handleAddAdmin);
    
    // Profile form
    profileForm.addEventListener('submit', handlePasswordChange);
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const admin = admins.find(a => a.email === email && a.password === password);
    
    if (admin) {
        currentUser = admin;
        localStorage.setItem('eco2_admin_user', JSON.stringify(admin));
        showDashboard();
        loginError.classList.add('hidden');
    } else {
        loginError.textContent = 'Invalid email or password';
        loginError.classList.remove('hidden');
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('eco2_admin_user');
    showLogin();
}

function showLogin() {
    loginModal.classList.remove('hidden');
    dashboard.classList.add('hidden');
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}

function showDashboard() {
    loginModal.classList.add('hidden');
    dashboard.classList.remove('hidden');
    currentUserSpan.textContent = currentUser.email;
    profileEmail.value = currentUser.email;
    
    // Load initial data
    loadLeads();
    loadAdmins();
}

function switchTab(tabName) {
    // Update navigation
    navBtns.forEach(btn => {
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active', 'text-white', 'border-green-500');
            btn.classList.remove('text-gray-300');
        } else {
            btn.classList.remove('active', 'text-white', 'border-green-500');
            btn.classList.add('text-gray-300');
        }
    });
    
    // Update content
    tabContents.forEach(content => {
        if (content.id === tabName + 'Tab') {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }
    });
}

function loadLeads() {
    const tbody = document.getElementById('leadsTableBody');
    tbody.innerHTML = '';
    
    if (whitepaperDownloads.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" class="px-6 py-4 text-center text-gray-500">No downloads yet</td></tr>';
        return;
    }
    
    whitepaperDownloads.forEach(lead => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${lead.name || 'Not provided'}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${lead.email}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${formatDate(lead.downloadDate)}</td>
        `;
        tbody.appendChild(row);
    });
}

function loadAdmins() {
    const tbody = document.getElementById('adminsTableBody');
    tbody.innerHTML = '';
    
    admins.forEach(admin => {
        const row = document.createElement('tr');
        const canDelete = !admin.isDefault && currentUser.email !== admin.email;
        
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${admin.email}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${admin.role}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${formatDate(admin.created)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${canDelete ? `<button onclick="removeAdmin('${admin.email}')" class="text-red-600 hover:text-red-800">Remove</button>` : '-'}
            </td>
        `;
        tbody.appendChild(row);
    });
}

function handleAddAdmin(e) {
    e.preventDefault();
    
    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;
    
    // Check if admin already exists
    if (admins.find(a => a.email === email)) {
        alert('An admin with this email already exists');
        return;
    }
    
    // Add new admin
    admins.push({
        email: email,
        password: password,
        role: 'Admin',
        created: new Date().toISOString(),
        isDefault: false
    });
    
    // Close modal and refresh
    addAdminModal.classList.add('hidden');
    document.getElementById('adminEmail').value = '';
    document.getElementById('adminPassword').value = '';
    loadAdmins();
    
    alert(`Admin ${email} has been added successfully`);
}

function removeAdmin(email) {
    if (confirm(`Are you sure you want to remove admin: ${email}?`)) {
        const index = admins.findIndex(a => a.email === email);
        if (index > -1) {
            admins.splice(index, 1);
            loadAdmins();
            alert(`Admin ${email} has been removed`);
        }
    }
}

function handlePasswordChange(e) {
    e.preventDefault();
    
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (!newPassword) {
        alert('Please enter a new password');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    // Update password
    const adminIndex = admins.findIndex(a => a.email === currentUser.email);
    if (adminIndex > -1) {
        admins[adminIndex].password = newPassword;
        currentUser.password = newPassword;
        localStorage.setItem('eco2_admin_user', JSON.stringify(currentUser));
    }
    
    // Clear form
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    
    alert('Password updated successfully');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

// Function to add whitepaper download (called from main website)
function addWhitepaperDownload(name, email) {
    whitepaperDownloads.unshift({
        name: name,
        email: email,
        downloadDate: new Date().toISOString()
    });
    
    // If admin dashboard is open, refresh the leads table
    if (!dashboard.classList.contains('hidden')) {
        loadLeads();
    }
}

// Make function available globally for integration with main website
window.addWhitepaperDownload = addWhitepaperDownload;
