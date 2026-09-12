> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appdatatransfer/submit-request](https://developer.apple.com/documentation/appdatatransfer/submit-request)

# Submit request

**Interface language:** Data

**Framework:** App Data Transfer  
**Kind:** Web Service Endpoint  
**Availability:** App Data Transfer 1.0+

Starts preparing someone’s data for download.

## URL

```http
POST https://appdatatransfer.apple.com/api/transfer/appdata/submit
```

## HTTP Body

Content type: `application/json`

Type: `JobSubmission`

The description of the new download request.

## Response Codes

- `200` OK — `CreatedJob`:
- `400` Bad Request:
- `401` Unauthorized:
- `403` Forbidden:
- `500` Internal Server Error:

<a id="Overview"></a>

## Overview

Request the `app-store` data type to get App Store information and app-install activity.

<a id="Request-a-one-time-download"></a>

### Request a one-time download

**Request**

```
% curl -X POST \
  -H "Authorization: Bearer [ACCESS_TOKEN]" \
  -H "X-Apple-Transaction-Id: E3857B28-7FC4-41C8-AC54-08E121E26F59" \
  -H "Content-Type: application/json" \
  -d '{ "mode": "ONE_TIME" }' \
  https://appdatatransfer.apple.com/api/transfer/appdata/submit
```

**Response**

```
{
  "requestId": "11619695-72C0-4FFD-858A-1E152DCF0838",
  "status": "in_progress",
  "statusCheckDelay": 86400
}
```

<a id="Request-a-recurring-download"></a>

### Request a recurring download

**Request**

```
% curl -X POST \
  -H "Authorization: Bearer [ACCESS_TOKEN]" \
  -H "X-Apple-Transaction-Id: E3857B28-7FC4-41C8-AC54-08E121E26F59" \
  -H "Content-Type: application/json" \
  -d '{ "mode": "DAILY_30" }' \
  https://appdatatransfer.apple.com/api/transfer/appdata/submit
```

**Response**

```
{
  "parentRequestId": "EABD06C0-9210-47FF-83C4-318CF8520644",
  "requestId": "7BBBD45D-638B-4DB5-8B02-F23FDB15EDA7",
  "status": "in_progress",
  "statusCheckDelay": 86400
}
```

## See Also

### Request creation

- [JobSubmission](jobsubmission.md): An object that describes a submission that requests someone’s data.
- [CreatedJob](createdjob.md): An object that represents a newly created download request.
- [Resubmit request](resubmit-request.md): Enqueue the next instance of a recurring request.
- [ResubmissionRequest](resubmissionrequest.md): An object that describes a request to resubmit a recurring download request.
- [ResubmissionResponse](resubmissionresponse.md): An object that represents a resubmitted recurring download request.
