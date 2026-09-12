> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-customerreviews](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-customerreviews)

# List customer review IDs for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/customerReviews
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AppCustomerReviewsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting customer reviews

- [List all customer reviews for an app](get-v1-apps-_id_-customerreviews.md): Get a list of customer reviews for a specific app.
- [Read Customer Review Summarizations](get-v1-apps-_id_-customerreviewsummarizations.md): Get the customer review summarization for a specific app.
