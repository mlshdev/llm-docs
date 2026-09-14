> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/func.sgml#functions-merge-support](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/func.sgml%23functions-merge-support)
> Canonical documentation: https://www.postgresql.org/docs/18/functions-merge-support.html

# Merge Support Functions

PostgreSQL includes one merge support function that may be used in the `RETURNING` list of a [MERGE](./sql-merge.md) command to identify the action taken for each row; see [Merge Support Functions](./functions-merge-support.md#merge-support-functions).

**Merge Support Functions**

`merge_action` ( ) → `text`

Returns the merge action command executed for the current row. This will be `'INSERT'`, `'UPDATE'`, or `'DELETE'`.

Example:

```
MERGE INTO products p
  USING stock s ON p.product_id = s.product_id
  WHEN MATCHED AND s.quantity > 0 THEN
    UPDATE SET in_stock = true, quantity = s.quantity
  WHEN MATCHED THEN
    UPDATE SET in_stock = false, quantity = 0
  WHEN NOT MATCHED THEN
    INSERT (product_id, in_stock, quantity)
      VALUES (s.product_id, true, s.quantity)
  RETURNING merge_action(), p.*;

 merge_action | product_id | in_stock | quantity
--------------+------------+----------+----------
 UPDATE       |       1001 | t        |       50
 UPDATE       |       1002 | f        |        0
 INSERT       |       1003 | t        |       10
```

Note that this function can only be used in the `RETURNING` list of a `MERGE` command. It is an error to use it in any other part of a query.
