> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/beta-app-review-submissions](https://developer.apple.com/documentation/appstoreconnectapi/beta-app-review-submissions)

# Beta App Review Submissions

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

The submissions of builds for beta app review, including the status of submissions.

<a id="overview"></a>

## Overview

A `betaAppReviewSubmissions` resource represents Apple’s review of a build before its distribution through TestFlight. Create a beta app review submission when you are ready to submit a build. App Store Connect validates the beta app review submission to ensure it includes necessary information such as `appEncryptionDeclarations`, `betaAppReviewDetails`, and so on, and submits the build to the review team.

API users can get the `betaAppReviewSubmissions` to see if the build has been accepted or rejected.

## Topics

### Submitting an App for Beta Review

- [Submit an app for beta review](post-v1-betaappreviewsubmissions.md): Submit an app for beta app review to allow external testing.

### Getting Beta App Review Submissions Info

- [List beta app review submissions](get-v1-betaappreviewsubmissions.md): Find and list beta app review submissions for all builds.
- [Read beta app review submission information](get-v1-betaappreviewsubmissions-_id_.md): Get a specific beta app review submission.

### Getting Build Information

- [Read the build information of a beta app review submission](get-v1-betaappreviewsubmissions-_id_-build.md): Get the build information for a specific beta app review submission.
- [Get the build ID for a beta app review submission](get-v1-betaappreviewsubmissions-_id_-relationships-build.md)

### Objects and Data Types

- [BetaAppReviewSubmission](betaappreviewsubmission.md): A submission of a build to Apple’s beta app review process, required before external testing.
- [BetaAppReviewSubmissionCreateRequest](betaappreviewsubmissioncreaterequest.md): The request body you use to create a Beta App Review Submission.
- [BetaAppReviewSubmissionResponse](betaappreviewsubmissionresponse.md): The response body for endpoints that submit a build for beta app review.
- [BetaAppReviewSubmissionWithoutIncludesResponse](betaappreviewsubmissionwithoutincludesresponse.md): A response containing a single beta app review submission, without related resources.
- [BetaAppReviewSubmissionsResponse](betaappreviewsubmissionsresponse.md): The response body for endpoints that list beta app review submissions.
- [BetaReviewState](betareviewstate.md): String that indicates the review state of a beta app.
- [BetaAppReviewSubmissionBuildLinkageResponse](betaappreviewsubmissionbuildlinkageresponse.md)

## See Also

### Beta App Review Submissions

- [Beta App Review Detail](beta-app-review-detail.md): Information about your app required for beta app review.
