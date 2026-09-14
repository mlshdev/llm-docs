> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/logical-replication.sgml#logical-replication-config](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/logical-replication.sgml%23logical-replication-config)
> Canonical documentation: https://www.postgresql.org/docs/18/logical-replication-config.html

# Configuration Settings

Logical replication requires several configuration options to be set. These options are relevant only on one side of the replication.

## Publishers

[`wal_level`](./runtime-config-wal.md#guc-wal-level) must be set to `logical`.

[`max_replication_slots`](./runtime-config-replication.md#guc-max-replication-slots) must be set to at least the number of subscriptions expected to connect, plus some reserve for table synchronization.

Logical replication slots are also affected by [`idle_replication_slot_timeout`](./runtime-config-replication.md#guc-idle-replication-slot-timeout).

[`max_wal_senders`](./runtime-config-replication.md#guc-max-wal-senders) should be set to at least the same as `max_replication_slots`, plus the number of physical replicas that are connected at the same time.

Logical replication walsender is also affected by [`wal_sender_timeout`](./runtime-config-replication.md#guc-wal-sender-timeout).

## Subscribers

[`max_active_replication_origins`](./runtime-config-replication.md#guc-max-active-replication-origins) must be set to at least the number of subscriptions that will be added to the subscriber, plus some reserve for table synchronization.

[`max_logical_replication_workers`](./runtime-config-replication.md#guc-max-logical-replication-workers) must be set to at least the number of subscriptions (for leader apply workers), plus some reserve for the table synchronization workers and parallel apply workers.

[`max_worker_processes`](./runtime-config-resource.md#guc-max-worker-processes) may need to be adjusted to accommodate for replication workers, at least ([`max_logical_replication_workers`](./runtime-config-replication.md#guc-max-logical-replication-workers) + `1`). Note, some extensions and parallel queries also take worker slots from `max_worker_processes`.

[`max_sync_workers_per_subscription`](./runtime-config-replication.md#guc-max-sync-workers-per-subscription) controls the amount of parallelism of the initial data copy during the subscription initialization or when new tables are added.

[`max_parallel_apply_workers_per_subscription`](./runtime-config-replication.md#guc-max-parallel-apply-workers-per-subscription) controls the amount of parallelism for streaming of in-progress transactions with subscription parameter `streaming = parallel`.

Logical replication workers are also affected by [`wal_receiver_timeout`](./runtime-config-replication.md#guc-wal-receiver-timeout), [`wal_receiver_status_interval`](./runtime-config-replication.md#guc-wal-receiver-status-interval) and [`wal_retrieve_retry_interval`](./runtime-config-replication.md#guc-wal-retrieve-retry-interval).
