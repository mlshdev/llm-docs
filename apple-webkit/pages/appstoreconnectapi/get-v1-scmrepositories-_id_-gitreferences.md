> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-scmrepositories-_id_-gitreferences](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-scmrepositories-_id_-gitreferences)

# List all git references for a repository

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

List all Git references for a specific repository that Xcode Cloud can access.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/scmRepositories/{id}/gitReferences
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Repositories resource.

## Query Parameters

- `fields[scmGitReferences]` — `[string]`: Additional fields to include for each Git References resource returned by the response.
  **Allowed values:** `name`, `canonicalName`, `isDeleted`, `kind`, `repository`
- `limit` — `integer`: The number of Git References resources to return.
  **Maximum:** `200`
- `fields[scmRepositories]` — `[string]`: **Allowed values:** `lastAccessedDate`, `httpCloneUrl`, `sshCloneUrl`, `ownerName`, `repositoryName`, `scmProvider`, `defaultBranch`, `gitReferences`, `pullRequests`
- `include` — `[string]`: **Allowed values:** `repository`

## Response Codes

- `200` OK — `ScmGitReferencesResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Repository Information

- [List all git repositories](get-v1-scmrepositories.md): List all Git repositories Xcode Cloud can access.
- [Read git repository information](get-v1-scmrepositories-_id_.md): Get information about a Git repository that Xcode Cloud can access.
- [List Git reference IDs for an SCM repository](get-v1-scmrepositories-_id_-relationships-gitreferences.md)
- [List all pull requests for a repository](get-v1-scmrepositories-_id_-pullrequests.md): List all pull requests for a specific repository that Xcode Cloud can access.
- [List pull request IDs for an SCM repository](get-v1-scmrepositories-_id_-relationships-pullrequests.md)
