> Pinned source for Docker main: [content/manuals/accounts/individual/deactivate-user-account.md](https://github.com/docker/docs/blob/226023fc89bdeb3f051c4c8c697d04ed5f5bcd2c/content/manuals/accounts/individual/deactivate-user-account.md)

# Deactivate a Docker account

When you deactivate an individual Docker account, Docker removes all of
your public and private repositories. All Docker products and services
that use your Docker account are inaccessible after deactivation.

> \[!WARNING]
>
> Back up any important data before you continue. Deactivating your account is
> permanent and cannot be undone.

## Before you deactivate

Before deactivating your Docker account, complete the following
requirements:

- If you are an organization or company owner, you must [leave your
  organization or
  company](https://docs.docker.com/accounts/organization/setup/convert-account/#leave-an-existing-organization)
  before deactivating your Docker account.
- If you have an active Docker subscription,
  [downgrade it to a Docker Personal
  subscription](https://docs.docker.com/subscription-billing/plans/docker/#cancel-a-docker-plan).
  This includes paid Docker Scout and Docker Build Cloud plans.
- Pull any images and tags you want to keep.
- If you linked a GitHub or Bitbucket account for automated builds, unlink
  it. See
  [Unlink a GitHub user
  account](https://docs.docker.com/docker-hub/repos/manage/builds/link-source/#unlink-a-github-user-account)
  or
  [Unlink a Bitbucket user
  account](https://docs.docker.com/docker-hub/repos/manage/builds/link-source/#unlink-a-bitbucket-user-account).

## Deactivate

The **Deactivate account** button stays unavailable until you complete
the deactivation requirements.

1. Sign in to [Docker Home](https://app.docker.com/login).
2. Select your avatar to open the drop-down menu.
3. Select **Account settings**.
4. Select **Deactivate**.
5. Enter your username in the **User account** field.
6. Select **Deactivate account**.

Docker signs you out after it deactivates your account.

## Delete personal data

Deactivating your account does not delete your personal data. To request
personal data deletion, fill out Docker's
[Privacy request form](https://preferences.docker.com/).
