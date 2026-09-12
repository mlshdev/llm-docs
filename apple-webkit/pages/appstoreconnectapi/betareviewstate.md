> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betareviewstate](https://developer.apple.com/documentation/appstoreconnectapi/betareviewstate)

# BetaReviewState

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 1.0+

String that indicates the review state of a beta app.

## Declaration

```
string BetaReviewState
```

## Possible Values

- `WAITING_FOR_REVIEW`:
- `IN_REVIEW`:
- `REJECTED`:
- `APPROVED`:

## See Also

### Objects and Data Types

- [BetaAppReviewSubmission](betaappreviewsubmission.md): A submission of a build to Apple’s beta app review process, required before external testing.
- [BetaAppReviewSubmissionCreateRequest](betaappreviewsubmissioncreaterequest.md): The request body you use to create a Beta App Review Submission.
- [BetaAppReviewSubmissionResponse](betaappreviewsubmissionresponse.md): The response body for endpoints that submit a build for beta app review.
- [BetaAppReviewSubmissionWithoutIncludesResponse](betaappreviewsubmissionwithoutincludesresponse.md): A response containing a single beta app review submission, without related resources.
- [BetaAppReviewSubmissionsResponse](betaappreviewsubmissionsresponse.md): The response body for endpoints that list beta app review submissions.
- [BetaAppReviewSubmissionBuildLinkageResponse](betaappreviewsubmissionbuildlinkageresponse.md)
