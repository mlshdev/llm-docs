> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/external-secrets.md](https://github.com/n8n-io/n8n-docs/blob/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/external-secrets.md)

# External secrets environment variables <a id="external-secrets-environment-variables"></a>

> **Info**
> **File-based configuration**
>
> You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration#keeping-sensitive-data-in-separate-files) for more details.

You can use an external secrets store to manage credentials for n8n. Refer to [External secrets](https://docs.n8n.io/administer/manage-credentials/use-external-secret-stores) for details.

| Variable                               | Type   | Default           | Description                                         |
| :------------------------------------- | :----- | :---------------- | :-------------------------------------------------- |
| `N8N_EXTERNAL_SECRETS_UPDATE_INTERVAL` | Number | `300` (5 minutes) | How often (in seconds) to check for secret updates. |
