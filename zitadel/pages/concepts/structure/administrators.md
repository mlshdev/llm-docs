> Release-pinned source for ZITADEL v4.17.3: [apps/docs/content/concepts/structure/administrators.mdx](https://zitadel.com/docs/concepts/structure/administrators)

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

Notes:

- Read our [guide on Administrators](https://zitadel.com/docs/guides/manage/console/administrators) to learn more about the role concept and how to use Administrator roles in ZITADEL.
- [API reference](https://zitadel.com/docs/apis/resources/mgmt/management-service-list-org-member-roles) for Administrators on the organization level
