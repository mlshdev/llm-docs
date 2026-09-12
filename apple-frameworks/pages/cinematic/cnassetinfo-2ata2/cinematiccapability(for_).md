> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnassetinfo-2ata2/cinematiccapability(for:)](https://developer.apple.com/documentation/cinematic/cnassetinfo-2ata2/cinematiccapability(for:))

# cinematicCapability(for:)

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst · macOS 27.0+ · tvOS 27.0+

Asynchronously checks the cinematic capability of an asset. Returns CNCinematicCapability.none if a cinematic metadata track is not present. CNCinematicCapability.renderable if the cinematic asset can be used without preprocessing CNCinematicCapability.needsPreprocessing If cinematic asset needs preprocessing before it can be used For assets that need preprocessing use `CNAssetInfo.preprocessAsset(configuration:subprogress:)` before using the asset

## Declaration

```swift
class func cinematicCapability(for asset: AVAsset) async -> CNCinematicCapability
```
