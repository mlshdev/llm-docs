> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-betafeedbackscreenshotsubmissions-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-betafeedbackscreenshotsubmissions-_id_)

# Delete a Beta Feedback Screenshot Submission

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Delete a beta feedback screenshot submission from your app.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/betaFeedbackScreenshotSubmissions/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `betaFeedbackScreenshotSubmissions` resource ID from the [List All Beta Feedback Screenshot Submissions for an App](get-v1-apps-_id_-betafeedbackscreenshotsubmissions.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading and deleting beta feedback screenshot submissions

- [List All Beta Feedback Screenshot Submissions for an App](get-v1-apps-_id_-betafeedbackscreenshotsubmissions.md): Get beta feedback screenshot submissions for a specific app.
- [List all beta feedback screenshot submission ids for an app](get-v1-apps-_id_-relationships-betafeedbackscreenshotsubmissions.md): Get a list of beta feedback screenshot submissions for a specific app.
- [Read a Beta Feedback Screenshot Submission](get-v1-betafeedbackscreenshotsubmissions-_id_.md): Get information for a specific beta feedback screenshot submission.
