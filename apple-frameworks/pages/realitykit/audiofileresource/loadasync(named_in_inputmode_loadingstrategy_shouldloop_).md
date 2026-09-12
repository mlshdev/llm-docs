> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiofileresource/loadasync(named:in:inputmode:loadingstrategy:shouldloop:)](https://developer.apple.com/documentation/realitykit/audiofileresource/loadasync(named:in:inputmode:loadingstrategy:shouldloop:))

# loadAsync(named:in:inputMode:loadingStrategy:shouldLoop:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0)

## Declaration

```swift
@MainActor @preconcurrency static func loadAsync(named name: String, in bundle: Bundle? = nil, inputMode: AudioResource.InputMode = .spatial, loadingStrategy: AudioFileResource.LoadingStrategy = .preload, shouldLoop: Bool = false) -> LoadRequest<AudioFileResource>
```

## See Also

### Deprecated

- [load(named:in:inputMode:loadingStrategy:shouldLoop:)](load%28named_in_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated. Synchronously loads an audio resource.
- [load(contentsOf:withName:inputMode:loadingStrategy:shouldLoop:)](load%28contentsof_withname_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated. Synchronously loads an audio resource.
- [loadAsync(contentsOf:withName:inputMode:loadingStrategy:shouldLoop:)](loadasync%28contentsof_withname_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated.
- [loadingStrategy](loadingstrategy-swift.property.md): Deprecated. The resource’s memory model.
- [shouldLoop](shouldloop.md): Deprecated. Whether or not this file loops during playback. This should be set for assets that are prepared as seamless loops. A looping resource will play forever until it is explicitly told to stop.
