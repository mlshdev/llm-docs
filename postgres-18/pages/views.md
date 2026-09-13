> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#views](https://www.postgresql.org/docs/18/views.html)

# System Views

In addition to the system catalogs, PostgreSQL provides a number of built-in views. Some system views provide convenient access to some commonly used queries on the system catalogs. Other views provide access to internal server state.

The information schema ([The Information Schema](./information-schema.md)) provides an alternative set of views which overlap the functionality of the system views. Since the information schema is SQL-standard whereas the views described here are PostgreSQL-specific, it's usually better to use the information schema if it provides all the information you need.

[System Views](./views-overview.md#system-views) lists the system views described here. More detailed documentation of each view follows below. There are some additional views that provide access to accumulated statistics; they are described in [Collected Statistics Views](./monitoring-stats.md#collected-statistics-views).
