> Pinned source for Runpod main: [runpodctl/reference/runpodctl-doctor.mdx](https://github.com/runpod/docs/blob/4962c60abcb8d9bf359d92ccc07644abd5d8e610/runpodctl/reference/runpodctl-doctor.mdx)
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

## Related commands

- [`runpodctl config`](https://docs.runpod.io/runpodctl/reference/runpodctl-config)
- [`runpodctl ssh add-key`](https://docs.runpod.io/runpodctl/reference/runpodctl-ssh)
