> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-datatypes](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-datatypes)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-datatypes.html

# Data Types

The columns of the information schema views use special data types that are defined in the information schema. These are defined as simple domains over ordinary built-in types. You should not use these types for work outside the information schema, but your applications must be prepared for them if they select from the information schema.

These types are:

**`cardinal_number`**

  A nonnegative integer.

**`character_data`**

  A character string (without specific maximum length).

**`sql_identifier`**

  A character string. This type is used for SQL identifiers, the type `character_data` is used for any other kind of text data.

**`time_stamp`**

  A domain over the type `timestamp with time zone`

**`yes_or_no`**

  A character string domain that contains either `YES` or `NO`. This is used to represent Boolean (true/false) data in the information schema. (The information schema was invented before the type `boolean` was added to the SQL standard, so this convention is necessary to keep the information schema backward compatible.)

Every column in the information schema has one of these five types.
