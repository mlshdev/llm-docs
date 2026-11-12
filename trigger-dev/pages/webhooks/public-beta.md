> Pinned source for Trigger.dev v4.8.5: [docs/webhooks/public-beta.mdx](https://github.com/triggerdotdev/trigger.dev/blob/d412e08a8ab97131816c18a5cdb39bb74ced0eb0/docs/webhooks/public-beta.mdx)
> Canonical documentation: https://trigger.dev/docs/webhooks/public-beta

# Webhooks public beta

Webhooks are available to every organization in the normal Trigger.dev release. Install the packages, see what may change before general availability, and send feedback.

**Webhooks are in public beta: every organization can use them, and they ship in the normal Trigger.dev release.** Endpoints you declare sync when you deploy or run `trigger dev`, and they show up on each environment's **Webhooks** page.

## What public beta means

- The API may still change before general availability. We announce changes in the [changelog](https://trigger.dev/changelog).
- Webhooks are open source, so they work self-hosted too. See [Self-hosting webhooks](https://trigger.dev/docs/self-hosting/env/webapp#webhooks) to turn them on.

## Install the packages

Webhooks are in `@trigger.dev/sdk` 4.8.1 and later. Install the SDK and the CLI from `@latest`:

```bash npm
npm i @trigger.dev/sdk@latest
npm i -D trigger.dev@latest
```

```bash pnpm
pnpm add @trigger.dev/sdk@latest
pnpm add -D trigger.dev@latest
```

```bash bun
bun add @trigger.dev/sdk@latest
bun add -D trigger.dev@latest
```

Add the connector packages if you're building Slack or Linear agents:

```bash npm
npm i @trigger.dev/slack@latest @trigger.dev/linear@latest
```

```bash pnpm
pnpm add @trigger.dev/slack@latest @trigger.dev/linear@latest
```

```bash bun
bun add @trigger.dev/slack@latest @trigger.dev/linear@latest
```

The webhook tools in the [MCP server](https://trigger.dev/docs/mcp-introduction) come with the CLI, so a current `trigger.dev` install has them.

## Moving from a private beta build

If you installed from the `webhooks` npm tag, switch every Trigger.dev package to `@latest`, including `@trigger.dev/build` if your project has it. Versions like `4.8.0-webhooks.20261020092920` are older than 4.8.1. You can also remove any minimum release age exemption you added for the beta builds, and reinstall the MCP server without `--tag webhooks`.

## Get started

- [Overview](https://trigger.dev/docs/webhooks/overview): endpoints, sources, and what can subscribe.
- [Connect a provider](https://trigger.dev/docs/webhooks/connect): register the URL and signing secret, then check that events arrive.
- [Slack agents](https://trigger.dev/docs/webhooks/slack) and [Linear agents](https://trigger.dev/docs/webhooks/linear): turn a `chat.agent` into an agent that lives in Slack or Linear.
- [Deliveries and endpoints](https://trigger.dev/docs/webhooks/deliveries): inspect payloads, replay deliveries, and see the runs each one started.

## Feedback

Send bugs, questions and ideas to <eric@trigger.dev>. Delivery ids (`whd_...`) and run ids help us find what happened.
