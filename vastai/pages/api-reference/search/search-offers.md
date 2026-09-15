> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/bundles](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23post%20/api/v0/bundles)
> Canonical documentation: https://docs.vast.ai/api-reference/search/search-offers

# search offers

`POST /api/v0/bundles`

Search for available GPU machine offers with advanced filtering and sorting.

Each filter parameter (such as `verified`, `gpu_name`, `num_gpus`, etc.) should be an object specifying the operator and value you want to match.

**Filter operators:**

| Operator | Meaning                | Example                              |
| :------- | :--------------------- | :----------------------------------- |
| `eq`     | Equal to               | `{ "eq": true }`                     |
| `neq`    | Not equal to           | `{ "neq": false }`                   |
| `gt`     | Greater than           | `{ "gt": 0.99 }`                     |
| `lt`     | Less than              | `{ "lt": 10000 }`                    |
| `gte`    | Greater than or equal  | `{ "gte": 4 }`                       |
| `lte`    | Less than or equal     | `{ "lte": 8 }`                       |
| `in`     | Value is in a list     | `{ "in": ["RTX_3090", "RTX_4090"] }` |
| `notin`  | Value is not in a list | `{ "notin": ["TW", "SE"] }`          |

CLI Usage: `vastai search offers 'reliability > 0.99 num_gpus>=4' --order=dph_total`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `limit` (integer): Max offers to return
    - `type` (string; enum: `ondemand`, `bid`, `reserved`): Instance type for the offer. Affects pricing calculation. - **ondemand**: Fixed pricing based on listed rates. Default. - **bid** (interruptible): Uses minimum bid price. Lower cost but may be interrupted if outbid. - **reserved**: Reserved instance pricing.
    - `verified` (object; default: `{"eq":true}`): Machine verification status
      - `eq` (boolean)
    - `rentable` (object; default: `{"eq":true}`): Whether machine is rentable
      - `eq` (boolean)
    - `rented` (object; default: `{"eq":false}`): When set to true, include offers where the calling user already has rented GPUs. This is useful for finding offers on machines you're already renting.
      - `eq` (boolean)
    - `gpu_name` (object): GPU model name. Example: {"eq": "RTX\_4090"} or {"in": \["RTX\_3090", "RTX\_4090"]}
      - `in` (array)
        - Example: `["RTX_3090","RTX_4090"]`
        - `items` (string)
    - `reliability` (object): Machine reliability score (0-1). Example: {"gte": 0.99}
    - `num_gpus` (object): Number of GPUs. Example: {"gte": 4} or {"in": \[1, 2, 4, 8]}
      - `in` (array)
        - Example: `[1,2,4,8]`
        - `items` (integer)
    - `gpu_ram` (object): GPU RAM in MB. Example: {"gte": 24000}
    - `duration` (object): Minimum required rental duration in seconds (the offer must be available for at least this long from now).
    - `machine_id` (object): Filter by specific host machine ID
    - `dlperf_per_dphtotal` (object): DLPerf per dollar per hour
    - `dph_total` (object): Total $/hour rental cost. Example: {"lte": 0.5}
    - `flops_per_dphtotal` (object): TFLOPs per $/hour
    - `geolocation` (object): Machine location (two letter country code). Example: {"in": \["US", "CA"]}
      - `in` (array)
        - Example: `["US","CA"]`
        - `items` (string)
    - `gpu_arch` (object): Host machine GPU architecture (e.g. nvidia, amd). Example: {"eq": "nvidia"}
    - `dlperf` (object): Deep Learning performance score
    - `cuda_max_good` (object): Maximum supported CUDA version
    - `inet_down` (object): Download bandwidth (MB/s)
    - `inet_up` (object): Upload bandwidth (MB/s)
    - `inet_down_cost` (object): Download bandwidth cost ($/GB)
    - `inet_up_cost` (object): Upload bandwidth cost ($/GB)
    - `driver_version` (object): NVIDIA driver version in the format "XXX.XX.XX"
    - `compute_cap` (object): CUDA compute capability x 100. Use 650 for compute capability 6.5 or 700 for 7.0.
    - `cpu_arch` (object): Host machine CPU architecture (Default is amd64). Example: {"eq": "amd64"}
    - `has_avx` (object): CPU supports AVX instruction set
    - `cpu_cores` (object): Number of virtual CPUs
    - `cpu_cores_effective` (object): Effective vCPU count for the offer
    - `cpu_ghz` (object): CPU clock speed in GHz
    - `cpu_ram` (object): CPU RAM in MB
    - `datacenter` (object): Show only datacenter offers
    - `external` (object): Show external offers in addition to datacenter offers
    - `disk_bw` (object): Disk read bandwidth in MB/s
    - `disk_space` (object): Disk storage space in GB
    - `bw_nvlink` (object): NVLink interconnect bandwidth in GB/s. Use when filtering for multi-GPU systems with high-speed NVLink.
    - `gpu_max_power` (object): GPU power limit in watts
    - `gpu_max_temp` (object): GPU temperature limit in Celsius
    - `gpu_mem_bw` (object): GPU memory bandwidth in GB/s
    - `gpu_total_ram` (object): Total GPU RAM across all GPUs in MB
    - `gpu_frac` (object): Fraction of the total GPU resources being offered
    - `gpu_display_active` (object): Whether the GPU has an attached display
    - `direct_port_count` (object): Number of direct ports
    - `host_id` (object): Host user ID
    - `id` (object): Offer ID
    - `min_bid` (object): Minimum bid price ($/hour)
    - `mobo_name` (object): Motherboard name
    - `pci_gen` (object): PCIe generation
    - `pcie_bw` (object): PCIe bandwidth (CPU to GPU)
    - `storage_cost` (object): Storage cost in $/GB/month
    - `static_ip` (object): Whether the IP address is static/stable
    - `total_flops` (object): Total theoretical GPU compute performance (TFLOPs) across all GPUs.
    - `os_version` (object): Host machine Ubuntu OS version
    - `ubuntu_version` (object): Host machine Ubuntu OS version (alias for os\_version)
    - `verification` (object): Machine verification status string (verified, deverified, unverified). Example: {"eq": "verified"}
    - `vms_enabled` (object): Whether the machine is a VM instance
    - `order` (array; minimum items: `2`; maximum items: `2`): List of sort fields and directions. Each entry should contain two elements: 1. The field name to sort by (string) 2. The sort direction ("asc" or "desc")
      - `items` (array)
        - `items` (string)
    - `allocated_storage` (number): Storage allocation size in GB for the instance. This sets the disk size when creating the instance and cannot be changed later. Default is 8GB.
  - Example: `{"limit":100,"type":"on-demand","verified":{"eq":true},"rentable":{"eq":true},"rented":{"eq":false}}`

**Responses**

- `200`: Successful search response
  - Media type: `application/json`
    - Schema (object)
      - `offers` (array)
        - `items` (object)
    - Example: `{"offers":{"id":12345678,"ask_contract_id":12345678,"bundle_id":987654321,"bundled_results":null,"bw_nvlink":0,"compute_cap":900,"cpu_arch":"amd64","cpu_cores":64,"cpu_cores_effective":32,"cpu_ghz":2.99,"cpu_name":"QuantumX 128-Core Processor","cpu_ram":65536,"credit_discount_max":0.15,"cuda_max_good":11.2,"direct_port_count":42,"disk_bw":1234.5,"disk_name":"HYPERDISK 8TB","disk_space":2048.5,"dlperf":222.22,"dlperf_per_dphtotal":333.33,"dph_base":0.123456,"dph_total":0.234567,"driver_version":"999.99.99","driver_vers":999999999,"duration":1234567.89,"end_date":1893456000,"external":null,"flops_per_dphtotal":444.44,"geolocation":"Atlantis, AT","geolocode":42424242,"gpu_arch":"nvidia","gpu_display_active":false,"gpu_frac":0.75,"gpu_ids":[1111,2222],"gpu_lanes":16,"gpu_mem_bw":888.8,"gpu_name":"Imaginary RTX 9999","gpu_ram":24576,"gpu_total_ram":49152,"gpu_max_power":450,"gpu_max_temp":42,"has_avx":1,"host_id":55555,"hosting_type":0,"hostname":null,"inet_down":9876.5,"inet_down_cost":0.00123,"inet_up":8765.4,"inet_up_cost":0.00456,"is_bid":false,"logo":"/static/logos/fake_logo.png","machine_id":88888,"min_bid":0.111111,"mobo_name":"FANTASY-MOBO-2025","num_gpus":4,"os_version":"42.42","pci_gen":6,"pcie_bw":99.9,"public_ipaddr":"203.0.113.42","reliability":0.9999,"reliability_mult":0.8888,"rentable":true,"rented":false,"score":1234.5678,"start_date":1893450000.5,"static_ip":true,"storage_cost":0.987654,"storage_total_cost":0.123456,"total_flops":999.99,"verification":"verified","vericode":1,"vram_costperhour":0.009876,"webpage":null,"vms_enabled":false,"expected_reliability":0.5,"is_vm_deverified":false,"resource_type":"gpu","cluster_id":null,"avail_vol_ask_id":333333,"avail_vol_dph":0.000321,"avail_vol_size":4096,"nw_disk_min_bw":null,"nw_disk_max_bw":null,"nw_disk_avg_bw":null,"rn":1,"dph_total_adj":0.345678,"reliability2":0.9999,"discount_rate":0.05,"discounted_hourly":0.01,"discounted_dph_total":0.224567,"search":{"gpuCostPerHour":0.123456,"diskHour":0.123456,"totalHour":0.234567,"discountTotalHour":0.01,"discountedTotalPerHour":0.224567},"instance":{"gpuCostPerHour":0.01,"diskHour":0.02,"totalHour":0.03,"discountTotalHour":0.001,"discountedTotalPerHour":0.029},"time_remaining":"","time_remaining_isbid":"","internet_up_cost_per_tb":1.23,"internet_down_cost_per_tb":4.56}}`
- `400`: Bad request - invalid query parameters
  - Media type: `application/json`
    - Schema (object)
      - `error` (string)
        - Example: `invalid_request`
      - `msg` (string)
        - Example: `Invalid json body`
- `404`: Unauthorized - invalid or missing API key
  - Media type: `application/json`
    - Schema (object)
      - `error` (string)
      - `msg` (string)
        - Example: `Invalid user key`
