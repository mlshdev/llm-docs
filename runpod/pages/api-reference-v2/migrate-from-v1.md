> Pinned source for Runpod main: [api-reference-v2/migrate-from-v1.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/api-reference-v2/migrate-from-v1.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/migrate-from-v1

# Migrate from API v1

Move your integrations from the Runpod REST API v1 to the v2 base URL, endpoints, and request and response shapes.

The Runpod REST API v2 reorganizes resource paths, consolidates Pod lifecycle actions, and standardizes request and response shapes. This guide maps the v1 surface you know to its v2 equivalent so you can update your integrations with confidence.

Read this guide if you have an existing integration built against the v1 API. REST API v1 is deprecated and will be retired on November 15, 2026. Migrate your integrations to v2 before that date.

## What changed at a glance

- The base URL moves from `https://rest.runpod.io/v1` to `https://api.runpod.io/v2`. Update every request to the new host and version prefix.

- The OpenAPI schema also moves accordingly, from `https://rest.runpod.io/v1/openapi.json` to `https://api.runpod.io/v2/openapi.json`. Regenerate any client or tooling against the v2 schema.

- Authentication is unchanged. Continue to pass your [Runpod API key](https://docs.runpod.io/get-started/api-keys) as an HTTP Bearer token in the `Authorization: Bearer RUNPOD_API_KEY` header. You don't need to change key management or scopes to call v2.

## Endpoint mapping

Most resources keep the same concept but move to a new path. The following table maps each v1 resource to its v2 path.

| Resource               | v1 path                   | v2 path                       |
| ---------------------- | ------------------------- | ----------------------------- |
| Pods                   | `/pods`                   | `/v2/pods`                    |
| Serverless             | `/endpoints`              | `/v2/serverless`              |
| Templates              | `/templates`              | `/v2/templates`               |
| Network volumes        | `/networkvolumes`         | `/v2/network-volumes`         |
| Registries             | `/containerregistryauth`  | `/v2/registries`              |
| Instant Clusters       | No equivalent             | `/v2/clusters`                |
| Pod billing            | `/billing/pods`           | `/v2/billing/pods`            |
| Serverless billing     | `/billing/endpoints`      | `/v2/billing/serverless`      |
| Network volume billing | `/billing/networkvolumes` | `/v2/billing/network-volumes` |

v2 generalizes path parameters: where v1 used resource-specific names such as `{podId}`, `{endpointId}`, `{networkVolumeId}`, `{templateId}`, and `{containerRegistryAuthId}`, v2 uses a single generic `{id}` parameter across resources.

> **Warning**
>
> Billing paths don't map by name. In v1, `/billing/endpoints` returns Serverless billing history; in v2, Serverless billing moves to `/v2/billing/serverless`. The v2 path `/v2/billing/endpoints` is a different, new resource — Public Endpoint billing history — so update your Serverless billing calls to the new path rather than assuming the old one carries over.

## Consolidated Pod lifecycle

In v1, each Pod state change had its own endpoint: `POST /pods/{podId}/start`, `/stop`, `/reset`, and `/restart`. In v2, these collapse into a single [Pod state transition endpoint](https://docs.runpod.io/api-reference-v2/pods/trigger-a-pod-state-transition), `POST /v2/pods/{id}/action`, whose request body carries the desired action as `{"action":"start|stop|restart|terminate"}`. Deletion still uses [`DELETE /v2/pods/{id}`](https://docs.runpod.io/api-reference-v2/pods/terminate-a-pod).

> **Note**
>
> The v1 `reset` operation has no v2 action equivalent. The v2 action enum is limited to `start`, `stop`, `restart`, and `terminate`.

For in-place changes to a Pod, v2 replaces v1's `POST /pods/{podId}/update` with a standard [PATCH request](https://docs.runpod.io/api-reference-v2/pods/update-a-pod) to `PATCH /v2/pods/{id}`. Serverless follows the same pattern: v2 drops v1's `POST /endpoints/{id}/update` in-place variant in favor of `PATCH /v2/serverless/{id}`.

The following example shows how stopping a Pod changes between versions.

```bash v1
curl --request POST \
  --url https://rest.runpod.io/v1/pods/{podId}/stop \
  --header 'Authorization: Bearer RUNPOD_API_KEY'
```

```bash v2
curl --request POST \
  --url https://api.runpod.io/v2/pods/{id}/action \
  --header 'Authorization: Bearer RUNPOD_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"action":"stop"}'
```

Instead of targeting a dedicated `/stop` path, v2 sends the same `POST .../action` request for every lifecycle transition and selects the operation with the `action` field in the request body.

## Request and response shape changes

The v2 request and response formats differ from v1. The most impactful changes are nested create bodies, wrapped list responses, and standardized error objects. Full field-by-field mapping is out of scope for this guide; see the linked reference pages for complete schemas.

### Nested create bodies

- In v1, create bodies are flat, with top-level fields such as `gpuCount`, `gpuTypeIds`, `imageName`, `containerDiskInGb`, `volumeInGb`, `env`, and `ports`. The v2 `CreatePodRequest` is nested: `name` and `image` are required, GPU settings live under `gpu: {id, count}`, CPU settings under `cpu`, and storage under `mounts`. The `cloud` field defaults to `SECURE`, and you must set exactly one of `gpu` or `cpu`. See [Create a Pod](https://docs.runpod.io/api-reference-v2/pods/create-a-pod) for the full request schema.

- Serverless endpoint creation changes more than its path. In v1, `EndpointCreateInput` requires a `templateId`. v2's `CreateEndpointRequest` still supports `templateId`: you can create an endpoint from a template ID, or provide the container details directly with `name`, `image`, and `gpu`. When you create from a template, `image` is optional because the template supplies it. Worker and scaling settings nest under `workers` and `scaling`, replacing v1's flat `workersMin`, `workersMax`, `scalerType`, and `idleTimeout`. See [Create a Serverless endpoint](https://docs.runpod.io/api-reference-v2/serverless/create-a-serverless-endpoint) for the full schema.

- Templates share the same container-field renames as Pods: v1's `imageName`, `containerDiskInGb`, `isPublic`, and `containerRegistryAuthId` become `image`, `disk`, `public`, and a nested `registry` in v2. See [Create a template](https://docs.runpod.io/api-reference-v2/templates/create-a-template).

- Network volume creation renames `dataCenterId` to `dataCenter` and adds an optional `type` field for selecting the storage tier (`STANDARD` or `HIGH_PERFORMANCE`). See [Create a network volume](https://docs.runpod.io/api-reference-v2/network-volumes/create-a-network-volume).

### Wrapped list responses

In v1, list endpoints return a bare JSON array. In v2, list responses wrap the array in an object keyed by the resource name.

```json v1
[
  { "id": "pod-1" },
  { "id": "pod-2" }
]
```

```json v2
{
  "pods": [
    { "id": "pod-1" },
    { "id": "pod-2" }
  ]
}
```

The v2 wrapper key matches the resource: `GET /v2/pods` returns `{"pods":[...]}`, Serverless returns `{"endpoints":[...]}`, templates return `{"templates":[...]}`, network volumes return `{"networkVolumes":[...]}`, and registries return `{"registries":[...]}`. See [List Pods](https://docs.runpod.io/api-reference-v2/pods/list-pods) for a complete example.

### RFC 9457 error objects

In v1, errors return a simple `{"message":"..."}` object. In v2, errors follow the RFC 9457 problem format with required `title`, `status`, and `detail` fields, plus an optional `errors` array of validation strings.

As in v1, Runpod returns a `403` when a valid API key lacks access to the requested resource—but in v2 that response now uses the problem format shown here.

```json v1
{
  "message": "Pod not found"
}
```

```json v2
{
  "title": "Not Found",
  "status": 404,
  "detail": "The requested Pod does not exist."
}
```

## New in v2

- The v2 API adds capabilities that have no v1 equivalent.

- Catalog endpoints let you browse available compute without provisioning it: `GET /v2/catalog/gpus` and `/gpus/{id}`, `/cpus` and `/cpus/{id}`, and `/datacenters` and `/datacenters/{id}`. See [List GPU types](https://docs.runpod.io/api-reference-v2/catalog/list-gpu-types).

- Pod log streaming exposes `GET /v2/pods/{id}/logs` so you can follow a Pod's output over the API. See [Stream Pod logs](https://docs.runpod.io/api-reference-v2/pods/stream-pod-logs).

- Serverless observability adds worker and release visibility through `GET /v2/serverless/{id}/workers`, `/workers/{workerId}/logs`, and `/releases`. See [List Serverless endpoint workers](https://docs.runpod.io/api-reference-v2/serverless/list-serverless-endpoint-workers), [Stream Serverless worker logs](https://docs.runpod.io/api-reference-v2/serverless/stream-serverless-worker-logs), and [List Serverless endpoint releases](https://docs.runpod.io/api-reference-v2/serverless/list-serverless-endpoint-releases).

- Registry ECR delegations manage delegated registry access with `GET` and `POST /v2/registries/delegations` and `DELETE /v2/registries/delegations/{id}`. These endpoints aren't yet covered by a dedicated reference page during beta; consult the [v2 OpenAPI schema](https://docs.runpod.io/api-reference-v2/overview) for their request and response formats.

- Expanded billing adds an aggregated history at `GET /v2/billing` alongside Serverless, Public Endpoint, and Instant Clusters histories, going beyond v1's Pods, endpoints, and network volume breakdowns. See [Get aggregated billing history](https://docs.runpod.io/api-reference-v2/billing/get-aggregated-billing-history).

## Next steps

- [API v2 overview](https://docs.runpod.io/api-reference-v2/overview)

  Review the v2 base URL, authentication, and available resources.
- [Create a Pod](https://docs.runpod.io/api-reference-v2/pods/create-a-pod)

  See the nested v2 request schema for provisioning a Pod.
- [List Serverless endpoints](https://docs.runpod.io/api-reference-v2/serverless/list-serverless-endpoints)

  Query your Serverless endpoints with the wrapped v2 response.
- [List GPU types](https://docs.runpod.io/api-reference-v2/catalog/list-gpu-types)

  Browse available GPU types with the new catalog endpoints.
- [Migrate with your coding agent](https://docs.runpod.io/get-started/agent-skills#migrate-an-existing-integration)

  Use the `/runpod:migrate` command to inventory and rewrite your integration automatically.
