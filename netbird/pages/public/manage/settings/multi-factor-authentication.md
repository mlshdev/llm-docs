> Pinned source for NetBird v0.84.0: [netbirdio/docs@687df76a2ecb2c825e4726f53f78fb54a131f77c:src/pages/manage/settings/multi-factor-authentication.mdx](https://github.com/netbirdio/docs/blob/687df76a2ecb2c825e4726f53f78fb54a131f77c/src/pages/manage/settings/multi-factor-authentication.mdx)

# Multi-Factor Authentication (MFA)

NetBird supports Multi-Factor Authentication (MFA) to enhance the security of your account by requiring a second form of verification during login.
This works automatically if you have enabled MFA in your SSO Provider (Google, Microsoft etc.) and use the **interactive SSO login** feature in NetBird.

NetBird MFA is primarily for users with **email / password login**. It is available for all users and can be enabled in the dashboard under **[Settings](https://app.netbird.io/settings)**.

> **Note**
>
> You may not need NetBird MFA. Your SSO Provider (Google, Microsoft etc.) may already have MFA enabled. Enabling this setting could result in duplicated MFA checks.

> **Note**
>
> This feature is only available in the cloud version of NetBird. \
> Self-Hosted users can use their own Identity Provider for MFA, or enable [MFA for local users](https://docs.netbird.io/selfhosted/identity-providers/enable-local-mfa) when using the embedded identity provider.

## Enabling and Disabling MFA

Go to **Settings → Authentication** in the dashboard and enable or disable MFA. \\

After enabling, you can `Logout` and log back in to see the MFA prompt.

> **Note**
>
> Accounts that use NetBird's embedded identity provider for local users see an additional `Enable Local MFA` toggle (currently in beta) in the same tab. This enforces a TOTP challenge for all local (email/password) users. See [Enable MFA for local users](https://docs.netbird.io/selfhosted/identity-providers/enable-local-mfa).

- When disabling MFA, the current active MFA devices of all users will not be removed and will be reused when MFA is enabled again. To remove MFA devices from users, check the [Reset MFA](#reset-mfa) section below.
- If a user is not part of the account and MFA is enabled, the first-time `Sign Up` will not require MFA. \
  &#x20;Only subsequent logins will require MFA.

![MFA Settings](https://raw.githubusercontent.com/netbirdio/docs/687df76a2ecb2c825e4726f53f78fb54a131f77c/public/docs-static/img/manage/settings/mfa/mfa-settings.png)

### Remember Browser for MFA

When you enable MFA, you can choose to remember your browser for 30 days. This means you will only need to enter the MFA code once every 30 days.
When disabled, you will need to enter the MFA code every time you log in.\\

Once enabled you will see a checkbox to remember your browser for 30 days while entering the MFA code during login.

## Checking User MFA Status

You can check individual user MFA status by going to the `Users` page of the Dashboard.\\

Click on a specific user to see their MFA status.

- `Active` - MFA is enabled and user **has completed** the MFA setup.
- `Not Enrolled` - MFA is enabled but user **has not completed** the MFA setup yet.

![MFA Status](https://raw.githubusercontent.com/netbirdio/docs/687df76a2ecb2c825e4726f53f78fb54a131f77c/public/docs-static/img/manage/settings/mfa/mfa-not-enrolled.png)

## Recovery Codes

A recovery code lets you sign in when you can't use your authenticator app, for example after losing or replacing your phone.

You get your recovery code once, when you set up MFA. After you scan the QR code and enter your first one-time code, NetBird shows the recovery code on an **Almost There!** screen:

1. Click `Copy code` and store the code somewhere safe outside your phone, such as a password manager.
2. Check `I have safely recorded this code`.
3. Click `Continue` to finish setting up MFA.

> **Note**
>
> NetBird shows each recovery code only once and can't display it again later. If you set up MFA before recovery codes were available, you don't have one. Ask an `Owner` or `Admin` to [reset your MFA](#reset-mfa-for-a-user). You get a recovery code when you set up MFA again at your next login.

## Reset MFA

If you lose access to your authenticator app, there are two ways back in: sign in with your recovery code yourself, or ask an `Owner` or `Admin` to reset MFA for you.

### Sign In with a Recovery Code

1. Sign in with your email and password as usual.
2. On the **Verify Your Identity** screen, click `Try another method` and choose the recovery code option.
3. Enter your recovery code and click `Continue`.
4. NetBird shows you a **new** recovery code. Copy it, store it safely, confirm you've recorded it, and click `Continue`.

> **Warning**
>
> Each recovery code works only once. After you use it, your old code is no longer valid and only the new code from step 4 works. Save the new code before you click `Continue`.

A recovery code gets you signed in, but it doesn't replace your authenticator app. The lost app stays enrolled, so your next login asks for a one-time code from it again. To set up a new authenticator app, ask an `Owner` or `Admin` to [reset your MFA](#reset-mfa-for-a-user).

### Reset MFA for a User

`Owners` and `Admins` can reset MFA for any user in the account. Go to the `Users` page, click on the user, and click the `Reset MFA` button.\\

This removes the user's MFA setup. At their next login, they scan a new QR code with their authenticator app and receive a new recovery code.

![User details page in the NetBird Dashboard with the Reset MFA button](https://raw.githubusercontent.com/netbirdio/docs/687df76a2ecb2c825e4726f53f78fb54a131f77c/public/docs-static/img/manage/settings/mfa/mfa-reset-mfa.png)

> **Note**
>
> If you have lost both your authenticator app and your recovery code, ask an `Owner` or `Admin` of your account to reset your MFA.
> If every `Owner` and `Admin` is locked out, contact <support@netbird.io>. To avoid this situation, keep more than one administrator in your account.

## Get started

[Use NetBird](https://netbird.io/pricing)

- Make sure to [star us on GitHub](https://github.com/netbirdio/netbird)
- Follow us [on X](https://x.com/netbird)
- Join our Slack Channel or Discord server
- NetBird [latest release](https://github.com/netbirdio/netbird/releases) on GitHub
