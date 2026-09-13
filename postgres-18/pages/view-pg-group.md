> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-group](https://www.postgresql.org/docs/18/view-pg-group.html)

# pg_group

The view `pg_group` exists for backwards compatibility: it emulates a catalog that existed in PostgreSQL before version 8.1. It shows the names and members of all roles that are marked as not `rolcanlogin`, which is an approximation to the set of roles that are being used as groups.

**pg_group Columns**

`groname` `name` (references [`pg_authid`](./catalog-pg-authid.md).`rolname`)

Name of the group

---

`grosysid` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

ID of this group

---

`grolist` `oid[]` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

An array containing the IDs of the roles in this group
