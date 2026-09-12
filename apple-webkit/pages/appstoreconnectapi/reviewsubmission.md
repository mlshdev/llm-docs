> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/reviewsubmission](https://developer.apple.com/documentation/appstoreconnectapi/reviewsubmission)

# ReviewSubmission

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

A formal submission to App Store review grouping one or more items — app versions, in-app purchases, or events — for simultaneous review.

## Declaration

```
object ReviewSubmission
```

## Properties

- `attributes` — `ReviewSubmission.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `ReviewSubmission.Relationships`:
- `type` — `string` (required): **Allowed values:** `reviewSubmissions`

## Topics

### Objects

- [ReviewSubmission.Attributes](reviewsubmission/attributes-data.dictionary.md): Attributes that describe a review submission resource.
- [ReviewSubmission.Relationships](reviewsubmission/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [ReviewSubmissionItem](reviewsubmissionitem.md): An individual reviewable item — such as an app version, in-app purchase, or App Clip — included in a review submission.
- [ReviewSubmissionUpdateRequest](reviewsubmissionupdaterequest.md): The request body you use to update a review submission update request.
- [ReviewSubmissionCreateRequest](reviewsubmissioncreaterequest.md): The request body for creating a review submission for an App Store version or associated items.
- [ReviewSubmissionResponse](reviewsubmissionresponse.md): The response body for endpoints that create, read, or modify a single review submission.
- [ReviewSubmissionsResponse](reviewsubmissionsresponse.md): The response body for endpoints that list review submissions for an app.
- [AppReviewSubmissionsLinkagesResponse](appreviewsubmissionslinkagesresponse.md): A response containing the resource identifiers of review submissions associated with an app.
- [ReviewSubmissionItemsLinkagesResponse](reviewsubmissionitemslinkagesresponse.md): A response containing the resource identifiers of items included in a review submission.
