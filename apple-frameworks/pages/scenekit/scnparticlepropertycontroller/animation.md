> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlepropertycontroller/animation](https://developer.apple.com/documentation/scenekit/scnparticlepropertycontroller/animation)

# animation (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The Core Animation object defining the behavior of the property animation.

## Declaration

```swift
var animation: CAAnimation { get set }
```

<a id="Discussion"></a>

## Discussion

You can use different [CAAnimation](../../quartzcore/caanimation.md) subclasses to animate effects in different ways. For example, a [CABasicAnimation](../../quartzcore/cabasicanimation.md) transitions a property from one value to another, and a [CAKeyframeAnimation](../../quartzcore/cakeyframeanimation.md) transitions a property through a series of values. You use properties of the animation object to define its timing curve, repeat mode, and other options.

SceneKit ignores the [keyPath](../../quartzcore/capropertyanimation/keypath.md) property of this animation object. Instead, when you attach a property controller to a particle system’s [propertyControllers](../scnparticlesystem/propertycontrollers.md) dictionary, use one of the keys listed in Particle Property Keys to specify which particle property it animates. SceneKit also ignores the animation’s [duration](../../quartzcore/camediatiming/duration.md) and [repeatCount](../../quartzcore/camediatiming/repeatcount.md) properties. Instead, the controller defines the behavior of the animation’s input value.

## See Also

### Managing the Controller’s Animation

- [inputMode](inputmode.md): The mode that determines input values for the property controller’s animation.
- [inputBias](inputbias.md): An offset to add to the input value of the controller’s animation.
- [inputScale](inputscale.md): A factor for multiplying the input value of the controller’s animation.
- [inputOrigin](inputorigin.md): A node whose distance to each particle provides input values for the controller’s animation.
- [inputProperty](inputproperty.md): A particle property that provides input values for this property controller’s animation.

# animation (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS

The Core Animation object defining the behavior of the property animation.

## Declaration

```objectivec
@property (nonatomic, retain) CAAnimation * animation;
```

<a id="Discussion"></a>

## Discussion

You can use different [CAAnimation](../../quartzcore/caanimation.md) subclasses to animate effects in different ways. For example, a [CABasicAnimation](../../quartzcore/cabasicanimation.md) transitions a property from one value to another, and a [CAKeyframeAnimation](../../quartzcore/cakeyframeanimation.md) transitions a property through a series of values. You use properties of the animation object to define its timing curve, repeat mode, and other options.

SceneKit ignores the [keyPath](../../quartzcore/capropertyanimation/keypath.md) property of this animation object. Instead, when you attach a property controller to a particle system’s [propertyControllers](../scnparticlesystem/propertycontrollers.md) dictionary, use one of the keys listed in Particle Property Keys to specify which particle property it animates. SceneKit also ignores the animation’s [duration](../../quartzcore/camediatiming/duration.md) and [repeatCount](../../quartzcore/camediatiming/repeatcount.md) properties. Instead, the controller defines the behavior of the animation’s input value.

## See Also

### Managing the Controller’s Animation

- [inputMode](inputmode.md): The mode that determines input values for the property controller’s animation.
- [inputBias](inputbias.md): An offset to add to the input value of the controller’s animation.
- [inputScale](inputscale.md): A factor for multiplying the input value of the controller’s animation.
- [inputOrigin](inputorigin.md): A node whose distance to each particle provides input values for the controller’s animation.
- [inputProperty](inputproperty.md): A particle property that provides input values for this property controller’s animation.
