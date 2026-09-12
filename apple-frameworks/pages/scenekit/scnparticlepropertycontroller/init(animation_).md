> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlepropertycontroller/init(animation:)](https://developer.apple.com/documentation/scenekit/scnparticlepropertycontroller/init(animation:))

# init(animation:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a particle property controller with the specified Core Animation animation.

## Declaration

```swift
convenience init(animation: CAAnimation)
```

## Parameters

- `animation`: A Core Animation object specifying the behavior of the property animation. Must not be nil.

  You can use different [CAAnimation](../../quartzcore/caanimation.md) subclasses to animate effects in different ways. For example, a [CABasicAnimation](../../quartzcore/cabasicanimation.md) instance transitions a property from one value to another, and a [CAKeyframeAnimation](../../quartzcore/cakeyframeanimation.md) instance transitions a property through a series of values. You use properties of the animation object to define its timing curve, repeat mode, and other options.

  SceneKit ignores the [keyPath](../../quartzcore/capropertyanimation/keypath.md), [duration](../../quartzcore/camediatiming/duration.md), and [repeatCount](../../quartzcore/camediatiming/repeatcount.md) properties of this animation object.

<a id="return-value"></a>

## Return Value

A new particle property controller.

<a id="Discussion"></a>

## Discussion

To set up a particle property animation:

1. Create a [CAAnimation](../../quartzcore/caanimation.md) object defining how a property of each particle in the system changes over time.
2. Create a particle property controller using the [init(animation:)](init%28animation_%29.md) method.
3. Attach the property controller to a particle system using the [propertyControllers](../scnparticlesystem/propertycontrollers.md) dictionary, choosing a key listed in Particle Property Keys to identify the particle property it animates.

For example, the following code sets up a controller to animate particle sizes:

```objc
// 1. Create and configure an animation object.
CAKeyframeAnimation *animation = [CAKeyframeAnimation animation];
animation.values = @[ @0.1, @1.0, @3.0, @0.5 ];
 
// 2. Create a property controller from the animation object.
SCNParticlePropertyController *controller =
    [SCNParticlePropertyController controllerWithAnimation:animation];
 
// 3. Assign the controller to a particle system, associating it with a particle property.
particleSystem.propertyControllers = @{ SCNParticlePropertySize: controller };
```

# controllerWithAnimation: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS

Creates a particle property controller with the specified Core Animation animation.

## Declaration

```objectivec
+ (instancetype) controllerWithAnimation:(CAAnimation *) animation;
```

## Parameters

- `animation`: A Core Animation object specifying the behavior of the property animation. Must not be nil.

  You can use different [CAAnimation](../../quartzcore/caanimation.md) subclasses to animate effects in different ways. For example, a [CABasicAnimation](../../quartzcore/cabasicanimation.md) instance transitions a property from one value to another, and a [CAKeyframeAnimation](../../quartzcore/cakeyframeanimation.md) instance transitions a property through a series of values. You use properties of the animation object to define its timing curve, repeat mode, and other options.

  SceneKit ignores the [keyPath](../../quartzcore/capropertyanimation/keypath.md), [duration](../../quartzcore/camediatiming/duration.md), and [repeatCount](../../quartzcore/camediatiming/repeatcount.md) properties of this animation object.

<a id="return-value"></a>

## Return Value

A new particle property controller.

<a id="Discussion"></a>

## Discussion

To set up a particle property animation:

1. Create a [CAAnimation](../../quartzcore/caanimation.md) object defining how a property of each particle in the system changes over time.
2. Create a particle property controller using the [controllerWithAnimation:](init%28animation_%29.md) method.
3. Attach the property controller to a particle system using the [propertyControllers](../scnparticlesystem/propertycontrollers.md) dictionary, choosing a key listed in Particle Property Keys to identify the particle property it animates.

For example, the following code sets up a controller to animate particle sizes:

```objc
// 1. Create and configure an animation object.
CAKeyframeAnimation *animation = [CAKeyframeAnimation animation];
animation.values = @[ @0.1, @1.0, @3.0, @0.5 ];
 
// 2. Create a property controller from the animation object.
SCNParticlePropertyController *controller =
    [SCNParticlePropertyController controllerWithAnimation:animation];
 
// 3. Assign the controller to a particle system, associating it with a particle property.
particleSystem.propertyControllers = @{ SCNParticlePropertySize: controller };
```
