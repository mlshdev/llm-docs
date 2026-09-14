> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_view.sgml#sql-dropview](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/drop_view.sgml%23sql-dropview)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-dropview.html

# DROP VIEW

remove a view

## Synopsis

```
DROP VIEW [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ]
```

## Description

`DROP VIEW` drops an existing view. To execute this command you must be the owner of the view.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the view does not exist. A notice is issued in this case.

**`name`**

  The name (optionally schema-qualified) of the view to remove.

**`CASCADE`**

  Automatically drop objects that depend on the view (such as other views), and in turn all objects that depend on those objects (see [Dependency Tracking](./ddl-depend.md)).

**`RESTRICT`**

  Refuse to drop the view if any objects depend on it. This is the default.

## Examples

This command will remove the view called `kinds`:

```sql
DROP VIEW kinds;
```

## Compatibility

This command conforms to the SQL standard, except that the standard only allows one view to be dropped per command, and apart from the `IF EXISTS` option, which is a PostgreSQL extension.

## See Also

- [ALTER VIEW](./sql-alterview.md)
- [CREATE VIEW](./sql-createview.md)
