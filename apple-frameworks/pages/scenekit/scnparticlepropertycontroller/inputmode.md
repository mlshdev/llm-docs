> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlepropertycontroller/inputmode](https://developer.apple.com/documentation/scenekit/scnparticlepropertycontroller/inputmode)

# inputMode (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The mode that determines input values for the property controller’s animation.

## Declaration

```swift
var inputMode: SCNParticleInputMode { get set }
```

<a id="Discussion"></a>

## Discussion

With the default input mode of [SCNParticleInputMode.overLife](../scnparticleinputmode/overlife.md), the animation timing for each particle is based on the particle’s life span. For example, consider an animation that reduces each particle’s opacity from `1.0` to `0.0`. By default, a particle begins with full opacity, and reduces its opacity completely by the end of its life span (regardless of the particle’s position and other properties). Change the input mode to make each particle’s opacity a function of a different measurement, such as distance from a specified point or one of the particle’s other properties. For more details, see [SCNParticleInputMode](../scnparticleinputmode.md).

## See Also

### Managing the Controller’s Animation

- [animation](animation.md): The Core Animation object defining the behavior of the property animation.
- [inputBias](inputbias.md): An offset to add to the input value of the controller’s animation.
- [inputScale](inputscale.md): A factor for multiplying the input value of the controller’s animation.
- [inputOrigin](inputorigin.md): A node whose distance to each particle provides input values for the controller’s animation.
- [inputProperty](inputproperty.md): A particle property that provides input values for this property controller’s animation.

# inputMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The mode that determines input values for the property controller’s animation.

## Declaration

```objectivec
@property (nonatomic) SCNParticleInputMode inputMode;
```

<a id="Discussion"></a>

## Discussion

With the default input mode of [SCNParticleInputModeOverLife](../scnparticleinputmode/overlife.md), the animation timing for each particle is based on the particle’s life span. For example, consider an animation that reduces each particle’s opacity from `1.0` to `0.0`. By default, a particle begins with full opacity, and reduces its opacity completely by the end of its life span (regardless of the particle’s position and other properties). Change the input mode to make each particle’s opacity a function of a different measurement, such as distance from a specified point or one of the particle’s other properties. For more details, see [SCNParticleInputMode](../scnparticleinputmode.md).

## See Also

### Managing the Controller’s Animation

- [animation](animation.md): The Core Animation object defining the behavior of the property animation.
- [inputBias](inputbias.md): An offset to add to the input value of the controller’s animation.
- [inputScale](inputscale.md): A factor for multiplying the input value of the controller’s animation.
- [inputOrigin](inputorigin.md): A node whose distance to each particle provides input values for the controller’s animation.
- [inputProperty](inputproperty.md): A particle property that provides input values for this property controller’s animation.
