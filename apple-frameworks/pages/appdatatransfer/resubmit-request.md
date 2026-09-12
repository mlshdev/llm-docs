> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appdatatransfer/resubmit-request](https://developer.apple.com/documentation/appdatatransfer/resubmit-request)

# Resubmit request

**Interface language:** Data

**Framework:** App Data Transfer  
**Kind:** Web Service Endpoint  
**Availability:** App Data Transfer 1.0+

Enqueue the next instance of a recurring request.

## URL

```http
POST https://appdatatransfer.apple.com/api/transfer/appdata/resubmit
```

## HTTP Body

Content type: `application/json`

Type: `ResubmissionRequest`

The recurring request for which you submit a new instance.

## Response Codes

- `200` OK — `ResubmissionResponse`:
- `400` Bad Request:
- `401` Unauthorized:
- `403` Forbidden:
- `500` Internal Server Error:

<a id="Overview"></a>

## Overview

The `requestId` you pass must be the most recent instance of the series identified by the `parentRequestId`.

**Request**

```
% curl -X POST \
  -H "Authorization: Bearer [ACCESS_TOKEN]" \
  -H "X-Apple-Transaction-Id: E3857B28-7FC4-41C8-AC54-08E121E26F59" \
  -H "Content-Type: application/json" \
  -d '{ "parentRequestId": "EABD06C0-9210-47FF-83C4-318CF8520644", "requestId": "7BBBD45D-638B-4DB5-8B02-F23FDB15EDA7" }' \
  https://appdatatransfer.apple.com/api/transfer/appdata/resubmit
```

**Response**

```
{
  "parentRequestId": "EABD06C0-9210-47FF-83C4-318CF8520644",
  "requestId": "A2DFE115-F039-4FC4-8286-7EAD51D91D8B",
  "status": "success",
  "statusCheckDelay": 86400
}
```

## See Also

### Request creation

- [Submit request](submit-request.md): Starts preparing someone’s data for download.
- [JobSubmission](jobsubmission.md): An object that describes a submission that requests someone’s data.
- [CreatedJob](createdjob.md): An object that represents a newly created download request.
- [ResubmissionRequest](resubmissionrequest.md): An object that describes a request to resubmit a recurring download request.
- [ResubmissionResponse](resubmissionresponse.md): An object that represents a resubmitted recurring download request.
