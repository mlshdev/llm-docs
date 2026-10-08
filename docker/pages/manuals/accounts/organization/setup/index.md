> Pinned source for Docker main: [content/manuals/accounts/organization/setup/_index.md](https://github.com/docker/docs/blob/858251609b8884594fd1de29c51155bc3024b260/content/manuals/accounts/organization/setup/_index.md)

# Set up a Docker organization

An organization groups members and teams under one namespace and one
subscription. Anyone with a [Docker ID](https://docs.docker.com/accounts/) can
create an organization or convert an individual account into one.

You start by creating a new organization or converting an individual
account. After creating or converting, you can onboard your organization.

## Names versus namespaces

When you create an organization, you set two values:

- Organization namespace is the permanent, unique identifier for your
  organization. It becomes the first part of every image name you push, as
  in `namespace/image:tag`. You can't change it after you create the
  organization.
  - Docker IDs and organization namespaces must be unique.
  - If a Docker ID is `acme`, no organization can use `acme` as its
    namespace.
- Organization name is the display name shown on your organization's
  Docker profile. You can change it at any time. See
  [Change organization information](https://docs.docker.com/accounts/organization/manage/general-settings/).

## Choose how to set up

The difference between creating and converting is what happens to your
existing repositories.

- Create an organization: Choose a new namespace. Your existing
  repositories stay under your personal Docker ID.
- Convert your account: Your Docker ID becomes the organization’s
  namespace. Your repositories and image names stay the same, so anyone
  pulling your images can keep using their existing image references.

## Next steps

- [Create your organization](https://docs.docker.com/accounts/organization/setup/orgs/): Choose a new namespace and subscription.
- [Convert your account](https://docs.docker.com/accounts/organization/setup/convert-account/): Keep an existing Docker ID as the organization namespace.
- [Onboard your organization](https://docs.docker.com/accounts/organization/setup/onboard/): Invite members and configure sign-in.
- [Manage your organization](https://docs.docker.com/accounts/organization/manage/): Add members, teams, licenses, and seats after setup.
- [Security](https://docs.docker.com/security/): Configure single sign-on, provisioning, and access management.
