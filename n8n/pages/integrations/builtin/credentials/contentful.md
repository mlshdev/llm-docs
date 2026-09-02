> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/contentful.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/credentials/contentful.md)

# Contentful credentials <a id="contentful-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Contentful](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.contentful)

## Prerequisites <a id="prerequisites"></a>

- Create a [Contentful](https://www.contentful.com/) account.
- Create a [Contentful space](https://www.contentful.com/help/getting-started/contentful-101/#step-2-create-a-space).

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API access token

## Related resources <a id="related-resources"></a>

Refer to [Contentful's API documentation](https://www.contentful.com/developers/docs/references/) for more information about the service.

## Using API access token <a id="using-api-access-token"></a>

To configure this credential, you'll need:

- Your Contentful **Space ID**: The Space ID displays as you generate the tokens;  You can also refer to the [Contentful Find space ID documentation](https://www.contentful.com/help/spaces/find-space-id/) to view the Space ID.
- A **Content Delivery API Access Token**: Required if you want to use the [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/). Leave blank if you don't intend to use this API.
- A **Content Preview API Access Token**: Required if you want to use the [Content Preview API](https://www.contentful.com/developers/docs/references/content-preview-api/). Leave blank if you don't intend to use this API.

View and generate access tokens in Contentful in **Settings > API keys**. Contentful generates tokens for both Content Delivery API and Content Preview API as part of a single key. Refer to the [Contentful API authentication documentation](https://www.contentful.com/developers/docs/references/authentication/) for detailed instructions.
