> Pinned source for NetBird v0.81.4: [netbirdio/docs@238224712cf7639036ed39fa8873d777b8822273:src/pages/selfhosted/troubleshooting.mdx](https://github.com/netbirdio/docs/blob/238224712cf7639036ed39fa8873d777b8822273/src/pages/selfhosted/troubleshooting.mdx)

# Troubleshooting

This page helps with issues when self-hosting NetBird. Collect the diagnostics below, then pick the area that matches your problem.

### Collect diagnostics first

- **Eyebrow:** Start here
- **Id:** collect-diagnostics-first
- **Description:** Almost every self-hosted issue is faster to resolve with service status and logs in hand. Grab these before you go deeper.
- **Steps:** Service status - Command: docker compose ps - Hint: Are netbird-server and dashboard Up, plus traefik if you chose the built-in Traefik? Installs from before v0.65.0 run separate management, signal, and relay services instead.; Service logs - Command: docker compose logs -f netbird-server - Hint: Most config, auth, and migration errors surface here. On installs from before v0.65.0, read the management service logs.; Proxy to API - Command: curl -s https\://YOUR\_DOMAIN/api/instance - Hint: A JSON reply with setup\_required confirms the reverse proxy can reach the Management API.

### Find your issue by area

- **Id:** find-your-issue-by-area
- **Description:** Each area lives on its own page. Pick the one closest to your problem.
- **Items:** \[Installation]\(/selfhosted/troubleshooting/installation) - The getting-started script: the readiness wait, DNS, certificates, Traefik, and re-running cleanly. - Icon: terminal; \[Embedded IdP]\(/selfhosted/troubleshooting/identity-provider) - Setup page access, SSO connectors, redirect URIs, and users syncing from your provider. - Icon: shield; \[Dashboard]\(/selfhosted/troubleshooting/dashboard) - Blank pages and unauthorized or 403 errors in the self-hosted dashboard. - Icon: globe; \[Certificates]\(/selfhosted/troubleshooting/certificates) - Let's Encrypt renewal and TLS errors behind a custom reverse proxy. - Icon: lock; \[Connectivity]\(/selfhosted/troubleshooting/connectivity) - Checking the relay, peer-to-peer failures, and an unreachable Management service. - Icon: firewall; \[Database]\(/selfhosted/troubleshooting/database) - The Management service failing to start after an upgrade, and recovery after power loss. - Icon: database

## Getting Help

If you're still experiencing issues, see [Report bugs and issues](https://docs.netbird.io/help/report-bug-issues) for the right channel:

1. **Gather evidence first**: `docker compose logs` for all services, your configuration (without secrets), and the steps to reproduce.
2. **Open source self-hosted and general questions** go to [Community Support](https://docs.netbird.io/help/community-support): the Slack Channel for quick questions, or [GitHub Discussions](https://github.com/netbirdio/netbird/discussions) for a written record.
3. **Cloud customers and users, and commercial-license deployments** can reach the team through [NetBird Support](https://docs.netbird.io/help/netbird-support).
