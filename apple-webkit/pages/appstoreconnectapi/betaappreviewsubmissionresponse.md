> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappreviewsubmissionresponse](https://developer.apple.com/documentation/appstoreconnectapi/betaappreviewsubmissionresponse)

# BetaAppReviewSubmissionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for endpoints that submit a build for beta app review.

## Declaration

```
object BetaAppReviewSubmissionResponse
```

## Properties

- `data` — `BetaAppReviewSubmission` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.
- `included` — `[Build]`:

## See Also

### Related Documentation

- [Submit an app for beta review](post-v1-betaappreviewsubmissions.md): Submit an app for beta app review to allow external testing.

### Objects and Data Types

- [BetaAppReviewSubmission](betaappreviewsubmission.md): A submission of a build to Apple’s beta app review process, required before external testing.
- [BetaAppReviewSubmissionCreateRequest](betaappreviewsubmissioncreaterequest.md): The request body you use to create a Beta App Review Submission.
- [BetaAppReviewSubmissionWithoutIncludesResponse](betaappreviewsubmissionwithoutincludesresponse.md): A response containing a single beta app review submission, without related resources.
- [BetaAppReviewSubmissionsResponse](betaappreviewsubmissionsresponse.md): The response body for endpoints that list beta app review submissions.
- [BetaReviewState](betareviewstate.md): String that indicates the review state of a beta app.
- [BetaAppReviewSubmissionBuildLinkageResponse](betaappreviewsubmissionbuildlinkageresponse.md)
