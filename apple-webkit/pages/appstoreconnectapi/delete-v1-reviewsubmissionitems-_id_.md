> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-reviewsubmissionitems-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-reviewsubmissionitems-_id_)

# Remove a review submission item

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

Remove a specific item from a review submission.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/reviewSubmissionItems/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Update a review submission item](patch-v1-reviewsubmissionitems-_id_.md): Update a specific review submission item.
- [Create a Review Submission Item](post-v1-reviewsubmissionitems.md): Create a new review submission item.
