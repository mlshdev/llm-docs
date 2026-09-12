> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accountdatatransfer/get-recurring-request-status](https://developer.apple.com/documentation/accountdatatransfer/get-recurring-request-status)

# Get recurring request status

**Interface language:** Data

**Framework:** Account Data Transfer  
**Kind:** Web Service Endpoint  
**Availability:** Account Data Transfer 1.0+

Get the status of an instance of a recurring download request.

## URL

```http
GET https://accountdatatransfer.apple.com/api/transfer/accountdata/{parentRequestId}/{requestId}
```

## Path Parameters

- `parentRequestId` — `string` (required): A UUID that identifies the series of recurring download requests.
- `requestId` — `string` (required): A UUID that identifies the individual request.

## Response Codes

- `200` OK — `RequestStatus`:
- `400` Bad Request:
- `401` Unauthorized:
- `403` Forbidden:
- `500` Internal Server Error:

<a id="overview"></a>

## Overview

**Request**

```
% curl -X GET \
  -H "Authorization: Bearer [ACCESS_TOKEN]" \
  -H "X-Apple-Transaction-Id: E3857B28-7FC4-41C8-AC54-08E121E26F59" \
  -H "Accept: application/json" \
  https://accountdatatransfer.apple.com/api/transfer/accountdata/EABD06C0-9210-47FF-83C4-318CF8520644/7BBBD45D-638B-4DB5-8B02-F23FDB15EDA7
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

- [Get one-time request status](get-one-time-request-status.md): Find the status of a one-time download request.
- [RequestStatus](requeststatus.md): An object that represents the status of a download request.
