> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/checkpoint.sgml#sql-checkpoint](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/checkpoint.sgml%23sql-checkpoint)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-checkpoint.html

# CHECKPOINT

force a write-ahead log checkpoint

## Synopsis

```
CHECKPOINT
```

## Description

A checkpoint is a point in the write-ahead log sequence at which all data files have been updated to reflect the information in the log. All data files will be flushed to disk. Refer to [WAL Configuration](./wal-configuration.md) for more details about what happens during a checkpoint.

The `CHECKPOINT` command forces an immediate checkpoint when the command is issued, without waiting for a regular checkpoint scheduled by the system (controlled by the settings in [Checkpoints](./runtime-config-wal.md#checkpoints)). `CHECKPOINT` is not intended for use during normal operation.

If executed during recovery, the `CHECKPOINT` command will force a restartpoint (see [WAL Configuration](./wal-configuration.md)) rather than writing a new checkpoint.

Only superusers or users with the privileges of the [Predefined Roles](./predefined-roles.md#predefined-role-pg-checkpoint) role can call `CHECKPOINT`.

## Compatibility

The `CHECKPOINT` command is a PostgreSQL language extension.
