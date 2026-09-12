> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/islightingenabled](https://developer.apple.com/documentation/scenekit/scnparticlesystem/islightingenabled)

# isLightingEnabled (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether SceneKit applies lighting to particle images when rendering.

## Declaration

```swift
var isLightingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), SceneKit uses the position, color, and other attributes of [SCNLight](../scnlight.md) objects in the scene to shade each rendered particle image. Use this option to enhance volumetric effects such as smoke and fog.

The default value is [false](https://developer.apple.com/documentation/swift/false).

> **Note**

>  SceneKit uses only one [SCNLight](../scnlight.md) object to illuminate rendered particles. Use the [categoryBitMask](../scnnode/categorybitmask.md) of the node containing the particle system to control which light applies to the particles.

## See Also

### Managing Particle Rendering

- [blendMode](blendmode.md): The blending mode for compositing particle images into the rendered scene.
- [SCNParticleBlendMode](../scnparticleblendmode.md): Options for combining source and destination pixel colors when compositing particles during rendering, used by the [blendMode](blendmode.md) property.
- [orientationMode](orientationmode.md): The mode defining whether and how particles may rotate.
- [SCNParticleOrientationMode](../scnparticleorientationmode.md): Options for restricting the orientation of particles, used by the [orientationMode](orientationmode.md) property.
- [sortingMode](sortingmode.md): The mode defining the order in which SceneKit renders the system’s particles.
- [SCNParticleSortingMode](../scnparticlesortingmode.md): Options for the rendering order of particles, used by the [sortingMode](sortingmode.md) property.
- [isBlackPassEnabled](isblackpassenabled.md): A Boolean value that determines whether SceneKit renders particles in black before rendering the particle image.

# lightingEnabled (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A Boolean value that determines whether SceneKit applies lighting to particle images when rendering.

## Declaration

```objectivec
@property (nonatomic, getter=isLightingEnabled) BOOL lightingEnabled;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), SceneKit uses the position, color, and other attributes of [SCNLight](../scnlight.md) objects in the scene to shade each rendered particle image. Use this option to enhance volumetric effects such as smoke and fog.

The default value is [false](https://developer.apple.com/documentation/swift/false).

> **Note**

>  SceneKit uses only one [SCNLight](../scnlight.md) object to illuminate rendered particles. Use the [categoryBitMask](../scnnode/categorybitmask.md) of the node containing the particle system to control which light applies to the particles.

## See Also

### Managing Particle Rendering

- [blendMode](blendmode.md): The blending mode for compositing particle images into the rendered scene.
- [SCNParticleBlendMode](../scnparticleblendmode.md): Options for combining source and destination pixel colors when compositing particles during rendering, used by the [blendMode](blendmode.md) property.
- [orientationMode](orientationmode.md): The mode defining whether and how particles may rotate.
- [SCNParticleOrientationMode](../scnparticleorientationmode.md): Options for restricting the orientation of particles, used by the [orientationMode](orientationmode.md) property.
- [sortingMode](sortingmode.md): The mode defining the order in which SceneKit renders the system’s particles.
- [SCNParticleSortingMode](../scnparticlesortingmode.md): Options for the rendering order of particles, used by the [sortingMode](sortingmode.md) property.
- [blackPassEnabled](isblackpassenabled.md): A Boolean value that determines whether SceneKit renders particles in black before rendering the particle image.
