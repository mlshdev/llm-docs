> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-publication-namespace](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-publication-namespace)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-publication-namespace.html

# pg_publication_namespace

The catalog `pg_publication_namespace` contains the mapping between schemas and publications in the database. This is a many-to-many mapping.

**pg_publication_namespace Columns**

`oid` `oid`

Row identifier

---

`pnpubid` `oid` (references [`pg_publication`](./catalog-pg-publication.md).`oid`)

Reference to publication

---

`pnnspid` `oid` (references [`pg_namespace`](./catalog-pg-namespace.md).`oid`)

Reference to schema
