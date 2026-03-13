
async function getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}


async function signInWithGoogle() {
    localStorage.removeItem('relevant_guest');
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin + '/feed.html' }
    });
    if (error) alert("Erro: " + error.message);
}

function exploreAsGuest() {
    localStorage.setItem('relevant_guest', 'true');
    window.location.href = 'feed.html';
}


async function logout() {
    await supabase.auth.signOut();
    localStorage.removeItem('relevant_guest');
    window.location.href = 'index.html';
}