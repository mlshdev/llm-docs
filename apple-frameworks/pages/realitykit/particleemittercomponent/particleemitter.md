> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/particleemittercomponent/particleemitter](https://developer.apple.com/documentation/realitykit/particleemittercomponent/particleemitter)

# ParticleEmitterComponent.ParticleEmitter

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

## Declaration

```swift
struct ParticleEmitter
```

## Topics

### Structures

- [ParticleEmitterComponent.ParticleEmitter.ImageSequence](particleemitter/imagesequence-swift.struct.md): Structure used to define properties of the sprite sheet, used by imageSequence.

### Initializers

- [init()](particleemitter/init%28%29.md)

### Instance Properties

- [acceleration](particleemitter/acceleration.md): The constant acceleration vector, in meters per second squared, applied to all particles in the system.
- [angle](particleemitter/angle.md): The rotation angle, in radians, of newly spawned particles. Defaults to 0.
- [angleVariation](particleemitter/anglevariation.md): Defines a plus/minus range (in radians) from which a value is randomly selected to offset `angle`.
- [angularSpeed](particleemitter/angularspeed.md): The initial spin rate, in radians per second, of newly spawned particles. Defaults to 0.
- [angularSpeedVariation](particleemitter/angularspeedvariation.md): Defines a plus/minus range (in radians per second) from which a value is randomly selected to offset `angularSpeed`.
- [attractionCenter](particleemitter/attractioncenter.md): The spot that the particles are attracted to. In local space. Defaults to (1, 1, 0).
- [attractionStrength](particleemitter/attractionstrength.md): The particles are attracted to the `attractionCenter` by this amount. Defaults to 0.
- [billboardMode](particleemitter/billboardmode-swift.property.md): The mode defining whether and how particles orient towards the camera. Defaults to `billboardYAligned`.
- [birthRate](particleemitter/birthrate.md): The number of particles emitted over the emission duration. Defaults to 100.
- [birthRateVariation](particleemitter/birthratevariation.md): Defines a plus/minus range from which a value is randomly selected to offset `birthRate`.
- [blendMode](particleemitter/blendmode-swift.property.md): How overlapping particles are composited together. Defaults to `alpha`.
- [color](particleemitter/color-swift.property.md): The color of particles.
- [colorEvolutionPower](particleemitter/colorevolutionpower.md): How quickly the color evolves from its start to its end color — a value of 1 is a linear transition, values below 1 transition quicker, values over 1 transition slower.
- [dampingFactor](particleemitter/dampingfactor.md): A factor that slows particles relative to their velocity. Defaults to 0.
- [image](particleemitter/image.md): The image that each particle will use (requires pre-multiplied RGB values). Defaults to a white circular texture.
- [imageSequence](particleemitter/imagesequence-swift.property.md): Determines if the particle image is a sprite sheet (used for animation).
- [isLightingEnabled](particleemitter/islightingenabled.md): Determines if particles are affected by scene lighting.
- [lifeSpan](particleemitter/lifespan.md): The duration, in seconds, for which each particle is rendered before being removed from the scene. Defaults to 1.
- [lifeSpanVariation](particleemitter/lifespanvariation.md): Defines a plus/minus range (in seconds) from which a value is randomly selected to offset `lifeSpan`. Defaults to 0.2.
- [mass](particleemitter/mass.md): The mass, in grams, of each particle in the system. Defaults to 1.
- [massVariation](particleemitter/massvariation.md): Defines a plus/minus range (in grams) from which a value is randomly selected to offset `mass`.
- [noiseAnimationSpeed](particleemitter/noiseanimationspeed.md): Determines how fast the noise field changes over time. Defaults to 0.
- [noiseScale](particleemitter/noisescale.md): Scale of the noise (turbulence) patterns. Defaults to 1.
- [noiseStrength](particleemitter/noisestrength.md): Strength of the noise (turbulence) fields affecting particle motion. Defaults to 0.
- [opacityCurve](particleemitter/opacitycurve-swift.property.md): The curve of opacity change over the lifetime of the particle. Defaults to `quickFadeInOut`.
- [size](particleemitter/size.md): The rendered size, in units of the scene’s world coordinate space, of the particle image. Value is the half-extent of the particle’s quad. Defaults to 0.02.
- [sizeMultiplierAtEndOfLifespan](particleemitter/sizemultiplieratendoflifespan.md): At the end of the particle lifespan, the particle’s size will be it’s initial size times this multiplier. Defaults to 0.1.
- [sizeMultiplierAtEndOfLifespanPower](particleemitter/sizemultiplieratendoflifespanpower.md): How quickly or slowly particle size changes over its lifetime — a value of 1 is linear, values below 1 transition quicker, values above 1 transition slower.
- [sizeVariation](particleemitter/sizevariation.md): Defines a plus/minus range from which a value is randomly selected to offset `size`.
- [sortOrder](particleemitter/sortorder-swift.property.md): How overlapping particles are sorted before rendering. Defaults to `increasingDepth`.
- [spreadingAngle](particleemitter/spreadingangle.md): The range, in radians, of randomized initial particle directions as radians describing the size of the spreading cone. Defaults to 0.
- [stretchFactor](particleemitter/stretchfactor.md): How much a particle’s shape is stretched along its velocity direction (Billboard particles only).
- [vortexDirection](particleemitter/vortexdirection.md): Direction vector of the vortex axis. Defaults to (0, 1, 0).
- [vortexStrength](particleemitter/vortexstrength.md): Strength of the vortex forces affecting particle motion. Defaults to 0.

### Type Aliases

- [ParticleEmitterComponent.ParticleEmitter.Color](particleemitter/color-swift.typealias.md)

### Enumerations

- [ParticleEmitterComponent.ParticleEmitter.BillboardMode](particleemitter/billboardmode-swift.enum.md): Options for specifying the axis about which the particle will be oriented, used by the `billboardMode` property.
- [ParticleEmitterComponent.ParticleEmitter.BlendMode](particleemitter/blendmode-swift.enum.md): Options for combining source and destination pixel colors when compositing particles during rendering, used by the blendMode property.
- [ParticleEmitterComponent.ParticleEmitter.OpacityCurve](particleemitter/opacitycurve-swift.enum.md): Options for the curve of opacity change over the lifetime of the particle, used by the opacityOverLife property.
- [ParticleEmitterComponent.ParticleEmitter.ParticleColor](particleemitter/particlecolor.md): Options for specifying the behavior of the color of the particles.
- [ParticleEmitterComponent.ParticleEmitter.SortOrder](particleemitter/sortorder-swift.enum.md): Options for the rendering order of particles.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Particle simulation

- [Simulating particles in your visionOS app](../simulating-particles-in-your-visionos-app.md): Add a range of visual effects to a RealityKit view by attaching a particle emitter component to an entity.
- [ParticleEmitterComponent](../particleemittercomponent.md): A component that emits particles.
- [ParticleEmitterComponent.Presets](presets.md): Initial configurations that can be set when starting a new simulation.
