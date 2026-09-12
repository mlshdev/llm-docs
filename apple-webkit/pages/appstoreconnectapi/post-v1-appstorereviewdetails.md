> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appstorereviewdetails](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appstorereviewdetails)

# Create an app store review detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Add App Store review details to an App Store version, including contact and demo account information.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appStoreReviewDetails
```

## HTTP Body

Content type: `application/json`

Type: `AppStoreReviewDetailCreateRequest`

## Response Codes

- `201` Created — `AppStoreReviewDetailResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Reading Review Details

- [Read app store review detail information](get-v1-appstorereviewdetails-_id_.md): Get App Review details you provided, including contact information, demo account, and notes.
- [List App Store review attachment IDs for an App Store review detail](get-v1-appstorereviewdetails-_id_-relationships-appstorereviewattachments.md)
- [Modify an app store review detail](patch-v1-appstorereviewdetails-_id_.md): Update the App Store review details, including the contact information, demo account, and notes.
