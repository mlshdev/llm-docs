> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-reviewsubmissionitems-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-reviewsubmissionitems-_id_)

# Update a review submission item

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

Update a specific review submission item.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/reviewSubmissionItems/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `ReviewSubmissionItemUpdateRequest`

## Response Codes

- `200` OK — `ReviewSubmissionItemResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Create a Review Submission Item](post-v1-reviewsubmissionitems.md): Create a new review submission item.
- [Remove a review submission item](delete-v1-reviewsubmissionitems-_id_.md): Remove a specific item from a review submission.
