> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/downloadableassetsrequeststatus/notready](https://developer.apple.com/documentation/vision/downloadableassetsrequeststatus/notready)

# DownloadableAssetsRequestStatus.notReady

**Framework:** Vision  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The assets are not ready or the status is unknown. Call [downloadAssets()](../downloadableassetsrequest/downloadassets%28%29.md) or [downloadAssets(progress:)](../downloadableassetsrequest/downloadassets%28progress_%29.md) to initiate the download.

## Declaration

```swift
case notReady
```

## See Also

### Download status cases

- [DownloadableAssetsRequestStatus.error(\_:)](error%28__%29.md): The asset download failed with an error.
- [DownloadableAssetsRequestStatus.ready](ready.md): The assets are ready.
- [DownloadableAssetsRequestStatus.downloading](downloading.md): The assets are being downloaded. Check progress through the subprogress that was passed to [downloadAssets(progress:)](../downloadableassetsrequest/downloadassets%28progress_%29.md).
