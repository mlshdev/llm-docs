> Commit-pinned source for Docker main: [content/manuals/accounts/manage-account.md](https://github.com/docker/docs/blob/ff96ad1711065cf2e9c3f1d701dad04775834f70/content/manuals/accounts/manage-account.md)

# Manage a Docker account

You can manage your Docker account in Docker Home, including administrative
and security settings.

> \[!TIP]
>
> If your account is associated with an organization that enforces single
> sign-on (SSO), you may not have permissions to update your account settings.
> Contact your administrator to update your settings.

## Update account information

Account information is visible on your **Account settings** page. You can
update the following:

- Full name
- Company
- Location
- Website
- Gravatar email

To add or update your avatar using Gravatar:

1. Create a [Gravatar account](https://gravatar.com/).
2. Create your avatar.
3. Add your Gravatar email to your Docker account settings.

It may take some time for your avatar to update in Docker.

## Update email address

To update your email address:

1. Sign in to your [Docker account](https://app.docker.com/login).
2. Select your avatar in the top-right corner and select **Account settings**.
3. Select **Email**.
4. Enter your new email address and confirm your identity with your password.
   Select **Verify email**.
5. Go to the new Docker email and copy the 6-digit verification code.
6. Paste the verification code to complete updating your email.

Your verification session expires after 15 minutes.

> \[!NOTE]
>
> Docker accounts only support one verified email address at a time, which
> is used for account notifications and security-related communications. You
> can't add multiple verified email addresses to your account.

## Change your password

Initiate your password reset through email:

1. Sign in to your [Docker account](https://app.docker.com/login).
2. Select your avatar in the top-right corner and select **Account settings**.
3. Select **Password**, then **Reset password**.
4. Docker sends you a password reset email with instructions to reset your
   password.

## Manage two-factor authentication

To update your two-factor authentication (2FA) settings:

1. Sign in to your [Docker account](https://app.docker.com/login).
2. Select your avatar in the top-right corner and select **Account settings**.
3. Select **2FA**.

For more information, see
[Enable two-factor authentication](https://docs.docker.com/security/2fa/).

## Manage personal access tokens

To manage personal access tokens:

1. Sign in to your [Docker account](https://app.docker.com/login).
2. Select your avatar in the top-right corner and select **Account settings**.
3. Select **Personal access tokens**.

For more information, see
[Create and manage access tokens](https://docs.docker.com/security/access-tokens/).

## Manage connected accounts

If you signed up with Google or GitHub, that provider appears under
**Connected accounts**. Disconnecting it removes the OAuth connection. It
doesn't change your Docker ID, and it doesn't let you add a different sign-in
method. You can't connect both Google and GitHub to the same account.

To disconnect a connected account:

1. Sign in to your [Docker account](https://app.docker.com/login).
2. Select your avatar in the top-right corner and select **Account settings**.
3. Select **Connected accounts**.
4. Select **Disconnect** on your connected account.

To fully unlink your Docker account, you must also unlink Docker from Google
or GitHub. See Google or GitHub's documentation for more information:

- [Manage connections between your Google Account and
  third-parties](https://support.google.com/accounts/answer/13533235?hl=en)
- [Reviewing and revoking authorization of GitHub
  Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps)

## Convert your account

For information on converting your account into an organization, see
[Convert an account into an
organization](https://docs.docker.com/admin/organization/setup/convert-account/).

## Deactivate your account

For information on deactivating your account, see
[Deactivate a Docker account](https://docs.docker.com/accounts/deactivate-user-account/).

## Next steps

- [Docker accounts overview](https://docs.docker.com/accounts/)
- [Create a Docker account](https://docs.docker.com/accounts/create-account/)
- [Enable two-factor authentication](https://docs.docker.com/security/2fa/)
