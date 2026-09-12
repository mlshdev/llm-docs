> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-appscreenshotsets-_id_-relationships-appscreenshots](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appscreenshotsets-_id_-relationships-appscreenshots)

# Replace all app screenshots for an app screenshot set

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Change the order of the screenshots in a screenshot set.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appScreenshotSets/{id}/relationships/appScreenshots
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app screenshot set resource ID from the [List all app screenshot sets for an app store version localization](get-v1-appstoreversionlocalizations-_id_-appscreenshotsets.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppScreenshotSetAppScreenshotsLinkagesRequest`

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Listing and Reordering All Screenshots in a Set

- [Get all app screenshot ids for an app screenshot set](get-v1-appscreenshotsets-_id_-relationships-appscreenshots.md): Get the ordered screenshot IDs in a screenshot set.
- [List all app screenshots for an app screenshot set](get-v1-appscreenshotsets-_id_-appscreenshots.md): List all ordered screenshots in a screenshot set.
