> Pinned source for Runpod main: [organizations/orgs-access.mdx](https://github.com/runpod/docs/blob/2ed145e18217c606416d3dbc47314da01a479792/organizations/orgs-access.mdx)
> Canonical documentation: https://docs.runpod.io/organizations/orgs-access

# Access

Control who joins your organization with email invitations. Learn how to invite, accept, and remove members.

Runpod provisions organization accounts. Once your org is provisioned, org admins invite members by sending invitations to their exact email addresses. Only admins can invite and remove members.

## Invite a member

1. Go to **User management** in the console and select the **Users** tab.
2. Click **Invite Member**, enter the member's exact email address, select their role, and send.

The invited user receives an email with a link to accept. They must have a verified Runpod account to accept the invitation.

Invitations expire after 14 days. Each organization can have up to 150 pending invitations at a time. Admins can cancel a pending invitation from the **Users** tab.

## Accept an invitation

To accept an org invitation, the invitee must not be a member of any Runpod team. If they belong to a team, they must leave or delete it before the invitation can be accepted.

1. Click the link in the invitation email.
2. Sign in to Runpod with the account associated with the invited email address.
3. Accept the invitation in the console.

> **Note**
>
> Accepting an org invitation does not move personal resources into the organization. Existing Pods, endpoints, network volumes, and other personal resources remain on the member's personal account unless migrated by Runpod staff separately.

## Remove a member

1. Go to **User management** in the console and select the **Users** tab.
2. Find the member and click **Remove**. The member is removed from the organization immediately.

When a member is removed, their org S3 credentials are revoked immediately. Their Pods, endpoints, and other org resources remain in the organization.
