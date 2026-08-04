> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/use-cases/security/index.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/use-cases/security/index.mdx)

# Security Use Cases

Implement zero trust networking and secure access patterns with NetBird.

## Zero Trust Principles

NetBird is built on zero trust principles:

- **Verify explicitly**: Every connection is authenticated and authorized
- **Least privilege**: Access is granted only to specific resources, not entire networks
- **Assume breach**: End-to-end encryption ensures traffic is protected even if networks are compromised

## Key Security Features

| Feature                                                                                | Description                                     |
| -------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [Access Control Policies](https://docs.netbird.io/manage/access-control)               | Define who can access what resources            |
| [Posture Checks](https://docs.netbird.io/manage/access-control/posture-checks)         | Verify device compliance before granting access |
| [Activity Logging](https://docs.netbird.io/manage/activity)                            | Audit all access events                         |
| [MFA Integration](https://docs.netbird.io/manage/settings/multi-factor-authentication) | Enforce multi-factor authentication             |
| [SSO](https://docs.netbird.io/manage/team/single-sign-on)                              | Integrate with identity providers               |

### Security Guides

- **Items:** \[Implement Zero Trust]\(/use-cases/security/implement-zero-trust) - Step-by-step guide to implementing zero trust networking with NetBird; \[Private Proxy Without Inbound Ports]\(/use-cases/security/private-no-inbound) - Publish internal services through a reverse proxy with no public inbound ports; \[Posture Checks]\(/manage/access-control/posture-checks) - Verify device compliance before allowing network access; \[EDR/MDM Integration]\(/manage/access-control/endpoint-detection-and-response) - Integrate with CrowdStrike, Intune, SentinelOne, and other security tools

## Security Best Practices

1. **Segment your network** - Create specific groups for different access levels
2. **Use protocol restrictions** - Only allow the protocols and ports needed
3. **Enable posture checks** - Verify device compliance before granting access
4. **Monitor activity** - Review audit logs regularly
5. **Implement MFA** - Require multi-factor authentication for all users
6. **Use time-limited access** - Create expiring setup keys for temporary access
