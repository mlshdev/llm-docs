> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-customerreviewresponses-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-customerreviewresponses-_id_)

# Delete a response to a customer review

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Delete a specific response you wrote to a customer review.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/customerReviewResponses/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies a `customerReviewResponses` resource that represents your review response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

Deletions of responses don’t take effect instantly in the App Store. Allow some time for the deletion to take effect.

## See Also

### Creating, Updating, and Deleting Review Responses

- [Create or update a response to a customer review](post-v1-customerreviewresponses.md): Create a response or replace an existing response you wrote to a customer review.
