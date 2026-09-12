> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticleorientationmode](https://developer.apple.com/documentation/scenekit/scnparticleorientationmode)

# SCNParticleOrientationMode (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for restricting the orientation of particles, used by the [orientationMode](scnparticlesystem/orientationmode.md) property.

## Declaration

```swift
enum SCNParticleOrientationMode
```

## Topics

### Constants

- [SCNParticleOrientationMode.billboardScreenAligned](scnparticleorientationmode/billboardscreenaligned.md): Each particle’s orientation is always fixed with respect to the point of view camera.
- [SCNParticleOrientationMode.billboardViewAligned](scnparticleorientationmode/billboardviewaligned.md): Each particle always faces the point of view camera (but may rotate about an axis parallel to the view direction).
- [SCNParticleOrientationMode.free](scnparticleorientationmode/free.md): Particle orientations are not restricted; they may rotate freely in all axes.
- [SCNParticleOrientationMode.billboardYAligned](scnparticleorientationmode/billboardyaligned.md): The y-axis direction of each particle is always fixed with respect to the point of view camera.

### Initializers

- [init(rawValue:)](scnparticleorientationmode/init%28rawvalue_%29.md)

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
- [sortingMode](scnparticlesystem/sortingmode.md): The mode defining the order in which SceneKit renders the system’s particles.
- [SCNParticleSortingMode](scnparticlesortingmode.md): Options for the rendering order of particles, used by the [sortingMode](scnparticlesystem/sortingmode.md) property.
- [isLightingEnabled](scnparticlesystem/islightingenabled.md): A Boolean value that determines whether SceneKit applies lighting to particle images when rendering.
- [isBlackPassEnabled](scnparticlesystem/isblackpassenabled.md): A Boolean value that determines whether SceneKit renders particles in black before rendering the particle image.

# SCNParticleOrientationMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Options for restricting the orientation of particles, used by the [orientationMode](scnparticlesystem/orientationmode.md) property.

## Declaration

```objectivec
enum SCNParticleOrientationMode : NSInteger;
```

## Topics

### Constants

- [SCNParticleOrientationModeBillboardScreenAligned](scnparticleorientationmode/billboardscreenaligned.md): Each particle’s orientation is always fixed with respect to the point of view camera.
- [SCNParticleOrientationModeBillboardViewAligned](scnparticleorientationmode/billboardviewaligned.md): Each particle always faces the point of view camera (but may rotate about an axis parallel to the view direction).
- [SCNParticleOrientationModeFree](scnparticleorientationmode/free.md): Particle orientations are not restricted; they may rotate freely in all axes.
- [SCNParticleOrientationModeBillboardYAligned](scnparticleorientationmode/billboardyaligned.md): The y-axis direction of each particle is always fixed with respect to the point of view camera.

## See Also

### Managing Particle Rendering

- [blendMode](scnparticlesystem/blendmode.md): The blending mode for compositing particle images into the rendered scene.
- [SCNParticleBlendMode](scnparticleblendmode.md): Options for combining source and destination pixel colors when compositing particles during rendering, used by the [blendMode](scnparticlesystem/blendmode.md) property.
- [orientationMode](scnparticlesystem/orientationmode.md): The mode defining whether and how particles may rotate.
- [sortingMode](scnparticlesystem/sortingmode.md): The mode defining the order in which SceneKit renders the system’s particles.
- [SCNParticleSortingMode](scnparticlesortingmode.md): Options for the rendering order of particles, used by the [sortingMode](scnparticlesystem/sortingmode.md) property.
- [lightingEnabled](scnparticlesystem/islightingenabled.md): A Boolean value that determines whether SceneKit applies lighting to particle images when rendering.
- [blackPassEnabled](scnparticlesystem/isblackpassenabled.md): A Boolean value that determines whether SceneKit renders particles in black before rendering the particle image.
