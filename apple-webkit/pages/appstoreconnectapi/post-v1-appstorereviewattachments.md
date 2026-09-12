> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appstorereviewattachments](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appstorereviewattachments)

# Create an app store review attachment

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Attach a document for App Review to an App Store version.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appStoreReviewAttachments
```

## HTTP Body

Content type: `application/json`

Type: `AppStoreReviewAttachmentCreateRequest`

## Response Codes

- `201` Created — `AppStoreReviewAttachmentResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Deleting Attachments

- [Commit an app store review attachment](patch-v1-appstorereviewattachments-_id_.md): Commit an app screenshot after uploading it to the App Store.
- [Delete an app store review attachment](delete-v1-appstorereviewattachments-_id_.md): Remove an attachment before you send your app to App Review.
