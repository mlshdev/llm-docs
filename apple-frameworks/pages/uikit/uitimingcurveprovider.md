> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitimingcurveprovider](https://developer.apple.com/documentation/uikit/uitimingcurveprovider)

# UITimingCurveProvider (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An interface for providing the timing information needed to perform animations.

## Declaration

```swift
@MainActor protocol UITimingCurveProvider : NSCoding, NSCopying
```

<a id="overview"></a>

## Overview

An object that adopts the [UITimingCurveProvider](uitimingcurveprovider.md) protocol provides the timing information needed to perform animations with a [UIViewPropertyAnimator](uiviewpropertyanimator.md) object. A timing curve defines the velocity at which animated properties change to their new values over the duration of the animation. A custom timing curve provider can specify timing using the built-in UIKit curves, a cubic Bézier curve, a spring-based timing function, or a combination of timing information.

When implementing this protocol in a custom object, you must provide implementations for all of the properties. Use the [timingCurveType](uitimingcurveprovider/timingcurvetype.md) property to specify which timing information your object provides. Configure the other properties with the actual timing curve values.

## Topics

### Getting the timing information

- [timingCurveType](uitimingcurveprovider/timingcurvetype.md): The type of timing information to use.
- [cubicTimingParameters](uitimingcurveprovider/cubictimingparameters.md): The cubic timing parameters to use.
- [springTimingParameters](uitimingcurveprovider/springtimingparameters.md): The spring-based timing parameters to use.

### Constants

- [UITimingCurveType](uitimingcurvetype.md): Constants indicating the type of timing information to use.

## Relationships

### Inherits From

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)

### Conforming Types

- [UICubicTimingParameters](uicubictimingparameters.md)
- [UISpringTimingParameters](uispringtimingparameters.md)

## See Also

### Timing curves

- [UISpringTimingParameters](uispringtimingparameters.md): The timing information for animations that mimics the behavior of a spring.
- [UICubicTimingParameters](uicubictimingparameters.md): The timing information for animations in the form of a cubic Bézier curve.

# UITimingCurveProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An interface for providing the timing information needed to perform animations.

## Declaration

```objectivec
@protocol UITimingCurveProvider <NSCoding, NSCopying>
```

<a id="overview"></a>

## Overview

An object that adopts the [UITimingCurveProvider](uitimingcurveprovider.md) protocol provides the timing information needed to perform animations with a [UIViewPropertyAnimator](uiviewpropertyanimator.md) object. A timing curve defines the velocity at which animated properties change to their new values over the duration of the animation. A custom timing curve provider can specify timing using the built-in UIKit curves, a cubic Bézier curve, a spring-based timing function, or a combination of timing information.

When implementing this protocol in a custom object, you must provide implementations for all of the properties. Use the [timingCurveType](uitimingcurveprovider/timingcurvetype.md) property to specify which timing information your object provides. Configure the other properties with the actual timing curve values.

## Topics

### Getting the timing information

- [timingCurveType](uitimingcurveprovider/timingcurvetype.md): The type of timing information to use.
- [cubicTimingParameters](uitimingcurveprovider/cubictimingparameters.md): The cubic timing parameters to use.
- [springTimingParameters](uitimingcurveprovider/springtimingparameters.md): The spring-based timing parameters to use.

### Constants

- [UITimingCurveType](uitimingcurvetype.md): Constants indicating the type of timing information to use.

## Relationships

### Inherits From

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)

### Conforming Types

- [UICubicTimingParameters](uicubictimingparameters.md)
- [UISpringTimingParameters](uispringtimingparameters.md)

## See Also

### Timing curves

- [UISpringTimingParameters](uispringtimingparameters.md): The timing information for animations that mimics the behavior of a spring.
- [UICubicTimingParameters](uicubictimingparameters.md): The timing information for animations in the form of a cubic Bézier curve.
