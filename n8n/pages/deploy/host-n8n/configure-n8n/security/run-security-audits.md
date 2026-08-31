> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/security/run-security-audits.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/deploy/host-n8n/configure-n8n/security/run-security-audits.md)

# Security audit <a id="security-audit"></a>

You can run a security audit on your n8n instance, to detect common security issues.

## How do I run a security audit in n8n? <a id="run-an-audit"></a>

You can run an audit using the CLI, the public API, or the n8n node.

### CLI <a id="cli"></a>

Run `n8n audit`.

### API <a id="api"></a>

Make a `POST` call to the `/audit` endpoint. You must authenticate as the instance owner.

### n8n node <a id="n8n-node"></a>

Add the [n8n node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n) to your workflow. Select **Resource** > **Audit** and **Operation** > **Generate**.

## What's in the security audit report? <a id="report-contents"></a>

The audit generates five risk reports:

### Credentials <a id="credentials"></a>

This report shows:

- Credentials not used in a workflow.
- Credentials not used in an active workflow.
- Credentials not use in a recently active workflow.

### Database <a id="database"></a>

This report shows:

- Expressions used in **Execute Query** fields in SQL nodes.
- Expressions used in **Query Parameters** fields in SQL nodes.
- Unused **Query Parameters** fields in SQL nodes.

### File system <a id="file-system"></a>

This report lists nodes that interact with the file system.

### Nodes <a id="nodes"></a>

This report shows:

- Official risky nodes. These are n8n built in nodes. You can use them to fetch and run any code on the host system, which exposes the instance to exploits. You can view the list in [n8n code | Audit constants](https://github.com/n8n-io/n8n/blob/master/packages/cli/src/security-audit/constants.ts#L51), under `OFFICIAL_RISKY_NODE_TYPES`.
- Community nodes.
- Custom nodes.

### Instance <a id="instance"></a>

This report shows:

- Unprotected webhooks in the instance.
- Missing security settings
- If your instance is outdated.
