> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/particleemittercomponent/birthlocation-swift.enum](https://developer.apple.com/documentation/realitykit/particleemittercomponent/birthlocation-swift.enum)

# ParticleEmitterComponent.BirthLocation

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Options for the location on the shape of where particles are born, used by the birthLocation property.

## Declaration

```swift
enum BirthLocation
```

## Topics

### Enumeration Cases

- [ParticleEmitterComponent.BirthLocation.surface](birthlocation-swift.enum/surface.md): Particles emit from the surface of the shape.
- [ParticleEmitterComponent.BirthLocation.vertices(count:)](birthlocation-swift.enum/vertices%28count_%29.md): Particles emit from the vertices of the shape. `count` is the number of vertices in each direction, the distribution depends on the EmitterShape chosen.
- [ParticleEmitterComponent.BirthLocation.volume](birthlocation-swift.enum/volume.md): Particles emit from the internal volume of the shape.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
