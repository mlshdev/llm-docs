> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appscreenshotsets](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appscreenshotsets)

# Create an app screenshot set

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Add a new screenshot set to an App Store version localization for a specific screenshot type and display size.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appScreenshotSets
```

## HTTP Body

Content type: `application/json`

Type: `AppScreenshotSetCreateRequest`

## Response Codes

- `201` Created — `AppScreenshotSetResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating and Deleting Screenshot Sets

- [Delete an app screenshot set](delete-v1-appscreenshotsets-_id_.md): Delete an app screenshot set and all of its screenshots.
