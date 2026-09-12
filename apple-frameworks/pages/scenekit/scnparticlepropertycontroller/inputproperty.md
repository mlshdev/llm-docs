> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlepropertycontroller/inputproperty](https://developer.apple.com/documentation/scenekit/scnparticlepropertycontroller/inputproperty)

# inputProperty (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A particle property that provides input values for this property controller’s animation.

## Declaration

```swift
var inputProperty: SCNParticleSystem.ParticleProperty? { get set }
```

<a id="Discussion"></a>

## Discussion

This property applies only when the controller’s [inputMode](inputmode.md) value is [SCNParticleInputMode.overOtherProperty](../scnparticleinputmode/overotherproperty.md).

Use this option to animate one property in response to changes in one of each particle’s other properties. For example, the following code animates particles’ size as a function of their velocity, causing particles to become larger when they move faster:

```objc
CABasicAnimation *animation = [CABasicAnimation animation];
animation.fromValue = @0.1;
animation.toValue = @10.0;
 
SCNParticlePropertyController *sizeController =
    [SCNParticlePropertyController controllerWithAnimation:animation];
sizeController.inputMode = SCNParticleInputModeOverOtherProperty;
sizeController.inputProperty = SCNParticlePropertyVelocity;
sizeController.inputScale = 0.1;
 
particleSystem.propertyControllers = @{ SCNParticlePropertySize : sizeController };
```

To refine the relationship between a range of property values and a range of input values for the controller’s animation, use the [inputBias](inputbias.md) and [inputScale](inputscale.md) properties.

If you specify a vector property (such as acceleration) as the input property, SceneKit uses that vector’s length for the input value.

## See Also

### Managing the Controller’s Animation

- [animation](animation.md): The Core Animation object defining the behavior of the property animation.
- [inputMode](inputmode.md): The mode that determines input values for the property controller’s animation.
- [inputBias](inputbias.md): An offset to add to the input value of the controller’s animation.
- [inputScale](inputscale.md): A factor for multiplying the input value of the controller’s animation.
- [inputOrigin](inputorigin.md): A node whose distance to each particle provides input values for the controller’s animation.

# inputProperty (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A particle property that provides input values for this property controller’s animation.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) SCNParticleProperty inputProperty;
```

<a id="Discussion"></a>

## Discussion

This property applies only when the controller’s [inputMode](inputmode.md) value is [SCNParticleInputModeOverOtherProperty](../scnparticleinputmode/overotherproperty.md).

Use this option to animate one property in response to changes in one of each particle’s other properties. For example, the following code animates particles’ size as a function of their velocity, causing particles to become larger when they move faster:

```objc
CABasicAnimation *animation = [CABasicAnimation animation];
animation.fromValue = @0.1;
animation.toValue = @10.0;
 
SCNParticlePropertyController *sizeController =
    [SCNParticlePropertyController controllerWithAnimation:animation];
sizeController.inputMode = SCNParticleInputModeOverOtherProperty;
sizeController.inputProperty = SCNParticlePropertyVelocity;
sizeController.inputScale = 0.1;
 
particleSystem.propertyControllers = @{ SCNParticlePropertySize : sizeController };
```

To refine the relationship between a range of property values and a range of input values for the controller’s animation, use the [inputBias](inputbias.md) and [inputScale](inputscale.md) properties.

If you specify a vector property (such as acceleration) as the input property, SceneKit uses that vector’s length for the input value.

## See Also

### Managing the Controller’s Animation

- [animation](animation.md): The Core Animation object defining the behavior of the property animation.
- [inputMode](inputmode.md): The mode that determines input values for the property controller’s animation.
- [inputBias](inputbias.md): An offset to add to the input value of the controller’s animation.
- [inputScale](inputscale.md): A factor for multiplying the input value of the controller’s animation.
- [inputOrigin](inputorigin.md): A node whose distance to each particle provides input values for the controller’s animation.
