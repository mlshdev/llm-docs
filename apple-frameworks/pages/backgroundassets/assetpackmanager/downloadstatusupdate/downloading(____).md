> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/downloadstatusupdate/downloading(_:_:)](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/downloadstatusupdate/downloading(_:_:))

# AssetPackManager.DownloadStatusUpdate.downloading(\_:\_:)

**Framework:** Background Assets  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A status update that indicates that the download is in progress.

## Declaration

```swift
case downloading(AssetPack, Progress)
```

## See Also

### Tracking downloads

- [AssetPackManager.DownloadStatusUpdate.began(\_:)](began%28__%29.md): A status update that indicates that the download began or resumed after being paused.
- [AssetPackManager.DownloadStatusUpdate.paused(\_:)](paused%28__%29.md): A status update that indicates that the download paused.
- [AssetPackManager.DownloadStatusUpdate.finished(\_:)](finished%28__%29.md): A status update that indicates that the download completed and that the asset pack is available locally.
- [AssetPackManager.DownloadStatusUpdate.failed(\_:\_:)](failed%28____%29.md): A status update that indicates that the download failed.
