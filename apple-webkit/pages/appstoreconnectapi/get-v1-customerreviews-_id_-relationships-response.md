> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-customerreviews-_id_-relationships-response](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-customerreviews-_id_-relationships-response)

# Get the response ID for a customer review

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/customerReviews/{id}/relationships/response
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `CustomerReviewResponseLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Review Responses

- [Get a customer review response](get-v1-customerreviews-_id_-response.md): Get the response to a specific customer review.
- [Read customer review response information](get-v1-customerreviewresponses-_id_.md): Get information about a specific response you wrote to a customer review, including the response content and its state.
