> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_tablespace.sgml#sql-droptablespace](https://www.postgresql.org/docs/18/sql-droptablespace.html)

# DROP TABLESPACE

remove a tablespace

## Synopsis

```
DROP TABLESPACE [ IF EXISTS ] name
```

## Description

`DROP TABLESPACE` removes a tablespace from the system.

A tablespace can only be dropped by its owner or a superuser. The tablespace must be empty of all database objects before it can be dropped. It is possible that objects in other databases might still reside in the tablespace even if no objects in the current database are using the tablespace. Also, if the tablespace is listed in the [Client Connection Defaults](./runtime-config-client.md#guc-temp-tablespaces) setting of any active session, the `DROP` might fail due to temporary files residing in the tablespace.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the tablespace does not exist. A notice is issued in this case.

**`name`**

  The name of a tablespace.

## Notes

`DROP TABLESPACE` cannot be executed inside a transaction block.

## Examples

To remove tablespace `mystuff` from the system:

```sql
DROP TABLESPACE mystuff;
```

## Compatibility

`DROP TABLESPACE` is a PostgreSQL extension.

## See Also

- [CREATE TABLESPACE](./sql-createtablespace.md)
- [ALTER TABLESPACE](./sql-altertablespace.md)
