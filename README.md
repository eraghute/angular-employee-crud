# Angular Employee CRUD

A small employee management interface built with Angular 19 and Angular Material. The project explores displaying structured employee data in a sortable table and collecting employee details through a Material dialog form.

## Features

- Display employee records in an Angular Material table.
- Sort the employee list using sortable table headers.
- Announce sorting changes for assistive technologies using Angular CDK's `LiveAnnouncer`.
- Open an Add Employee dialog from the toolbar.
- Capture employee details including first name, last name, date of birth, gender, email, and education.
- Apply basic required-field and email validation.
- Use Angular Material form controls, date picker, radio buttons, select, toolbar, and dialog components.

## Tech stack

- Angular 19
- TypeScript
- Angular Material
- Angular CDK
- Angular Reactive Forms
- Angular Router
- RxJS
- SCSS
- Jasmine and Karma

## Getting started

### Prerequisites

- Node.js
- npm

### Install and run locally

```bash
git clone https://github.com/eraghute/angular-employee-crud.git
cd angular-employee-crud
npm install
npm start
```

Open the local development URL printed by Angular CLI in your terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Angular development server |
| `npm run build` | Build the application |
| `npm run watch` | Rebuild automatically when files change |
| `npm test` | Run unit tests with Karma |
| `npm run ng` | Run Angular CLI commands |

## Angular concepts demonstrated

- Standalone components and component imports
- Dependency injection for services and Material dialogs
- Angular Material table and sorting
- Reactive forms with `FormGroup`, `FormControl`, and validators
- Template-driven rendering with Angular Material components
- Component communication through dialog references
- Accessibility announcements with Angular CDK's `LiveAnnouncer`

## Project structure

```text
src/
└── app/
    ├── employee-list/
    │   ├── employee-list.component.ts
    │   └── employee-list.component.html
    ├── manage-employee/
    │   ├── manage-employee.component.ts
    │   └── manage-employee.component.html
    ├── models/
    │   └── employee.model.ts
    ├── navbar/
    │   ├── navbar.component.ts
    │   └── navbar.component.html
    ├── services/
    │   └── employees.service.ts
    ├── app.config.ts
    └── app.routes.ts
```

## Current implementation notes

This repository is currently a UI and Angular Material learning project rather than a complete persistent CRUD system. The employee table is populated with sample records from an in-memory service. The Add Employee dialog collects and validates form values, but the current submit handler logs the form data and closes the dialog; it does not yet add the new employee to the table or save records to a backend.

## Project status

A learning project for practising Angular components, Material UI, sortable data tables, reactive forms, and accessibility basics. Further work could connect the form to the employee service and implement persistent create, update, and delete operations.
