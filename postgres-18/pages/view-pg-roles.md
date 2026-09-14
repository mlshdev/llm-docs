> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-roles](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/system-views.sgml%23view-pg-roles)
> Canonical documentation: https://www.postgresql.org/docs/18/view-pg-roles.html

# pg_roles

The view `pg_roles` provides access to information about database roles. This is simply a publicly readable view of [`pg_authid`](./catalog-pg-authid.md) that blanks out the password field.

**pg_roles Columns**

`rolname` `name`

Role name

---

`rolsuper` `bool`

Role has superuser privileges

---

`rolinherit` `bool`

Role automatically inherits privileges of roles it is a member of

---

`rolcreaterole` `bool`

Role can create more roles

---

`rolcreatedb` `bool`

Role can create databases

---

`rolcanlogin` `bool`

Role can log in. That is, this role can be given as the initial session authorization identifier

---

`rolreplication` `bool`

Role is a replication role. A replication role can initiate replication connections and create and drop replication slots.

---

`rolconnlimit` `int4`

For roles that can log in, this sets maximum number of concurrent connections this role can make. -1 means no limit.

---

`rolpassword` `text`

Not the password (always reads as ``)

---

`rolvaliduntil` `timestamptz`

Password expiry time (only used for password authentication); null if no expiration

---

`rolbypassrls` `bool`

Role bypasses every row-level security policy, see [Row Security Policies](./ddl-rowsecurity.md) for more information.

---

`rolconfig` `text[]`

Role-specific defaults for run-time configuration variables

---

`oid` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

ID of role
