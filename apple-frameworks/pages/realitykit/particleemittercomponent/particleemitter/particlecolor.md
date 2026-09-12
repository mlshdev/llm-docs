> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/particleemittercomponent/particleemitter/particlecolor](https://developer.apple.com/documentation/realitykit/particleemittercomponent/particleemitter/particlecolor)

# ParticleEmitterComponent.ParticleEmitter.ParticleColor

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Options for specifying the behavior of the color of the particles.

## Declaration

```swift
enum ParticleColor
```

## Topics

### Enumeration Cases

- [ParticleEmitterComponent.ParticleEmitter.ParticleColor.constant(\_:)](particlecolor/constant%28__%29.md): The particle will remain the given color throughout its lifetime.
- [ParticleEmitterComponent.ParticleEmitter.ParticleColor.evolving(start:end:)](particlecolor/evolving%28start_end_%29.md): The particle’s color will start at the `start` color and transition over its lifetime to the `end` color.

### Enumerations

- [ParticleEmitterComponent.ParticleEmitter.ParticleColor.ColorValue](particlecolor/colorvalue.md): Options for specifying whether the particle color is a single color, or if the particle should take a random color in the given range.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
