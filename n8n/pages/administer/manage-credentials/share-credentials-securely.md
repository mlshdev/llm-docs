> Commit-pinned source for n8n main: [docs/administer/manage-credentials/share-credentials-securely.md](https://github.com/n8n-io/n8n-docs/blob/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/administer/manage-credentials/share-credentials-securely.md)

# Share credentials securely

> **Info**
> **Feature availability**
>
> Credential sharing is available on:
>
> - **n8n Cloud:** All plans
> - **Self-hosted:** Business, Enterprise

You can share a credential directly with other users to use in their own workflows. Or share a credential in a project[^1] for all members of that project to use. Any users using a shared credential won't be able to view or edit the credential details.

Users can share credentials they created and own. Only project admins can share credentials created in and owned by a project. Instance owners and instance admins can view and share all credentials on an instance.

Refer to [Instance roles](https://docs.n8n.io/administer/manage-users-and-access/understand-instance-roles) for more information about owners and admins.

In [projects](https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac), a user's role controls how they can interact with the workflows and credentials associated to the projects they're a member of.

> **Info**
> **Sharing end-user credentials**
>
> Sharing an [end-user credential](https://docs.n8n.io/administer/manage-credentials/end-user-credentials) shares the credential itself, not a connection. Users you share it with connect their own account, they don't use yours.

## Share a credential <a id="share-a-credential"></a>

To share a credential:

1. From the left menu, select either **Overview** or a project.
2. Select **Credentials** to see a list of your credentials.
3. Select the credential you want to share.
4. Select **Sharing**.
5. In the **Share with projects or users** dropdown, browse or search for the user or project with which you want to share your credentials.
6. Select a user or project.
7. Select **Save** to apply the changes.

## Remove access to a credential <a id="remove-access-to-a-credential"></a>

To unshare a credential:

1. From the left menu, select either **Overview** or a project.
2. Select **Credentials** to see a list of your credentials.
3. Select the credential you want to unshare.
4. Select **Sharing**.
5. Select **trash icon**!\[Trash icon]\(../.gitbook/assets/delete-node (1).png) on the user or project you want to remove from the list of shared users and projects.
6. Select **Save** to apply the changes.

[^1]: n8n projects allow you to separate workflows, variables, and credentials into separate groups for easier management. Projects make it easier for teams to collaborate by sharing and compartmentalizing related resources.
