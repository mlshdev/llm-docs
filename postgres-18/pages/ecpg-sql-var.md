> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ecpg.sgml#ecpg-sql-var](https://www.postgresql.org/docs/18/ecpg-sql-var.html)

# VAR

define a variable

## Synopsis

```
VAR varname IS ctype
```

## Description

The `VAR` command assigns a new C data type to a host variable. The host variable must be previously declared in a declare section.

## Parameters

**`varname`**

  A C variable name.

**`ctype`**

  A C type specification.

## Examples

```sql
Exec sql begin declare section;
short a;
exec sql end declare section;
EXEC SQL VAR a IS int;
```

## Compatibility

The `VAR` command is a PostgreSQL extension.
