> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigravitybehavior/gravitydirection](https://developer.apple.com/documentation/uikit/uigravitybehavior/gravitydirection)

# gravityDirection (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The direction and magnitude of the gravitational force, expressed as a vector.

## Declaration

```swift
var gravityDirection: CGVector { get set }
```

<a id="Discussion"></a>

## Discussion

The gravity vector is expressed as an *x, y* pair that represents the relative motion along the x and y axes of the reference view. A value of `1.0` corresponds to an acceleration of 1000 points / second², which is referred to as UIKit gravity and approximates the Earth’s own gravitational force. A value of `-1.0` represents the same amount of force, but in the opposite direction of the corresponding axis.

The default value of this property is the vector (`0.0, 1.0`), which represents a downward force in the reference view. Changing the [angle](angle.md) or [magnitude](magnitude.md) values also changes the value of this property.

## See Also

### Configuring a gravity behavior

- [angle](angle.md): The direction of the gravity vector, expressed in radians in the reference coordinate system.
- [magnitude](magnitude.md): The magnitude of the gravity vector.
- [setAngle(\_:magnitude:)](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the gravity vector for the behavior.

# gravityDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The direction and magnitude of the gravitational force, expressed as a vector.

## Declaration

```objectivec
@property (nonatomic, readwrite) CGVector gravityDirection;
```

<a id="Discussion"></a>

## Discussion

The gravity vector is expressed as an *x, y* pair that represents the relative motion along the x and y axes of the reference view. A value of `1.0` corresponds to an acceleration of 1000 points / second², which is referred to as UIKit gravity and approximates the Earth’s own gravitational force. A value of `-1.0` represents the same amount of force, but in the opposite direction of the corresponding axis.

The default value of this property is the vector (`0.0, 1.0`), which represents a downward force in the reference view. Changing the [angle](angle.md) or [magnitude](magnitude.md) values also changes the value of this property.

## See Also

### Configuring a gravity behavior

- [angle](angle.md): The direction of the gravity vector, expressed in radians in the reference coordinate system.
- [magnitude](magnitude.md): The magnitude of the gravity vector.
- [setAngle:magnitude:](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the gravity vector for the behavior.
