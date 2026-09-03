> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/source-control.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/source-control.md)

# Source control environment variables <a id="source-control-environment-variables"></a>

> **Info**
> **File-based configuration**
>
> You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration#keeping-sensitive-data-in-separate-files) for more details.

n8n uses Git-based source control to support environments. Refer to [Source control and environments](https://docs.n8n.io/administer/use-source-control-and-environments/set-up-source-control) for more information on how to link a Git repository to an n8n instance and configure your source control.

| Variable                                 | Type   | Default   | Description                                                                                                                                                             |
| :--------------------------------------- | :----- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `N8N_SOURCECONTROL_DEFAULT_SSH_KEY_TYPE` | String | `ed25519` | Set to `rsa` to make RSA the default SSH key type for [Source control setup](https://docs.n8n.io/administer/use-source-control-and-environments/set-up-source-control). |
