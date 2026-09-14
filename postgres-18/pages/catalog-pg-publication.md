> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-publication](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-publication)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-publication.html

# pg_publication

The catalog `pg_publication` contains all publications created in the database. For more on publications see [Publication](./logical-replication-publication.md).

**pg_publication Columns**

`oid` `oid`

Row identifier

---

`pubname` `name`

Name of the publication

---

`pubowner` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

Owner of the publication

---

`puballtables` `bool`

If true, this publication automatically includes all tables in the database, including any that will be created in the future.

---

`pubinsert` `bool`

If true, [INSERT](./sql-insert.md) operations are replicated for tables in the publication.

---

`pubupdate` `bool`

If true, [UPDATE](./sql-update.md) operations are replicated for tables in the publication.

---

`pubdelete` `bool`

If true, [DELETE](./sql-delete.md) operations are replicated for tables in the publication.

---

`pubtruncate` `bool`

If true, [TRUNCATE](./sql-truncate.md) operations are replicated for tables in the publication.

---

`pubviaroot` `bool`

If true, operations on a leaf partition are replicated using the identity and schema of its topmost partitioned ancestor mentioned in the publication instead of its own.

---

`pubgencols` `char`

Controls how to handle generated column replication when there is no publication column list: `n` = generated columns in the tables associated with the publication should not be replicated, `s` = stored generated columns in the tables associated with the publication should be replicated.
