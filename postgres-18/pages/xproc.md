> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/xfunc.sgml#xproc](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/xfunc.sgml%23xproc)
> Canonical documentation: https://www.postgresql.org/docs/18/xproc.html

# User-Defined Procedures

A procedure is a database object similar to a function. The key differences are:

- Procedures are defined with the [`CREATE PROCEDURE`](./sql-createprocedure.md) command, not `CREATE FUNCTION`.
- Procedures do not return a function value; hence `CREATE PROCEDURE` lacks a `RETURNS` clause. However, procedures can instead return data to their callers via output parameters.
- While a function is called as part of a query or DML command, a procedure is called in isolation using the [`CALL`](./sql-call.md) command.
- A procedure can commit or roll back transactions during its execution (then automatically beginning a new transaction), so long as the invoking `CALL` command is not part of an explicit transaction block. A function cannot do that.
- Certain function attributes, such as strictness, don't apply to procedures. Those attributes control how the function is used in a query, which isn't relevant to procedures.

The explanations in the following sections about how to define user-defined functions apply to procedures as well, except for the points made above.

Collectively, functions and procedures are also known as *routines*. There are commands such as [`ALTER ROUTINE`](./sql-alterroutine.md) and [`DROP ROUTINE`](./sql-droproutine.md) that can operate on functions and procedures without having to know which kind it is. Note, however, that there is no `CREATE ROUTINE` command.
