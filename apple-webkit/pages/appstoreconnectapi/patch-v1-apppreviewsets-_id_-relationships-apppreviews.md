> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-apppreviewsets-_id_-relationships-apppreviews](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-apppreviewsets-_id_-relationships-apppreviews)

# Replace all app previews for an app preview set

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Change the order of the app previews in a preview set.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appPreviewSets/{id}/relationships/appPreviews
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app preview set resource ID from the [List all app preview sets for an app store version localization](get-v1-appstoreversionlocalizations-_id_-apppreviewsets.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppPreviewSetAppPreviewsLinkagesRequest`

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

### Listing and Reordering All Previews in a Set

- [List all app previews for an app preview set](get-v1-apppreviewsets-_id_-apppreviews.md): List all ordered app previews in a preview set.
- [Get all app preview ids for an app preview set](get-v1-apppreviewsets-_id_-relationships-apppreviews.md): Get the ordered app preview IDs in a preview set.
