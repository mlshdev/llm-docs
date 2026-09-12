> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-androidtoiosappmappingdetails-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-androidtoiosappmappingdetails-_id_)

# Modify an Android to iOS App Mapping Detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Update an Android to iOS app mapping detail.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/androidToIosAppMappingDetails/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the android to iOS app mapping detail resource ID from the [Create an Android to iOS App Mapping Detail](post-v1-androidtoiosappmappingdetails.md) response.

## HTTP Body

Content type: `application/json`

Type: `AndroidToIosAppMappingDetailUpdateRequest`

## Response Codes

- `200` OK — `AndroidToIosAppMappingDetailResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Mapping Details

- [Read Android to iOS App Mapping Details](get-v1-androidtoiosappmappingdetails-_id_.md): Get information about a specific android to iOS app mapping detail.
- [Create an Android to iOS App Mapping Detail](post-v1-androidtoiosappmappingdetails.md): Create a detail that maps an Android app to an iOS app.
- [Delete an Android to iOS Mapping Detail](delete-v1-androidtoiosappmappingdetails-_id_.md): Remove a specific Android to iOS mapping detail.
