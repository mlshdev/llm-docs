> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/asks/{id}](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23put%20/api/v0/asks/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/instances/create-instance

# create instance

`PUT /api/v0/asks/{id}`

Creates a new instance by accepting an "ask" contract from a provider.

- Use the search offers endpoint to discover available machines.
- If `template_id` is provided, those template defaults are either merged or overridden by parameters specified in the request body.

**Template Precedence Rules:**

- **Scalar fields** (image, disk, runtype, etc.): Request value overrides template value
- **`env`**: Merged by key. Request values win on key conflicts
- **`extra_filters`**: Merged by key. Request values win on key conflicts

For detailed template usage, see [Creating and Using Templates with API](https://docs.vast.ai/api-reference/creating-and-using-templates-with-api).

CLI Usage: `vastai create instance <offer_id> <image> [options]`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): ID of the offer to accept (ask\_id)

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `image` (required; string; default: `vastai/base-image:@vastai-automatic-tag`): Docker image to use for the instance.
    - `template_hash_id` (string): Content-based hash ID of a template to use as base configuration. Template values are merged with or overridden by request parameters (see precedence rules in endpoint description). When using a template, the `image` field is optional as the template provides it. Example: `4e17788f74f075dd9aab7d0d4427968f`
    - `label` (string): Custom name for the instance
    - `disk` (number; format: float): Size of local disk partition (in GB)
    - `runtype` (string; enum: `ssh`, `jupyter`, `args`, `ssh_proxy`, `ssh_direct`, `jupyter_proxy`, `jupyter_direct`): Launch mode for the instance. If omitted, defaults to 'ssh' unless `args/args_str` is provided.
    - `target_state` (string; enum: `running`, `stopped`): Desired initial state of the instance
    - `price` (number; minimum: `0.001`; maximum: `128`): Bid price per machine (in $/hour). Only for interruptible instances
    - `env` (string): Environment variables and port mappings in Docker flag format. When using a template, request `env` is merged with template `env` - existing keys are retained, new keys are appended, conflicting keys use the request value. Example: `"-e HF_TOKEN=hf_xxx123456789 -e MODEL_ID=TheBloke/Llama-2-7B-Chat-GPTQ -p 8000:8000"`
    - `cancel_unavail` (boolean): Whether to cancel if instance cannot start immediately. Defaults to false for interruptibles. Defaults to true for on-demand with target\_state='running'
    - `vm` (boolean): Whether this is a VM instance
    - `onstart` (string): Commands to run when instance starts Example : `env | grep _ >> /etc/environment; echo 'starting up'`
    - `args` (array): Arguments array to passed to the image entrypoint Example : `["bash", "-c", "env | grep _ >> /etc/environment; echo 'starting up'"]`
      - `items` (string)
    - `args_str` (string): Arguments string to pass to the entrypoint (alternative to args) Example : `args_str: bash -c "env | grep _ >> /etc/environment; echo 'starting up'"`
    - `use_jupyter_lab` (boolean): Launch instance with jupyter lab instead of notebook
    - `jupyter_dir` (string): Directory to launch Jupyter from Example : `/home/notebooks`
    - `python_utf8` (boolean): Set python's locale to C.UTF-8
    - `lang_utf8` (boolean): Set locale to C.UTF-8
    - `force` (boolean): Skip sanity checks when creating from an existing instance
    - `user` (string): User to use with docker create (breaks some images, use with caution)
    - `image_login` (string): Docker registry credentials if needed
    - `volume_info` (object): Volume creation/linking information
      - `create_new` (boolean): Set to `true` to create a new volume, `false` to link an existing volume
      - `volume_id` (integer): If `create_new` is false: existing volume ID (from `show volumes`). If `create_new` is true: volume offer ID (from `search volumes`)
      - `size` (integer): Size of the volume in GB. Only used when `create_new` is true
      - `mount_path` (string): Mount path for the volume inside the container (e.g., `/workspace`)
  - Example: `{"image":"vastai/base-image:@vastai-automatic-tag"}`

**Responses**

- `200`: Instance created successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean): If the instance was created successfully
        - Example: `true`
      - `new_contract` (integer): ID of the newly created instance contract
        - Example: `1234568`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string; enum: `invalid_args`, `invalid_price`, `no_ssh_key_for_vm`)
      - `msg` (string)
        - Example: `error 400/3467: Invalid args: 'id' is required and must be a valid offer ID`
      - `ask_id` (integer)
        - Example: `1234567`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `invalid_args`
      - `msg` (string)
        - Example: `error 403/3586: Offer 1234567 is not your own. Hosts can only rent their own machines.`
      - `ask_id` (integer)
        - Example: `1234567`
- `404`: Offer not found or not available
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `invalid_args`
      - `msg` (string)
        - Example: `error 404/3603: no_such_ask Instance type by id 1234567 is not available.`
      - `ask_id` (integer)
        - Example: `1234567`
- `410`: Offer no longer available (when cancel\_unavail is true and instance cannot start)
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `no_such_ask`
      - `msg` (string)
        - Example: `error 410/3907: no_such_ask Instance type 1234567 is no longer available.`
      - `ask_id` (integer)
        - Example: `1234567`
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=4.5`
