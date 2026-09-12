> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audioresource/inputmode-swift.enum](https://developer.apple.com/documentation/realitykit/audioresource/inputmode-swift.enum)

# AudioResource.InputMode

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 16.3) · iPadOS 13.0+ (deprecated in 16.3) · Mac Catalyst 13.0+ (deprecated in 16.3) · macOS 10.15+ (deprecated in 13.3) · tvOS 26.0+ (deprecated in 26.0)

> Use the ChannelAudioComponent, AmbientAudioComponent, or SpatialAudioComponent instead.

## Declaration

```swift
enum InputMode
```

## Topics

### Input modes

- [AudioResource.InputMode.nonSpatial](inputmode-swift.enum/nonspatial.md): Deprecated. the input channels are mixed to whatever the output format is without any spatialization
- [AudioResource.InputMode.spatial](inputmode-swift.enum/spatial.md): Deprecated. a spatialized with all degrees of freedom. This treats a resource as a mono stream so mixes all its channels to mono
- [AudioResource.InputMode.ambient](inputmode-swift.enum/ambient.md): Deprecated. spatialized but ignores listener translation and only follows listener head rotation

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Deprecated

- [inputMode](inputmode-swift.property.md): Deprecated.
