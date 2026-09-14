> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_language.sgml#sql-droplanguage](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/drop_language.sgml%23sql-droplanguage)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-droplanguage.html

# DROP LANGUAGE

remove a procedural language

## Synopsis

```
DROP [ PROCEDURAL ] LANGUAGE [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## Description

`DROP LANGUAGE` removes the definition of a previously registered procedural language. You must be a superuser or the owner of the language to use `DROP LANGUAGE`.

> **Note**
>
> As of PostgreSQL 9.1, most procedural languages have been made into “extensions”, and should therefore be removed with [`DROP EXTENSION`](./sql-dropextension.md) not `DROP LANGUAGE`.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the language does not exist. A notice is issued in this case.

**`name`**

  The name of an existing procedural language.

**`CASCADE`**

  Automatically drop objects that depend on the language (such as functions in the language), and in turn all objects that depend on those objects (see [Dependency Tracking](./ddl-depend.md)).

**`RESTRICT`**

  Refuse to drop the language if any objects depend on it. This is the default.

## Examples

This command removes the procedural language `plsample`:

```sql
DROP LANGUAGE plsample;
```

## Compatibility

There is no `DROP LANGUAGE` statement in the SQL standard.

## See Also

- [ALTER LANGUAGE](./sql-alterlanguage.md)
- [CREATE LANGUAGE](./sql-createlanguage.md)
