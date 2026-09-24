> Pinned source for Qdrant master: [qdrant-landing/content/documentation/private-cloud/api-reference.md](https://github.com/qdrant/landing_page/blob/78beef7e019cb0e5c3cdf851163a98df8c04c37f/qdrant-landing/content/documentation/private-cloud/api-reference.md)
> Canonical documentation: https://qdrant.tech/documentation/private-cloud/api-reference/

# API Reference

## Packages

- [auth.qdrant.io/v1alpha1](#authqdrantiov1alpha1)
- [qdrant.io/v1](#qdrantiov1)

## auth.qdrant.io/v1alpha1

Package v1alpha1 contains API Schema definitions for the qdrant.io v1alpha1 API group

### Resource Types

- [APIAuthentication](#apiauthentication)

#### APIAuthentication

APIAuthentication is a configuration for authenticating against Qdrant clusters.

*Appears in:*

- [APIAuthenticationList](#apiauthentication)

| Field                                                                                                              | Description                                                     | Default | Validation   |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- | ------- | ------------ |
| `apiVersion` *string*                                                                                              | `auth.qdrant.io/v1alpha1`                                       |         |              |
| `kind` *string*                                                                                                    | `APIAuthentication`                                             |         |              |
| `metadata` *[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#objectmeta-v1-meta)* | Refer to Kubernetes API documentation for fields of `metadata`. |         | Optional: {} |
|                                                                                                                    |                                                                 |         |              |
| `spec` *[APIAuthenticationSpec](#apiauthenticationspec)*                                                           |                                                                 |         |              |

#### APIAuthenticationSpec

APIAuthenticationSpec describes the configuration for authenticating against Qdrant clusters.

*Appears in:*

- [APIAuthentication](#apiauthentication)

| Field                       | Description                                        | Default | Validation     |
| --------------------------- | -------------------------------------------------- | ------- | -------------- |
| `sha512` *string*           | SHA512 hash of an API key.                         |         | MaxLength: 128 |
| MinLength: 128              |                                                    |         |                |
| Optional: {}                |                                                    |         |                |
|                             |                                                    |         |                |
| `clusterIDs` *string array* | List of cluster IDs for which the API key is valid |         |                |

## qdrant.io/v1

Package v1 contains API Schema definitions for the qdrant.io v1 API group

### Resource Types

- [QdrantCloudRegion](#qdrantcloudregion)
- [QdrantCloudRegionList](#qdrantcloudregionlist)
- [QdrantCluster](#qdrantcluster)
- [QdrantClusterList](#qdrantclusterlist)
- [QdrantClusterRestore](#qdrantclusterrestore)
- [QdrantClusterRestoreList](#qdrantclusterrestorelist)
- [QdrantClusterScheduledSnapshot](#qdrantclusterscheduledsnapshot)
- [QdrantClusterScheduledSnapshotList](#qdrantclusterscheduledsnapshotlist)
- [QdrantClusterSnapshot](#qdrantclustersnapshot)
- [QdrantClusterSnapshotList](#qdrantclustersnapshotlist)
- [QdrantEntity](#qdrantentity)
- [QdrantEntityList](#qdrantentitylist)
- [QdrantRelease](#qdrantrelease)
- [QdrantReleaseList](#qdrantreleaselist)

#### AuditConfig

AuditConfig specifies the audit logging configuration for Qdrant.

*Appears in:*

- [QdrantConfiguration](#qdrantconfiguration)

| Field                                                                   | Description                                                                  | Default      | Validation            |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------ | --------------------- |
| `enabled` *boolean*                                                     | Enabled specifies whether to enable audit logging.                           | false        | Optional: {}          |
|                                                                         |                                                                              |              |                       |
| `dir` *string*                                                          | Dir specifies the directory to write audit log files into.                   |              |                       |
| Default is `./storage/audit`                                            |                                                                              | Optional: {} |                       |
|                                                                         |                                                                              |              |                       |
| `rotation` *[AuditRotation](#auditrotation)*                            | Rotation specifies the rotation interval: "daily" (default) or "hourly".     | daily        | Enum: \[daily hourly] |
| Optional: {}                                                            |                                                                              |              |                       |
|                                                                         |                                                                              |              |                       |
| `max_log_files` *integer*                                               | MaxLogFiles specifies the maximum number of rotated audit log files to keep. |              |                       |
| Older files are deleted when a new log file is created. Default: 7.     | 7                                                                            | Minimum: 1   |                       |
| Optional: {}                                                            |                                                                              |              |                       |
|                                                                         |                                                                              |              |                       |
| `trust_forwarded_headers` *boolean*                                     | TrustForwardedHeaders specifies whether to use X-Forwarded-For header to     |              |                       |
| determine the client address recorded in audit log entries. Only enable |                                                                              |              |                       |
| this when running behind a trusted reverse proxy or load balancer.      |                                                                              |              |                       |
| Default is false.                                                       |                                                                              | Optional: {} |                       |
|                                                                         |                                                                              |              |                       |

#### AuditRotation

*Underlying type:* *string*

AuditRotation specifies the rotation interval for audit log files.

*Validation:*

- Enum: \[daily hourly]

*Appears in:*

- [AuditConfig](#auditconfig)

| Field    | Description |
| -------- | ----------- |
| `daily`  |             |
| `hourly` |             |

#### ClusterManagerReponse

*Appears in:*

- [QdrantClusterStatus](#qdrantcluster)

| Field                  | Description                                                         | Default | Validation   |
| ---------------------- | ------------------------------------------------------------------- | ------- | ------------ |
| `description` *string* | Description contains additional information about the last response |         | Optional: {} |
|                        |                                                                     |         |              |

#### ClusterPhase

*Underlying type:* *string*

*Appears in:*

- [QdrantClusterStatus](#qdrantcluster)

| Field               | Description |
| ------------------- | ----------- |
| `Creating`          |             |
| `FailedToCreate`    |             |
| `Updating`          |             |
| `FailedToUpdate`    |             |
| `Scaling`           |             |
| `Upgrading`         |             |
| `Suspending`        |             |
| `Suspended`         |             |
| `FailedToSuspend`   |             |
| `Resuming`          |             |
| `FailedToResume`    |             |
| `Healthy`           |             |
| `NotReady`          |             |
| `RecoveryMode`      |             |
| `ManualMaintenance` |             |

#### ComponentPhase

*Underlying type:* *string*

*Appears in:*

- [ComponentStatus](#componentstatus)

| Field      | Description |
| ---------- | ----------- |
| `Ready`    |             |
| `NotReady` |             |
| `Unknown`  |             |
| `NotFound` |             |

#### ComponentReference

*Appears in:*

- [QdrantCloudRegionSpec](#qdrantcloudregionspec)

| Field                         | Description                                                              | Default | Validation   |
| ----------------------------- | ------------------------------------------------------------------------ | ------- | ------------ |
| `apiVersion` *string*         | APIVersion is the group and version of the component being referenced.   |         |              |
| `kind` *string*               | Kind is the type of component being referenced                           |         |              |
| `name` *string*               | Name is the name of component being referenced                           |         |              |
| `namespace` *string*          | Namespace is the namespace of component being referenced.                |         |              |
| `markedForDeletion` *boolean* | MarkedForDeletion specifies whether the component is marked for deletion |         | Optional: {} |
|                               |                                                                          |         |              |

#### ComponentStatus

*Appears in:*

- [QdrantCloudRegionStatus](#qdrantcloudregion)

| Field                                       | Description                                                              | Default | Validation   |
| ------------------------------------------- | ------------------------------------------------------------------------ | ------- | ------------ |
| `name` *string*                             | Name specifies the name of the component                                 |         |              |
| `namespace` *string*                        | Namespace specifies the namespace of the component                       |         |              |
| `version` *string*                          | Version specifies the version of the component                           |         | Optional: {} |
|                                             |                                                                          |         |              |
| `phase` *[ComponentPhase](#componentphase)* | Phase specifies the current phase of the component                       |         |              |
| `message` *string*                          | Message specifies the info explaining the current phase of the component |         | Optional: {} |
|                                             |                                                                          |         |              |

#### EntityPhase

*Underlying type:* *string*

*Appears in:*

- QdrantEntityStatus

| Field      | Description |
| ---------- | ----------- |
| `Creating` |             |
| `Ready`    |             |
| `Updating` |             |
| `Failing`  |             |
| `Deleting` |             |
| `Deleted`  |             |

#### EntityResult

*Underlying type:* *string*

EntityResult is the last result from the invocation to a manager

*Appears in:*

- [QdrantEntityStatusResult](#qdrantentitystatusresult)

| Field     | Description |
| --------- | ----------- |
| `Ok`      |             |
| `Pending` |             |
| `Error`   |             |

#### GPU

*Appears in:*

- [QdrantClusterSpec](#qdrantclusterspec)

| Field                                                                      | Description                                                                    | Default     | Validation          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ----------- | ------------------- |
| `gpuType` *[GPUType](#gputype)*                                            | GPUType specifies the type of the GPU to use. If set, GPU indexing is enabled. |             | Enum: \[nvidia amd] |
|                                                                            |                                                                                |             |                     |
| `forceHalfPrecision` *boolean*                                             | ForceHalfPrecision for `f32` values while indexing.                            |             |                     |
| `f16` conversion will take place                                           |                                                                                |             |                     |
| only inside GPU memory and won't affect storage type.                      | false                                                                          |             |                     |
| `deviceFilter` *string array*                                              | DeviceFilter for GPU devices by hardware name. Case-insensitive.               |             |                     |
| List of substrings to match against the gpu device name.                   |                                                                                |             |                     |
| Example: \[- "nvidia"]                                                     |                                                                                |             |                     |
| If not specified, all devices are accepted.                                |                                                                                | MinItems: 1 |                     |
| Optional: {}                                                               |                                                                                |             |                     |
|                                                                            |                                                                                |             |                     |
| `devices` *string array*                                                   | Devices is a List of explicit GPU devices to use.                              |             |                     |
| If host has multiple GPUs, this option allows to select specific devices   |                                                                                |             |                     |
| by their index in the list of found devices.                               |                                                                                |             |                     |
| If `deviceFilter` is set, indexes are applied after filtering.             |                                                                                |             |                     |
| If not specified, all devices are accepted.                                |                                                                                | MinItems: 1 |                     |
| Optional: {}                                                               |                                                                                |             |                     |
|                                                                            |                                                                                |             |                     |
| `parallelIndexes` *integer*                                                | ParallelIndexes is the number of parallel indexes to run on the GPU.           | 1           | Minimum: 1          |
| Optional: {}                                                               |                                                                                |             |                     |
|                                                                            |                                                                                |             |                     |
| `groupsCount` *integer*                                                    | GroupsCount is the amount of used vulkan "groups" of GPU.                      |             |                     |
| In other words, how many parallel points can be indexed by GPU.            |                                                                                |             |                     |
| Optimal value might depend on the GPU model.                               |                                                                                |             |                     |
| Proportional, but doesn't necessary equal to the physical number of warps. |                                                                                |             |                     |
| Do not change this value unless you know what you are doing.               |                                                                                | Minimum: 1  |                     |
| Optional: {}                                                               |                                                                                |             |                     |
|                                                                            |                                                                                |             |                     |
| `allowIntegrated` *boolean*                                                | AllowIntegrated specifies whether to allow integrated GPUs to be used.         | false       |                     |

#### GPUType

*Underlying type:* *string*

GPUType specifies the type of GPU to use.

*Validation:*

- Enum: \[nvidia amd]

*Appears in:*

- [GPU](#gpu)

| Field    | Description |
| -------- | ----------- |
| `nvidia` |             |
| `amd`    |             |

#### HelmRelease

*Appears in:*

- [QdrantCloudRegionSpec](#qdrantcloudregionspec)

| Field                                  | Description                                                                          | Default | Validation           |
| -------------------------------------- | ------------------------------------------------------------------------------------ | ------- | -------------------- |
| `markedForDeletionAt` *string*         | MarkedForDeletionAt specifies the time when the helm release was marked for deletion |         | Optional: {}         |
|                                        |                                                                                      |         |                      |
| `object` *[HelmRelease](#helmrelease)* | Object specifies the helm release object                                             |         | EmbeddedResource: {} |
|                                        |                                                                                      |         |                      |

#### HelmRepository

*Appears in:*

- [QdrantCloudRegionSpec](#qdrantcloudregionspec)

| Field                                        | Description                                                                             | Default | Validation           |
| -------------------------------------------- | --------------------------------------------------------------------------------------- | ------- | -------------------- |
| `markedForDeletionAt` *string*               | MarkedForDeletionAt specifies the time when the helm repository was marked for deletion |         | Optional: {}         |
|                                              |                                                                                         |         |                      |
| `object` *[HelmRepository](#helmrepository)* | Object specifies the helm repository object                                             |         | EmbeddedResource: {} |
|                                              |                                                                                         |         |                      |

#### InferenceConfig

*Appears in:*

- [QdrantConfiguration](#qdrantconfiguration)

| Field               | Description                                                           | Default | Validation   |
| ------------------- | --------------------------------------------------------------------- | ------- | ------------ |
| `enabled` *boolean* | Enabled specifies whether to enable inference for the cluster or not. | false   | Optional: {} |
|                     |                                                                       |         |              |

#### Ingress

*Appears in:*

- [QdrantClusterSpec](#qdrantclusterspec)

| Field                                               | Description                                                         | Default | Validation   |
| --------------------------------------------------- | ------------------------------------------------------------------- | ------- | ------------ |
| `enabled` *boolean*                                 | Enabled specifies whether to enable ingress for the cluster or not. |         | Optional: {} |
|                                                     |                                                                     |         |              |
| `annotations` *object (keys:string, values:string)* | Annotations specifies annotations for the ingress.                  |         | Optional: {} |
|                                                     |                                                                     |         |              |
| `ingressClassName` *string*                         | IngressClassName specifies the name of the ingress class            |         | Optional: {} |
|                                                     |                                                                     |         |              |
| `host` *string*                                     | Host specifies the host for the ingress.                            |         | Optional: {} |
|                                                     |                                                                     |         |              |
| `tls` *boolean*                                     | TLS specifies whether to enable tls for the ingress.                |         |              |
| The default depends on the ingress provider:        |                                                                     |         |              |

- KubernetesIngress: False
- NginxIngress: False
- QdrantCloudTraefik: Depending on the config.tls setting of the operator. |  | Optional: {}
  |
  \| `tlsSecretName` *string* | TLSSecretName specifies the name of the secret containing the tls certificate. |  | Optional: {}
  |
  \| `nginx` *[NGINXConfig](#nginxconfig)* | NGINX specifies the nginx ingress specific configurations. |  | Optional: {}
  |
  \| `traefik` *[TraefikConfig](#traefikconfig)* | Traefik specifies the traefik ingress specific configurations. |  | Optional: {}
  |

#### KubernetesDistribution

*Underlying type:* *string*

*Appears in:*

- [QdrantCloudRegionStatus](#qdrantcloudregion)

| Field       | Description |
| ----------- | ----------- |
| `unknown`   |             |
| `aws`       |             |
| `gcp`       |             |
| `azure`     |             |
| `do`        |             |
| `scaleway`  |             |
| `openshift` |             |
| `linode`    |             |
| `civo`      |             |
| `oci`       |             |
| `ovhcloud`  |             |
| `stackit`   |             |
| `vultr`     |             |
| `k3s`       |             |

#### KubernetesEventInfo

*Appears in:*

- [NodePVCStatus](#nodepvcstatus)
- [NodeStatus](#nodestatus)
- [VolumeSnapshotInfo](#volumesnapshotinfo)

| Field                                                                                                        | Description                           | Default | Validation   |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------- | ------- | ------------ |
| `message` *string*                                                                                           | Event message                         |         | Optional: {} |
|                                                                                                              |                                       |         |              |
| `reason` *string*                                                                                            | Event reason                          |         | Optional: {} |
|                                                                                                              |                                       |         |              |
| `count` *integer*                                                                                            | How many times the event has occurred |         | Optional: {} |
|                                                                                                              |                                       |         |              |
| `firstTimestamp` *[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#time-v1-meta)* | The first time the event was seen     |         | Optional: {} |
|                                                                                                              |                                       |         |              |
| `lastTimestamp` *[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#time-v1-meta)*  | The last time the event was seen      |         | Optional: {} |
|                                                                                                              |                                       |         |              |

#### KubernetesPod

*Appears in:*

- [KubernetesStatefulSet](#kubernetesstatefulset)

| Field                                                                                                            | Description                                                      | Default | Validation   |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------- | ------------ |
| `annotations` *object (keys:string, values:string)*                                                              | Annotations specifies the annotations for the Pods.              |         | Optional: {} |
|                                                                                                                  |                                                                  |         |              |
| `labels` *object (keys:string, values:string)*                                                                   | Labels specifies the labels for the Pods.                        |         | Optional: {} |
|                                                                                                                  |                                                                  |         |              |
| `extraEnv` *[EnvVar](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#envvar-v1-core) array* | ExtraEnv specifies the extra environment variables for the Pods. |         | Optional: {} |
|                                                                                                                  |                                                                  |         |              |

#### KubernetesService

*Appears in:*

- [QdrantClusterSpec](#qdrantclusterspec)

| Field                                                                                                            | Description                                                                                     | Default   | Validation   |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------- | ------------ |
| `type` *[ServiceType](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#servicetype-v1-core)* | Type specifies the type of the Service: "ClusterIP", "NodePort", "LoadBalancer".                | ClusterIP | Optional: {} |
|                                                                                                                  |                                                                                                 |           |              |
| `annotations` *object (keys:string, values:string)*                                                              | Annotations specifies the annotations for the Service.                                          |           | Optional: {} |
|                                                                                                                  |                                                                                                 |           |              |
| `loadBalancerSourceRanges` *string array*                                                                        | LoadBalancerSourceRanges specifies the allowed CIDR source ranges for the loadBalancer Service. |           | Optional: {} |
|                                                                                                                  |                                                                                                 |           |              |

#### KubernetesStatefulSet

*Appears in:*

- [QdrantClusterSpec](#qdrantclusterspec)

| Field                                               | Description                                                              | Default | Validation   |
| --------------------------------------------------- | ------------------------------------------------------------------------ | ------- | ------------ |
| `annotations` *object (keys:string, values:string)* | Annotations specifies the annotations for the StatefulSet.               |         | Optional: {} |
|                                                     |                                                                          |         |              |
| `pods` *[KubernetesPod](#kubernetespod)*            | Pods  specifies the configuration of the Pods of the Qdrant StatefulSet. |         | Optional: {} |
|                                                     |                                                                          |         |              |

#### MetricSource

*Underlying type:* *string*

*Appears in:*

- [Monitoring](#monitoring)

| Field     | Description |
| --------- | ----------- |
| `kubelet` |             |
| `api`     |             |

#### Monitoring

*Appears in:*

- [QdrantCloudRegionStatus](#qdrantcloudregion)

| Field                                                  | Description                                               | Default | Validation   |
| ------------------------------------------------------ | --------------------------------------------------------- | ------- | ------------ |
| `cAdvisorMetricSource` *[MetricSource](#metricsource)* | CAdvisorMetricSource specifies the cAdvisor metric source |         | Optional: {} |
|                                                        |                                                           |         |              |
| `nodeMetricSource` *[MetricSource](#metricsource)*     | NodeMetricSource specifies the node metric source         |         | Optional: {} |
|                                                        |                                                           |         |              |

#### NGINXConfig

*Appears in:*

- [Ingress](#ingress)

| Field                                | Description                                                                   | Default | Validation   |
| ------------------------------------ | ----------------------------------------------------------------------------- | ------- | ------------ |
| `allowedSourceRanges` *string array* | AllowedSourceRanges specifies the allowed CIDR source ranges for the ingress. |         | Optional: {} |
|                                      |                                                                               |         |              |
| `grpcHost` *string*                  | GRPCHost specifies the host name for the GRPC ingress.                        |         | Optional: {} |
|                                      |                                                                               |         |              |

#### NodeInfo

*Appears in:*

- [QdrantCloudRegionStatus](#qdrantcloudregion)

| Field                                                 | Description                                                 | Default | Validation   |
| ----------------------------------------------------- | ----------------------------------------------------------- | ------- | ------------ |
| `name` *string*                                       | Name specifies the name of the node                         |         |              |
| `region` *string*                                     | Region specifies the region of the node                     |         | Optional: {} |
|                                                       |                                                             |         |              |
| `zone` *string*                                       | Zone specifies the zone of the node                         |         | Optional: {} |
|                                                       |                                                             |         |              |
| `instanceType` *string*                               | InstanceType specifies the instance type of the node        |         | Optional: {} |
|                                                       |                                                             |         |              |
| `arch` *string*                                       | Arch specifies the CPU architecture of the node             |         | Optional: {} |
|                                                       |                                                             |         |              |
| `capacity` *[NodeResourceInfo](#noderesourceinfo)*    | Capacity specifies the capacity of the node                 |         |              |
| `allocatable` *[NodeResourceInfo](#noderesourceinfo)* | Allocatable specifies the allocatable resources of the node |         |              |

#### NodePVCStatus

*Appears in:*

- [NodeStatus](#nodestatus)

| Field                                                                                                                                                              | Description                                                                                         | Default      | Validation   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| `storageClassName` *string*                                                                                                                                        | Name of the StorageClass used by the PVC                                                            |              | Optional: {} |
|                                                                                                                                                                    |                                                                                                     |              |              |
| `phase` *[PersistentVolumeClaimPhase](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#persistentvolumeclaimphase-v1-core)*                    | Status phase of the PVC                                                                             |              | Optional: {} |
|                                                                                                                                                                    |                                                                                                     |              |              |
| `conditions` *[PersistentVolumeClaimCondition](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#persistentvolumeclaimcondition-v1-core) array* | Conditions of the PVC                                                                               |              | Optional: {} |
|                                                                                                                                                                    |                                                                                                     |              |              |
| `events` *[KubernetesEventInfo](#kuberneteseventinfo) array*                                                                                                       | Recent Kubernetes Events related to the PVC                                                         |              |              |
| Events that happened in the last 30 minutes are stored.                                                                                                            |                                                                                                     | Optional: {} |              |
|                                                                                                                                                                    |                                                                                                     |              |              |
| `capacity` *[ResourceList](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#resourcelist-v1-core)*                                             | capacity represents the actual resources of the underlying volume.                                  |              | Optional: {} |
|                                                                                                                                                                    |                                                                                                     |              |              |
| `currentVolumeAttributesClassName` *string*                                                                                                                        | currentVolumeAttributesClassName is the current name of the VolumeAttributesClass the PVC is using. |              |              |
| When unset, there is no VolumeAttributeClass applied to this PersistentVolumeClaim                                                                                 |                                                                                                     | Optional: {} |              |
|                                                                                                                                                                    |                                                                                                     |              |              |
| `modifyVolumeStatus` *[ModifyVolumeStatus](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#modifyvolumestatus-v1-core)*                       | ModifyVolumeStatus represents the status object of ControllerModifyVolume operation.                |              |              |
| When this is unset, there is no ModifyVolume operation being attempted.                                                                                            |                                                                                                     | Optional: {} |              |
|                                                                                                                                                                    |                                                                                                     |              |              |

#### NodeResourceInfo

*Appears in:*

- [NodeInfo](#nodeinfo)

| Field                       | Description                                                            | Default | Validation |
| --------------------------- | ---------------------------------------------------------------------- | ------- | ---------- |
| `cpu` *string*              | CPU specifies the CPU resources of the node                            |         |            |
| `memory` *string*           | Memory specifies the memory resources of the node                      |         |            |
| `pods` *string*             | Pods specifies the pods resources of the node                          |         |            |
| `ephemeralStorage` *string* | EphemeralStorage specifies the ephemeral storage resources of the node |         |            |

#### NodeStatus

*Appears in:*

- [QdrantClusterStatus](#qdrantcluster)

| Field                                                                                                                                                                                                                                                             | Description                                                              | Default      | Validation   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------ | ------------ |
| `name` *string*                                                                                                                                                                                                                                                   | Name specifies the name of the node                                      |              | Optional: {} |
|                                                                                                                                                                                                                                                                   |                                                                          |              |              |
| `started_at` *string*                                                                                                                                                                                                                                             | StartedAt specifies the time when the node started (in RFC3339 format)   |              | Optional: {} |
|                                                                                                                                                                                                                                                                   |                                                                          |              |              |
| `state` *object (keys:[PodConditionType](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#podconditiontype-v1-core), values:[ConditionStatus](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#conditionstatus-v1-core))* | States specifies the condition states of the node                        |              | Optional: {} |
|                                                                                                                                                                                                                                                                   |                                                                          |              |              |
| `version` *string*                                                                                                                                                                                                                                                | Version specifies the version of Qdrant running on the node              |              | Optional: {} |
|                                                                                                                                                                                                                                                                   |                                                                          |              |              |
| `liveness` *boolean*                                                                                                                                                                                                                                              | Reports if qdrant node responded to liveness request (before readiness). |              |              |
| This is needed to beter report recovery process to the user.                                                                                                                                                                                                      |                                                                          | Optional: {} |              |
|                                                                                                                                                                                                                                                                   |                                                                          |              |              |
| `zone` *string*                                                                                                                                                                                                                                                   | The availibility zone the node is running in.                            |              | Optional: {} |
|                                                                                                                                                                                                                                                                   |                                                                          |              |              |
| `podPhase` *[PodPhase](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#podphase-v1-core)*                                                                                                                                                    | Status phase of the Pod of the node                                      |              | Optional: {} |
|                                                                                                                                                                                                                                                                   |                                                                          |              |              |
| `podConditions` *[PodCondition](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#podcondition-v1-core) array*                                                                                                                                 | Conditions of the Pod of the node                                        |              | Optional: {} |
|                                                                                                                                                                                                                                                                   |                                                                          |              |              |
| `podMessage` *string*                                                                                                                                                                                                                                             | Status message of the Pod of the node                                    |              | Optional: {} |
|                                                                                                                                                                                                                                                                   |                                                                          |              |              |
| `podReason` *string*                                                                                                                                                                                                                                              | Status reason of the Pod of the node                                     |              | Optional: {} |
|                                                                                                                                                                                                                                                                   |                                                                          |              |              |
| `containerStatuses` *[ContainerStatus](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#containerstatus-v1-core) array*                                                                                                                       | Details container statuses of the Pod of the node                        |              | Optional: {} |
|                                                                                                                                                                                                                                                                   |                                                                          |              |              |
| `events` *[KubernetesEventInfo](#kuberneteseventinfo) array*                                                                                                                                                                                                      | Recent Kubernetes Events related to the Pod of the node                  |              |              |
| Events that happened in the last 30 minutes are stored.                                                                                                                                                                                                           |                                                                          | Optional: {} |              |
|                                                                                                                                                                                                                                                                   |                                                                          |              |              |
| `restartCount` *integer*                                                                                                                                                                                                                                          | The number of times the main qdrant container has been restarted.        |              | Optional: {} |
|                                                                                                                                                                                                                                                                   |                                                                          |              |              |
| `databasePVCStatus` *[NodePVCStatus](#nodepvcstatus)*                                                                                                                                                                                                             | Status of the database storage PVC                                       |              | Optional: {} |
|                                                                                                                                                                                                                                                                   |                                                                          |              |              |
| `snapshotsPVCStatus` *[NodePVCStatus](#nodepvcstatus)*                                                                                                                                                                                                            | Status of the snapshots storage PVC                                      |              | Optional: {} |
|                                                                                                                                                                                                                                                                   |                                                                          |              |              |

#### OnDemandReplicationType

*Underlying type:* *string*

OnDemandReplicationType specifies the on-demand replication restart mode.

*Validation:*

- Enum: \[Off Auto On]

*Appears in:*

- [QdrantClusterSpec](#qdrantclusterspec)

| Field  | Description |
| ------ | ----------- |
| `Off`  |             |
| `Auto` |             |
| `On`   |             |

#### Pause

*Appears in:*

- [QdrantClusterSpec](#qdrantclusterspec)

| Field                        | Description                                                              | Default | Validation |
| ---------------------------- | ------------------------------------------------------------------------ | ------- | ---------- |
| `owner` *string*             | Owner specifies the owner of the pause request.                          |         |            |
| `reason` *string*            | Reason specifies the reason for the pause request.                       |         |            |
| `creationTimestamp` *string* | CreationTimestamp specifies the time when the pause request was created. |         |            |

#### PersistentVolumeClaimTemplate

*Appears in:*

- [Storage](#storage)

| Field                                                                                                                                        | Description                                                                     | Default      | Validation |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------ | ---------- |
| `metadata` *[TemplateMetadata](#templatemetadata)*                                                                                           | Refer to Kubernetes API documentation for fields of `metadata`.                 |              |            |
| `spec` *[PersistentVolumeClaimSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#persistentvolumeclaimspec-v1-core)* | spec defines the desired characteristics of a volume requested by a pod author. |              |            |
| More info: <https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims>                                           |                                                                                 | Optional: {} |            |
|                                                                                                                                              |                                                                                 |              |            |

#### QdrantCloudRegion

QdrantCloudRegion is the Schema for the qdrantcloudregions API

*Appears in:*

- [QdrantCloudRegionList](#qdrantcloudregionlist)

| Field                                                                                                              | Description                                                     | Default | Validation |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- | ------- | ---------- |
| `apiVersion` *string*                                                                                              | `qdrant.io/v1`                                                  |         |            |
| `kind` *string*                                                                                                    | `QdrantCloudRegion`                                             |         |            |
| `metadata` *[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#objectmeta-v1-meta)* | Refer to Kubernetes API documentation for fields of `metadata`. |         |            |
| `spec` *[QdrantCloudRegionSpec](#qdrantcloudregionspec)*                                                           |                                                                 |         |            |

#### QdrantCloudRegionList

QdrantCloudRegionList contains a list of QdrantCloudRegion

| Field                                                                                                          | Description                                                     | Default | Validation |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------- | ---------- |
| `apiVersion` *string*                                                                                          | `qdrant.io/v1`                                                  |         |            |
| `kind` *string*                                                                                                | `QdrantCloudRegionList`                                         |         |            |
| `metadata` *[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#listmeta-v1-meta)* | Refer to Kubernetes API documentation for fields of `metadata`. |         |            |
| `items` *[QdrantCloudRegion](#qdrantcloudregion) array*                                                        |                                                                 |         |            |

#### QdrantCloudRegionSpec

QdrantCloudRegionSpec defines the desired state of QdrantCloudRegion

*Appears in:*

- [QdrantCloudRegion](#qdrantcloudregion)

| Field                                                          | Description                                                                          | Default      | Validation   |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------ | ------------ |
| `id` *string*                                                  | Id specifies the unique identifier of the region                                     |              |              |
| `components` *[ComponentReference](#componentreference) array* | Components specifies the list of components to be installed in the region            |              | Optional: {} |
|                                                                |                                                                                      |              |              |
| `helmRepositories` *[HelmRepository](#helmrepository) array*   | HelmRepositories specifies the list of helm repositories to be created to the region |              |              |
| Deprecated: Use "Components" instead                           |                                                                                      | Optional: {} |              |
|                                                                |                                                                                      |              |              |
| `helmReleases` *[HelmRelease](#helmrelease) array*             | HelmReleases specifies the list of helm releases to be created to the region         |              |              |
| Deprecated: Use "Components" instead                           |                                                                                      | Optional: {} |              |
|                                                                |                                                                                      |              |              |

#### QdrantCluster

QdrantCluster is the Schema for the qdrantclusters API

*Appears in:*

- [QdrantClusterList](#qdrantclusterlist)

| Field                                                                                                              | Description                                                     | Default | Validation |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- | ------- | ---------- |
| `apiVersion` *string*                                                                                              | `qdrant.io/v1`                                                  |         |            |
| `kind` *string*                                                                                                    | `QdrantCluster`                                                 |         |            |
| `metadata` *[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#objectmeta-v1-meta)* | Refer to Kubernetes API documentation for fields of `metadata`. |         |            |
| `spec` *[QdrantClusterSpec](#qdrantclusterspec)*                                                                   |                                                                 |         |            |

#### QdrantClusterList

QdrantClusterList contains a list of QdrantCluster

| Field                                                                                                          | Description                                                     | Default | Validation |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------- | ---------- |
| `apiVersion` *string*                                                                                          | `qdrant.io/v1`                                                  |         |            |
| `kind` *string*                                                                                                | `QdrantClusterList`                                             |         |            |
| `metadata` *[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#listmeta-v1-meta)* | Refer to Kubernetes API documentation for fields of `metadata`. |         |            |
| `items` *[QdrantCluster](#qdrantcluster) array*                                                                |                                                                 |         |            |

#### QdrantClusterRestore

QdrantClusterRestore is the Schema for the qdrantclusterrestores API

*Appears in:*

- [QdrantClusterRestoreList](#qdrantclusterrestorelist)

| Field                                                                                                              | Description                                                     | Default | Validation |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- | ------- | ---------- |
| `apiVersion` *string*                                                                                              | `qdrant.io/v1`                                                  |         |            |
| `kind` *string*                                                                                                    | `QdrantClusterRestore`                                          |         |            |
| `metadata` *[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#objectmeta-v1-meta)* | Refer to Kubernetes API documentation for fields of `metadata`. |         |            |
| `spec` *[QdrantClusterRestoreSpec](#qdrantclusterrestorespec)*                                                     |                                                                 |         |            |

#### QdrantClusterRestoreList

QdrantClusterRestoreList contains a list of QdrantClusterRestore objects

| Field                                                                                                          | Description                                                     | Default | Validation |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------- | ---------- |
| `apiVersion` *string*                                                                                          | `qdrant.io/v1`                                                  |         |            |
| `kind` *string*                                                                                                | `QdrantClusterRestoreList`                                      |         |            |
| `metadata` *[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#listmeta-v1-meta)* | Refer to Kubernetes API documentation for fields of `metadata`. |         |            |
| `items` *[QdrantClusterRestore](#qdrantclusterrestore) array*                                                  |                                                                 |         |            |

#### QdrantClusterRestoreSpec

QdrantClusterRestoreSpec defines the desired state of QdrantClusterRestore

*Appears in:*

- [QdrantClusterRestore](#qdrantclusterrestore)

| Field                                                     | Description                                                                   | Default | Validation |
| --------------------------------------------------------- | ----------------------------------------------------------------------------- | ------- | ---------- |
| `source` *[RestoreSource](#restoresource)*                | Source defines the source snapshot from which the restore will be done        |         |            |
| `destination` *[RestoreDestination](#restoredestination)* | Destination defines the destination cluster where the source data will end up |         |            |

#### QdrantClusterScheduledSnapshot

QdrantClusterScheduledSnapshot is the Schema for the qdrantclusterscheduledsnapshots API

*Appears in:*

- [QdrantClusterScheduledSnapshotList](#qdrantclusterscheduledsnapshotlist)

| Field                                                                                                              | Description                                                     | Default | Validation |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- | ------- | ---------- |
| `apiVersion` *string*                                                                                              | `qdrant.io/v1`                                                  |         |            |
| `kind` *string*                                                                                                    | `QdrantClusterScheduledSnapshot`                                |         |            |
| `metadata` *[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#objectmeta-v1-meta)* | Refer to Kubernetes API documentation for fields of `metadata`. |         |            |
| `spec` *[QdrantClusterScheduledSnapshotSpec](#qdrantclusterscheduledsnapshotspec)*                                 |                                                                 |         |            |

#### QdrantClusterScheduledSnapshotList

QdrantClusterScheduledSnapshotList contains a list of QdrantCluster

| Field                                                                                                          | Description                                                     | Default | Validation |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------- | ---------- |
| `apiVersion` *string*                                                                                          | `qdrant.io/v1`                                                  |         |            |
| `kind` *string*                                                                                                | `QdrantClusterScheduledSnapshotList`                            |         |            |
| `metadata` *[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#listmeta-v1-meta)* | Refer to Kubernetes API documentation for fields of `metadata`. |         |            |
| `items` *[QdrantClusterScheduledSnapshot](#qdrantclusterscheduledsnapshot) array*                              |                                                                 |         |            |

#### QdrantClusterScheduledSnapshotSpec

QdrantClusterScheduledSnapshotSpec defines the desired state of QdrantCluster

*Appears in:*

- [QdrantClusterScheduledSnapshot](#qdrantclusterscheduledsnapshot)

| Field                             | Description                                                                                    | Default                                                                                                                                                                       | Validation           |
| --------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `cluster-id` *string*             | Id specifies the unique identifier of the cluster                                              |                                                                                                                                                                               |                      |
| `scheduleShortId` *string*        | Specifies short Id which identifies a schedule                                                 |                                                                                                                                                                               | MaxLength: 8         |
|                                   |                                                                                                |                                                                                                                                                                               |                      |
| `schedule` *string*               | Cron expression for frequency of creating snapshots, see <https://en.wikipedia.org/wiki/Cron>. |                                                                                                                                                                               |                      |
| The schedule is specified in UTC. |                                                                                                | Pattern: `^(@(annually\|yearly\|monthly\|weekly\|daily\|hourly\|reboot))\|(@every (\d+(ns\|us\|µs\|ms\|s\|m\|h))+)\|((((\d+,)+\d+\|([\d\*]+(\/\|-)\d+)\|\d+\|\*) ?)\{5,7\})$` |                      |
|                                   |                                                                                                |                                                                                                                                                                               |                      |
| `retention` *string*              | Retention of schedule in hours                                                                 |                                                                                                                                                                               | Pattern: `^[0-9]+h$` |
|                                   |                                                                                                |                                                                                                                                                                               |                      |

#### QdrantClusterSnapshot

QdrantClusterSnapshot is the Schema for the qdrantclustersnapshots API

*Appears in:*

- [QdrantClusterSnapshotList](#qdrantclustersnapshotlist)

| Field                                                                                                              | Description                                                     | Default | Validation |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- | ------- | ---------- |
| `apiVersion` *string*                                                                                              | `qdrant.io/v1`                                                  |         |            |
| `kind` *string*                                                                                                    | `QdrantClusterSnapshot`                                         |         |            |
| `metadata` *[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#objectmeta-v1-meta)* | Refer to Kubernetes API documentation for fields of `metadata`. |         |            |
| `spec` *[QdrantClusterSnapshotSpec](#qdrantclustersnapshotspec)*                                                   |                                                                 |         |            |

#### QdrantClusterSnapshotList

QdrantClusterSnapshotList contains a list of QdrantClusterSnapshot

| Field                                                                                                          | Description                                                     | Default | Validation |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------- | ---------- |
| `apiVersion` *string*                                                                                          | `qdrant.io/v1`                                                  |         |            |
| `kind` *string*                                                                                                | `QdrantClusterSnapshotList`                                     |         |            |
| `metadata` *[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#listmeta-v1-meta)* | Refer to Kubernetes API documentation for fields of `metadata`. |         |            |
| `items` *[QdrantClusterSnapshot](#qdrantclustersnapshot) array*                                                |                                                                 |         |            |

#### QdrantClusterSnapshotPhase

*Underlying type:* *string*

*Appears in:*

- QdrantClusterSnapshotStatus

| Field       | Description |
| ----------- | ----------- |
| `Running`   |             |
| `Skipped`   |             |
| `Failed`    |             |
| `Succeeded` |             |

#### QdrantClusterSnapshotSpec

*Appears in:*

- [QdrantClusterSnapshot](#qdrantclustersnapshot)

| Field                                                                                   | Description                                                          | Default              | Validation   |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------- | ------------ |
| `cluster-id` *string*                                                                   | The cluster ID for which a Snapshot need to be taken                 |                      |              |
| The cluster should be in the same namespace as this QdrantClusterSnapshot is located    |                                                                      |                      |              |
| `creation-timestamp` *integer*                                                          | The CreationTimestamp of the backup (expressed in Unix epoch format) |                      | Optional: {} |
|                                                                                         |                                                                      |                      |              |
| `scheduleShortId` *string*                                                              | Specifies the short Id which identifies a schedule, if any.          |                      |              |
| This field should not be set if the backup is made manually.                            |                                                                      | MaxLength: 8         |              |
| Optional: {}                                                                            |                                                                      |                      |              |
|                                                                                         |                                                                      |                      |              |
| `retention` *string*                                                                    | The retention period of this snapshot in hours, if any.              |                      |              |
| If not set, the backup doesn't have a retention period, meaning it will not be removed. |                                                                      | Pattern: `^[0-9]+h$` |              |
| Optional: {}                                                                            |                                                                      |                      |              |
|                                                                                         |                                                                      |                      |              |

#### QdrantClusterSpec

QdrantClusterSpec defines the desired state of QdrantCluster

*Appears in:*

- [QdrantCluster](#qdrantcluster)

| Field                                                                                                                                                           | Description                                                                                                                         | Default                                                   | Validation   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------ |
| `id` *string*                                                                                                                                                   | Id specifies the unique identifier of the cluster                                                                                   |                                                           |              |
| `version` *string*                                                                                                                                              | Version specifies the version of Qdrant to deploy                                                                                   |                                                           |              |
| `size` *integer*                                                                                                                                                | Size specifies the desired number of Qdrant nodes in the cluster                                                                    |                                                           | Maximum: 100 |
| Minimum: 1                                                                                                                                                      |                                                                                                                                     |                                                           |              |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `servicePerNode` *boolean*                                                                                                                                      | ServicePerNode specifies whether the cluster should start a dedicated service for each node.                                        | true                                                      | Optional: {} |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `clusterManager` *boolean*                                                                                                                                      | ClusterManager specifies whether to use the cluster manager for this cluster.                                                       |                                                           |              |
| The Python-operator will deploy a dedicated cluster manager instance.                                                                                           |                                                                                                                                     |                                                           |              |
| The Go-operator will use a shared instance.                                                                                                                     |                                                                                                                                     |                                                           |              |
| If not set, the default will be taken from the operator config.                                                                                                 |                                                                                                                                     | Optional: {}                                              |              |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `suspend` *boolean*                                                                                                                                             | Suspend specifies whether to suspend the cluster.                                                                                   |                                                           |              |
| If enabled, the cluster will be suspended and all related resources will be removed except the PVCs.                                                            | false                                                                                                                               | Optional: {}                                              |              |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `pauses` *[Pause](#pause) array*                                                                                                                                | Pauses specifies a list of pause request by developer for manual maintenance.                                                       |                                                           |              |
| Operator will skip handling any changes in the CR if any pause request is present.                                                                              |                                                                                                                                     | Optional: {}                                              |              |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `image` *[QdrantImage](#qdrantimage)*                                                                                                                           | Image specifies the image to use for each Qdrant node.                                                                              |                                                           | Optional: {} |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `resources` *[Resources](#resources)*                                                                                                                           | Resources specifies the resources to allocate for each Qdrant node.                                                                 |                                                           |              |
| `security` *[QdrantSecurityContext](#qdrantsecuritycontext)*                                                                                                    | Security specifies the security context for each Qdrant node.                                                                       |                                                           | Optional: {} |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `tolerations` *[Toleration](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#toleration-v1-core) array*                                     | Tolerations specifies the tolerations for each Qdrant node.                                                                         |                                                           | Optional: {} |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `nodeSelector` *object (keys:string, values:string)*                                                                                                            | NodeSelector specifies the node selector for each Qdrant node.                                                                      |                                                           | Optional: {} |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `config` *[QdrantConfiguration](#qdrantconfiguration)*                                                                                                          | Config specifies the Qdrant configuration setttings for the clusters.                                                               |                                                           | Optional: {} |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `ingress` *[Ingress](#ingress)*                                                                                                                                 | Ingress specifies the ingress for the cluster.                                                                                      |                                                           | Optional: {} |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `service` *[KubernetesService](#kubernetesservice)*                                                                                                             | Service specifies the configuration of the Qdrant Kubernetes Service.                                                               |                                                           | Optional: {} |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `gpu` *[GPU](#gpu)*                                                                                                                                             | GPU specifies GPU configuration for the cluster. If this field is not set, no GPU will be used.                                     |                                                           | Optional: {} |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `statefulSet` *[KubernetesStatefulSet](#kubernetesstatefulset)*                                                                                                 | StatefulSet specifies the configuration of the Qdrant Kubernetes StatefulSet.                                                       |                                                           | Optional: {} |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `storageClassNames` *[StorageClassNames](#storageclassnames)*                                                                                                   | StorageClassNames specifies the storage class names for db and snapshots.                                                           |                                                           | Optional: {} |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `storage` *[Storage](#storage)*                                                                                                                                 | Storage specifies the storage specification for the PVCs of the cluster. If the field is not set, no configuration will be applied. |                                                           | Optional: {} |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `topologySpreadConstraints` *[TopologySpreadConstraint](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#topologyspreadconstraint-v1-core)* | TopologySpreadConstraints specifies the topology spread constraints for the cluster.                                                |                                                           | Optional: {} |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `podDisruptionBudget` *[PodDisruptionBudgetSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#poddisruptionbudgetspec-v1-policy)*       | PodDisruptionBudget specifies the pod disruption budget for the cluster.                                                            |                                                           | Optional: {} |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `restartAllPodsConcurrently` *boolean*                                                                                                                          | RestartAllPodsConcurrently specifies whether to restart all pods concurrently (also called one-shot-restart).                       |                                                           |              |
| If enabled, all the pods in the cluster will be restarted concurrently in situations where multiple pods                                                        |                                                                                                                                     |                                                           |              |
| need to be restarted, like when RestartedAtAnnotationKey is added/updated or the Qdrant version needs to be upgraded.                                           |                                                                                                                                     |                                                           |              |
| This helps sharded but not replicated clusters to reduce downtime to a possible minimum during restart.                                                         |                                                                                                                                     |                                                           |              |
| If unset, the operator is going to restart nodes concurrently if none of the collections if replicated.                                                         |                                                                                                                                     | Optional: {}                                              |              |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `onDemandReplication` *[OnDemandReplicationType](#ondemandreplicationtype)*                                                                                     | OnDemandReplication specifies the on-demand replication restart mode.                                                               |                                                           |              |
| Off (default): Normal restart behavior. Pods are restarted directly.                                                                                            |                                                                                                                                     |                                                           |              |
| Auto: The operator checks telemetry for non-replicated shards. If found, uses the recreate-node flow.                                                           |                                                                                                                                     |                                                           |              |
| On: Always uses the recreate-node flow for eligible restart triggers.                                                                                           | Off                                                                                                                                 | Enum: \[Off Auto On]                                      |              |
| Optional: {}                                                                                                                                                    |                                                                                                                                     |                                                           |              |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `startupDelaySeconds` *integer*                                                                                                                                 | If StartupDelaySeconds is set (> 0), an additional 'sleep <value>' will be emitted to the pod startup.                              |                                                           |              |
| The sleep will be added when a pod is restarted, it will not force any pod to restart.                                                                          |                                                                                                                                     |                                                           |              |
| This feature can be used for debugging the core, e.g. if a pod is in crash loop, it provided a way                                                              |                                                                                                                                     |                                                           |              |
| to inspect the attached storage.                                                                                                                                |                                                                                                                                     | Optional: {}                                              |              |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `rebalanceStrategy` *[RebalanceStrategy](#rebalancestrategy)*                                                                                                   | RebalanceStrategy specifies the strategy to use for automaticially rebalancing shards the cluster.                                  |                                                           |              |
| Cluster-manager needs to be enabled for this feature to work.                                                                                                   |                                                                                                                                     | Enum: \[by\_count by\_size by\_count\_and\_size disabled] |              |
| Optional: {}                                                                                                                                                    |                                                                                                                                     |                                                           |              |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `readClusters` *[ReadCluster](#readcluster) array*                                                                                                              | ReadClusters specifies the read clusters for this cluster to synchronize.                                                           |                                                           |              |
| Cluster-manager needs to be enabled for this feature to work.                                                                                                   |                                                                                                                                     | Optional: {}                                              |              |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `writeCluster` *[WriteCluster](#writecluster)*                                                                                                                  | WriteCluster specifies the write cluster for this cluster. This configures the NetworkPolicy to allow egress to the write cluster.  |                                                           | Optional: {} |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |
| `multiAZ` *boolean*                                                                                                                                             | MultiAZ indicates that this cluster spans multiple availability zones                                                               |                                                           |              |
| and traffic should be kept same-zone where possible. When true, the                                                                                             |                                                                                                                                     |                                                           |              |
| operator propagates the flag to the generated QdrantClusterRouting so                                                                                           |                                                                                                                                     |                                                           |              |
| the route-manager enables zone-aware load balancing on the Envoy                                                                                                |                                                                                                                                     |                                                           |              |
| clusters that front this Qdrant cluster.                                                                                                                        | false                                                                                                                               | Optional: {}                                              |              |
|                                                                                                                                                                 |                                                                                                                                     |                                                           |              |

#### QdrantConfiguration

*Appears in:*

- [QdrantClusterSpec](#qdrantclusterspec)

| Field                                                                          | Description                                                                                                                | Default | Validation   |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ------- | ------------ |
| `collection` *[QdrantConfigurationCollection](#qdrantconfigurationcollection)* | Collection specifies the default collection configuration for Qdrant.                                                      |         | Optional: {} |
|                                                                                |                                                                                                                            |         |              |
| `log_level` *string*                                                           | LogLevel specifies the log level for Qdrant.                                                                               |         | Optional: {} |
|                                                                                |                                                                                                                            |         |              |
| `service` *[QdrantConfigurationService](#qdrantconfigurationservice)*          | Service specifies the service level configuration for Qdrant.                                                              |         | Optional: {} |
|                                                                                |                                                                                                                            |         |              |
| `tls` *[QdrantConfigurationTLS](#qdrantconfigurationtls)*                      | TLS specifies the TLS configuration for Qdrant.                                                                            |         | Optional: {} |
|                                                                                |                                                                                                                            |         |              |
| `storage` *[StorageConfig](#storageconfig)*                                    | Storage specifies the storage configuration for Qdrant.                                                                    |         | Optional: {} |
|                                                                                |                                                                                                                            |         |              |
| `inference` *[InferenceConfig](#inferenceconfig)*                              | Inference configuration. This is used in Qdrant Managed Cloud only. If not set Inference is not available to this cluster. |         | Optional: {} |
|                                                                                |                                                                                                                            |         |              |
| `audit` *[AuditConfig](#auditconfig)*                                          | Audit specifies the audit logging configuration for Qdrant.                                                                |         | Optional: {} |
|                                                                                |                                                                                                                            |         |              |

#### QdrantConfigurationCollection

*Appears in:*

- [QdrantConfiguration](#qdrantconfiguration)

| Field                                                                                               | Description                                                                                             | Default | Validation   |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- | ------------ |
| `replication_factor` *integer*                                                                      | ReplicationFactor specifies the default number of replicas of each shard                                |         | Optional: {} |
|                                                                                                     |                                                                                                         |         |              |
| `write_consistency_factor` *integer*                                                                | WriteConsistencyFactor specifies how many replicas should apply the operation to consider it successful |         | Optional: {} |
|                                                                                                     |                                                                                                         |         |              |
| `vectors` *[QdrantConfigurationCollectionVectors](#qdrantconfigurationcollectionvectors)*           | Vectors specifies the default parameters for vectors                                                    |         | Optional: {} |
|                                                                                                     |                                                                                                         |         |              |
| `strict_mode` *[QdrantConfigurationCollectionStrictMode](#qdrantconfigurationcollectionstrictmode)* | StrictMode specifies the strict mode configuration for the collection                                   |         | Optional: {} |
|                                                                                                     |                                                                                                         |         |              |

#### QdrantConfigurationCollectionStrictMode

*Appears in:*

- [QdrantConfigurationCollection](#qdrantconfigurationcollection)

| Field                                                  | Description                                                                                  | Default    | Validation |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------- | ---------- | ---------- |
| `max_payload_index_count` *integer*                    | MaxPayloadIndexCount represents the maximal number of payload indexes allowed to be created. |            |            |
| It can be set for Qdrant version >= 1.16.0             |                                                                                              |            |            |
| Default to 100 if omitted and Qdrant version >= 1.16.0 |                                                                                              | Minimum: 1 |            |
| Optional: {}                                           |                                                                                              |            |            |
|                                                        |                                                                                              |            |            |

#### QdrantConfigurationCollectionVectors

*Appears in:*

- [QdrantConfigurationCollection](#qdrantconfigurationcollection)

| Field               | Description                                                             | Default | Validation   |
| ------------------- | ----------------------------------------------------------------------- | ------- | ------------ |
| `on_disk` *boolean* | OnDisk specifies whether vectors should be stored in memory or on disk. |         | Optional: {} |
|                     |                                                                         |         |              |

#### QdrantConfigurationService

*Appears in:*

- [QdrantConfiguration](#qdrantconfiguration)

| Field                                                           | Description                                                                                | Default      | Validation   |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------ | ------------ |
| `api_key` *[QdrantSecretKeyRef](#qdrantsecretkeyref)*           | ApiKey for the qdrant instance                                                             |              | Optional: {} |
|                                                                 |                                                                                            |              |              |
| `read_only_api_key` *[QdrantSecretKeyRef](#qdrantsecretkeyref)* | ReadOnlyApiKey for the qdrant instance                                                     |              | Optional: {} |
|                                                                 |                                                                                            |              |              |
| `jwt_rbac` *boolean*                                            | JwtRbac specifies whether to enable jwt rbac for the qdrant instance                       |              |              |
| Default is false                                                |                                                                                            | Optional: {} |              |
|                                                                 |                                                                                            |              |              |
| `hide_jwt_dashboard` *boolean*                                  | HideJwtDashboard specifies whether to hide the JWT dashboard of the embedded UI            |              |              |
| Default is false                                                |                                                                                            | Optional: {} |              |
|                                                                 |                                                                                            |              |              |
| `enable_tls` *boolean*                                          | EnableTLS specifies whether to enable tls for the qdrant instance                          |              |              |
| Default is false                                                |                                                                                            | Optional: {} |              |
|                                                                 |                                                                                            |              |              |
| `max_request_size_mb` *integer*                                 | MaxRequestSizeMb specifies them maximum size of POST data in a single request in megabytes |              |              |
| Default, if not set is 32 (MB)                                  |                                                                                            | Optional: {} |              |
|                                                                 |                                                                                            |              |              |

#### QdrantConfigurationTLS

*Appears in:*

- [QdrantConfiguration](#qdrantconfiguration)

| Field                                                | Description                                                          | Default | Validation   |
| ---------------------------------------------------- | -------------------------------------------------------------------- | ------- | ------------ |
| `cert` *[QdrantSecretKeyRef](#qdrantsecretkeyref)*   | Reference to the secret containing the server certificate chain file |         | Optional: {} |
|                                                      |                                                                      |         |              |
| `key` *[QdrantSecretKeyRef](#qdrantsecretkeyref)*    | Reference to the secret containing the server private key file       |         | Optional: {} |
|                                                      |                                                                      |         |              |
| `caCert` *[QdrantSecretKeyRef](#qdrantsecretkeyref)* | Reference to the secret containing the CA certificate file           |         | Optional: {} |
|                                                      |                                                                      |         |              |

#### QdrantEntity

QdrantEntity is the Schema for the qdrantentities API

*Appears in:*

- [QdrantEntityList](#qdrantentitylist)

| Field                                                                                                              | Description                                                     | Default | Validation |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- | ------- | ---------- |
| `apiVersion` *string*                                                                                              | `qdrant.io/v1`                                                  |         |            |
| `kind` *string*                                                                                                    | `QdrantEntity`                                                  |         |            |
| `metadata` *[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#objectmeta-v1-meta)* | Refer to Kubernetes API documentation for fields of `metadata`. |         |            |
| `spec` *[QdrantEntitySpec](#qdrantentityspec)*                                                                     |                                                                 |         |            |

#### QdrantEntityList

QdrantEntityList contains a list of QdrantEntity objects

| Field                                                                                                          | Description                                                     | Default | Validation |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------- | ---------- |
| `apiVersion` *string*                                                                                          | `qdrant.io/v1`                                                  |         |            |
| `kind` *string*                                                                                                | `QdrantEntityList`                                              |         |            |
| `metadata` *[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#listmeta-v1-meta)* | Refer to Kubernetes API documentation for fields of `metadata`. |         |            |
| `items` *[QdrantEntity](#qdrantentity) array*                                                                  |                                                                 |         |            |

#### QdrantEntitySpec

QdrantEntitySpec defines the desired state of QdrantEntity

*Appears in:*

- [QdrantEntity](#qdrantentity)

| Field                                                                                                                 | Description                                                           | Default | Validation   |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------- | ------------ |
| `id` *string*                                                                                                         | The unique identifier of the entity (in UUID format).                 |         |              |
| `entityType` *string*                                                                                                 | The type of the entity.                                               |         |              |
| `clusterId` *string*                                                                                                  | The optional cluster identifier                                       |         | Optional: {} |
|                                                                                                                       |                                                                       |         |              |
| `createdAt` *[MicroTime](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#microtime-v1-meta)*     | Timestamp when the entity was created.                                |         |              |
| `lastUpdatedAt` *[MicroTime](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#microtime-v1-meta)* | Timestamp when the entity was last updated.                           |         |              |
| `deletedAt` *[MicroTime](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#microtime-v1-meta)*     | Timestamp when the entity was deleted (or is started to be deleting). |         |              |
| If not set the entity is not deleted                                                                                  |                                                                       |         |              |
| `payload` *[JSON](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#json-v1-apiextensions-k8s-io)* | Generic payload for this entity                                       |         |              |

#### QdrantEntityStatusResult

QdrantEntityStatusResult is the last result from the invocation to a manager

*Appears in:*

- QdrantEntityStatus

| Field                                                                                                                 | Description                                         | Default | Validation                |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------- | ------------------------- |
| `result` *[EntityResult](#entityresult)*                                                                              | The result of last reconcile of the entity          |         | Enum: \[Ok Pending Error] |
|                                                                                                                       |                                                     |         |                           |
| `reason` *string*                                                                                                     | The reason of the result (e.g. in case of an error) |         |                           |
| `payload` *[JSON](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#json-v1-apiextensions-k8s-io)* | The optional payload of the status.                 |         |                           |

#### QdrantImage

*Appears in:*

- [QdrantClusterSpec](#qdrantclusterspec)

| Field                                                                                                                | Description                                                      | Default      | Validation   |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------ | ------------ |
| `repository` *string*                                                                                                | Repository specifies the repository of the Qdrant image.         |              |              |
| If not specified defaults the config of the operator (or qdrant/qdrant if not specified in operator).                |                                                                  | Optional: {} |              |
|                                                                                                                      |                                                                  |              |              |
| `pullPolicy` *[PullPolicy](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#pullpolicy-v1-core)* | PullPolicy specifies the image pull policy for the Qdrant image. |              |              |
| If not specified defaults the config of the operator (or IfNotPresent if not specified in operator).                 |                                                                  | Optional: {} |              |
|                                                                                                                      |                                                                  |              |              |
| `pullSecretName` *string*                                                                                            | PullSecretName specifies the pull secret for the Qdrant image.   |              | Optional: {} |
|                                                                                                                      |                                                                  |              |              |

#### QdrantRelease

QdrantRelease describes an available Qdrant release

*Appears in:*

- [QdrantReleaseList](#qdrantreleaselist)

| Field                                                                                                              | Description                                                     | Default | Validation |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- | ------- | ---------- |
| `apiVersion` *string*                                                                                              | `qdrant.io/v1`                                                  |         |            |
| `kind` *string*                                                                                                    | `QdrantRelease`                                                 |         |            |
| `metadata` *[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#objectmeta-v1-meta)* | Refer to Kubernetes API documentation for fields of `metadata`. |         |            |
| `spec` *[QdrantReleaseSpec](#qdrantreleasespec)*                                                                   |                                                                 |         |            |

#### QdrantReleaseList

QdrantReleaseList contains a list of QdrantRelease

| Field                                                                                                          | Description                                                     | Default | Validation |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------- | ---------- |
| `apiVersion` *string*                                                                                          | `qdrant.io/v1`                                                  |         |            |
| `kind` *string*                                                                                                | `QdrantReleaseList`                                             |         |            |
| `metadata` *[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#listmeta-v1-meta)* | Refer to Kubernetes API documentation for fields of `metadata`. |         |            |
| `items` *[QdrantRelease](#qdrantrelease) array*                                                                |                                                                 |         |            |

#### QdrantReleaseSpec

QdrantReleaseSpec defines the desired state of QdrantRelease

*Appears in:*

- [QdrantRelease](#qdrantrelease)

| Field                                                                                  | Description                                                                                   | Default      | Validation   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------ | ------------ |
| `version` *string*                                                                     | Version number (should be semver compliant).                                                  |              |              |
| E.g. "v1.10.1"                                                                         |                                                                                               |              |              |
| `default` *boolean*                                                                    | If set, this version is default for new clusters on Cloud.                                    |              |              |
| There should be only 1 Qdrant version in the platform set as default.                  | false                                                                                         | Optional: {} |              |
|                                                                                        |                                                                                               |              |              |
| `image` *string*                                                                       | Full docker image to use for this version.                                                    |              |              |
| If empty, a default image will be derived from Version (and qdrant/qdrant is assumed). |                                                                                               | Optional: {} |              |
|                                                                                        |                                                                                               |              |              |
| `unavailable` *boolean*                                                                | If set, this version cannot be used for new clusters.                                         | false        | Optional: {} |
|                                                                                        |                                                                                               |              |              |
| `endOfLife` *boolean*                                                                  | If set, this version is no longer actively supported.                                         | false        | Optional: {} |
|                                                                                        |                                                                                               |              |              |
| `accountIds` *string array*                                                            | If set, this version can only be used by accounts with given IDs.                             |              | Optional: {} |
|                                                                                        |                                                                                               |              |              |
| `accountPrivileges` *string array*                                                     | If set, this version can only be used by accounts that have been given the listed privileges. |              | Optional: {} |
|                                                                                        |                                                                                               |              |              |
| `remarks` *string*                                                                     | General remarks for human reading                                                             |              | Optional: {} |
|                                                                                        |                                                                                               |              |              |
| `releaseNotesURL` *string*                                                             | Release Notes URL for the specified version                                                   |              |              |

#### QdrantSecretKeyRef

*Appears in:*

- [QdrantConfigurationService](#qdrantconfigurationservice)
- [QdrantConfigurationTLS](#qdrantconfigurationtls)

| Field                                                                                                                                | Description                                                                 | Default | Validation   |
| ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- | ------- | ------------ |
| `secretKeyRef` *[SecretKeySelector](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#secretkeyselector-v1-core)* | SecretKeyRef to the secret containing data to configure the qdrant instance |         | Optional: {} |
|                                                                                                                                      |                                                                             |         |              |

#### QdrantSecurityContext

*Appears in:*

- [QdrantClusterSpec](#qdrantclusterspec)

| Field               | Description                                                       | Default | Validation   |
| ------------------- | ----------------------------------------------------------------- | ------- | ------------ |
| `user` *integer*    | User specifies the user to run the Qdrant process as.             |         |              |
| `group` *integer*   | Group specifies the group to run the Qdrant process as.           |         |              |
| `fsGroup` *integer* | FsGroup specifies file system group to run the Qdrant process as. |         | Optional: {} |
|                     |                                                                   |         |              |

#### ReadCluster

*Appears in:*

- [QdrantClusterSpec](#qdrantclusterspec)

| Field         | Description                                            | Default | Validation |
| ------------- | ------------------------------------------------------ | ------- | ---------- |
| `id` *string* | Id specifies the unique identifier of the read cluster |         |            |

#### RebalanceStrategy

*Underlying type:* *string*

RebalanceStrategy specifies the strategy to use for automatically rebalancing shards the cluster.

*Validation:*

- Enum: \[by\_count by\_size by\_count\_and\_size disabled]

*Appears in:*

- [QdrantClusterSpec](#qdrantclusterspec)

| Field               | Description |
| ------------------- | ----------- |
| `by_count`          |             |
| `by_size`           |             |
| `by_count_and_size` |             |
| `disabled`          |             |

#### RegionCapabilities

*Appears in:*

- [QdrantCloudRegionStatus](#qdrantcloudregion)

| Field                       | Description                                                                        | Default | Validation   |
| --------------------------- | ---------------------------------------------------------------------------------- | ------- | ------------ |
| `volumeSnapshot` *boolean*  | VolumeSnapshot specifies whether the Kubernetes cluster supports volume snapshot   |         | Optional: {} |
|                             |                                                                                    |         |              |
| `volumeExpansion` *boolean* | VolumeExpansion specifies whether the Kubernetes cluster supports volume expansion |         | Optional: {} |
|                             |                                                                                    |         |              |

#### RegionPhase

*Underlying type:* *string*

*Appears in:*

- [QdrantCloudRegionStatus](#qdrantcloudregion)

| Field          | Description |
| -------------- | ----------- |
| `Ready`        |             |
| `NotReady`     |             |
| `FailedToSync` |             |

#### ResourceRequests

*Appears in:*

- [Resources](#resources)

| Field             | Description                                               | Default | Validation   |
| ----------------- | --------------------------------------------------------- | ------- | ------------ |
| `cpu` *string*    | CPU specifies the CPU request for each Qdrant node.       |         | Optional: {} |
|                   |                                                           |         |              |
| `memory` *string* | Memory specifies the memory request for each Qdrant node. |         | Optional: {} |
|                   |                                                           |         |              |

#### Resources

*Appears in:*

- [QdrantClusterSpec](#qdrantclusterspec)

| Field                                              | Description                                                    | Default | Validation   |
| -------------------------------------------------- | -------------------------------------------------------------- | ------- | ------------ |
| `cpu` *string*                                     | CPU specifies the CPU limit for each Qdrant node.              |         |              |
| `memory` *string*                                  | Memory specifies the memory limit for each Qdrant node.        |         |              |
| `storage` *string*                                 | Storage specifies the storage amount for each Qdrant node.     |         |              |
| `requests` *[ResourceRequests](#resourcerequests)* | Requests specifies the resource requests for each Qdrant node. |         | Optional: {} |
|                                                    |                                                                |         |              |

#### RestoreDestination

*Appears in:*

- [QdrantClusterRestoreSpec](#qdrantclusterrestorespec)

| Field                                                                    | Description                            | Default      | Validation |
| ------------------------------------------------------------------------ | -------------------------------------- | ------------ | ---------- |
| `name` *string*                                                          | Name of the destination cluster        |              |            |
| `namespace` *string*                                                     | Namespace of the destination cluster   |              |            |
| `create` *boolean*                                                       | Create when set to true indicates that |              |            |
| a new cluster with the specified name should be created.                 |                                        |              |            |
| Otherwise, if set to false, the existing cluster is going to be restored |                                        |              |            |
| to the specified state.                                                  |                                        | Optional: {} |            |
|                                                                          |                                        |              |            |

#### RestorePhase

*Underlying type:* *string*

*Appears in:*

- QdrantClusterRestoreStatus

| Field       | Description |
| ----------- | ----------- |
| `Running`   |             |
| `Skipped`   |             |
| `Failed`    |             |
| `Succeeded` |             |
| `Pending`   |             |

#### RestoreSource

*Appears in:*

- [QdrantClusterRestoreSpec](#qdrantclusterrestorespec)

| Field                   | Description                                                            | Default | Validation |
| ----------------------- | ---------------------------------------------------------------------- | ------- | ---------- |
| `snapshotName` *string* | SnapshotName is the name of the snapshot from which we wish to restore |         |            |
| `namespace` *string*    | Namespace of the snapshot                                              |         |            |

#### ScheduledSnapshotPhase

*Underlying type:* *string*

*Appears in:*

- QdrantClusterScheduledSnapshotStatus

| Field      | Description |
| ---------- | ----------- |
| `Active`   |             |
| `Disabled` |             |

#### Storage

*Appears in:*

- [QdrantClusterSpec](#qdrantclusterspec)

| Field                                                                                                                                    | Description                                                                                  | Default      | Validation   |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------ | ------------ |
| `volumeAttributesClassName` *string*                                                                                                     | VolumeAttributesClassName specifies VolumeAttributeClass name to use for the storage PVCs    |              | Optional: {} |
|                                                                                                                                          |                                                                                              |              |              |
| `volumeSnapshotClassName` *string*                                                                                                       | VolumeSnapshotClassName specifies the VolumeSnapshotClass used when creating                 |              |              |
| VolumeSnapshot resources for this cluster's backups.                                                                                     |                                                                                              | Optional: {} |              |
|                                                                                                                                          |                                                                                              |              |              |
| `iops` *integer*                                                                                                                         | IOPS defines the IOPS number to configure for the storage PVCs                               |              | Optional: {} |
|                                                                                                                                          |                                                                                              |              |              |
| `throughput` *integer*                                                                                                                   | Throughput defines the throughput number in MB/s for the storage PVCs                        |              | Optional: {} |
|                                                                                                                                          |                                                                                              |              |              |
| `additionalVolumes` *[Volume](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#volume-v1-core) array*                | AdditionalVolumes specifies additional volumes to add to the Qdrant Pods.                    |              | Optional: {} |
|                                                                                                                                          |                                                                                              |              |              |
| `additionalVolumeClaimTemplates` *[PersistentVolumeClaimTemplate](#persistentvolumeclaimtemplate) array*                                 | AdditionalVolumeClaimTemplates specifies volumeClaimTemplates to create for each Qdrant Pod. |              |              |
| These are added in addition to the default storage and snapshot PVCs created by the operator.                                            |                                                                                              | Optional: {} |              |
|                                                                                                                                          |                                                                                              |              |              |
| `additionalVolumeMounts` *[VolumeMount](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#volumemount-v1-core) array* | AdditionalVolumeMounts specifies additional volumeMounts to add to the Qdrant container.     |              | Optional: {} |
|                                                                                                                                          |                                                                                              |              |              |

#### StorageClass

*Appears in:*

- [QdrantCloudRegionStatus](#qdrantcloudregion)

| Field                                              | Description                                                                      | Default | Validation   |
| -------------------------------------------------- | -------------------------------------------------------------------------------- | ------- | ------------ |
| `name` *string*                                    | Name specifies the name of the storage class                                     |         |              |
| `default` *boolean*                                | Default specifies whether the storage class is the default storage class         |         |              |
| `provisioner` *string*                             | Provisioner specifies the provisioner of the storage class                       |         |              |
| `allowVolumeExpansion` *boolean*                   | AllowVolumeExpansion specifies whether the storage class allows volume expansion |         |              |
| `reclaimPolicy` *string*                           | ReclaimPolicy specifies the reclaim policy of the storage class                  |         |              |
| `parameters` *object (keys:string, values:string)* | Parameters specifies the parameters of the storage class                         |         | Optional: {} |
|                                                    |                                                                                  |         |              |

#### StorageClassNames

*Appears in:*

- [QdrantClusterSpec](#qdrantclusterspec)

| Field                | Description                                                      | Default | Validation   |
| -------------------- | ---------------------------------------------------------------- | ------- | ------------ |
| `db` *string*        | DB specifies the storage class name for db volume.               |         | Optional: {} |
|                      |                                                                  |         |              |
| `snapshots` *string* | Snapshots specifies the storage class name for snapshots volume. |         | Optional: {} |
|                      |                                                                  |         |              |

#### StorageConfig

*Appears in:*

- [QdrantConfiguration](#qdrantconfiguration)

| Field                                                                 | Description                                                                        | Default    | Validation   |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------- | ------------ |
| `performance` *[StoragePerformanceConfig](#storageperformanceconfig)* | Performance configuration                                                          |            | Optional: {} |
|                                                                       |                                                                                    |            |              |
| `maxCollections` *integer*                                            | MaxCollections represents the maximal number of collections allowed to be created. |            |              |
| It can be set for Qdrant version >= 1.14.1                            |                                                                                    |            |              |
| Default to 1000 if omitted and Qdrant version >= 1.15.0               |                                                                                    | Minimum: 1 |              |
| Optional: {}                                                          |                                                                                    |            |              |
|                                                                       |                                                                                    |            |              |

#### StoragePerformanceConfig

*Appears in:*

- [StorageConfig](#storageconfig)

| Field                                                                        | Description                                              | Default      | Validation   |
| ---------------------------------------------------------------------------- | -------------------------------------------------------- | ------------ | ------------ |
| `optimizer_cpu_budget` *integer*                                             | OptimizerCPUBudget defines the number of CPU allocation. |              |              |
| If 0 - auto selection, keep 1 or more CPUs unallocated depending on CPU size |                                                          |              |              |
| If negative - subtract this number of CPUs from the available CPUs.          |                                                          |              |              |
| If positive - use this exact number of CPUs.                                 |                                                          | Optional: {} |              |
|                                                                              |                                                          |              |              |
| `async_scorer` *boolean*                                                     | AsyncScorer enables io\_uring when rescoring             |              | Optional: {} |
|                                                                              |                                                          |              |              |

#### TemplateMetadata

*Appears in:*

- [PersistentVolumeClaimTemplate](#persistentvolumeclaimtemplate)

| Field                                                                                      | Description                                                                           | Default      | Validation |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- | ------------ | ---------- |
| `name` *string*                                                                            | Name must be unique within a namespace. Is required when creating resources, although |              |            |
| some resources may allow a client to request the generation of an appropriate name         |                                                                                       |              |            |
| automatically. Name is primarily intended for creation idempotence and configuration       |                                                                                       |              |            |
| definition.                                                                                |                                                                                       |              |            |
| Cannot be updated.                                                                         |                                                                                       |              |            |
| More info: <https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names> |                                                                                       | Optional: {} |            |
|                                                                                            |                                                                                       |              |            |
| `labels` *object (keys:string, values:string)*                                             | Map of string keys and values that can be used to organize and categorize             |              |            |
| (scope and select) objects. May match selectors of replication controllers                 |                                                                                       |              |            |
| and services.                                                                              |                                                                                       |              |            |
| More info: <https://kubernetes.io/docs/concepts/overview/working-with-objects/labels>      |                                                                                       | Optional: {} |            |
|                                                                                            |                                                                                       |              |            |
| `annotations` *object (keys:string, values:string)*                                        | Annotations is an unstructured key value map stored with a resource that may be       |              |            |
| set by external tools to store and retrieve arbitrary metadata. They are not               |                                                                                       |              |            |
| queryable and should be preserved when modifying objects.                                  |                                                                                       |              |            |
| More info: <https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations> |                                                                                       | Optional: {} |            |
|                                                                                            |                                                                                       |              |            |

#### TraefikConfig

*Appears in:*

- [Ingress](#ingress)

| Field                                                                              | Description                                                                   | Default | Validation   |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------- | ------------ |
| `allowedSourceRanges` *string array*                                               | AllowedSourceRanges specifies the allowed CIDR source ranges for the ingress. |         | Optional: {} |
|                                                                                    |                                                                               |         |              |
| `entryPoints` *string array*                                                       | EntryPoints is the list of traefik entry points to use for the ingress route. |         |              |
| If nothing is set, it will take the entryPoints configured in the operator config. |                                                                               |         |              |

#### VolumeAttributesClass

*Appears in:*

- [QdrantCloudRegionStatus](#qdrantcloudregion)

| Field                                              | Description                                                       | Default | Validation   |
| -------------------------------------------------- | ----------------------------------------------------------------- | ------- | ------------ |
| `name` *string*                                    | Name specifies the name of the volume atrribute class             |         |              |
| `driver` *string*                                  | Driver specifies the driver of the volume atrribute class         |         |              |
| `parameters` *object (keys:string, values:string)* | Parameters specifies the parameters of the volume atrribute class |         | Optional: {} |
|                                                    |                                                                   |         |              |

#### VolumeSnapshotClass

*Appears in:*

- [QdrantCloudRegionStatus](#qdrantcloudregion)

| Field             | Description                                              | Default | Validation |
| ----------------- | -------------------------------------------------------- | ------- | ---------- |
| `name` *string*   | Name specifies the name of the volume snapshot class     |         |            |
| `driver` *string* | Driver specifies the driver of the volume snapshot class |         |            |

#### VolumeSnapshotInfo

*Appears in:*

- QdrantClusterSnapshotStatus

| Field                                                        | Description                                                                              | Default      | Validation   |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ------------ | ------------ |
| `volumeSnapshotName` *string*                                | VolumeSnapshotName is the name of the volume snapshot                                    |              |              |
| `volumeName` *string*                                        | VolumeName is the name of the volume that was backed up                                  |              |              |
| `readyToUse` *boolean*                                       | ReadyToUse indicates if the volume snapshot is ready to use                              |              | Optional: {} |
|                                                              |                                                                                          |              |              |
| `snapshotHandle` *string*                                    | SnapshotHandle is the identifier of the volume snapshot in the respective cloud provider |              | Optional: {} |
|                                                              |                                                                                          |              |              |
| `error` *VolumeSnapshotError*                                | Error contains the error details if the snapshot creation failed                         |              | Optional: {} |
|                                                              |                                                                                          |              |              |
| `events` *[KubernetesEventInfo](#kuberneteseventinfo) array* | Recent Kubernetes Events related to the VolumeSnapshot                                   |              |              |
| Events that happened in the last 30 minutes are stored.      |                                                                                          | Optional: {} |              |
|                                                              |                                                                                          |              |              |

#### WriteCluster

*Appears in:*

- [QdrantClusterSpec](#qdrantclusterspec)

| Field         | Description                                             | Default | Validation |
| ------------- | ------------------------------------------------------- | ------- | ---------- |
| `id` *string* | Id specifies the unique identifier of the write cluster |         |            |
