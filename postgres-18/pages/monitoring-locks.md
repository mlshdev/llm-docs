> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/monitoring.sgml#monitoring-locks](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/monitoring.sgml%23monitoring-locks)
> Canonical documentation: https://www.postgresql.org/docs/18/monitoring-locks.html

# Viewing Locks

Another useful tool for monitoring database activity is the `pg_locks` system table. It allows the database administrator to view information about the outstanding locks in the lock manager. For example, this capability can be used to:

- View all the locks currently outstanding, all the locks on relations in a particular database, all the locks on a particular relation, or all the locks held by a particular PostgreSQL session.
- Determine the relation in the current database with the most ungranted locks (which might be a source of contention among database clients).
- Determine the effect of lock contention on overall database performance, as well as the extent to which contention varies with overall database traffic.

Details of the `pg_locks` view appear in [pg_locks](./view-pg-locks.md). For more information on locking and managing concurrency with PostgreSQL, refer to [Concurrency Control](./mvcc.md).
