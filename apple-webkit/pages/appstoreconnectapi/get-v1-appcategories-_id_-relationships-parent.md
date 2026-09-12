> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appcategories-_id_-relationships-parent](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appcategories-_id_-relationships-parent)

# Get the parent category ID for an app category

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appCategories/{id}/relationships/parent
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app category resource ID from the [List app categories](get-v1-appcategories.md) response.

## Response Codes

- `200` OK — `AppCategoryParentLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading App Category Information

- [Read app category information](get-v1-appcategories-_id_.md): Get a specific app category.
- [Read the parent information of an app category](get-v1-appcategories-_id_-parent.md): Get the App Store category to which a specific subcategory belongs.
