> Commit-pinned source for n8n main: [docs/administer/manage-users-and-access/verify-user-identity/use-saml/manage-users-with-saml.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/administer/manage-users-and-access/verify-user-identity/use-saml/manage-users-with-saml.md)

# Manage users with SAML <a id="manage-users-with-saml"></a>

> **Info**
> **Feature availability**
>
> - Available on Business and Enterprise plans.
> - You need to be an instance owner or admin to enable and configure SAML.

There are some user management tasks that are affected by SAML.

## Exempt users from SAML <a id="exempt-users-from-saml"></a>

You can allow users to log in without using SAML. To do this:

1. Go to **Settings** > **Users**.
2. Select the menu icon by the user you want to exempt from SAML.
3. Select **Allow Manual Login**.

## Deleting users <a id="deleting-users"></a>

If you remove a user from your IdP, they remain logged in to n8n. You need to manually remove them from n8n as well. Refer to [Manage users](https://docs.n8n.io/administer/manage-users-and-access/add-and-remove-users) for guidance on deleting users.
