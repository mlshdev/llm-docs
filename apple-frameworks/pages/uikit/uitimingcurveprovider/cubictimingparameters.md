> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitimingcurveprovider/cubictimingparameters](https://developer.apple.com/documentation/uikit/uitimingcurveprovider/cubictimingparameters)

# cubicTimingParameters (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The cubic timing parameters to use.

## Declaration

```swift
var cubicTimingParameters: UICubicTimingParameters? { get }
```

<a id="Discussion"></a>

## Discussion

Implement this property and use it to provide your custom cubic timing information. If the value of the [timingCurveType](timingcurvetype.md) property is [UITimingCurveType.builtin](../uitimingcurvetype/builtin.md), [UITimingCurveType.cubic](../uitimingcurvetype/cubic.md), or [UITimingCurveType.composed](../uitimingcurvetype/composed.md), you must return an object from this property. The object you return can specify one of the built-in UIKit curves, such as [UIView.AnimationCurve.linear](../uiview/animationcurve/linear.md), or it can specify a timing curve based on a custom Bézier path.

For more information about configuring this object, see [UICubicTimingParameters](../uicubictimingparameters.md).

## See Also

### Getting the timing information

- [timingCurveType](timingcurvetype.md): The type of timing information to use.
- [springTimingParameters](springtimingparameters.md): The spring-based timing parameters to use.

# cubicTimingParameters (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The cubic timing parameters to use.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UICubicTimingParameters * cubicTimingParameters;
```

<a id="Discussion"></a>

## Discussion

Implement this property and use it to provide your custom cubic timing information. If the value of the [timingCurveType](timingcurvetype.md) property is [UITimingCurveTypeBuiltin](../uitimingcurvetype/builtin.md), [UITimingCurveTypeCubic](../uitimingcurvetype/cubic.md), or [UITimingCurveTypeComposed](../uitimingcurvetype/composed.md), you must return an object from this property. The object you return can specify one of the built-in UIKit curves, such as [UIViewAnimationCurveLinear](../uiview/animationcurve/linear.md), or it can specify a timing curve based on a custom Bézier path.

For more information about configuring this object, see [UICubicTimingParameters](../uicubictimingparameters.md).

## See Also

### Getting the timing information

- [timingCurveType](timingcurvetype.md): The type of timing information to use.
- [springTimingParameters](springtimingparameters.md): The spring-based timing parameters to use.
