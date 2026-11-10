> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/pltcl.sgml#pltcl-data](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/pltcl.sgml%23pltcl-data)
> Canonical documentation: https://www.postgresql.org/docs/18/pltcl-data.html

# Data Values in PL/Tcl

The argument values supplied to a PL/Tcl function's code are simply the input arguments converted to text form (just as if they had been displayed by a `SELECT` statement). Conversely, the `return` and `return_next` commands will accept any string that is acceptable input format for the function's declared result type, or for the specified column of a composite result type.
