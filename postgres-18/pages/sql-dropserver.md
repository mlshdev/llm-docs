> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_server.sgml#sql-dropserver](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/drop_server.sgml%23sql-dropserver)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-dropserver.html

# DROP SERVER

remove a foreign server descriptor

## Synopsis

```
DROP SERVER [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ]
```

## Description

`DROP SERVER` removes an existing foreign server descriptor. To execute this command, the current user must be the owner of the server.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the server does not exist. A notice is issued in this case.

**`name`**

  The name of an existing server.

**`CASCADE`**

  Automatically drop objects that depend on the server (such as user mappings), and in turn all objects that depend on those objects (see [Dependency Tracking](./ddl-depend.md)).

**`RESTRICT`**

  Refuse to drop the server if any objects depend on it. This is the default.

## Examples

Drop a server `foo` if it exists:

```sql
DROP SERVER IF EXISTS foo;
```

## Compatibility

`DROP SERVER` conforms to ISO/IEC 9075-9 (SQL/MED). The `IF EXISTS` clause is a PostgreSQL extension.

## See Also

- [CREATE SERVER](./sql-createserver.md)
- [ALTER SERVER](./sql-alterserver.md)
