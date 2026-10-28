> Pinned source for Docker main: [content/manuals/accounts/individual/manage-account.md](https://github.com/docker/docs/blob/f90928eb2040c4638e188868a612fd47e6a061a4/content/manuals/accounts/individual/manage-account.md)

# Manage a Docker account

Update your profile, email, password, and Google or GitHub sign-in.

## Update account information

Other Docker users can see your account information.

1. Sign in to [Docker Home](https://app.docker.com/login).
2. Select your avatar in the top-right corner and select
   **Account settings**.
3. Select **Account information**.
4. Update any of these fields, then select **Save**:
   - **Full name**
   - **Company**
   - **Location**
   - **Website**
   - **Gravatar email**

## Update email address

A Docker account has one verified email address. If your account uses
single sign-on (SSO) or System for Cross-domain Identity Management
(SCIM) provisioning, contact your administrator to change your email.

1. Sign in to [Docker Home](https://app.docker.com/login).
2. Select your avatar in the top-right corner and select
   **Account settings**.
3. Select **Email**.
4. Enter the new address in **New email address**.
5. Enter your password in **Enter your password to confirm**.
6. Select **Verify email**.
7. Enter the six-digit code in **Enter code**. The code expires after 15
   minutes.
8. Sign in again to finish the update.

## Change your password

If your account uses single sign-on (SSO), contact your administrator to
change your password.

1. Sign in to [Docker Home](https://app.docker.com/login).
2. Select your avatar in the top-right corner and select
   **Account settings**.
3. Select **Password**.
4. Select **Reset password**.

Docker emails you instructions to reset your password.

You can also
[update or delete personal access tokens](https://docs.docker.com/security/access-tokens/personal-access-tokens/#update-or-delete)
and
[update your two-factor authentication](https://docs.docker.com/security/authentication/2fa/manage/#disable-two-factor-authentication).

## Manage connected accounts

Google or GitHub appears under **Connected accounts** after you connect
that provider. There is no connect button on this page. You connect by
signing in with the provider.

### Connect provider

> \[!IMPORTANT]
>
> If the Google or GitHub email does not match your Docker account email,
> Docker starts a new sign-up and creates a second account instead of
> linking the provider.

Sign in with Google or GitHub using the same email as your Docker account
to add that provider as a sign-in method.

1. Sign out of Docker if you are already signed in.
2. Go to the [Docker sign-in page](https://app.docker.com/login).
3. Select **Continue with Google** or **Continue with GitHub**.
4. Choose a Google or GitHub account that uses the same email address as
   your Docker account, then finish the provider sign-in.

Docker links the provider to your account and emails you a confirmation.
The provider then appears in **Connected accounts** under **Account
settings**.

### Disconnect provider

Remove Google or GitHub as a sign-in method from **Connected accounts**.
Your Docker ID stays the same.

1. Sign in to [Docker Home](https://app.docker.com/login).
2. Select your avatar in the top-right corner and select
   **Account settings**.
3. Select **Connected accounts**.
4. Select **Disconnect** on that provider.

To remove Docker from the Google or GitHub account, see that provider's
documentation:

- [Manage connections between your Google Account and
  third-parties](https://support.google.com/accounts/answer/13533235?hl=en)
- [Reviewing and revoking authorization of GitHub
  Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps)

## Next steps

- [Manage two-factor authentication](https://docs.docker.com/security/authentication/2fa/manage/)
- [Create and manage personal access tokens](https://docs.docker.com/security/access-tokens/personal-access-tokens/)
- [Convert a Docker account to an organization](https://docs.docker.com/accounts/organization/setup/convert-account/)
