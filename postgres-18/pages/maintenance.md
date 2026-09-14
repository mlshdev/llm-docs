> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/maintenance.sgml#maintenance](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/maintenance.sgml%23maintenance)
> Canonical documentation: https://www.postgresql.org/docs/18/maintenance.html

# Routine Database Maintenance Tasks

PostgreSQL, like any database software, requires that certain tasks be performed regularly to achieve optimum performance. The tasks discussed here are *required*, but they are repetitive in nature and can easily be automated using standard tools such as `cron` scripts or Windows' `Task Scheduler`. It is the database administrator's responsibility to set up appropriate scripts, and to check that they execute successfully.

One obvious maintenance task is the creation of backup copies of the data on a regular schedule. Without a recent backup, you have no chance of recovery after a catastrophe (disk failure, fire, mistakenly dropping a critical table, etc.). The backup and recovery mechanisms available in PostgreSQL are discussed at length in [Backup and Restore](./backup.md).

The other main category of maintenance task is periodic “vacuuming” of the database. This activity is discussed in [Routine Vacuuming](./routine-vacuuming.md). Closely related to this is updating the statistics that will be used by the query planner, as discussed in [Updating Planner Statistics](./routine-vacuuming.md#updating-planner-statistics).

Another task that might need periodic attention is log file management. This is discussed in [Log File Maintenance](./logfile-maintenance.md).

[`check_postgres`](https://bucardo.org/check_postgres/) is available for monitoring database health and reporting unusual conditions. `check_postgres` integrates with Nagios and MRTG, but can be run standalone too.

PostgreSQL is low-maintenance compared to some other database management systems. Nonetheless, appropriate attention to these tasks will go far towards ensuring a pleasant and productive experience with the system.
