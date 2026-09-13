> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-shmem-allocations](https://www.postgresql.org/docs/18/view-pg-shmem-allocations.html)

# pg_shmem_allocations

The `pg_shmem_allocations` view shows allocations made from the server's main shared memory segment. This includes both memory allocated by PostgreSQL itself and memory allocated by extensions using the mechanisms detailed in [Shared Memory](./xfunc-c.md#shared-memory).

Note that this view does not include memory allocated using the dynamic shared memory infrastructure.

**pg_shmem_allocations Columns**

`name` `text`

The name of the shared memory allocation. NULL for unused memory and `<anonymous>` for anonymous allocations.

---

`off` `int8`

The offset at which the allocation starts. NULL for anonymous allocations, since details related to them are not known.

---

`size` `int8`

Size of the allocation in bytes

---

`allocated_size` `int8`

Size of the allocation in bytes including padding. For anonymous allocations, no information about padding is available, so the `size` and `allocated_size` columns will always be equal. Padding is not meaningful for free memory, so the columns will be equal in that case also.

Anonymous allocations are allocations that have been made with `ShmemAlloc()` directly, rather than via `ShmemInitStruct()` or `ShmemInitHash()`.

By default, the `pg_shmem_allocations` view can be read only by superusers or roles with privileges of the `pg_read_all_stats` role.
