> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/security/verify-user-emails.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/deploy/host-n8n/configure-n8n/security/verify-user-emails.md)

# Restrict account registration to email-verified users <a id="restrict-account-registration-to-email-verified-users"></a>

You can require all new accounts to be verified by email. This prevents malicious admins from registering accounts without email verification.

## Prerequisites <a id="prerequisites"></a>

- SMTP must be set up and n8n must be able to send emails.

## How to restrict account registration <a id="how-to-restrict-account-registration"></a>

Set the environment variable `N8N_INVITE_LINKS_EMAIL_ONLY` to `true`. This locks down your instance so that only users with verified email addresses can register.

For more details on configuring SMTP, see [Set up SMTP](https://docs.n8n.io/deploy/host-n8n/configure-n8n/user-management#step-one-smtp).
