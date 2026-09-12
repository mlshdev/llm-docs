> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appclipappstorereviewdetails-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appclipappstorereviewdetails-_id_)

# Read the app store review details of an app clip

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Get App Store Review details for an App Clip.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appClipAppStoreReviewDetails/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app clip App Store review detail resource ID from the [Read the app store review detail for a default app clip experience](get-v1-appclipdefaultexperiences-_id_-appclipappstorereviewdetail.md) response.

## Query Parameters

- `fields[appClipAppStoreReviewDetails]` — `[string]`: Additional fields to include for each app clip App Store review detail resource returned by the response.
  **Allowed values:** `invocationUrls`, `appClipDefaultExperience`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appClipDefaultExperience`
- `fields[appClipDefaultExperiences]` — `[string]`: **Allowed values:** `action`, `appClip`, `releaseWithAppStoreVersion`, `appClipDefaultExperienceLocalizations`, `appClipAppStoreReviewDetail`

## Response Codes

- `200` OK — `AppClipAppStoreReviewDetailResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Managing App Review Details for Your App Clip

- [Create app store review details for an app clip](post-v1-appclipappstorereviewdetails.md): Provide App Clip metadata required by App Store Review.
- [Modify app store review details for an app clip](patch-v1-appclipappstorereviewdetails-_id_.md): Update App Clip metadata you provide to App Store Review.
