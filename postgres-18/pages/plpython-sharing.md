> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/plpython.sgml#plpython-sharing](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/plpython.sgml%23plpython-sharing)
> Canonical documentation: https://www.postgresql.org/docs/18/plpython-sharing.html

# Sharing Data

The global dictionary `SD` is available to store private data between repeated calls to the same function. The global dictionary `GD` is public data, that is available to all Python functions within a session; use with care.

Each function gets its own execution environment in the Python interpreter, so that global data and function arguments from `myfunc` are not available to `myfunc2`. The exception is the data in the `GD` dictionary, as mentioned above.
