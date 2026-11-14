> Pinned source for Docker main: [content/manuals/ai/governance/organization/policies/create-manage.md](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/content/manuals/ai/governance/organization/policies/create-manage.md)

# Create and manage organization policies

**AI Governance requirements**

- Subscription: AI Governance
- For: Administrators

Create and manage organization policies in Docker Home. The steps are the same
for network, filesystem, and MCP policies, and only the rules you add differ.
To manage policies programmatically instead, use the
[AI Governance API](https://docs.docker.com/reference/api/ai-governance/). For how scope, rule
evaluation, and precedence work, see [Organization policies](https://docs.docker.com/ai/governance/organization/policies/).

## Before you begin

You need the organization
[owner](https://docs.docker.com/security/roles-and-permissions/core-roles/) role, or a
[custom role](https://docs.docker.com/security/roles-and-permissions/custom-roles/)
with the **Governance** permissions.

## Create a policy

1. Sign in to [Docker Home](https://app.docker.com) and select your
   organization.
2. In the left-hand navigation, expand **AI Platform** and select
   **Network access**, **Filesystem access**, or **MCP access**.
3. Select **Create policy**.
4. Enter a **Policy name**.
5. Set the **Scope** to **Organization** or **Teams**. If you select **Teams**,
   choose the teams the policy applies to. For more details, see
   [Scope policies to teams](#scope-policies-to-teams).
6. Define the policy rules.
   - Network and filesystem policies: select **Add rule** for each rule. For a
     network policy, see
     [What a network rule can match](https://docs.docker.com/ai/governance/organization/policies/network/#what-a-network-rule-can-match).
     For a filesystem policy, see
     [Filesystem mount rule syntax](https://docs.docker.com/ai/governance/reference/filesystem-rules/).
   - MCP policies: enter Cedar statements in the policy editor. For more
     details, see [Organization MCP access policies](https://docs.docker.com/ai/governance/organization/policies/mcp/).
7. For a network policy, set **Require approval before access** if developers
   should confirm each destination before a sandbox can reach it. The policy's
   detail page reports approval as **Required** or **Not required**. For more
   details, see [Approval-required access](https://docs.docker.com/ai/governance/organization/policies/network/#approval-required-access).

For the number of policies and rules you can create, see
[Organization policy limits](https://docs.docker.com/ai/governance/reference/policy-limits/).

## Scope policies to teams

To scope a policy to teams, the teams must already exist in your organization.
Create teams and manage their members in one of two ways:

- Manually, by
  [creating teams](https://docs.docker.com/accounts/organization/manage/manage-a-team/) in
  Docker Home.
- Automatically, by using
  [group mapping](https://docs.docker.com/security/provisioning/scim/group-mapping/)
  to synchronize your identity provider's groups with the teams in your
  organization. Group mapping creates teams that don't already exist and keeps
  their membership in step with your IdP groups.

A team-scoped policy follows team membership, so when someone joins or leaves a
team, including through IdP sync, the policies that apply to them update
automatically. For how org-wide and team-scoped policies combine, see
[Policy scope](https://docs.docker.com/ai/governance/organization/policies/#policy-scope).

## Edit or delete a policy

1. Sign in to [Docker Home](https://app.docker.com) and select your
   organization.
2. In the left-hand navigation, expand **AI Platform** and select
   **Network access**, **Filesystem access**, or **MCP access**.
3. Find the policy in the list. Each policy is listed with its name, scope,
   rule count, and last update.
4. Select the action menu (⋮) for the policy, then select **Edit**, or delete
   the policy.
5. If you're editing, make your changes and select **Save**.

Editing a policy replaces it in full. For example, turning off **Require
approval before access** on a network policy removes the requirement from every
rule in that policy. Changes reach developer machines within 5 minutes. For more
details, see
[When policy changes reach developers](https://docs.docker.com/ai/governance/organization/policies/#when-policy-changes-reach-developers).

## Configure a support message

Administrators can add an optional support message that appears after the policy denial
details when an organization policy blocks a sandbox action. Use it to
point members to an internal support channel, ticket queue, or security contact.

To set the message:

1. Sign in to [Docker Home](https://app.docker.com) and select your
   organization.
2. In the left-hand navigation, expand **AI Platform** and select **Manage**.
3. In **Support message**, enter up to 500 characters.

   The **Support message** field appears only when **AI governance** is turned
   on. For more details, see
   [Turn on AI governance](https://docs.docker.com/ai/governance/organization/get-started/#step-4-turn-on-ai-governance).
4. Select **Save changes**.

Docker shows the message only for denials caused by an organization policy and
for requests an
[approval-required policy](https://docs.docker.com/ai/governance/organization/policies/network/#approval-required-access) blocks. If you
leave it blank, Docker shows the policy denial without additional contact text.
