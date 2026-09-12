> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-androidtoiosappmappingdetails](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-androidtoiosappmappingdetails)

# Create an Android to iOS App Mapping Detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Create a detail that maps an Android app to an iOS app.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/androidToIosAppMappingDetails
```

## HTTP Body

Content type: `application/json`

Type: `AndroidToIosAppMappingDetailCreateRequest`

## Response Codes

- `201` Created — `AndroidToIosAppMappingDetailResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.2 release notes](app-store-connect-api-4-2-release-notes.md)

## See Also

### Managing Mapping Details

- [Read Android to iOS App Mapping Details](get-v1-androidtoiosappmappingdetails-_id_.md): Get information about a specific android to iOS app mapping detail.
- [Modify an Android to iOS App Mapping Detail](patch-v1-androidtoiosappmappingdetails-_id_.md): Update an Android to iOS app mapping detail.
- [Delete an Android to iOS Mapping Detail](delete-v1-androidtoiosappmappingdetails-_id_.md): Remove a specific Android to iOS mapping detail.
