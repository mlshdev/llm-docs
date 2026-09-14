> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/call.sgml#sql-call](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/call.sgml%23sql-call)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-call.html

# CALL

invoke a procedure

## Synopsis

```
CALL name ( [ argument ] [, ...] )
```

## Description

`CALL` executes a procedure.

If the procedure has any output parameters, then a result row will be returned, containing the values of those parameters.

## Parameters

**`name`**

  The name (optionally schema-qualified) of the procedure.

**`argument`**

  An argument expression for the procedure call.

  Arguments can include parameter names, using the syntax `name => value`. This works the same as in ordinary function calls; see [Calling Functions](./sql-syntax-calling-funcs.md) for details.

  Arguments must be supplied for all procedure parameters that lack defaults, including `OUT` parameters. However, arguments matching `OUT` parameters are not evaluated, so it's customary to just write `NULL` for them. (Writing something else for an `OUT` parameter might cause compatibility problems with future PostgreSQL versions.)

## Notes

The user must have `EXECUTE` privilege on the procedure in order to be allowed to invoke it.

To call a function (not a procedure), use `SELECT` instead.

If `CALL` is executed in a transaction block, then the called procedure cannot execute transaction control statements. Transaction control statements are only allowed if `CALL` is executed in its own transaction.

`PL/pgSQL` handles output parameters in `CALL` commands differently; see [Calling a Procedure](./plpgsql-control-structures.md#calling-a-procedure).

## Examples

```sql
CALL do_db_maintenance();
```

## Compatibility

`CALL` conforms to the SQL standard, except for the handling of output parameters. The standard says that users should write variables to receive the values of output parameters.

## See Also

- [CREATE PROCEDURE](./sql-createprocedure.md)
