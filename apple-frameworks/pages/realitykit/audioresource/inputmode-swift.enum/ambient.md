> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audioresource/inputmode-swift.enum/ambient](https://developer.apple.com/documentation/realitykit/audioresource/inputmode-swift.enum/ambient)

# AudioResource.InputMode.ambient

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 13.0+ (deprecated in 16.3) · iPadOS 13.0+ (deprecated in 16.3) · Mac Catalyst 13.0+ (deprecated in 16.3) · macOS 10.15+ (deprecated in 13.3) · tvOS 26.0+ (deprecated in 26.0)

spatialized but ignores listener translation and only follows listener head rotation

> Use the ChannelAudioComponent, AmbientAudioComponent, or SpatialAudioComponent instead.

## Declaration

```swift
case ambient
```

## See Also

### Input modes

- [AudioResource.InputMode.nonSpatial](nonspatial.md): Deprecated. the input channels are mixed to whatever the output format is without any spatialization
- [AudioResource.InputMode.spatial](spatial.md): Deprecated. a spatialized with all degrees of freedom. This treats a resource as a mono stream so mixes all its channels to mono
