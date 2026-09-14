> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_domain.sgml#sql-dropdomain](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/drop_domain.sgml%23sql-dropdomain)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-dropdomain.html

# DROP DOMAIN

remove a domain

## Synopsis

```
DROP DOMAIN [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ]
```

## Description

`DROP DOMAIN` removes a domain. Only the owner of a domain can remove it.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the domain does not exist. A notice is issued in this case.

**`name`**

  The name (optionally schema-qualified) of an existing domain.

**`CASCADE`**

  Automatically drop objects that depend on the domain (such as table columns), and in turn all objects that depend on those objects (see [Dependency Tracking](./ddl-depend.md)).

**`RESTRICT`**

  Refuse to drop the domain if any objects depend on it. This is the default.

## Examples

To remove the domain `box`:

```sql
DROP DOMAIN box;
```

## Compatibility

This command conforms to the SQL standard, except for the `IF EXISTS` option, which is a PostgreSQL extension.

## See Also

- [CREATE DOMAIN](./sql-createdomain.md)
- [ALTER DOMAIN](./sql-alterdomain.md)
