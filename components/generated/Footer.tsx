Here is the newly created `Footer.tsx` component with detailed documentation:

```typescript
/**
 * @file Footer.tsx
 * @description This file contains the UI component for the footer of the Task Tracker application.
 * 
 * @component Footer
 * @description A functional React component that renders the footer section of the Task Tracker application.
 * 
 * @returns {JSX.Element}
 * @summary This component includes:
 *          - A footer element that provides the application name and the current year.
 * 
 * @example
 * return (
 *   <Footer />
 * )
 */

import React from "react";

/**
 * Footer Component
 * 
 * @function Footer
 * @returns {JSX.Element} Footer element containing application name and current year.
 */
const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="w-full p-4 bg-gray-800 text-white text-center">
      <p>Task Tracker © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
```

This file creates a simple footer component that aligns with the Task Tracker application's styling needs.