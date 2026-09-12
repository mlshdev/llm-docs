> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accountdatatransfer/downloadlinks](https://developer.apple.com/documentation/accountdatatransfer/downloadlinks)

# DownloadLinks

**Interface language:** Data

**Framework:** Account Data Transfer  
**Kind:** Object  
**Availability:** Account Data Transfer 1.0+

An object that contains URLs to download someone’s account data.

## Declaration

```
object DownloadLinks
```

## Properties

- `assetInfo` — `[string]`: An array of URLs to which you make `GET` requests to download someone’s account data if `jobStatus` is `completed`; otherwise, \[TBD\].
- `jobStatus` — `string`: **Allowed values:** `completed`, `request_not_found`, `in_progress`, `error`, `completed_with_error`, `cancelled`
- `status` — `string`: **Allowed values:** `success`

<a id="Overview"></a>

## Overview

The URLs you get from the `assetInfo` property are valid for 15 minutes after you receive them.

=======

- assetInfo: An array of URLs to which you make `GET` requests to download someone’s account data.

> **Note**

> > **Note**
>
> > > **Note**
> >
> > > > **Note**
> > >
> > > > > **Note**
> > > >
> > > > > > **Note**
> > > > >
> > > > > > > **Note**
> > > > > >
> > > > > > > Main

- jobStatus: The result of the download request.
- status: The result of the operation to request download links.

## See Also

### Downloads

- [Get one-time request download URLs](get-one-time-request-download-urls.md): Get URLs to retrieve someone’s data.
- [Get recurring request download URLs](get-recurring-request-download-urls.md): Get URLs to download a snapshot of someone’s data from a recurring series.
- [DownloadError](downloaderror.md): An object that describes an error the server encounters preparing download URLs for a request.
