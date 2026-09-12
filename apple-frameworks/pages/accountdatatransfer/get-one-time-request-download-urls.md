> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accountdatatransfer/get-one-time-request-download-urls](https://developer.apple.com/documentation/accountdatatransfer/get-one-time-request-download-urls)

# Get one-time request download URLs

**Interface language:** Data

**Framework:** Account Data Transfer  
**Kind:** Web Service Endpoint  
**Availability:** Account Data Transfer 1.0+

Get URLs to retrieve someone’s data.

## URL

```http
GET https://accountdatatransfer.apple.com/api/transfer/accountdata/fetch/{requestId}
```

## Path Parameters

- `requestId` — `string` (required): A UUID that identifies the one-time request.

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
  https://accountdatatransfer.apple.com/api/transfer/accountdata/fetch/11619695-72C0-4FFD-858A-1E152DCF0838
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

- [Get recurring request download URLs](get-recurring-request-download-urls.md): Get URLs to download a snapshot of someone’s data from a recurring series.
- [DownloadLinks](downloadlinks.md): An object that contains URLs to download someone’s account data.
- [DownloadError](downloaderror.md): An object that describes an error the server encounters preparing download URLs for a request.
