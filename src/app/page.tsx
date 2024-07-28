'use client'

import Image from "next/image";

import { recipes } from "./lib/recipes"

export default function Home() {
  return (
    <main className="bg-eggshell flex min-h-screen flex-col items-center justify-center ">
      <div>
        {recipes.map((recipe) => {
          return (
            <article key={recipe.name} className=" bg-white flex flex-col flex-start justify-center w-full md:my-[123px] md:gap-10 md:rounded-3xl md:p-10 md:max-w-[46rem]">
                {/* used img here instead of image in order to prevent the need for importing and allowing me to formulate this as I would if there were multiple recipes. */}
                <img
                className=" z-10 w-full object-cover h-[171px] md:h-[18.75rem] md:rounded-xl"
                src={recipe.photo}
                alt="photo of recipe"
                />
              <div className="flex flex-col w-full py-10 px-8 gap-8 md:p-0">
                <hgroup className="flex flex-col gap-6">
                  <h1 className="font-youngSerif font-normal leading-none text-darkCharcoal self-stretch text-4xl md:text-[2.5rem]">
                    {recipe.name}</h1>
                  <p className="font-outfit leading-normal text-wengeBrown text-base">{recipe.description}</p>
                </hgroup>

                <section className="p-6 bg-snow font-outfit md:p-7">
                  <h3 className="text-darkRaspberry mb-4 font-semibold leading-none font-outfit text-[1.25rem]" >
                    Preparation Time
                  </h3>
                  <ol className="block space-y-[6px] pl-6 text-wengeBrown text-base list-disc">
                    {recipe.makeTimes.map((makeTime) => {
                      return (
                        <li key={makeTime.name} className="text-base pl-4"><span className="inline-block align-middle"><strong>{makeTime.name}</strong>{makeTime.description}</span></li>
                      )
                    })}
                  </ol>
                </section>

                <section>
                  <h2 className="font-youngSerif leading-none text-[1.75rem] mb-6 text-brandyRed">Ingredients</h2>
                  <ol className="block pl-[22px] text-wengeBrown space-y-[6px] mb-[1px] text-base list-disc">
                    {recipe.ingredientList.map((ingredient) => {
                      return (
                        <li key={ingredient} className="text-base pl-4"><span className="inline-block align-middle">{ingredient}</span></li>
                      )
                    })}
                  </ol>
                </section>

                <hr className="h-px bg-whiteCoffee"></hr>

                <section>
                  <h2 className="font-youngSerif leading-none text-[1.75rem] mb-6 text-brandyRed">Instructions</h2>
                  <ol className="font-outfit block pl-7 marker:text-brandyRed marker:font-bold text-wengeBrown space-y-2 text-base list-decimal">
                    {recipe.instructions.map((instruction) => {
                      return (
                        <li key={instruction.name} className="font-outfit pl-4 text-pretty"><strong>{instruction.name}</strong>{instruction.description}</li>
                      )
                    })}
                  </ol>
                </section>

                <hr className="h-px bg-whiteCoffee"></hr>

                <section className="flex flex-col gap-6">
                  <h2 className="font-youngSerif leading-none text-[1.75rem] text-brandyRed">Nutrition</h2>
                  <p className="font-outfit leading-normal text-wengeBrown text-base">The table below shows nutritional values per serving without the additional fillings.</p>
                  <div className="flex flex-col">
                    {recipe.nutritionFacts.map((nutritionFact, ndx) => {
                      const isLast = recipe.nutritionFacts.length - 1 === ndx
                      return (
                        <div key={nutritionFact.name} >
                          <div className="flex flex-row w-full gap-3">
                            <div className="flex-1 flex-col basis-full">
                              <div className="text-wengeBrown ml-8">{nutritionFact.name}
                              </div>
                            </div>
                            <div className="flex-1 flex-col basis-full">
                              <div className="text-brandyRed font-bold ml-2 mr-8">{nutritionFact.description}
                              </div>
                            </div>
                          </div>
                          {/* Proud of this one! */}
                          {!isLast && <hr className="flex flex-row w-full h-px bg-whiteCoffee mt-3 mb-3"></hr>}
                        </div>
                      )
                    })}
                  </div>
                </section>

              </div>
            </article>
          )
        })}
      </div>

    </main>
  )
};













/* Instructions

// Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
// You can add a tablespoon of water or milk for a fluffier texture.

// Heat the pan: Place a non - stick frying pan over medium heat and add butter or oil.

// Cook the omelette: Once the butter is melted and bubbling, pour in the eggs.Tilt the pan to ensure
// the eggs evenly coat the surface.

// Add fillings(optional): When the eggs begin to set at the edges but are still slightly runny in the
// middle, sprinkle your chosen fillings over one half of the omelette.

// Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the
// fillings. Let it cook for another minute, then slide it onto a plate.

// Enjoy: Serve hot, with additional salt and pepper if needed.

// Nutrition

// The table below shows nutritional values per serving without the additional fillings.

// Calories
// 277kcal

// Carbs
// 0g

// Protein
// 20g

// Fat
// 22g */