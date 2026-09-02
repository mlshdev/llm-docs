> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/credentials.md](https://github.com/n8n-io/n8n-docs/blob/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/credentials.md)

# Credentials environment variables <a id="credentials-environment-variables"></a>

> **Info**
> **File-based configuration**
>
> You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration#keeping-sensitive-data-in-separate-files) for more details.

Enable credential overwrites using the following environment variables. Refer to [Credential overwrites](https://docs.n8n.io/administer/manage-credentials/credential-overwrites) for details.

| Variable                                 | Type    | Default          | Description                                                                                                                                                               |
| :--------------------------------------- | :------ | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `CREDENTIALS_OVERWRITE_DATA`<br>/`_FILE` | \*      | -                | Overwrites for credentials.                                                                                                                                               |
| `CREDENTIALS_OVERWRITE_ENDPOINT`         | String  | -                | The API endpoint to fetch credentials.                                                                                                                                    |
| `CREDENTIALS_OVERWRITE_PERSISTENCE`      | Boolean | `false`          | Enable database persistence for credential overwrites. Required for multi-instance or queue mode to propagate overwrites to workers through a publish/subscribe approach. |
| `N8N_MANAGED_OAUTH_SHOW_SCOPES`          | String  | -                | Comma-separated list of managed OAuth credential types for which users can configure scope fields.                                                                        |
| `CREDENTIALS_DEFAULT_NAME`               | String  | `My credentials` | The default name for credentials.                                                                                                                                         |
