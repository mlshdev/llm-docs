> Commit-pinned source for Runpod main: [api-reference/pods/GET/pods.mdx](https://docs.runpod.io/api-reference/pods/GET/pods)

# List Pods

`GET /pods`

**List Pods**

Returns a list of Pods. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Parameters**

- `computeType` (query)
- `cpuFlavorId` (query)
- `dataCenterId` (query)
- `desiredStatus` (query)
- `endpointId` (query)
- `gpuTypeId` (query)
- `id` (query)
- `imageName` (query)
- `includeMachine` (query)
- `includeNetworkVolume` (query)
- `includeSavingsPlans` (query)
- `includeTemplate` (query)
- `includeWorkers` (query)
- `name` (query)
- `networkVolumeId` (query)
- `templateId` (query)

**Responses**

- `200`: Successful operation.
- `400`: Invalid ID supplied.
- `404`: Pod not found.
