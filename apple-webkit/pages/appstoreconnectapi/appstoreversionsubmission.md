> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversionsubmission](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionsubmission)

# AppStoreVersionSubmission

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+ (deprecated in 1.7)

A submission of an App Store version to Apple’s review queue, triggering the review process.

> This object is deprecated. Use [ReviewSubmission](reviewsubmission.md) instead.

## Declaration

```
object AppStoreVersionSubmission
```

## Properties

- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppStoreVersionSubmission.Relationships`:
- `type` — `string` (required): **Allowed values:** `appStoreVersionSubmissions`

## Mentioned In

- [App Store Connect API 1.7 release notes](app-store-connect-api-1-7-release-notes.md)

## Topics

### Objects

- [AppStoreVersionSubmission.Relationships](appstoreversionsubmission/relationships-data.dictionary.md): Deprecated. The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppStoreVersionSubmissionResponse](appstoreversionsubmissionresponse.md): Deprecated. The response body for endpoints that submit an App Store version for review.
