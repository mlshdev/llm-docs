> Pinned source for Runpod main: [api-reference/billing/GET/billing/pods.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/api-reference/billing/GET/billing/pods.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/billing/GET/billing/pods

# Pod billing history

`GET /billing/pods`

**Pod billing history**

Retrieve billing information about your Pods. Review authentication, request parameters, response fields, and errors for this Runpod API operation.

**Authentication:** `ApiKey`

**Parameters**

- `bucketSize` (query; string; enum: `hour`, `day`, `week`, `month`, `year`; default: `day`)
- `endTime` (query; string; format: date-time)
- `gpuTypeId` (query; string; enum: `NVIDIA GeForce RTX 4090`, `NVIDIA A40`, `NVIDIA RTX A5000`, `NVIDIA GeForce RTX 5090`, `NVIDIA H100 80GB HBM3`, `NVIDIA GeForce RTX 3090`, `NVIDIA RTX A4500`, `NVIDIA L40S`, `NVIDIA H200`, `NVIDIA L4`, `NVIDIA RTX 6000 Ada Generation`, `NVIDIA A100-SXM4-80GB`, `NVIDIA RTX 4000 Ada Generation`, `NVIDIA RTX A6000`, `NVIDIA A100 80GB PCIe`, `NVIDIA RTX 2000 Ada Generation`, `NVIDIA RTX A4000`, `NVIDIA RTX PRO 6000 Blackwell Server Edition`, `NVIDIA H100 PCIe`, `NVIDIA H100 NVL`, `NVIDIA L40`, `NVIDIA B200`, `NVIDIA GeForce RTX 3080 Ti`, `NVIDIA RTX PRO 6000 Blackwell Workstation Edition`, `NVIDIA GeForce RTX 3080`, `NVIDIA GeForce RTX 3070`, `AMD Instinct MI300X OAM`, `NVIDIA GeForce RTX 4080 SUPER`, `Tesla V100-PCIE-16GB`, `Tesla V100-SXM2-32GB`, `NVIDIA RTX 5000 Ada Generation`, `NVIDIA GeForce RTX 4070 Ti`, `NVIDIA RTX 4000 SFF Ada Generation`, `NVIDIA GeForce RTX 3090 Ti`, `NVIDIA RTX A2000`, `NVIDIA GeForce RTX 4080`, `NVIDIA A30`, `NVIDIA GeForce RTX 5080`, `Tesla V100-FHHL-16GB`, `NVIDIA H200 NVL`, `Tesla V100-SXM2-16GB`, `NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition`, `NVIDIA A5000 Ada`, `Tesla V100-PCIE-32GB`, `NVIDIA RTX A4500`, `NVIDIA A30`, `NVIDIA GeForce RTX 3080TI`, `Tesla T4`, `NVIDIA RTX A30`)
- `grouping` (query; string; enum: `podId`, `gpuTypeId`; default: `gpuTypeId`)
- `podId` (query; string)
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
        - `endpointId` (string): If grouping by endpoint ID, the endpoint ID of the group.
        - `gpuTypeId` (string): If grouping by GPU type ID, the GPU type ID of the group.
        - `podId` (string): If grouping by Pod ID, the Pod ID of the group.
        - `time` (string; format: date-time): The start of the period for which the billing record applies.
          - Example: `2023-01-01T00:00:00Z`
        - `timeBilledMs` (integer): The total time billed for the billing period, in milliseconds. Does not apply to all resource types.
          - Example: `3600000`
