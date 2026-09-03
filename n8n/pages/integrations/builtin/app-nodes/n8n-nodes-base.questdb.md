> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.questdb.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/app-nodes/n8n-nodes-base.questdb.md)

# QuestDB node <a id="questdb-node"></a>

Use the QuestDB node to automate work in QuestDB, and integrate QuestDB with other applications. n8n supports executing an SQL query and inserting rows in a database with QuestDB.

On this page, you'll find a list of operations the QuestDB node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [QuestDB credentials](https://docs.n8n.io/integrations/builtin/credentials/questdb) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Executes a SQL query.
- Insert rows in database.

## Templates and examples <a id="templates-and-examples"></a>

[Browse QuestDB node documentation integration templates](https://n8n.io/integrations/questdb) or [search all templates](https://n8n.io/workflows/)

## Node reference <a id="node-reference"></a>

### Specify a column's data type <a id="specify-a-columns-data-type"></a>

To specify a column's data type, append the column name with `:type`, where `type` is the data type you want for column. For example, if you want to specify the type `int` for the column **id** and type `text` for the column **name**, you can use the following snippet in the **Columns** field: `id:int,name:text`.
