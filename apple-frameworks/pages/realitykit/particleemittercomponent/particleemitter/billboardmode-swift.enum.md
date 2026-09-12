> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/particleemittercomponent/particleemitter/billboardmode-swift.enum](https://developer.apple.com/documentation/realitykit/particleemittercomponent/particleemitter/billboardmode-swift.enum)

# ParticleEmitterComponent.ParticleEmitter.BillboardMode

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Options for specifying the axis about which the particle will be oriented, used by the `billboardMode` property.

## Declaration

```swift
enum BillboardMode
```

## Topics

### Enumeration Cases

- [ParticleEmitterComponent.ParticleEmitter.BillboardMode.billboard](billboardmode-swift.enum/billboard.md): Each particle is oriented to face the camera.
- [ParticleEmitterComponent.ParticleEmitter.BillboardMode.billboardYAligned](billboardmode-swift.enum/billboardyaligned.md): Each particle is oriented to face the camera but remains fixed about the y-axis
- [ParticleEmitterComponent.ParticleEmitter.BillboardMode.free(axis:variation:)](billboardmode-swift.enum/free%28axis_variation_%29.md): The axis about which the particle will be oriented is the given `axis`. The `variation` is a unit multiplier that determines how far from the given axis the particle is allowed to actually be oriented.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
