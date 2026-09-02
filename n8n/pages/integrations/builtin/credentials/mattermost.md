> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/mattermost.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/credentials/mattermost.md)

# Mattermost credentials <a id="mattermost-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Mattermost](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mattermost)

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API access token

## Related resources <a id="related-resources"></a>

Refer to [Mattermost's API documentation](https://api.mattermost.com/) for more information about the service.

## Using API access token <a id="using-api-access-token"></a>

To configure this credential, you'll need a [Mattermost](https://www.mattermost.com/) account and:

- A personal **Access Token**
- Your Mattermost **Base URL**.

To set it up:

1. In Mattermost, go to **Profile > Security > Personal Access Tokens**.<br>

   > **Warning**
   > **No Personal Access Tokens option**
   >
   > If you don't see the Personal Access Tokens option, refer to the troubleshooting steps in [Enable personal access tokens](#enable-personal-access-tokens) below.

2. Select **Create Token**.

3. Enter a **Token description**, like `n8n integration`.

4. Select **Save**.

5. Copy the **Token ID** and enter it as the **Access Token** in your n8n credential.

6. Enter your Mattermost URL as the **Base URL**.

7. By default, n8n connects only if SSL certificate validation succeeds. To connect even if SSL certificate validation fails, turn on **Ignore SSL Issues**.

Refer to the Mattermost [Personal access tokens documentation](https://developers.mattermost.com/integrate/reference/personal-access-token/) for more information.

## Enable personal access tokens <a id="enable-personal-access-tokens"></a>

Not seeing the **Personal Access Tokens** option has two possible causes:

- Mattermost doesn't have the personal access tokens integration enabled.
- You're trying to generate a personal access token as a non-admin user who doesn't have permission to generate personal access tokens.

To identify the root cause and resolve it:

1. Log in to Mattermost as an admin.
2. Go to **System Console > Integrations > Integration Management**.
3. Confirm that **Enable personal access tokens** is set to **true**. If it's not, change.
4. Go to **System Console > User Management > Users**.
5. Search for the user account you want to allow to generate personal access tokens.
6. Select the **Actions** dropdown for the user and select **Manage roles**.
7. Check the box for **Allow this account to generate personal access tokens** and **Save**.

Refer to the Mattermost [Personal access tokens documentation](https://developers.mattermost.com/integrate/reference/personal-access-token/) for more information.
