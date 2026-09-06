> Commit-pinned source for n8n main: [docs/deploy/host-n8n/understand-the-architecture/understand-the-database.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/deploy/host-n8n/understand-the-architecture/understand-the-database.md)

# Database structure <a id="database-structure"></a>

This page describes the purpose of each table in the n8n database.

## Database and query technology <a id="database-and-query-technology"></a>

By default, n8n uses SQLite as the database. If you are using another database the structure will be similar, but the data-types may be different depending on the database.

n8n uses [TypeORM](https://github.com/typeorm/typeorm) for queries and migrations.

To inspect the n8n database, you can use [DBeaver](https://dbeaver.io), which is an open-source universal database tool.

## Tables <a id="tables"></a>

These are the tables n8n creates during setup.

### auth\_identity <a id="authidentity"></a>

Stores details of external authentication providers when using [SAML](https://docs.n8n.io/administer/manage-users-and-access/verify-user-identity/use-saml).

### auth\_provider\_sync\_history <a id="authprovidersynchistory"></a>

Stores the history of a SAML connection.

### credentials\_entity <a id="credentialsentity"></a>

Stores the credentials[^1] used to authenticate with integrations.

### event\_destinations <a id="eventdestinations"></a>

Contains the destination configurations for [Log streaming](https://docs.n8n.io/administer/observe-and-log/stream-logs-to-external-systems).

### execution\_data <a id="executiondata"></a>

Contains the workflow at time of running, and the execution data.

### execution\_entity <a id="executionentity"></a>

Stores all saved workflow executions. Workflow settings can affect which executions n8n saves.

### execution\_metadata <a id="executionmetadata"></a>

Stores [Custom executions data](https://docs.n8n.io/build/understand-workflows/understand-executions/customize-executions-data).

### installed\_nodes <a id="installednodes"></a>

Lists the [community nodes](https://docs.n8n.io/integrations/community-nodes/installation-and-management) installed in your n8n instance.

### installed\_packages <a id="installedpackages"></a>

Details of npm community nodes packages installed in your n8n instance. [`installed_nodes`](#installednodes) lists each individual node. `installed_packages` lists npm packages, which may contain more than one node.

### migrations <a id="migrations"></a>

A log of all database migrations. Read more about [Migrations](https://typeorm.io/docs/advanced-topics/migrations/) in TypeORM's documentation.

### project <a id="project"></a>

Lists the [projects](https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/organize-work-in-projects) in your instance.

### project\_relation <a id="projectrelation"></a>

Describes the relationship between a user and a [project](https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/organize-work-in-projects), including the user's [role type](https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/see-available-roles).

### role <a id="role"></a>

Not currently used. For use in future work on custom roles.

### settings <a id="settings"></a>

Records custom instance settings. These are settings that you can't control using environment variables. They include:

- Whether the instance owner is set up
- Whether the user chose to skip owner and user management setup
- Whether certain types of authentication, including SAML and LDAP, are on
- License key

### shared\_credentials <a id="sharedcredentials"></a>

Maps credentials to users.

### shared\_workflow <a id="sharedworkflow"></a>

Maps workflows to users.

### tag\_entity <a id="tagentity"></a>

All workflow tags created in the n8n instance. This table lists the tags. [`workflows_tags`](#workflowstags) records which workflows have which tags.

### user <a id="user"></a>

Contains user data.

### variables <a id="variables"></a>

Store [variables](https://docs.n8n.io/build/code-in-n8n/define-custom-variables).

### webhook\_entity <a id="webhookentity"></a>

Records the active webhooks in your n8n instance's workflows. This isn't just webhooks uses in the Webhook node. It includes all active webhooks used by any trigger node.

### workflow\_entity <a id="workflowentity"></a>

Your n8n instance's saved workflows.

### workflow\_history <a id="workflowhistory"></a>

Store previous versions of workflows.

### workflow\_statistics <a id="workflowstatistics"></a>

Counts workflow IDs and their status.

### workflows\_tags <a id="workflowstags"></a>

Maps tags to workflows. [`tag_entity`](#tagentity) contains tag details.

## Entity Relationship Diagram (ERD) <a id="entity-relationship-diagram-erd"></a>

![Entity relationship diagram showing foreign-key connections between n8n's database tables, including user, workflow\_entity, execution\_entity, and credentials\_entity](https://raw.githubusercontent.com/n8n-io/n8n-docs/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/deploy/.gitbook/assets/n8n-database-diagram.png)

[^1]: In n8n, credentials store authentication information to connect with specific apps and services. After creating credentials with your authentication information (username and password, API key, OAuth secrets, etc.), you can use the associated app node to interact with the service.
