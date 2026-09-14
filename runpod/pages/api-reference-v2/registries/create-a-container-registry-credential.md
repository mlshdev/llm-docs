> Commit-pinned source for Runpod main: [api-reference-v2/registries/create-a-container-registry-credential.mdx](https://docs.runpod.io/api-reference-v2/registries/create-a-container-registry-credential)

# Create A Container Registry Credential

Store credentials for a private container registry in Runpod for authenticated image pulls while keeping the saved secrets write-only.

`POST /v2/registries`

**Create a container registry credential**

Stores credentials for a private container registry. Credentials are write-only.

**Request body**

**Responses**

- `201`: Created
- `400`: The request could not be processed because it is malformed or conflicts with request rules.
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `422`: The request body or parameters were syntactically valid but failed validation.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
