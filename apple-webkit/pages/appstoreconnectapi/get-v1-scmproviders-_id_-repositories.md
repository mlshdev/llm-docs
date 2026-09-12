> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-scmproviders-_id_-repositories](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-scmproviders-_id_-repositories)

# List all repositories for a source code management provider

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

List all Git repositories for a specific source code management provider you connected to Xcode Cloud.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/scmProviders/{id}/repositories
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Providers  resource.

## Query Parameters

- `fields[scmRepositories]` — `[string]`: Additional fields to include for each Repositories resource returned by the response.
  **Allowed values:** `lastAccessedDate`, `httpCloneUrl`, `sshCloneUrl`, `ownerName`, `repositoryName`, `scmProvider`, `defaultBranch`, `gitReferences`, `pullRequests`
- `filter[id]` — `[string]`: Filter the returned repositories using the ID of the Repositories resource.
- `limit` — `integer`: The number of Repositories resources to return.
  **Maximum:** `200`
- `fields[scmGitReferences]` — `[string]`: **Allowed values:** `name`, `canonicalName`, `isDeleted`, `kind`, `repository`
- `fields[scmProviders]` — `[string]`: **Allowed values:** `scmProviderType`, `url`, `repositories`
- `include` — `[string]`: **Allowed values:** `scmProvider`, `defaultBranch`

## Response Codes

- `200` OK — `ScmRepositoriesResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Provider Information

- [List all source code management providers](get-v1-scmproviders.md): List all source code management providers you connected to Xcode Cloud.
- [Get a source code management provider](get-v1-scmproviders-_id_.md): Get information about a specific source code management provider you connected to Xcode Cloud.
- [List repository IDs for an SCM provider](get-v1-scmproviders-_id_-relationships-repositories.md)
