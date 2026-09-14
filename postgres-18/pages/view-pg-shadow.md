> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-shadow](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/system-views.sgml%23view-pg-shadow)
> Canonical documentation: https://www.postgresql.org/docs/18/view-pg-shadow.html

# pg_shadow

The view `pg_shadow` exists for backwards compatibility: it emulates a catalog that existed in PostgreSQL before version 8.1. It shows properties of all roles that are marked as `rolcanlogin` in [`pg_authid`](./catalog-pg-authid.md).

The name stems from the fact that this table should not be readable by the public since it contains passwords. [`pg_user`](./view-pg-user.md) is a publicly readable view on `pg_shadow` that blanks out the password field.

**pg_shadow Columns**

`usename` `name` (references [`pg_authid`](./catalog-pg-authid.md).`rolname`)

User name

---

`usesysid` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

ID of this user

---

`usecreatedb` `bool`

User can create databases

---

`usesuper` `bool`

User is a superuser

---

`userepl` `bool`

User can initiate streaming replication and put the system in and out of backup mode.

---

`usebypassrls` `bool`

User bypasses every row-level security policy, see [Row Security Policies](./ddl-rowsecurity.md) for more information.

---

`passwd` `text`

Encrypted password; null if none. See [`pg_authid`](./catalog-pg-authid.md) for details of how encrypted passwords are stored.

---

`valuntil` `timestamptz`

Password expiry time (only used for password authentication)

---

`useconfig` `text[]`

Session defaults for run-time configuration variables
