> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-reviewsubmissions-_id_-relationships-items](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-reviewsubmissions-_id_-relationships-items)

# List item IDs

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get the list of item IDs for a specific review submission.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/reviewSubmissions/{id}/relationships/items
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the review submissions resource. Obtain the app resource ID from the [List Review Submissions for an App](get-v1-reviewsubmissions.md) response.

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `ReviewSubmissionItemsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [List Review Submissions for an App](get-v1-reviewsubmissions.md): List recent and current review submissions for a specific app.
- [Read Review Submission Information](get-v1-reviewsubmissions-_id_.md): Read information about a specific review submisison.
- [List the Items in a Review Submission](get-v1-reviewsubmissions-_id_-items.md): List all the items in a specific review submission.
- [List review submission IDs](get-v1-apps-_id_-relationships-reviewsubmissions.md): Get the list of review submission IDs for a specific app.
- [Modify a Review Submission](patch-v1-reviewsubmissions-_id_.md): Edit the details or contents of a review submission.
- [Create a Review Submission](post-v1-reviewsubmissions.md): Create a review submission for a specific app.
