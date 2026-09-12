> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betacrashlogs-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betacrashlogs-_id_)

# Read Beta Crash Log Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get crash log details for a specific beta feedback crash submission.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaCrashLogs/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `betaCrashLogs` resource ID from the [Read the Crash Log for a Beta Feedback Crash Submission](get-v1-betafeedbackcrashsubmissions-_id_-crashlog.md) response.

## Query Parameters

- `fields[betaCrashLogs]` — `[string]`: **Allowed values:** `logText`

## Response Codes

- `200` OK — `BetaCrashLogResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:
