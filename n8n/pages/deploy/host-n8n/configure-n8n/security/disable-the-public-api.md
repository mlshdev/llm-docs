> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/security/disable-the-public-api.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/deploy/host-n8n/configure-n8n/security/disable-the-public-api.md)

# Disable the public REST API <a id="disable-the-public-rest-api"></a>

The [n8n public REST API](https://docs.n8n.io/connect/n8n-api) allows you to programmatically perform many of the same tasks as you can in the n8n GUI.

If you don't plan on using this API, n8n recommends disabling it to improve the security of your n8n installation.

To disable the [public REST API](https://docs.n8n.io/connect/n8n-api), set the `N8N_PUBLIC_API_DISABLED` environment variable to `true`, for example:

```bash
export N8N_PUBLIC_API_DISABLED=true
```

## Disable the API playground <a id="disable-the-api-playground"></a>

To disable the [API playground](https://docs.n8n.io/connect/n8n-api/use-an-api-playground), set the `N8N_PUBLIC_API_SWAGGERUI_DISABLED` environment variable to `true`, for example:

```bash
export N8N_PUBLIC_API_SWAGGERUI_DISABLED=true
```

## Related resources <a id="related-resources"></a>

Refer to [Deployment environment variables](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/deployment) for more information on these environment variables.

Refer to [Configuration](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration) for more information on setting environment variables.
