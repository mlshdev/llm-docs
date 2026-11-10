> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/ref/drop_rule.sgml#sql-droprule](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/ref/drop_rule.sgml%23sql-droprule)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-droprule.html

# DROP RULE

remove a rewrite rule

## Synopsis

```
DROP RULE [ IF EXISTS ] name ON table_name [ CASCADE | RESTRICT ]
```

## Description

`DROP RULE` drops a rewrite rule.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the rule does not exist. A notice is issued in this case.

**`name`**

  The name of the rule to drop.

**`table_name`**

  The name (optionally schema-qualified) of the table or view that the rule applies to.

**`CASCADE`**

  Automatically drop objects that depend on the rule, and in turn all objects that depend on those objects (see [Dependency Tracking](./ddl-depend.md)).

**`RESTRICT`**

  Refuse to drop the rule if any objects depend on it. This is the default.

## Examples

To drop the rewrite rule `newrule`:

```sql
DROP RULE newrule ON mytable;
```

## Compatibility

`DROP RULE` is a PostgreSQL language extension, as is the entire query rewrite system.

## See Also

- [CREATE RULE](./sql-createrule.md)
- [ALTER RULE](./sql-alterrule.md)
