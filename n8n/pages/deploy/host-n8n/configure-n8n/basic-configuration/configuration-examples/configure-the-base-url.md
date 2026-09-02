> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/configure-the-base-url.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/configure-the-base-url.md)

# Configure the Base URL for n8n's front end access <a id="configure-the-base-url-for-n8ns-front-end-access"></a>

> **Warning**
> **Requires manual UI build**
>
> This use case involves configuring the `VUE_APP_URL_BASE_API` environmental variable which requires a manual build of the `n8n-editor-ui` package. You can't use it with the default n8n Docker image where the default setting for this variable is `/`, meaning that it uses the root-domain.

You can configure the Base URL that the front end uses to connect to the back end's REST API. This is relevant when you want to host n8n's front end and back end separately.

```bash
export VUE_APP_URL_BASE_API=https://n8n.example.com/
```

Refer to [Environment variables reference](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/deployment) for more information on this variable.
