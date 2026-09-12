> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-scmrepositories-_id_-pullrequests](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-scmrepositories-_id_-pullrequests)

# List all pull requests for a repository

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

List all pull requests for a specific repository that Xcode Cloud can access.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/scmRepositories/{id}/pullRequests
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Pull Requests resource.

## Query Parameters

- `fields[scmPullRequests]` — `[string]`: Additional fields to include for each Pull Requests resource returned by the response.
  **Allowed values:** `title`, `number`, `webUrl`, `sourceRepositoryOwner`, `sourceRepositoryName`, `sourceBranchName`, `destinationRepositoryOwner`, `destinationRepositoryName`, `destinationBranchName`, `isClosed`, `isCrossRepository`, `repository`
- `limit` — `integer`: The number of Pull Requests resources to return.
  **Maximum:** `200`
- `fields[scmRepositories]` — `[string]`: **Allowed values:** `lastAccessedDate`, `httpCloneUrl`, `sshCloneUrl`, `ownerName`, `repositoryName`, `scmProvider`, `defaultBranch`, `gitReferences`, `pullRequests`
- `include` — `[string]`: **Allowed values:** `repository`

## Response Codes

- `200` OK — `ScmPullRequestsResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Repository Information

- [List all git repositories](get-v1-scmrepositories.md): List all Git repositories Xcode Cloud can access.
- [Read git repository information](get-v1-scmrepositories-_id_.md): Get information about a Git repository that Xcode Cloud can access.
- [List all git references for a repository](get-v1-scmrepositories-_id_-gitreferences.md): List all Git references for a specific repository that Xcode Cloud can access.
- [List Git reference IDs for an SCM repository](get-v1-scmrepositories-_id_-relationships-gitreferences.md)
- [List pull request IDs for an SCM repository](get-v1-scmrepositories-_id_-relationships-pullrequests.md)
