> Pinned source for Runpod main: [api-reference/billing/GET/billing/networkvolumes.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/api-reference/billing/GET/billing/networkvolumes.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/billing/GET/billing/networkvolumes

# Network Volume billing history

`GET /billing/networkvolumes`

**Network volume billing history**

Retrieve billing information about your network volumes. Review request parameters, response fields, and errors for this Runpod API operation.

**Authentication:** `ApiKey`

**Parameters**

- `bucketSize` (query; string; enum: `hour`, `day`, `week`, `month`, `year`; default: `day`)
- `endTime` (query; string; format: date-time)
- `startTime` (query; string; format: date-time)

**Responses**

- `200`: Successful operation.
  - Media type: `application/json`
    - Schema (array)
      - `items` (object)
        - `amount` (number): The amount charged for the group for the billing period, in USD.
          - Example: `100.5`
        - `diskSpaceBilledGb` (integer): The amount of disk space billed for the billing period, in gigabytes (GB). Does not apply to all resource types.
          - Example: `50`
        - `highPerformanceStorageAmount` (number): The amount charged for high performance storage for the billing period, in USD.
          - Example: `100.5`
        - `highPerformanceStorageDiskSpaceBilledGb` (integer): The amount of high performance storage disk space billed for the billing period, in gigabytes (GB).
          - Example: `50`
        - `time` (string; format: date-time): The start of the period for which the billing record applies.
          - Example: `2023-01-01T00:00:00Z`
