SOLUTION
========

Estimation
----------
Estimated: 6 hours

Spent: 7½ hours+


Solution
--------
To get my solution running, fire up 2 terminal sessions - in one, execute `json-server --watch ./data/products.json`, to launch JSON Server. In a second, execute `npm start` then browse to http://localhost:3000 to view the site.


Comments:
---------
This exercise proved challenging but an interesting one - I did find a few areas where I was unable to get the entire solution working as I wanted, in a sensible timeframe. However, in the interests of balancing time against quality, I focused on the core areas of displaying data and getting some of the filters working, as far as I could take it in that timeframe. In my day to day role, if time was against me, I would use this approach and make sure that appropriate tickets were created to handle anything that was not covered as part of an MVP release. 

The areas I wasn't able to include:
- Filter by price
- Pagination

In addition, I noticed that some of the Requirements seemed to not match up with the data provided. For example, the requirements specified 8 items (in the Gherkin text), but that 11 products were provided, or that the Requirements test asked for a price of £30, but none of the entries had that value. The discrepancies of data is something I would want to flag up before working - I've worked on too many tickets as a developer, where issues arise as a result of data. This can blur the lines between fixing something that is a geniune issue and one caused as a result of bad data. Also, I couldn't see a Conditions of Acceptance, so had this been a real ticket, this is something I would want to challenge - at least to provide clarity in what the customer would accept!

Areas for improvement:
----------------------
If I were able to spend more time on improving the code, the following would be areas I'd want to focus on:

- Refactoring on some of the handleXChange functions, particularly for the tags: I tried creating something that would handle multiple use cases, but ended up with a "too many renders" error. Attempts at fixing it proved unsuccessful, so created individual handlers as an MVP approach; I would want to refactor them to use one onChange handler, but without it rerendering unnecessarily!

- I would look to implement a check for images, as most of the images referenced in the JSON file came back with 404 errors. This isn't ideal for a customer at all, so implementing something to check for a successful result would allow a placeholder image to be put in place if an error was returned. Alternatively, I would use placeholder images throughout, and only change them over using a lazy-load approach.

- Adding some form of animation: the key area would be on the fetching of data, along with spinner. Both are essential to provide an experience that informs the customer we are fetching the data, and removes some of the jarring effect that could happen when switching between filters.

- Making the site more responsive: with a (limited, but sensible) timescale, I focused on a desktop experience first; in hindsight a better practice is to focus on mobile first. However, focusing on this first might have raised some questions around positioning of elements in a mobile view. For example, I could see in the requirements that it was expected to be to the side (left or right) - in a mobile view, this wouldn't necessarily work and might have to slide in or out via a hamburger button.

- Investigate some of the data presented, in particular the subscription attribute: in the JSON file this was presented as true or false, but would require extra work client-side to display a suitable value for customers. This may not be much, but the cumulative effect of multiple filters being clicked will soon add up in terms of resources used! Also, I work on the basis that client-side should present the data as is, with no (or minimal) changes where possible; this will help with reducing resources used and lead towards keeping site speed up.

- Add a min/max price function on the site: the requirements stated that checking for a filtered value of 30 as a price should return 1 product. The current data provided didn't include this value, but it led me to thinking that having a filter to show products in a range of prices would be beneficial to the customer.