> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-customerreviews-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-customerreviews-_id_)

# Read customer review information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get information about a specific customer review, including the review content.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/customerReviews/{id}
```

## Path Parameters

- `id` — `string` (required): The resource ID representing a unique customer review.

## Query Parameters

- `fields[customerReviewResponses]` — `[string]`: Fields to return for included related `customerReviewResponses` resources.
  **Allowed values:** `responseBody`, `lastModifiedDate`, `state`, `review`
- `fields[customerReviews]` — `[string]`: Fields to return for included related `customerReviews` resources.
  **Allowed values:** `rating`, `title`, `body`, `reviewerNickname`, `createdDate`, `territory`, `response`, `reviewTerritory`
- `include` — `[string]`: Relationship data to include in the response.
  **Allowed values:** `response`, `reviewTerritory`
- `fields[territories]` — `[string]`: **Allowed values:** `currency`

## Response Codes

- `200` OK — `CustomerReviewResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:
