> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accountdatatransfer/cancel-request](https://developer.apple.com/documentation/accountdatatransfer/cancel-request)

# Cancel request

**Interface language:** Data

**Framework:** Account Data Transfer  
**Kind:** Web Service Endpoint  
**Availability:** Account Data Transfer 1.0+

Tells the server to stop processing an active request.

## URL

```http
POST https://accountdatatransfer.apple.com/api/transfer/accountdata/cancel
```

## HTTP Body

Content type: `application/json`

Type: `CancellationRequest`

An object that identifies the request to cancel.

## Response Codes

- `200` OK — `CancellationResponse`:
- `400` Bad Request:
- `401` Unauthorized:
- `403` Forbidden:
- `500` Internal Server Error:

<a id="Overview"></a>

## Overview

A cancellation request only succeeds if the request is currently in progress.

<a id="Cancel-a-one-time-download"></a>

### Cancel a one-time download

**Request**

```
% curl -X POST \
  -H "Authorization: Bearer [ACCESS_TOKEN]" \
  -H "X-Apple-Transaction-Id: E3857B28-7FC4-41C8-AC54-08E121E26F59" \
  -H "Content-Type: application/json" \
  -d '{ "requestId": "11619695-72C0-4FFD-858A-1E152DCF0838" }' \
  https://accountdatatransfer.apple.com/api/transfer/accountdata/cancel
```

**Response**

```
{
  "jobStatus": "cancelled",
  "status": "success"
}
```

<a id="Cancel-a-recurring-download"></a>

### Cancel a recurring download

**Request**

```
% curl -X POST \
  -H "Authorization: Bearer [ACCESS_TOKEN]" \
  -H "X-Apple-Transaction-Id: E3857B28-7FC4-41C8-AC54-08E121E26F59" \
  -H "Content-Type: application/json" \
  -d '{ "requestId": "7BBBD45D-638B-4DB5-8B02-F23FDB15EDA7" }' \
  https://accountdatatransfer.apple.com/api/transfer/accountadata/cancel
```

**Response**

```
{
  "jobStatus": "cancelled",
  "status": "success"
}
```

## See Also

### Cancellation

- [CancellationRequest](cancellationrequest.md): An object that identifies a one-time request, or an individual instance of a recurring request, to cancel.
- [CancellationResponse](cancellationresponse.md): An object that describes the outcome of canceling a download request.
