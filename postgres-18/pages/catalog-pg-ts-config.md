> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-ts-config](https://www.postgresql.org/docs/18/catalog-pg-ts-config.html)

# pg_ts_config

The `pg_ts_config` catalog contains entries representing text search configurations. A configuration specifies a particular text search parser and a list of dictionaries to use for each of the parser's output token types. The parser is shown in the `pg_ts_config` entry, but the token-to-dictionary mapping is defined by subsidiary entries in [`pg_ts_config_map`](./catalog-pg-ts-config-map.md).

PostgreSQL's text search features are described at length in [Full Text Search](./textsearch.md).

**pg_ts_config Columns**

`oid` `oid`

Row identifier

---

`cfgname` `name`

Text search configuration name

---

`cfgnamespace` `oid` (references [`pg_namespace`](./catalog-pg-namespace.md).`oid`)

The OID of the namespace that contains this configuration

---

`cfgowner` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

Owner of the configuration

---

`cfgparser` `oid` (references [`pg_ts_parser`](./catalog-pg-ts-parser.md).`oid`)

The OID of the text search parser for this configuration
