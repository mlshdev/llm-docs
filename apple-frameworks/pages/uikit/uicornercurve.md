> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicornercurve](https://developer.apple.com/documentation/uikit/uicornercurve)

# UICornerCurve (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The corner curve to apply to a view.

## Declaration

```swift
enum UICornerCurve
```

## Topics

### Choosing a corner style

- [UICornerCurve.automatic](uicornercurve/automatic.md): Selects the corner style automatically.
- [UICornerCurve.circular](uicornercurve/circular.md): Always uses a circular corner style.
- [UICornerCurve.continuous](uicornercurve/continuous.md): Always uses a continuous corner style.

### Initializers

- [init(rawValue:)](uicornercurve/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# UICornerCurve (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The corner curve to apply to a view.

## Declaration

```objectivec
enum UICornerCurve : NSInteger;
```

## Topics

### Choosing a corner style

- [UICornerCurveAutomatic](uicornercurve/automatic.md): Selects the corner style automatically.
- [UICornerCurveCircular](uicornercurve/circular.md): Always uses a circular corner style.
- [UICornerCurveContinuous](uicornercurve/continuous.md): Always uses a continuous corner style.

## See Also

### Creating a hover shape

- [rectShape](uishape-c.class/rectshape.md): Creates a rectangular shape.
- [capsuleShape](uishape-c.class/capsuleshape.md): Creates a capsule shape, a rounded rectangle with a corner radius equal to half the length of the rectangle’s smallest edge.
- [circleShape](uishape-c.class/circleshape.md): Creates a circular shape, with a radius equal to half the length of the frame rectangle’s smallest edge.
- [rectShapeWithCornerRadius:](uishape-c.class/rectshapewithcornerradius_.md): Creates a rectangular shape with rounded corners, using the provided corner radius.
- [rectShapeWithCornerRadius:cornerCurve:](uishape-c.class/rectshapewithcornerradius_cornercurve_.md): Creates a rectangular shape with rounded corners, using the provided corner radius and corner curve.
- [rectShapeWithCornerRadius:cornerCurve:maskedCorners:](uishape-c.class/rectshapewithcornerradius_cornercurve_maskedcorners_.md): Creates a rectangular shape with rounded corners, using the provided corner radius, corner curve, and rectangle corners.
- [fixedRectShapeWithRect:](uishape-c.class/fixedrectshapewithrect_.md): Creates a fixed rectangular shape that uses the provided rectangle as its shape, regardless of the frame that contains it.
- [fixedRectShapeWithRect:cornerRadius:](uishape-c.class/fixedrectshapewithrect_cornerradius_.md): Creates a fixed rectangular shape with the provided corner radius, using the provided rectangle as its shape.
- [fixedRectShapeWithRect:cornerRadius:cornerCurve:maskedCorners:](uishape-c.class/fixedrectshapewithrect_cornerradius_cornercurve_maskedcorners_.md): Creates a fixed rectangular shape with the provided corner radius and corner curve, using the provided rectangle as its shape.
