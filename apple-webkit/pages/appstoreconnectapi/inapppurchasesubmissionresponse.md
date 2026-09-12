> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchasesubmissionresponse](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchasesubmissionresponse)

# InAppPurchaseSubmissionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

A response confirming the submission of an in-app purchase for App Store review.

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

- [InAppPurchaseSubmissionCreateRequest](inapppurchasesubmissioncreaterequest.md): Deprecated. The request body you use to create an in-app purchase submission.
- [InAppPurchaseSubmission](inapppurchasesubmission.md): Deprecated. A submission of an in-app purchase to App Store review, triggering the review process for that item.
