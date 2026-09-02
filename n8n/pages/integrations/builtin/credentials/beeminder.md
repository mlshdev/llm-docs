> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/beeminder.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/credentials/beeminder.md)

# Beeminder credentials <a id="beeminder-credentials"></a>

You can use these credentials to authenticate the following node:

- [Beeminder](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.beeminder)

## Prerequisites <a id="prerequisites"></a>

Create a [Beeminder](https://www.beeminder.com/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API user token

## Related resources <a id="related-resources"></a>

Refer to [Beeminder's API documentation](https://api.beeminder.com/#beeminder-api-reference) for more information about the service.

## Using API user token <a id="using-api-user-token"></a>

To configure this credential, you'll need:

- A **User** name: Should match the user who the Auth Token is generated for.
- A personal **Auth Token** for that user. Generate this using either method below:
  - In the GUI: From the [Apps & API](https://help.beeminder.com/article/110-apps-and-api#API-token) option within **Account Settings**
  - In the API: From hitting the [`auth_token` API endpoint](https://api.beeminder.com/#auth)
