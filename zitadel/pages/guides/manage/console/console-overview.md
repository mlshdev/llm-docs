> Release-pinned source for ZITADEL v4.17.2: [apps/docs/content/guides/manage/console/console-overview.mdx](https://zitadel.com/docs/guides/manage/console/console-overview)

## Overview

The ZITADEL Management Console is the web-based Dashboard UI designed to facilitate the management and administration of ZITADEL resources and settings. It serves as a central hub where [Administrators](https://zitadel.com/docs/concepts/structure/administrators) can perform tasks related to identity and access management, configure authentication methods, and manage the organization's infrastructure.

While the Management Console is primarily a tool for administrators, it can also be accessed by end-users to manage their own profiles (e.g., password reset, MFA setup), unless you [restrict access](https://zitadel.com/docs/guides/solution-scenarios/restrict-console) to build your own custom UI.

## Accessing the Management Console

The management console is available by navigating to the [Custom Domain](https://zitadel.com/docs/concepts/features/custom-domain) of your instance and appending the path `/ui/console`.

## Navigation and Context

When logged in, you are greeted by the home page, which allows you to set shortcuts to frequently used settings and projects.

### Context Switcher

ZITADEL is a multi-tenant system. The Management Console features a **Context Switcher** in the **top-left** corner. This allows you to switch between the different **Organizations** you manage.

Depending on your use case:

- **B2C:** You might stick to your global organization.
- **B2B:** You will frequently switch between multiple organizations to manage specific customer settings.

![Context switcher](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/console/contextswitcher.png)

To understand how to structure your organizations, read our [Solution Scenario](https://zitadel.com/docs/guides/solution-scenarios/configurations) guides.

## Key Capabilities

The Management Console enables administrators to perform the following critical tasks:

1. **Default Settings:** Administrators can configure global system defaults. This includes authentication methods, security policies (like password complexity or lockout policies), and other system-wide parameters.
2. **Resource Management:** Create, update, and delete essential resources such as [Organizations](https://zitadel.com/docs/guides/manage/console/organizations-overview), [Projects](https://zitadel.com/docs/guides/manage/console/projects-overview), and [Applications](https://zitadel.com/docs/guides/manage/console/applications-overview).
3. **User Management:** Manage the lifecycle of [User accounts](https://zitadel.com/docs/guides/manage/console/users-overview). This includes creating new users, updating profiles, resetting passwords, and deactivating accounts.
4. **Access Control:** Define and manage permissions. Administrators can assign [Roles](https://zitadel.com/docs/guides/manage/console/roles) to users and configure fine-grained access controls for specific resources.
5. **Administrator Assignment:** Delegate administrative tasks by assigning **Administrator** roles (e.g., Org Owner, Project Owner) to specific users, ensuring proper oversight and segregation of duties.
6. **Customization and Branding:** Customize the look and feel of ZITADEL. You can upload custom logos, select color schemes, and apply [branding](https://zitadel.com/docs/guides/manage/customize/branding) to match your corporate identity.
7. **Audit Logging:** Access [Audit Logs](https://zitadel.com/docs/concepts/features/audit-trail) to track user activity and setting changes. This is essential for monitoring security events and maintaining regulatory compliance.

## Security and Restrictions

### Prevent Management Console Access

In many implementations, specifically white-label B2C scenarios, you may want to prevent end-users from accessing the generic ZITADEL Management Console entirely.

Administrators can restrict access to the management console, forcing users to interact only with your own applications or custom user interfaces.
Please follow the [Restrict Management Console Access guide](https://zitadel.com/docs/guides/solution-scenarios/restrict-console) to achieve this.

## References

- [Administrator Roles Concept](https://zitadel.com/docs/concepts/structure/administrators)
