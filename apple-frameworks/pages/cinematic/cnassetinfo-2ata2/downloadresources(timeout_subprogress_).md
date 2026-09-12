> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnassetinfo-2ata2/downloadresources(timeout:subprogress:)](https://developer.apple.com/documentation/cinematic/cnassetinfo-2ata2/downloadresources(timeout:subprogress:))

# downloadResources(timeout:subprogress:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst · macOS 27.0+

Downloads the resources required to render cinematic effects for the given asset Resources are device-wide and are cached once downloaded

## Declaration

```swift
@discardableResult func downloadResources(timeout: TimeInterval = defaultResourceDownloadTimeout, subprogress: consuming Subprogress? = nil) async throws -> CNAssetInfo
```

## Parameters

- `subprogress`: Monitors the download progress

<a id="discussion"></a>

## Discussion

Cancellation: this method responds to Swift Task cancellation. If the calling task is cancelled, the download stops; any partially downloaded resources are discarded.
