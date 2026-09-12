> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigravitybehavior/angle](https://developer.apple.com/documentation/uikit/uigravitybehavior/angle)

# angle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The direction of the gravity vector, expressed in radians in the reference coordinate system.

## Declaration

```swift
var angle: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Modify this property when you want to change the angle of the gravity vector separately from the magnitude of that vector. The value in this property is tied to the value in the [gravityDirection](gravitydirection.md) property, so changes in one affect the other.

The default angle is `pi / 2` radians, which represents a downward force in the reference view. A value of `0` represents a force that moves items toward the right side of the reference view.

## See Also

### Configuring a gravity behavior

- [gravityDirection](gravitydirection.md): The direction and magnitude of the gravitational force, expressed as a vector.
- [magnitude](magnitude.md): The magnitude of the gravity vector.
- [setAngle(\_:magnitude:)](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the gravity vector for the behavior.

# angle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The direction of the gravity vector, expressed in radians in the reference coordinate system.

## Declaration

```objectivec
@property (nonatomic, readwrite) CGFloat angle;
```

<a id="Discussion"></a>

## Discussion

Modify this property when you want to change the angle of the gravity vector separately from the magnitude of that vector. The value in this property is tied to the value in the [gravityDirection](gravitydirection.md) property, so changes in one affect the other.

The default angle is `pi / 2` radians, which represents a downward force in the reference view. A value of `0` represents a force that moves items toward the right side of the reference view.

## See Also

### Configuring a gravity behavior

- [gravityDirection](gravitydirection.md): The direction and magnitude of the gravitational force, expressed as a vector.
- [magnitude](magnitude.md): The magnitude of the gravity vector.
- [setAngle:magnitude:](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the gravity vector for the behavior.
