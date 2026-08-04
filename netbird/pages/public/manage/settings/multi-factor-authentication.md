> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/manage/settings/multi-factor-authentication.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/manage/settings/multi-factor-authentication.mdx)

# Multi-Factor Authentication (MFA)

NetBird supports Multi-Factor Authentication (MFA) to enhance the security of your account by requiring a second form of verification during login.
This works automatically if you have enabled MFA in your SSO Provider (Google, Microsoft etc.) and use the **interactive SSO login** feature in NetBird.

NetBird MFA is primarily for users with **email / password login**. It is available for all users and can be enabled from the Dashboard on the Settings page <https://app.netbird.io/settings>.

> **Note**
>
> You may not need NetBird MFA. Your SSO Provider (Google, Microsoft etc.) may already have MFA enabled. Enabling this setting could result in duplicated MFA checks.

> **Note**
>
> This feature is only available in the cloud version of NetBird. \
> Self-Hosted users can use their own Identity Provider for MFA.

## Enabling and Disabling MFA

Navigate to the Dashboard's `Settings` page and the `Authentication` tab and enable or disable MFA. \\

After enabling, you can `Logout` and log back in to see the MFA prompt.

- When disabling MFA, the current active MFA devices of all users will not be removed and will be reused when MFA is enabled again. To remove MFA devices from users, check the [Reset MFA](#reset-mfa) section below.
- If a user is not part of the account and MFA is enabled, the first-time `Sign Up` will not require MFA. \
  &#x20;Only subsequent logins will require MFA.

![MFA Settings](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/manage/settings/mfa/mfa-settings.png)

### Remember Browser for MFA

When you enable MFA, you can choose to remember your browser for 30 days. This means you will only need to enter the MFA code once every 30 days.
When disabled, you will need to enter the MFA code every time you log in.\\

Once enabled you will see a checkbox to remember your browser for 30 days while entering the MFA code during login.

## Checking User MFA Status

You can check individual user MFA status by going to the `Users` page of the Dashboard.\\

Click on a specific user to see their MFA status.

- `Active` - MFA is enabled and user **has completed** the MFA setup.
- `Not enrolled` - MFA is enabled but user **has not completed** the MFA setup yet.

![MFA Status](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/manage/settings/mfa/mfa-not-enrolled.png)

## Reset MFA

To reset MFA for a specific user, click on the user in the `Users` tab and click on the `Reset MFA` button.\\

This will reset MFA for the user, and they will need to set it up again during the next login.

> **Note**
>
> Currently NetBird does not provide recovery codes for MFA. Make sure to have multiple administrators configured to prevent lockout situations.
> If all `Owners` or `Admins` lose access to the Dashboard, you should contact <support@netbird.io> for assistance.

![MFA Reset](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/manage/settings/mfa/mfa-reset-mfa.png)

## Get started

[Use NetBird](https://netbird.io/pricing)

- Make sure to [star us on GitHub](https://github.com/netbirdio/netbird)
- Follow us [on X](https://x.com/netbird)
- Join our Slack Channel
- NetBird [latest release](https://github.com/netbirdio/netbird/releases) on GitHub
