> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-appscreenshotsets-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-appscreenshotsets-_id_)

# Delete an app screenshot set

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Delete an app screenshot set and all of its screenshots.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appScreenshotSets/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app screenshot set resource ID from the [List all app screenshot sets for an app store version localization](get-v1-appstoreversionlocalizations-_id_-appscreenshotsets.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Creating and Deleting Screenshot Sets

- [Create an app screenshot set](post-v1-appscreenshotsets.md): Add a new screenshot set to an App Store version localization for a specific screenshot type and display size.
