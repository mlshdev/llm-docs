> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/volumes/search](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/api-reference/openapi.yaml%23post%20/api/v0/volumes/search)
> Canonical documentation: https://docs.vast.ai/api-reference/volumes/search-volumes

# search volumes

`POST /api/v0/volumes/search`

Search for available volumes based on specified criteria.

CLI Usage: `vastai search volumes <query> [options]`

**Authentication:** `BearerAuth`

**Parameters**

- `q` (query; object): Query parameters for filtering volume search results
  - Example: `{"limit":100}`

**Request body**

- Media type: `application/json`
  - Schema (object)
    - `limit` (integer; default: `64`): Maximum number of results to return
      - Example: `100`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `offers` (array)
        - `items` (object)
          - `ask_contract_id` (integer): Contract ID for the ask
          - `bundle_id` (integer): Bundle ID
          - `cpu_arch` (string): CPU architecture
            - Example: `amd64`
          - `cpu_ghz` (number): CPU clock speed in GHz
          - `cpu_name` (string): CPU model name
            - Example: `AMD EPYC 7K62 48-Core Processor`
          - `cuda_max_good` (number): Maximum CUDA version supported
            - Example: `12.8`
          - `disk_bw` (number): Disk bandwidth
          - `disk_name` (string): Disk model name
            - Example: `FIKWOT FN955 4TB`
          - `disk_space` (number): Available disk space in GB
            - Example: `10`
          - `driver_vers` (string): Driver version (deprecated)
          - `driver_version` (string): NVIDIA driver version
            - Example: `570.124.04`
          - `duration` (number): Duration of the contract
          - `end_date` (number): End date as Unix timestamp
          - `external` (boolean): Whether the volume is external
          - `geolocation` (string): Geographic location
          - `geolocode` (string): Geographic location code
          - `gpu_arch` (string): GPU architecture
          - `host_id` (integer): Host ID
            - Example: `166946`
          - `id` (integer): Unique identifier for the volume offer
          - `inet_down` (number): Download internet speed in Mbps
            - Example: `654.6`
          - `inet_up` (number): Upload internet speed in Mbps
            - Example: `78.9`
          - `machine_id` (integer): Machine ID
            - Example: `36683`
          - `mobo_name` (string): Motherboard model name
            - Example: `ROME2D32GM-2T`
          - `reliability` (number): Reliability score
          - `reliability2` (number): Alternative reliability score
            - Example: `0.9649497`
          - `reliability_mult` (number): Reliability multiplier
          - `start_date` (number): Start date as Unix timestamp
            - Example: `1747341046.4320989`
          - `static_ip` (boolean): Whether the machine has a static IP
            - Example: `true`
          - `storage_cost` (number): Storage cost
          - `storage_total_cost` (number): Total storage cost
            - Example: `0.0005555555555555557`
          - `vericode` (string): Verification code
          - `verification` (string): Verification status
            - Example: `verified`
          - `vms_enabled` (boolean): Whether VMs are enabled
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string; enum: `invalid_args`, `invalid_request`)
      - `msg` (string)
        - Example: `Invalid query: {query}, must be dict of conditions`
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=5.5`
