> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appdatatransfer/get-one-time-request-status](https://developer.apple.com/documentation/appdatatransfer/get-one-time-request-status)

# Get one-time request status

**Interface language:** Data

**Framework:** App Data Transfer  
**Kind:** Web Service Endpoint  
**Availability:** App Data Transfer 1.0+

Find the status of a one-time download request.

## URL

```http
GET https://appdatatransfer.apple.com/api/transfer/appdata/{requestId}
```

## Path Parameters

- `requestId` — `string` (required): A UUID that identifies the download request.

## Response Codes

- `200` OK — `RequestStatus`:

<a id="overview"></a>

## Overview

**Request**

```
% curl -X GET \
  -H "Authorization: Bearer [ACCESS_TOKEN]" \
  -H "X-Apple-Transaction-Id: E3857B28-7FC4-41C8-AC54-08E121E26F59" \
  -H "Accept: application/json" \
  https://appdatatransfer.apple.com/api/transfer/appdata/11619695-72C0-4FFD-858A-1E152DCF0838
```

**Response**

```
{
  "jobStatus": "in_progress",
  "status": "success",
  "statusCheckDelay": 86400
}
```

## See Also

### Status

- [Get recurring request status](get-recurring-request-status.md): Get the status of an instance of a recurring download request.
- [RequestStatus](requeststatus.md): An object that represents the status of a download request.
