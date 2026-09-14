> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/alter_routine.sgml#sql-alterroutine](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/alter_routine.sgml%23sql-alterroutine)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-alterroutine.html

# ALTER ROUTINE

change the definition of a routine

## Synopsis

```
ALTER ROUTINE name [ ( [ [ argmode ] [ argname ] argtype [, ...] ] ) ]
    action [ ... ] [ RESTRICT ]
ALTER ROUTINE name [ ( [ [ argmode ] [ argname ] argtype [, ...] ] ) ]
    RENAME TO new_name
ALTER ROUTINE name [ ( [ [ argmode ] [ argname ] argtype [, ...] ] ) ]
    OWNER TO { new_owner | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER ROUTINE name [ ( [ [ argmode ] [ argname ] argtype [, ...] ] ) ]
    SET SCHEMA new_schema
ALTER ROUTINE name [ ( [ [ argmode ] [ argname ] argtype [, ...] ] ) ]
    [ NO ] DEPENDS ON EXTENSION extension_name

where action is one of:

    IMMUTABLE | STABLE | VOLATILE
    [ NOT ] LEAKPROOF
    [ EXTERNAL ] SECURITY INVOKER | [ EXTERNAL ] SECURITY DEFINER
    PARALLEL { UNSAFE | RESTRICTED | SAFE }
    COST execution_cost
    ROWS result_rows
    SET configuration_parameter { TO | = } { value | DEFAULT }
    SET configuration_parameter FROM CURRENT
    RESET configuration_parameter
    RESET ALL
```

## Description

`ALTER ROUTINE` changes the definition of a routine, which can be an aggregate function, a normal function, or a procedure. See under [ALTER AGGREGATE](./sql-alteraggregate.md), [ALTER FUNCTION](./sql-alterfunction.md), and [ALTER PROCEDURE](./sql-alterprocedure.md) for the description of the parameters, more examples, and further details.

## Examples

To rename the routine `foo` for type `integer` to `foobar`:

```sql
ALTER ROUTINE foo(integer) RENAME TO foobar;
```

This command will work independent of whether `foo` is an aggregate, function, or procedure.

## Compatibility

This statement is partially compatible with the `ALTER ROUTINE` statement in the SQL standard. See under [ALTER FUNCTION](./sql-alterfunction.md) and [ALTER PROCEDURE](./sql-alterprocedure.md) for more details. Allowing routine names to refer to aggregate functions is a PostgreSQL extension.

## See Also

- [ALTER AGGREGATE](./sql-alteraggregate.md)
- [ALTER FUNCTION](./sql-alterfunction.md)
- [ALTER PROCEDURE](./sql-alterprocedure.md)
- [DROP ROUTINE](./sql-droproutine.md)

Note that there is no `CREATE ROUTINE` command.
