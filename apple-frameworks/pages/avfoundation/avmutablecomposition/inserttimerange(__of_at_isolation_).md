> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecomposition/inserttimerange(_:of:at:isolation:)](https://developer.apple.com/documentation/avfoundation/avmutablecomposition/inserttimerange(_:of:at:isolation:))

# insertTimeRange(\_:of:at:isolation:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
@backDeployed(before: macOS 15, iOS 18, tvOS 18, watchOS 11, visionOS 2)
final func insertTimeRange(_ timeRange: CMTimeRange, of asset: AVAsset, at time: CMTime, isolation: isolated (any Actor)? = #isolation) async throws
```
