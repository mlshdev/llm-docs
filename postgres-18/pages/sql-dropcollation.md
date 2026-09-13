> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_collation.sgml#sql-dropcollation](https://www.postgresql.org/docs/18/sql-dropcollation.html)

# DROP COLLATION

remove a collation

## Synopsis

```
DROP COLLATION [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## Description

`DROP COLLATION` removes a previously defined collation. To be able to drop a collation, you must own the collation.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the collation does not exist. A notice is issued in this case.

**`name`**

  The name of the collation. The collation name can be schema-qualified.

**`CASCADE`**

  Automatically drop objects that depend on the collation, and in turn all objects that depend on those objects (see [Dependency Tracking](./ddl-depend.md)).

**`RESTRICT`**

  Refuse to drop the collation if any objects depend on it. This is the default.

## Examples

To drop the collation named `german`:

```sql
DROP COLLATION german;
```

## Compatibility

The `DROP COLLATION` command conforms to the SQL standard, apart from the `IF EXISTS` option, which is a PostgreSQL extension.

## See Also

- [ALTER COLLATION](./sql-altercollation.md)
- [CREATE COLLATION](./sql-createcollation.md)
