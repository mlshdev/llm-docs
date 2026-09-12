> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesortingmode](https://developer.apple.com/documentation/scenekit/scnparticlesortingmode)

# SCNParticleSortingMode (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for the rendering order of particles, used by the [sortingMode](scnparticlesystem/sortingmode.md) property.

## Declaration

```swift
enum SCNParticleSortingMode
```

## Topics

### Constants

- [SCNParticleSortingMode.none](scnparticlesortingmode/none.md): Particles are not sorted; they may be rendered in any order.
- [SCNParticleSortingMode.projectedDepth](scnparticlesortingmode/projecteddepth.md): Particles farther from the point of view (as measured using projected depth) are rendered before closer particles.
- [SCNParticleSortingMode.distance](scnparticlesortingmode/distance.md): Particles farther from the point of view (as measured using distance from the camera in scene space) are rendered before closer particles.
- [SCNParticleSortingMode.oldestFirst](scnparticlesortingmode/oldestfirst.md): Particles emitted earlier are rendered before particles emitted more recently.
- [SCNParticleSortingMode.youngestFirst](scnparticlesortingmode/youngestfirst.md): Particles emitted more recently are rendered before particles emitted earlier.

### Initializers

- [init(rawValue:)](scnparticlesortingmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Particle Rendering

- [blendMode](scnparticlesystem/blendmode.md): The blending mode for compositing particle images into the rendered scene.
- [SCNParticleBlendMode](scnparticleblendmode.md): Options for combining source and destination pixel colors when compositing particles during rendering, used by the [blendMode](scnparticlesystem/blendmode.md) property.
- [orientationMode](scnparticlesystem/orientationmode.md): The mode defining whether and how particles may rotate.
- [SCNParticleOrientationMode](scnparticleorientationmode.md): Options for restricting the orientation of particles, used by the [orientationMode](scnparticlesystem/orientationmode.md) property.
- [sortingMode](scnparticlesystem/sortingmode.md): The mode defining the order in which SceneKit renders the system’s particles.
- [isLightingEnabled](scnparticlesystem/islightingenabled.md): A Boolean value that determines whether SceneKit applies lighting to particle images when rendering.
- [isBlackPassEnabled](scnparticlesystem/isblackpassenabled.md): A Boolean value that determines whether SceneKit renders particles in black before rendering the particle image.

# SCNParticleSortingMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Options for the rendering order of particles, used by the [sortingMode](scnparticlesystem/sortingmode.md) property.

## Declaration

```objectivec
enum SCNParticleSortingMode : NSInteger;
```

## Topics

### Constants

- [SCNParticleSortingModeNone](scnparticlesortingmode/none.md): Particles are not sorted; they may be rendered in any order.
- [SCNParticleSortingModeProjectedDepth](scnparticlesortingmode/projecteddepth.md): Particles farther from the point of view (as measured using projected depth) are rendered before closer particles.
- [SCNParticleSortingModeDistance](scnparticlesortingmode/distance.md): Particles farther from the point of view (as measured using distance from the camera in scene space) are rendered before closer particles.
- [SCNParticleSortingModeOldestFirst](scnparticlesortingmode/oldestfirst.md): Particles emitted earlier are rendered before particles emitted more recently.
- [SCNParticleSortingModeYoungestFirst](scnparticlesortingmode/youngestfirst.md): Particles emitted more recently are rendered before particles emitted earlier.

## See Also

### Managing Particle Rendering

- [blendMode](scnparticlesystem/blendmode.md): The blending mode for compositing particle images into the rendered scene.
- [SCNParticleBlendMode](scnparticleblendmode.md): Options for combining source and destination pixel colors when compositing particles during rendering, used by the [blendMode](scnparticlesystem/blendmode.md) property.
- [orientationMode](scnparticlesystem/orientationmode.md): The mode defining whether and how particles may rotate.
- [SCNParticleOrientationMode](scnparticleorientationmode.md): Options for restricting the orientation of particles, used by the [orientationMode](scnparticlesystem/orientationmode.md) property.
- [sortingMode](scnparticlesystem/sortingmode.md): The mode defining the order in which SceneKit renders the system’s particles.
- [lightingEnabled](scnparticlesystem/islightingenabled.md): A Boolean value that determines whether SceneKit applies lighting to particle images when rendering.
- [blackPassEnabled](scnparticlesystem/isblackpassenabled.md): A Boolean value that determines whether SceneKit renders particles in black before rendering the particle image.
