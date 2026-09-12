> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/particleemittercomponent/presets](https://developer.apple.com/documentation/realitykit/particleemittercomponent/presets)

# ParticleEmitterComponent.Presets

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Initial configurations that can be set when starting a new simulation.

## Declaration

```swift
struct Presets
```

## Topics

### Type Properties

- [fireworks](presets/fireworks.md): Particles that emit in regular bursts and spawn secondary particles
- [impact](presets/impact.md): Particles that emit in a radial pattern and simulate dust from an object hitting the ground
- [magic](presets/magic.md): Particles that twinkle and emit spawn particles
- [rain](presets/rain.md): Fast, semi-opaque particles rendered as streaks
- [snow](presets/snow.md): Softly falling particles that incorporate motion from a noise pattern
- [sparks](presets/sparks.md): Quick and short lived particles that accumulate color to simulate welding sparks

## See Also

### Particle simulation

- [Simulating particles in your visionOS app](../simulating-particles-in-your-visionos-app.md): Add a range of visual effects to a RealityKit view by attaching a particle emitter component to an entity.
- [ParticleEmitterComponent](../particleemittercomponent.md): A component that emits particles.
- [ParticleEmitterComponent.ParticleEmitter](particleemitter.md)
