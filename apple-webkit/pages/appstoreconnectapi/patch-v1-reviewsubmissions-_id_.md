> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-reviewsubmissions-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-reviewsubmissions-_id_)

# Modify a Review Submission

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

Edit the details or contents of a review submission.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/reviewSubmissions/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the review submissions resource. Obtain the app resource ID from the [List Review Submissions for an App](get-v1-reviewsubmissions.md) response.

## HTTP Body

Content type: `application/json`

Type: `ReviewSubmissionUpdateRequest`

## Response Codes

- `200` OK — `ReviewSubmissionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.1 release notes](app-store-connect-api-4-1-release-notes.md)
- [Managing in-app purchases](managing-in-app-purchases.md)
- [Submitting subscriptions and subscription groups for App Review](submitting-subscriptions-and-subscription-groups-for-app-review.md)

<a id="overview"></a>

## Overview

> **Note**

> You can optionally add the attribute platform when using [Modify a Review Submission](patch-v1-reviewsubmissions-_id_.md).

## See Also

### Endpoints

- [List Review Submissions for an App](get-v1-reviewsubmissions.md): List recent and current review submissions for a specific app.
- [Read Review Submission Information](get-v1-reviewsubmissions-_id_.md): Read information about a specific review submisison.
- [List the Items in a Review Submission](get-v1-reviewsubmissions-_id_-items.md): List all the items in a specific review submission.
- [List item IDs](get-v1-reviewsubmissions-_id_-relationships-items.md): Get the list of item IDs for a specific review submission.
- [List review submission IDs](get-v1-apps-_id_-relationships-reviewsubmissions.md): Get the list of review submission IDs for a specific app.
- [Create a Review Submission](post-v1-reviewsubmissions.md): Create a review submission for a specific app.
