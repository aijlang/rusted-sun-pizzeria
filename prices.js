/**
 * RUSTED SUN PIZZERIA — PRICE LIST
 * ─────────────────────────────────────────────────────────────────
 * To update a price:
 *   1. Find the item below and change the number (no $ sign needed)
 *   2. Save this file
 *   3. On GitHub: open prices.js → click the pencil icon → edit → Commit changes
 *
 * The website updates automatically after committing.
 * ─────────────────────────────────────────────────────────────────
 */

const PRICES = {

  // ── STARTERS ──────────────────────────────────────────────────
  buffaloChicken_app:           11.50,
  killerCheeseDip:              11.50,
  garlicBreadStix:               9.25,
  breadStixMozzarella:          10.25,

  // ── SALADS ────────────────────────────────────────────────────
  pastaSalad:                   12.75,
  gardenSalad:                  11.75,
  bleuChickenSalad:             12.25,
  italianSalad:                 12.75,
  dinnerSalad:                   6.50,

  // ── PIZZAS & CALZONES ─────────────────────────────────────────
  // Each pizza has three prices: calzone / 12" / 16"
  margherita_calzone:           13.25,   margherita_12:        22.50,   margherita_16:        30.75,
  bleuChicken_calzone:          13.25,   bleuChicken_12:       22.50,   bleuChicken_16:       30.75,
  roundUp_calzone:              13.25,   roundUp_12:           22.50,   roundUp_16:           30.75,
  buffaloChicken_calzone:       13.00,   buffaloChicken_12:    22.00,   buffaloChicken_16:    30.00,
  combo_calzone:                13.75,   combo_12:             23.25,   combo_16:             31.75,
  pestoChicken_calzone:         13.00,   pestoChicken_12:      22.00,   pestoChicken_16:      30.00,
  shrimpAlfredo_calzone:        13.00,   shrimpAlfredo_12:     22.00,   shrimpAlfredo_16:     30.00,
  chickenAlfredo_calzone:       13.25,   chickenAlfredo_12:    22.50,   chickenAlfredo_16:    30.75,
  bbqChicken_calzone:           12.50,   bbqChicken_12:        21.00,   bbqChicken_16:        28.75,
  mediterranean_calzone:        13.25,   mediterranean_12:     22.50,   mediterranean_16:     30.75,
  hawaiian_calzone:             12.50,   hawaiian_12:          21.00,   hawaiian_16:          28.75,
  deluxeVeggie_calzone:         13.25,   deluxeVeggie_12:      23.25,   deluxeVeggie_16:      31.75,

  // ── CREATE YOUR OWN (pizza & calzone) ─────────────────────────
  byo_plain_calzone:            10.75,   byo_plain_12:         18.25,   byo_plain_16:         24.50,
  byo_1to2_calzone:             12.50,   byo_1to2_12:          21.00,   byo_1to2_16:          28.75,
  byo_3to4_calzone:             13.00,   byo_3to4_12:          22.00,   byo_3to4_16:          30.00,
  byo_5plus_calzone:            13.25,   byo_5plus_12:         23.00,   byo_5plus_16:         31.50,
  byo_extra_calzone:             0.25,   byo_extra_12:          0.50,   byo_extra_16:          0.75,

  // ── PASTA ─────────────────────────────────────────────────────
  lasagna_plain:                13.50,
  lasagna_meat:                 14.00,

  // ── DESSERTS ──────────────────────────────────────────────────
  iceCream:                      5.75,
  rootBeerFloat:                 6.25,
  cheesecake:                    6.25,

  // ── BEVERAGES ─────────────────────────────────────────────────
  bottledWater:                  2.50,
  soda:                          3.75,
  lemonadeTea:                   3.75,
  juice:                         3.75,
  hotDrinks:                     3.75,
  cannedBeer:                    6.00,
  draftBeer:                     5.00,
  pitcher:                      19.75,

};
