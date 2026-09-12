> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/particleemittercomponent/timing-swift.enum](https://developer.apple.com/documentation/realitykit/particleemittercomponent/timing-swift.enum)

# ParticleEmitterComponent.Timing

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Options for specifying the duration of the particle effects, used by the timing property.

## Declaration

```swift
enum Timing
```

## Topics

### Structures

- [ParticleEmitterComponent.Timing.VariableDuration](timing-swift.enum/variableduration.md): Duration along with an optional variation used to define an amount of time.

### Enumeration Cases

- [ParticleEmitterComponent.Timing.once(warmUp:emit:)](timing-swift.enum/once%28warmup_emit_%29.md): Emits for the given `emit` duration and then stops, `warmUp` determines how long the simulation should appear to have run before first appearing.
- [ParticleEmitterComponent.Timing.repeating(warmUp:emit:idle:)](timing-swift.enum/repeating%28warmup_emit_idle_%29.md): Emits for the given `emit` duration, and waits `idle` seconds before looping, `warmUp` determines how long the simulation should appear to have run before first appearing.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
