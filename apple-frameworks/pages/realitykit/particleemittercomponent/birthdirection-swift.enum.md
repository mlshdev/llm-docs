> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/particleemittercomponent/birthdirection-swift.enum](https://developer.apple.com/documentation/realitykit/particleemittercomponent/birthdirection-swift.enum)

# ParticleEmitterComponent.BirthDirection

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Options for the initial direction of each emitted particle, used by the birthDirection property.

## Declaration

```swift
enum BirthDirection
```

## Topics

### Enumeration Cases

- [ParticleEmitterComponent.BirthDirection.local](birthdirection-swift.enum/local.md): Emit direction is relative to the orientation of the emitter entity’s transform.
- [ParticleEmitterComponent.BirthDirection.normal](birthdirection-swift.enum/normal.md): The emitting direction for each particle is along the surface normal vector at the point where the particle is emitted.
- [ParticleEmitterComponent.BirthDirection.world](birthdirection-swift.enum/world.md): Ignores the orientation from the emitter entity’s transform.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
