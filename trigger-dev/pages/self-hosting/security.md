> Release-pinned source for Trigger.dev v4.5.16: [docs/self-hosting/security.mdx](https://trigger.dev/docs/self-hosting/security)

# Security & vulnerability reporting

How to report security issues in Trigger.dev, our response targets, and how self-hosters receive security notices.

We take the security of Trigger.dev seriously, for both Cloud and self-hosted deployments. This page covers how to report a vulnerability, what to expect, and how to stay informed about security releases.

> **Warning**
>
> Do not report security vulnerabilities through public GitHub issues, pull requests, or Discord. Use one of the private channels below.

## Reporting a vulnerability

1. - **GitHub (preferred):** open a private report from the repository's **Security** tab using **"Report a vulnerability"** ([direct link](https://github.com/triggerdotdev/trigger.dev/security/advisories/new)).
   - **Email:** `security@trigger.dev`
2. A description and impact, steps to reproduce (a proof of concept helps), affected versions/components, and any suggested fix.
3. Every report is tracked in a private GitHub Security Advisory. If you email us, we open the advisory on your behalf.

## What to expect

| Stage                                     | Target                 |
| ----------------------------------------- | ---------------------- |
| Acknowledgement                           | within 3 business days |
| Validation + CVSS 3.1 severity assessment | within 1 week          |

We score issues with CVSS 3.1 and prioritise remediation by severity:

| Severity (CVSS 3.1) | Target time to resolve |
| ------------------- | ---------------------- |
| Critical (9.0–10.0) | 7 days                 |
| High (7.0–8.9)      | 30 days                |
| Medium (4.0–6.9)    | 90 days                |
| Low (0.1–3.9)       | As needed              |

> **Note**
>
> These are best-effort targets measured from when we validate and accept a report, not guarantees. We follow coordinated disclosure with a default 90-day window, and publish a GitHub Security Advisory (requesting a CVE where applicable) once a fix ships.

## Supported versions

We patch the **latest released version line** only. Run the latest version-tagged release to receive security fixes — see [Self-hosting overview](https://trigger.dev/docs/self-hosting/overview).
