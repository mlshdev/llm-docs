> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/security/control-telemetry.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/deploy/host-n8n/configure-n8n/security/control-telemetry.md)

# Control telemetry

n8n collects anonymous telemetry data from self-hosted n8n installations. You can opt out of data telemetry collection.

## Collected data <a id="collected-data"></a>

Refer to [Privacy | Data collection in self-hosted n8n](https://docs.n8n.io/privacy-and-security#data-collection-in-self-hosted-n8n) for details on the data n8n collects.

## How collection works <a id="how-collection-works"></a>

n8n sends most data when events occur. Workflow execution counts and an instance pulse are sent periodically (every 6 hours).

## Opting out of data collection <a id="opting-out-of-data-collection"></a>

n8n enables telemetry collection by default. To disable it, configure the following environment variables.

### Opt out of telemetry events <a id="opt-out-of-telemetry-events"></a>

To opt out of diagnostic telemetry, set the `N8N_DIAGNOSTICS_ENABLED` environment variable to false:

```bash
export N8N_DIAGNOSTICS_ENABLED=false
```

### Opt out of checking for new versions of n8n <a id="opt-out-of-checking-for-new-versions-of-n8n"></a>

To opt out of version notifications, set the `N8N_VERSION_NOTIFICATIONS_ENABLED` environment variable to false:

```bash
export N8N_VERSION_NOTIFICATIONS_ENABLED=false
```

## Disable all connection to n8n servers <a id="disable-all-connection-to-n8n-servers"></a>

To prevent all communication with n8n's servers, refer to [Isolate n8n](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/isolate-n8n).

## Related resources <a id="related-resources"></a>

- [Deployment environment variables](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/deployment): More information on these environment variables.
- [Configuration](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration): How to set environment variables.
