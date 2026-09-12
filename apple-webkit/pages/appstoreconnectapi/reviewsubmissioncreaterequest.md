> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/reviewsubmissioncreaterequest](https://developer.apple.com/documentation/appstoreconnectapi/reviewsubmissioncreaterequest)

# ReviewSubmissionCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

The request body for creating a review submission for an App Store version or associated items.

## Declaration

```
object ReviewSubmissionCreateRequest
```

## Properties

- `data` — `ReviewSubmissionCreateRequest.Data` (required):

## Topics

### Objects

- [ReviewSubmissionCreateRequest.Data](reviewsubmissioncreaterequest/data-data.dictionary.md): The data wrapper for a review submission create request, containing the resource type and app relationship.

## See Also

### Objects

- [ReviewSubmission](reviewsubmission.md): A formal submission to App Store review grouping one or more items — app versions, in-app purchases, or events — for simultaneous review.
- [ReviewSubmissionItem](reviewsubmissionitem.md): An individual reviewable item — such as an app version, in-app purchase, or App Clip — included in a review submission.
- [ReviewSubmissionUpdateRequest](reviewsubmissionupdaterequest.md): The request body you use to update a review submission update request.
- [ReviewSubmissionResponse](reviewsubmissionresponse.md): The response body for endpoints that create, read, or modify a single review submission.
- [ReviewSubmissionsResponse](reviewsubmissionsresponse.md): The response body for endpoints that list review submissions for an app.
- [AppReviewSubmissionsLinkagesResponse](appreviewsubmissionslinkagesresponse.md): A response containing the resource identifiers of review submissions associated with an app.
- [ReviewSubmissionItemsLinkagesResponse](reviewsubmissionitemslinkagesresponse.md): A response containing the resource identifiers of items included in a review submission.
