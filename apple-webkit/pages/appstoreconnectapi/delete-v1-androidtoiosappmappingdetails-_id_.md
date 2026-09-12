> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-androidtoiosappmappingdetails-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-androidtoiosappmappingdetails-_id_)

# Delete an Android to iOS Mapping Detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Remove a specific Android to iOS mapping detail.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/androidToIosAppMappingDetails/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the android to iOS app mapping detail resource ID from the [Create an Android to iOS App Mapping Detail](post-v1-androidtoiosappmappingdetails.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Mapping Details

- [Read Android to iOS App Mapping Details](get-v1-androidtoiosappmappingdetails-_id_.md): Get information about a specific android to iOS app mapping detail.
- [Modify an Android to iOS App Mapping Detail](patch-v1-androidtoiosappmappingdetails-_id_.md): Update an Android to iOS app mapping detail.
- [Create an Android to iOS App Mapping Detail](post-v1-androidtoiosappmappingdetails.md): Create a detail that maps an Android app to an iOS app.
