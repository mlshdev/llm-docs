> Commit-pinned source for n8n main: [docs/connect/n8n-api/use-an-api-playground.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/connect/n8n-api/use-an-api-playground.md)

# Using an API playground <a id="using-an-api-playground"></a>

This documentation site provides a playground to test out calls. Self-hosted users also have access to a built-in playground hosted as part of their instance.

## Documentation playground <a id="documentation-playground"></a>

You can test API calls from this site's [endpoint reference](https://docs.n8n.io/connect/n8n-api/api-reference). You need to set your server's base URL and instance name, and add an API key.

n8n uses [Scalar's](https://github.com/scalar/scalar) open source API platform to power this functionality.

> **Warning**
> **Exposed API key and data**
>
> Use a test API key with limited scopes and test data when using a playground. All calls from the playground are routed through Scalar's proxy servers.

> **Warning**
> **Real data**
>
> You have access to your live data. This is useful for trying out requests. Be aware you can change or delete real data.

## Built-in playground <a id="built-in-playground"></a>

> **Info**
> **Feature availability**
>
> The API playground is available on:
>
> - **Self-hosted:** All editions
>
> It isn't available on n8n Cloud.

The n8n API comes with a built-in Swagger UI playground in self-hosted versions. This provides interactive documentation, where you can try out requests. The path to access the playground depends on your hosting.

n8n constructs the path from values set in your environment variables:

```shell
N8N_HOST:N8N_PORT/N8N_PATH/api/v<api-version-number>/docs
```

The API version number is `1`. There may be multiple versions available in the future.

> **Warning**
> **Real data**
>
> If you select **Authorize** and enter your API key in the API playground, you have access to your live data. This is useful for trying out requests. Be aware you can change or delete real data.

The API includes built-in documentation about credential formats. This is available using the `credentials` endpoint:

```shell
N8N_HOST:N8N_PORT/N8N_PATH/api/v<api-version-number>/credentials/schema/{credentialTypeName}
```

> **Info**
> **How to find `credentialTypeName`**
>
> To find the type, download your workflow as JSON and examine it. For example, for a Google Drive node the `{credentialTypeName}` is `googleDriveOAuth2Api`:
>
> ```json
> {
>     ...,
>     "credentials": {
>         "googleDriveOAuth2Api": {
>         "id": "9",
>         "name": "Google Drive"
>         }
>     }
> }
> ```
