> Pinned source for Runpod main: [sdks/graphql/manage-pod-templates.mdx](https://github.com/runpod/docs/blob/fa4985146919262a6e9cdb946c50eec1ed81ffc9/sdks/graphql/manage-pod-templates.mdx)
> Canonical documentation: https://docs.runpod.io/sdks/graphql/manage-pod-templates

# Manage templates

Create and manage templates for Pods and Serverless endpoints using the GraphQL API. Review operations and request patterns for this Runpod SDK.

Use the GraphQL API to create and manage templates for Pods and Serverless endpoints.

For the complete schema, see the [GraphQL Spec](https://graphql-spec.runpod.io/).

## Quick reference

| Operation       | Mutation                   |
| --------------- | -------------------------- |
| Create template | `saveTemplate`             |
| Modify template | `saveTemplate` (with `id`) |
| Delete template | `deleteTemplate`           |
| Create secret   | `secretCreate`             |
| Delete secret   | `secretDelete`             |

## Required fields

Templates require the following fields:

| Field               | Type    | Description                                             |
| ------------------- | ------- | ------------------------------------------------------- |
| `containerDiskInGb` | Integer | Container disk size in GB.                              |
| `imageName`         | String  | Docker image name with tag (e.g., `ubuntu:latest`).     |
| `name`              | String  | Unique template name.                                   |
| `volumeInGb`        | Integer | Volume size in GB. Set to `0` for Serverless templates. |

> **Note**
>
> Template names must be unique. Creating a template with a name that already exists will fail.

## Create a template

### GPU Pod template

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://api.runpod.io/graphql?api_key=${YOUR_API_KEY}' \
  --data '{"query": "mutation { saveTemplate(input: { containerDiskInGb: 5, dockerArgs: \"sleep infinity\", env: [ { key: \"key1\", value: \"value1\" }, { key: \"key2\", value: \"value2\" } ], imageName: \"ubuntu:latest\", name: \"My GPU Template\", ports: \"8888/http,22/tcp\", readme: \"## Hello, World!\", volumeInGb: 15, volumeMountPath: \"/workspace\" }) { containerDiskInGb dockerArgs env { key value } id imageName name ports readme volumeInGb volumeMountPath } }"}'
```

```graphql
mutation {
  saveTemplate(input: {
    containerDiskInGb: 5,
    dockerArgs: "sleep infinity",
    env: [
      { key: "key1", value: "value1" },
      { key: "key2", value: "value2" }
    ],
    imageName: "ubuntu:latest",
    name: "My GPU Template",
    ports: "8888/http,22/tcp",
    readme: "## Hello, World!",
    volumeInGb: 15,
    volumeMountPath: "/workspace"
  }) {
    id
    name
    imageName
    containerDiskInGb
    volumeInGb
    dockerArgs
    ports
    env { key value }
  }
}
```

```json
{
  "data": {
    "saveTemplate": {
      "id": "wphkv67a0p",
      "name": "My GPU Template",
      "imageName": "ubuntu:latest",
      "containerDiskInGb": 5,
      "volumeInGb": 15,
      "dockerArgs": "sleep infinity",
      "ports": "8888/http,22/tcp",
      "env": [
        { "key": "key1", "value": "value1" },
        { "key": "key2", "value": "value2" }
      ]
    }
  }
}
```

### Serverless template

For Serverless templates, set `volumeInGb` to `0` and include `isServerless: true`.

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://api.runpod.io/graphql?api_key=${YOUR_API_KEY}' \
  --data '{"query": "mutation { saveTemplate(input: { containerDiskInGb: 5, dockerArgs: \"python handler.py\", env: [ { key: \"key1\", value: \"value1\" } ], imageName: \"runpod/serverless-hello-world:latest\", isServerless: true, name: \"My Serverless Template\", volumeInGb: 0 }) { id name imageName isServerless containerDiskInGb } }"}'
```

```graphql
mutation {
  saveTemplate(input: {
    containerDiskInGb: 5,
    dockerArgs: "python handler.py",
    env: [
      { key: "key1", value: "value1" }
    ],
    imageName: "runpod/serverless-hello-world:latest",
    isServerless: true,
    name: "My Serverless Template",
    volumeInGb: 0
  }) {
    id
    name
    imageName
    isServerless
    containerDiskInGb
    dockerArgs
    env { key value }
  }
}
```

```json
{
  "data": {
    "saveTemplate": {
      "id": "xkhgg72fuo",
      "name": "My Serverless Template",
      "imageName": "runpod/serverless-hello-world:latest",
      "isServerless": true,
      "containerDiskInGb": 5,
      "dockerArgs": "python handler.py",
      "env": [
        { "key": "key1", "value": "value1" }
      ]
    }
  }
}
```

### Private container images

For private container images, use `containerRegistryAuthId` with the ID of your saved registry credentials from your [Runpod settings](https://www.console.runpod.io/user/settings).

```graphql
mutation {
  saveTemplate(input: {
    containerDiskInGb: 5,
    imageName: "myregistry.io/private-image:latest",
    containerRegistryAuthId: "YOUR_REGISTRY_CREDENTIALS_ID",
    name: "Private Image Template",
    volumeInGb: 10
  }) {
    id
    name
  }
}
```

## Modify a template

Include the template `id` to update an existing template. The same mutation works for both GPU and Serverless templates.

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://api.runpod.io/graphql?api_key=${YOUR_API_KEY}' \
  --data '{"query": "mutation { saveTemplate(input: { id: \"wphkv67a0p\", containerDiskInGb: 10, imageName: \"ubuntu:latest\", name: \"My GPU Template\", volumeInGb: 20, readme: \"## Updated readme\" }) { id containerDiskInGb volumeInGb readme } }"}'
```

```graphql
mutation {
  saveTemplate(input: {
    id: "wphkv67a0p",
    containerDiskInGb: 10,
    imageName: "ubuntu:latest",
    name: "My GPU Template",
    volumeInGb: 20,
    readme: "## Updated readme"
  }) {
    id
    containerDiskInGb
    volumeInGb
    readme
  }
}
```

```json
{
  "data": {
    "saveTemplate": {
      "id": "wphkv67a0p",
      "containerDiskInGb": 10,
      "volumeInGb": 20,
      "readme": "## Updated readme"
    }
  }
}
```

## Delete a template

Delete a template by name. The template must not be in use by any Pods or Serverless endpoints.

> **Warning**
>
> It can take up to 2 minutes to delete a template after its most recent use by a Pod or Serverless endpoint.

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://api.runpod.io/graphql?api_key=${YOUR_API_KEY}' \
  --data '{"query": "mutation { deleteTemplate(templateName: \"My GPU Template\") }"}'
```

```graphql
mutation {
  deleteTemplate(templateName: "My GPU Template")
}
```

```json
{
  "data": {
    "deleteTemplate": null
  }
}
```

## Create a secret

Secrets store sensitive values that can be referenced in templates.

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://api.runpod.io/graphql?api_key=${YOUR_API_KEY}' \
  --data '{"query": "mutation { secretCreate(input: { value: \"my-secret-value\", name: \"my-secret\" }) { id name description } }"}'
```

```graphql
mutation {
  secretCreate(input: {
    value: "my-secret-value",
    name: "my-secret"
  }) {
    id
    name
    description
  }
}
```

```json
{
  "data": {
    "secretCreate": {
      "id": "abc123",
      "name": "my-secret",
      "description": null
    }
  }
}
```

## Delete a secret

Delete a secret by its ID. You can find the secret ID from the `secretCreate` response or by querying your secrets.

```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://api.runpod.io/graphql?api_key=${YOUR_API_KEY}' \
  --data '{"query": "mutation { secretDelete(id: \"abc123\") }"}'
```

```graphql
mutation {
  secretDelete(id: "abc123")
}
```

```json
{
  "data": {
    "secretDelete": null
  }
}
```
