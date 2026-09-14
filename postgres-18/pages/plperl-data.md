> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/plperl.sgml#plperl-data](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/plperl.sgml%23plperl-data)
> Canonical documentation: https://www.postgresql.org/docs/18/plperl-data.html

# Data Values in PL/Perl

The argument values supplied to a PL/Perl function's code are simply the input arguments converted to text form (just as if they had been displayed by a `SELECT` statement). Conversely, the `return` and `return_next` commands will accept any string that is acceptable input format for the function's declared return type.

If this behavior is inconvenient for a particular case, it can be improved by using a transform, as already illustrated for `bool` values. Several examples of transform modules are included in the PostgreSQL distribution.
