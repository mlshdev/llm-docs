> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-ciproducts-_id_-primaryrepositories](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-ciproducts-_id_-primaryrepositories)

# List all primary git repositories for an xcode cloud product

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

List all primary Git repositories for a specific Xcode Cloud product.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/ciProducts/{id}/primaryRepositories
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Products resource.

## Query Parameters

- `fields[scmRepositories]` — `[string]`: Additional fields to include for each Repositories resource returned by the response.
  **Allowed values:** `lastAccessedDate`, `httpCloneUrl`, `sshCloneUrl`, `ownerName`, `repositoryName`, `scmProvider`, `defaultBranch`, `gitReferences`, `pullRequests`
- `filter[id]` — `[string]`: Filter the returned primary repositories using the ID of the Repositories resource.
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

### Getting Xcode Cloud Products

- [List all xcode cloud products](get-v1-ciproducts.md): Get a list of all products you created in Xcode Cloud.
- [Read xcode cloud product information](get-v1-ciproducts-_id_.md): Get information about a specific Xcode Cloud product.
- [List all additional repositories for an xcode cloud product](get-v1-ciproducts-_id_-additionalrepositories.md): List all additional Git repositories you associated with an Xcode Cloud product.
- [List additional repository IDs for a CI product](get-v1-ciproducts-_id_-relationships-additionalrepositories.md)
- [Read app information for an xcode cloud product](get-v1-ciproducts-_id_-app.md): Get the app in App Store Connect that’s related to an Xcode Cloud product.
- [Get the app ID for a CI product](get-v1-ciproducts-_id_-relationships-app.md)
- [List all xcode cloud builds for an xcode cloud product](get-v1-ciproducts-_id_-buildruns.md): List all builds Xcode Cloud performed for a specific product.
- [List build run IDs for a CI product](get-v1-ciproducts-_id_-relationships-buildruns.md)
- [List primary repository IDs for a CI product](get-v1-ciproducts-_id_-relationships-primaryrepositories.md)
- [List all workflows for an xcode cloud product](get-v1-ciproducts-_id_-workflows.md): List all workflows for a specific Xcode Cloud product.
- [List workflow IDs for a CI product](get-v1-ciproducts-_id_-relationships-workflows.md)
- [Read the xcode cloud product for an app](get-v1-apps-_id_-ciproduct.md): Get the Xcode Cloud product information for an app you build with Xcode Cloud.
