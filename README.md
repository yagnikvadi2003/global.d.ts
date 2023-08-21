<p align="center">
  <a href="https://typescript-eslint.io/">
    <img src="https://miro.medium.com/v2/resize:fit:1400/1*DYbVnTHQQpcNPm6vUFdrXw.png" alt="global.d.ts" width="50em" />
  </a>
</p>

<h3 align="center">global.d.ts</h3>

<p align="center">
  The `global.d.ts` file defines global type declarations for TypeScript projects, enhancing codebase consistency and providing accurate type information.
  <br>
  <br>
  🔹
  <a href="https://github.com/yagnikvadi2003/global.d.ts/issues">Report bug</a>
  🔹
  <a href="https://github.com/yagnikvadi2003/global.d.ts/pulls">Pull requests</a>
</p>

## Table of Contents

- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Usage
The `global.d.ts` file is an essential component for enhancing TypeScript projects with custom type declarations. This guide demonstrates how to effectively utilize this file to provide accurate type information and improve codebase consistency.

### Type Declarations Overview
The `global.d.ts` file allows you to declare global types, modules, and interfaces, providing TypeScript with information about external modules, CSS modules, images, fonts, and more.

### Integration into Your TypeScript Project
- **Create `global.d.ts`:** In your project's source directory, create a file named global.d.ts.

- **Copy Declarations:** Copy the provided type declarations into the global.d.ts file.

- **Customize Declarations:** Adapt and extend the type of declarations to match your project's needs. Add additional declarations for other file types or global interfaces.

- **Automatic Type Inference:** TypeScript will automatically recognize the type declarations when you use import statements in your code.

### CSS Modules
Declare CSS module classes and their unique identifiers using the provided module declarations for `.module.css`, `.module.scss`, and `.module.less` files.

    import styles from './path/to/my-styles.module.css';
    const className = styles.myClass; // className will have a unique identifier for the CSS class


### Images, Media, and Fonts
Easily import various file types such as `.png`, `.svg`, `.mp4`, `.woff`, and more, using the type declarations.


     import myImage from './path/to/my-image.png';
     import myVideo from './path/to/my-video.mp4';
     import myFont from './path/to/my-font.woff';

### Deprecated Declarations
For certain file types, inline style imports using `?inline` are encouraged, and the traditional import method is deprecated.

### Custom Global Declarations
Extend the `global.d.ts` file to define custom global interfaces or types that enhance type safety and provide accurate type information across your application.

### Benefits of Type Declarations
- **Type Safety:** Ensure accurate type information for various file types and global interfaces.
- **Code Consistency:** Maintain a consistent coding style and import pattern across your project.
- **Efficient Development:** Facilitate development by providing TypeScript with accurate type hints and completion suggestions.

### Conclusion
By effectively utilizing the `global.d.ts` file, you can provide TypeScript with crucial type information, resulting in enhanced code quality, consistency, and development efficiency.


## Features

The `global.d.ts` file empowers TypeScript projects with custom type declarations, enhancing codebase consistency and type safety. Explore the key features and advantages it brings to your development process.

- **Global Type Definitions**        
The `global.d.ts` file enables you to declare global types and interfaces that can be accessed throughout your TypeScript project. This ensures consistent type usage across different files.

- **External Module Typings**           
By declaring module types for external libraries, you provide TypeScript with accurate type information for third-party code, improving type checking and development confidence.

- **CSS Module Typings**           
Use module declarations to map CSS class names to unique identifiers, enhancing type safety when working with CSS modules in your project.

- **File Type Support**           
Declare types for various file formats such as images, media, fonts, and more. This feature aids in accurately importing and using these assets in your code.

- **Deprecation Awareness**           
Easily manage deprecated import methods for certain file types, guiding developers toward the recommended practices.

- **Custom Global Interfaces**           
Extend the `global.d.ts` file with your custom global interfaces or types, ensuring type consistency across your application and reducing potential errors.

- **Improved Code Quality**           
By providing TypeScript with accurate type information, the `global.d.ts` file helps catch type-related errors early in the development process.

- **Codebase Readability**           
Well-defined type declarations improve code readability and maintainability by making the intent of various imports and usages clearer.

- **Efficient Collaboration**           
A standardized type declaration approach facilitates collaboration among developers, making it easier for team members to understand and work with the codebase.

- **Enhanced Development Experience**           
With accurate type hints and suggestions from the `global.d.ts` file, developers can enjoy an improved coding experience, reducing debugging time.

- **Customization Flexibility**           
Tailor the type declarations to your project's specific needs, extending them as required for different file types and interfaces.

- **Future-Proofing**           
As your project evolves, the global.d.ts file ensures that type information remains accurate and up-to-date, reducing the risk of compatibility issues.

- **Codebase Consistency**           
Global type declarations encourage adherence to consistent coding patterns, which in turn contributes to a uniform and maintainable codebase.

- **TypeScript Integration**           
The `global.d.ts` file seamlessly integrates with TypeScript's type inference and checking, helping you catch type-related errors at compile time.

- **API Documentation**           
The type declarations documented in the `global.d.ts` file serve as an API documentation for developers, guiding them on how to use different modules and assets.

## Contributing

While this `global.d.ts` is a representation of my personal projects and achievements, I'm always open to feedback and suggestions. Feel free to reach out or submit a pull request if you have ideas for improvements or notice any issues.

## License

This project is licensed under the [MIT License](LICENSE).
