> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/selfhosted/troubleshooting.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/selfhosted/troubleshooting.mdx)

# Troubleshooting

This page helps with issues when self-hosting NetBird. Collect the diagnostics below, then pick the area that matches your problem.

### Collect diagnostics first

- **Eyebrow:** Start here
- **Description:** Almost every self-hosted issue is faster to resolve with service status and logs in hand. Grab these before you go deeper.
- **Steps:** Service status - Command: docker compose ps - Hint: Are management, signal, relay, and the dashboard all Up?; Service logs - Command: docker compose logs -f management - Hint: Most config, auth, and migration errors surface here.; Proxy to API - Command: curl -v https\://YOUR\_DOMAIN/api/health - Hint: Confirms the reverse proxy can reach the Management API.

### Find your issue by area

- **Id:** find-your-issue-by-area
- **Description:** Each area lives on its own page. Pick the one closest to your problem.
- **Items:** \[Installation]\(/selfhosted/troubleshooting/installation) - The getting-started script: the readiness wait, DNS, certificates, Traefik, and re-running cleanly. - Icon: terminal; \[Embedded IdP]\(/selfhosted/troubleshooting/identity-provider) - Setup page access, SSO connectors, redirect URIs, and users syncing from your provider. - Icon: shield; \[Dashboard]\(/selfhosted/troubleshooting/dashboard) - Blank pages and unauthorized or 403 errors in the self-hosted dashboard. - Icon: globe; \[Certificates]\(/selfhosted/troubleshooting/certificates) - Let's Encrypt renewal and TLS errors behind a custom reverse proxy. - Icon: lock; \[Connectivity]\(/selfhosted/troubleshooting/connectivity) - Testing the TURN server, peer-to-peer failures, and an unreachable Management service. - Icon: firewall; \[Database]\(/selfhosted/troubleshooting/database) - The Management service failing to start after an upgrade, and recovery after power loss. - Icon: database

## Getting Help

If you're still experiencing issues, see [Report bugs and issues](https://docs.netbird.io/help/report-bug-issues) for the right channel:

1. **Gather evidence first**: `docker compose logs` for all services, your configuration (without secrets), and the steps to reproduce.
2. **Open source self-hosted and general questions** go to [Community Support](https://docs.netbird.io/help/community-support): the Slack Channel for quick questions, or [GitHub Discussions](https://github.com/netbirdio/netbird/discussions) for a written record.
3. **Cloud customers and users, and commercial-license deployments** can reach the team through [NetBird Support](https://docs.netbird.io/help/netbird-support).
