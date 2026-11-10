> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/intro.sgml#intro-whatis](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/intro.sgml%23intro-whatis)
> Canonical documentation: https://www.postgresql.org/docs/18/intro-whatis.html

# What Is PostgreSQL?

PostgreSQL is an object-relational database management system (ORDBMS) based on [POSTGRES, Version 4.2](https://dsf.berkeley.edu/postgres.html), developed at the University of California at Berkeley Computer Science Department. POSTGRES pioneered many concepts that only became available in some commercial database systems much later.

PostgreSQL is an open-source descendant of this original Berkeley code. It supports a large part of the SQL standard and offers many modern features:

- [complex queries](./sql.md)
- [foreign keys](./ddl-constraints.md#foreign-keys)
- [triggers](./triggers.md)
- [updatable views](./sql-createview.md#updatable-views)
- [transactional integrity](./transaction-iso.md)
- [multiversion concurrency control](./mvcc.md)

Also, PostgreSQL can be extended by the user in many ways, for example by adding new

- [data types](./datatype.md)
- [functions](./functions.md)
- [operators](./functions.md)
- [aggregate functions](./functions-aggregate.md)
- [index methods](./indexes.md)
- [procedural languages](./server-programming.md)

And because of the liberal license, PostgreSQL can be used, modified, and distributed by anyone free of charge for any purpose, be it private, commercial, or academic.
