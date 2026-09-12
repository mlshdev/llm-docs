> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiofileresource/loadingstrategy-swift.property](https://developer.apple.com/documentation/realitykit/audiofileresource/loadingstrategy-swift.property)

# loadingStrategy

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · visionOS 2.0+ (deprecated in 1.0)

The resource’s memory model.

> Use configuration.loadingStrategy instead.

## Declaration

```swift
@MainActor @preconcurrency var loadingStrategy: AudioFileResource.LoadingStrategy { get set }
```

## See Also

### Deprecated

- [load(named:in:inputMode:loadingStrategy:shouldLoop:)](load%28named_in_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated. Synchronously loads an audio resource.
- [loadAsync(named:in:inputMode:loadingStrategy:shouldLoop:)](loadasync%28named_in_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated.
- [load(contentsOf:withName:inputMode:loadingStrategy:shouldLoop:)](load%28contentsof_withname_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated. Synchronously loads an audio resource.
- [loadAsync(contentsOf:withName:inputMode:loadingStrategy:shouldLoop:)](loadasync%28contentsof_withname_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated.
- [shouldLoop](shouldloop.md): Deprecated. Whether or not this file loops during playback. This should be set for assets that are prepared as seamless loops. A looping resource will play forever until it is explicitly told to stop.
