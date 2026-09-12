> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appdatatransfer/downloadlinks](https://developer.apple.com/documentation/appdatatransfer/downloadlinks)

# DownloadLinks

**Interface language:** Data

**Framework:** App Data Transfer  
**Kind:** Object  
**Availability:** App Data Transfer 1.0+

An object that contains URLs to download someone’s data specific to your app.

## Declaration

```
object DownloadLinks
```

## Properties

- `assetInfo` — `[string]`: An array of URLs to which you make `GET` requests to download someone’s account data.
- `jobStatus` — `string`: The result of the download request.
  **Allowed values:** `completed`, `request_not_found`, `in_progress`, `error`, `completed_with_error`, `cancelled`
- `status` — `string`: The result of the operation to request download links.
  **Allowed values:** `success`

<a id="Overview"></a>

## Overview

The URLs you get from the `assetInfo` property are valid for 15 minutes after you receive them.

## See Also

### Downloads

- [Get one-time request download URLs](get-one-time-request-download-urls.md): Get URLs to retrieve someone’s data.
- [Get recurring request download URLs](get-recurring-request-download-urls.md): Get URLs to download a snapshot of someone’s data specific to your app from a recurring series.
- [DownloadError](downloaderror.md): An object that describes an error the server encounters while preparing download URLs for a request.
