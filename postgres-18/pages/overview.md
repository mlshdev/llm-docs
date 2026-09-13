> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/arch-dev.sgml#overview](https://www.postgresql.org/docs/18/overview.html)

# Overview of PostgreSQL Internals

> **Author**
>
> This chapter originated as part of [Enhancement of the ANSI SQL Implementation of PostgreSQL](./biblio.md#enhancement-of-the-ansi-sql-implementation-of-postgresql) Stefan Simkovics' Master's Thesis prepared at Vienna University of Technology under the direction of O.Univ.Prof.Dr. Georg Gottlob and Univ.Ass. Mag. Katrin Seyr.

This chapter gives an overview of the internal structure of the backend of PostgreSQL. After having read the following sections you should have an idea of how a query is processed. This chapter is intended to help the reader understand the general sequence of operations that occur within the backend from the point at which a query is received, to the point at which the results are returned to the client.
