async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/users');
        const users = await response.json();

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            if (user.tier === 'chad') {
                alert('Thanks to your significant purchase, you will get 1 free flag.');
            } else if (user.tier === 'Leadership') {
                window.location.href = 'leadership.html';
            } else if (user.tier === 'Staff') {
                window.location.href = 'staff.html';
            }
        } else {
            alert('Invalid login');
        }
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}
