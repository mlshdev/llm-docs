> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.cratedb.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/app-nodes/n8n-nodes-base.cratedb.md)

# CrateDB node <a id="cratedb-node"></a>

Use the CrateDB node to automate work in CrateDB, and integrate CrateDB with other applications. n8n has built-in support for a wide range of CrateDB features, including executing, inserting, and updating rows in the database.

On this page, you'll find a list of operations the CrateDB node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [CrateDB credentials](https://docs.n8n.io/integrations/builtin/credentials/cratedb) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Execute an SQL query
- Insert rows in database
- Update rows in database

## Templates and examples <a id="templates-and-examples"></a>

[Browse CrateDB node documentation integration templates](https://n8n.io/integrations/cratedb) or [search all templates](https://n8n.io/workflows/)

## Node reference <a id="node-reference"></a>

### Specify a column's data type <a id="specify-a-columns-data-type"></a>

To specify a column's data type, append the column name with `:type`, where `type` is the data type you want for the column. For example, if you want to specify the type `int` for the column **id** and type `text` for the column **name**, you can use the following snippet in the **Columns** field: `id:int,name:text`.
