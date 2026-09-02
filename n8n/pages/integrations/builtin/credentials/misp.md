> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/misp.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/credentials/misp.md)

# MISP credentials <a id="misp-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [MISP](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.misp)

## Prerequisites <a id="prerequisites"></a>

Install and run a [MISP](https://misp.github.io/MISP/) instance.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [MISP's Automation API documentation](https://www.circl.lu/doc/misp/automation) for more information about the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **API Key**: In MISP, these are called Automation keys. Get an automation key from **Event Actions > Automation**. Refer to [MISP's automation keys documentation](https://www.circl.lu/doc/misp/automation/#automation-key) for instructions on generating more keys.
- A **Base URL**: Your MISP URL.
- Select whether to **Allow Unauthorized Certificates**: If turned on, the credential will connect even if SSL certificate validation fails.
