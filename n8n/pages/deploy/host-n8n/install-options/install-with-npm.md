> Commit-pinned source for n8n main: [docs/deploy/host-n8n/install-options/install-with-npm.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/deploy/host-n8n/install-options/install-with-npm.md)

> **Warning**
> **Feature availability**
>
> npm-based installs are deprecated from n8n 3.0.

> **Info**
> **AI Assistant not available**
>
> The AI Assistant feature isn't available when using the npm installation method.

npm is a quick way to get started with n8n on your local machine. You must have [Node.js](https://nodejs.org/en/) installed. n8n requires a Node.js version between 20.19 and 24.x, inclusive.

## Try n8n with npx <a id="try-n8n-with-npx"></a>

You can try n8n without installing it using npx.

From the terminal, run:

```bash
npx n8n
```

This command will download everything that's needed to start n8n. You can then access n8n and start building workflows by opening <http://localhost:5678>.

## Install globally with npm <a id="install-globally-with-npm"></a>

To install n8n globally, use npm:

```bash
npm install n8n -g
```

To install or update to a specific version of n8n use the `@` syntax to specify the version. For example:

```bash
npm install -g n8n@0.126.1
```

To install `next`:

```bash
npm install -g n8n@next
```

After the installation, start n8n by running:

```bash
n8n
# or <a id="or"></a>
n8n start
```

### Next steps <a id="next-steps"></a>

Try out n8n using the [Quickstarts](https://docs.n8n.io/get-started/build-your-first-workflow).

## Updating <a id="updating"></a>

To update your n8n instance to the `latest` version, run:

```bash
npm update -g n8n
```

To install the `next` version:

```bash
npm install -g n8n@next
```

## n8n with tunnel <a id="n8n-with-tunnel"></a>

> **Danger**
> Use this for local development and testing. It isn't safe to use it in production.

> **Warning**
> **Development tooling**
>
> The tunnel feature is a convenience tool for local development. The underlying implementation may change between n8n versions.

To use webhooks for trigger nodes of external services like GitHub, n8n has to be reachable from the web. n8n provides a tunnel service using [cloudflared](https://github.com/cloudflare/cloudflared) that redirects requests from the web to your local n8n instance. Docker must be installed for the tunnel to work.

There are two ways to use the tunnel, depending on how you run n8n:

> **Info**
> **Docker required**
>
> The tunnel uses cloudflared, which runs as a Docker container. Make sure [Docker](https://docs.docker.com/get-docker/) is installed on your machine, even when running n8n via npm.

For npm installations, use the **services only** approach. Start cloudflared as a standalone service, then run n8n locally:

```bash
# Terminal 1: Start the cloudflared tunnel service <a id="terminal-1-start-the-cloudflared-tunnel-service"></a>
pnpm --filter n8n-containers services --services cloudflared

# Terminal 2: Start n8n locally <a id="terminal-2-start-n8n-locally"></a>
pnpm dev
```

The `services` command starts cloudflared, fetches the public tunnel URL, and writes a `.env` file to `packages/cli/bin/.env` with `WEBHOOK_URL` and `N8N_PROXY_HOPS=1`. n8n picks up this `.env` automatically on startup.

Clean up when done:

```bash
pnpm --filter n8n-containers services:clean
```

For the full stack approach (n8n and cloudflared both in containers), refer to the [Docker tunnel setup](https://docs.n8n.io/deploy/host-n8n/install-options/install-with-docker#n8n-with-tunnel).

## Reverting an upgrade <a id="reverting-an-upgrade"></a>

Install the older version that you want to go back to.

If the upgrade involved a database migration:

1. Check the feature documentation and release notes to see if there are any manual changes you need to make.
2. Run `n8n db:revert` on your current version to roll back the database. If you want to revert more than one database migration, you need to repeat this process.

## Windows troubleshooting <a id="windows-troubleshooting"></a>

If you're experiencing issues running n8n on Windows, verify your Node.js environment setup. Follow Microsoft's guide to [Install NodeJS on Windows](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
