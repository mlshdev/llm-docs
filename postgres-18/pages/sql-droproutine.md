> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_routine.sgml#sql-droproutine](https://www.postgresql.org/docs/18/sql-droproutine.html)

# DROP ROUTINE

remove a routine

## Synopsis

```
DROP ROUTINE [ IF EXISTS ] name [ ( [ [ argmode ] [ argname ] argtype [, ...] ] ) ] [, ...]
    [ CASCADE | RESTRICT ]
```

## Description

`DROP ROUTINE` removes the definition of one or more existing routines. The term “routine” includes aggregate functions, normal functions, and procedures. See under [DROP AGGREGATE](./sql-dropaggregate.md), [DROP FUNCTION](./sql-dropfunction.md), and [DROP PROCEDURE](./sql-dropprocedure.md) for the description of the parameters, more examples, and further details.

## Notes

The lookup rules used by `DROP ROUTINE` are fundamentally the same as for `DROP PROCEDURE`; in particular, `DROP ROUTINE` shares that command's behavior of considering an argument list that has no `argmode` markers to be possibly using the SQL standard's definition that `OUT` arguments are included in the list. (`DROP AGGREGATE` and `DROP FUNCTION` do not do that.)

In some cases where the same name is shared by routines of different kinds, it is possible for `DROP ROUTINE` to fail with an ambiguity error when a more specific command (`DROP FUNCTION`, etc.) would work. Specifying the argument type list more carefully will also resolve such problems.

These lookup rules are also used by other commands that act on existing routines, such as `ALTER ROUTINE` and `COMMENT ON ROUTINE`.

## Examples

To drop the routine `foo` for type `integer`:

```sql
DROP ROUTINE foo(integer);
```

This command will work independent of whether `foo` is an aggregate, function, or procedure.

## Compatibility

This command conforms to the SQL standard, with these PostgreSQL extensions:

- The standard only allows one routine to be dropped per command.
- The `IF EXISTS` option is an extension.
- The ability to specify argument modes and names is an extension, and the lookup rules differ when modes are given.
- User-definable aggregate functions are an extension.

## See Also

- [DROP AGGREGATE](./sql-dropaggregate.md)
- [DROP FUNCTION](./sql-dropfunction.md)
- [DROP PROCEDURE](./sql-dropprocedure.md)
- [ALTER ROUTINE](./sql-alterroutine.md)

Note that there is no `CREATE ROUTINE` command.
