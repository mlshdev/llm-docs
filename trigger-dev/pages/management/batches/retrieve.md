> Release-pinned source for Trigger.dev v4.5.16: [docs/management/batches/retrieve.mdx](https://trigger.dev/docs/management/batches/retrieve)

# Retrieve a batch

`GET /api/v1/batches/{batchId}`

**Retrieve a batch**

Retrieve a batch by its ID, including its status and the IDs of all runs in the batch.

**Parameters**

- `batchId` (path, required): The ID of the batch, starts with `batch_`.

**Responses**

- `200`: Successful request
- `401`: Unauthorized request
- `404`: Batch not found
