> Release-pinned source for NetBird v0.77.0: [netbirdio/docs@abb8d4607fd4a1260c80bcdad1493e92941e1837:src/pages/help/support-matrix/netbird-client/linux.mdx](https://github.com/netbirdio/docs/blob/abb8d4607fd4a1260c80bcdad1493e92941e1837/src/pages/help/support-matrix/netbird-client/linux.mdx)

# Linux

NetBird's Linux support depends on the client mode you run:

- **Userspace mode** is supported wherever the Go toolchain is supported. The kernel floor for each NetBird release follows Go's minimum OS requirements (see the table below).
- **Kernel mode** depends on the iptables / nftables features available on the host distribution.

The NetBird team's end-to-end tests cover the distributions below — **Ubuntu 20.04** is the oldest tested release:

- Ubuntu 20.04, 22.04, 24.04
- Debian 12
- Rocky Linux 9
- Fedora 41

Other distributions are not actively tested; their compatibility follows the mode-specific rules above.

> **Warning**
>
> The kernel range below is derived from Go's [minimum OS requirements](https://go.dev/wiki/MinimumRequirements) per NetBird release's Go version, and applies to userspace mode. Kernel mode may have stricter requirements depending on the distribution — confirm with the team for production deployments.

## Linux kernel (userspace mode)

| Kernel range  | NetBird release range      |
| ------------- | -------------------------- |
| 3.2 and newer | v0.60.3 onwards (Go 1.24+) |
| 2.6.32 – 3.1  | ≤ v0.60.2 (Go ≤1.23)       |

The 2.6.32 floor primarily affected RHEL 6, CentOS 6, Ubuntu 14.04, and Debian 8 — all upstream EOL.

## Reporting compatibility issues

See [Report bugs and issues](https://docs.netbird.io/help/report-bug-issues). Include your distro, kernel version (`uname -r`), and NetBird client version (`netbird version`).
