> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiofileresource/load(contentsof:withname:inputmode:loadingstrategy:shouldloop:)](https://developer.apple.com/documentation/realitykit/audiofileresource/load(contentsof:withname:inputmode:loadingstrategy:shouldloop:))

# load(contentsOf:withName:inputMode:loadingStrategy:shouldLoop:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0)

Synchronously loads an audio resource.

## Declaration

```swift
@MainActor @preconcurrency static func load(contentsOf url: URL, withName resourceName: String? = nil, inputMode: AudioResource.InputMode = .spatial, loadingStrategy: AudioFileResource.LoadingStrategy = .preload, shouldLoop: Bool = false) throws -> AudioFileResource
```

## See Also

### Deprecated

- [load(named:in:inputMode:loadingStrategy:shouldLoop:)](load%28named_in_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated. Synchronously loads an audio resource.
- [loadAsync(named:in:inputMode:loadingStrategy:shouldLoop:)](loadasync%28named_in_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated.
- [loadAsync(contentsOf:withName:inputMode:loadingStrategy:shouldLoop:)](loadasync%28contentsof_withname_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated.
- [loadingStrategy](loadingstrategy-swift.property.md): Deprecated. The resource’s memory model.
- [shouldLoop](shouldloop.md): Deprecated. Whether or not this file loops during playback. This should be set for assets that are prepared as seamless loops. A looping resource will play forever until it is explicitly told to stop.
