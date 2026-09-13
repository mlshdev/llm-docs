> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/dblink.sgml#dblink](https://www.postgresql.org/docs/18/dblink.html)

# dblink — connect to other PostgreSQL databases

`dblink` is a module that supports connections to other PostgreSQL databases from within a database session.

`dblink` can report the following wait events under the wait event type `Extension`.

**`DblinkConnect`**

  Waiting to establish a connection to a remote server.

**`DblinkGetConnect`**

  Waiting to establish a connection to a remote server when it could not be found in the list of already-opened connections.

**`DblinkGetResult`**

  Waiting to receive the results of a query from a remote server.

See also [postgres_fdw — access data stored in external PostgreSQL servers](./postgres-fdw.md), which provides roughly the same functionality using a more modern and standards-compliant infrastructure.
