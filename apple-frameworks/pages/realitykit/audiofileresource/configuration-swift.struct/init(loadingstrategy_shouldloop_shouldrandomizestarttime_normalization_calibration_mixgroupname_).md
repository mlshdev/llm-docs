> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/audiofileresource/configuration-swift.struct/init(loadingstrategy:shouldloop:shouldrandomizestarttime:normalization:calibration:mixgroupname:)

# init(loadingStrategy:shouldLoop:shouldRandomizeStartTime:normalization:calibration:mixGroupName:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Initializes a new audio file resource configuration.

## Declaration

```swift
init(loadingStrategy: AudioFileResource.LoadingStrategy = .preload, shouldLoop: Bool = false, shouldRandomizeStartTime: Bool = false, normalization: AudioResource.Normalization? = nil, calibration: AudioResource.Calibration? = nil, mixGroupName: String? = nil)
```
