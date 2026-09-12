> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-betafeedbackscreenshotsubmissions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-betafeedbackscreenshotsubmissions)

# List all beta feedback screenshot submission ids for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get a list of beta feedback screenshot submissions for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/betaFeedbackScreenshotSubmissions
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of beta feedback screenshot submission resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppBetaFeedbackScreenshotSubmissionsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

List All Introductory Offer Resource IDs for an Auto-Renewable Subscription,Get a list of resource IDs representing introductory offers for an auto-renewable subscription.

## See Also

### Reading and deleting beta feedback screenshot submissions

- [List All Beta Feedback Screenshot Submissions for an App](get-v1-apps-_id_-betafeedbackscreenshotsubmissions.md): Get beta feedback screenshot submissions for a specific app.
- [Read a Beta Feedback Screenshot Submission](get-v1-betafeedbackscreenshotsubmissions-_id_.md): Get information for a specific beta feedback screenshot submission.
- [Delete a Beta Feedback Screenshot Submission](delete-v1-betafeedbackscreenshotsubmissions-_id_.md): Delete a beta feedback screenshot submission from your app.
