> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/ref/drop_conversion.sgml#sql-dropconversion](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/ref/drop_conversion.sgml%23sql-dropconversion)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-dropconversion.html

# DROP CONVERSION

remove a conversion

## Synopsis

```
DROP CONVERSION [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## Description

`DROP CONVERSION` removes a previously defined conversion. To be able to drop a conversion, you must own the conversion.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the conversion does not exist. A notice is issued in this case.

**`name`**

  The name of the conversion. The conversion name can be schema-qualified.

**`CASCADE`, `RESTRICT`**

  These key words do not have any effect, since there are no dependencies on conversions.

## Examples

To drop the conversion named `myname`:

```sql
DROP CONVERSION myname;
```

## Compatibility

There is no `DROP CONVERSION` statement in the SQL standard, but a `DROP TRANSLATION` statement that goes along with the `CREATE TRANSLATION` statement that is similar to the `CREATE CONVERSION` statement in PostgreSQL.

## See Also

- [ALTER CONVERSION](./sql-alterconversion.md)
- [CREATE CONVERSION](./sql-createconversion.md)
