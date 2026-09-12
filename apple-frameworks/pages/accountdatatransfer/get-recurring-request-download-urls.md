> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accountdatatransfer/get-recurring-request-download-urls](https://developer.apple.com/documentation/accountdatatransfer/get-recurring-request-download-urls)

# Get recurring request download URLs

**Interface language:** Data

**Framework:** Account Data Transfer  
**Kind:** Web Service Endpoint  
**Availability:** Account Data Transfer 1.0+

Get URLs to download a snapshot of someone’s data from a recurring series.

## URL

```http
GET https://accountdatatransfer.apple.com/api/transfer/accountdata/fetch/{parentRequestId}/{requestId}
```

## Path Parameters

- `requestId` — `string` (required): A UUID that identifies the individual download request in the recurring sequence.
- `parentRequestId` — `string` (required): A UUID that identifies the recurring sequence of download requests.

## Response Codes

- `200` OK — `DownloadLinks`:
- `400` Bad Request — `DownloadError`:
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
  https://accountdatatransfer.apple.com/api/transfer/accountdata/fetch/EABD06C0-9210-47FF-83C4-318CF8520644/7BBBD45D-638B-4DB5-8B02-F23FDB15EDA7
```

**Response**

```
{
  "assetInfo": [
    "https://assets.example.com/1.zip",
    "https://assets.example.com/2.zip"
  ],
  "jobStatus": "completed",
  "status": "success",
}
```

## See Also

### Downloads

- [Get one-time request download URLs](get-one-time-request-download-urls.md): Get URLs to retrieve someone’s data.
- [DownloadLinks](downloadlinks.md): An object that contains URLs to download someone’s account data.
- [DownloadError](downloaderror.md): An object that describes an error the server encounters preparing download URLs for a request.
