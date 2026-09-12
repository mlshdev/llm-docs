> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicubictimingparameters/init(coder:)](https://developer.apple.com/documentation/uikit/uicubictimingparameters/init(coder:))

# init(coder:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a timing parameters object from data in an unarchiver.

## Declaration

```swift
init?(coder: NSCoder)
```

## See Also

### Initializing a cubic timing parameters object

- [init()](init%28%29.md): Initializes the object with the system’s default timing curve.
- [init(animationCurve:)](init%28animationcurve_%29.md): Initializes the object with the specified UIKit timing curve.
- [init(controlPoint1:controlPoint2:)](init%28controlpoint1_controlpoint2_%29.md): Initializes the object with the specified control points for a cubic Bézier curve.

# initWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a timing parameters object from data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## See Also

### Initializing a cubic timing parameters object

- [init](init%28%29.md): Initializes the object with the system’s default timing curve.
- [initWithAnimationCurve:](init%28animationcurve_%29.md): Initializes the object with the specified UIKit timing curve.
- [initWithControlPoint1:controlPoint2:](init%28controlpoint1_controlpoint2_%29.md): Initializes the object with the specified control points for a cubic Bézier curve.
