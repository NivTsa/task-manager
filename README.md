# Simple Task Manager

A small task manager that runs entirely in the browser. You can add tasks, mark them as completed and delete them. Tasks are saved in your browser's `localStorage`, so they are still there after you refresh the page.

It is built with plain HTML, CSS and JavaScript. There is no backend, database, build step or dependencies.

## Features

- **Add tasks**: type a task and click **Add** or press Enter. Empty input is ignored.
- **View tasks**: all tasks are shown in a list, with a message when the list is empty.
- **Complete tasks**: tick the checkbox to mark a task as completed (it is crossed out). Untick to undo.
- **Delete tasks**: remove a task with its **Delete** button.
- **Persistence**: tasks and their completed state are saved to `localStorage` and loaded when the page opens.

## Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/NivTsa/task-manager.git
   cd task-manager
   ```
2. Open `index.html` in any modern browser by double-clicking it.

You don't need to install anything.

## Project structure

| File | Purpose |
|---|---|
| `index.html` | Page markup: title, input form, task list, empty-state message |
| `style.css` | Layout and styling, including the completed-task style |
| `app.js` | App logic: adding, completing and deleting tasks, rendering, and saving to and loading from `localStorage` |

## Notes

- Tasks are stored per browser. Clearing site data or switching browsers starts with an empty list.
