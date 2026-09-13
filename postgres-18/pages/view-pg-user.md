> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-user](https://www.postgresql.org/docs/18/view-pg-user.html)

# pg_user

The view `pg_user` provides access to information about database users. This is simply a publicly readable view of [`pg_shadow`](./view-pg-shadow.md) that blanks out the password field.

**pg_user Columns**

`usename` `name`

User name

---

`usesysid` `oid`

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

Not the password (always reads as ``)

---

`valuntil` `timestamptz`

Password expiry time (only used for password authentication)

---

`useconfig` `text[]`

Session defaults for run-time configuration variables
