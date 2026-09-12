> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-customerreviewresponses-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-customerreviewresponses-_id_)

# Read customer review response information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get information about a specific response you wrote to a customer review, including the response content and its state.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/customerReviewResponses/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies a `customerReviewResponses` resource that represents your review response.

## Query Parameters

- `fields[customerReviewResponses]` — `[string]`: Fields to return for the included related types.
  **Allowed values:** `responseBody`, `lastModifiedDate`, `state`, `review`
- `include` — `[string]`: Relationship data to include in the response.
  **Allowed values:** `review`
- `fields[customerReviews]` — `[string]`: **Allowed values:** `rating`, `title`, `body`, `reviewerNickname`, `createdDate`, `territory`, `response`, `reviewTerritory`

## Response Codes

- `200` OK — `CustomerReviewResponseV1Response`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Review Responses

- [Get a customer review response](get-v1-customerreviews-_id_-response.md): Get the response to a specific customer review.
- [Get the response ID for a customer review](get-v1-customerreviews-_id_-relationships-response.md)
