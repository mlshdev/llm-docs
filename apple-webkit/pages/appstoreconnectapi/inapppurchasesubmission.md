> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchasesubmission](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchasesubmission)

# InAppPurchaseSubmission

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

A submission of an in-app purchase to App Store review, triggering the review process for that item.

> This object is deprecated. Use the review submissions workflow instead.

## Declaration

```
object InAppPurchaseSubmission
```

## Properties

- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `InAppPurchaseSubmission.Relationships`:
- `type` — `string` (required): **Allowed values:** `inAppPurchaseSubmissions`

## Topics

### Objects

- [InAppPurchaseSubmission.Relationships](inapppurchasesubmission/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [InAppPurchaseSubmissionCreateRequest](inapppurchasesubmissioncreaterequest.md): Deprecated. The request body you use to create an in-app purchase submission.
- [InAppPurchaseSubmissionResponse](inapppurchasesubmissionresponse.md): Deprecated. A response confirming the submission of an in-app purchase for App Store review.
