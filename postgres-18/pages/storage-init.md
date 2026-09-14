> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/storage.sgml#storage-init](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/storage.sgml%23storage-init)
> Canonical documentation: https://www.postgresql.org/docs/18/storage-init.html

# The Initialization Fork

Each unlogged table, and each index on an unlogged table, has an initialization fork. The initialization fork is an empty table or index of the appropriate type. When an unlogged table must be reset to empty due to a crash, the initialization fork is copied over the main fork, and any other forks are erased (they will be recreated automatically as needed).
