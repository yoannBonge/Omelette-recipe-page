import Image from "next/image";
import omelettePic from "../../public/omelette.jpeg";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      {/*--------------------------------------------------------HERO IMAGE*/}
      <div className="flex w-full">
        <Image
          src={omelettePic}
          alt="omelette in a plate"
          className="w-full md:mx-8 md:mt-8 md:rounded-xl"
        ></Image>
      </div>
      {/*--------------------------------------------------------HERO*/}
      <section>
        <h1 className="md:text-5xl lg:text-6xl">Simple Omelette Recipe</h1>
        <p className="md:text-lg">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <div className="mt-8 w-full rounded-xl bg-pink-50 p-6">
          <span className="text-lg font-bold text-pink-800 md:text-xl lg:text-2xl">
            Preparation time
          </span>{" "}
          <ul className="mt-4 marker:text-pink-800 md:text-lg">
            <li>
              <strong>Total</strong>: Approximately 10 minutes
            </li>
            <li>
              <strong>Preparation</strong>: 5 minutes
            </li>
            <li>
              <strong>Cooking</strong>: 5 minutes
            </li>
          </ul>{" "}
        </div>{" "}
      </section>
      {/*--------------------------------------------------------INGREDIENTS*/}
      <section>
        <h2 className="text-3xl md:text-4xl">Ingredients</h2>
        <ul className="marker:text-amber-800 md:text-lg">
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
        <hr className="mt-8" />
      </section>
      {/*--------------------------------------------------------INSTRUCTIONS*/}
      <section>
        <h2 className="text-3xl md:text-4xl">Instructions</h2>
        <ol className="md:text-lg">
          <li>
            <strong>Beat the eggs</strong>: In a bowl, beat the eggs with a
            pinch of salt and pepper until they are well mixed. You can add a
            tablespoon of water or milk for a fluffier texture.
          </li>
          <li>
            <strong>Heat the pan</strong>: Place a non-stick frying pan over
            medium heat and add butter or oil.
          </li>
          <li>
            <strong>Cook the omelette</strong>: Once the butter is melted and
            bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
            coat the surface.
          </li>
          <li>
            <strong>Add fillings (optional)</strong>: When the eggs begin to set
            at the edges but are still slightly runny in the middle, sprinkle
            your chosen fillings over one half of the omelette.
          </li>
          <li>
            <strong>Fold and serve</strong>: As the omelette continues to cook,
            carefully lift one edge and fold it over the fillings. Let it cook
            for another minute, then slide it onto a plate.
          </li>
          <li>
            <strong>Enjoy</strong>: Serve hot, with additional salt and pepper
            if needed.
          </li>
        </ol>
        <hr className="mt-8" />
      </section>{" "}
      {/*--------------------------------------------------------NUTRITION*/}
      <section>
        <h2 className="text-3xl md:text-4xl">Nutrition</h2>
        <p className="mb-6 pr-3 md:text-lg">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <table className="w-full md:text-lg">
          <tbody>
            <tr className="h-10 border-b md:h-12 lg:h-14 xl:h-16">
              <th>Calories</th>
              <td>277kcal</td>
            </tr>
            <tr className="h-10 border-b md:h-12 lg:h-14 xl:h-16">
              <th>Carbs</th>
              <td>0g</td>
            </tr>
            <tr className="h-10 border-b md:h-12 lg:h-14 xl:h-16">
              <th>Protein</th>
              <td>20g</td>
            </tr>
            <tr className="h-10 border-b md:h-12 lg:h-14 xl:h-16">
              <th>Fat</th>
              <td>22g</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
