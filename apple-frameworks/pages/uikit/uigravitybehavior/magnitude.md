> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigravitybehavior/magnitude](https://developer.apple.com/documentation/uikit/uigravitybehavior/magnitude)

# magnitude (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The magnitude of the gravity vector.

## Declaration

```swift
var magnitude: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Modify this property when you want to change the magnitude of the gravity vector separately from the angle of that vector. A magnitude value of `1.0` represents an acceleration of 1000 points / second² at the specified angle, which roughly approximates the force of Earth’s gravity. The value in this property is tied to the value in the [gravityDirection](gravitydirection.md) property, so changes in one affect the other.

The default value of this property is `1.0`.

> **Important**

>  Setting the value of this property to `0.0` creates the vector (`0.0`, `0.0`) and resets the [angle](angle.md) property to `0.0` radians. If you make subsequent changes to this property, also remember to update the [angle](angle.md) property.

## See Also

### Configuring a gravity behavior

- [gravityDirection](gravitydirection.md): The direction and magnitude of the gravitational force, expressed as a vector.
- [angle](angle.md): The direction of the gravity vector, expressed in radians in the reference coordinate system.
- [setAngle(\_:magnitude:)](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the gravity vector for the behavior.

# magnitude (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The magnitude of the gravity vector.

## Declaration

```objectivec
@property (nonatomic, readwrite) CGFloat magnitude;
```

<a id="Discussion"></a>

## Discussion

Modify this property when you want to change the magnitude of the gravity vector separately from the angle of that vector. A magnitude value of `1.0` represents an acceleration of 1000 points / second² at the specified angle, which roughly approximates the force of Earth’s gravity. The value in this property is tied to the value in the [gravityDirection](gravitydirection.md) property, so changes in one affect the other.

The default value of this property is `1.0`.

> **Important**

>  Setting the value of this property to `0.0` creates the vector (`0.0`, `0.0`) and resets the [angle](angle.md) property to `0.0` radians. If you make subsequent changes to this property, also remember to update the [angle](angle.md) property.

## See Also

### Configuring a gravity behavior

- [gravityDirection](gravitydirection.md): The direction and magnitude of the gravitational force, expressed as a vector.
- [angle](angle.md): The direction of the gravity vector, expressed in radians in the reference coordinate system.
- [setAngle:magnitude:](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the gravity vector for the behavior.
