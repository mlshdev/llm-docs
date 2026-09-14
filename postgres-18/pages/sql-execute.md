> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/execute.sgml#sql-execute](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/execute.sgml%23sql-execute)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-execute.html

# EXECUTE

execute a prepared statement

## Synopsis

```
EXECUTE name [ ( parameter [, ...] ) ]
```

## Description

`EXECUTE` is used to execute a previously prepared statement. Since prepared statements only exist for the duration of a session, the prepared statement must have been created by a `PREPARE` statement executed earlier in the current session.

If the `PREPARE` statement that created the statement specified some parameters, a compatible set of parameters must be passed to the `EXECUTE` statement, or else an error is raised. Note that (unlike functions) prepared statements are not overloaded based on the type or number of their parameters; the name of a prepared statement must be unique within a database session.

For more information on the creation and usage of prepared statements, see [PREPARE](./sql-prepare.md).

## Parameters

**`name`**

  The name of the prepared statement to execute.

**`parameter`**

  The actual value of a parameter to the prepared statement. This must be an expression yielding a value that is compatible with the data type of this parameter, as was determined when the prepared statement was created.

## Outputs

The command tag returned by `EXECUTE` is that of the prepared statement, and not `EXECUTE`.

## Examples

Examples are given in [Examples](./sql-prepare.md#examples) in the [PREPARE](./sql-prepare.md) documentation.

## Compatibility

The SQL standard includes an `EXECUTE` statement, but it is only for use in embedded SQL. This version of the `EXECUTE` statement also uses a somewhat different syntax.

## See Also

- [DEALLOCATE](./sql-deallocate.md)
- [PREPARE](./sql-prepare.md)
