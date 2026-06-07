// 1. Write a function that accepts a GitHub username as an argument and returns the details of that user if the user exists.

// Use https://api.github.com/users/<GitHub username>

 

// Use fetch and async/await for this exercise.

    async function getGitHubUserDetails(username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);       
            if (!response.ok) {
                throw new Error('User not found');
            }
            const userDetails = await response.json();
            return userDetails;
        } catch (error) {
            console.error(error);
            return null;
        }   
    }

    // Example usage:
    getGitHubUserDetails('divineObi').then(userDetails => {
        if (userDetails) {
            console.log(userDetails);
        } else {
            console.log('User not found');
        }
    });