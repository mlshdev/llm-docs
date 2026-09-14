> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#views-overview](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/system-views.sgml%23views-overview)
> Canonical documentation: https://www.postgresql.org/docs/18/views-overview.html

# Overview

[System Views](./views-overview.md#system-views) lists the system views. More detailed documentation of each catalog follows below. Except where noted, all the views described here are read-only.

**System Views**

| View Name | Purpose |
| --- | --- |
| [`pg_aios`](./view-pg-aios.md) | In-use asynchronous IO handles |
| [`pg_available_extensions`](./view-pg-available-extensions.md) | available extensions |
| [`pg_available_extension_versions`](./view-pg-available-extension-versions.md) | available versions of extensions |
| [`pg_backend_memory_contexts`](./view-pg-backend-memory-contexts.md) | backend memory contexts |
| [`pg_config`](./view-pg-config.md) | compile-time configuration parameters |
| [`pg_cursors`](./view-pg-cursors.md) | open cursors |
| [`pg_file_settings`](./view-pg-file-settings.md) | summary of configuration file contents |
| [`pg_group`](./view-pg-group.md) | groups of database users |
| [`pg_hba_file_rules`](./view-pg-hba-file-rules.md) | summary of client authentication configuration file contents |
| [`pg_ident_file_mappings`](./view-pg-ident-file-mappings.md) | summary of client user name mapping configuration file contents |
| [`pg_indexes`](./view-pg-indexes.md) | indexes |
| [`pg_locks`](./view-pg-locks.md) | locks currently held or awaited |
| [`pg_matviews`](./view-pg-matviews.md) | materialized views |
| [`pg_policies`](./view-pg-policies.md) | policies |
| [`pg_prepared_statements`](./view-pg-prepared-statements.md) | prepared statements |
| [`pg_prepared_xacts`](./view-pg-prepared-xacts.md) | prepared transactions |
| [`pg_publication_tables`](./view-pg-publication-tables.md) | publications and information of their associated tables |
| [`pg_replication_origin_status`](./view-pg-replication-origin-status.md) | information about replication origins, including replication progress |
| [`pg_replication_slots`](./view-pg-replication-slots.md) | replication slot information |
| [`pg_roles`](./view-pg-roles.md) | database roles |
| [`pg_rules`](./view-pg-rules.md) | rules |
| [`pg_seclabels`](./view-pg-seclabels.md) | security labels |
| [`pg_sequences`](./view-pg-sequences.md) | sequences |
| [`pg_settings`](./view-pg-settings.md) | parameter settings |
| [`pg_shadow`](./view-pg-shadow.md) | database users |
| [`pg_shmem_allocations`](./view-pg-shmem-allocations.md) | shared memory allocations |
| [`pg_shmem_allocations_numa`](./view-pg-shmem-allocations-numa.md) | NUMA node mappings for shared memory allocations |
| [`pg_stats`](./view-pg-stats.md) | planner statistics |
| [`pg_stats_ext`](./view-pg-stats-ext.md) | extended planner statistics |
| [`pg_stats_ext_exprs`](./view-pg-stats-ext-exprs.md) | extended planner statistics for expressions |
| [`pg_tables`](./view-pg-tables.md) | tables |
| [`pg_timezone_abbrevs`](./view-pg-timezone-abbrevs.md) | time zone abbreviations |
| [`pg_timezone_names`](./view-pg-timezone-names.md) | time zone names |
| [`pg_user`](./view-pg-user.md) | database users |
| [`pg_user_mappings`](./view-pg-user-mappings.md) | user mappings |
| [`pg_views`](./view-pg-views.md) | views |
| [`pg_wait_events`](./view-pg-wait-events.md) | wait events |
