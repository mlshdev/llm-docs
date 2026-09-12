> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appinfos-_id_-primarysubcategorytwo](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appinfos-_id_-primarysubcategorytwo)

# Read the primary subcategory two information of an app info

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Get the second App Store subcategory within an app’s primary category.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appInfos/{id}/primarySubcategoryTwo
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

### Reading Subcategories

- [Read the primary subcategory one information of an app info](get-v1-appinfos-_id_-primarysubcategoryone.md): Get the first App Store subcategory within an app’s primary category.
- [Read the secondary subcategory one information of an app info](get-v1-appinfos-_id_-secondarysubcategoryone.md): Get the first App Store subcategory within an app’s secondary category.
- [Read the secondary subcategory two information of an app info](get-v1-appinfos-_id_-secondarysubcategorytwo.md): Get the second App Store subcategory within an app’s secondary category.
- [Get the first primary subcategory ID for an app info](get-v1-appinfos-_id_-relationships-primarysubcategoryone.md)
- [Get the second primary subcategory ID for an app info](get-v1-appinfos-_id_-relationships-primarysubcategorytwo.md)
- [Get the first secondary subcategory ID for an app info](get-v1-appinfos-_id_-relationships-secondarysubcategoryone.md)
- [Get the second secondary subcategory ID for an app info](get-v1-appinfos-_id_-relationships-secondarysubcategorytwo.md)
