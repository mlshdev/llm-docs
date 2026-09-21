> Pinned source for Runpod main: [sdks/graphql/manage-pods.mdx](https://github.com/runpod/docs/blob/4962c60abcb8d9bf359d92ccc07644abd5d8e610/sdks/graphql/manage-pods.mdx)
> Canonical documentation: https://docs.runpod.io/sdks/graphql/manage-pods

# Manage Pods

Create, start, stop, and query Pods using the GraphQL API. Review authentication, operations, request patterns, and examples for this Runpod SDK.

Create, start, stop, and query Pods using the GraphQL API with cURL and GraphQL examples.

For the complete schema, see the [GraphQL Spec](https://graphql-spec.runpod.io/).

## Quick reference

| Operation      | Mutation/Query               |
| -------------- | ---------------------------- |
| Create Pod     | `podFindAndDeployOnDemand`   |
| Start Pod      | `podResume`                  |
| Stop Pod       | `podStop`                    |
| List all Pods  | `myself { pods { ... } }`    |
| Get Pod by ID  | `pod(input: {podId: "..."})` |
| List GPU types | `gpuTypes`                   |

## Create a Pod

Pods provide guaranteed compute at a fixed price.

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://api.runpod.io/graphql?api_key=${YOUR_API_KEY}' \
  --data '{"query": "mutation { podFindAndDeployOnDemand( input: { cloudType: ALL, gpuCount: 1, volumeInGb: 40, containerDiskInGb: 40, minVcpuCount: 2, minMemoryInGb: 15, gpuTypeId: \"NVIDIA RTX A6000\", name: \"Runpod Tensorflow\", imageName: \"runpod/tensorflow\", dockerArgs: \"\", ports: \"8888/http\", volumeMountPath: \"/workspace\", env: [{ key: \"JUPYTER_PASSWORD\", value: \"your-password\" }] } ) { id imageName env machineId machine { podHostId } } }"}'
```

```graphql
mutation {
  podFindAndDeployOnDemand(
    input: {
      cloudType: ALL
      gpuCount: 1
      volumeInGb: 40
      containerDiskInGb: 40
      minVcpuCount: 2
      minMemoryInGb: 15
      gpuTypeId: "NVIDIA RTX A6000"
      name: "Runpod Tensorflow"
      imageName: "runpod/tensorflow"
      dockerArgs: ""
      ports: "8888/http"
      volumeMountPath: "/workspace"
      env: [{ key: "JUPYTER_PASSWORD", value: "your-password" }]
    }
  ) {
    id
    imageName
    env
    machineId
    machine {
      podHostId
    }
  }
}
```

```json
{
  "data": {
    "podFindAndDeployOnDemand": {
      "id": "50qynxzilsxoey",
      "imageName": "runpod/tensorflow",
      "env": ["JUPYTER_PASSWORD=your-password"],
      "machineId": "hpvdausak8xb",
      "machine": {
        "podHostId": "50qynxzilsxoey-64410065"
      }
    }
  }
}
```

### Filter by CUDA version

Use `allowedCudaVersions` to restrict Pods to machines with specific CUDA versions.

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://api.runpod.io/graphql?api_key=${YOUR_API_KEY}' \
  --data '{
    "query": "mutation { podFindAndDeployOnDemand( input: { cloudType: ALL, gpuCount: 1, volumeInGb: 40, containerDiskInGb: 40, gpuTypeId: \"NVIDIA RTX A6000\", name: \"Runpod Pytorch\", imageName: \"runpod/pytorch\", allowedCudaVersions: [\"12.0\", \"12.1\", \"12.2\", \"12.3\"] } ) { id imageName machineId } }"
  }'
```

```graphql
mutation {
  podFindAndDeployOnDemand(
    input: {
      cloudType: ALL
      gpuCount: 1
      volumeInGb: 40
      containerDiskInGb: 40
      gpuTypeId: "NVIDIA RTX A6000"
      name: "Runpod Pytorch"
      imageName: "runpod/pytorch"
      allowedCudaVersions: ["12.0", "12.1", "12.2", "12.3"]
    }
  ) {
    id
    imageName
    machineId
  }
}
```

## Start a Pod

Resume a stopped Pod using the `podResume` mutation.

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://api.runpod.io/graphql?api_key=${YOUR_API_KEY}' \
  --data '{"query": "mutation { podResume( input: { podId: \"YOUR_POD_ID\", gpuCount: 1 } ) { id desiredStatus imageName } }"}'
```

```graphql
mutation {
  podResume(input: { podId: "YOUR_POD_ID", gpuCount: 1 }) {
    id
    desiredStatus
    imageName
  }
}
```

```json
{
  "data": {
    "podResume": {
      "id": "YOUR_POD_ID",
      "desiredStatus": "RUNNING",
      "imageName": "runpod/tensorflow"
    }
  }
}
```

You can also filter by CUDA version when starting a Pod:

```graphql
mutation {
  podResume(input: {
    podId: "YOUR_POD_ID",
    gpuCount: 1,
    allowedCudaVersions: ["12.0", "12.1", "12.2", "12.3"]
  }) {
    id
    desiredStatus
  }
}
```

## Stop a Pod

Stopping a Pod releases the GPU while preserving your volume data.

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://api.runpod.io/graphql?api_key=${YOUR_API_KEY}' \
  --data '{"query": "mutation { podStop(input: {podId: \"YOUR_POD_ID\"}) { id desiredStatus } }"}'
```

```graphql
mutation {
  podStop(input: { podId: "YOUR_POD_ID" }) {
    id
    desiredStatus
  }
}
```

```json
{
  "data": {
    "podStop": {
      "id": "YOUR_POD_ID",
      "desiredStatus": "EXITED"
    }
  }
}
```

## Query Pods

### List all Pods

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://api.runpod.io/graphql?api_key=${YOUR_API_KEY}' \
  --data '{"query": "query { myself { pods { id name runtime { uptimeInSeconds gpus { id gpuUtilPercent memoryUtilPercent } container { cpuPercent memoryPercent } } } } }"}'
```

```graphql
query {
  myself {
    pods {
      id
      name
      runtime {
        uptimeInSeconds
        ports {
          ip
          isIpPublic
          privatePort
          publicPort
          type
        }
        gpus {
          id
          gpuUtilPercent
          memoryUtilPercent
        }
        container {
          cpuPercent
          memoryPercent
        }
      }
    }
  }
}
```

```json
{
  "data": {
    "myself": {
      "pods": [
        {
          "id": "ldl1dxirsim64n",
          "name": "Runpod Pytorch",
          "runtime": {
            "uptimeInSeconds": 3931,
            "ports": [
              {
                "ip": "100.65.0.101",
                "isIpPublic": false,
                "privatePort": 8888,
                "publicPort": 60141,
                "type": "http"
              }
            ],
            "gpus": [
              {
                "id": "GPU-e0488b7e-6932-795b-a125-4472c16ea72c",
                "gpuUtilPercent": 0,
                "memoryUtilPercent": 0
              }
            ],
            "container": {
              "cpuPercent": 0,
              "memoryPercent": 0
            }
          }
        }
      ]
    }
  }
}
```

### Get Pod by ID

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://api.runpod.io/graphql?api_key=${YOUR_API_KEY}' \
  --data '{"query": "query { pod(input: {podId: \"YOUR_POD_ID\"}) { id name runtime { uptimeInSeconds gpus { id gpuUtilPercent memoryUtilPercent } } } }"}'
```

```graphql
query {
  pod(input: { podId: "YOUR_POD_ID" }) {
    id
    name
    runtime {
      uptimeInSeconds
      ports {
        ip
        isIpPublic
        privatePort
        publicPort
        type
      }
      gpus {
        id
        gpuUtilPercent
        memoryUtilPercent
      }
      container {
        cpuPercent
        memoryPercent
      }
    }
  }
}
```

```json
{
  "data": {
    "pod": {
      "id": "YOUR_POD_ID",
      "name": "Runpod Pytorch",
      "runtime": {
        "uptimeInSeconds": 11,
        "ports": [
          {
            "ip": "100.65.0.101",
            "isIpPublic": false,
            "privatePort": 8888,
            "publicPort": 60141,
            "type": "http"
          }
        ],
        "gpus": [
          {
            "id": "GPU-e0488b7e-6932-795b-a125-4472c16ea72c",
            "gpuUtilPercent": 0,
            "memoryUtilPercent": 0
          }
        ],
        "container": {
          "cpuPercent": 0,
          "memoryPercent": 0
        }
      }
    }
  }
}
```

## Query GPU types

List available GPU types to find the `gpuTypeId` needed when creating Pods.

### List all GPU types

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://api.runpod.io/graphql?api_key=${YOUR_API_KEY}' \
  --data '{"query": "query { gpuTypes { id displayName memoryInGb } }"}'
```

```graphql
query {
  gpuTypes {
    id
    displayName
    memoryInGb
  }
}
```

```json
{
  "data": {
    "gpuTypes": [
      {
        "id": "NVIDIA GeForce RTX 3070",
        "displayName": "RTX 3070",
        "memoryInGb": 8
      },
      {
        "id": "NVIDIA GeForce RTX 3080",
        "displayName": "RTX 3080",
        "memoryInGb": 10
      },
      {
        "id": "NVIDIA RTX A6000",
        "displayName": "RTX A6000",
        "memoryInGb": 48
      }
    ]
  }
}
```

### Get GPU type details

Query a specific GPU type to see pricing and availability.

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://api.runpod.io/graphql?api_key=${YOUR_API_KEY}' \
  --data '{"query": "query { gpuTypes(input: {id: \"NVIDIA GeForce RTX 3090\"}) { id displayName memoryInGb secureCloud communityCloud lowestPrice(input: {gpuCount: 1}) { uninterruptablePrice } } }"}'
```

```graphql
query {
  gpuTypes(input: { id: "NVIDIA GeForce RTX 3090" }) {
    id
    displayName
    memoryInGb
    secureCloud
    communityCloud
    lowestPrice(input: { gpuCount: 1 }) {
      uninterruptablePrice
    }
  }
}
```

```json
{
  "data": {
    "gpuTypes": [
      {
        "id": "NVIDIA GeForce RTX 3090",
        "displayName": "RTX 3090",
        "memoryInGb": 24,
        "secureCloud": false,
        "communityCloud": true,
        "lowestPrice": {
          "uninterruptablePrice": 0.3
        }
      }
    ]
  }
}
```

### Check GPU availability

Use the `stockStatus` field to check availability before creating a Pod. Values include `High`, `Medium`, `Low`, and `None`.

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://api.runpod.io/graphql?api_key=${YOUR_API_KEY}' \
  --data '{"query": "query { gpuTypes(input: { id: \"NVIDIA RTX A4000\" }) { id displayName lowestPrice(input: { gpuCount: 1, secureCloud: true }) { stockStatus uninterruptablePrice availableGpuCounts } } }"}'
```

```graphql
query {
  gpuTypes(input: { id: "NVIDIA RTX A4000" }) {
    id
    displayName
    lowestPrice(input: { gpuCount: 1, secureCloud: true }) {
      stockStatus
      uninterruptablePrice
      availableGpuCounts
    }
  }
}
```

```json
{
  "data": {
    "gpuTypes": [
      {
        "id": "NVIDIA RTX A4000",
        "displayName": "RTX A4000",
        "lowestPrice": {
          "stockStatus": "High",
          "uninterruptablePrice": 0.35,
          "availableGpuCounts": [1, 2, 4]
        }
      }
    ]
  }
}
```

```json
{
  "data": {
    "gpuTypes": [
      {
        "id": "NVIDIA RTX A4000",
        "displayName": "RTX A4000",
        "lowestPrice": {
          "stockStatus": "Low",
          "uninterruptablePrice": 0.24,
          "availableGpuCounts": [1, 2, 3, 4, 5, 6, 7]
        }
      }
    ]
  }
}
```

> **Note**
>
> If `stockStatus` is `Low`, there are very few GPUs available. Consider selecting an alternative GPU type or trying again later.
