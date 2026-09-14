> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/alter_schema.sgml#sql-alterschema](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/alter_schema.sgml%23sql-alterschema)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-alterschema.html

# ALTER SCHEMA

change the definition of a schema

## Synopsis

```
ALTER SCHEMA name RENAME TO new_name
ALTER SCHEMA name OWNER TO { new_owner | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
```

## Description

`ALTER SCHEMA` changes the definition of a schema.

You must own the schema to use `ALTER SCHEMA`. To rename a schema you must also have the `CREATE` privilege for the database. To alter the owner, you must be able to `SET ROLE` to the new owning role, and that role must have the `CREATE` privilege for the database. (Note that superusers have all these privileges automatically.)

## Parameters

**`name`**

  The name of an existing schema.

**`new_name`**

  The new name of the schema. The new name cannot begin with `pg_`, as such names are reserved for system schemas.

**`new_owner`**

  The new owner of the schema.

## Compatibility

There is no `ALTER SCHEMA` statement in the SQL standard.

## See Also

- [CREATE SCHEMA](./sql-createschema.md)
- [DROP SCHEMA](./sql-dropschema.md)
