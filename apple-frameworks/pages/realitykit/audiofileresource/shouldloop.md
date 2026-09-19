> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/audiofileresource/shouldloop

# shouldLoop

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · visionOS 2.0+ (deprecated in 1.0)

Whether or not this file loops during playback. This should be set for assets that are prepared as seamless loops. A looping resource will play forever until it is explicitly told to stop.

> Use configuration.shouldLoop instead.

## Declaration

```swift
@MainActor @preconcurrency var shouldLoop: Bool { get set }
```

## See Also

### Deprecated

- [load(named:in:inputMode:loadingStrategy:shouldLoop:)](load%28named_in_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated. Synchronously loads an audio resource.
- [loadAsync(named:in:inputMode:loadingStrategy:shouldLoop:)](loadasync%28named_in_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated.
- [load(contentsOf:withName:inputMode:loadingStrategy:shouldLoop:)](load%28contentsof_withname_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated. Synchronously loads an audio resource.
- [loadAsync(contentsOf:withName:inputMode:loadingStrategy:shouldLoop:)](loadasync%28contentsof_withname_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated.
- [loadingStrategy](loadingstrategy-swift.property.md): Deprecated. The resource’s memory model.
