> Pinned source for Runpod main: [api-reference/templates/PATCH/templates/templateId.mdx](https://github.com/runpod/docs/blob/ceb79977df03b21e40ceaec3fdea8c9869897b7e/api-reference/templates/PATCH/templates/templateId.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/templates/PATCH/templates/templateId

# Update a template

`PATCH /templates/{templateId}`

**Update a template**

Update a template. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Authentication:** `ApiKey`

**Parameters**

- `templateId` (path; required; string): ID of template that needs to be updated.

**Request body** (required): Update a template.

- Media type: `application/json`
  - Schema (object): Input for updating a Template which will trigger a rolling release for any associated endpoints.
    - `containerDiskInGb` (integer; default: `50`): The amount of disk space in GB to allocate for the container.
    - `containerRegistryAuthId` (string): The unique string representing the container auth object needed for a private image.
    - `dockerEntrypoint` (array; default: `[]`): If specified, overrides the ENTRYPOINT for the Docker image run on the Pods using this template. If \[], uses the ENTRYPOINT defined in the DockerFile.
      - `items` (string)
    - `dockerStartCmd` (array; default: `[]`): If specified, overrides the start CMD for the Docker image run on the Pods using this template. If \[], uses the start CMD defined in the DockerFile.
      - `items` (string)
    - `env` (object; default: `{}`)
      - Example: `{"ENV_VAR":"value"}`
      - `items` (string)
    - `imageName` (string): Docker image name.
    - `isPublic` (boolean; default: `false`): If this is a Pod template, specifies whether the template is visible to other Runpod users.
    - `name` (string): Template name.
    - `ports` (array; default: `8888/http,22/tcp`): A list of ports exposed on the created Pod. Each port is formatted as \[port number]/\[protocol]. Protocol can be either http or tcp.
      - Example: `["8888/http","22/tcp"]`
      - `items` (string)
    - `readme` (string; default: \`\`): README content in markdown format.
    - `volumeInGb` (integer; default: `20`): The amount of disk space, in gigabytes (GB), to allocate on the Pods deployed with this template.
    - `volumeMountPath` (string; default: `/workspace`): If a volume is attached to a Pod deployed with this template, the absolute path where the volume will be mounted in the filesystem.

**Responses**

- `200`: Successful operation.
  - Media type: `application/json`
    - Schema (object)
      - `category` (string): The category of the template. The category can be used to filter templates in the Runpod UI. Current categories are NVIDIA, AMD, and CPU.
        - Example: `NVIDIA`
      - `containerDiskInGb` (integer): The amount of disk space, in gigabytes (GB), to allocate on the container disk for a Pod or worker. The data on the container disk is wiped when the Pod or worker restarts. To persist data across restarts, set volumeInGb to configure the local network volume.
        - Example: `50`
      - `containerRegistryAuthId` (string)
      - `dockerEntrypoint` (array): If specified, overrides the ENTRYPOINT for the Docker image run on a Pod or worker. If \[], uses the ENTRYPOINT defined in the image.
        - Example: `[]`
        - `items` (string)
      - `dockerStartCmd` (array): If specified, overrides the start CMD for the Docker image run on a Pod or worker. If \[], uses the start CMD defined in the image.
        - Example: `[]`
        - `items` (string)
      - `earned` (number): The amount of Runpod credits earned by the creator of a template by all Pods or workers created from the template.
        - Example: `100`
      - `env` (object; default: `{}`)
        - Example: `{"ENV_VAR":"value"}`
        - `items` (string)
      - `id` (string): A unique string identifying a template.
        - Example: `30zmvf89kd`
      - `imageName` (string): The image tag for the container run on Pods or workers created from a template.
        - Example: `runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04`
      - `isPublic` (boolean): Set to true if a template is public and can be used by any Runpod user. Set to false if a template is private and can only be used by the creator.
        - Example: `false`
      - `isRunpod` (boolean): If true, a template is an official template managed by Runpod.
        - Example: `true`
      - `isServerless` (boolean): If true, instances created from a template are Serverless workers. If false, instances created from a template are Pods.
        - Example: `true`
      - `name` (string): A user-defined name for a template. The name needs to be unique.
        - Example: `my template`
      - `ports` (array): A list of ports exposed on a Pod or worker. Each port is formatted as \[port number]/\[protocol]. Protocol can be either http or tcp.
        - Example: `["8888/http","22/tcp"]`
        - `items` (string)
      - `readme` (string): A string of markdown-formatted text that describes a template. The readme is displayed in the Runpod UI when a user selects the template.
      - `runtimeInMin` (integer)
      - `volumeInGb` (integer): The amount of disk space, in gigabytes (GB), to allocate on the local network volume for a Pod or worker. The data on the local network volume is persisted across restarts. To persist data so that future Pods and workers can access it, create a network volume and set networkVolumeId to attach it to the Pod or worker.
        - Example: `20`
      - `volumeMountPath` (string): If a local network volume or network volume is attached to a Pod or worker, the absolute path where the network volume is mounted in the filesystem.
        - Example: `/workspace`
- `400`: Invalid input.
