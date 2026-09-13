> Commit-pinned source for Runpod main: [api-reference/pods/PATCH/pods/podId.mdx](https://docs.runpod.io/api-reference/pods/PATCH/pods/podId)

# Update a Pod

`PATCH /pods/{podId}`

**Update a Pod**

Update a Pod, potentially triggering a reset. Review authentication, request parameters, response fields, and errors for this Runpod API operation.

**Parameters**

- `podId` (path, required): ID of Pod that needs to be updated.

**Request body**: Form data to update a Pod.

**Responses**

- `200`: Pod successfully updated.
- `400`: Invalid input.
