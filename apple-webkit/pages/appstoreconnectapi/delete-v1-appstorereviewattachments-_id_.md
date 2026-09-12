> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-appstorereviewattachments-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-appstorereviewattachments-_id_)

# Delete an app store review attachment

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Remove an attachment before you send your app to App Review.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appStoreReviewAttachments/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store review attachment resource ID from the [List all review attachments for an app store review detail](get-v1-appstorereviewdetails-_id_-appstorereviewattachments.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Deleting Attachments

- [Create an app store review attachment](post-v1-appstorereviewattachments.md): Attach a document for App Review to an App Store version.
- [Commit an app store review attachment](patch-v1-appstorereviewattachments-_id_.md): Commit an app screenshot after uploading it to the App Store.
