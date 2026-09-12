> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicubictimingparameters/init()](https://developer.apple.com/documentation/uikit/uicubictimingparameters/init())

# init() (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Initializes the object with the system’s default timing curve.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

An initialized timing parameter object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to create a timing curve based on the default Core Animation timing function.

## See Also

### Initializing a cubic timing parameters object

- [init(animationCurve:)](init%28animationcurve_%29.md): Initializes the object with the specified UIKit timing curve.
- [init(controlPoint1:controlPoint2:)](init%28controlpoint1_controlpoint2_%29.md): Initializes the object with the specified control points for a cubic Bézier curve.
- [init(coder:)](init%28coder_%29.md): Creates a timing parameters object from data in an unarchiver.

# init (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Initializes the object with the system’s default timing curve.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

An initialized timing parameter object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to create a timing curve based on the default Core Animation timing function.

## See Also

### Initializing a cubic timing parameters object

- [initWithAnimationCurve:](init%28animationcurve_%29.md): Initializes the object with the specified UIKit timing curve.
- [initWithControlPoint1:controlPoint2:](init%28controlpoint1_controlpoint2_%29.md): Initializes the object with the specified control points for a cubic Bézier curve.
- [initWithCoder:](init%28coder_%29.md): Creates a timing parameters object from data in an unarchiver.
