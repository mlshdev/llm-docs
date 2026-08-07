> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/help/troubleshooting-client/macos.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/help/troubleshooting-client/macos.mdx)

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
