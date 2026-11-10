> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/ref/alter_language.sgml#sql-alterlanguage](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/ref/alter_language.sgml%23sql-alterlanguage)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-alterlanguage.html

# ALTER LANGUAGE

change the definition of a procedural language

## Synopsis

```
ALTER [ PROCEDURAL ] LANGUAGE name RENAME TO new_name
ALTER [ PROCEDURAL ] LANGUAGE name OWNER TO { new_owner | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
```

## Description

`ALTER LANGUAGE` changes the definition of a procedural language. The only functionality is to rename the language or assign a new owner. You must be superuser or owner of the language to use `ALTER LANGUAGE`.

## Parameters

**`name`**

  Name of a language

**`new_name`**

  The new name of the language

**`new_owner`**

  The new owner of the language

## Compatibility

There is no `ALTER LANGUAGE` statement in the SQL standard.

## See Also

- [CREATE LANGUAGE](./sql-createlanguage.md)
- [DROP LANGUAGE](./sql-droplanguage.md)
