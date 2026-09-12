> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappreviewsubmissionsresponse](https://developer.apple.com/documentation/appstoreconnectapi/betaappreviewsubmissionsresponse)

# BetaAppReviewSubmissionsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for endpoints that list beta app review submissions.

## Declaration

```
object BetaAppReviewSubmissionsResponse
```

## Properties

- `data` — `[BetaAppReviewSubmission]` (required): The resource data.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.
- `included` — `[Build]`:

## See Also

### Related Documentation

- [List beta app review submissions](get-v1-betaappreviewsubmissions.md): Find and list beta app review submissions for all builds.

### Objects and Data Types

- [BetaAppReviewSubmission](betaappreviewsubmission.md): A submission of a build to Apple’s beta app review process, required before external testing.
- [BetaAppReviewSubmissionCreateRequest](betaappreviewsubmissioncreaterequest.md): The request body you use to create a Beta App Review Submission.
- [BetaAppReviewSubmissionResponse](betaappreviewsubmissionresponse.md): The response body for endpoints that submit a build for beta app review.
- [BetaAppReviewSubmissionWithoutIncludesResponse](betaappreviewsubmissionwithoutincludesresponse.md): A response containing a single beta app review submission, without related resources.
- [BetaReviewState](betareviewstate.md): String that indicates the review state of a beta app.
- [BetaAppReviewSubmissionBuildLinkageResponse](betaappreviewsubmissionbuildlinkageresponse.md)
