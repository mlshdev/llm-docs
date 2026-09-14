> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-sql-sizing](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-sql-sizing)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-sql-sizing.html

# sql_sizing

The table `sql_sizing` contains information about various size limits and maximum values in PostgreSQL. This information is primarily intended for use in the context of the ODBC interface; users of other interfaces will probably find this information to be of little use. For this reason, the individual sizing items are not described here; you will find them in the description of the ODBC interface.

**sql_sizing Columns**

`sizing_id` `cardinal_number`

Identifier of the sizing item

---

`sizing_name` `character_data`

Descriptive name of the sizing item

---

`supported_value` `cardinal_number`

Value of the sizing item, or 0 if the size is unlimited or cannot be determined, or null if the features for which the sizing item is applicable are not supported

---

`comments` `character_data`

Possibly a comment pertaining to the sizing item
