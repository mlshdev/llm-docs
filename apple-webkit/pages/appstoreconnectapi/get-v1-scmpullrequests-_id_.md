> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-scmpullrequests-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-scmpullrequests-_id_)

# Read pull request information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

Get information about a specific pull request.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/scmPullRequests/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Pull Requests resource.

## Query Parameters

- `fields[scmPullRequests]` — `[string]`: Additional fields to include for the Pull Requests resource returned by the response.
  **Allowed values:** `title`, `number`, `webUrl`, `sourceRepositoryOwner`, `sourceRepositoryName`, `sourceBranchName`, `destinationRepositoryOwner`, `destinationRepositoryName`, `destinationBranchName`, `isClosed`, `isCrossRepository`, `repository`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `repository`
- `fields[scmRepositories]` — `[string]`: **Allowed values:** `lastAccessedDate`, `httpCloneUrl`, `sshCloneUrl`, `ownerName`, `repositoryName`, `scmProvider`, `defaultBranch`, `gitReferences`, `pullRequests`

## Response Codes

- `200` OK — `ScmPullRequestResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

The example request below retrieves information about a specific pull request. For example, use the data provided in the response to display pull request information on a custom dashboard.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
GET https://api.appstoreconnect.apple.com/v1/scmPullRequests/3372ba3b-013d-4328-9b48-0ef8ec54f48d
```

**Response**

```json
{
    "data": {
        "type": "scmPullRequests",
        "id": "3372ba3b-013d-4328-9b48-0ef8ec54f48d",
        "attributes": {
            "title": "A sample pull request",
            "number": 123,
            "webUrl": "https://github.com/example-user/example-app/pull/123",
            "sourceRepositoryOwner": "example-user",
            "sourceRepositoryName": "example-app",
            "sourceBranchName": "BRANCH",
            "destinationRepositoryOwner": "example-user",
            "destinationRepositoryName": "example-app",
            "destinationBranchName": "main",
            "isClosed": false,
            "isCrossRepository": false
        },
        "links": {
            "self": "https://api.appstoreconnect.apple.com/v1/scmPullRequests/3372ba3b-013d-4328-9b48-0ef8ec54f48d"
        }
    },
    "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/scmPullRequests/3372ba3b-013d-4328-9b48-0ef8ec54f48d"
    }
}
```
