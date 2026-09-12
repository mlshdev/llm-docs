> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-searchkeywords](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-searchkeywords)

# List all search keywords for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get search keywords for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/searchKeywords
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `fields[appKeywords]` — `[string]`: Additional fields to include for each app keyword resource returned by the response.
- `filter[locale]` — `[string]`: Filter the returned app keywords by locale.
- `filter[platform]` — `[string]`: Filter the returned app keywords by platform.
- `limit` — `integer`: The maximum number of app keyword resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppKeywordsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Search keywords

- [List search keyword IDs for an app](get-v1-apps-_id_-relationships-searchkeywords.md): Get a list of search keyword IDs for a specific app.
