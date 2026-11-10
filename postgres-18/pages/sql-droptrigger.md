> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/ref/drop_trigger.sgml#sql-droptrigger](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/ref/drop_trigger.sgml%23sql-droptrigger)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-droptrigger.html

# DROP TRIGGER

remove a trigger

## Synopsis

```
DROP TRIGGER [ IF EXISTS ] name ON table_name [ CASCADE | RESTRICT ]
```

## Description

`DROP TRIGGER` removes an existing trigger definition. To execute this command, the current user must be the owner of the table for which the trigger is defined.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the trigger does not exist. A notice is issued in this case.

**`name`**

  The name of the trigger to remove.

**`table_name`**

  The name (optionally schema-qualified) of the table for which the trigger is defined.

**`CASCADE`**

  Automatically drop objects that depend on the trigger, and in turn all objects that depend on those objects (see [Dependency Tracking](./ddl-depend.md)).

**`RESTRICT`**

  Refuse to drop the trigger if any objects depend on it. This is the default.

## Examples

Destroy the trigger `if_dist_exists` on the table `films`:

```sql
DROP TRIGGER if_dist_exists ON films;
```

## Compatibility

The `DROP TRIGGER` statement in PostgreSQL is incompatible with the SQL standard. In the SQL standard, trigger names are not local to tables, so the command is simply `DROP TRIGGER name`.

## See Also

- [CREATE TRIGGER](./sql-createtrigger.md)
