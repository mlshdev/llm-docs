> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalogs-overview](https://www.postgresql.org/docs/18/catalogs-overview.html)

# Overview

[System Catalogs](./catalogs-overview.md#system-catalogs) lists the system catalogs. More detailed documentation of each catalog follows below.

Most system catalogs are copied from the template database during database creation and are thereafter database-specific. A few catalogs are physically shared across all databases in a cluster; these are noted in the descriptions of the individual catalogs.

**System Catalogs**

| Catalog Name | Purpose |
| --- | --- |
| [`pg_aggregate`](./catalog-pg-aggregate.md) | aggregate functions |
| [`pg_am`](./catalog-pg-am.md) | relation access methods |
| [`pg_amop`](./catalog-pg-amop.md) | access method operators |
| [`pg_amproc`](./catalog-pg-amproc.md) | access method support functions |
| [`pg_attrdef`](./catalog-pg-attrdef.md) | column default values |
| [`pg_attribute`](./catalog-pg-attribute.md) | table columns (“attributes”) |
| [`pg_authid`](./catalog-pg-authid.md) | authorization identifiers (roles) |
| [`pg_auth_members`](./catalog-pg-auth-members.md) | authorization identifier membership relationships |
| [`pg_cast`](./catalog-pg-cast.md) | casts (data type conversions) |
| [`pg_class`](./catalog-pg-class.md) | tables, indexes, sequences, views (“relations”) |
| [`pg_collation`](./catalog-pg-collation.md) | collations (locale information) |
| [`pg_constraint`](./catalog-pg-constraint.md) | check constraints, unique constraints, primary key constraints, foreign key constraints |
| [`pg_conversion`](./catalog-pg-conversion.md) | encoding conversion information |
| [`pg_database`](./catalog-pg-database.md) | databases within this database cluster |
| [`pg_db_role_setting`](./catalog-pg-db-role-setting.md) | per-role and per-database settings |
| [`pg_default_acl`](./catalog-pg-default-acl.md) | default privileges for object types |
| [`pg_depend`](./catalog-pg-depend.md) | dependencies between database objects |
| [`pg_description`](./catalog-pg-description.md) | descriptions or comments on database objects |
| [`pg_enum`](./catalog-pg-enum.md) | enum label and value definitions |
| [`pg_event_trigger`](./catalog-pg-event-trigger.md) | event triggers |
| [`pg_extension`](./catalog-pg-extension.md) | installed extensions |
| [`pg_foreign_data_wrapper`](./catalog-pg-foreign-data-wrapper.md) | foreign-data wrapper definitions |
| [`pg_foreign_server`](./catalog-pg-foreign-server.md) | foreign server definitions |
| [`pg_foreign_table`](./catalog-pg-foreign-table.md) | additional foreign table information |
| [`pg_index`](./catalog-pg-index.md) | additional index information |
| [`pg_inherits`](./catalog-pg-inherits.md) | table inheritance hierarchy |
| [`pg_init_privs`](./catalog-pg-init-privs.md) | object initial privileges |
| [`pg_language`](./catalog-pg-language.md) | languages for writing functions |
| [`pg_largeobject`](./catalog-pg-largeobject.md) | data pages for large objects |
| [`pg_largeobject_metadata`](./catalog-pg-largeobject-metadata.md) | metadata for large objects |
| [`pg_namespace`](./catalog-pg-namespace.md) | schemas |
| [`pg_opclass`](./catalog-pg-opclass.md) | access method operator classes |
| [`pg_operator`](./catalog-pg-operator.md) | operators |
| [`pg_opfamily`](./catalog-pg-opfamily.md) | access method operator families |
| [`pg_parameter_acl`](./catalog-pg-parameter-acl.md) | configuration parameters for which privileges have been granted |
| [`pg_partitioned_table`](./catalog-pg-partitioned-table.md) | information about partition key of tables |
| [`pg_policy`](./catalog-pg-policy.md) | row-security policies |
| [`pg_proc`](./catalog-pg-proc.md) | functions and procedures |
| [`pg_publication`](./catalog-pg-publication.md) | publications for logical replication |
| [`pg_publication_namespace`](./catalog-pg-publication-namespace.md) | schema to publication mapping |
| [`pg_publication_rel`](./catalog-pg-publication-rel.md) | relation to publication mapping |
| [`pg_range`](./catalog-pg-range.md) | information about range types |
| [`pg_replication_origin`](./catalog-pg-replication-origin.md) | registered replication origins |
| [`pg_rewrite`](./catalog-pg-rewrite.md) | query rewrite rules |
| [`pg_seclabel`](./catalog-pg-seclabel.md) | security labels on database objects |
| [`pg_sequence`](./catalog-pg-sequence.md) | information about sequences |
| [`pg_shdepend`](./catalog-pg-shdepend.md) | dependencies on shared objects |
| [`pg_shdescription`](./catalog-pg-shdescription.md) | comments on shared objects |
| [`pg_shseclabel`](./catalog-pg-shseclabel.md) | security labels on shared database objects |
| [`pg_statistic`](./catalog-pg-statistic.md) | planner statistics |
| [`pg_statistic_ext`](./catalog-pg-statistic-ext.md) | extended planner statistics (definition) |
| [`pg_statistic_ext_data`](./catalog-pg-statistic-ext-data.md) | extended planner statistics (built statistics) |
| [`pg_subscription`](./catalog-pg-subscription.md) | logical replication subscriptions |
| [`pg_subscription_rel`](./catalog-pg-subscription-rel.md) | relation state for subscriptions |
| [`pg_tablespace`](./catalog-pg-tablespace.md) | tablespaces within this database cluster |
| [`pg_transform`](./catalog-pg-transform.md) | transforms (data type to procedural language conversions) |
| [`pg_trigger`](./catalog-pg-trigger.md) | triggers |
| [`pg_ts_config`](./catalog-pg-ts-config.md) | text search configurations |
| [`pg_ts_config_map`](./catalog-pg-ts-config-map.md) | text search configurations' token mappings |
| [`pg_ts_dict`](./catalog-pg-ts-dict.md) | text search dictionaries |
| [`pg_ts_parser`](./catalog-pg-ts-parser.md) | text search parsers |
| [`pg_ts_template`](./catalog-pg-ts-template.md) | text search templates |
| [`pg_type`](./catalog-pg-type.md) | data types |
| [`pg_user_mapping`](./catalog-pg-user-mapping.md) | mappings of users to foreign servers |
