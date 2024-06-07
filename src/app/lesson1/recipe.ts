export interface Recipes {
  recipes: Recipe[];
}

export interface Recipe {
  name: string,
  ingredients: string[],
  instructions: string[],
  tags: string[],
  difficulty: string
  image: string;
}
