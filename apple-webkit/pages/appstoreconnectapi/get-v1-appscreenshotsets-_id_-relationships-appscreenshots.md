> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appscreenshotsets-_id_-relationships-appscreenshots](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appscreenshotsets-_id_-relationships-appscreenshots)

# Get all app screenshot ids for an app screenshot set

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Get the ordered screenshot IDs in a screenshot set.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appScreenshotSets/{id}/relationships/appScreenshots
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app screenshot set resource ID from the [List all app screenshot sets for an app store version localization](get-v1-appstoreversionlocalizations-_id_-appscreenshotsets.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of app screenshot resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppScreenshotSetAppScreenshotsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Listing and Reordering All Screenshots in a Set

- [List all app screenshots for an app screenshot set](get-v1-appscreenshotsets-_id_-appscreenshots.md): List all ordered screenshots in a screenshot set.
- [Replace all app screenshots for an app screenshot set](patch-v1-appscreenshotsets-_id_-relationships-appscreenshots.md): Change the order of the screenshots in a screenshot set.
