> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicubictimingparameters/animationcurve](https://developer.apple.com/documentation/uikit/uicubictimingparameters/animationcurve)

# animationCurve (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The standard UIKit animation curve to use for timing.

## Declaration

```swift
var animationCurve: UIView.AnimationCurve { get }
```

<a id="Discussion"></a>

## Discussion

If you initialized this object using an animation curve, this property reflects the curve you specified. If you initialized the object using the control points for a cubic Bézier curve, the value of this property is undefined.

## See Also

### Getting the timing parameters

- [controlPoint1](controlpoint1.md): The first control point for the cubic Bézier curve.
- [controlPoint2](controlpoint2.md): The second control point of the cubic Bézier curve.

# animationCurve (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The standard UIKit animation curve to use for timing.

## Declaration

```objectivec
@property (nonatomic, readonly) UIViewAnimationCurve animationCurve;
```

<a id="Discussion"></a>

## Discussion

If you initialized this object using an animation curve, this property reflects the curve you specified. If you initialized the object using the control points for a cubic Bézier curve, the value of this property is undefined.

## See Also

### Getting the timing parameters

- [controlPoint1](controlpoint1.md): The first control point for the cubic Bézier curve.
- [controlPoint2](controlpoint2.md): The second control point of the cubic Bézier curve.
