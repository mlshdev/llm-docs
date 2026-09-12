> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appstorereviewdetails-_id_-relationships-appstorereviewattachments](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstorereviewdetails-_id_-relationships-appstorereviewattachments)

# List App Store review attachment IDs for an App Store review detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreReviewDetails/{id}/relationships/appStoreReviewAttachments
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AppStoreReviewDetailAppStoreReviewAttachmentsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading Attachment Information

- [Read app store review attachment information](get-v1-appstorereviewattachments-_id_.md): Get information about an App Store review attachment and its upload and processing status.
- [List all review attachments for an app store review detail](get-v1-appstorereviewdetails-_id_-appstorereviewattachments.md): List all the App Store review attachments you include with a version when you submit it for App Review.
