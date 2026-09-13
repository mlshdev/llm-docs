> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/monitoring.sgml#monitoring](https://www.postgresql.org/docs/18/monitoring.html)

# Monitoring Database Activity

A database administrator frequently wonders, “What is the system doing right now?” This chapter discusses how to find that out.

Several tools are available for monitoring database activity and analyzing performance. Most of this chapter is devoted to describing PostgreSQL's cumulative statistics system, but one should not neglect regular Unix monitoring programs such as `ps`, `top`, `iostat`, and `vmstat`. Also, once one has identified a poorly-performing query, further investigation might be needed using PostgreSQL's [`EXPLAIN`](./sql-explain.md) command. [Using EXPLAIN](./using-explain.md) discusses `EXPLAIN` and other methods for understanding the behavior of an individual query.
