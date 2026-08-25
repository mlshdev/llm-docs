> Release-pinned source for NetBird v0.77.1: [netbirdio/docs@d905fda2a3f04a2066746875d09e51a3fe62dfed:src/pages/help/troubleshooting-client/linux.mdx](https://github.com/netbirdio/docs/blob/d905fda2a3f04a2066746875d09e51a3fe62dfed/src/pages/help/troubleshooting-client/linux.mdx)

# NetBird client on Linux

Linux-specific steps for the NetBird client. For everything cross-platform (client status, the debug bundle, GRPC and ICE debugging, login failures, and reaching resources), start from [Troubleshooting client issues](https://docs.netbird.io/help/troubleshooting-client).

## Set the log level permanently

The [temporary log level](https://docs.netbird.io/help/troubleshooting-client#enabling-debug-logs-on-the-client) resets when the daemon restarts. To make it permanent on Linux, use one of the following.

### systemd

The default systemd unit reads environment variables from `/etc/sysconfig/netbird`:

```shell
sudo mkdir -p /etc/sysconfig
echo 'NB_LOG_LEVEL=debug' | sudo tee -a /etc/sysconfig/netbird
sudo systemctl restart netbird
```

### Other init systems

```shell
sudo netbird service stop
sudo netbird service uninstall
sudo netbird service install --log-level debug # or trace
sudo netbird service start
```

### Docker

Set `NB_LOG_LEVEL=debug` on the container:

```shell
docker run --rm --name PEER_NAME --hostname PEER_NAME --cap-add=NET_ADMIN --cap-add=SYS_ADMIN --cap-add=SYS_RESOURCE -d \
-e NB_SETUP_KEY=<SETUP KEY> -e NB_LOG_LEVEL=debug -v netbird-client:/var/lib/netbird netbirdio/netbird:latest
```

## Host-based firewall

NetBird manages its own rules, but UFW, firewalld, or endpoint security software can conflict and silently drop traffic. See [Ports & Firewalls: Host-based firewalls](https://docs.netbird.io/about-netbird/ports-and-firewalls#host-based-firewalls) for UFW and firewalld symptoms, remediation, and diagnostic commands.
