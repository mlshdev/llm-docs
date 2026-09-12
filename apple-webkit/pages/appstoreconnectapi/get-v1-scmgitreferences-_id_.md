> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-scmgitreferences-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-scmgitreferences-_id_)

# Read git reference information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

Get information about a specific Git reference.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/scmGitReferences/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Git References resource.

## Query Parameters

- `fields[scmGitReferences]` — `[string]`: Additional fields to include for the Git References resource returned by the response.
  **Allowed values:** `name`, `canonicalName`, `isDeleted`, `kind`, `repository`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `repository`
- `fields[scmRepositories]` — `[string]`: **Allowed values:** `lastAccessedDate`, `httpCloneUrl`, `sshCloneUrl`, `ownerName`, `repositoryName`, `scmProvider`, `defaultBranch`, `gitReferences`, `pullRequests`

## Response Codes

- `200` OK — `ScmGitReferenceResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:
