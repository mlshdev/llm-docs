> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-domain-udt-usage](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-domain-udt-usage)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-domain-udt-usage.html

# domain_udt_usage

The view `domain_udt_usage` identifies all domains that are based on data types owned by a currently enabled role. Note that in PostgreSQL, built-in data types behave like user-defined types, so they are included here as well.

**domain_udt_usage Columns**

`udt_catalog` `sql_identifier`

Name of the database that the domain data type is defined in (always the current database)

---

`udt_schema` `sql_identifier`

Name of the schema that the domain data type is defined in

---

`udt_name` `sql_identifier`

Name of the domain data type

---

`domain_catalog` `sql_identifier`

Name of the database that contains the domain (always the current database)

---

`domain_schema` `sql_identifier`

Name of the schema that contains the domain

---

`domain_name` `sql_identifier`

Name of the domain
