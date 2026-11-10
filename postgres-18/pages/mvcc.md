> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/mvcc.sgml#mvcc](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/mvcc.sgml%23mvcc)
> Canonical documentation: https://www.postgresql.org/docs/18/mvcc.html

# Concurrency Control

This chapter describes the behavior of the PostgreSQL database system when two or more sessions try to access the same data at the same time. The goals in that situation are to allow efficient access for all sessions while maintaining strict data integrity. Every developer of database applications should be familiar with the topics covered in this chapter.
