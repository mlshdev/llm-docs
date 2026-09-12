> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-scmrepositories-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-scmrepositories-_id_)

# Read git repository information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

Get information about a Git repository that Xcode Cloud can access.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/scmRepositories/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Repositories resource.

## Query Parameters

- `fields[scmGitReferences]` — `[string]`: Additional fields to include for the Repositories resource returned by the response.
  **Allowed values:** `name`, `canonicalName`, `isDeleted`, `kind`, `repository`
- `fields[scmRepositories]` — `[string]`: Additional fields to include for the Repositories resource returned by the response.
  **Allowed values:** `lastAccessedDate`, `httpCloneUrl`, `sshCloneUrl`, `ownerName`, `repositoryName`, `scmProvider`, `defaultBranch`, `gitReferences`, `pullRequests`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `scmProvider`, `defaultBranch`
- `fields[scmProviders]` — `[string]`: **Allowed values:** `scmProviderType`, `url`, `repositories`

## Response Codes

- `200` OK — `ScmRepositoryResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

The example request below retrieves information about a specific Git repository that Xcode Cloud can access. Use the data provided in the response to read additional information; for example, pull request information.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
GET https://api.appstoreconnect.apple.com/v1/scmRepositories/a2b04ba9-85fa-478c-87a2-b6d19626b870
```

**Response**

```json
{
    “data”: {
      “type”: “scmRepositories”,
      “id”: “a2b04ba9-85fa-478c-87a2-b6d19626b870”,
      “attributes”: {
        “lastAccessedDate”: null,
        “httpCloneUrl”: “https://github.com/foo/bar.git”,
        “sshCloneUrl”: “ssh://git@github.com/foo/bar.git”,
        “ownerName”: “foo”,
        “repositoryName”: “bar”
      },
      “relationships”: {
        “gitReferences”: {
          “links”: {
            “self”: “https://api.appstoreconnect.apple.com/v1/scmRepositories/a2b04ba9-85fa-478c-87a2-b6d19626b870/relationships/gitReferences”,
            “related”: “https://api.appstoreconnect.apple.com/v1/scmRepositories/a2b04ba9-85fa-478c-87a2-b6d19626b870/gitReferences”
          }
        },
        “pullRequests”: {
          “links”: {
            “self”: “https://api.appstoreconnect.apple.com/v1/scmRepositories/a2b04ba9-85fa-478c-87a2-b6d19626b870/relationships/pullRequests”,
            “related”: “https://api.appstoreconnect.apple.com/v1/scmRepositories/a2b04ba9-85fa-478c-87a2-b6d19626b870/pullRequests”
          }
        }
      },
      “links”: {
        “self”: “https://api.appstoreconnect.apple.com/v1/scmRepositories/a2b04ba9-85fa-478c-87a2-b6d19626b870”
      }
    },
    “links”: {
      “self”: “https://api.appstoreconnect.apple.com/v1/scmRepositories/a2b04ba9-85fa-478c-87a2-b6d19626b870”
    }
  }
```

## See Also

### Getting Repository Information

- [List all git repositories](get-v1-scmrepositories.md): List all Git repositories Xcode Cloud can access.
- [List all git references for a repository](get-v1-scmrepositories-_id_-gitreferences.md): List all Git references for a specific repository that Xcode Cloud can access.
- [List Git reference IDs for an SCM repository](get-v1-scmrepositories-_id_-relationships-gitreferences.md)
- [List all pull requests for a repository](get-v1-scmrepositories-_id_-pullrequests.md): List all pull requests for a specific repository that Xcode Cloud can access.
- [List pull request IDs for an SCM repository](get-v1-scmrepositories-_id_-relationships-pullrequests.md)
