> Pinned source for Runpod main: [api-reference/billing/GET/billing/endpoints.mdx](https://github.com/runpod/docs/blob/ceb79977df03b21e40ceaec3fdea8c9869897b7e/api-reference/billing/GET/billing/endpoints.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/billing/GET/billing/endpoints

# Serverless billing history

`GET /billing/endpoints`

**Serverless billing history**

Retrieve billing information about your Serverless endpoints. Review request parameters, response fields, and errors for this Runpod API operation.

**Authentication:** `ApiKey`

**Parameters**

- `bucketSize` (query; string; enum: `hour`, `day`, `week`, `month`, `year`; default: `day`)
- `dataCenterId` (query; array; default: `["EU-RO-1","CA-MTL-1","EU-SE-1","US-IL-1","EUR-IS-1","EU-CZ-1","US-TX-3","EUR-IS-2","US-KS-2","US-GA-2","US-WA-1","US-TX-1","CA-MTL-3","EU-NL-1","US-TX-4","US-CA-2","US-NC-1","OC-AU-1","US-DE-1","EUR-IS-3","CA-MTL-2","AP-JP-1","EUR-NO-1","EU-FR-1","US-KS-3","US-GA-1"]`)
- `endpointId` (query; string)
- `endTime` (query; string; format: date-time)
- `gpuTypeId` (query; array)
- `grouping` (query; string; enum: `endpointId`, `podId`, `gpuTypeId`; default: `endpointId`)
- `imageName` (query; string)
- `startTime` (query; string; format: date-time)
- `templateId` (query; string)

**Responses**

- `200`: Successful operation.
  - Media type: `application/json`
    - Schema (array)
      - `items` (object)
        - `amount` (number): The amount charged for the group for the billing period, in USD.
          - Example: `100.5`
        - `diskSpaceBilledGb` (integer): The amount of disk space billed for the billing period, in gigabytes (GB). Does not apply to all resource types.
          - Example: `50`
        - `endpointId` (string): If grouping by endpoint ID, the endpoint ID of the group.
        - `gpuTypeId` (string): If grouping by GPU type ID, the GPU type ID of the group.
        - `podId` (string): If grouping by Pod ID, the Pod ID of the group.
        - `time` (string; format: date-time): The start of the period for which the billing record applies.
          - Example: `2023-01-01T00:00:00Z`
        - `timeBilledMs` (integer): The total time billed for the billing period, in milliseconds. Does not apply to all resource types.
          - Example: `3600000`
