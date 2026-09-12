> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appcategories-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appcategories-_id_)

# Read app category information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Get a specific app category.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appCategories/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app category resource ID from the [List app categories](get-v1-appcategories.md) response.

## Query Parameters

- `fields[appCategories]` — `[string]`: Additional fields to include for each app categories resource returned by the response.
  **Allowed values:** `platforms`, `subcategories`, `parent`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `subcategories`, `parent`
- `limit[subcategories]` — `integer`: The maximum number of related subcategories resources to return.
  **Maximum:** `50`

## Response Codes

- `200` OK — `AppCategoryResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Reading App Category Information

- [Read the parent information of an app category](get-v1-appcategories-_id_-parent.md): Get the App Store category to which a specific subcategory belongs.
- [Get the parent category ID for an app category](get-v1-appcategories-_id_-relationships-parent.md)
