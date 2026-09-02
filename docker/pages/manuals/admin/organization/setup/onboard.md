> Commit-pinned source for Docker main: [content/manuals/admin/organization/setup/onboard.md](https://github.com/docker/docs/blob/36f81c2363ef9a4f853ca8406a587889cdc0583d/content/manuals/admin/organization/setup/onboard.md)

# Onboard your organization

**Admin orgs requirements**

- Subscription: Team, Business
- For: Administrators

Learn how to onboard your organization.

Onboarding your organization includes:

- Identifying users to help you allocate your subscription seats
- Invite members and owners to your organization
- Secure authentication and authorization for your organization
- Enforce sign-in for Docker Desktop to ensure security best practices

These actions help administrators gain visibility into user activity and
enforce security settings. Organization members also receive increased pull
limits and other benefits when they are signed in.

## Prerequisites

Before you start onboarding your organization, ensure you:

- Have a Docker Team or Business subscription. For more details, see
  [Docker subscriptions and features](https://www.docker.com/pricing?ref=Docs\&refAction=DocsAdminOnboard).

  > \[!NOTE]
  >
  > When purchasing a self-serve subscription, the on-screen instructions
  > guide you through creating an organization. If you have purchased a
  > subscription through Docker Sales and you have not yet created an
  > organization, see [Create an organization](https://docs.docker.com/admin/organization/setup/orgs/).

- Familiarize yourself with Docker concepts and terminology in
  the [administration overview](https://docs.docker.com/admin/).

## Onboard with guided setup

Docker Home has a guided setup to help you
onboard your organization. The guided setup's steps consist of basic onboarding
tasks. If you want to onboard outside of the guided setup,
see [Recommended onboarding steps](https://docs.docker.com/admin/organization/setup/onboard/#recommended-onboarding-steps).

To onboard using the guided setup,
navigate to [Docker Home](https://app.docker.com) and
select **Guided setup** in the left-hand navigation.

The guided setup walks you through the following onboarding steps:

- **Invite your team**: Invite owners and members.
- **Manage user access**: Add and verify a domain, manage users with SSO, and
  enforce Docker Desktop sign-in.
- **Docker Desktop security**: Configure image access management, registry
  access management, and settings management.

## Recommended onboarding steps

### Step one: Identify your Docker users

Identifying your users helps you allocate seats efficiently and ensures they
receive your Docker subscription benefits.

1. Identify the Docker users in your organization.
   - If your organization uses device management software, like MDM or Jamf,
     you can use the device management software to help identify Docker users.
     See your device management software's documentation for details. You can
     identify Docker users by checking if Docker Desktop is installed at the
     following location on each user's machine:
     - Mac: `/Applications/Docker.app`
     - Windows: `C:\Program Files\Docker\Docker`(all-user installation) or `%LOCALAPPDATA%\Programs\DockerDesktop` (per-user installation (Beta))
     - Linux: `/opt/docker-desktop`
   - If your organization doesn't use device management software or your
     users haven't installed Docker Desktop yet, you can survey your users to
     identify who is using Docker Desktop.
2. Ask users to update their Docker account's email address to one associated
   with your organization's domain, or create a new account with that email.
   - To update an account's email address, instruct your users to sign in
     to [Docker Hub](https://hub.docker.com), and update the email address to
     their email address in your organization's domain.
   - To create a new account, instruct your users to
     [sign up](https://hub.docker.com/signup) using their email address associated
     with your organization's domain. Ensure your users verify their email address.
3. Identify Docker accounts associated with your organization's domain:
   - Ask your Docker sales representative or <a id="dkr_docs_cs_org_onboarding"></a>contact sales to get a list
     of Docker accounts that use an email address in your organization's domain.

### Step two: Invite owners

Owners can help you onboard and manage your organization.

When you create an organization, you are the only owner. It is optional to
add additional owners.

To add an owner, invite a user and assign them the owner role. For more
details, see [Invite members](https://docs.docker.com/admin/organization/manage/members/) and
[Roles and permissions](https://docs.docker.com/enterprise/security/roles-and-permissions/).

### Step three: Invite members

When you add users to your organization, you gain visibility into their
activity and you can enforce security settings. Your members also
receive increased pull limits and other organization wide benefits when
they are signed in.

To add a member, invite a user and assign them the member role.
For more details, see [Invite members](https://docs.docker.com/admin/organization/manage/members/) and
[Roles and permissions](https://docs.docker.com/enterprise/security/roles-and-permissions/).

### Step four: Manage user access with SSO and SCIM

Configuring SSO and SCIM is optional and only available to Docker Business
subscribers. To upgrade a Docker Team subscription to a Docker Business
subscription, see [Upgrade a plan](https://docs.docker.com/subscription/manage/#upgrade-plans).

Use your identity provider (IdP) to manage members and provision them to Docker
automatically via SSO and SCIM. See the following for more details:

- [Configure SSO](https://docs.docker.com/enterprise/security/single-sign-on/connect/)
  to authenticate and add members when they sign in to Docker through your
  identity provider.

- Optional.
  [Enforce SSO](https://docs.docker.com/enterprise/security/single-sign-on/connect/) to
  ensure that when users sign in to Docker, they must use SSO.

  > \[!NOTE]
  >
  > Enforcing single sign-on (SSO) and enforcing Docker Desktop sign in
  > are different features. For more details, see
  > [Enforcing sign-in versus enforcing single sign-on (SSO)](https://docs.docker.com/enterprise/security/enforce-sign-in/#enforcing-sign-in-versus-enforcing-single-sign-on-sso).

- [Configure SCIM](https://docs.docker.com/enterprise/security/provisioning/scim/) to
  automatically provision, add, and de-provision members to Docker through
  your identity provider.

### Step five: Enforce sign-in for Docker Desktop

By default, members of your organization can use Docker Desktop without signing
in. When users don’t sign in as a member of your organization, they don’t
receive the
[benefits of your organization’s subscription](https://www.docker.com/pricing?ref=Docs\&refAction=DocsAdminOnboard)
and they can circumvent [Docker’s security features](https://docs.docker.com/enterprise/security/hardened-desktop/).

There are multiple ways you can enforce sign-in, depending on your organization's
Docker configuration:

- [Registry key method (Windows only)](https://docs.docker.com/enterprise/security/enforce-sign-in/methods/#registry-key-method-windows-only)
- [`.plist` method (Mac only)](https://docs.docker.com/enterprise/security/enforce-sign-in/methods/#plist-method-mac-only)
- [`registry.json` method (All)](https://docs.docker.com/enterprise/security/enforce-sign-in/methods/#registryjson-method-all)

### Step six: Manage Docker Desktop security

Docker offers the following security features to manage your organization's
security posture:

- [Image Access Management](https://docs.docker.com/enterprise/security/hardened-desktop/image-access-management/): Control which types of images your developers can pull from Docker Hub.
- [Registry Access Management](https://docs.docker.com/enterprise/security/hardened-desktop/registry-access-management/): Define which registries your developers can access.
- [Settings management](https://docs.docker.com/enterprise/security/hardened-desktop/settings-management/): Set and control Docker Desktop settings for your users.

## Next steps

- [Manage Docker products](https://docs.docker.com/admin/organization/manage/manage-products/) to configure access and view usage.
- Configure [Hardened Docker Desktop](https://docs.docker.com/enterprise/security/hardened-desktop/) to improve your organization’s security posture for containerized development.
- [Manage your domains](https://docs.docker.com/enterprise/security/domain-management/) to ensure that all Docker users in your domain are part of your organization.

Your Docker subscription provides many more additional features. To learn more,
see [Docker subscriptions and features](https://www.docker.com/pricing?ref=Docs\&refAction=DocsAdminOnboard).
