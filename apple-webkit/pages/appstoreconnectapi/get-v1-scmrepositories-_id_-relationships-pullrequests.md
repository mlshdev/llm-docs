> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-scmrepositories-_id_-relationships-pullrequests](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-scmrepositories-_id_-relationships-pullrequests)

# List pull request IDs for an SCM repository

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/scmRepositories/{id}/relationships/pullRequests
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `ScmRepositoryPullRequestsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Repository Information

- [List all git repositories](get-v1-scmrepositories.md): List all Git repositories Xcode Cloud can access.
- [Read git repository information](get-v1-scmrepositories-_id_.md): Get information about a Git repository that Xcode Cloud can access.
- [List all git references for a repository](get-v1-scmrepositories-_id_-gitreferences.md): List all Git references for a specific repository that Xcode Cloud can access.
- [List Git reference IDs for an SCM repository](get-v1-scmrepositories-_id_-relationships-gitreferences.md)
- [List all pull requests for a repository](get-v1-scmrepositories-_id_-pullrequests.md): List all pull requests for a specific repository that Xcode Cloud can access.
