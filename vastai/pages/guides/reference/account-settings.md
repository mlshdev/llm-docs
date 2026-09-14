> Pinned source for Vast.ai main: [guides/reference/account-settings.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/guides/reference/account-settings.mdx)
> Canonical documentation: https://docs.vast.ai/guides/reference/account-settings

# Account Settings

On this page you can view and edit important information about your client account.

# Page Walkthrough

## Enable Dark Mode

Turning the switch on and off will enable and disable dark mode.

![Enable Dark Mode Section](https://vast.ai/uploads/enable-dark-mode-section.png)

You can also toggle this setting in the navigation bar with the moon and sun icons.

![](https://raw.githubusercontent.com/vast-ai/docs/175a318c27750ea64da94f043dda39ec5cb26259/images/console-setting.webp)

![](https://raw.githubusercontent.com/vast-ai/docs/175a318c27750ea64da94f043dda39ec5cb26259/images/console-setting-2.webp)

## Account Security

In the Account Security section, you can set up two-factor authentication, resend a verification email, change your email, or reset your password.

![Account Security Section](https://vast.ai/uploads/account-security-section.png)

### Two-Factor Authentication

You can set up two-factor authentication (2FA) for your Vast account. This can be used to help protect your account from unauthorized access. You’ll be required to enter a security code each time you sign in.

![Two Factor Authentication](https://vast.ai/uploads/two-factor-authentication.png)

### Resend Verification Email

Select the "Resend" button to receive a new verification email in your inbox.

![Resend Verification Email](https://vast.ai/uploads/resend-verification-email.png)

### Change Email

You can view the current email connected to your account and change your email at any time by pressing the 'Change' button.

![Change Email](https://vast.ai/uploads/change-email.png)

When you change your email using this feature you will not be required to re-verify your email address. All emails that would normally be sent to the old e-mail will be now be directed towards your new email.

### Reset Password

You can change your password by selecting the "Reset" button, and you will get a link to reset your password via email.

![Reset Password](https://vast.ai/uploads/reset-password.png)

## Referral Link

You can access your referral link in the Referral Link section of the Settings page.

![Referral Link Section](https://vast.ai/uploads/referral-link-section.png)

When users create an account through your referral link and use Vast services, you'll earn credits and receive payouts for your referrals.

![Referral Link Fields](https://vast.ai/uploads/referral-link-fields.png)

## Environment Variables

You can add, edit, and delete the environment variables stored on your account in the Environment Variables section.

![Env Section](https://vast.ai/uploads/env-section.png)

When adding individually, input the env key into the key field and value into the value field, then select the "+" button to save your environment variable.

![Env Fields](https://vast.ai/uploads/env-fields.png)

To add multiple at once, select the "Batch Paste" option and paste your environment variables into that input, according to the format below.

![Env Batch Paste](https://vast.ai/uploads/env-batch-paste.png)

Within the batch paste mode, you can save your changes by selecting the "Save" button or erase them with the "Cancel" button.

When you are finished editing your environment variables, make sure you select the "Save Edits" button to save all of your changes.

## Notification Settings

Use Notification Settings to choose which account, billing, and instance events reach you by email, in the console, or through webhooks. See [Notifications](https://docs.vast.ai/guides/reference/notifications) for the full setup guide.

![Notification Settings page with Account, Billing, and Instance notification groups](https://raw.githubusercontent.com/vast-ai/docs/175a318c27750ea64da94f043dda39ec5cb26259/images/console-notifications-settings.png)

## Cloud Connection

In this section, you can integrate and connect with cloud providers such as Amazon S3, Backblaze, and Dropbox.

![Cloud Connection Section](https://vast.ai/uploads/cloud-connection-section.png)

This integration process is very straightforward. If you need assistance in setting up these integrations you can read our guides [here](https://docs.vast.ai/guides/instances/cloud-sync).

One of the benefits of these integrations is the ability to sync data even while instances are inactive.

![Cloud Connection Fields](https://vast.ai/uploads/cloud-connection-fields.png)

You can access this feature via the 'Cloud Copy' button on the Instances page.

## Invoice Information

In the Invoice Information section, you can set personal information for your invoices.

![Invoice Information Section](https://vast.ai/uploads/invoice-information-section.png)

Click into any input field to edit it, and select the "Save" button to save your changes.

![Invoice Information Fields](https://vast.ai/uploads/invoice-information-fields.png)

## Common Questions

### Can I delete my account?

You can now delete your Vast.ai account. **Before deleting:**

- Remove all machines if you are a host.
  - `vastai delete machine machine_id`
- Destroy / delete all instances and volumes.
- **Teams:** If you **own** a team, it will be deleted, [transfer ownership](https://docs.vast.ai/guides/teams/managing-teams#transferring-team-ownership) if needed. If you're **a member** of a team, you'll be removed from it.

After these steps, contact us via the **Support Chat** to complete deletion.

![](https://raw.githubusercontent.com/vast-ai/docs/175a318c27750ea64da94f043dda39ec5cb26259/images/console-setting-4.webp)

### Is there a spend rate limit on my account?

There is a spend rate limit for new users. Make sure you have verified your email; otherwise, your limit is near zero.  Once you have verified your email, your spend rate limit increases automatically over time.
If you are an enterprise user, email us at <contact@vast.ai> to request a larger rate limit increase.  Users paying with crypto are also eligible for rate increases.
