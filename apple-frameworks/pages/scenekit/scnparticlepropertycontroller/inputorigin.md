> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlepropertycontroller/inputorigin](https://developer.apple.com/documentation/scenekit/scnparticlepropertycontroller/inputorigin)

# inputOrigin (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A node whose distance to each particle provides input values for the controller’s animation.

## Declaration

```swift
weak var inputOrigin: SCNNode? { get set }
```

<a id="Discussion"></a>

## Discussion

This property applies only when the controller’s [inputMode](inputmode.md) value is [SCNParticleInputMode.overDistance](../scnparticleinputmode/overdistance.md). When you select that input mode, this property’s value must be a node in the scene containing the particle system; otherwise, SceneKit ignores this property. The default value is `nil`.

SceneKit calculates the distance between this node’s [position](../scnnode/position.md) vector (converted to the scene’s world coordinate space) and each particle and then uses the resulting value as the input to the controller’s animation. For example, if you use this option to animate particle opacity from `1.0` to `0.0`, all particles beyond a certain distance from the [inputOrigin](inputorigin.md) node are fully transparent—regardless of any random velocity or direction variations in reaching that distance.

To refine the relationship between a range of distances and a range of input values for the controller’s animation, use the [inputBias](inputbias.md) and [inputScale](inputscale.md) properties.

## See Also

### Managing the Controller’s Animation

- [animation](animation.md): The Core Animation object defining the behavior of the property animation.
- [inputMode](inputmode.md): The mode that determines input values for the property controller’s animation.
- [inputBias](inputbias.md): An offset to add to the input value of the controller’s animation.
- [inputScale](inputscale.md): A factor for multiplying the input value of the controller’s animation.
- [inputProperty](inputproperty.md): A particle property that provides input values for this property controller’s animation.

# inputOrigin (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A node whose distance to each particle provides input values for the controller’s animation.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) SCNNode * inputOrigin;
```

<a id="Discussion"></a>

## Discussion

This property applies only when the controller’s [inputMode](inputmode.md) value is [SCNParticleInputModeOverDistance](../scnparticleinputmode/overdistance.md). When you select that input mode, this property’s value must be a node in the scene containing the particle system; otherwise, SceneKit ignores this property. The default value is `nil`.

SceneKit calculates the distance between this node’s [position](../scnnode/position.md) vector (converted to the scene’s world coordinate space) and each particle and then uses the resulting value as the input to the controller’s animation. For example, if you use this option to animate particle opacity from `1.0` to `0.0`, all particles beyond a certain distance from the [inputOrigin](inputorigin.md) node are fully transparent—regardless of any random velocity or direction variations in reaching that distance.

To refine the relationship between a range of distances and a range of input values for the controller’s animation, use the [inputBias](inputbias.md) and [inputScale](inputscale.md) properties.

## See Also

### Managing the Controller’s Animation

- [animation](animation.md): The Core Animation object defining the behavior of the property animation.
- [inputMode](inputmode.md): The mode that determines input values for the property controller’s animation.
- [inputBias](inputbias.md): An offset to add to the input value of the controller’s animation.
- [inputScale](inputscale.md): A factor for multiplying the input value of the controller’s animation.
- [inputProperty](inputproperty.md): A particle property that provides input values for this property controller’s animation.
