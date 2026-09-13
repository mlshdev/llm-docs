> Commit-pinned source for Runpod main: [runpodctl/reference/runpodctl-update.mdx](https://docs.runpod.io/runpodctl/reference/runpodctl-update)

# update

Update runpodctl to the latest release, verify the downloaded binary with its SHA-256 checksum, and confirm the installed version.

Update `runpodctl` to the latest version to access new features and bug fixes.

```bash Command
runpodctl update
```

## Description

The `update` command downloads the latest version of `runpodctl` and verifies it against its SHA-256 checksum before replacing the installed binary. Verification always runs. If it fails, the update aborts and leaves your existing binary in place. After updating, verify the installation with [`runpodctl version`](https://docs.runpod.io/runpodctl/reference/runpodctl-version).

## Related commands

- [`runpodctl version`](https://docs.runpod.io/runpodctl/reference/runpodctl-version)
