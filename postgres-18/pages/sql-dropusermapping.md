> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_user_mapping.sgml#sql-dropusermapping](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/drop_user_mapping.sgml%23sql-dropusermapping)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-dropusermapping.html

# DROP USER MAPPING

remove a user mapping for a foreign server

## Synopsis

```
DROP USER MAPPING [ IF EXISTS ] FOR { user_name | USER | CURRENT_ROLE | CURRENT_USER | PUBLIC } SERVER server_name
```

## Description

`DROP USER MAPPING` removes an existing user mapping from foreign server.

The owner of a foreign server can drop user mappings for that server for any user. Also, a user can drop a user mapping for their own user name if `USAGE` privilege on the server has been granted to the user.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the user mapping does not exist. A notice is issued in this case.

**`user_name`**

  User name of the mapping. `CURRENT_ROLE`, `CURRENT_USER`, and `USER` match the name of the current user. `PUBLIC` is used to match all present and future user names in the system.

**`server_name`**

  Server name of the user mapping.

## Examples

Drop a user mapping `bob`, server `foo` if it exists:

```sql
DROP USER MAPPING IF EXISTS FOR bob SERVER foo;
```

## Compatibility

`DROP USER MAPPING` conforms to ISO/IEC 9075-9 (SQL/MED). The `IF EXISTS` clause is a PostgreSQL extension.

## See Also

- [CREATE USER MAPPING](./sql-createusermapping.md)
- [ALTER USER MAPPING](./sql-alterusermapping.md)
