> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/bravesearch.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/integrations/builtin/credentials/bravesearch.md)

# Brave Search credentials

> **Info**
> On n8n Cloud, you can skip setting up Brave Search credentials by selecting **Use Gateway credits** in the credential field of nodes that support it. Refer to [Gateway credits](https://docs.n8n.io/deploy/use-n8n-cloud/gateway-credits) for details.

## Prerequisites

Create a [Brave Search API](https://api.search.brave.com/) account.

## Supported authentication methods

- API key

## Related resources

Refer to [Brave Search's API documentation](https://api-dashboard.search.brave.com/documentation) for more information about the service.

## Using API key

To configure this credential, you'll need:

- An **API Key**: Your Brave Search subscription token.

To get your API key:

1. Go to [api.search.brave.com](https://api.search.brave.com/) and sign up or log in.
2. Choose a subscription plan. Brave offers a free tier with limited queries per month.
3. Navigate to the [API Keys](https://api-dashboard.search.brave.com/app/keys) page in your dashboard.
4. Copy your API key and enter it as the **API Key** in your n8n credential.
