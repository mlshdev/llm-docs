> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audio/distanceattenuation](https://developer.apple.com/documentation/realitykit/audio/distanceattenuation)

# Audio.DistanceAttenuation

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The different ways that audio intensity diminishes as the distance between the listener and the sound source increases.

## Declaration

```swift
enum DistanceAttenuation
```

## Topics

### Enumeration Cases

- [Audio.DistanceAttenuation.rolloff(factor:)](distanceattenuation/rolloff%28factor_%29.md): A standard geometric model for attenuating audio intensity naturally with distance, using a specified loss strength factor.

### Type Properties

- [default](distanceattenuation/default.md): The default distance attenuation, which uses a rolloff model that mimics real-world physics.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Audio types

- [Audio](../audio.md): A namespace for types that are used commonly in audio.
- [Audio.Decibel](decibel.md): The unit for measuring intensity of sound on a logarithmic scale.
- [Audio.Directivity](directivity.md): The radiation pattern of sound emitted from an entity.
