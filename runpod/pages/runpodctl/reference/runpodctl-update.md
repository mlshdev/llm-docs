> Pinned source for Runpod main: [runpodctl/reference/runpodctl-update.mdx](https://github.com/runpod/docs/blob/1d195e36bae30bf7ccc6543bce79500dea0e259c/runpodctl/reference/runpodctl-update.mdx)
> Canonical documentation: https://docs.runpod.io/runpodctl/reference/runpodctl-update

# update

Update runpodctl to the latest release, verify the downloaded binary with its SHA-256 checksum, and confirm the installed version.

Update `runpodctl` to the latest version to access new features and bug fixes.

```bash Command
runpodctl update
```

## Description

The `update` command downloads the latest version of `runpodctl` and verifies it against its SHA-256 checksum before replacing the installed binary. Verification always runs. If it fails, the update aborts and leaves your existing binary in place. After updating, verify the installation with [`runpodctl version`](https://docs.runpod.io/runpodctl/reference/runpodctl-version).

The command never prompts, so you can run it from scripts. If you installed `runpodctl` with Homebrew, conda, or pixi, the update goes through that package manager.

To check whether a newer release exists without installing it:

```bash
runpodctl update --check
```

## Flags

**--check (type: bool)**

Report whether a newer release exists, without installing it.

## Related commands

- [`runpodctl version`](https://docs.runpod.io/runpodctl/reference/runpodctl-version)
