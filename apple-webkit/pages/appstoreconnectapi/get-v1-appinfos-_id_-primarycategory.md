> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appinfos-_id_-primarycategory](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appinfos-_id_-primarycategory)

# Read the primary category information of an app info

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Get an app’s primary App Store category.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appInfos/{id}/primaryCategory
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `appInfo` resource ID from the [List all app infos for an app](get-v1-apps-_id_-appinfos.md) response.

## Query Parameters

- `fields[appCategories]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `platforms`, `subcategories`, `parent`
- `limit[subcategories]` — `integer`: **Maximum:** `50`
- `include` — `[string]`: **Allowed values:** `subcategories`, `parent`

## Response Codes

- `200` OK — `AppCategoryResponse`: Request succeeded.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Reading Categories

- [Read the secondary category information of an app info](get-v1-appinfos-_id_-secondarycategory.md): Get an app’s secondary App Store category.
- [Get the primary category ID for an app info](get-v1-appinfos-_id_-relationships-primarycategory.md)
- [Get the secondary category ID for an app info](get-v1-appinfos-_id_-relationships-secondarycategory.md)
