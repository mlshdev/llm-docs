> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/logical-replication.sgml#logical-replication-monitoring](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/logical-replication.sgml%23logical-replication-monitoring)
> Canonical documentation: https://www.postgresql.org/docs/18/logical-replication-monitoring.html

# Monitoring

Because logical replication is based on a similar architecture as [physical streaming replication](./warm-standby.md#streaming-replication), the monitoring on a publication node is similar to monitoring of a physical replication primary (see [Monitoring](./warm-standby.md#monitoring)).

The monitoring information about subscription is visible in [`pg_stat_subscription`](./monitoring-stats.md#pgstatsubscription). This view contains one row for every subscription worker. A subscription can have zero or more active subscription workers depending on its state.

Normally, there is a single apply process running for an enabled subscription. A disabled subscription or a crashed subscription will have zero rows in this view. If the initial data synchronization of any table is in progress, there will be additional workers for the tables being synchronized. Moreover, if the [`streaming`](./sql-createsubscription.md#sql-createsubscription-params-with-streaming) transaction is applied in parallel, there may be additional parallel apply workers.
