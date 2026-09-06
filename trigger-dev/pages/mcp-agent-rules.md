> Release-pinned source for Trigger.dev v4.5.16: [docs/mcp-agent-rules.mdx](https://trigger.dev/docs/mcp-agent-rules)

# Agent rules

Trigger.dev agent rules are now agent skills, installed with the trigger.dev CLI.

> **Note**
>
> Agent rules are now **agent skills**. The standalone rule files have been replaced by skills that
> work across every major AI assistant from a single install. See [Skills](https://trigger.dev/docs/skills).

## What changed

Trigger.dev used to install per-tool *rule files* (`.cursor/rules/trigger.*.mdc`, regions in `CLAUDE.md`, and so on) fetched from GitHub. That has been replaced by [agent skills](https://trigger.dev/docs/skills): `SKILL.md` directories in the open [Agent Skills standard](https://agentskills.io) that install with the CLI, draw their API guidance from a version-pinned reference in `@trigger.dev/sdk`, and load on demand instead of always sitting in your context.

The install command is the same, and now installs skills:

```bash
npx trigger.dev@latest skills
```

`npx trigger.dev@latest install-rules` still works as an alias for `skills`, and `trigger dev` offers to install the skills on first run.

The old task and realtime guidance now lives in the `trigger-authoring-tasks` and `trigger-realtime-and-frontend` skills, alongside two new skills for building `chat.agent` AI agents. See [Skills](https://trigger.dev/docs/skills) for the full list and supported assistants.

## Next steps

- [Skills](https://trigger.dev/docs/skills)

  Install Trigger.dev agent skills into your AI coding assistant.
- [MCP Server](https://trigger.dev/docs/mcp-introduction)

  Give your AI assistant direct access to Trigger.dev tools and APIs.
- [Building with AI](https://trigger.dev/docs/building-with-ai)

  See how skills and the MCP server compare.
- [Writing tasks](https://trigger.dev/docs/tasks/overview)

  Learn the task patterns that skills teach your AI assistant.
