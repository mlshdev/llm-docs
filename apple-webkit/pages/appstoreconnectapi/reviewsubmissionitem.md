> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/reviewsubmissionitem](https://developer.apple.com/documentation/appstoreconnectapi/reviewsubmissionitem)

# ReviewSubmissionItem

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

An individual reviewable item — such as an app version, in-app purchase, or App Clip — included in a review submission.

## Declaration

```
object ReviewSubmissionItem
```

## Properties

- `attributes` — `ReviewSubmissionItem.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `ReviewSubmissionItem.Relationships`:
- `type` — `string` (required): **Allowed values:** `reviewSubmissionItems`

## Topics

### Objects

- [ReviewSubmissionItem.Attributes](reviewsubmissionitem/attributes-data.dictionary.md): Attributes that describe a review submission item resource.
- [ReviewSubmissionItem.Relationships](reviewsubmissionitem/relationships-data.dictionary.md): The relationships you include in the request and those you can operate on.

## See Also

### Objects

- [ReviewSubmission](reviewsubmission.md): A formal submission to App Store review grouping one or more items — app versions, in-app purchases, or events — for simultaneous review.
- [ReviewSubmissionUpdateRequest](reviewsubmissionupdaterequest.md): The request body you use to update a review submission update request.
- [ReviewSubmissionCreateRequest](reviewsubmissioncreaterequest.md): The request body for creating a review submission for an App Store version or associated items.
- [ReviewSubmissionResponse](reviewsubmissionresponse.md): The response body for endpoints that create, read, or modify a single review submission.
- [ReviewSubmissionsResponse](reviewsubmissionsresponse.md): The response body for endpoints that list review submissions for an app.
- [AppReviewSubmissionsLinkagesResponse](appreviewsubmissionslinkagesresponse.md): A response containing the resource identifiers of review submissions associated with an app.
- [ReviewSubmissionItemsLinkagesResponse](reviewsubmissionitemslinkagesresponse.md): A response containing the resource identifiers of items included in a review submission.
