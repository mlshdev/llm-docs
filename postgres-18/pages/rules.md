> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/rules.sgml#rules](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/rules.sgml%23rules)
> Canonical documentation: https://www.postgresql.org/docs/18/rules.html

# The Rule System

This chapter discusses the rule system in PostgreSQL. Production rule systems are conceptually simple, but there are many subtle points involved in actually using them.

Some other database systems define active database rules, which are usually stored procedures and triggers. In PostgreSQL, these can be implemented using functions and triggers as well.

The rule system (more precisely speaking, the query rewrite rule system) is totally different from stored procedures and triggers. It modifies queries to take rules into consideration, and then passes the modified query to the query planner for planning and execution. It is very powerful, and can be used for many things such as query language procedures, views, and versions. The theoretical foundations and the power of this rule system are also discussed in [Bibliography](./biblio.md#ston90b) and [Bibliography](./biblio.md#ong90).
