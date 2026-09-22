> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/volumes](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23get%20/api/v0/volumes)
> Canonical documentation: https://docs.vast.ai/api-reference/volumes/list-volumes

# list volumes

`GET /api/v0/volumes`

Retrieve information about all volumes rented by you.

CLI Usage: `vastai show volumes`

**Authentication:** `BearerAuth`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `volumes` (array)
        - `items` (object)
          - `instances` (array): List of instances using this volume
            - `items` (object)
          - `driver_version` (string): NVIDIA driver version
          - `cuda_max_good` (number): Maximum CUDA version supported
          - `machine_id` (integer): Unique identifier for the machine
          - `public_ipaddr` (string): Public IP address
          - `reliability2` (number): Reliability score of the host
          - `host_id` (integer): Unique identifier for the host
          - `cpu_name` (string): Name/model of the CPU
          - `mobo_name` (string): Name/model of the motherboard
          - `disk_space` (number): Disk space in GB
          - `disk_name` (string): Name/model of the disk
          - `inet_up` (number): Upload internet speed in Mbps
          - `inet_down` (number): Download internet speed in Mbps
          - `storage_total_cost` (number): Total cost for storage
          - `os_version` (string): Operating system version
          - `verification` (string): Verification status
          - `static_ip` (boolean): Whether the machine has a static IP
          - `cpu_arch` (string): CPU architecture
          - `start_date` (number): Start date as Unix timestamp
          - `id` (integer): Unique identifier for the volume
          - `status` (string): Current status of the volume
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `Authentication credentials were not provided.`
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=5.5`
