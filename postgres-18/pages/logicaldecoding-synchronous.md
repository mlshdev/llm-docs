> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/logicaldecoding.sgml#logicaldecoding-synchronous](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/logicaldecoding.sgml%23logicaldecoding-synchronous)
> Canonical documentation: https://www.postgresql.org/docs/18/logicaldecoding-synchronous.html

# Synchronous Replication Support for Logical Decoding

## Overview

Logical decoding can be used to build [synchronous replication](./warm-standby.md#synchronous-replication) solutions with the same user interface as synchronous replication for [streaming replication](./warm-standby.md#streaming-replication). To do this, the streaming replication interface (see [Streaming Replication Protocol Interface](./logicaldecoding-walsender.md)) must be used to stream out data. Clients have to send `Standby status update (F)` (see [Streaming Replication Protocol](./protocol-replication.md)) messages, just like streaming replication clients do.

> **Note**
>
> A synchronous replica receiving changes via logical decoding will work in the scope of a single database. Since, in contrast to that, `synchronous_standby_names` currently is server wide, this means this technique will not work properly if more than one database is actively used.

## Caveats

In synchronous replication setup, a deadlock can happen, if the transaction has locked \[user\] catalog tables exclusively. See [Capabilities](./logicaldecoding-output-plugin.md#capabilities) for information on user catalog tables. This is because logical decoding of transactions can lock catalog tables to access them. To avoid this users must refrain from taking an exclusive lock on \[user\] catalog tables. This can happen in the following ways:

- Issuing an explicit `LOCK` on `pg_class` in a transaction.
- Perform `CLUSTER` on `pg_class` in a transaction.
- `PREPARE TRANSACTION` after `LOCK` command on `pg_class` and allow logical decoding of two-phase transactions.
- `PREPARE TRANSACTION` after `CLUSTER` command on `pg_trigger` and allow logical decoding of two-phase transactions. This will lead to deadlock only when published table have a trigger.
- Executing `TRUNCATE` on \[user\] catalog table in a transaction.

Note that these commands can cause deadlocks not only for the system catalog tables listed above but for other catalog tables.
