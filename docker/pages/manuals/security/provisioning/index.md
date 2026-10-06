> Pinned source for Docker main: [content/manuals/security/provisioning/_index.md](https://github.com/docker/docs/blob/6cf1b1c167f032e8a6629da211602300b623b20e/content/manuals/security/provisioning/_index.md)

# User provisioning overview

**SSO requirements**

- Subscription: Business
- For: Administrators

After you configure single sign-on (SSO), provision users so they can
access your organization through automated account management.

## Provisioning methods

Provisioning automates account creation, updates, and deactivation using
data from your identity provider (IdP). Docker supports the following
methods:

| Provisioning method                                                                                       | When it runs                                                                                           | Lifecycle management                                                                      | Default setting                |
| :-------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- | :----------------------------- |
| [System for Cross-domain Identity Management (SCIM)](https://docs.docker.com/security/provisioning/scim/) | On the IdP's synchronization schedule or through Provision on Demand                                   | Creates and updates users, synchronizes configured groups, and deprovisions users         | Disabled                       |
| [Just-in-Time (JIT)](https://docs.docker.com/security/provisioning/just-in-time/)                         | When a user signs in through SSO                                                                       | Creates users and applies attributes from the SSO assertion. It doesn't deprovision users | Enabled when you configure SSO |
| [Auto-provisioning](https://docs.docker.com/security/provisioning/auto-provisioning/)                     | When an existing Docker user signs in or verifies their email, and that address uses a verified domain | Adds the user to the organization. It doesn't create or deprovision accounts              | Disabled                       |

[Group mapping](https://docs.docker.com/security/provisioning/scim/group-mapping/) assigns
users to Docker organizations and teams. Use it with SAML SSO or SCIM. You can
also invite users manually when automatic provisioning isn't configured.

## Default provisioning setup

Docker turns on JIT provisioning when you configure an SSO connection. If you
also enable SCIM, Docker recommends choosing one provisioning source to manage
users and attributes. Before configuring SCIM, review
[how SCIM works with JIT](https://docs.docker.com/security/provisioning/scim/#choose-how-scim-works-with-jit).

For a domain that belongs to an SSO connection, JIT adds the user instead of
auto-provisioning.

## SSO attributes

Each time a user signs in through SSO, Docker reads attributes from your
IdP to set the user's identity and permissions:

| Attribute              | Required | Description                                                                                                                                                           |
| :--------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Email address          | Yes      | Unique identifier for the user                                                                                                                                        |
| Full name              | Yes      | User's complete name                                                                                                                                                  |
| Groups                 | No       | Group-based access control                                                                                                                                            |
| Docker Org             | No       | Organization the user belongs to                                                                                                                                      |
| Docker Team            | No       | Team within the organization                                                                                                                                          |
| Docker Role            | No       | Permissions in Docker                                                                                                                                                 |
| Docker session minutes | No       | Session duration, in minutes, before users must re-authenticate with their IdP. Must be a positive integer greater than 0. If omitted, default session timeouts apply |

> \[!NOTE]
>
> Default session timeouts apply when Docker session minutes is not
> specified. Docker Desktop sessions expire after 90 days or 30 days of
> inactivity. Docker Hub and Docker Home sessions expire after 24 hours.

## SAML attribute mapping

If your organization uses SAML for SSO, Docker reads these attributes
from the SAML assertion. Identity providers may use different names for
the same attributes.

| SSO attribute                     | SAML assertion attributes                                                                                                                                                                                                |
| :-------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Email address                     | `"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"`, `"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn"`, `"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"`, `email` |
| Full name                         | `"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"`, `name`, `"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"`, `"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname"`           |
| Groups (optional)                 | `"http://schemas.xmlsoap.org/claims/Group"`, `"http://schemas.microsoft.com/ws/2008/06/identity/claims/groups"`, `Groups`, `groups`                                                                                      |
| Docker Org (optional)             | `dockerOrg`                                                                                                                                                                                                              |
| Docker Team (optional)            | `dockerTeam`                                                                                                                                                                                                             |
| Docker Role (optional)            | `dockerRole`                                                                                                                                                                                                             |
| Docker session minutes (optional) | `dockerSessionMinutes`, must be a positive integer greater than 0                                                                                                                                                        |

## Next steps

Choose the provisioning method that fits your organization:

- [Add and manage domains](https://docs.docker.com/security/provisioning/domain-management/): Add, verify, and manage domains for auto-provisioning.
- [SCIM provisioning](https://docs.docker.com/security/provisioning/scim/): Sync user data between your IdP and Docker with SCIM.
- [Just-in-Time (JIT) provisioning](https://docs.docker.com/security/provisioning/just-in-time/): Create user accounts automatically on first SSO sign-in.
- [Auto-provisioning](https://docs.docker.com/security/provisioning/auto-provisioning/): Add users whose email addresses match a verified domain.

If users get the wrong role or team after you change methods, see
[Troubleshoot provisioning](https://docs.docker.com/security/provisioning/troubleshoot-provisioning/).
