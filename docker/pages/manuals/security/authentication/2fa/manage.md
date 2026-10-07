> Pinned source for Docker main: [content/manuals/security/authentication/2fa/manage.md](https://github.com/docker/docs/blob/7ba25eeb0c4c594f79e6efadad1af5eaca0500a8/content/manuals/security/authentication/2fa/manage.md)

# Manage two-factor authentication for your Docker account

**2FA requirements**

- Subscription: Personal, Pro
- For: Individuals

Turn two-factor authentication (2FA) on or off for your Docker account
in **Account settings**. For how 2FA works, when Docker asks for the
code, and what the recovery code does, see
[Two-factor authentication][overview].

## Prerequisites

Before you turn on 2FA, you need:

- A time-based one-time password (TOTP) authenticator app on your phone or
  another device
- Your Docker account password
- A verified email address on your account

## Enable two-factor authentication

To turn on 2FA for your Docker account:

1. Sign in to your [Docker account](https://app.docker.com/login).
2. Select your avatar in the top-right corner, then select **Account
   settings**.
3. Select **2FA**.
4. Enter your account password, then select **Confirm**.
5. Save your recovery code. Select **Copy**, or open the menu next to
   **Copy** and select **Download** or **Print**.
6. Open your authenticator app. Scan the code on the **QR Code** tab, or
   enter the code from the **Text Code** tab.
7. Enter the six-digit code from your authenticator app in
   **Authentication code**.
8. Select **Enable 2FA**.

Two-factor authentication is on. When you sign in with your password,
Docker asks for a code from your authenticator app. Docker also emails
you a reminder to save your recovery code.

## Disable two-factor authentication

> \[!WARNING]
>
> Turning off 2FA leaves your account protected by your password alone.

1. Sign in to your [Docker account](https://app.docker.com/login).
2. Select your avatar in the top-right corner, then select **Account
   settings**.
3. Select **2FA**.
4. Enter your password, then select **Confirm**.
5. Select **Disable 2FA**.

Two-factor authentication is off. Docker emails you to confirm the
change.

## Move 2FA to a new device

To move 2FA to a new phone or device,
[turn 2FA off](#disable-two-factor-authentication), then
[turn it on again](#enable-two-factor-authentication) from the new
device.

## Next steps

- [Recover your account][recover] if you lose your authenticator app or
  recovery code.
- Create a [personal access token][pat] to sign in from the Docker CLI,
  scripts, and CI.

[overview]: /manuals/security/authentication/2fa/_index.md

[pat]: /manuals/security/access-tokens/personal-access-tokens.md

[recover]: /manuals/security/authentication/2fa/recover-hub-account.md
