> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchasesubmissionresponse

# InAppPurchaseSubmissionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

A response confirming the submission of an In-App Purchase for App Store review.

> This object is deprecated. Use the review submissions workflow instead.

## Declaration

```
object InAppPurchaseSubmissionResponse
```

## Properties

- `data` — `InAppPurchaseSubmission` (required):
- `included` — `[InAppPurchaseV2]`:
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [InAppPurchaseSubmissionCreateRequest](inapppurchasesubmissioncreaterequest.md): Deprecated. The request body you use to create an In-App Purchase submission.
- [InAppPurchaseSubmission](inapppurchasesubmission.md): Deprecated. A submission of an In-App Purchase to App Store review, triggering the review process for that item.
