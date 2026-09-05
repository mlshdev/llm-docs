> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/security/set-up-ssl.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/deploy/host-n8n/configure-n8n/security/set-up-ssl.md)

# Set up SSL <a id="set-up-ssl"></a>

There are two methods to support TLS/SSL in n8n.

## Use a reverse proxy (recommended) <a id="use-a-reverse-proxy-recommended"></a>

Use a reverse proxy like [Traefik](https://doc.traefik.io/traefik/) or a Network Load Balancer (NLB) in front of the n8n instance. This should also take care of certificate renewals.

Refer to [Security | Data encryption](https://n8n.io/legal/#security) for more information.

## Pass certificates into n8n directly <a id="pass-certificates-into-n8n-directly"></a>

You can also choose to pass certificates into n8n directly. To do so, set the `N8N_SSL_CERT` and `N8N_SSL_KEY` environment variables to point to your generated certificate and key file.

You'll need to make sure the certificate stays renewed and up to date.

Refer to [Deployment environment variables](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/deployment) for more information on these variables and [Configuration](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration) for more information on setting environment variables.
