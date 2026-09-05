> Release-pinned source for ZITADEL v4.17.3: [apps/docs/content/guides/manage/console/administrators.mdx](https://zitadel.com/docs/guides/manage/console/administrators)

> **Terminology update**
>
> The term Administrators replaces Members, Memberships, Managers; they all refer to the same functionality.

Administrators are [users or service accounts](https://zitadel.com/docs/guides/manage/console/users-overview) who have permission to manage resources within ZITADEL.

Administrator permissions can be assigned to different levels in ZITADEL:

- **IAM Administrators**: This is the highest level. Users with IAM Administrator roles are able to manage the whole [Instance](https://zitadel.com/docs/concepts/structure/instance).
- **Organization Administrators**: Administrators at the Organization level are able to view or manage everything, according to their permissions, within the granted [Organization](https://zitadel.com/docs/guides/manage/console/organizations-overview).
- **Project Administrators**: In this level the user is able to manage a [project](https://zitadel.com/docs/guides/manage/console/projects-overview).
- **Project Grant Administrators**: The project grant administrator manages [projects granted](https://zitadel.com/docs/concepts/structure/granted_projects) by another organization.

The scope of the administrators is restricted based on their level.
Which means that an administrator, assigned to one organization, will have access only to the resources and settings of that organization.
Only the Administrators on the instance level can view resources, such as users, across all organizations.

To configure administrators in ZITADEL, go to the resource where you like to add it (e.g., Instance, Organization, Project, GrantedProject).
In the right part of the management console you can find **ADMINISTRATORS** in the details part. Here you have a list of the current administrators and can add a new one.

![Administrators](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/console/administrators.png)

When adding a new administrator, you can select multiple roles, some of which are only allowed to read data.
This can be especially useful if you add service account for one of your projects where you only need read access.

By default, you will only search for users within the selected organization. If you like to give a role to a user outside the organization, you need to switch to the global search and type the exact loginname of the users. This will prevent users from guessing users from other organizations.

![Administrators](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/console/add_administrator.png)

## Roles

| Name                          | Role                             | Description                                                                                                                                                            |
| ----------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Instance Owner                | IAM\_OWNER                       | Manage the Instance, manage all organizations with their content                                                                                                       |
| Instance Owner Viewer         | IAM\_OWNER\_VIEWER               | View the Instance and view all organizations with their content                                                                                                        |
| Instance Org Manager          | IAM\_ORG\_MANAGER                | Manage all organizations including their policies, projects and users                                                                                                  |
| Instance User Manager         | IAM\_USER\_MANAGER               | Manage all users and their authorizations over all organizations                                                                                                       |
| Instance Admin Impersonator   | IAM\_ADMIN\_IMPERSONATOR         | Allow impersonation of admin and end users from all organizations                                                                                                      |
| Instance Impersonator         | IAM\_END\_USER\_IMPERSONATOR     | Allow impersonation of end users from all organizations                                                                                                                |
| Instance Login Client         | IAM\_LOGIN\_CLIENT               | Get all permissions needed to implement your own Login UI.                                                                                                             |
| Org Owner                     | ORG\_OWNER                       | Manage everything within an organization                                                                                                                               |
| Org Owner Viewer              | ORG\_OWNER\_VIEWER               | View everything within an organization                                                                                                                                 |
| Org User Manager              | ORG\_USER\_MANAGER               | Manage users and their authorizations within an organization                                                                                                           |
| Org User Permission Editor    | ORG\_USER\_PERMISSION\_EDITOR    | Manage user grants and view everything needed for this                                                                                                                 |
| Org Project Permission Editor | ORG\_PROJECT\_PERMISSION\_EDITOR | Grant Projects to other organizations and view everything needed for this                                                                                              |
| Org Project Creator           | ORG\_PROJECT\_CREATOR            | This role is used for users in the global organization. They are allowed to create projects and manage them.                                                           |
| Org Dynamic Client Registrar  | ORG\_DYNAMIC\_CLIENT\_REGISTRAR  | Register OAuth 2.0 clients through the [dynamic client registration](https://zitadel.com/docs/guides/integrate/dynamic-client-registration) endpoint, and nothing else |
| Org Admin Impersonator        | ORG\_ADMIN\_IMPERSONATOR         | Allow impersonation of admin and end users from the organization                                                                                                       |
| Org Impersonator              | ORG\_END\_USER\_IMPERSONATOR     | Allow impersonation of end users from the organization                                                                                                                 |
| Project Owner                 | PROJECT\_OWNER                   | Manage everything within a project. This includes to grant users for the project.                                                                                      |
| Project Owner Viewer          | PROJECT\_OWNER\_VIEWER           | View everything within a project.                                                                                                                                      |
| Project Owner Global          | PROJECT\_OWNER\_GLOBAL           | Same as PROJECT\_OWNER, but in the global organization.                                                                                                                |
| Project Owner Viewer Global   | PROJECT\_OWNER\_VIEWER\_GLOBAL   | Same as PROJECT\_OWNER\_VIEWER, but in the global organization.                                                                                                        |
| Project Grant Owner           | PROJECT\_GRANT\_OWNER            | Same as PROJECT\_OWNER but for a granted project.                                                                                                                      |
| Org User Self Manager         | ORG\_USER\_SELF\_MANAGER         | Grants a user permission to read policies and delete their own account.                                                                                                |
| Self Management Global        | SELF\_MANAGEMENT\_GLOBAL         | Grants a user permission to create organizations, read policies, and delete their own account, in the global organization.                                             |

## Configure roles

If you run a self-hosted ZITADEL instance, you can define your custom roles by overwriting the defaults.yaml
In the InternalAuthZ section you will find all the roles and which permissions they have.

Example:

```bash
InternalAuthZ:
  RolePermissionMappings:
    - Role: "IAM_OWNER"
      Permissions:
        - "iam.read"
        - "iam.write"
```

## Administrator Permission Matrix

This table is generated dynamically from our settings file.
