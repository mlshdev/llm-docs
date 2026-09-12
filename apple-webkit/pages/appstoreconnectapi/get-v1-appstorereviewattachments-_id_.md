> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appstorereviewattachments-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstorereviewattachments-_id_)

# Read app store review attachment information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Get information about an App Store review attachment and its upload and processing status.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreReviewAttachments/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store review attachment resource ID from the [List all review attachments for an app store review detail](get-v1-appstorereviewdetails-_id_-appstorereviewattachments.md) response.

## Query Parameters

- `fields[appStoreReviewAttachments]` — `[string]`: Additional fields to include for each App Store review attachment resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `uploadOperations`, `assetDeliveryState`, `appStoreReviewDetail`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appStoreReviewDetail`
- `fields[appStoreReviewDetails]` — `[string]`: **Allowed values:** `contactFirstName`, `contactLastName`, `contactPhone`, `contactEmail`, `demoAccountName`, `demoAccountPassword`, `demoAccountRequired`, `notes`, `appStoreVersion`, `appStoreReviewAttachments`

## Response Codes

- `200` OK — `AppStoreReviewAttachmentResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading Attachment Information

- [List all review attachments for an app store review detail](get-v1-appstorereviewdetails-_id_-appstorereviewattachments.md): List all the App Store review attachments you include with a version when you submit it for App Review.
- [List App Store review attachment IDs for an App Store review detail](get-v1-appstorereviewdetails-_id_-relationships-appstorereviewattachments.md)
