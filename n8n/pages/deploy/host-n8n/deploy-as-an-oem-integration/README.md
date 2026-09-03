> Commit-pinned source for n8n main: [docs/deploy/host-n8n/deploy-as-an-oem-integration/README.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/deploy/host-n8n/deploy-as-an-oem-integration/README.md)

# OEM deployment <a id="oem-deployment"></a>

> **Info**
> **OEM agreement required**
>
> OEM deployment of n8n requires a separate commercial agreement with n8n. [Contact n8n](mailto:license@n8n.io) for more information.

n8n's OEM deployment option lets you embed and surface n8n's interface inside your own product's UI. This allows your users to build workflows, configure connections, and run workflow automation without leaving your product. n8n branding is required as part of an OEM integration.

This is distinct from [using n8n as a backend](https://docs.n8n.io/deploy/host-n8n), where workflows execute behind the scenes and end users never see n8n. In that model, your product calls n8n using a webhook or the [API](https://docs.n8n.io/connect/n8n-api) to trigger workflows, and n8n behaves like any other self-hosted service in your infrastructure - your users never see any n8n UI. This is available on all paid plans, under the standard license, with no separate agreement needed. OEM deployment is only necessary when you want your users to interact with the n8n editor directly.

## What's covered <a id="whats-covered"></a>

- [Prerequisites](https://docs.n8n.io/deploy/host-n8n/deploy-as-an-oem-integration/prerequisites): Guidance on CPU, memory, and database requirements for planning your deployment.
- [Managing workflows](https://docs.n8n.io/deploy/host-n8n/deploy-as-an-oem-integration/manage-workflows): Patterns for managing workflows across multiple users or organizations within an embedded deployment.
- [Token exchange](https://docs.n8n.io/deploy/host-n8n/deploy-as-an-oem-integration/set-up-token-exchange): Authenticate users from your own identity provider through iframe SSO and call n8n APIs on their behalf.
- [Workflow templates](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/configure-a-custom-workflow-templates-library): Configure a custom workflow template library for your users.
- [Credential overwrites](https://docs.n8n.io/administer/manage-credentials/credential-overwrites): Set OAuth credentials globally so your users can authenticate without seeing or entering client secrets.

## Support <a id="support"></a>

Contact [n8n support](mailto:support@n8n.io) using the email provided when you signed your OEM agreement. The [community forum](https://community.n8n.io/) is also available for general questions.
