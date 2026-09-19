> Pinned source for Runpod main: [runpodctl/reference/runpodctl-config.mdx](https://github.com/runpod/docs/blob/56a86f70b4ea8b225c0e5e2231e42a4925931686/runpodctl/reference/runpodctl-config.mdx)
> Canonical documentation: https://docs.runpod.io/runpodctl/reference/runpodctl-config

# config

Configure runpodctl with your Runpod API key and API endpoint URL so the CLI can authenticate and manage account resources.

Configure the Runpod CLI with your API credentials and API URL to enable programmatic access to your Runpod resources.

```bash Command
runpodctl config [flags]
```

## Example

Configure the CLI with your API key:

```bash
runpodctl config --apiKey "your-api-key-here"
```

> **Note**
>
> For first-time setup, we recommend using [`runpodctl doctor`](https://docs.runpod.io/runpodctl/reference/runpodctl-doctor) instead, which guides you through API key configuration and SSH key setup interactively.

## Flags

**--apiKey (type: string)**

Your Runpod API key, which authenticates the CLI to access your account. You can generate an API key from the [Runpod console](https://console.runpod.io/user/settings).

**--apiUrl (type: string)**

The Runpod API endpoint URL. The default value should work for most users.

## Related commands

- [`runpodctl doctor`](https://docs.runpod.io/runpodctl/reference/runpodctl-doctor)
- [`runpodctl user`](https://docs.runpod.io/runpodctl/reference/runpodctl-user)
