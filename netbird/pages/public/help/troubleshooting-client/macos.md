> Pinned source for NetBird v0.84.0: [netbirdio/docs@687df76a2ecb2c825e4726f53f78fb54a131f77c:src/pages/help/troubleshooting-client/macos.mdx](https://github.com/netbirdio/docs/blob/687df76a2ecb2c825e4726f53f78fb54a131f77c/src/pages/help/troubleshooting-client/macos.mdx)

# NetBird client on macOS

macOS-specific steps for the NetBird client. For everything cross-platform (client status, the debug bundle, GRPC and ICE debugging, login failures, and reaching resources), start from [Troubleshooting client issues](https://docs.netbird.io/help/troubleshooting-client).

## Set the log level permanently

The [temporary log level](https://docs.netbird.io/help/troubleshooting-client#enabling-debug-logs-on-the-client) resets when the service restarts. To make it permanent on macOS, reinstall the service with the level set:

```shell
sudo netbird service stop
sudo netbird service uninstall
sudo netbird service install --log-level debug # or trace
sudo netbird service start
```

## Host-based firewall

The built-in macOS application firewall or third-party endpoint security software can block NetBird traffic before it leaves the machine. If connectivity works with that software temporarily disabled, add an exception for the NetBird process. See [Ports & Firewalls: Host-based firewalls](https://docs.netbird.io/about-netbird/ports-and-firewalls#host-based-firewalls) for the general approach.
