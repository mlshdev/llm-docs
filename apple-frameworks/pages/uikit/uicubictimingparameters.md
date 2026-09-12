> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicubictimingparameters](https://developer.apple.com/documentation/uikit/uicubictimingparameters)

# UICubicTimingParameters (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The timing information for animations in the form of a cubic Bézier curve.

## Declaration

```swift
@MainActor class UICubicTimingParameters
```

<a id="overview"></a>

## Overview

Use a [UICubicTimingParameters](uicubictimingparameters.md) object to specify custom timing curves when creating animations with objects that adopt the [UIViewAnimating](uiviewanimating.md) protocol, such as [UIViewPropertyAnimator](uiviewpropertyanimator.md).

A cubic Bézier timing curve consists of a line whose starting point is (`0`, `0`), whose end point is (`1`, `1`), and whose shape is defined by two control points. The slope of the line at each point in time defines the speed of the animation at that time. Steep slopes cause animations to appear to run faster and shallower slopes cause them to appear to run slower. The following graph shows a timing curve where the animations start fast and finish fast but run more slowly through the middle section.

![A graph that shows a cubic Bézier timing curve.](https://developer.apple.com/images/com.apple.uikit/media-1965827@2x.png)

## Topics

### Initializing a cubic timing parameters object

- [init()](uicubictimingparameters/init%28%29.md): Initializes the object with the system’s default timing curve.
- [init(animationCurve:)](uicubictimingparameters/init%28animationcurve_%29.md): Initializes the object with the specified UIKit timing curve.
- [init(controlPoint1:controlPoint2:)](uicubictimingparameters/init%28controlpoint1_controlpoint2_%29.md): Initializes the object with the specified control points for a cubic Bézier curve.
- [init(coder:)](uicubictimingparameters/init%28coder_%29.md): Creates a timing parameters object from data in an unarchiver.

### Getting the timing parameters

- [animationCurve](uicubictimingparameters/animationcurve.md): The standard UIKit animation curve to use for timing.
- [controlPoint1](uicubictimingparameters/controlpoint1.md): The first control point for the cubic Bézier curve.
- [controlPoint2](uicubictimingparameters/controlpoint2.md): The second control point of the cubic Bézier curve.

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
- [UISpringTimingParameters](uispringtimingparameters.md): The timing information for animations that mimics the behavior of a spring.

# UICubicTimingParameters (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The timing information for animations in the form of a cubic Bézier curve.

## Declaration

```objectivec
@interface UICubicTimingParameters : NSObject
```

<a id="overview"></a>

## Overview

Use a [UICubicTimingParameters](uicubictimingparameters.md) object to specify custom timing curves when creating animations with objects that adopt the [UIViewAnimating](uiviewanimating.md) protocol, such as [UIViewPropertyAnimator](uiviewpropertyanimator.md).

A cubic Bézier timing curve consists of a line whose starting point is (`0`, `0`), whose end point is (`1`, `1`), and whose shape is defined by two control points. The slope of the line at each point in time defines the speed of the animation at that time. Steep slopes cause animations to appear to run faster and shallower slopes cause them to appear to run slower. The following graph shows a timing curve where the animations start fast and finish fast but run more slowly through the middle section.

![A graph that shows a cubic Bézier timing curve.](https://developer.apple.com/images/com.apple.uikit/media-1965827@2x.png)

## Topics

### Initializing a cubic timing parameters object

- [init](uicubictimingparameters/init%28%29.md): Initializes the object with the system’s default timing curve.
- [initWithAnimationCurve:](uicubictimingparameters/init%28animationcurve_%29.md): Initializes the object with the specified UIKit timing curve.
- [initWithControlPoint1:controlPoint2:](uicubictimingparameters/init%28controlpoint1_controlpoint2_%29.md): Initializes the object with the specified control points for a cubic Bézier curve.
- [initWithCoder:](uicubictimingparameters/init%28coder_%29.md): Creates a timing parameters object from data in an unarchiver.

### Getting the timing parameters

- [animationCurve](uicubictimingparameters/animationcurve.md): The standard UIKit animation curve to use for timing.
- [controlPoint1](uicubictimingparameters/controlpoint1.md): The first control point for the cubic Bézier curve.
- [controlPoint2](uicubictimingparameters/controlpoint2.md): The second control point of the cubic Bézier curve.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UITimingCurveProvider](uitimingcurveprovider.md)

## See Also

### Timing curves

- [UITimingCurveProvider](uitimingcurveprovider.md): An interface for providing the timing information needed to perform animations.
- [UISpringTimingParameters](uispringtimingparameters.md): The timing information for animations that mimics the behavior of a spring.
