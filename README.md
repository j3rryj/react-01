# Tasks

Read this document in it's entirety before starting. It may impact some of your design choices.

Be sure to talk through your choices.

Start the project with `npm run dev`

## API Call

1. Create a `<AsyncPerson />` component

   - The component should take an `id` as a prop and call the api https://swapi.co/api/people/{id}/?format=json
   - The component should be a render-props, higher-order component, or a hook. What are the pros/cons of the method you choose?
   - The component should display "Loading" during the API call.

2. in `pages/index.js`, wrap `<AsyncPerson>` around `<Person />` and pass the data to `<Person />`. Set the `id` to `1`.

## Buttons

1. Create a `<ButtonsContainer />` component. This will contain two child `<button />` components, `[+]` and `[-]`, that increase/decrease the `id` passed to the `<AsyncPerson>` component.
2. Add `<ButtonsContainer />` to `Home`.
3. Think about where you'll store `id`. Talk about the available options and why you chose your way.
4. `id` should not be able to decrease below `1` or above `10`.

## Extra

How could we store `id` so navigating away from `Home` doesn't lose the value?

How could we cache the API calls so we don't make the same call twice? Example `id` is `1`, we hit `[+]` and then `[-]`, and the API for `id = 1` will be called again.

Talk about unit testing and how that can be done with the design choices you've made.
