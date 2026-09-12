> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-customerreviewsummarizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-customerreviewsummarizations)

# Read Customer Review Summarizations

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get the customer review summarization for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/customerReviewSummarizations
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the `apps` resource that represents your app. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `include` — `[string]`: Relationship data to include in the response.
  **Allowed values:** `territory`
- `limit` — `integer`: Number of resources to return.
  **Maximum:** `200`
- `filter[territory]` — `[string]`: A filter of territories to include in the response.
- `fields[customerReviewSummarizations]` — `[string]`: **Allowed values:** `createdDate`, `locale`, `platform`, `text`, `territory`
- `fields[territories]` — `[string]`: **Allowed values:** `currency`
- `filter[platform]` — `[string]` (required): **Allowed values:** `IOS`, `MAC_OS`, `TV_OS`, `VISION_OS`

## Response Codes

- `200` OK — `CustomerReviewSummarizationsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.0 release notes](app-store-connect-api-4-0-release-notes.md)

## See Also

### Getting customer reviews

- [List all customer reviews for an app](get-v1-apps-_id_-customerreviews.md): Get a list of customer reviews for a specific app.
- [List customer review IDs for an app](get-v1-apps-_id_-relationships-customerreviews.md)
