> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/archive-modules.sgml#archive-modules](https://www.postgresql.org/docs/18/archive-modules.html)

# Archive Modules

PostgreSQL provides infrastructure to create custom modules for continuous archiving (see [Continuous Archiving and Point-in-Time Recovery (PITR)](./continuous-archiving.md)). While archiving via a shell command (i.e., [Write Ahead Log](./runtime-config-wal.md#guc-archive-command)) is much simpler, a custom archive module will often be considerably more robust and performant.

When a custom [Write Ahead Log](./runtime-config-wal.md#guc-archive-library) is configured, PostgreSQL will submit completed WAL files to the module, and the server will avoid recycling or removing these WAL files until the module indicates that the files were successfully archived. It is ultimately up to the module to decide what to do with each WAL file, but many recommendations are listed at [Setting Up WAL Archiving](./continuous-archiving.md#setting-up-wal-archiving).

Archiving modules must at least consist of an initialization function (see [Initialization Functions](./archive-module-init.md)) and the required callbacks (see [Archive Module Callbacks](./archive-module-callbacks.md)). However, archive modules are also permitted to do much more (e.g., declare GUCs and register background workers).

The `contrib/basic_archive` module contains a working example, which demonstrates some useful techniques.
