> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-foreign-server](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-foreign-server)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-foreign-server.html

# pg_foreign_server

The catalog `pg_foreign_server` stores foreign server definitions. A foreign server describes a source of external data, such as a remote server. Foreign servers are accessed via foreign-data wrappers.

**pg_foreign_server Columns**

`oid` `oid`

Row identifier

---

`srvname` `name`

Name of the foreign server

---

`srvowner` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

Owner of the foreign server

---

`srvfdw` `oid` (references [`pg_foreign_data_wrapper`](./catalog-pg-foreign-data-wrapper.md).`oid`)

OID of the foreign-data wrapper of this foreign server

---

`srvtype` `text`

Type of the server (optional)

---

`srvversion` `text`

Version of the server (optional)

---

`srvacl` `aclitem[]`

Access privileges; see [Privileges](./ddl-priv.md) for details

---

`srvoptions` `text[]`

Foreign server specific options, as “keyword=value” strings
