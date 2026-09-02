> Commit-pinned source for n8n main: [docs/administer/manage-users-and-access/set-permissions-and-roles-rbac/organize-work-in-projects.md](https://github.com/n8n-io/n8n-docs/blob/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/administer/manage-users-and-access/set-permissions-and-roles-rbac/organize-work-in-projects.md)

# Organize work in projects

> **Info**
> **Feature availability**
>
> RBAC is available on:
>
> - **n8n Cloud:** All plans
> - **Self-hosted:** Registered Community, Business, Enterprise
>
> Different plans have different numbers of projects and roles.

n8n uses projects to group workflows and credentials[^1], and assigns [roles](https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/see-available-roles) to users in each project. This means that a single user can have different roles in different projects, giving them different levels of access.

### Create a project <a id="create-a-project"></a>

Instance owners and instance admins can create projects.

To create a project:

1. Select ![Plus icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/administer/.gitbook/assets/plus.png) **Add project**.
2. Fill out the project settings.
3. Select **Save**.

### Add and remove users in a project <a id="add-and-remove-users-in-a-project"></a>

Project admins can add and remove users.

To add a user to a project:

1. Select the project.
2. Select **Project settings**.
3. Under **Project members**, browse for users or search by username or email address.
4. Select the user you want to add.
5. Check the [role type](https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/see-available-roles) and change it if needed.
6. Select **Save**.

To remove a user from a project:

1. Select the project.
2. Select **Project settings**.
3. In the **three-dot menu** for the user you want to remove, select **Remove user**.
4. Select **Save**.

### Delete a project <a id="delete-a-project"></a>

To delete a project:

1. Select the project.
2. Select **Project settings**.
3. Select **Delete project**.
4. Choose what to do with the workflows and credentials. You can select:
   - **Transfer its workflows and credentials to another project**: n8n prompts you to choose a project to move the data to.
   - **Delete its workflows and credentials**: n8n prompts you to confirm that you want to delete all the data in the project.

### Favorite a project <a id="favorite-a-project"></a>

You can favorite a team project to pin it for quick access. Open the project and select the star icon in the project header, or select its **three-dot menu** and select **Favorite**. See [Favorite items](https://docs.n8n.io/build/manage-workflows/favorite-items) for details, including how to favorite workflows, folders, and data tables the same way.

### Move workflows and credentials between projects or users <a id="move-workflows-and-credentials-between-projects-or-users"></a>

Workflow and credential owners can move workflows or credentials (changing ownership) to other users or projects they have access to.

> **Warning**
> **Moving revokes sharing**
>
> Moving workflows or credentials removes all existing sharing. Be aware that this could impact other workflows currently sharing these resources.

1. Select **Workflow menu** !\[Workflow menu icon]\(../../.gitbook/assets/three-dot-options-menu (1).png) or **Credential menu** !\[Workflow menu icon]\(../../.gitbook/assets/three-dot-options-menu (1).png) > **Move**.<br>

   > **Info**
   > **Moving workflows with credentials**
   >
   > When moving a workflow with credentials you have permission to share, you can choose to share the credentials as well. This ensures that the workflow continues to have access to the credentials it needs to execute. n8n will note any credentials that can't be moved (credentials you don't have permission to share).
2. Select the project or user you want to move to.
3. Select **Next**.
4. Confirm you understand the impact of the move: workflows may stop working if the credentials they need aren't available in the target project, and n8n removes any current individual sharing.
5. Select **Confirm move to new project**.

[^1]: In n8n, credentials store authentication information to connect with specific apps and services. After creating credentials with your authentication information (username and password, API key, OAuth secrets, etc.), you can use the associated app node to interact with the service.
