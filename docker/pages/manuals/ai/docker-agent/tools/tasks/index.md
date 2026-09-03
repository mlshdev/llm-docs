> Commit-pinned source for Docker main: [_vendor/github.com/docker/docker-agent/docs/tools/tasks/index.md](https://github.com/docker/docs/blob/d47e43dee68bd9cbd16af81b1aa6aef45023e17c/_vendor/github.com/docker/docker-agent/docs/tools/tasks/index.md)

# Tasks Tool

*Persistent task database with priorities and dependencies, shared across sessions.*

## Overview

The tasks tool provides a persistent task database that survives across agent sessions. Unlike the [Todo tool](https://docs.docker.com/ai/docker-agent/tools/todo/), which maintains an in-memory task list for the current session only, the tasks tool stores tasks in a JSON file on disk so they can be accessed and updated across multiple sessions. Tasks support priorities and dependencies — a task is *blocked* until every task it depends on is `done`.

## Configuration

```yaml
toolsets:
  - type: tasks
    path: ./tasks.json  # Optional: custom database path
```

### Options

| Property | Type   | Default      | Description                                                                                                              |
| -------- | ------ | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `path`   | string | `tasks.json` | Path to the JSON task database. Relative paths resolve against the agent config directory (or `--working-dir` when set). |

## Available Tools

The tasks toolset exposes these tools:

| Tool Name           | Description                                                                                                             |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `create_task`       | Create a new task with a title, description (or markdown file path), optional priority, and optional dependencies.      |
| `get_task`          | Get full details of a single task by ID, including its effective status (`blocked` if any dependency is not `done`).    |
| `update_task`       | Update a task's title, description, priority, status, or dependency list.                                               |
| `delete_task`       | Delete a task by ID. Also removes it from other tasks' dependency lists.                                                |
| `list_tasks`        | List tasks sorted by priority (critical first) with blocked tasks last. Optionally filter by status or priority.        |
| `next_task`         | Return the highest-priority actionable task — one that is not blocked and not done. Great for "what should I work on?". |
| `add_dependency`    | Add a dependency: a task is blocked until the task it depends on is `done`.                                             |
| `remove_dependency` | Remove a dependency from a task.                                                                                        |

## Example

```yaml
agents:
  root:
    model: openai/gpt-4o
    toolsets:
      - type: tasks
        path: ./project-tasks.json
```

> \[!TIP]
> **Tasks vs. Todo**
>
> Use the **tasks** tool when you need persistence across sessions, priorities, or dependencies (e.g., long-running projects, recurring work). Use the [todo tool](https://docs.docker.com/ai/docker-agent/tools/todo/) for ephemeral, session-scoped task lists.
