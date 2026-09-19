> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/particleemittercomponent/timing-swift.enum/variableduration

# ParticleEmitterComponent.Timing.VariableDuration

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Duration along with an optional variation used to define an amount of time.

## Declaration

```swift
struct VariableDuration
```

## Topics

### Initializers

- [init(duration:variation:)](variableduration/init%28duration_variation_%29.md)

### Instance Properties

- [duration](variableduration/duration.md): Base duration of time.
- [variation](variableduration/variation.md): Defines a plus/minus range from which a value is randomly selected and used to offset duration.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
