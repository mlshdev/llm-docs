> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-betaappreviewsubmissions](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-betaappreviewsubmissions)

# Submit an app for beta review

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Submit an app for beta app review to allow external testing.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/betaAppReviewSubmissions
```

## HTTP Body

Content type: `application/json`

Type: `BetaAppReviewSubmissionCreateRequest`

## Response Codes

- `201` Created — `BetaAppReviewSubmissionResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Uploading and versioning Apple hosted background assets](managing-apple-hosted-background-assets.md)

<a id="overview"></a>

## Overview

> **Important**

>  Before submitting to beta app review, you need to add a description for all `betaAppLocalizations`. To add a description, use [Modify a beta app localization](patch-v1-betaapplocalizations-_id_.md).
