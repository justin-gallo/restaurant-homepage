# restaurant-homepage
A restaurant homepage to practice building with webpack.

[Live Preview](https://justin-gallo.github.io/restaurant-homepage/)

## Things I Learned: 

- Webpack (and module bundling in general) is REALLY cool.
- ES6 modules for organizing code is really useful, and significantly increases readability of my code. 
- Improved my functional programming skills. I could have created each menu item by hand, but instead created a function to reduce repetitive code. 
- Learned how to include a favicon on the page's tab. 
- Learned how to create a subtree with Git and point gh-pages to that subtree using
```
git subtree push --prefix dist origin gh-pages
```
- Learned how to use code blocks in markdown like that fancy one I used above!

## Things to Improve: 

- I'd like to improve the responsiveness of the "About" page. The current layout is fine for mobile and tablet, but for the desktop layout I'd prefer the map to shift to a right column with the information on the left of it. This should make better use of the space available on wider devices and will reduce the need to scroll. 
- ~~It seems like there is a CSS issue on iOS devices in Safari; the spacing on the homepage is incorrect.~~ Resolved by adding a media query for mobile-specific styling. Also optimized the menu page to better fit mobile using the same method. 
