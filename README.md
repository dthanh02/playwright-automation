# Playwright Automation Testing Framework

## Overview

This project is an **Automation Testing Framework** built using **Playwright** for end-to-end testing of web applications.

The framework follows best practices such as **Page Object Model (POM)**, reusable fixtures, and modular test structure to ensure scalability and maintainability.


## Tech Stack

* Playwright
* TypeScript / JavaScript
* Node.js
* Git & GitHub


## Project Structure

```
playwright-automation
│
├── tests/           # Test cases
├── pages/           # Page Object Model (POM)
├── fixtures/        # Custom fixtures for test setup
├── playwright.config.ts
├── package.json
└── README.md
```

## Installation

### 1. Clone the repository

```
git clone https://github.com/dthanh02/playwright-automation.git
```

### 2. Navigate to the project folder

```
cd playwright-automation
```

### 3. Install dependencies

```
npm install
```

### 4. Install Playwright browsers

```
npx playwright install
```


## Running Tests

### Run all tests

```
npx playwright test
```

### Run tests in headed mode

```
npx playwright test --headed
```

### Run specific test file

```
npx playwright test tests/login.spec.ts
```

### Show HTML report

```
npx playwright show-report
```


## Test Strategy

The framework supports:

* Functional Testing
* UI Testing
* Smoke Testing
* Regression Testing


## Author

**Thanh Dang**

GitHub: https://github.com/dthanh02


## Design Decisions

The automation framework uses the Page Object Model (POM) pattern to separate test logic from page interactions, making the tests easier to maintain and reuse.
Fixtures are used to handle common setup tasks such as login to avoid repeated code across tests. Test tags such as @smoke, @regression, and @negative help organize and execute specific test groups efficiently.

## Sample test execution screenshots 

<img width="885" height="241" alt="image" src="https://github.com/user-attachments/assets/0562f31b-2b39-423d-9eb4-800f62b8f408" />

Checkout flow test:
<img width="988" height="218" alt="image" src="https://github.com/user-attachments/assets/aac8f265-cf1d-4dcf-8cc3-7f663db64413" />
<img width="982" height="948" alt="image" src="https://github.com/user-attachments/assets/f968dbdf-97ac-4444-bab2-e30debe31a19" />

Inventory test:
<img width="990" height="234" alt="image" src="https://github.com/user-attachments/assets/965411d3-4216-48b8-8fcb-05fc72f66128" />
<img width="1009" height="623" alt="image" src="https://github.com/user-attachments/assets/3bb8e75c-aabb-455a-9a8f-778b6fd8a8f6" />

Login test:
<img width="987" height="776" alt="image" src="https://github.com/user-attachments/assets/9f54bea3-b515-40e5-b75a-d60c1ecf5900" />
<img width="999" height="627" alt="image" src="https://github.com/user-attachments/assets/2c123b46-3309-492c-8fea-cc62347e6cb7" />



