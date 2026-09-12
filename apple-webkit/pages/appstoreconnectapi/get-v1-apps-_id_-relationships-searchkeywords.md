> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-searchkeywords](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-searchkeywords)

# List search keyword IDs for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get a list of search keyword IDs for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/searchKeywords
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of app keyword resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppSearchKeywordsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Search keywords

- [List all search keywords for an app](get-v1-apps-_id_-searchkeywords.md): Get search keywords for a specific app.
