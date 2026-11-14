> Pinned source for Docker main: [content/manuals/ai/governance/organization/audit/configure.md](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/content/manuals/ai/governance/organization/audit/configure.md)

# Configure audit delivery

**AI Governance requirements**

- Subscription: AI Governance
- For: Administrators

Configure where Docker delivers your organization's audit records, and review
who changed those settings. You can deliver records to local disk on each host,
to Docker Cloud, or to both. For how the two delivery modes differ, see
[Delivery modes](https://docs.docker.com/ai/governance/organization/audit/#delivery-modes).

## Before you begin

Your organization needs:

- A Docker [AI Governance plan](https://docs.docker.com/subscription-billing/plans/ai-governance/)
- Organization owner access, or a
  [custom role](https://docs.docker.com/security/roles-and-permissions/custom-roles/)
  with AI Governance audit permissions

## Configure delivery

To configure audit delivery:

1. Sign in to [Docker Home](https://app.docker.com) and select your
   organization.
2. Go to **AI Platform** > **Audit logs**.
3. Open **Audit delivery**.
4. Choose one or both delivery modes:
   - **Local disk** writes audit records to JSON Lines files on each host.
   - **Docker Cloud** stores audit records in Docker Cloud for hosted search,
     CSV export, and SIEM forwarding.
5. Save your changes.

Cloud delivery is on by default, except for organizations that used local
audit logging before hosted audit logs were available. Those organizations start with cloud delivery off until an owner
turns it on. To keep records local to your hosts, turn off **Docker Cloud** and
keep **Local disk** on.

The **Audit delivery** page shows how long Docker Cloud retains audit records.

## Review delivery change history

Docker keeps a record of every change made to your organization's audit delivery
settings. Each entry shows who made the change, when it happened, and the before
and after values. Use this history to audit configuration changes and verify
when delivery modes were modified.

To review the history:

1. Sign in to [Docker Home](https://app.docker.com) and select your
   organization.
2. Go to **AI Platform** > **Audit logs**.
3. Open **History**.
