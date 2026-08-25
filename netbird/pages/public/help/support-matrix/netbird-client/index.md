> Release-pinned source for NetBird v0.77.1: [netbirdio/docs@d905fda2a3f04a2066746875d09e51a3fe62dfed:src/pages/help/support-matrix/netbird-client/index.mdx](https://github.com/netbirdio/docs/blob/d905fda2a3f04a2066746875d09e51a3fe62dfed/src/pages/help/support-matrix/netbird-client/index.mdx)

# NetBird Client Support Matrix

The NetBird client runs across desktop, mobile, and TV platforms. Pick an OS family below for its distributions, versions, and architectures.

> **Note**
>
> Until this matrix is complete, also check the latest [Go-compatible platforms](https://go.dev/wiki/#platform-specific-information) alongside NetBird's own guidance.

### Operating systems

- **Items:** \[Linux]\(/help/support-matrix/netbird-client/linux) - Distributions, kernel, and libc support.; \[Windows]\(/help/support-matrix/netbird-client/windows) - Supported Windows versions and architectures.; \[macOS]\(/help/support-matrix/netbird-client/macos) - Supported macOS releases and architectures.; \[iOS]\(/help/support-matrix/netbird-client/ios) - Supported iOS versions and devices.; \[Android]\(/help/support-matrix/netbird-client/android) - Supported Android API levels and architectures.; \[Android TV]\(/help/support-matrix/netbird-client/android-tv) - Supported Android TV API levels.; \[tvOS]\(/help/support-matrix/netbird-client/tvos) - Supported tvOS versions.

## Go toolchain

The client is built with the Go versions listed below. Building from source against an unsupported Go release is not guaranteed to succeed. Each Go version sets a floor on OS support for that NetBird release — see the per-OS pages above for the resulting cutoffs.

| NetBird client version | Go version |
| ---------------------- | ---------- |
| v0.20.0 – v0.25.3      | 1.20       |
| v0.25.4 – v0.29.1      | 1.21       |
| v0.29.2 – v0.60.2      | 1.23       |
| v0.60.3 – v0.62.3      | 1.24       |
| v0.63.0 – current      | 1.25       |

## Reporting compatibility issues

If you hit a problem on a supported platform, see [Report bugs and issues](https://docs.netbird.io/help/report-bug-issues). Include your client version (`netbird version`) and OS details.
