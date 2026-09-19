> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnassetinfo-2ata2/defaultresourcedownloadtimeout

# defaultResourceDownloadTimeout

**Framework:** Cinematic  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst · macOS 27.0+

Default timeout value for resource download for: `public static func downloadResources(versions: Set<CNCinematicResourceVersion> = [], timeout: TimeInterval = defaultResourceDownloadTimeout, subprogress: consuming Subprogress? = nil) async throws` `public func downloadResources(timeout: TimeInterval = defaultResourceDownloadTimeout, subprogress: consuming Subprogress? = nil) async throws -> CNAssetInfo`

## Declaration

```swift
static var defaultResourceDownloadTimeout: TimeInterval { get }
```
