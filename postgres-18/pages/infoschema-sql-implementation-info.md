> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-sql-implementation-info](https://www.postgresql.org/docs/18/infoschema-sql-implementation-info.html)

# sql_implementation_info

The table `sql_implementation_info` contains information about various aspects that are left implementation-defined by the SQL standard. This information is primarily intended for use in the context of the ODBC interface; users of other interfaces will probably find this information to be of little use. For this reason, the individual implementation information items are not described here; you will find them in the description of the ODBC interface.

**sql_implementation_info Columns**

`implementation_info_id` `character_data`

Identifier string of the implementation information item

---

`implementation_info_name` `character_data`

Descriptive name of the implementation information item

---

`integer_value` `cardinal_number`

Value of the implementation information item, or null if the value is contained in the column `character_value`

---

`character_value` `character_data`

Value of the implementation information item, or null if the value is contained in the column `integer_value`

---

`comments` `character_data`

Possibly a comment pertaining to the implementation information item
