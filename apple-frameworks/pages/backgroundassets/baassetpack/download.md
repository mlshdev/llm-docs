> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baassetpack/download](https://developer.apple.com/documentation/backgroundassets/baassetpack/download)

# download

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a download object for the asset pack that you schedule using a download manager.

## Declaration

```objectivec
- (BADownload *) download;
```

<a id="discussion"></a>

## Discussion

> **Remark**

> Use this method in your main app; use [downloadForContentRequest:](downloadforcontentrequest_.md) instead in your downloader extension.

## See Also

### Downloading assets

- [downloadForContentRequest:](downloadforcontentrequest_.md): Creates a download object for the asset pack that you schedule using a download manager.
- [downloadSize](downloadsize.md): The size of the download file containing the asset pack in bytes.
