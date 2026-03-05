# Playwright Automation Testing Framework

## Overview

This project is an **Automation Testing Framework** built using **Playwright** for end-to-end testing of web applications.

The framework follows best practices such as **Page Object Model (POM)**, reusable fixtures, and modular test structure to ensure scalability and maintainability.

---

## Tech Stack

* Playwright
* TypeScript / JavaScript
* Node.js
* Git & GitHub

---

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

---

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

---

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

---

## Test Strategy

The framework supports:

* Functional Testing
* UI Testing
* Smoke Testing
* Regression Testing

---

## Author

**Thanh Dang**

GitHub: https://github.com/dthanh02
