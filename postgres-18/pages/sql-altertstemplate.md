> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/ref/alter_tstemplate.sgml#sql-altertstemplate](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/ref/alter_tstemplate.sgml%23sql-altertstemplate)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-altertstemplate.html

# ALTER TEXT SEARCH TEMPLATE

change the definition of a text search template

## Synopsis

```
ALTER TEXT SEARCH TEMPLATE name RENAME TO new_name
ALTER TEXT SEARCH TEMPLATE name SET SCHEMA new_schema
```

## Description

`ALTER TEXT SEARCH TEMPLATE` changes the definition of a text search template. Currently, the only supported functionality is to change the template's name.

You must be a superuser to use `ALTER TEXT SEARCH TEMPLATE`.

## Parameters

**`name`**

  The name (optionally schema-qualified) of an existing text search template.

**`new_name`**

  The new name of the text search template.

**`new_schema`**

  The new schema for the text search template.

## Compatibility

There is no `ALTER TEXT SEARCH TEMPLATE` statement in the SQL standard.

## See Also

- [CREATE TEXT SEARCH TEMPLATE](./sql-createtstemplate.md)
- [DROP TEXT SEARCH TEMPLATE](./sql-droptstemplate.md)
