> Commit-pinned source for Runpod main: [api-reference/pods/POST/pods/podId/update.mdx](https://docs.runpod.io/api-reference/pods/POST/pods/podId/update)

# Update a Pod

`POST /pods/{podId}/update`

**Update a Pod**

Update a Pod - synonym for PATCH /pods/{podId}. Review request parameters, response fields, and errors for this Runpod API operation.

**Parameters**

- `podId` (path, required): ID of Pod that needs to be updated.

**Request body**: Form data to update a Pod.

**Responses**

- `200`: Pod successfully updated.
- `400`: Invalid input.
