> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicubictimingparameters/controlpoint2

# controlPoint2 (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The second control point of the cubic Bézier curve.

## Declaration

```swift
var controlPoint2: CGPoint { get }
```

<a id="Discussion"></a>

## Discussion

This parameter contains the point you specified at initialization time. If you initialized the object with a [UIView.AnimationCurve](../uiview/animationcurve.md) value instead, this property is set to [CGPointZero](../../coregraphics/cgpointzero.md).

## See Also

### Getting the timing parameters

- [animationCurve](animationcurve.md): The standard UIKit animation curve to use for timing.
- [controlPoint1](controlpoint1.md): The first control point for the cubic Bézier curve.

# controlPoint2 (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The second control point of the cubic Bézier curve.

## Declaration

```objectivec
@property (nonatomic, readonly) CGPoint controlPoint2;
```

<a id="Discussion"></a>

## Discussion

This parameter contains the point you specified at initialization time. If you initialized the object with a [UIViewAnimationCurve](../uiview/animationcurve.md) value instead, this property is set to [CGPointZero](../../coregraphics/cgpointzero.md).

## See Also

### Getting the timing parameters

- [animationCurve](animationcurve.md): The standard UIKit animation curve to use for timing.
- [controlPoint1](controlpoint1.md): The first control point for the cubic Bézier curve.
