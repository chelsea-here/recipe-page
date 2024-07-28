# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned

How to map through an object while ignoring the last instance of an element.

```js
{
  !isLast && (
    <hr className="flex flex-row w-full h-px bg-whiteCoffee mt-3 mb-3"></hr>
  );
}
```

### Continued development

Looking forward to working on more object oriented designs.

### Useful resources

- [Blog Alex Gordienko](https://blog.alexgordienko.com/dynamic-image-loading-with-nextjs/) - This helped me figure out how to incorporate and map through using img rather than next.js Image.
- [stack overflow](https://stackoverflow.com/questions/67326046/how-can-i-hide-last-hr-within-a-map-react) - This helped me figure out how to exclude the last <hr> element in my map.

## Author

- Website - [My Github](https://github.com/chelsea-here)
- Frontend Mentor - [@chelsea-here](https://www.frontendmentor.io/profile/chelsea-here)

## Acknowledgments

Thank you too all those who have taken their time to provide free resources. Special thanks to contributors at freecodecamp.org for helping me get started!

## End
