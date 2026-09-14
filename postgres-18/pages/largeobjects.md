> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/lobj.sgml#largeobjects](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/lobj.sgml%23largeobjects)
> Canonical documentation: https://www.postgresql.org/docs/18/largeobjects.html

# Large Objects

PostgreSQL has a *large object* facility, which provides stream-style access to user data that is stored in a special large-object structure. Streaming access is useful when working with data values that are too large to manipulate conveniently as a whole.

This chapter describes the implementation and the programming and query language interfaces to PostgreSQL large object data. We use the `libpq` C library for the examples in this chapter, but most programming interfaces native to PostgreSQL support equivalent functionality. Other interfaces might use the large object interface internally to provide generic support for large values. This is not described here.
