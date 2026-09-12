> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnassetinfo-2ata2/downloadresources(versions:timeout:subprogress:)](https://developer.apple.com/documentation/cinematic/cnassetinfo-2ata2/downloadresources(versions:timeout:subprogress:))

# downloadResources(versions:timeout:subprogress:)

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst · macOS 27.0+

Downloads the resources required to render cinematic effects on assets Resources are device-wide and are cached once downloaded

## Declaration

```swift
static func downloadResources(versions: Set<CNCinematicResourceVersion> = [], timeout: TimeInterval = defaultResourceDownloadTimeout, subprogress: consuming Subprogress? = nil) async throws
```

## Parameters

- `versions`: Resource version(s) to download. Pass an empty set to download all available resources
- `subprogress`: Monitors the download progress

<a id="discussion"></a>

## Discussion

Cancellation: this method responds to Swift Task cancellation. If the calling task is cancelled, the download stops; any partially downloaded resources are discarded.
