> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baassetpack/downloadforcontentrequest:](https://developer.apple.com/documentation/backgroundassets/baassetpack/downloadforcontentrequest:)

# downloadForContentRequest:

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a download object for the asset pack that you schedule using a download manager.

## Declaration

```objectivec
- (BADownload *) downloadForContentRequest:(BAContentRequest) contentRequest;
```

## Parameters

- `contentRequest`: The content request for the current extension invocation.

<a id="return-value"></a>

## Return Value

A download object.

<a id="discussion"></a>

## Discussion

> **Remark**

> Use this method in your downloader extension; use [download](download.md) instead in your main app.

## See Also

### Downloading assets

- [download](download.md): Creates a download object for the asset pack that you schedule using a download manager.
- [downloadSize](downloadsize.md): The size of the download file containing the asset pack in bytes.
