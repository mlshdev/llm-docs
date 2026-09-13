> Commit-pinned source for Runpod main: [api-reference-v2/pods/trigger-a-pod-state-transition.mdx](https://docs.runpod.io/api-reference-v2/pods/trigger-a-pod-state-transition)

# Trigger A Pod State Transition

Start, stop, or restart a Runpod Pod by sending a supported state transition action and retrieving the Pod's updated lifecycle state.

`POST /v2/pods/{id}/action`

**Trigger a pod state transition**

Triggers a state transition on a pod. Send a JSON body with a single
`action` field, e.g. `{ "action": "stop" }`.

Valid actions:
- `start`     — boot a stopped pod (`EXITED` or `ERROR`) back toward
  `RUNNING`.
- `stop`      — stop a running or provisioning pod, releasing GPU/CPU
  compute while keeping its disk. The pod moves to `EXITED`.
- `restart`   — restart a `RUNNING` pod's container in place.
- `terminate` — permanently delete the pod and release its resources
  (equivalent to `deletePod`).

Which actions are valid depends on the pod's current status, and the
currently permitted set is published in the pod's `actions` field:
`RUNNING` allows `stop`/`restart`/`terminate`; `EXITED` and `ERROR`
allow `start`/`terminate`; `PROVISIONING` and `STARTING` allow
`stop`/`terminate`.

`start`, `stop`, and `restart` return `200` with the updated pod.
`terminate` returns `204` with no body. Requesting an action that is
not valid for the pod's current status returns `409`.

**Parameters**

- `id` (path, required)

**Request body**

**Responses**

- `200`: Action applied — returns updated pod
- `204`: Only returned when `action=terminate`; response has no body.
- `400`: The request could not be processed because it is malformed or conflicts with request rules.
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `409`: Action not valid for current pod status
- `422`: The request body or parameters were syntactically valid but failed validation.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
