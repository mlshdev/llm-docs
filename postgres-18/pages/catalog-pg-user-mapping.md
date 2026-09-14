> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-user-mapping](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-user-mapping)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-user-mapping.html

# pg_user_mapping

The catalog `pg_user_mapping` stores the mappings from local user to remote. Access to this catalog is restricted from normal users, use the view [`pg_user_mappings`](./view-pg-user-mappings.md) instead.

**pg_user_mapping Columns**

`oid` `oid`

Row identifier

---

`umuser` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

OID of the local role being mapped, or zero if the user mapping is public

---

`umserver` `oid` (references [`pg_foreign_server`](./catalog-pg-foreign-server.md).`oid`)

The OID of the foreign server that contains this mapping

---

`umoptions` `text[]`

User mapping specific options, as “keyword=value” strings
