> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/orientationmode](https://developer.apple.com/documentation/scenekit/scnparticlesystem/orientationmode)

# orientationMode (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The mode defining whether and how particles may rotate.

## Declaration

```swift
var orientationMode: SCNParticleOrientationMode { get set }
```

<a id="Discussion"></a>

## Discussion

A particle’s angle (or orientation) is independent from its direction of motion. For example, a smoke effect may use a small image of a cloud for each particle, which stays at the same angle as the smoke rises, but a snow effect may use an image that flips and rotates as each snowflake falls.

For possible orientation modes, see [SCNParticleOrientationMode](../scnparticleorientationmode.md). The default value is [SCNParticleOrientationMode.billboardScreenAligned](../scnparticleorientationmode/billboardscreenaligned.md).

## See Also

### Managing Particle Rendering

- [blendMode](blendmode.md): The blending mode for compositing particle images into the rendered scene.
- [SCNParticleBlendMode](../scnparticleblendmode.md): Options for combining source and destination pixel colors when compositing particles during rendering, used by the [blendMode](blendmode.md) property.
- [SCNParticleOrientationMode](../scnparticleorientationmode.md): Options for restricting the orientation of particles, used by the [orientationMode](orientationmode.md) property.
- [sortingMode](sortingmode.md): The mode defining the order in which SceneKit renders the system’s particles.
- [SCNParticleSortingMode](../scnparticlesortingmode.md): Options for the rendering order of particles, used by the [sortingMode](sortingmode.md) property.
- [isLightingEnabled](islightingenabled.md): A Boolean value that determines whether SceneKit applies lighting to particle images when rendering.
- [isBlackPassEnabled](isblackpassenabled.md): A Boolean value that determines whether SceneKit renders particles in black before rendering the particle image.

# orientationMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The mode defining whether and how particles may rotate.

## Declaration

```objectivec
@property (nonatomic) SCNParticleOrientationMode orientationMode;
```

<a id="Discussion"></a>

## Discussion

A particle’s angle (or orientation) is independent from its direction of motion. For example, a smoke effect may use a small image of a cloud for each particle, which stays at the same angle as the smoke rises, but a snow effect may use an image that flips and rotates as each snowflake falls.

For possible orientation modes, see [SCNParticleOrientationMode](../scnparticleorientationmode.md). The default value is [SCNParticleOrientationModeBillboardScreenAligned](../scnparticleorientationmode/billboardscreenaligned.md).

## See Also

### Managing Particle Rendering

- [blendMode](blendmode.md): The blending mode for compositing particle images into the rendered scene.
- [SCNParticleBlendMode](../scnparticleblendmode.md): Options for combining source and destination pixel colors when compositing particles during rendering, used by the [blendMode](blendmode.md) property.
- [SCNParticleOrientationMode](../scnparticleorientationmode.md): Options for restricting the orientation of particles, used by the [orientationMode](orientationmode.md) property.
- [sortingMode](sortingmode.md): The mode defining the order in which SceneKit renders the system’s particles.
- [SCNParticleSortingMode](../scnparticlesortingmode.md): Options for the rendering order of particles, used by the [sortingMode](sortingmode.md) property.
- [lightingEnabled](islightingenabled.md): A Boolean value that determines whether SceneKit applies lighting to particle images when rendering.
- [blackPassEnabled](isblackpassenabled.md): A Boolean value that determines whether SceneKit renders particles in black before rendering the particle image.
