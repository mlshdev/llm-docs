> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uispringtimingparameters](https://developer.apple.com/documentation/uikit/uispringtimingparameters)

# UISpringTimingParameters (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The timing information for animations that mimics the behavior of a spring.

## Declaration

```swift
@MainActor class UISpringTimingParameters
```

<a id="overview"></a>

## Overview

The timing provided by a [UISpringTimingParameters](uispringtimingparameters.md) object mimics the behavior of a spring acting on the value of the property being animated. This property’s value accelerates toward its final value according to the relative force of the spring, which you configure. It then oscillates around that final value until it comes to a rest. The speed at which a property animates to its new value is based on the initial velocity of the value and the damping ratio applied to the spring. You can specify those values directly or using analogous spring-related values.

Use instances of this class to specify custom timing curves when creating animations with objects that adopt the [UIViewAnimating](uiviewanimating.md) protocol, such as [UIViewPropertyAnimator](uiviewpropertyanimator.md). Spring animations are commonly used to modify a view’s position onscreen, but you can apply the timing to any of the view’s properties to get a similar type of animation timing.

## Topics

### Initializing a spring timing parameters object

- [init()](uispringtimingparameters/init%28%29.md): Creates a default timing parameters object.
- [init(dampingRatio:)](uispringtimingparameters/init%28dampingratio_%29.md): Creates a timing parameters object with the specified damping ratio.
- [init(dampingRatio:initialVelocity:)](uispringtimingparameters/init%28dampingratio_initialvelocity_%29.md): Creates a timing parameters object with the specified damping ratio and initial velocity.
- [init(mass:stiffness:damping:initialVelocity:)](uispringtimingparameters/init%28mass_stiffness_damping_initialvelocity_%29.md): Creates a timing parameters object with the specified spring stiffness, mass, damping coefficient, and initial velocity.
- [init(coder:)](uispringtimingparameters/init%28coder_%29.md): Creates a timing parameters object from data in an unarchiver.

### Getting the initial velocity

- [initialVelocity](uispringtimingparameters/initialvelocity.md): The target property’s rate of change at the start of a spring animation, enabling a smooth transition into the animation.

### Initializers

- [init(duration:bounce:)](uispringtimingparameters/init%28duration_bounce_%29.md)
- [init(duration:bounce:initialVelocity:)](uispringtimingparameters/init%28duration_bounce_initialvelocity_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UITimingCurveProvider](uitimingcurveprovider.md)

## See Also

### Timing curves

- [UITimingCurveProvider](uitimingcurveprovider.md): An interface for providing the timing information needed to perform animations.
- [UICubicTimingParameters](uicubictimingparameters.md): The timing information for animations in the form of a cubic Bézier curve.

# UISpringTimingParameters (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The timing information for animations that mimics the behavior of a spring.

## Declaration

```objectivec
@interface UISpringTimingParameters : NSObject
```

<a id="overview"></a>

## Overview

The timing provided by a [UISpringTimingParameters](uispringtimingparameters.md) object mimics the behavior of a spring acting on the value of the property being animated. This property’s value accelerates toward its final value according to the relative force of the spring, which you configure. It then oscillates around that final value until it comes to a rest. The speed at which a property animates to its new value is based on the initial velocity of the value and the damping ratio applied to the spring. You can specify those values directly or using analogous spring-related values.

Use instances of this class to specify custom timing curves when creating animations with objects that adopt the [UIViewAnimating](uiviewanimating.md) protocol, such as [UIViewPropertyAnimator](uiviewpropertyanimator.md). Spring animations are commonly used to modify a view’s position onscreen, but you can apply the timing to any of the view’s properties to get a similar type of animation timing.

## Topics

### Initializing a spring timing parameters object

- [init](uispringtimingparameters/init%28%29.md): Creates a default timing parameters object.
- [initWithDampingRatio:](uispringtimingparameters/init%28dampingratio_%29.md): Creates a timing parameters object with the specified damping ratio.
- [initWithDampingRatio:initialVelocity:](uispringtimingparameters/init%28dampingratio_initialvelocity_%29.md): Creates a timing parameters object with the specified damping ratio and initial velocity.
- [initWithMass:stiffness:damping:initialVelocity:](uispringtimingparameters/init%28mass_stiffness_damping_initialvelocity_%29.md): Creates a timing parameters object with the specified spring stiffness, mass, damping coefficient, and initial velocity.
- [initWithCoder:](uispringtimingparameters/init%28coder_%29.md): Creates a timing parameters object from data in an unarchiver.

### Getting the initial velocity

- [initialVelocity](uispringtimingparameters/initialvelocity.md): The target property’s rate of change at the start of a spring animation, enabling a smooth transition into the animation.

### Initializers

- [initWithDuration:bounce:](uispringtimingparameters/init%28duration_bounce_%29.md)
- [initWithDuration:bounce:initialVelocity:](uispringtimingparameters/init%28duration_bounce_initialvelocity_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UITimingCurveProvider](uitimingcurveprovider.md)

## See Also

### Timing curves

- [UITimingCurveProvider](uitimingcurveprovider.md): An interface for providing the timing information needed to perform animations.
- [UICubicTimingParameters](uicubictimingparameters.md): The timing information for animations in the form of a cubic Bézier curve.
