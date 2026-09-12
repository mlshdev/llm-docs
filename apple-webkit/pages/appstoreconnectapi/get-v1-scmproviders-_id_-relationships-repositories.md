> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-scmproviders-_id_-relationships-repositories](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-scmproviders-_id_-relationships-repositories)

# List repository IDs for an SCM provider

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/scmProviders/{id}/relationships/repositories
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `ScmProviderRepositoriesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Provider Information

- [List all source code management providers](get-v1-scmproviders.md): List all source code management providers you connected to Xcode Cloud.
- [Get a source code management provider](get-v1-scmproviders-_id_.md): Get information about a specific source code management provider you connected to Xcode Cloud.
- [List all repositories for a source code management provider](get-v1-scmproviders-_id_-repositories.md): List all Git repositories for a specific source code management provider you connected to Xcode Cloud.
