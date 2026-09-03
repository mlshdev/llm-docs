> Commit-pinned source for n8n main: [docs/integrations/builtin/trigger-nodes/n8n-nodes-base.postgrestrigger.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.postgrestrigger.md)

# Postgres Trigger

Use the Postgres Trigger node to respond to events in [Postgres](https://www.postgresql.org/) and integrate Postgres with other applications. n8n has built-in support responding to insert, update, and delete events.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/postgres).

> **Info**
> **Examples and templates**
>
> For usage examples and templates to help you get started, refer to n8n's [Postgres Trigger integrations](https://n8n.io/integrations/postgres-trigger/) page.

## Events <a id="events"></a>

You can configure how the node listens for events.

- Select **Listen and Create Trigger Rule**, then choose the events to listen for:
  - Insert
  - Update
  - Delete
- Select **Listen to Channel**, then enter a channel name that the node should monitor.

> **Info**
> **Postgres event listener and required database permissions**
>
> - To listen for trigger events, n8n automatically creates a Postgres trigger on the target table. This trigger is added when you publish a workflow, and removed when you unpublish it.
> - If your workflow isn't published, the trigger is also added when you test the workflow and removed once test event listening stops.
> - The Postgress trigger calls an automatically-created procedure to tell n8n about the event.
> - The user in your Postgres credential must have permissions to create and execute triggers and procedures. In PostgreSQL, this requires superuser access, table ownership, or the TRIGGER privilege - plus CREATE privilege on the schema where the procedure will reside.

## Related resources <a id="related-resources"></a>

n8n provides an app node for Postgres. You can find the node docs [here](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.postgres).

View [example workflows and related content](https://n8n.io/integrations/postgres-trigger/) on n8n's website.
