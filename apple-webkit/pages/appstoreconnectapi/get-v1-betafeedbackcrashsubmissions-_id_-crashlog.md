> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betafeedbackcrashsubmissions-_id_-crashlog](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betafeedbackcrashsubmissions-_id_-crashlog)

# Read the Crash Log for a Beta Feedback Crash Submission

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get crash log information for a specific beta feedback crash submission.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaFeedbackCrashSubmissions/{id}/crashLog
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `betaFeedbackCrashSubmissions` resource ID from the [List All Beta Feedback Crash Submissions for an App](get-v1-apps-_id_-betafeedbackcrashsubmissions.md) response.

## Query Parameters

- `fields[betaCrashLogs]` — `[string]`: **Allowed values:** `logText`

## Response Codes

- `200` OK — `BetaCrashLogResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading and deleting beta feedback crash submissions

- [List All Beta Feedback Crash Submissions for an App](get-v1-apps-_id_-betafeedbackcrashsubmissions.md): Get the beta feedback crash submissions for a specific app.
- [List all beta feedback crash submission ids for an app](get-v1-apps-_id_-relationships-betafeedbackcrashsubmissions.md): Get a list of beta feedback crash submissions for a specific app.
- [Read Beta Feedback Crash Submission Information](get-v1-betafeedbackcrashsubmissions-_id_.md): Get information for a specific beta feedback crash submission.
- [Get the crash log ID for a beta feedback crash submission](get-v1-betafeedbackcrashsubmissions-_id_-relationships-crashlog.md)
- [Delete a Beta Feedback Crash Submission](delete-v1-betafeedbackcrashsubmissions-_id_.md): Delete a beta feedback crash submission from your app.
