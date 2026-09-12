> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-reviewsubmissions](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-reviewsubmissions)

# Create a Review Submission

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

Create a review submission for a specific app.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/reviewSubmissions
```

## HTTP Body

Content type: `application/json`

Type: `ReviewSubmissionCreateRequest`

## Response Codes

- `201` Created — `ReviewSubmissionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.0 release notes](app-store-connect-api-4-0-release-notes.md)
- [App Store Connect API 4.1 release notes](app-store-connect-api-4-1-release-notes.md)
- [Configuring Game center activities](configuring-game-center-activities.md)
- [Configuring Game Center challenges](configuring-game-center-challenges.md)
- [Uploading and versioning Apple hosted background assets](managing-apple-hosted-background-assets.md)
- [Managing in-app purchases](managing-in-app-purchases.md)
- [Submitting subscriptions and subscription groups for App Review](submitting-subscriptions-and-subscription-groups-for-app-review.md)

<a id="overview"></a>

## Overview

> **Note**

> The attribute `platform` is no longer required when using [Create a Review Submission](post-v1-reviewsubmissions.md). You can optionally add the attribute platform when using [Modify a Review Submission](patch-v1-reviewsubmissions-_id_.md).

## See Also

### Endpoints

- [List Review Submissions for an App](get-v1-reviewsubmissions.md): List recent and current review submissions for a specific app.
- [Read Review Submission Information](get-v1-reviewsubmissions-_id_.md): Read information about a specific review submisison.
- [List the Items in a Review Submission](get-v1-reviewsubmissions-_id_-items.md): List all the items in a specific review submission.
- [List item IDs](get-v1-reviewsubmissions-_id_-relationships-items.md): Get the list of item IDs for a specific review submission.
- [List review submission IDs](get-v1-apps-_id_-relationships-reviewsubmissions.md): Get the list of review submission IDs for a specific app.
- [Modify a Review Submission](patch-v1-reviewsubmissions-_id_.md): Edit the details or contents of a review submission.
