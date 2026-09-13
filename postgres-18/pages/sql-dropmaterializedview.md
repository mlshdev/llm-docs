> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_materialized_view.sgml#sql-dropmaterializedview](https://www.postgresql.org/docs/18/sql-dropmaterializedview.html)

# DROP MATERIALIZED VIEW

remove a materialized view

## Synopsis

```
DROP MATERIALIZED VIEW [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ]
```

## Description

`DROP MATERIALIZED VIEW` drops an existing materialized view. To execute this command you must be the owner of the materialized view.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the materialized view does not exist. A notice is issued in this case.

**`name`**

  The name (optionally schema-qualified) of the materialized view to remove.

**`CASCADE`**

  Automatically drop objects that depend on the materialized view (such as other materialized views, or regular views), and in turn all objects that depend on those objects (see [Dependency Tracking](./ddl-depend.md)).

**`RESTRICT`**

  Refuse to drop the materialized view if any objects depend on it. This is the default.

## Examples

This command will remove the materialized view called `order_summary`:

```sql
DROP MATERIALIZED VIEW order_summary;
```

## Compatibility

`DROP MATERIALIZED VIEW` is a PostgreSQL extension.

## See Also

- [CREATE MATERIALIZED VIEW](./sql-creatematerializedview.md)
- [ALTER MATERIALIZED VIEW](./sql-altermaterializedview.md)
- [REFRESH MATERIALIZED VIEW](./sql-refreshmaterializedview.md)
