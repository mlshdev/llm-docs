> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/reviewsubmissionresponse](https://developer.apple.com/documentation/appstoreconnectapi/reviewsubmissionresponse)

# ReviewSubmissionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

The response body for endpoints that create, read, or modify a single review submission.

## Declaration

```
object ReviewSubmissionResponse
```

## Properties

- `data` — `ReviewSubmission` (required):
- `included` — `[*]`: **Allowed types:** `Actor`, `AppStoreVersion`, `App`, `ReviewSubmissionItem`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [ReviewSubmission](reviewsubmission.md): A formal submission to App Store review grouping one or more items — app versions, in-app purchases, or events — for simultaneous review.
- [ReviewSubmissionItem](reviewsubmissionitem.md): An individual reviewable item — such as an app version, in-app purchase, or App Clip — included in a review submission.
- [ReviewSubmissionUpdateRequest](reviewsubmissionupdaterequest.md): The request body you use to update a review submission update request.
- [ReviewSubmissionCreateRequest](reviewsubmissioncreaterequest.md): The request body for creating a review submission for an App Store version or associated items.
- [ReviewSubmissionsResponse](reviewsubmissionsresponse.md): The response body for endpoints that list review submissions for an app.
- [AppReviewSubmissionsLinkagesResponse](appreviewsubmissionslinkagesresponse.md): A response containing the resource identifiers of review submissions associated with an app.
- [ReviewSubmissionItemsLinkagesResponse](reviewsubmissionitemslinkagesresponse.md): A response containing the resource identifiers of items included in a review submission.
