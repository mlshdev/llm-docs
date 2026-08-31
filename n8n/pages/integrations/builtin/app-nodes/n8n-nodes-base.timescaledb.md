> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.timescaledb.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/app-nodes/n8n-nodes-base.timescaledb.md)

# TimescaleDB node <a id="timescaledb-node"></a>

Use the TimescaleDB node to automate work in TimescaleDB, and integrate TimescaleDB with other applications. n8n has built-in support for a wide range of TimescaleDB features, including executing an SQL query, as well as inserting and updating rows in a database.

On this page, you'll find a list of operations the TimescaleDB node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [TimescaleDB credentials](https://docs.n8n.io/integrations/builtin/credentials/timescaledb) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Execute an SQL query
- Insert rows in database
- Update rows in database

## Templates and examples <a id="templates-and-examples"></a>

[Browse TimescaleDB node documentation integration templates](https://n8n.io/integrations/timescaledb) or [search all templates](https://n8n.io/workflows/)

## Specify a column's data type <a id="specify-a-columns-data-type"></a>

To specify a column's data type, append the column name with `:type`, where `type` is the data type you want for the column. For example, if you want to specify the type `int` for the column **id** and type `text` for the column **name**, you can use the following snippet in the **Columns** field: `id:int,name:text`.
