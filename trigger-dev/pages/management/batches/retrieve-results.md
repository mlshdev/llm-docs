> Release-pinned source for Trigger.dev v4.5.16: [docs/management/batches/retrieve-results.mdx](https://trigger.dev/docs/management/batches/retrieve-results)

# Retrieve batch results

`GET /api/v1/batches/{batchId}/results`

**Retrieve batch results**

Returns the execution results of all completed runs in a batch. Only finished runs (successful or failed) are included in the items array — runs that are still executing are omitted. Returns 404 if the batch doesn't exist.

**Parameters**

- `batchId` (path, required): The ID of the batch, starts with `batch_`.

**Responses**

- `200`: Successful request
- `401`: Unauthorized request
- `404`: Batch not found
