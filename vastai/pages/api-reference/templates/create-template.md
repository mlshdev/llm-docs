> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/template](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/api-reference/openapi.yaml%23post%20/api/v0/template)
> Canonical documentation: https://docs.vast.ai/api-reference/templates/create-template

# create template

`POST /api/v0/template`

Creates a new template for launching instances.

Templates store default configuration values that can be used when creating instances. When an instance is created with a template reference, template values serve as defaults that can be overridden by request parameters.

For detailed usage, see [Creating and Using Templates with API](https://docs.vast.ai/api-reference/creating-and-using-templates-with-api).

CLI Usage: `vastai create template --name <name> --image <image> [options]`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `name` (required; string; default: `Example Template`): Name of the template
    - `image` (required; string; default: `vastai/base-image`): Docker image path. Used when launching instances from this template.
    - `tag` (string; default: `latest`): Docker image tag specifying version of the image. Defaults to `latest`. Can also be included in the `image` field instead.
    - `env` (string): Environment variables and port mappings in Docker flag format. Example: `"-e HF_TOKEN=hf_xxx123456789 -e MODEL_ID=TheBloke/Llama-2-7B-Chat-GPTQ -p 8000:8000"`
    - `onstart` (string): Commands to run when instance starts Example : `env | grep _ >> /etc/environment; echo 'starting up'`
    - `runtype` (string; enum: `ssh`, `jupyter`, `args`; default: `args`): Launch mode for the instance. Defaults to `args`. Recommended - use `ssh` with `ssh_direct: true` for reliable SSH access.
    - `ssh_direct` (boolean): Enable direct SSH connection
    - `jup_direct` (boolean): Enable direct Jupyter connection
    - `jupyter_dir` (string): Directory to launch Jupyter from Example : `/home/notebooks`
    - `use_jupyter_lab` (boolean): Use JupyterLab instead of Jupyter Notebook
    - `docker_login_repo` (string): Name of the private Docker repo (i.e docker.io)
    - `docker_login_user` (string): Username for private Docker repo
    - `docker_login_pass` (string): Access token or password for private Docker repo.
    - `extra_filters` (object): Additional machine search filters. Example: `{"cuda_max_good": {"gte": 12.6}}`
    - `recommended_disk_space` (number): Recommended disk space in GB. Defaults to 8GB if not specified.
    - `desc` (string): Short description of the template
    - `readme` (string): Longer documentation/readme content for the template
    - `args_str` (string): Arguments string passed to the container entrypoint when runtype is `args`
    - `use_ssh` (boolean): Enable SSH access to instances created from this template
    - `href` (string): Link to Docker Hub or image documentation
    - `repo` (string): Repository identifier (e.g., `library/ubuntu`)
    - `private` (boolean): Whether the template is private (not publicly searchable)
    - `volume_info` (nullable): UI hint for volume configuration. Note: This does not affect instance creation - use `volume_info` in the instance creation request to actually attach volumes.
    - `hash_id` (string): Content-based hash ID of the template. Can be included when editing but will change based on new content.
  - Example: `{"name":"Example Template","image":"vastai/base-image","tag":"latest","env":"-e MY_VAR=value -p 8000:8000","runtype":"ssh","ssh_direct":true}`

**Responses**

- `200`: Template created or existing template found
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean): Whether operation was successful
      - `msg` (string): Status message
        - Example: `Template Created Successfully! New Template ID: 123456`
      - `template` (object): Template details
        - `name` (string): Template name
        - `id` (integer): Template ID
        - `hash_id` (string): Template hash identifier
- `400`: Bad request - invalid parameters
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `invalid_args`
      - `msg` (string)
        - Example: `Template name is required`
- `401`: Unauthorized - invalid or missing API key
- `429`: Rate limit exceeded
