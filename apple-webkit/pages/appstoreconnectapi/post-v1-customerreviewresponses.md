> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-customerreviewresponses](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-customerreviewresponses)

# Create or update a response to a customer review

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Create a response or replace an existing response you wrote to a customer review.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/customerReviewResponses
```

## HTTP Body

Content type: `application/json`

Type: `CustomerReviewResponseV1CreateRequest`

The request body of the customer review response.

## Response Codes

- `201` Created — `CustomerReviewResponseV1Response`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data isn’t valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

Use this endpoint to create a response to a customer review and publish it in the App Store. If a response already exists, this endpoint updates the response by overwriting it.

Responses don’t appear in the App Store instantly. Allow some time for the App Store to publish the response.

## See Also

### Creating, Updating, and Deleting Review Responses

- [Delete a response to a customer review](delete-v1-customerreviewresponses-_id_.md): Delete a specific response you wrote to a customer review.
