> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-shmem-allocations-numa](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/system-views.sgml%23view-pg-shmem-allocations-numa)
> Canonical documentation: https://www.postgresql.org/docs/18/view-pg-shmem-allocations-numa.html

# pg_shmem_allocations_numa

The `pg_shmem_allocations_numa` shows how shared memory allocations in the server's main shared memory segment are distributed across NUMA nodes. This includes both memory allocated by PostgreSQL itself and memory allocated by extensions using the mechanisms detailed in [Shared Memory](./xfunc-c.md#shared-memory). This view will output multiple rows for each of the shared memory segments provided that they are spread across multiple NUMA nodes. This view should not be queried by monitoring systems as it is very slow and may end up allocating shared memory in case it was not used earlier. Current limitation for this view is that won't show anonymous shared memory allocations.

Note that this view does not include memory allocated using the dynamic shared memory infrastructure.

> **Warning**
>
> When determining the NUMA node, the view touches all memory pages for the shared memory segment. This will force allocation of the shared memory, if it wasn't allocated already, and the memory may get allocated in a single NUMA node (depending on system configuration).

**pg_shmem_allocations_numa Columns**

`name` `text`

The name of the shared memory allocation.

---

`numa_node` `int4`

ID of NUMA node

---

`size` `int8`

Size of the allocation on this particular NUMA memory node in bytes

By default, the `pg_shmem_allocations_numa` view can be read only by superusers or roles with privileges of the `pg_read_all_stats` role.
