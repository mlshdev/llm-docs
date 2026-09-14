> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/alter_rule.sgml#sql-alterrule](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/alter_rule.sgml%23sql-alterrule)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-alterrule.html

# ALTER RULE

change the definition of a rule

## Synopsis

```
ALTER RULE name ON table_name RENAME TO new_name
```

## Description

`ALTER RULE` changes properties of an existing rule. Currently, the only available action is to change the rule's name.

To use `ALTER RULE`, you must own the table or view that the rule applies to.

## Parameters

**`name`**

  The name of an existing rule to alter.

**`table_name`**

  The name (optionally schema-qualified) of the table or view that the rule applies to.

**`new_name`**

  The new name for the rule.

## Examples

To rename an existing rule:

```sql
ALTER RULE notify_all ON emp RENAME TO notify_me;
```

## Compatibility

`ALTER RULE` is a PostgreSQL language extension, as is the entire query rewrite system.

## See Also

- [CREATE RULE](./sql-createrule.md)
- [DROP RULE](./sql-droprule.md)
