> Release-pinned source for ZITADEL v4.17.2: [apps/docs/content/guides/manage/console/roles.mdx](https://zitadel.com/docs/guides/manage/console/roles)

> **Terminology update**
>
> The term Role Assignment replaces User Grant, Authorization; they all refer to the same functionality.

If you built out the [POS use case example](https://zitadel.com/docs/guides/manage/console/projects-overview#example-scenario), you would probably need an application for administration.
In this application you would probably have somebody accessing as an accountant and somebody as an administrator, who is somebody with enhanced rights.
To achieve this, you would have to add this distinction as roles.
To add roles, jump to the section **Roles** and create those new roles with the following values

- Key: admin
- Display Name: Administrator
- Group: Administration

and

- Key: account
- Display Name: Accountant
- Group: Administration

![Add roles](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/console/addrole.png)

The **Key** is used for coding (can then, for example, be requested in the ID Token).

The **Display Name** is just for you to remember its use case

The **Group** is to make it easier to assign multiple roles at once.

![Roles](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/console/roles.png)

> The role client is for another application of the project `POS`, as all possible roles from your POS applications are defined in your project.

## Role Assignments

Now, to make use of these roles, add a role assignment.
A role assignment combines a user of your organization with one or multiple roles.

> You can also add users of other organizations. Click on the hint below the username field to create an [external user role assignment](https://zitadel.com/docs/concepts/features/external-user-grant).

![Auth users](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/console/authusers.png)

If you want to test your application with your own user, navigate to the **Role Assignments** section under your project and click on **new**.

Type your username, hit "Continue," select the roles you want your user to have, and save. If you want to add all roles of the Administration group, you can click on the group to select all.

![RoleAssignments](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/console/authorization.png)

Now you can retrieve those roles in your application. ZITADEL has [multiple settings](https://zitadel.com/docs/guides/manage/console/projects-overview#project-settings) for you to access them more easily. Navigate to the **General** section of your project for more settings.

> Note: We set up the role assignments from projects, but this can be achieved from multiple locations in the console. You can view and assign roles from the organization, the projects, or from the users page.
