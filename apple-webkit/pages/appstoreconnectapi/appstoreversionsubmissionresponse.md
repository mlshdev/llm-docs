> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversionsubmissionresponse](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionsubmissionresponse)

# AppStoreVersionSubmissionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+ (deprecated in 1.7)

The response body for endpoints that submit an App Store version for review.

> This object is deprecated. Use [ReviewSubmissionResponse](reviewsubmissionresponse.md) instead.

## Declaration

```
object AppStoreVersionSubmissionResponse
```

## Properties

- `data` — `AppStoreVersionSubmission` (required):
- `links` — `DocumentLinks` (required):
- `included` — `[AppStoreVersion]`:

## Mentioned In

- [App Store Connect API 1.7 release notes](app-store-connect-api-1-7-release-notes.md)

## See Also

### Objects

- [AppStoreVersionSubmission](appstoreversionsubmission.md): Deprecated. A submission of an App Store version to Apple’s review queue, triggering the review process.
