> Pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/manage-your-license.md](https://github.com/n8n-io/n8n-docs/blob/c43a0ee7369b37df0ae8d4176b79365055c77a5b/docs/deploy/host-n8n/configure-n8n/manage-your-license.md)

# License Key <a id="license-key"></a>

To enable certain licensed features, you must first activate your license. You can do this either through the UI or by setting environment variables.

## Add a license key using the UI <a id="add-a-license-key-using-the-ui"></a>

In your n8n instance:

1. Log in as **Admin** or **Owner**.
2. Select **Settings** > **Usage and plan**.
3. Select **Enter activation key**.
4. Paste in your license key.
5. Select **Activate**.

## Add a license key using an environment variable <a id="add-a-license-key-using-an-environment-variables"></a>

In your n8n configuration, set `N8N_LICENSE_ACTIVATION_KEY` to your license key. If the instance already has an activated license, this variable will have no effect.

Refer to [Environment variables](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration) to learn more about configuring n8n.

### Allowlist the license server IP addresses <a id="allowlist-the-license-server-ip-addresses"></a>

n8n uses Cloudflare to host the license server. As the specific IP addresses can change, you need to allowlist the [full range of Cloudflare IP addresses](https://www.cloudflare.com/ips/) to ensure n8n can always reach the license server.

## Add a license certificate using an environment variable

For certain use cases (for example air-gapped environments) n8n can issue a license certificate instead of a license key. A license certificate is a base64-encoded string that n8n provides.

In your n8n configuration, set `N8N_LICENSE_CERT` to the string you received from n8n:

```bash
N8N_LICENSE_CERT=<base64-encoded-license-string>
```

Set either `N8N_LICENSE_CERT` or `N8N_LICENSE_ACTIVATION_KEY`, never both.
