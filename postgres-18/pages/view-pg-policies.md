> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-policies](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/system-views.sgml%23view-pg-policies)
> Canonical documentation: https://www.postgresql.org/docs/18/view-pg-policies.html

# pg_policies

The view `pg_policies` provides access to useful information about each row-level security policy in the database.

**pg_policies Columns**

`schemaname` `name` (references [`pg_namespace`](./catalog-pg-namespace.md).`nspname`)

Name of schema containing table policy is on

---

`tablename` `name` (references [`pg_class`](./catalog-pg-class.md).`relname`)

Name of table policy is on

---

`policyname` `name` (references [`pg_policy`](./catalog-pg-policy.md).`polname`)

Name of policy

---

`permissive` `text`

Is the policy permissive or restrictive?

---

`roles` `name[]`

The roles to which this policy applies

---

`cmd` `text`

The command type to which the policy is applied

---

`qual` `text`

The expression added to the security barrier qualifications for queries that this policy applies to

---

`with_check` `text`

The expression added to the WITH CHECK qualifications for queries that attempt to add rows to this table
