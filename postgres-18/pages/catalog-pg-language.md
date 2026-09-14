> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-language](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-language)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-language.html

# pg_language

The catalog `pg_language` registers languages in which you can write functions or stored procedures. See [CREATE LANGUAGE](./sql-createlanguage.md) and [Procedural Languages](./xplang.md) for more information about language handlers.

**pg_language Columns**

`oid` `oid`

Row identifier

---

`lanname` `name`

Name of the language

---

`lanowner` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

Owner of the language

---

`lanispl` `bool`

This is false for internal languages (such as SQL) and true for user-defined languages. Currently, `pg_dump` still uses this to determine which languages need to be dumped, but this might be replaced by a different mechanism in the future.

---

`lanpltrusted` `bool`

True if this is a trusted language, which means that it is believed not to grant access to anything outside the normal SQL execution environment. Only superusers can create functions in untrusted languages.

---

`lanplcallfoid` `oid` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

For noninternal languages this references the language handler, which is a special function that is responsible for executing all functions that are written in the particular language. Zero for internal languages.

---

`laninline` `oid` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

This references a function that is responsible for executing “inline” anonymous code blocks ([DO](./sql-do.md) blocks). Zero if inline blocks are not supported.

---

`lanvalidator` `oid` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

This references a language validator function that is responsible for checking the syntax and validity of new functions when they are created. Zero if no validator is provided.

---

`lanacl` `aclitem[]`

Access privileges; see [Privileges](./ddl-priv.md) for details
