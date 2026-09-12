> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappreviewsubmission](https://developer.apple.com/documentation/appstoreconnectapi/betaappreviewsubmission)

# BetaAppReviewSubmission

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

A submission of a build to Apple’s beta app review process, required before external testing.

## Declaration

```
object BetaAppReviewSubmission
```

## Properties

- `attributes` — `BetaAppReviewSubmission.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `BetaAppReviewSubmission.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaAppReviewSubmissions`

## Topics

### Objects

- [BetaAppReviewSubmission.Attributes](betaappreviewsubmission/attributes-data.dictionary.md): Attributes that describe a Beta App Review Submissions resource.
- [BetaAppReviewSubmission.Relationships](betaappreviewsubmission/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and Data Types

- [BetaAppReviewSubmissionCreateRequest](betaappreviewsubmissioncreaterequest.md): The request body you use to create a Beta App Review Submission.
- [BetaAppReviewSubmissionResponse](betaappreviewsubmissionresponse.md): The response body for endpoints that submit a build for beta app review.
- [BetaAppReviewSubmissionWithoutIncludesResponse](betaappreviewsubmissionwithoutincludesresponse.md): A response containing a single beta app review submission, without related resources.
- [BetaAppReviewSubmissionsResponse](betaappreviewsubmissionsresponse.md): The response body for endpoints that list beta app review submissions.
- [BetaReviewState](betareviewstate.md): String that indicates the review state of a beta app.
- [BetaAppReviewSubmissionBuildLinkageResponse](betaappreviewsubmissionbuildlinkageresponse.md)
