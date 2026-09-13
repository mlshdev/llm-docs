> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-foreign-table](https://www.postgresql.org/docs/18/catalog-pg-foreign-table.html)

# pg_foreign_table

The catalog `pg_foreign_table` contains auxiliary information about foreign tables. A foreign table is primarily represented by a [`pg_class`](./catalog-pg-class.md) entry, just like a regular table. Its `pg_foreign_table` entry contains the information that is pertinent only to foreign tables and not any other kind of relation.

**pg_foreign_table Columns**

`ftrelid` `oid` (references [`pg_class`](./catalog-pg-class.md).`oid`)

The OID of the [`pg_class`](./catalog-pg-class.md) entry for this foreign table

---

`ftserver` `oid` (references [`pg_foreign_server`](./catalog-pg-foreign-server.md).`oid`)

OID of the foreign server for this foreign table

---

`ftoptions` `text[]`

Foreign table options, as “keyword=value” strings
