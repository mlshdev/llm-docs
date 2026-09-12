> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappreviewsubmissioncreaterequest](https://developer.apple.com/documentation/appstoreconnectapi/betaappreviewsubmissioncreaterequest)

# BetaAppReviewSubmissionCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The request body you use to create a Beta App Review Submission.

## Declaration

```
object BetaAppReviewSubmissionCreateRequest
```

## Properties

- `data` — `BetaAppReviewSubmissionCreateRequest.Data` (required): The resource data.

## Topics

### Objects

- [BetaAppReviewSubmissionCreateRequest.Data](betaappreviewsubmissioncreaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects and Data Types

- [BetaAppReviewSubmission](betaappreviewsubmission.md): A submission of a build to Apple’s beta app review process, required before external testing.
- [BetaAppReviewSubmissionResponse](betaappreviewsubmissionresponse.md): The response body for endpoints that submit a build for beta app review.
- [BetaAppReviewSubmissionWithoutIncludesResponse](betaappreviewsubmissionwithoutincludesresponse.md): A response containing a single beta app review submission, without related resources.
- [BetaAppReviewSubmissionsResponse](betaappreviewsubmissionsresponse.md): The response body for endpoints that list beta app review submissions.
- [BetaReviewState](betareviewstate.md): String that indicates the review state of a beta app.
- [BetaAppReviewSubmissionBuildLinkageResponse](betaappreviewsubmissionbuildlinkageresponse.md)
