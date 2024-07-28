type Section = {
  name: string;
  description?: string;
};

type Recipe = {
  name: string;
  description: string;
  photo: string;
  photoAlt: string;
  makeTimes: Section[];
  ingredientList: string[];
  instructions: Section[];
  nutritionFacts: Section[];
}

export const recipes: Recipe[] = [
  {
    name: 'Simple Omelette Recipe',
    description: 'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
    photo: "image-omelette.jpeg",
    photoAlt: "Picture of a Simple Omelette",
    makeTimes: [
      {
        name: 'Total: ',
        description: 'Approximately 10 minutes',
      },
      {
        name: 'Preparation: ',
        description: '5 minutes',
      },
      {
        name: 'Cooking: ',
        description: '5 minutes',
      },
    ],
    ingredientList: [
      '2-3 large eggs',
      'Salt, to taste',
      'Pepper, to taste',
      '1 tablespoon of butter or oil',
      'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
    ],
    instructions: [
      {
        name: 'Beat the eggs: ',
        description: 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
      },
      {
        name: 'Heat the pan: ',
        description: 'Place a non-stick frying pan over medium heat and add butter or oil.',
      },
      {
        name: 'Cook the omelette: ',
        description: 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
      },
      {
        name: 'Add fillings (optional): ',
        description: 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
      },
      {
        name: 'Fold and serve: ',
        description: 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
      },
      {
        name: 'Enjoy: ',
        description: 'Serve hot, with additional salt and pepper if needed.',
      },
    ],
    nutritionFacts: [
      {
        name: 'Calories',
        description: '277kcal',
      },
      {
        name: 'Carbs',
        description: '0g',
      },
      {
        name: 'Protein',
        description: '20g',
      },
      {
        name: 'Fat',
        description: '22g',
      },
    ]
  }
];

