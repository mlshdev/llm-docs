> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-user-mappings](https://www.postgresql.org/docs/18/view-pg-user-mappings.html)

# pg_user_mappings

The view `pg_user_mappings` provides access to information about user mappings. This is essentially a publicly readable view of [`pg_user_mapping`](./catalog-pg-user-mapping.md) that leaves out the options field if the user has no rights to use it.

**pg_user_mappings Columns**

`umid` `oid` (references [`pg_user_mapping`](./catalog-pg-user-mapping.md).`oid`)

OID of the user mapping

---

`srvid` `oid` (references [`pg_foreign_server`](./catalog-pg-foreign-server.md).`oid`)

The OID of the foreign server that contains this mapping

---

`srvname` `name` (references [`pg_foreign_server`](./catalog-pg-foreign-server.md).`srvname`)

Name of the foreign server

---

`umuser` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

OID of the local role being mapped, or zero if the user mapping is public

---

`usename` `name`

Name of the local user to be mapped

---

`umoptions` `text[]`

User mapping specific options, as “keyword=value” strings

To protect password information stored as a user mapping option, the `umoptions` column will read as null unless one of the following applies:

- current user is the user being mapped, and owns the server or holds `USAGE` privilege on it
- current user is the server owner and mapping is for `PUBLIC`
- current user is a superuser
