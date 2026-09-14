> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_foreign_table.sgml#sql-dropforeigntable](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/drop_foreign_table.sgml%23sql-dropforeigntable)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-dropforeigntable.html

# DROP FOREIGN TABLE

remove a foreign table

## Synopsis

```
DROP FOREIGN TABLE [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ]
```

## Description

`DROP FOREIGN TABLE` removes a foreign table. Only the owner of a foreign table can remove it.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the foreign table does not exist. A notice is issued in this case.

**`name`**

  The name (optionally schema-qualified) of the foreign table to drop.

**`CASCADE`**

  Automatically drop objects that depend on the foreign table (such as views), and in turn all objects that depend on those objects (see [Dependency Tracking](./ddl-depend.md)).

**`RESTRICT`**

  Refuse to drop the foreign table if any objects depend on it. This is the default.

## Examples

To destroy two foreign tables, `films` and `distributors`:

```sql
DROP FOREIGN TABLE films, distributors;
```

## Compatibility

This command conforms to ISO/IEC 9075-9 (SQL/MED), except that the standard only allows one foreign table to be dropped per command, and apart from the `IF EXISTS` option, which is a PostgreSQL extension.

## See Also

- [ALTER FOREIGN TABLE](./sql-alterforeigntable.md)
- [CREATE FOREIGN TABLE](./sql-createforeigntable.md)
