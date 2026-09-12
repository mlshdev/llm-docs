> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicubictimingparameters/controlpoint1](https://developer.apple.com/documentation/uikit/uicubictimingparameters/controlpoint1)

# controlPoint1 (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The first control point for the cubic Bézier curve.

## Declaration

```swift
var controlPoint1: CGPoint { get }
```

<a id="Discussion"></a>

## Discussion

This parameter contains the point you specified at initialization time. If you initialized the object with a [UIView.AnimationCurve](../uiview/animationcurve.md) value instead, this property is set to [CGPointZero](../../coregraphics/cgpointzero.md).

## See Also

### Getting the timing parameters

- [animationCurve](animationcurve.md): The standard UIKit animation curve to use for timing.
- [controlPoint2](controlpoint2.md): The second control point of the cubic Bézier curve.

# controlPoint1 (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The first control point for the cubic Bézier curve.

## Declaration

```objectivec
@property (nonatomic, readonly) CGPoint controlPoint1;
```

<a id="Discussion"></a>

## Discussion

This parameter contains the point you specified at initialization time. If you initialized the object with a [UIViewAnimationCurve](../uiview/animationcurve.md) value instead, this property is set to [CGPointZero](../../coregraphics/cgpointzero.md).

## See Also

### Getting the timing parameters

- [animationCurve](animationcurve.md): The standard UIKit animation curve to use for timing.
- [controlPoint2](controlpoint2.md): The second control point of the cubic Bézier curve.
