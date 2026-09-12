> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/blendmode](https://developer.apple.com/documentation/scenekit/scnparticlesystem/blendmode)

# blendMode (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The blending mode for compositing particle images into the rendered scene.

## Declaration

```swift
var blendMode: SCNParticleBlendMode { get set }
```

<a id="Discussion"></a>

## Discussion

Together with the [sortingMode](sortingmode.md) property, blend modes affect the appearance of overlapping particle images when rendered.

For possible blend modes, see [SCNParticleBlendMode](../scnparticleblendmode.md). The default value is [SCNParticleBlendMode.additive](../scnparticleblendmode/additive.md).

## See Also

### Managing Particle Rendering

- [SCNParticleBlendMode](../scnparticleblendmode.md): Options for combining source and destination pixel colors when compositing particles during rendering, used by the [blendMode](blendmode.md) property.
- [orientationMode](orientationmode.md): The mode defining whether and how particles may rotate.
- [SCNParticleOrientationMode](../scnparticleorientationmode.md): Options for restricting the orientation of particles, used by the [orientationMode](orientationmode.md) property.
- [sortingMode](sortingmode.md): The mode defining the order in which SceneKit renders the system’s particles.
- [SCNParticleSortingMode](../scnparticlesortingmode.md): Options for the rendering order of particles, used by the [sortingMode](sortingmode.md) property.
- [isLightingEnabled](islightingenabled.md): A Boolean value that determines whether SceneKit applies lighting to particle images when rendering.
- [isBlackPassEnabled](isblackpassenabled.md): A Boolean value that determines whether SceneKit renders particles in black before rendering the particle image.

# blendMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The blending mode for compositing particle images into the rendered scene.

## Declaration

```objectivec
@property (nonatomic) SCNParticleBlendMode blendMode;
```

<a id="Discussion"></a>

## Discussion

Together with the [sortingMode](sortingmode.md) property, blend modes affect the appearance of overlapping particle images when rendered.

For possible blend modes, see [SCNParticleBlendMode](../scnparticleblendmode.md). The default value is [SCNParticleBlendModeAdditive](../scnparticleblendmode/additive.md).

## See Also

### Managing Particle Rendering

- [SCNParticleBlendMode](../scnparticleblendmode.md): Options for combining source and destination pixel colors when compositing particles during rendering, used by the [blendMode](blendmode.md) property.
- [orientationMode](orientationmode.md): The mode defining whether and how particles may rotate.
- [SCNParticleOrientationMode](../scnparticleorientationmode.md): Options for restricting the orientation of particles, used by the [orientationMode](orientationmode.md) property.
- [sortingMode](sortingmode.md): The mode defining the order in which SceneKit renders the system’s particles.
- [SCNParticleSortingMode](../scnparticlesortingmode.md): Options for the rendering order of particles, used by the [sortingMode](sortingmode.md) property.
- [lightingEnabled](islightingenabled.md): A Boolean value that determines whether SceneKit applies lighting to particle images when rendering.
- [blackPassEnabled](isblackpassenabled.md): A Boolean value that determines whether SceneKit renders particles in black before rendering the particle image.
