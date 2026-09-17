> Pinned source for Runpod main: [api-reference/pods/POST/pods/podId/update.mdx](https://github.com/runpod/docs/blob/fa4985146919262a6e9cdb946c50eec1ed81ffc9/api-reference/pods/POST/pods/podId/update.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/pods/POST/pods/podId/update

# Update a Pod

`POST /pods/{podId}/update`

**Update a Pod**

Update a Pod - synonym for PATCH /pods/{podId}. Review request parameters, response fields, and errors for this Runpod API operation.

**Authentication:** `ApiKey`

**Parameters**

- `podId` (path; required; string): ID of Pod that needs to be updated.

**Request body** (required): Form data to update a Pod.

- Media type: `application/json`
  - Schema (object): Input for updating a Pod which will trigger a reset.
    - `containerDiskInGb` (integer; nullable; default: `50`): The amount of disk space, in gigabytes (GB), to allocate on the container disk for the created Pod. The data on the container disk is wiped when the Pod restarts. To persist data across Pod restarts, set volumeInGb to configure the Pod network volume.
    - `containerRegistryAuthId` (string): Registry credentials ID.
      - Example: `clzdaifot0001l90809257ynb`
    - `dockerEntrypoint` (array; default: `[]`): If specified, overrides the ENTRYPOINT for the Docker image run on the created Pod. If \[], uses the ENTRYPOINT defined in the image.
      - `items` (string)
    - `dockerStartCmd` (array; default: `[]`): If specified, overrides the start CMD for the Docker image run on the created Pod. If \[], uses the start CMD defined in the image.
      - `items` (string)
    - `env` (object; default: `{}`)
      - Example: `{"ENV_VAR":"value"}`
      - `items` (string)
    - `globalNetworking` (boolean; default: `false`): Set to true to enable global networking for the created Pod. Currently only available for On-Demand GPU Pods on some Secure Cloud data centers.
      - Example: `true`
    - `imageName` (string): The image tag for the container run on the created Pod.
      - Example: `runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04`
    - `locked` (boolean; default: `false`): Set to true to lock a Pod. Locking a Pod disables stopping or resetting the Pod.
    - `name` (string; default: `my pod`; maximum length: `191`): A user-defined name for the created Pod. The name does not need to be unique.
    - `ports` (array; default: `8888/http,22/tcp`): A list of ports exposed on the created Pod. Each port is formatted as \[port number]/\[protocol]. Protocol can be either http or tcp.
      - Example: `["8888/http","22/tcp"]`
      - `items` (string)
    - `volumeInGb` (integer; nullable; default: `20`): The amount of disk space, in gigabytes (GB), to allocate on the Pod volume for the created Pod. The data on the Pod volume is persisted across Pod restarts. To persist data so that future Pods can access it, create a network volume and set networkVolumeId to attach it to the Pod.
    - `volumeMountPath` (string; default: `/workspace`): If either a Pod volume or a network volume is attached to a Pod, the absolute path where the network volume will be mounted in the filesystem.

**Responses**

- `200`: Pod successfully updated.
  - Media type: `application/json`
    - Schema (object)
      - `adjustedCostPerHr` (number): The effective cost in Runpod credits per hour of running a Pod, adjusted by active Savings Plans.
        - Example: `0.69`
      - `aiApiId` (string): Synonym for endpointId (legacy name).
        - Example: `null`
      - `consumerUserId` (string): A unique string identifying the Runpod user who rents a Pod.
        - Example: `user_2PyTJrLzeuwfZilRZ7JhCQDuSqo`
      - `containerDiskInGb` (integer): The amount of disk space, in gigabytes (GB), to allocate on the container disk for a Pod. The data on the container disk is wiped when the Pod restarts. To persist data across Pod restarts, set volumeInGb to configure the Pod network volume.
        - Example: `50`
      - `containerRegistryAuthId` (string): If a Pod is created with a container registry auth, the unique string identifying that container registry auth.
        - Example: `clzdaifot0001l90809257ynb`
      - `costPerHr` (number; format: currency): The cost in Runpod credits per hour of running a Pod. Note that the actual cost may be lower if Savings Plans are applied.
        - Example: `0.74`
      - `cpuFlavorId` (string): If the Pod is a CPU Pod, the unique string identifying the CPU flavor the Pod is running on.
        - Example: `cpu3c`
      - `desiredStatus` (string; enum: `RUNNING`, `EXITED`, `TERMINATED`): The current expected status of a Pod.
      - `dockerEntrypoint` (array): If specified, overrides the ENTRYPOINT for the Docker image run on the created Pod. If \[], uses the ENTRYPOINT defined in the image.
        - `items` (string)
      - `dockerStartCmd` (array): If specified, overrides the start CMD for the Docker image run on the created Pod. If \[], uses the start CMD defined in the image.
        - `items` (string)
      - `endpointId` (string): If the Pod is a Serverless worker, a unique string identifying the associated endpoint.
        - Example: `null`
      - `env` (object; default: `{}`)
        - Example: `{"ENV_VAR":"value"}`
        - `items` (string)
      - `gpu` (object)
        - `id` (string)
        - `count` (integer): The number of GPUs attached to a Pod.
          - Example: `1`
        - `displayName` (string)
        - `securePrice` (number)
        - `communityPrice` (number)
        - `oneMonthPrice` (number)
        - `threeMonthPrice` (number)
        - `sixMonthPrice` (number)
        - `oneWeekPrice` (number)
        - `communitySpotPrice` (number)
        - `secureSpotPrice` (number)
      - `id` (string): A unique string identifying a Pod.
        - Example: `xedezhzb9la3ye`
      - `image` (string): The image tag for the container run on a Pod.
        - Example: `runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04`
      - `interruptible` (boolean): Describes how a Pod is rented. An interruptible Pod can be rented at a lower cost but can be stopped at any time to free up resources for another Pod. A reserved Pod is rented at a higher cost but runs until it exits or is manually stopped.
        - Example: `false`
      - `lastStartedAt` (string): The UTC timestamp when a Pod was last started.
        - Example: `2024-07-12T19:14:40.144Z`
      - `lastStatusChange` (string): A string describing the last lifecycle event on a Pod.
        - Example: `Rented by User: Fri Jul 12 2024 15:14:40 GMT-0400 (Eastern Daylight Time)`
      - `locked` (boolean): Set to true to lock a Pod. Locking a Pod disables stopping or resetting the Pod.
        - Example: `false`
      - `machine` (object): Information about the machine a Pod is running on (see Machine).
        - `minPodGpuCount` (integer)
        - `gpuTypeId` (string)
        - `gpuType` (object)
          - `id` (string)
          - `count` (integer): The number of GPUs attached to a Pod.
            - Example: `1`
          - `displayName` (string)
          - `securePrice` (number)
          - `communityPrice` (number)
          - `oneMonthPrice` (number)
          - `threeMonthPrice` (number)
          - `sixMonthPrice` (number)
          - `oneWeekPrice` (number)
          - `communitySpotPrice` (number)
          - `secureSpotPrice` (number)
        - `cpuCount` (integer)
        - `cpuTypeId` (string)
        - `cpuType` (object)
          - `id` (string)
          - `displayName` (string)
          - `cores` (number)
          - `threadsPerCore` (number)
          - `groupId` (string)
        - `location` (string)
        - `dataCenterId` (string)
        - `diskThroughputMBps` (integer)
        - `maxDownloadSpeedMbps` (integer)
        - `maxUploadSpeedMbps` (integer)
        - `supportPublicIp` (boolean)
        - `secureCloud` (boolean)
        - `maintenanceStart` (string)
        - `maintenanceEnd` (string)
        - `maintenanceNote` (string)
        - `note` (string)
        - `costPerHr` (number)
        - `currentPricePerGpu` (number)
        - `gpuAvailable` (integer)
        - `gpuDisplayName` (string)
      - `machineId` (string): A unique string identifying the host machine a Pod is running on.
        - Example: `s194cr8pls2z`
      - `memoryInGb` (number): The amount of RAM, in gigabytes (GB), attached to a Pod.
        - Example: `62`
      - `name` (string; maximum length: `191`): A user-defined name for the created Pod. The name does not need to be unique.
      - `networkVolume` (object): If a network volume is attached to a Pod, information about the network volume (see network volume schema).
        - `id` (string): A unique string identifying a network volume.
          - Example: `agv6w2qcg7`
        - `name` (string): A user-defined name for a network volume. The name does not need to be unique.
          - Example: `my network volume`
        - `size` (integer): The amount of disk space, in gigabytes (GB), allocated to a network volume.
          - Example: `50`
        - `dataCenterId` (string): The Runpod data center ID where a network volume is located.
          - Example: `EU-RO-1`
      - `portMappings` (object; nullable): A mapping of internal ports to public ports on a Pod. For example, { "22": 10341 } means that port 22 on the Pod is mapped to port 10341 and is publicly accessible at \[public ip]:10341. If the Pod is still initializing, this mapping is not yet determined and will be empty.
        - Example: `{"22":10341}`
        - `items` (integer)
      - `ports` (array): A list of ports exposed on a Pod. Each port is formatted as \[port number]/\[protocol]. Protocol can be either http or tcp.
        - Example: `["8888/http","22/tcp"]`
        - `items` (string)
      - `publicIp` (string; format: ipv4; nullable): The public IP address of a Pod. If the Pod is still initializing, this IP is not yet determined and will be empty.
        - Example: `100.65.0.119`
      - `savingsPlans` (array): The list of active Savings Plans applied to a Pod (see Savings Plans). If none are applied, the list is empty.
        - `items` (object)
          - `costPerHr` (number)
            - Example: `0.21`
          - `endTime` (string)
            - Example: `2024-07-12T19:14:40.144Z`
          - `gpuTypeId` (string)
            - Example: `NVIDIA GeForce RTX 4090`
          - `id` (string)
            - Example: `clkrb4qci0000mb09c7sualzo`
          - `podId` (string)
            - Example: `xedezhzb9la3ye`
          - `startTime` (string)
            - Example: `2024-05-12T19:14:40.144Z`
      - `slsVersion` (integer): If the Pod is a Serverless worker, the version of the associated endpoint (see Endpoint Version).
        - Example: `0`
      - `templateId` (string): If a Pod is created with a template, the unique string identifying that template.
        - Example: `null`
      - `vcpuCount` (number): The number of virtual CPUs attached to a Pod.
        - Example: `24`
      - `volumeEncrypted` (boolean): Set to true if the local network volume of a Pod is encrypted. Can only be set when creating a Pod.
        - Example: `false`
      - `volumeInGb` (integer): The amount of disk space, in gigabytes (GB), to allocate on the Pod volume for a Pod. The data on the Pod volume is persisted across Pod restarts. To persist data so that future Pods can access it, create a network volume and set networkVolumeId to attach it to the Pod.
        - Example: `20`
      - `volumeMountPath` (string): If either a Pod volume or a network volume is attached to a Pod, the absolute path where the network volume is mounted in the filesystem.
        - Example: `/workspace`
- `400`: Invalid input.
