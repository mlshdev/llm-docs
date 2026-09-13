> Commit-pinned source for Runpod main: [api-reference-v2/account/replace-registered-ssh-public-keys.mdx](https://docs.runpod.io/api-reference-v2/account/replace-registered-ssh-public-keys)

# Replace Registered Ssh Public Keys

Replace all SSH public keys registered to your Runpod account, remove omitted keys, and apply the new set to subsequently created Pods.

`PUT /v2/account/ssh-keys`

**Replace registered SSH public keys**

Replaces the account's full set of registered SSH public keys. Existing keys not present in the request are removed; send `[]` to remove all keys. Keys take effect for pods created afterwards with `startSsh` — running pods are not updated.

**Request body**

**Responses**

- `200`: OK — the updated key set
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `422`: The request body or parameters were syntactically valid but failed validation.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
