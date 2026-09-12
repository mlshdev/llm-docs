> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appclipappstorereviewdetails](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appclipappstorereviewdetails)

# Create app store review details for an app clip

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Provide App Clip metadata required by App Store Review.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appClipAppStoreReviewDetails
```

## HTTP Body

Content type: `application/json`

Type: `AppClipAppStoreReviewDetailCreateRequest`

The request body you use to create App Store detail information.

## Response Codes

- `201` Created — `AppClipAppStoreReviewDetailResponse`: The request completed successfully and a new App Clip App Store Review Details resource has been created.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing App Review Details for Your App Clip

- [Read the app store review details of an app clip](get-v1-appclipappstorereviewdetails-_id_.md): Get App Store Review details for an App Clip.
- [Modify app store review details for an app clip](patch-v1-appclipappstorereviewdetails-_id_.md): Update App Clip metadata you provide to App Store Review.
