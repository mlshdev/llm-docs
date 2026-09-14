> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ecpg.sgml#ecpg-sql-describe](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ecpg.sgml%23ecpg-sql-describe)
> Canonical documentation: https://www.postgresql.org/docs/18/ecpg-sql-describe.html

# DESCRIBE

obtain information about a prepared statement or result set

## Synopsis

```
DESCRIBE [ OUTPUT ] prepared_name USING [ SQL ] DESCRIPTOR descriptor_name
DESCRIBE [ OUTPUT ] prepared_name INTO [ SQL ] DESCRIPTOR descriptor_name
DESCRIBE [ OUTPUT ] prepared_name INTO sqlda_name
```

## Description

`DESCRIBE` retrieves metadata information about the result columns contained in a prepared statement, without actually fetching a row.

## Parameters

**`prepared_name`**

  The name of a prepared statement. This can be an SQL identifier or a host variable.

**`descriptor_name`**

  A descriptor name. It is case sensitive. It can be an SQL identifier or a host variable.

**`sqlda_name`**

  The name of an SQLDA variable.

## Examples

```sql
EXEC SQL ALLOCATE DESCRIPTOR mydesc;
EXEC SQL PREPARE stmt1 FROM :sql_stmt;
EXEC SQL DESCRIBE stmt1 INTO SQL DESCRIPTOR mydesc;
EXEC SQL GET DESCRIPTOR mydesc VALUE 1 :charvar = NAME;
EXEC SQL DEALLOCATE DESCRIPTOR mydesc;
```

## Compatibility

`DESCRIBE` is specified in the SQL standard.

## See Also

- [ALLOCATE DESCRIPTOR](./ecpg-sql-allocate-descriptor.md)
- [GET DESCRIPTOR](./ecpg-sql-get-descriptor.md)
