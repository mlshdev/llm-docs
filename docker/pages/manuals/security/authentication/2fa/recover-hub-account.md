> Pinned source for Docker main: [content/manuals/security/authentication/2fa/recover-hub-account.md](https://github.com/docker/docs/blob/6cf1b1c167f032e8a6629da211602300b623b20e/content/manuals/security/authentication/2fa/recover-hub-account.md)

# Recover your Docker account and two-factor recovery code

**2FA requirements**

- Subscription: Personal, Pro
- For: Individuals

Get back into your Docker account when you lose your authenticator app,
your recovery code, or both. Docker asks for your password before it
shows or replaces the recovery code.

> \[!IMPORTANT]
>
> The recovery code works once. Using it on the **Lost Authentication
> Device** page signs you in, turns 2FA off, and deletes the code. Turn
> 2FA on again from your new device as soon as you're signed in.

## Generate a new recovery code

If you lost your recovery code and can still sign in, generate a new one.
The new code replaces the previous code.

1. Sign in to your [Docker account](https://app.docker.com/login). Enter
   your password, then the code from your authenticator app.
2. Select your avatar in the top-right corner, then select **Account
   settings**.
3. Select **2FA**.
4. Enter your password, then select **Confirm**.
5. Select **Generate new code**.

Select the visibility icon to view the new code. Then select **Copy**,
**Download**, or **Print**, and store the code somewhere safe.

## Sign in with your recovery code

If you lost your authenticator app and still have your recovery code, use
the code to sign in.

1. Sign in to your [Docker account](https://app.docker.com/login) with your
   username and password.
2. On the **Two-Factor Authentication** page, select **I've lost my
   authentication device**.
3. Enter your recovery code, then select **Verify**.

You're signed in and 2FA is off. To protect your account again, follow
[Turn on 2FA][enable].

## Contact Docker Support

If you lost both your authenticator app and your recovery code, open the
[Contact Support form](https://hub.docker.com/support/contact/?category=2fa-lockout).
The subject and description already describe a 2FA lockout. Enter the
email address on your Docker account, then follow the instructions from
Docker Support.

## Next steps

- [Turn on 2FA][enable] again after you recover your account.
- Create a [personal access token][pat] for the Docker CLI and automation.

[enable]: /manuals/security/authentication/2fa/manage.md

[pat]: /manuals/security/access-tokens/personal-access-tokens.md
