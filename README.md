# 🛍️ Shopping Cart Challenge  

## 📌 Overview  
Welcome to the **Shopping Cart Challenge**! Your task is to write the missing JavaScript logic to make this simple shopping cart functional.  

## 🎯 Objectives  
1. Display products dynamically in the **carousel**.  
2. Add products to the **cart** when clicking **"Add to Cart"**.  
3. Remove items from the **cart** using the **"Remove"** button.  
4. Update the **total price** dynamically as items are added/removed.  
5. Implement a **"Checkout"** button to navigate to a **"Thank You"** page.  
6. Implement **carousel navigation** for browsing products.  

---

## 📂 Provided Files  

- **`index.html`** (Contains the structure and elements for products, cart, and checkout).  
- **`styles.css`** (Contains pre-defined styling, keeping a Walmart-inspired theme).  
- **`script.js`** (Contains function stubs for you to complete).  

---

## 🚀 Your Task  

### **Step 1: Populate the Product List**  
Modify `script.js` to **dynamically populate** the product list in the carousel from an array of objects.  

---

### **Step 2: Implement the Shopping Cart**  
1. Complete the `addToCart(index)` function:  
   - Add the selected product to the cart.  
   - Update the cart display.  

2. Complete `updateCart()`:  
   - Refresh the cart UI.  
   - Recalculate the total price.  

3. Complete `removeFromCart(index)`:  
   - Remove the selected item from the cart.  
   - Update the cart total dynamically.  

---

### **Step 3: Implement Checkout Logic**  
1. Implement `checkout()`:  
   - Redirect to a **"Thank You"** page after clicking **"Checkout"**.  

---

### **Step 4: Implement Carousel Navigation**  
1. Ensure `prevSlide()` and `nextSlide()` allow smooth scrolling between products.  

---

## 🏆 Expected Outcome  
By the end of this challenge, clicking **"Add to Cart"** should:  
✅ Add the item to the cart.  
✅ Update the total price dynamically.  
✅ Allow removing items with the **"Remove"** button.  
✅ Redirect to a **Thank You** page when clicking **"Checkout"**.  
✅ Enable left/right navigation in the product carousel.  

---

## 🔗 Bonus  
- Add **local storage support** to **persist** cart items on page refresh.  
- Style the **checkout page** for a better user experience.  

---

## 🎉 Have Fun & Happy Coding! 🚀  
