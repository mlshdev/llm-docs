> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappreviewsubmissionwithoutincludesresponse](https://developer.apple.com/documentation/appstoreconnectapi/betaappreviewsubmissionwithoutincludesresponse)

# BetaAppReviewSubmissionWithoutIncludesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response containing a single beta app review submission, without related resources.

## Declaration

```
object BetaAppReviewSubmissionWithoutIncludesResponse
```

## Properties

- `data` — `BetaAppReviewSubmission` (required):
- `links` — `DocumentLinks` (required):

## See Also

### Objects and Data Types

- [BetaAppReviewSubmission](betaappreviewsubmission.md): A submission of a build to Apple’s beta app review process, required before external testing.
- [BetaAppReviewSubmissionCreateRequest](betaappreviewsubmissioncreaterequest.md): The request body you use to create a Beta App Review Submission.
- [BetaAppReviewSubmissionResponse](betaappreviewsubmissionresponse.md): The response body for endpoints that submit a build for beta app review.
- [BetaAppReviewSubmissionsResponse](betaappreviewsubmissionsresponse.md): The response body for endpoints that list beta app review submissions.
- [BetaReviewState](betareviewstate.md): String that indicates the review state of a beta app.
- [BetaAppReviewSubmissionBuildLinkageResponse](betaappreviewsubmissionbuildlinkageresponse.md)
