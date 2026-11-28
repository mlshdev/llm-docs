> Pinned source for NetBird v0.84.0: [netbirdio/docs@687df76a2ecb2c825e4726f53f78fb54a131f77c:src/pages/help/support-matrix/netbird-client/windows.mdx](https://github.com/netbirdio/docs/blob/687df76a2ecb2c825e4726f53f78fb54a131f77c/src/pages/help/support-matrix/netbird-client/windows.mdx)

# Windows

Windows 10 and 11 run on the latest NetBird client. Windows 7 and 8 are frozen at NetBird **v0.25.3**, the last release built with Go 1.20, the last Go toolchain to target those Windows versions. Older Windows releases may continue to work on pinned client versions but are not covered by bug fixes or security updates.

> **Warning**
>
> The version cutoffs below are derived from the [Go toolchain's minimum OS requirements](https://go.dev/wiki/MinimumRequirements) for each NetBird release's Go version. NetBird may have stricter requirements than Go, so confirm with the team before relying on them.

## Windows versions

| Version                            | Architectures                  | Version Supported |
| ---------------------------------- | ------------------------------ | ----------------- |
| Windows 11                         | x86\_64, arm64 (since v0.54.0) | NetBird latest    |
| Windows 10 / Server 2016 and newer | x86\_64, arm64 (since v0.54.0) | NetBird latest    |
| Windows 8 / Server 2012 / 2012 R2  | all                            | ≤ v0.25.3         |
| Windows 7 / Server 2008 R2         | all                            | ≤ v0.25.3         |

## Reporting compatibility issues

See [Report bugs and issues](https://docs.netbird.io/help/report-bug-issues). Include your Windows build (`winver`) and NetBird client version (`netbird version`).
