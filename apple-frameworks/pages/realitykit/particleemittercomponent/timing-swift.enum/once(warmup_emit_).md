> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/particleemittercomponent/timing-swift.enum/once(warmup:emit:)

# ParticleEmitterComponent.Timing.once(warmUp:emit:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Emits for the given `emit` duration and then stops, `warmUp` determines how long the simulation should appear to have run before first appearing.

## Declaration

```swift
case once(warmUp: TimeInterval? = nil, emit: ParticleEmitterComponent.Timing.VariableDuration)
```
