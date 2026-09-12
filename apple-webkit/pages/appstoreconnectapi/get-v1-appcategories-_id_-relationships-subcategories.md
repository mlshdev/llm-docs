> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appcategories-_id_-relationships-subcategories](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appcategories-_id_-relationships-subcategories)

# List subcategory IDs for an app category

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appCategories/{id}/relationships/subcategories
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app category resource ID from the [List app categories](get-v1-appcategories.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of app category resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppCategorySubcategoriesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Listing Categories and Subcategories

- [List app categories](get-v1-appcategories.md): List all categories on the App Store, including the category and subcategory hierarchy.
- [List all subcategories for an app category](get-v1-appcategories-_id_-subcategories.md): List all App Store subcategories that belong to a specific category.
