> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-ts-config-map](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-ts-config-map)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-ts-config-map.html

# pg_ts_config_map

The `pg_ts_config_map` catalog contains entries showing which text search dictionaries should be consulted, and in what order, for each output token type of each text search configuration's parser.

PostgreSQL's text search features are described at length in [Full Text Search](./textsearch.md).

**pg_ts_config_map Columns**

`mapcfg` `oid` (references [`pg_ts_config`](./catalog-pg-ts-config.md).`oid`)

The OID of the [`pg_ts_config`](./catalog-pg-ts-config.md) entry owning this map entry

---

`maptokentype` `int4`

A token type emitted by the configuration's parser

---

`mapseqno` `int4`

Order in which to consult this entry (lower `mapseqno`s first)

---

`mapdict` `oid` (references [`pg_ts_dict`](./catalog-pg-ts-dict.md).`oid`)

The OID of the text search dictionary to consult
