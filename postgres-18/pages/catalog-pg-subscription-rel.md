> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-subscription-rel](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-subscription-rel)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-subscription-rel.html

# pg_subscription_rel

The catalog `pg_subscription_rel` contains the state for each replicated relation in each subscription. This is a many-to-many mapping.

This catalog only contains tables known to the subscription after running either [`CREATE SUBSCRIPTION`](./sql-createsubscription.md) or [`ALTER SUBSCRIPTION ... REFRESH PUBLICATION`](./sql-altersubscription.md).

**pg_subscription_rel Columns**

`srsubid` `oid` (references [`pg_subscription`](./catalog-pg-subscription.md).`oid`)

Reference to subscription

---

`srrelid` `oid` (references [`pg_class`](./catalog-pg-class.md).`oid`)

Reference to relation

---

`srsubstate` `char`

State code: `i` = initialize, `d` = data is being copied, `f` = finished table copy, `s` = synchronized, `r` = ready (normal replication)

---

`srsublsn` `pg_lsn`

Remote LSN of the state change used for synchronization coordination when in `s` or `r` states, otherwise null
