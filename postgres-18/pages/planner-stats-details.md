> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/planstats.sgml#planner-stats-details](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/planstats.sgml%23planner-stats-details)
> Canonical documentation: https://www.postgresql.org/docs/18/planner-stats-details.html

# How the Planner Uses Statistics

This chapter builds on the material covered in [Using EXPLAIN](./using-explain.md) and [Statistics Used by the Planner](./planner-stats.md) to show some additional details about how the planner uses the system statistics to estimate the number of rows each part of a query might return. This is a significant part of the planning process, providing much of the raw material for cost calculation.

The intent of this chapter is not to document the code in detail, but to present an overview of how it works. This will perhaps ease the learning curve for someone who subsequently wishes to read the code.
