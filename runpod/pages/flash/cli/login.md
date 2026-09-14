> Commit-pinned source for Runpod main: [flash/cli/login.mdx](https://docs.runpod.io/flash/cli/login)

# login

Authenticate the Flash CLI with Runpod, save your API key locally, and configure browser-based authorization options and timeouts.

Authenticate with Runpod and save your API key for all Flash operations, including CLI commands and standalone `@Endpoint` functions.

```bash
flash login [OPTIONS]
```

## Example

Authenticate with Runpod (opens browser automatically):

```bash
flash login
```

The command opens your default browser to the Runpod authorization page. After you approve the request, your API key is saved locally for future CLI operations.

## How it works

1. Flash generates an authorization request.
2. Your browser opens to the Runpod console authorization page.
3. You approve the request in your browser.
4. Flash saves your API key to `~/.runpod/config.toml`.

## Flags

**--no-open**

Don't automatically open the browser. Instead, manually copy the authorization URL and open it yourself.

**--timeout (type: float)**

Maximum time in seconds to wait for authorization. Default is 600 seconds (10 minutes).

**--force**

Force re-authentication even if credentials already exist. By default, `flash login` skips the browser flow when it finds existing credentials.

## Credential storage

After successful login, your API key is saved to `~/.runpod/config.toml`. This file is used by:

- All Flash CLI commands (`flash dev`, `flash deploy`, etc.)
- Standalone Python scripts using `@Endpoint` functions
- Any code using the Flash SDK

> **Note**
>
> Keep your API key secure. Never commit it to version control. The credentials file is stored in your home directory, outside of project directories.

## Alternative: Environment variable authentication

Instead of using `flash login`, you can set your API key directly as an environment variable:

```bash
export RUNPOD_API_KEY=your_api_key_here
```

Or add it to your project's `.env` file for local CLI use:

```bash
RUNPOD_API_KEY=your_api_key_here
```

Generate an API key from [Settings > API Keys](https://console.runpod.io/user/settings) in the Runpod console.

## Credential resolution priority

Flash checks for credentials in this order:

1. `RUNPOD_API_KEY` environment variable
2. `RUNPOD_API_KEY` in a `.env` file (loaded automatically at startup)
3. Credentials file (`~/.runpod/config.toml`)

The first valid credential found is used. Environment variables take precedence over the credentials file, so you can override per-project or per-session without modifying stored credentials.

> **Warning**
>
> Values in your `.env` file are only used for local CLI commands and development. They are **not** passed to deployed endpoints. To set environment variables on deployed endpoints, use the `env` parameter in your endpoint configuration. See [Endpoint parameters](https://docs.runpod.io/flash/configuration/parameters#env) for details.

> **Warning**
>
> Your Runpod API key needs **All** access permissions.

## Related commands

- [`flash init`](https://docs.runpod.io/flash/cli/init) - Create a new Flash project
- [`flash dev`](https://docs.runpod.io/flash/cli/dev) - Start the development server
- [`flash deploy`](https://docs.runpod.io/flash/cli/deploy) - Build and deploy to Runpod
