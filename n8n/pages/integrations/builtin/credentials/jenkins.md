> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/jenkins.md](https://github.com/n8n-io/n8n-docs/blob/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/integrations/builtin/credentials/jenkins.md)

# Jenkins credentials <a id="jenkins-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Jenkins](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.jenkins)

## Prerequisites <a id="prerequisites"></a>

Create an account on a [Jenkins](https://www.jenkins.io/) instance.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API token

## Related resources <a id="related-resources"></a>

Jenkins doesn't provide public API documentation; API documentation for each page is available from the user interface in the bottom right. Refer to those detailed pages for more information about the service. Refer to [Jenkins Remote Access API](https://www.jenkins.io/doc/book/using/remote-access-api/) for information on the API and API wrappers.

## Using API token <a id="using-api-token"></a>

To configure this credential, you'll need:

- The **Jenkins Username**: For the user whom the token belongs to
- A **Personal API Token**: Generate this from the user's **profile details > Configure > Add new token**. Refer to [these Stack Overflow instructions](https://stackoverflow.com/questions/45466090/how-to-get-the-api-token-for-jenkins) for more detail.
- The **Jenkins Instance URL**

Jenkins rebuilt their API token setup in 2018. If you're working with an older Jenkins instance, be sure you're using a non-legacy API token. Refer to [Security Hardening: New API token system in Jenkins 2.129+](https://www.jenkins.io/blog/2018/07/02/new-api-token-system/) for more information.
