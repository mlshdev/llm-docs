> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v1/template](https://github.com/vast-ai/docs/blob/626149741ba46f195c775b2f4c89b7329de2d902/api-reference/openapi.yaml%23put%20/api/v1/template)
> Canonical documentation: https://docs.vast.ai/api-reference/templates/edit-template

# edit template

`PUT /api/v1/template`

Edits an existing template by creating a new version of it.

Template versions are immutable. Send the template's numeric `id` and its current `hash_id` together with the full set of fields the new version should have; fields you leave out are not carried over from the previous version. The response contains the new version with a new numeric `id` and a new content-based `hash_id`. The previous version keeps its `id` and `hash_id`, so running instances and shared links that reference it stay valid.

If the template was created by someone else, the new version is created as your own copy. If the body hashes to the same `hash_id` as the current version, nothing is created and the response reports that no edits were made.

If a read returned `********` for `docker_login_user` or `docker_login_pass`, sending that placeholder back keeps the stored credential. Only the template's creator can do this.

`PUT /api/v0/template/` is deprecated and returns `410 Gone`. Use this endpoint instead.

For detailed usage, see [Creating and Using Templates with API](https://docs.vast.ai/api-reference/creating-and-using-templates-with-api).

CLI Usage: `vastai update template <hash_id> [options]`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `id` (required; integer): Numeric ID of the template version to edit. Must be the version identified by `hash_id`.
    - `hash_id` (required; string): Current hash ID of the template version to edit.
    - `name` (string): Name of the template
    - `image` (string): Docker image path
    - `tag` (string): Docker image tag. Can also be included in the `image` field instead.
    - `env` (string): Environment variables and port mappings in Docker flag format. Example: `"-e HF_TOKEN=hf_xxx123456789 -p 8000:8000"`
    - `onstart` (string): Commands to run when the instance starts
    - `runtype` (string; enum: `ssh`, `jupyter`, `args`): Launch mode for instances created from this template
    - `ssh_direct` (boolean): Enable direct SSH connection
    - `use_ssh` (boolean): Enable SSH access to instances created from this template
    - `jup_direct` (boolean): Enable direct Jupyter connection
    - `jupyter_dir` (string): Directory to launch Jupyter from
    - `use_jupyter_lab` (boolean): Use JupyterLab instead of Jupyter Notebook
    - `docker_login_repo` (string): Name of the private Docker repo (i.e docker.io)
    - `docker_login_user` (string): Username for private Docker repo
    - `docker_login_pass` (string): Access token or password for private Docker repo
    - `extra_filters` (object): Additional machine search filters. Example: `{"cuda_max_good": {"gte": 12.6}}`
    - `recommended_disk_space` (number): Recommended disk space in GB
    - `desc` (string): Short description of the template
    - `readme` (string): Longer documentation/readme content for the template
    - `args_str` (string): Arguments string passed to the container entrypoint when runtype is `args`
    - `href` (string): Link to Docker Hub or image documentation
    - `repo` (string): Repository identifier (e.g., `library/ubuntu`)
    - `private` (boolean): Whether the template is private (not publicly searchable)
    - `volume_info` (nullable): UI hint for volume configuration
  - Example: `{"id":123456,"hash_id":"5915f1dc1ce881defb572015eb9d8178","name":"Example Template","desc":"Updated description","image":"vastai/base-image","tag":"latest","env":"-e MY_VAR=value -p 8000:8000","runtype":"ssh","ssh_direct":true,"use_ssh":true,"docker_login_repo":"","docker_login_user":"","docker_login_pass":"","recommended_disk_space":16,"private":true}`

**Responses**

- `200`: New template version created, or no edits were needed
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean): Whether the operation was successful
      - `msg` (string): Status message
        - Example: `Created an Edited Copy of Template 123456. New Template ID: 123457`
      - `template` (object): The new template version
        - `id` (integer): Numeric ID of the new version
        - `hash_id` (string): Content-based hash ID of the new version
- `400`: Bad request - missing `id` or `hash_id`, or invalid parameters
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `invalid_args`
      - `msg` (string)
        - Example: `Template ID is required for update`
- `401`: Unauthorized - invalid or missing API key
- `404`: Template not found - no template has this `id` and `hash_id`, or it was deleted
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `invalid_template`
      - `msg` (string)
        - Example: `error 404: Template not found`
- `429`: Rate limit exceeded
