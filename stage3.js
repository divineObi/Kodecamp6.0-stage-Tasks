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


    // 2. Write a class named KCStore that has "products" as it's property. It should also have methods to add, update, view and delete products.
    class KCStore {
        constructor() {
            this.products = [];
        }

        addProduct(product) {
            this.products.push(product);
        }

        updateProduct(index, updatedProduct) {
            if (index >= 0 && index < this.products.length) {
                this.products[index] = updatedProduct;
            }
        }

        viewProducts() {
            return this.products;
        }

        deleteProduct(index) {
            if (index >= 0 && index < this.products.length) {
                this.products.splice(index, 1);
            }
        }
    }
    