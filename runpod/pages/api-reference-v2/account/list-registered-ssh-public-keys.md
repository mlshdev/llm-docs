> Commit-pinned source for Runpod main: [api-reference-v2/account/list-registered-ssh-public-keys.mdx](https://docs.runpod.io/api-reference-v2/account/list-registered-ssh-public-keys)

# List Registered Ssh Public Keys

List the SSH public keys registered to your Runpod account and used to authenticate secure connections to newly created Pods.

`GET /v2/account/ssh-keys`

**List registered SSH public keys**

Returns the account's registered SSH public keys — the keys provisioned into pods created with `startSsh` and used to authenticate the SSH connections reported in a pod's `ssh` block.

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
