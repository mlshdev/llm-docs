> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caspringanimation](https://developer.apple.com/documentation/quartzcore/caspringanimation)

# CASpringAnimation (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An animation that applies a spring-like force to a layer’s properties.

## Declaration

```swift
class CASpringAnimation
```

<a id="overview"></a>

## Overview

You would typically use a spring animation to animate a layer’s position so that it appears to be pulled towards a target by a spring. The further the layer is from the target, the greater the acceleration towards it is.

[CASpringAnimation](caspringanimation.md) allows control over physically based attributes such as the spring’s damping and stiffness.

You can use a spring animation to animation properties of a layer other than its position. The following code shows how to create a spring animation that bounces a layer into view by animating its scale from `0` to `1`. Because the spring animation can overshoot its [toValue](cabasicanimation/tovalue.md), the animated layer may exceed its frame.

```swift
let springAnimation = CASpringAnimation(keyPath: "transform.scale")

springAnimation.fromValue = 0
springAnimation.toValue = 1
```

## Topics

### Configuring Physical Attributes

- [damping](caspringanimation/damping.md): Defines how the spring’s motion should be damped due to the forces of friction.
- [initialVelocity](caspringanimation/initialvelocity.md): The initial velocity of the object attached to the spring.
- [mass](caspringanimation/mass.md): The mass of the object attached to the end of the spring.
- [settlingDuration](caspringanimation/settlingduration.md): The estimated duration required for the spring system to be considered at rest.
- [stiffness](caspringanimation/stiffness.md): The spring stiffness coefficient.

### Initializers

- [init(perceptualDuration:bounce:)](caspringanimation/init%28perceptualduration_bounce_%29.md)

### Instance Properties

- [allowsOverdamping](caspringanimation/allowsoverdamping.md)
- [bounce](caspringanimation/bounce.md)
- [perceptualDuration](caspringanimation/perceptualduration.md)

## Relationships

### Inherits From

- [CABasicAnimation](cabasicanimation.md)

### Conforms To

- [CAAction](caaction.md)
- [CAMediaTiming](camediatiming.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Animation

- [CAAnimation](caanimation.md): The abstract superclass for animations in Core Animation.
- [CAAnimationDelegate](caanimationdelegate.md): Methods your app can implement to respond when animations start and stop.
- [CAPropertyAnimation](capropertyanimation.md): An abstract subclass for creating animations that manipulate the value of layer properties.
- [CABasicAnimation](cabasicanimation.md): An object that provides basic, single-keyframe animation capabilities for a layer property.
- [CAKeyframeAnimation](cakeyframeanimation.md): An object that provides keyframe animation capabilities for a layer object.
- [CATransition](catransition.md): An object that provides an animated transition between a layer’s states.
- [CAValueFunction](cavaluefunction.md): An object that provides a flexible method of defining animated transformations.

# CASpringAnimation (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An animation that applies a spring-like force to a layer’s properties.

## Declaration

```objectivec
@interface CASpringAnimation : CABasicAnimation
```

<a id="overview"></a>

## Overview

You would typically use a spring animation to animate a layer’s position so that it appears to be pulled towards a target by a spring. The further the layer is from the target, the greater the acceleration towards it is.

[CASpringAnimation](caspringanimation.md) allows control over physically based attributes such as the spring’s damping and stiffness.

You can use a spring animation to animation properties of a layer other than its position. The following code shows how to create a spring animation that bounces a layer into view by animating its scale from `0` to `1`. Because the spring animation can overshoot its [toValue](cabasicanimation/tovalue.md), the animated layer may exceed its frame.

```swift
let springAnimation = CASpringAnimation(keyPath: "transform.scale")

springAnimation.fromValue = 0
springAnimation.toValue = 1
```

## Topics

### Configuring Physical Attributes

- [damping](caspringanimation/damping.md): Defines how the spring’s motion should be damped due to the forces of friction.
- [initialVelocity](caspringanimation/initialvelocity.md): The initial velocity of the object attached to the spring.
- [mass](caspringanimation/mass.md): The mass of the object attached to the end of the spring.
- [settlingDuration](caspringanimation/settlingduration.md): The estimated duration required for the spring system to be considered at rest.
- [stiffness](caspringanimation/stiffness.md): The spring stiffness coefficient.

### Initializers

- [initWithPerceptualDuration:bounce:](caspringanimation/init%28perceptualduration_bounce_%29.md)

### Instance Properties

- [allowsOverdamping](caspringanimation/allowsoverdamping.md)
- [bounce](caspringanimation/bounce.md)
- [perceptualDuration](caspringanimation/perceptualduration.md)

## Relationships

### Inherits From

- [CABasicAnimation](cabasicanimation.md)

## See Also

### Animation

- [CAAnimation](caanimation.md): The abstract superclass for animations in Core Animation.
- [CAAnimationDelegate](caanimationdelegate.md): Methods your app can implement to respond when animations start and stop.
- [CAPropertyAnimation](capropertyanimation.md): An abstract subclass for creating animations that manipulate the value of layer properties.
- [CABasicAnimation](cabasicanimation.md): An object that provides basic, single-keyframe animation capabilities for a layer property.
- [CAKeyframeAnimation](cakeyframeanimation.md): An object that provides keyframe animation capabilities for a layer object.
- [CATransition](catransition.md): An object that provides an animated transition between a layer’s states.
- [CAValueFunction](cavaluefunction.md): An object that provides a flexible method of defining animated transformations.
