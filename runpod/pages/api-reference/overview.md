> Pinned source for Runpod main: [api-reference/overview.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/api-reference/overview.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/overview

# Overview

Use the Runpod API to programmatically manage your compute resources. Review authentication, request formats, and response details for the Runpod API.

The Runpod REST API v1 provides programmatic access to all Runpod compute resources. Integrate GPU infrastructure into your applications, workflows, and automation systems.

> **Warning**
>
> REST API v1 is deprecated and will be retired on **November 15, 2026**. Migrate your integrations to REST API v2 before that date. See the [migration guide](https://docs.runpod.io/api-reference-v2/migrate-from-v1) to get started. To migrate automatically, ask your coding agent to run `/runpod:migrate rest` once you've installed the [Runpod skills plugin](https://docs.runpod.io/get-started/agent-skills#migrate-an-existing-integration).

## Available resources

- **Pods**: Create and manage persistent GPU instances for development, training, and long-running workloads.
- **Serverless endpoints**: Deploy and scale containerized applications with autoscaling and job monitoring.
- **Network volumes**: Create persistent storage attachable to multiple resources.
- **Templates**: Save and reuse Pod and endpoint configurations.
- **Container registry auth**: Connect to private Docker registries.
- **Billing**: Access usage metrics and billing information.

## Authentication

All requests require a [Runpod API key](https://docs.runpod.io/get-started/api-keys) in the request headers. The API uses standard HTTP methods and returns JSON responses.

## OpenAPI schema

Retrieve the complete OpenAPI specification for client generation, request validation, or tooling integration.

See the [interactive API documentation endpoint reference](https://docs.runpod.io/api-reference/docs/GET/docs) to open the browser-based reference directly.

```bash cURL
curl --request GET \
  --url https://rest.runpod.io/v1/openapi.json \  
```

```python Python
import requests

url = "https://rest.runpod.io/v1/openapi.json"
response = requests.get(url)
print(response.json())
```
