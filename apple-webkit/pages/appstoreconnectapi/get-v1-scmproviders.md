> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-scmproviders](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-scmproviders)

# List all source code management providers

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

List all source code management providers you connected to Xcode Cloud.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/scmProviders
```

## Query Parameters

- `fields[scmProviders]` — `[string]`: Additional fields to include for each Providers resource returned by the response.
  **Allowed values:** `scmProviderType`, `url`, `repositories`
- `limit` — `integer`: The number of Providers resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `ScmProvidersResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`:

## See Also

### Getting Provider Information

- [Get a source code management provider](get-v1-scmproviders-_id_.md): Get information about a specific source code management provider you connected to Xcode Cloud.
- [List all repositories for a source code management provider](get-v1-scmproviders-_id_-repositories.md): List all Git repositories for a specific source code management provider you connected to Xcode Cloud.
- [List repository IDs for an SCM provider](get-v1-scmproviders-_id_-relationships-repositories.md)
