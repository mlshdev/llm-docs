> Pinned source for Vast.ai main: [api-reference/introduction.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/api-reference/introduction.mdx)
> Canonical documentation: https://docs.vast.ai/api-reference/introduction

# API Reference

REST API for managing GPU instances, machines, templates, volumes, serverless endpoints, and billing on Vast.ai.

The Vast.ai REST API gives you programmatic control over the entire platform. It's the foundation that the [CLI](https://docs.vast.ai/cli/hello-world) and [SDK](https://docs.vast.ai/sdk/python/quickstart) are built on.

> **Warning**
>
> The raw REST API is intended for advanced users only. Most users will have a better experience with the [CLI](https://docs.vast.ai/cli/hello-world) or [SDK](https://docs.vast.ai/sdk/python/quickstart), which handle authentication, retries, and request shape for you. Reach for the API directly when you need maximum flexibility, are integrating from a non-Python language, or are building tooling on top of Vast.

## Quickstart

New to the API? Start with the [API Hello World](https://docs.vast.ai/api-reference/hello-world), it walks through the full instance lifecycle (authenticate, search, rent, connect, clean up) using only `curl`.

## Reference sections

| Section                                                                                   | What's covered                                       |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [Authentication](https://docs.vast.ai/api-reference/authentication)                       | Bearer-token auth, API key generation and management |
| [Permissions](https://docs.vast.ai/api-reference/permissions)                             | Scoped API keys, role-based access                   |
| [Rate limits & errors](https://docs.vast.ai/api-reference/rate-limits-and-errors)         | Per-endpoint limits, error codes, retry guidance     |
| [Creating instances](https://docs.vast.ai/api-reference/creating-instances-with-api)      | Search-and-rent flow, configuration options          |
| [Templates](https://docs.vast.ai/api-reference/creating-and-using-templates-with-api)     | Template fields, creation, instance launch           |
| [Notifications](https://docs.vast.ai/api-reference/notifications/list-notification-types) | Notification preferences and webhooks                |
| Endpoints                                                                                 | Full OpenAPI reference for every endpoint            |

## Base URL

```
https://console.vast.ai/api/v0
```

All endpoints require `Authorization: Bearer $VAST_API_KEY`. Get your key from the [Keys page](https://cloud.vast.ai/manage-keys/).
