> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticleblendmode](https://developer.apple.com/documentation/scenekit/scnparticleblendmode)

# SCNParticleBlendMode (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for combining source and destination pixel colors when compositing particles during rendering, used by the [blendMode](scnparticlesystem/blendmode.md) property.

## Declaration

```swift
enum SCNParticleBlendMode
```

## Topics

### Constants

- [SCNParticleBlendMode.additive](scnparticleblendmode/additive.md): The source and destination colors are added together.
- [SCNParticleBlendMode.subtract](scnparticleblendmode/subtract.md): The source color is subtracted from the destination color.
- [SCNParticleBlendMode.multiply](scnparticleblendmode/multiply.md): The source color is multiplied by the destination color.
- [SCNParticleBlendMode.screen](scnparticleblendmode/screen.md): The source color is added to the destination color times the inverted source color.
- [SCNParticleBlendMode.alpha](scnparticleblendmode/alpha.md): The source and destination colors are blended by multiplying the source alpha value.
- [SCNParticleBlendMode.replace](scnparticleblendmode/replace.md): The source color replaces the destination color.

### Initializers

- [init(rawValue:)](scnparticleblendmode/init%28rawvalue_%29.md)

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
- [orientationMode](scnparticlesystem/orientationmode.md): The mode defining whether and how particles may rotate.
- [SCNParticleOrientationMode](scnparticleorientationmode.md): Options for restricting the orientation of particles, used by the [orientationMode](scnparticlesystem/orientationmode.md) property.
- [sortingMode](scnparticlesystem/sortingmode.md): The mode defining the order in which SceneKit renders the system’s particles.
- [SCNParticleSortingMode](scnparticlesortingmode.md): Options for the rendering order of particles, used by the [sortingMode](scnparticlesystem/sortingmode.md) property.
- [isLightingEnabled](scnparticlesystem/islightingenabled.md): A Boolean value that determines whether SceneKit applies lighting to particle images when rendering.
- [isBlackPassEnabled](scnparticlesystem/isblackpassenabled.md): A Boolean value that determines whether SceneKit renders particles in black before rendering the particle image.

# SCNParticleBlendMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Options for combining source and destination pixel colors when compositing particles during rendering, used by the [blendMode](scnparticlesystem/blendmode.md) property.

## Declaration

```objectivec
enum SCNParticleBlendMode : NSInteger;
```

## Topics

### Constants

- [SCNParticleBlendModeAdditive](scnparticleblendmode/additive.md): The source and destination colors are added together.
- [SCNParticleBlendModeSubtract](scnparticleblendmode/subtract.md): The source color is subtracted from the destination color.
- [SCNParticleBlendModeMultiply](scnparticleblendmode/multiply.md): The source color is multiplied by the destination color.
- [SCNParticleBlendModeScreen](scnparticleblendmode/screen.md): The source color is added to the destination color times the inverted source color.
- [SCNParticleBlendModeAlpha](scnparticleblendmode/alpha.md): The source and destination colors are blended by multiplying the source alpha value.
- [SCNParticleBlendModeReplace](scnparticleblendmode/replace.md): The source color replaces the destination color.

## See Also

### Managing Particle Rendering

- [blendMode](scnparticlesystem/blendmode.md): The blending mode for compositing particle images into the rendered scene.
- [orientationMode](scnparticlesystem/orientationmode.md): The mode defining whether and how particles may rotate.
- [SCNParticleOrientationMode](scnparticleorientationmode.md): Options for restricting the orientation of particles, used by the [orientationMode](scnparticlesystem/orientationmode.md) property.
- [sortingMode](scnparticlesystem/sortingmode.md): The mode defining the order in which SceneKit renders the system’s particles.
- [SCNParticleSortingMode](scnparticlesortingmode.md): Options for the rendering order of particles, used by the [sortingMode](scnparticlesystem/sortingmode.md) property.
- [lightingEnabled](scnparticlesystem/islightingenabled.md): A Boolean value that determines whether SceneKit applies lighting to particle images when rendering.
- [blackPassEnabled](scnparticlesystem/isblackpassenabled.md): A Boolean value that determines whether SceneKit renders particles in black before rendering the particle image.
