var display = 0;

function handleBtn() {
    var output = document.getElementById('output');
    output.textContent = "INGREDIENTS, Prep Time: 20 Min, Cook Time:10 Min, Servings: 4, 350 g (12 oz) of spaghetti, 200 g (7 oz) of guanciale, 4 whole medium eggs (1 egg per serving), 100 g (1 cup + 1 tablespoon) of grated Pecorino Romano., ground black pepper ";

    if(display == 1) {
        output.style.display = 'block';
        display = 0;
    } else {
        output.style.display = 'none';
        display = 1;
    }
}


function displayBtn() {
    var output = document.getElementById('display');
    output.textContent = 'INGREDIENTS:1 tablespoon oil (your choice, used for, 1 cup chopped onion, 1/2 cup chopped green bell pepper, 1/2 cup chopped yellow bell pepper, 1 clove garlic, minced, 1 pound ground turkey or beef, 1 (14.5 ounce) can diced tomatoes, 1 can black beans ~ drained (or your choice of bean), 2 cups pumpkin puree, 1 1/2 tablespoons chili powder, 1/2 teaspoon ground black pepper. DIRECTIONS:Sauté onion, bell peppers, and garlic with meat until brown. Drain. Mix in tomatoes, beans, pumpkin, and seasonings. Reduce heat to low, cover, and simmer for 20 minutes. Serve topped with avocado, cilantro, crushed tortilla chips, cheese, or sour cream (optional).';

    if(display == 1) {
        output.style.display = 'block';
        display = 0;
    } else {
        output.style.display = 'none';
        display = 1;
    }
}



var searchInput = document.getElementById('searchInput');
var searchButton = document.getElementById('searchBtn');
var searchResults = document.getElementById('searchResults');
var itemsSection = document.getElementById('itemsSection');

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const items = itemsSection.getElementsByClassName('item');

    for (let item of items) {
        const itemName = item.getElementsByTagName('h4')[0].innerText.toLowerCase();
        if (itemName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }
}

searchButton.addEventListener('click', handleSearch);

var display = 0;

function myButton()
{
var output = document.getElementById('show');
output.textContent = 'INGREDIENTS:	1 ½ lb. beef stew meat, 2 Tbsp. oil (your choice), 1 medium yellow onion, diced, 1 lb. potatoes, cut into ½-inch cubes, skin on (Red, Yukon Gold, or Russet will work), 3 medium carrots, peeled and sliced, 2 ribs celery, sliced, 4 cloves garlic, peeled and minced, 1 cup green beans, trimmed and cut into 1-inch pieces (may substitute frozen green beans), 1 cup frozen peas, 1 (14-ounce) can diced tomatoes, with liquid, 4 cups beef broth, 1 tsp. dried thyme, 1 tsp. Italian seasoning, Salt and pepper to taste. INSTRUCTIONS: 1.	Select ‘Saute’ on the Instant Pot. Melt 1 Tbsp. oil in the pot. Season the beef cubes with a little salt and pepper. Add half of the beef and cook until browned, 2-3 minutes, then flip and repeat until browned on all sides. Transfer meat to a plate and repeat with remaining cooking fat or oil and beef. 2.	Place remaining ingredients in the Instant Pot (with the exception of green beans, frozen peas, salt, pepper). Stir, lock the lid into place, set the vent valve to the ‘sealing’ position, and cook on high pressure for 20 minutes. 3.	Allow for 10 minutes of natural release before flipping the value to the ‘venting’ position to release any remaining pressure. 4.	Press ‘Cancel’ then select the ‘Saute’ setting. Add the green beans and frozen peas and cook for 5-6 minutes or until tender. Season with additional salt and pepper to taste before serving.';

    if(display == 1)
    {
         output.style.display = 'block';
         display = 0;
    }
    else
        {
        output.style.display = 'none';
        display = 1;
    }
}


var display = 0;

function myBtn()
{
var output = document.getElementById('view');
output.textContent = 'INGREDIENTS: 3 potatoes, peeled and diced, 4 carrots, peeled and sliced, 1 onion, cut into chunks, 2 celery ribs, sliced, 3 lb. chuck roast, salt and pepper,	1½ Tbsp. olive oil,	¾ cup water, 1 Tbsp. Worcestershire sauce, 1 tsp. beef bouillon granules, 1 tsp. dried basil. DIRECTIONS: 1.	Spray slow cooker with cooking spray. Place potatoes, carrots, onion and celery on the bottom of slow cooker. 2.	Heat oil in a saucepan on medium-high. Brown roast on all sides and place on top of veggies. 3.	Combine water, Worcestershire, bouillon and basil. Pour over meat and vegetables. 4.	Cook on LOW for 10 hours, or until the beef is shredded very easily and vegetables are soft. Season with salt and pepper if needed';

    if(display == 1)
    {
         output.style.display = 'block';
         display = 0;
    }
    else
        {
        output.style.display = 'none';
        display = 1;
    }
}



var display = 0;

function Button()
{
var output = document.getElementById('outputs');
output.textContent = 'Ingredients, 1¼ pounds boneless, skinless chicken breasts (cut into strips), Salt and freshly ground black pepper, 2½ teaspoons curry powder, 3 tablespoons vegetable oil, 1 medium yellow onion (finely chopped), 4 garlic cloves (minced), 1 tablespoon grated fresh ginger, 2 cups low-sodium chicken broth, INSTRUCTIONS: 1. Season chicken with salt, pepper, and 1½ teaspoons curry powder. 2. Sauté onion, garlic, and ginger in oil.  3. Add chicken and remaining curry powder.  4. Pour in chicken broth and simmer until chicken is cooked';

    if(display == 1)
    {
         output.style.display = 'block';
         display = 0;
    }
    else
        {
        output.style.display = 'none';
        display = 1;
    }
}


var display = 0;

function sButton()
{
var output = document.getElementById('shows');
output.textContent = 'INGREDIENTS: One butternut squash peeled, seeded and diced, ½ tablespoon oil of choice, salt and freshly ground pepper, 1/2 cup quinoa or Rice, 2 cups chopped kale leaves, Two small apples, pears, or figs sliced or dice. DIRECTIONS: 1. Roast the butternut squash. 2.Toss with olive oil, sprinkle with salt and pepper, and roast until tender. Cook the quinoa and let it cool. 3.Make dressing. Put all the ingredients in a jar and shake until combined. 4.Massage the kale. Kale can be tough and bitter. Massage it with half of the dressing to bring out the sweetness and make it more tender. Add the kale to a salad bowl with 1/2 of the dressing and toss until it’s evenly coated. 5.Assemble – Add the quinoa, butternut squash, and apples into the bowl with the kale, and toss to combine.';


    if(display == 1)
    {
         output.style.display = 'block';
         display = 0;
    }
    else
        {
        output.style.display = 'none';
        display = 1;
    }
}

