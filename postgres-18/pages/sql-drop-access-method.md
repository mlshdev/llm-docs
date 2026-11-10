> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/ref/drop_access_method.sgml#sql-drop-access-method](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/ref/drop_access_method.sgml%23sql-drop-access-method)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-drop-access-method.html

# DROP ACCESS METHOD

remove an access method

## Synopsis

```
DROP ACCESS METHOD [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## Description

`DROP ACCESS METHOD` removes an existing access method. Only superusers can drop access methods.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the access method does not exist. A notice is issued in this case.

**`name`**

  The name of an existing access method.

**`CASCADE`**

  Automatically drop objects that depend on the access method (such as operator classes, operator families, and indexes), and in turn all objects that depend on those objects (see [Dependency Tracking](./ddl-depend.md)).

**`RESTRICT`**

  Refuse to drop the access method if any objects depend on it. This is the default.

## Examples

Drop the access method `heptree`:

```sql
DROP ACCESS METHOD heptree;
```

## Compatibility

`DROP ACCESS METHOD` is a PostgreSQL extension.

## See Also

- [CREATE ACCESS METHOD](./sql-create-access-method.md)
