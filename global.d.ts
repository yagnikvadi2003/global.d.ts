/**
 * Declare a module for .png files.
 * This module declaration allows importing .png files as strings representing file paths.
 *
 * * Usage example:
 * import myPng from './path/to/my.png';
 */
declare module '*.png' {
    const value: string; // The import will be a string representing the file path
    export default value; // Export the value for import usage
}

/**
 * Declare a module for .svg files.
 * This module declaration allows importing .svg files as strings representing file paths.
 *
 * * Usage example:
 * import mySvg from './path/to/my.svg';
 * <MySvg /> // You can use it as a React component
 */
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

/**
 * Declare a module for .pdf files.
 * This module declaration allows importing .pdf files as strings representing file paths.
 *
 * * Usage example:
 * import myPdf from './path/to/my.pdf';
 */
declare module '*.pdf' {
    const value: string; // The import will be a string representing the file path
    export default value; // Export the value for import usage
}

/**
 * Declare a module for .jpeg files.
 * This module declaration allows importing .jpeg files as strings representing file paths.
 *
 * * Usage example:
 * import myJpeg from './path/to/my.jpeg';
 */
declare module '*.jpeg' {
    const value: string; // The import will be a string representing the file path
    export default value; // Export the value for import usage
}

/**
 * Declare a module for .jpg files.
 * This module declaration allows importing .jpg files as strings representing file paths.
 *
 * * Usage example:
 * import myJpg from './path/to/my.jpg';
 */
declare module '*.jpg' {
    const value: string; // The import will be a string representing the file path
    export default value; // Export the value for import usage
}

/**
 * Declare a module for .gif files.
 * This module declaration allows importing .gif files as strings representing file paths.
 *
 * * Usage example:
 * import myGif from './path/to/my.gif';
 */
declare module '*.gif' {
    const value: string; // The import will be a string representing the file path
    export default value; // Export the value for import usage
}

/**
 * Declare a module for .ico files.
 * This module declaration allows importing .ico files as strings representing file paths.
 *
 * * Usage example:
 * import myIco from './path/to/my.ico';
 */
declare module '*.ico' {
    const value: string; // The import will be a string representing the file path
    export default value; // Export the value for import usage
}
