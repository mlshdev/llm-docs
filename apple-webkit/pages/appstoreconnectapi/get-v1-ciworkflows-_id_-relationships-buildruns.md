> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-ciworkflows-_id_-relationships-buildruns](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-ciworkflows-_id_-relationships-buildruns)

# List build run IDs for a CI workflow

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/ciWorkflows/{id}/relationships/buildRuns
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `CiWorkflowBuildRunsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Xcode Cloud Workflows

- [Read xcode cloud workflow information](get-v1-ciworkflows-_id_.md): Get information about a specific Xcode Cloud workflow.
- [List all xcode cloud builds for a workflow](get-v1-ciworkflows-_id_-buildruns.md): List all builds Xcode Cloud performed for a specific workflow.
- [Read the repository information for an xcode cloud workflow](get-v1-ciworkflows-_id_-repository.md): Get information about the Git repository of a specific Xcode Cloud workflow.
- [Get the repository ID for a CI workflow](get-v1-ciworkflows-_id_-relationships-repository.md)
