> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_statistics.sgml#sql-dropstatistics](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/drop_statistics.sgml%23sql-dropstatistics)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-dropstatistics.html

# DROP STATISTICS

remove extended statistics

## Synopsis

```
DROP STATISTICS [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ]
```

## Description

`DROP STATISTICS` removes statistics object(s) from the database. Only the statistics object's owner, the schema owner, or a superuser can drop a statistics object.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the statistics object does not exist. A notice is issued in this case.

**`name`**

  The name (optionally schema-qualified) of the statistics object to drop.

**`CASCADE`, `RESTRICT`**

  These key words do not have any effect, since there are no dependencies on statistics.

## Examples

To destroy two statistics objects in different schemas, without failing if they don't exist:

```sql
DROP STATISTICS IF EXISTS
    accounting.users_uid_creation,
    public.grants_user_role;
```

## Compatibility

There is no `DROP STATISTICS` command in the SQL standard.

## See Also

- [ALTER STATISTICS](./sql-alterstatistics.md)
- [CREATE STATISTICS](./sql-createstatistics.md)
