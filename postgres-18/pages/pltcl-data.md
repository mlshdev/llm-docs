> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/pltcl.sgml#pltcl-data](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/pltcl.sgml%23pltcl-data)
> Canonical documentation: https://www.postgresql.org/docs/18/pltcl-data.html

# Data Values in PL/Tcl

The argument values supplied to a PL/Tcl function's code are simply the input arguments converted to text form (just as if they had been displayed by a `SELECT` statement). Conversely, the `return` and `return_next` commands will accept any string that is acceptable input format for the function's declared result type, or for the specified column of a composite result type.
