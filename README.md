# Unique Hits Calculator

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/nemo0/nextjs-unique-hit-counter)

This project aims to calculate unique hits for each route in a web application.

## Overview

The current implementation uses browser fingerprinting to track unique hits. This method involves collecting various details about a user's browser and system settings to create a unique identifier for each visitor.

## Future Improvements

We are considering the use of cookies as an alternative or additional method for tracking unique hits. Cookies would allow us to store a small amount of data on the user's computer, which could be used to identify repeat visitors.

## Project Structure

The project is structured as follows:

- `src/app/api/hit/route.ts`: This is where the logic for tracking unique hits per route is implemented.
- `src/app/page-1/page.tsx`, `src/app/page-2/page.tsx`, `src/app/page-3/page.tsx`: These are the pages where the unique hits are tracked.
- `src/components/hit.tsx`: This component is used to display the number of unique hits for a route.

## Getting Started

To get started with this project, run the following commands:

```sh
npm install
npm run start
```
