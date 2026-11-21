> Pinned source for Runpod main: [runpodctl/reference/runpodctl-doctor.mdx](https://github.com/runpod/docs/blob/e4b64f14b14cea0c05ab6977e1843b891202d4b9/runpodctl/reference/runpodctl-doctor.mdx)
> Canonical documentation: https://docs.runpod.io/runpodctl/reference/runpodctl-doctor

# doctor

Run runpodctl doctor to configure API and SSH credentials, verify the CLI setup, and diagnose common connection or configuration problems.

Diagnose and fix CLI issues, including first-time setup for API keys and SSH configuration.

```bash Command
runpodctl doctor
```

## Description

The `doctor` command is the recommended way to set up `runpodctl` for the first time. It guides you through:

- Configuring your API key
- Setting up SSH keys for Pod access
- Verifying your configuration

If you encounter issues with the CLI, running `doctor` can help diagnose and fix common problems.

## Example

Run the doctor command to set up or troubleshoot your CLI:

```bash
runpodctl doctor
```

The command will interactively guide you through the setup process and report any issues it finds.

To set the API key without a prompt, for example in CI or a container, pipe it on stdin. This keeps the key out of your shell history and the process list. Stdin is read only when no key is configured yet:

```bash
printf %s "$MY_RUNPOD_KEY" | runpodctl doctor
```

`doctor` saves a key only after the API accepts it, and exits with a non-zero code when it finishes unhealthy. The report is still printed.

## Flags

**--api-key (type: string)**

API key to validate and save, replacing any saved key. The value is visible in your shell history and the process list, so prefer stdin.

## Related commands

- [`runpodctl config`](https://docs.runpod.io/runpodctl/reference/runpodctl-config)
- [`runpodctl ssh add-key`](https://docs.runpod.io/runpodctl/reference/runpodctl-ssh)
