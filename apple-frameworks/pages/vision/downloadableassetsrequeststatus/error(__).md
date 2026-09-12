> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/downloadableassetsrequeststatus/error(_:)](https://developer.apple.com/documentation/vision/downloadableassetsrequeststatus/error(_:))

# DownloadableAssetsRequestStatus.error(\_:)

**Framework:** Vision  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The asset download failed with an error.

## Declaration

```swift
case error(any Error)
```

## See Also

### Download status cases

- [DownloadableAssetsRequestStatus.notReady](notready.md): The assets are not ready or the status is unknown. Call [downloadAssets()](../downloadableassetsrequest/downloadassets%28%29.md) or [downloadAssets(progress:)](../downloadableassetsrequest/downloadassets%28progress_%29.md) to initiate the download.
- [DownloadableAssetsRequestStatus.ready](ready.md): The assets are ready.
- [DownloadableAssetsRequestStatus.downloading](downloading.md): The assets are being downloaded. Check progress through the subprogress that was passed to [downloadAssets(progress:)](../downloadableassetsrequest/downloadassets%28progress_%29.md).
