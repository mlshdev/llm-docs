> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-androidtoiosappmappingdetails](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-androidtoiosappmappingdetails)

# List the IDs of Android to iOS App Mapping Details for an App

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Get the IDs of Android to iOS app mapping details for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/androidToIosAppMappingDetails
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of Android to iOS app mapping detail resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppAndroidToIosAppMappingDetailsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Android to iOS app mapping information

- [Read the Android to iOS App Mapping Details for an App](get-v1-apps-_id_-androidtoiosappmappingdetails.md): Get details about the Android to iOS app mapping for a specific app.
