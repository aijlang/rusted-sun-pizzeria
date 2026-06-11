/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║          RUSTED SUN PIZZERIA  —  MENU & PRICE LIST               ║
 * ╠═══════════════════════════════════════════════════════════════════╣
 * ║  This file controls everything on the Menu section of the site:  ║
 * ║  item names, descriptions, and prices.                           ║
 * ║                                                                   ║
 * ║  HOW TO MAKE CHANGES ON GITHUB                                   ║
 * ║  ─────────────────────────────                                   ║
 * ║  1. Go to:  github.com/aijlang/rusted-sun-pizzeria               ║
 * ║  2. Click   menu.js   in the file list                           ║
 * ║  3. Click the pencil icon  ✏  in the top-right to edit           ║
 * ║  4. Make your changes in the sections below                      ║
 * ║  5. Scroll to the bottom of the page                             ║
 * ║  6. Click  "Commit changes"  →  click the green button           ║
 * ║                                                                   ║
 * ║  The website updates automatically within about 1 minute.        ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 *
 *
 * ┌─────────────────────────────────────────────────────────────────┐
 * │  CHANGE A PRICE                                                 │
 * └─────────────────────────────────────────────────────────────────┘
 *
 *   Find the item name, then change the number after  price:
 *   No dollar sign — just the number.
 *
 *   EXAMPLE:  price: 10.50   →   price: 11.50
 *
 *   For specialty pizzas, there are three prices on one line:
 *     calzone: 13.25,  small: 22.50,  large: 30.75
 *   Change whichever number(s) need updating.
 *
 *
 * ┌─────────────────────────────────────────────────────────────────┐
 * │  ADD A MENU ITEM                                                │
 * └─────────────────────────────────────────────────────────────────┘
 *
 *   1. Find the correct section below (STARTERS, SALADS, PIZZAS…).
 *   2. Copy one of the existing item lines/blocks.
 *   3. Paste it right before the  ],  that ends the section.
 *   4. Change the name, price, and description to the new item.
 *   5. Make sure there is a comma  ,  after the  }  of every item.
 *
 *   Item formats by section:
 *
 *   Starter / Salad / Dessert / Beverage (one line):
 *     { name: "Item Name", price: 10.00, desc: "Description here." },
 *
 *   Item with a photo (add the photo: field):
 *     { name: "Item Name", price: 10.00, desc: "Description.", photo: "images/filename.webp" },
 *
 *   Specialty Pizza — calzone / 12-inch / 16-inch prices:
 *     { name: "Pizza Name", tag: "Label", desc: "Toppings listed here.", calzone: 13.25, small: 22.50, large: 30.75 },
 *     ↳ Remove  tag: "Label",  if you don't want a colored badge on the card.
 *     ↳ Add  photo: "images/filename.webp",  if there is a photo.
 *
 *   Pasta — multiple price options:
 *     { name: "Dish Name", tag: "Label", desc: "Description.", prices: [
 *       { label: "Option A", price: 13.50 },
 *       { label: "Option B", price: 14.00 },
 *     ]},
 *
 *
 * ┌─────────────────────────────────────────────────────────────────┐
 * │  REMOVE A MENU ITEM                                             │
 * └─────────────────────────────────────────────────────────────────┘
 *
 *   Find the item's  { ... },  block and delete the entire thing
 *   including the comma at the end.
 *
 *
 * ┌─────────────────────────────────────────────────────────────────┐
 * │  ADD OR REMOVE A TOPPING OR SAUCE (Create Your Own section)     │
 * └─────────────────────────────────────────────────────────────────┘
 *
 *   Scroll down to the  byo:  section near the bottom of this file.
 *   Add or delete a  "Name",  entry in the  sauces  or  toppings  list.
 *
 *
 * ┌─────────────────────────────────────────────────────────────────┐
 * │  IMPORTANT: DO NOT CHANGE ANYTHING OUTSIDE THE MENU = { }      │
 * └─────────────────────────────────────────────────────────────────┘
 *   Only edit the values (names, numbers, descriptions) inside the
 *   curly braces  {  }  below. Do not change  const MENU =  or the
 *   semicolon at the very end.
 *
 */

const MENU = {


  // ══════════════════════════════════════════════════════════════════
  //  STARTERS
  //  Format:  { name: "Name", price: 0.00, desc: "Description." },
  //  Add photo:  photo: "images/filename.webp"   (optional)
  // ══════════════════════════════════════════════════════════════════
  starters: [
    { name: "Buffalo Chicken",           price: 10.50, desc: "Boneless skinless chicken and jalapeños drenched in buffalo sauce (not wings)." },
    { name: "Killer Cheese Dip",         price: 11.50, desc: "Artichoke heart, sun-dried tomato, spinach, and three cheeses — served with bread stix." },
    { name: "Garlic Bread Stix & Sauce", price:  9.25, desc: "Warm housemade garlic bread sticks with marinara dipping sauce." },
    { name: "Bread Stix with Mozzarella", price: 10.25, desc: "Our housemade bread sticks topped with melted mozzarella cheese, served with marinara dipping sauce.", photo: "images/breadstix-mozzarella.webp" },
  ],


  // ══════════════════════════════════════════════════════════════════
  //  SALADS
  //  Format:  { name: "Name", price: 0.00, desc: "Description." },
  // ══════════════════════════════════════════════════════════════════
  salads: [
    { name: "Pasta Salad",        price: 12.75, desc: "Penne pasta, salami, Canadian bacon, feta, romano, black & green olive, green & red pepper, fresh tomato, balsamic vinaigrette." },
    { name: "Garden Salad",       price: 11.75, desc: "Mixed greens, tomato, cucumber, croutons, romano cheese, choice of dressing. Add chicken or shrimp +$0.50." },
    { name: "Bleu Chicken Salad", price: 12.25, desc: "Mixed greens, bleu cheese melted over chicken, blanched broccoli, red onion, red pepper, choice of dressing." },
    { name: "Italian Salad",      price: 12.75, desc: "Mixed greens, salami, Canadian bacon, mozzarella, green olive, artichoke heart, green pepper, fresh tomato, choice of dressing." },
    { name: "Dinner Salad",       price:  6.50, desc: "Mixed greens, red onion, red pepper, choice of dressing." },
  ],


  // ══════════════════════════════════════════════════════════════════
  //  SPECIALTY PIZZAS
  //
  //  Every pizza can also be ordered as a calzone.
  //  Three prices per pizza:  calzone / small (12") / large (16")
  //
  //  Format:
  //    { name: "Name", tag: "Label", desc: "Toppings.", calzone: 0.00, small: 0.00, large: 0.00 },
  //
  //  tag:   optional badge shown on the card (e.g. "Classic", "Spicy")
  //         Remove the  tag: "...",  line entirely if not needed.
  //
  //  photo: optional image  (e.g.  photo: "images/pizza-name.webp" )
  //         Remove the  photo: "...",  line if there is no photo.
  //
  //  calzoneFeature: true   marks which pizza is shown as the featured
  //                         card on the Calzones tab. Only one pizza
  //                         should have this.
  //
  //  calzonePhoto: "images/filename.webp"   optional separate photo
  //                         shown on the Calzones tab for that pizza.
  // ══════════════════════════════════════════════════════════════════
  pizzas: [
    { name: "Margherita",      tag: "Classic",         desc: "Marinara, mozzarella, fresh basil, fresh tomato.",                                                                     calzone: 13.25, small: 22.50, large: 30.75 },
    { name: "Bleu Chicken",    tag: "House Specialty",  desc: "Olive oil, mozzarella, chicken, red onion, red pepper, bleu cheese.",                                                 calzone: 13.25, small: 22.50, large: 30.75 },
    { name: "Round Up",        tag: "Fan Favorite",     desc: "BBQ sauce, mozzarella, chicken, bacon, red onion, red pepper, drizzled with buffalo sauce.",                          calzone: 13.25, small: 22.50, large: 30.75 },
    { name: "Buffalo Chicken", tag: "Spicy",            desc: "Mozzarella, green pepper, red pepper, chicken drenched in buffalo sauce.",                                           calzone: 13.00, small: 22.00, large: 30.00 },
    { name: "Combo",           tag: "Meat Lover",       desc: "Marinara, mozzarella, pepperoni, Italian sausage, Canadian bacon.",                                                  calzone: 13.75, small: 23.25, large: 31.75, calzoneFeature: true, calzonePhoto: "images/calzone-combo.webp" },
    { name: "Pesto Chicken",   tag: "Chef's Pick",      desc: "Pesto, mozzarella, chicken, artichoke heart, red onion.",                                                            calzone: 13.00, small: 22.00, large: 30.00 },
    { name: "Shrimp Alfredo",  tag: "Seafood",          desc: "Alfredo, mozzarella, shrimp, broccoli, red onion.",                                                                  calzone: 13.00, small: 22.00, large: 30.00 },
    { name: "Chicken Alfredo",                          desc: "Alfredo, mozzarella, chicken, broccoli, red onion, portabella mushroom.",                                            calzone: 13.25, small: 22.50, large: 30.75 },
    { name: "BBQ Chicken",                              desc: "Mozzarella, red onion, chicken drenched in BBQ sauce.",                                                              calzone: 12.50, small: 21.00, large: 28.75 },
    { name: "Mediterranean",   tag: "Vegetarian",       desc: "Marinara, mozzarella, salami, red onion, red pepper, artichoke heart, green olive, feta cheese.",                   calzone: 13.25, small: 22.50, large: 30.75, photo: "images/pizza-mediterranean.webp" },
    { name: "Hawaiian",        tag: "Classic",          desc: "Marinara, mozzarella, Canadian bacon, pineapple.",                                                                   calzone: 12.50, small: 21.00, large: 28.75 },
    { name: "Deluxe Veggie",   tag: "Vegetarian",       desc: "Marinara, mozzarella, red pepper, portabella mushroom.",                                                             calzone: 13.25, small: 23.25, large: 31.75 },
  ],


  // ══════════════════════════════════════════════════════════════════
  //  PASTA
  //
  //  For dishes with multiple price options (e.g. plain vs. with meat),
  //  use the prices: [ ] list. Each option gets a label and a price.
  //
  //  For a single-price pasta dish, use the simple format:
  //    { name: "Name", price: 0.00, desc: "Description." },
  // ══════════════════════════════════════════════════════════════════
  pasta: [
    { name: "Lasagna", tag: "Fan Favorite", desc: "Pasta layered with ricotta and mozzarella cheese, red onion, red pepper, spinach, zucchini, marinara.<br>Add chicken, sausage, or meatball +$0.50.", prices: [
      { label: "Plain",     price: 13.50 },
      { label: "With Meat", price: 14.00 },
    ]},
  ],


  // ══════════════════════════════════════════════════════════════════
  //  DESSERTS
  //  Format:  { name: "Name", price: 0.00, desc: "Description." },
  // ══════════════════════════════════════════════════════════════════
  desserts: [
    { name: "Ice Cream",                 price: 5.75, desc: "Scoops of vanilla. A simple, sweet finish." },
    { name: "Root Beer Float",           price: 6.25, desc: "Classic root beer float — cold and creamy." },
    { name: "New York Style Cheesecake", price: 6.25, desc: "Rich, creamy New York style cheesecake. The perfect finish to any meal.", featured: true },
  ],


  // ══════════════════════════════════════════════════════════════════
  //  BEVERAGES
  //  Format:  { name: "Name", price: 0.00 },
  //  Add  desc: "..."  for a description line (optional).
  // ══════════════════════════════════════════════════════════════════
  beverages: [
    { name: "Bottled Water",                    price:  2.50 },
    { name: "Soda",                             price:  3.75, desc: "Pepsi, Wild Cherry Pepsi, Diet Pepsi, Dr. Pepper, Mountain Dew, Starry, Root Beer." },
    { name: "Lemonade / Fresh Brewed Iced Tea", price:  3.75 },
    { name: "Orange Juice / Apple Juice",       price:  3.75 },
    { name: "Hot Cocoa / Hot Tea / Coffee",     price:  3.75 },
    { name: "Canned Beer",                      price:  6.00, desc: "Bohemian Cherry Buck, Squatters Juicy Joe, Bud Light, Coors Light." },
    { name: "Draft Beer",                       price:  5.00, desc: "Uinta Cutthroat, Uinta Hefeweizen." },
    { name: "Pitcher",                          price: 19.75 },
  ],


  // ══════════════════════════════════════════════════════════════════
  //  CREATE YOUR OWN  (pizza & calzone builder)
  //
  //  sauces:   list of available sauces shown on the menu card.
  //            To add a sauce:  "New Sauce Name",
  //            To remove:       delete the "Name",  line.
  //
  //  toppings: full list of available toppings shown in the grid.
  //            To add a topping:  "New Topping",
  //            To remove:         delete the "Name",  line.
  //
  //  pricing:  the pricing tier table.
  //            label:   row name (e.g. "Plain", "1–2 toppings")
  //            calzone: calzone price
  //            small:   12-inch pizza price
  //            large:   16-inch pizza price
  //            isAddon: true   marks the "each additional topping" row
  // ══════════════════════════════════════════════════════════════════
  byo: {
    sauces: [
      "Marinara",
      "BBQ",
      "Buffalo Sauce",
      "Alfredo",
      "Pesto",
      "Olive Oil",
    ],

    toppings: [
      "Extra Mozzarella",  "Ricotta",             "Feta",                "Bleu Cheese",
      "Pepperoni",         "Italian Sausage",     "Salami",              "Meatball",
      "Canadian Bacon",    "Bacon",               "Chicken",             "Anchovy",
      "Shrimp",            "Red Onion",           "Green Pepper",        "Red Pepper",
      "Jalapeño Pepper",   "Black Olive",         "Green Olive",         "Kalamata Olive",
      "Mushroom",          "Portabella Mushroom", "Fresh Tomato",        "Sun Dried Tomato",
      "Pineapple",         "Spinach",             "Fresh Basil",         "Broccoli",
      "Zucchini",          "Minced Fresh Garlic", "Roasted Garlic",      "Caper",
      "Artichoke Heart",
    ],

    pricing: [
      { label: "Plain",        calzone: 10.75, small: 18.25, large: 24.50 },
      { label: "1–2 toppings", calzone: 12.50, small: 21.00, large: 28.75 },
      { label: "3–4 toppings", calzone: 13.00, small: 22.00, large: 30.00 },
      { label: "5+ toppings",  calzone: 13.25, small: 23.00, large: 31.50 },
      { label: "Each add'l",   calzone:  0.25, small:  0.50, large:  0.75, isAddon: true },
    ],
  },


};
